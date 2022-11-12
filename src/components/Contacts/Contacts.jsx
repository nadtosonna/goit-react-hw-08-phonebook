import Filter from "components/Filter/Filter";
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { getFilteredContacts, getState } from "redux/contacts/contacts-selectors";
import { getFilter } from "redux/filter/filter-selectors";
import { addContact, removeContact } from "shared/api/contacts";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import styled from './Contacts.module.css';

const Contacts = () => {
    const contacts = useSelector(getFilteredContacts);
    const { loading, error } = useSelector(getState);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onAddContact = data => {
        const action = addContact(data);
        console.log(data);
        dispatch(action);
    };
    const onRemoveContact = id => {
        dispatch(removeContact(id));
    };

    return (
        <div>
            <div className={styled.wrapper}>
                <h2>Add contact</h2>
                <ContactForm onSubmit={onAddContact} />
            </div>
            <div className={styled.filter}>
                <h2>Filter contacts</h2>
                <Filter filter = {filter} />
            </div>
            <div className={styled.contactList}>
                <h2 className={styled.listTitle}>Contact List</h2>
                <ContactList contacts={contacts} removeContact={onRemoveContact} />
            </div>
        </div>
    )
}

export default Contacts;

