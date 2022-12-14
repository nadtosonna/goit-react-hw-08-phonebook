import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import useAuth from '../../shared/hooks/useAuth';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    const isLogged = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
            </Typography>
            {isLogged ? <NavbarUser /> : <NavbarAuth />}
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;