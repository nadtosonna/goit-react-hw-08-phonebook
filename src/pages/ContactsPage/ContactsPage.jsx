import { Navigate } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts"
import useAuth from "../../shared/hooks/useAuth";


const ContactsPage = () => {
    // const isLogin = useAuth();

    // if (!isLogin) {
    //     return <Navigate to="/login" />
    // }

    return (
        <div className="container">
            <h1 className="page-title">My contacts</h1>
            {/* <Books /> */}
        </div>
    )
}

export default ContactsPage;