import { useSelector } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import styled from './ContactList.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({removeContact}) => {
    const contacts = useSelector(getFilteredContacts);
    return (
        <>
            <table className={styled.table}>
                <thead className={styled.head}>
                <td>Name</td>
                <td>Phone Number</td>
            </thead>
            {contacts.length > 0 && contacts.map(({ name, number, id }) => {
                return (
                    <tr key={id} className={styled.row}>
                        <td className={styled.cell}>{name}</td>
                        <td className={styled.cell}>{number}</td>
                        <div>
                            <IconButton type="submit" color="primary" aria-label="delete" onClick={() => removeContact(id)} className={styled.btn}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </tr>
                )
            })}
            </table>
            
        </>
    )
}
export default ContactList;