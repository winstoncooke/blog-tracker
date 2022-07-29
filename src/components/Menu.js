import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/userReducer';
import { Box, AppBar, Button, IconButton, Toolbar } from '@mui/material';
import DarkModeSwitch from './DarkModeSwitch';

const Menu = ({ loginPath, blogsPath, usersPath }) => {
  const logoutStyle = {
    fontSize: 10,
  };

  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" component={Link} to={blogsPath}>
            blogs
          </Button>
          <Button color="inherit" component={Link} to={usersPath}>
            users
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <DarkModeSwitch />
          <IconButton edge="end" color="primary" aria-label="menu"></IconButton>
          {currentUser ? (
            <div>
              <strong>{currentUser.name}</strong>
              <Button
                color="inherit"
                type="submit"
                className="logoutButton"
                onClick={handleLogout}
              >
                <div style={logoutStyle}>(Logout)</div>
              </Button>
            </div>
          ) : (
            <Button color="inherit" component={Link} to={loginPath}>
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
