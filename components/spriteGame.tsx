import { useContext, useEffect, useRef, useState } from 'react';
import styles from './spriteGame.module.scss';
import { SmallScreenContext } from './wrapper';
import { palette } from '../utils/constants';

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 420;
const FENCE_INSET = 10;
const PLAYER_RADIUS = 12;
const PLAYER_SPEED = 170;
const COIN_COLLECT_RADIUS = 20;
const WALK_FRAME_INTERVAL = 150;

type Direction = 'up' | 'down' | 'left' | 'right';
type MovementKey = 'up' | 'down' | 'left' | 'right';

interface Point {
    x: number;
    y: number;
}

interface Obstacle extends Point {
    radius: number;
}

interface Coin extends Point {
    id: number;
    collected: boolean;
}

interface GameEntity {
    y: number;
    draw: () => void;
}

const OBSTACLES: Obstacle[] = [
    { x: 100, y: 100, radius: 16 },
    { x: 540, y: 90, radius: 16 },
    { x: 80, y: 320, radius: 16 },
    { x: 560, y: 300, radius: 16 },
    { x: 320, y: 150, radius: 18 },
];

const INITIAL_COINS: Coin[] = [
    { id: 1, x: 180, y: 200, collected: false },
    { id: 2, x: 460, y: 180, collected: false },
    { id: 3, x: 320, y: 320, collected: false },
    { id: 4, x: 120, y: 380, collected: false },
    { id: 5, x: 540, y: 380, collected: false },
];

const START_POSITION: Point = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 60 };

const distance = (a: Point, b: Point): number => Math.hypot(a.x - b.x, a.y - b.y);

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number
) => {
    const spikes = 5;
    const step = Math.PI / spikes;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = i * step - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
};

const drawScene = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#8bc34a';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const stripeWidth = 40;
    ctx.fillStyle = 'rgba(255, 255, 255, .06)';
    for (let i = 0; i * stripeWidth < CANVAS_WIDTH; i++) {
        if (i % 2 === 0) {
            ctx.fillRect(i * stripeWidth, 0, stripeWidth, CANVAS_HEIGHT);
        }
    }

    ctx.strokeStyle = palette.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(FENCE_INSET, FENCE_INSET, CANVAS_WIDTH - FENCE_INSET * 2, CANVAS_HEIGHT - FENCE_INSET * 2);
};

const drawTree = (ctx: CanvasRenderingContext2D, tree: Obstacle) => {
    ctx.fillStyle = '#6d4c2f';
    ctx.fillRect(tree.x - 4, tree.y - 6, 8, 16);

    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.arc(tree.x, tree.y - 12, tree.radius, 0, Math.PI * 2);
    ctx.fill();
};

const drawCoin = (ctx: CanvasRenderingContext2D, coin: Coin, timestamp: number) => {
    if (coin.collected) return;
    const bob = Math.sin(timestamp / 300 + coin.id) * 3;
    ctx.fillStyle = '#FFD54F';
    ctx.strokeStyle = '#c9971f';
    ctx.lineWidth = 1.5;
    drawStar(ctx, coin.x, coin.y + bob, 8, 3.5);
    ctx.fill();
    ctx.stroke();
};

