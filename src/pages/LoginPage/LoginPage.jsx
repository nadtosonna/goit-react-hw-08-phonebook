import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { isLogged } from "../../redux/auth/auth-selectors";

import { Navigate } from "react-router-dom";

import LoginForm from '../../components/LoginForm/LoginForm';
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogged);

  const onLogin = (data) => {
    dispatch(login(data));
  }

  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }
  
  return (
    <div className={styles.container}>
      <h1>Login page</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}