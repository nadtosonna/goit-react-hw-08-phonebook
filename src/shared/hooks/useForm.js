import {useState} from "react";

const useForm = ({initialState, onSubmit}) => {
    const [state, setState] = useState({...initialState});

    const onHandleChange = ({target}) => {
        const {value, name} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState});
    };

    return {state, setState, onHandleChange, onHandleSubmit}
}

export default useForm;