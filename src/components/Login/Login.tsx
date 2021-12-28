import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={'login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field type="text" placeholder={'password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={'input'} name={'rememberMe'}/> remember me, dude!
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;