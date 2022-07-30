import { useDispatch } from 'react-redux';
import { updateFilter } from '../reducers/filterReducer';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Filter, FilterIconWrapper, StyledInputBase } from '../styles';

const BlogFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <Filter>
      <FilterIconWrapper>
        <FilterListIcon />
      </FilterIconWrapper>
      <StyledInputBase
        placeholder="Filter"
        inputProps={{ 'aria-label': 'filter' }}
        onChange={handleFilter}
      />
    </Filter>
  );
};

export default BlogFilter;
