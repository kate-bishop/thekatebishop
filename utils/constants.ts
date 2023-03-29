export type Portfolio = {
    id: string,
    title: string,
    role: string,
    date: any,
    problem: string,
    prompt: string,
    data: any
}

export const transitionTimeout = 1000
export const paletteArray = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary']
export const palette = {
    primary: '#070538',
    secondary: '#04A6BF',
    tertiary: '#E9513A',
    quaternary: '#FFDD61',
    quinary: '#FFFDF0',
    senary: '#BDDBD0'
}
export const breakpoint = {
    small: 480,
    medium: 768,
    large: 1024,
}
export enum WindowSize {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
}
