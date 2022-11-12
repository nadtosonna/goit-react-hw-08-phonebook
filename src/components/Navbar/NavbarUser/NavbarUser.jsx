import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/auth-operations";
import { getUser } from "../../../redux/auth/auth-selectors";
import Button from '@mui/material/Button';
import { Logout } from '@mui/icons-material';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
  
  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <div>{`Welcome back, ${name}!`}  <Button color="inherit" variant="outlined" onClick={onLogout} endIcon={<Logout />}>Logout</Button></div>
  )
}