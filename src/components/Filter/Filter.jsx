import PropTypes from 'prop-types';
import css from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
      />
  </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;