import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="page-title">Page not found</h1>
            <Link to="/">To home page</Link>
        </div>
    )
}

export default NotFoundPage;