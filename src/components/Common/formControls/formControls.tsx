import React from "react";
import styles from "./formControl.module.css"


const FormControl = ({input, meta: {touched, error}, Formtype, ...props}: any) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}

export const Input = (props: any) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}
