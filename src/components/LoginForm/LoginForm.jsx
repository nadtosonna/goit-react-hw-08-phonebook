import useForm from '../../shared/hooks/useForm';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import styled from './LoginForm.module.css';

const initialState = {
    email: "",
    password: "",
}

const LoginForm = ({onSubmit}) => {
    const {state, onHandleChange, onHandleSubmit} = useForm({initialState, onSubmit});

    const {email, password} = state;

    return (
        <form onSubmit={onHandleSubmit}>
        <Stack spacing={2}>
          <TextField
            variant="outlined"
            size="small"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
            placeholder="example@mail.com"
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            placeholder="Enter your password"
            required
          />
             </Stack>
            <Button className={styled.btn} variant="contained" onClick={onHandleSubmit}>Login</Button>
        </form>
    )
}

export default LoginForm;
