import React from 'react';
import styles from './formControl.module.css'


export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "") }>
            <div>
                <textarea {...props} {...input}>{}</textarea>
            </div>

            {hasError && <span className={styles.error}>{meta.error}</span>}

        </div>
    )
}