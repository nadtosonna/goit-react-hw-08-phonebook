import { useSelector } from "react-redux";

import { isLogged } from "../../redux/auth/auth-selectors";

const useAuth = () => {
    const result = useSelector(isLogged);

    return result;
}

export default useAuth;