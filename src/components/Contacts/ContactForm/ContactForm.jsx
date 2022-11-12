import useForm from "shared/hooks/useForm";
import initialState from "./initialState";

import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Stack from '@mui/material/Stack';

const ContactForm = ({ onSubmit }) => {
    const { state, onHandleChange, onHandleSubmit } = useForm({ initialState, onSubmit });
    const { name, number } = state;
    
  return (

    <form onSubmit={onHandleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          variant="outlined"
          size="small"
          type="text"
          name="name"
          label="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          value={name}
          onChange={onHandleChange}
          required
        />
        <TextField
          variant="outlined"
          size="small"
          type="tel"
          name="number"
          label="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onHandleChange}
          required
        />
        <IconButton type="submit" color="primary" aria-label="add" onClick={onHandleSubmit}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Stack>
    </form>       
  )
}

export default ContactForm;