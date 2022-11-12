import { Navigate } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts"
import useAuth from "../../shared/hooks/useAuth";
import styles from './ContactsPage.module.css';


const ContactsPage = () => {
    const isLogged = useAuth();
    if (!isLogged) {
        return <Navigate to="/login" />
    }

    return (
        <div className="container">
            <h1 className={styles.title}>My contacts</h1>
            <Contacts />
        </div>
    )
}

export default ContactsPage;