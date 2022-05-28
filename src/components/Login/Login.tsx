import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/formControls/formControl.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        type="text"
                        placeholder={"Email"}
                        component={Input} name={"email"}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        type="password"
                        placeholder={"Password"}
                        component={Input} name={"password"}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        type={"checkbox"}
                        component={Input}
                        name={"rememberMe"}
                    /> remember me, dude!
                </div>
                {error &&<div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
type mapStateToPropsType = {
    isAuth: boolean | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export default connect<mapStateToPropsType, any, {}, AppStateType>(mapStateToProps, {login})(Login);

