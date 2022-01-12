import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import { connect } from 'react-redux';
import {login} from "../Redux/auth-reducer";
import {AppStateType} from "../Redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        type="text"
                        placeholder={'Email'}
                        component={Input} name={'email'}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        type="password"
                        placeholder={'Password'}
                        component={Input} name={'password'}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        type={"checkbox"}
                        component={Input}
                        name={'rememberMe'}
                    /> remember me, dude!
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

export const Login = (props:any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login({...formData})
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

// export default connect<any, any, {}, AppStateType>(null, {login})(Login);
export default Login