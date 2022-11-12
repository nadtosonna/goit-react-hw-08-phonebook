import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import styled from './ContactList.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeContact } from "../../../redux/contacts/contacts-operations";

const ContactList = ({}) => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = id => {
        dispatch(removeContact(id));
    };

    return (
        <>
            <table className={styled.table}>
                <thead className={styled.head}>
                <td>Name</td>
                <td>Phone Number</td>
                </thead>
            {contacts && contacts.map(({ name, number, id }) => {
                return (
                    <tr key={id} className={styled.row}>
                        <td className={styled.cellName}>{name}</td>
                        <td className={styled.cellNumber}>{number}</td>
                        <div>
                            <IconButton type="submit" color="primary" aria-label="delete" onClick={() => onRemoveContact(id)} className={styled.btn}>
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