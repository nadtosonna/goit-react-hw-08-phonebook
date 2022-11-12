import useForm from '../../shared/hooks/useForm';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import styled from './RegisterForm.module.css';

const initialState = {
    name: "",
    email: "",
    password: "",
}

const RegisterForm = ({onSubmit}) => {
    const {state, onHandleChange, onHandleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password} = state;

    return (
        <form onSubmit={onHandleSubmit}>
            <Stack spacing={2}>
                <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
            required
            variant="outlined"
            size="small"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
            placeholder="example@mail.com"
            required
            variant="outlined"
            size="small"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            placeholder="At least 7 characters"
            required
            variant="outlined"
            size="small"
          />
            </Stack>
            <Button className={styled.btn}
                variant="contained"
                onClick={onHandleSubmit}>
                Registration
            </Button>
        </form>
    )
}

export default RegisterForm;