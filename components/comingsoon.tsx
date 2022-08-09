import styles from './header.module.scss';
import { comingSoonTheme } from '../styles/MuiThemes'
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

export default function ComingSoon() {
    return (
        <ThemeProvider theme={comingSoonTheme}>
            <div className={styles.content}>
                <Typography textAlign="center" variant="h1">
                    Portfolio Coming Soon!
                </Typography>
            </div>
        </ThemeProvider >
    )
}
