import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../reducers/themeReducer';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleDarkMode = (event) => {
    event.preventDefault();
    dispatch(toggleTheme(theme));
  };

  return (
    <div>
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default DarkModeButton;
