import { NavLink } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Login, CoPresent } from '@mui/icons-material';

export default function NavbarAuth() {
  return (
    <div>
      <Stack spacing={2} direction="row">
      <Button color="inherit" variant="outlined" endIcon={<CoPresent />}>
          <NavLink to="/register"
            style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '600',
        }
      : {
          color: '#000000',
          textDecoration: 'none',
        }
  }>Registration</NavLink>
      </Button>
      <Button color="inherit" variant="outlined" endIcon={<Login />}>
          <NavLink to="/login"
            style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '600',
        }
      : {
          color: '#000000',
          textDecoration: 'none',
        }
  }>Login</NavLink>
      </Button>
    </Stack>
    </div>
  )
}