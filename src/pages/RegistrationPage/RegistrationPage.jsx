import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/auth-operations";

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from "./RegistrationPage.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  return (
    <div className={styles.container}>
      <h1>Registration page</h1>
      <RegisterForm onSubmit={onRegister}/>
    </div>
  )
}