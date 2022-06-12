export type FieldValidatorType = (value: string) => string | undefined

export const required:FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Field is empty"
}

export const maxLengthCreator = (maxLength: number):FieldValidatorType => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength}`;
    return undefined;
}