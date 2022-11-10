import css from './HomePage.module.css';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <div className={css.home}>

      <Typography variant="h2">Phonebook</Typography>
      <Typography variant="overline" gutterBottom>Add and manage your contacts in one convinient application. <br />
        Please create an account or log in to use the Phonebook!</Typography>
    </div>
  );
};

export default HomePage;