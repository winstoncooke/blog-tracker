import { useDispatch } from 'react-redux';
import { useField } from '../hooks';
import { login } from '../reducers/userReducer';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const username = useField('text');
  const password = useField('password');

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div>
      <h3>Login to your account</h3>

      <form onSubmit={handleLogin}>
        <div>
          <TextField label="username" {...username.props} />
        </div>
        <br />
        <div>
          <TextField label="password" type="password" {...password.props} />
        </div>
        <br />
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
      <br />
      <div>
        New to Blog Tracker? <Link to={'/register'}>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
