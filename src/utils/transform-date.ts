export const transformDate = (date: string) => {
    return new Date(date).toLocaleDateString()
}