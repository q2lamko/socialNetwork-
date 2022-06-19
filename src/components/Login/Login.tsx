import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/formControls/formControl.module.css"


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl})  => {
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit}>
                {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
                {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
                {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl} alt={""}/>}
                {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}

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

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: "login"})(LoginForm)
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const Login: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
type mapStateToPropsType = {
    isAuth: boolean | null
    captchaUrl: string | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect<mapStateToPropsType, any, {}, AppStateType>(mapStateToProps, {login})(Login);

