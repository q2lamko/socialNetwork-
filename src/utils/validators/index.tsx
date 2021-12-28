export const required = (value: any) => {
    if (value) return undefined;
    return "Field is empty"
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `max length is ${maxLength}`;
    return undefined;
}