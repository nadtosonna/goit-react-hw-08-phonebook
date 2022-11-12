import Filter from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { getState } from "redux/contacts/contacts-selectors";
import { addContact } from "../../redux/contacts/contacts-operations";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import styled from './Contacts.module.css';

const Contacts = () => {
    const { loading, error } = useSelector(getState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onAddContact = data => {
        const action = addContact(data);
        dispatch(action);
    };

    return (
        <div>
            <div className={styled.wrapper}>
                <h2>Add contact</h2>
                <ContactForm onSubmit={onAddContact} />
            </div>
            <div className={styled.filter}>
                <h2>Filter contacts</h2>
                <Filter />
            </div>
            <div className={styled.contactList}>
                <h2 className={styled.listTitle}>Contact List</h2>
                {<ContactList />} 
                {loading && <Loader />}
            </div> 
            {error && <p>Ooops! Something went wrong! {error}</p>}
        </div>
    )
}

export default Contacts;