const drawPlayer = (
    ctx: CanvasRenderingContext2D,
    pos: Point,
    direction: Direction,
    isWalking: boolean,
    walkFrame: number
) => {
    const width = 26;
    const height = 34;
    const facingLeft = direction === 'left';
    const facing = facingLeft ? 'right' : direction;

    ctx.save();
    ctx.translate(pos.x, pos.y);
    if (facingLeft) ctx.scale(-1, 1);

    ctx.fillStyle = 'rgba(0, 0, 0, .15)';
    ctx.beginPath();
    ctx.ellipse(0, height / 2, width / 2 - 2, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    const step = isWalking && walkFrame === 1 ? 3 : 0;
    const otherStep = isWalking && walkFrame === 0 ? 3 : 0;
    ctx.fillStyle = palette.primary;
    ctx.fillRect(-width / 2 + 3, height / 2 - 14 + step, 7, 12);
    ctx.fillRect(width / 2 - 10, height / 2 - 14 + otherStep, 7, 12);

    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(-width / 2, -height / 2 + 12, width, height / 2 - 6);

    ctx.fillStyle = '#f2c39b';
    ctx.fillRect(-width / 2 + 4, -height / 2, width - 8, 16);

    if (facing !== 'up') {
        ctx.fillStyle = palette.primary;
        const eyeX = facing === 'right' ? 3 : -1;
        ctx.fillRect(eyeX, -height / 2 + 7, 3, 3);
        if (facing === 'down') {
            ctx.fillRect(eyeX - 8, -height / 2 + 7, 3, 3);
        }
    }

    ctx.restore();
};

const SpriteGame: React.FC = () => {
    const useSmallScreen = useContext(SmallScreenContext);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const posRef = useRef<Point>({ ...START_POSITION });
    const directionRef = useRef<Direction>('down');
    const movementRef = useRef({ up: false, down: false, left: false, right: false });
    const coinsRef = useRef<Coin[]>(INITIAL_COINS.map((coin) => ({ ...coin })));
    const collectedCountRef = useRef(0);
    const walkFrameRef = useRef(0);
    const walkTimerRef = useRef(0);
    const lastTimestampRef = useRef<number | null>(null);
    const frameIdRef = useRef(0);

    const [collectedCount, setCollectedCount] = useState(0);
    const [hasWon, setHasWon] = useState(false);

    const resetGame = () => {
        posRef.current = { ...START_POSITION };
        directionRef.current = 'down';
        coinsRef.current = INITIAL_COINS.map((coin) => ({ ...coin }));
        collectedCountRef.current = 0;
        setCollectedCount(0);
        setHasWon(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const collidesWithObstacles = (point: Point): boolean =>
            OBSTACLES.some((obstacle) => distance(point, obstacle) < PLAYER_RADIUS + obstacle.radius);

        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright') {
                event.preventDefault();
            }
            if (key === 'arrowup' || key === 'w') movementRef.current.up = true;
            if (key === 'arrowdown' || key === 's') movementRef.current.down = true;
            if (key === 'arrowleft' || key === 'a') movementRef.current.left = true;
            if (key === 'arrowright' || key === 'd') movementRef.current.right = true;
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (key === 'arrowup' || key === 'w') movementRef.current.up = false;
            if (key === 'arrowdown' || key === 's') movementRef.current.down = false;
            if (key === 'arrowleft' || key === 'a') movementRef.current.left = false;
            if (key === 'arrowright' || key === 'd') movementRef.current.right = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const tick = (timestamp: number) => {
            if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
            const dt = (timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;

            const { up, down, left, right } = movementRef.current;
            let vx = (right ? 1 : 0) - (left ? 1 : 0);
            let vy = (down ? 1 : 0) - (up ? 1 : 0);
            const isMoving = vx !== 0 || vy !== 0;

            if (isMoving) {
                const length = Math.hypot(vx, vy);
                vx /= length;
                vy /= length;

                directionRef.current = Math.abs(vx) > Math.abs(vy)
                    ? (vx > 0 ? 'right' : 'left')
                    : (vy > 0 ? 'down' : 'up');

                walkTimerRef.current += dt * 1000;
                if (walkTimerRef.current > WALK_FRAME_INTERVAL) {
                    walkTimerRef.current = 0;
                    walkFrameRef.current = walkFrameRef.current === 0 ? 1 : 0;
                }
            }

            const current = posRef.current;
            const minX = FENCE_INSET + PLAYER_RADIUS;
            const maxX = CANVAS_WIDTH - FENCE_INSET - PLAYER_RADIUS;
            const minY = FENCE_INSET + PLAYER_RADIUS;
            const maxY = CANVAS_HEIGHT - FENCE_INSET - PLAYER_RADIUS;

            const nextX = clamp(current.x + vx * PLAYER_SPEED * dt, minX, maxX);
            const resolvedX = collidesWithObstacles({ x: nextX, y: current.y }) ? current.x : nextX;

            const nextY = clamp(current.y + vy * PLAYER_SPEED * dt, minY, maxY);
            const resolvedY = collidesWithObstacles({ x: resolvedX, y: nextY }) ? current.y : nextY;

            posRef.current = { x: resolvedX, y: resolvedY };

            coinsRef.current.forEach((coin) => {
                if (!coin.collected && distance(posRef.current, coin) < COIN_COLLECT_RADIUS) {
                    coin.collected = true;
                }
            });
            const collectedNow = coinsRef.current.filter((coin) => coin.collected).length;
            if (collectedNow !== collectedCountRef.current) {
                collectedCountRef.current = collectedNow;
                setCollectedCount(collectedNow);
                if (collectedNow === INITIAL_COINS.length) {
                    setHasWon(true);
                }
            }

            drawScene(ctx);
            coinsRef.current.forEach((coin) => drawCoin(ctx, coin, timestamp));

            const entities: GameEntity[] = [
                ...OBSTACLES.map((obstacle) => ({ y: obstacle.y, draw: () => drawTree(ctx, obstacle) })),
                {
                    y: posRef.current.y,
                    draw: () => drawPlayer(ctx, posRef.current, directionRef.current, isMoving, walkFrameRef.current),
                },
            ];
            entities.sort((a, b) => a.y - b.y).forEach((entity) => entity.draw());

            frameIdRef.current = requestAnimationFrame(tick);
        };

        frameIdRef.current = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frameIdRef.current);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const bindTouch = (key: MovementKey) => ({
        onPointerDown: () => { movementRef.current[key] = true; },
        onPointerUp: () => { movementRef.current[key] = false; },
        onPointerLeave: () => { movementRef.current[key] = false; },
    });

    return (
        <div className={styles.gameContainer}>
            <div className={styles.hud}>
                <span className={styles.starCount}>⭐ {collectedCount}/{INITIAL_COINS.length}</span>
                <button className={styles.pillButton} onClick={resetGame}>Restart</button>
            </div>
            <div className={styles.canvasWrapper}>
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className={styles.canvas}
                />
                {hasWon && (
                    <div className={styles.winBanner}>
                        <h2 className={styles.winHeading}>You found every star!</h2>
                        <button className={styles.pillButton} onClick={resetGame}>Play again</button>
                    </div>
                )}
            </div>
            <p className={styles.instructions}>
                Use the arrow keys or WASD to walk around and collect every star.
            </p>
            {useSmallScreen && (
                <div className={styles.touchControls}>
                    <button className={`${styles.dpadButton} ${styles.dpadUp}`} {...bindTouch('up')}>▲</button>
                    <button className={`${styles.dpadButton} ${styles.dpadLeft}`} {...bindTouch('left')}>◀</button>
                    <button className={`${styles.dpadButton} ${styles.dpadRight}`} {...bindTouch('right')}>▶</button>
                    <button className={`${styles.dpadButton} ${styles.dpadDown}`} {...bindTouch('down')}>▼</button>
                </div>
            )}
        </div>
    );
};

export default SpriteGame;
