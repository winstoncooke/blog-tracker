import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../reducers/themeReducer';

const DarkModeButton = () => {
  const currentTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleDarkMode = (event) => {
    event.preventDefault();
    dispatch(toggleTheme(currentTheme));
  };

  return (
    <div>
      <Button
        color='inherit'
        type='submit'
        className='darkModeButton'
        onClick={toggleDarkMode}
      >
        {currentTheme === 'light' ? 'light' : 'dark'}
      </Button>
    </div>
  );
};

export default DarkModeButton;
