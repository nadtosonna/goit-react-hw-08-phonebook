import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import styled from './ContactList.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeContact } from "../../../redux/contacts/contacts-operations";

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = id => {
        dispatch(removeContact(id));
    };

    return (
        <>
            {contacts && contacts.length !== 0 ?
                <table className={styled.table}>
                    <thead>
                        <tr className={styled.head}>
                        <th>Name</th>
                        <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
            {contacts.map(({ name, number, id }) => {
                return (
                    <tr key={id} className={styled.row}>
                        <td className={styled.cellName}>{name}</td>
                        <td className={styled.cellNumber}>{number}</td>
                        <td>
                        <IconButton type="submit" color="primary" aria-label="delete" onClick={() => onRemoveContact(id)} className={styled.btn}>
                            <DeleteIcon />
                        </IconButton>
                        </td>
                    </tr>
                )
            })}
                    </tbody>
           
            </table> : <p className={styled.empty}>Your Contact list is empty.</p>}
        </>
    )
}
export default ContactList;