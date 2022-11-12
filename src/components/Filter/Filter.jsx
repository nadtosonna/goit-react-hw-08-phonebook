import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';
import { TextField } from "@mui/material";
import styled from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

     const onHandleChange = (event) => {
        dispatch(setFilter(event.currentTarget.value.trim()));
    }

    return (
        <div className={styled.filter}>
            <TextField
            label="Filter contacts"
            type="text"
            name="filter"
            value={filter}
            onChange={onHandleChange}
            required
            variant="outlined"
            size="small"
            placeholder="Enter contact name..."
          />
        </div>
    )
}
export default Filter;