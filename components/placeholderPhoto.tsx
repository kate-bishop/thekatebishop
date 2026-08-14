import Image from 'next/image';
import styles from './placeholderPhoto.module.scss';

interface PlaceholderPhotoProps {
    src?: string;
    alt: string;
    label: string;
    width: number;
    height: number;
    shape?: 'circle' | 'rect';
    className?: string;
}

const PlaceholderPhoto: React.FC<PlaceholderPhotoProps> = ({
    src,
    alt,
    label,
    width,
    height,
    shape = 'rect',
    className,
}) => {
    const shapeClass = shape === 'circle' ? styles.circle : '';

    if (src) {
        return (
            <div
                className={`${styles.placeholder} ${shapeClass} ${className || ''}`}
                style={{ width, height, padding: 0, border: 'none' }}
            >
                <Image src={src} alt={alt} width={width} height={height} className={styles.image} />
            </div>
        );
    }

    return (
        <div
            role="img"
            aria-label={alt}
            className={`${styles.placeholder} ${shapeClass} ${className || ''}`}
            style={{ width, height }}
        >
            {label}
        </div>
    );
}

export default PlaceholderPhoto;
