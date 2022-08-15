import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { aboutTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';

export default function About() {
    return (
        <ThemeProvider theme={aboutTheme}>
            <div className={styles.content}>
                <Grid container direction="column" spacing={0}>
                    <Grid item>
                        <Typography variant="h1">MEET KATE</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" display="inline">
                            Kate is a UX-obsessed Front-End Engineer with over 5 years of experience
                        </Typography>
                        <Typography variant="subtitle1" display="inline" className={styles.highlight}>
                            &nbsp;creating delightful user experiences and translating design into resilient interfaces
                        </Typography>
                        <Typography variant="subtitle1" display="inline">
                            . She has experience in several industries, including ecommerce, insurance, education, finance, and healthcare.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ marginTop: '2rem' }}>
                            KATE'S SKILLS INCLUDE...
                        </Typography>
                        <Typography variant="subtitle1">
                            React (JavaScript & TypeScript), Next.js, User Experience Design, Design Thinking Frameworks, Sketch, Figma
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
