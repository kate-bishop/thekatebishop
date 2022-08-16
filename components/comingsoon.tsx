import styles from './header.module.scss';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

export default function ComingSoon() {
    return (
        <div className={styles.content}>
            <Typography textAlign="center" variant="h1">
                Portfolio Coming Soon!
            </Typography>
        </div>
    )
}
