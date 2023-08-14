import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css'

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = e => {
      const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        value={filter}
        onChange={changeFilterHandler}
        type="text"
        name="filter"
      />
    </label>
  );
}

export default Filter;

