import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/auth-operations";
import { isLogged } from "../../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  return (
    <div className={css.container}>
      <h1>Registration page</h1>
      <RegisterForm onSubmit={onRegister}/>
    </div>
  )
}