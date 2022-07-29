import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  useMediaQuery,
} from '@mui/material';
import { getUserFromLocal } from './reducers/userReducer';
import { updateTheme } from './reducers/themeReducer';
import Notification from './components/Notification';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Users from './components/Users';
import User from './components/User';

const path = {
  home: '/',
  users: '/users',
  user: '/users/:id',
  blogs: '/blogs',
  blog: '/blogs/:id',
  login: '/login',
};

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const notification = useSelector((state) => state.notification);
  const currentTheme = useSelector((state) => state.theme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const initialTheme = prefersDarkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  // set current theme
  useEffect(() => {
    dispatch(updateTheme(initialTheme));
  }, [dispatch, initialTheme]);

  // check for logged in user when page loads
  useEffect(() => {
    dispatch(getUserFromLocal());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Menu
          loginPath={path.login}
          blogsPath={path.blogs}
          usersPath={path.users}
        />
        {notification && <Notification />}
        <h1>Blogs</h1>

        <Routes>
          <Route path={path.home} element={<BlogList />} />
          <Route
            path={path.login}
            element={user ? <Navigate to={'/'} /> : <LoginForm />}
          />
          <Route path={path.blogs} element={<BlogList />} />
          <Route path={path.blog} element={<BlogDetail />} />
          <Route path={path.users} element={<Users />} />
          <Route path={path.user} element={<User />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
