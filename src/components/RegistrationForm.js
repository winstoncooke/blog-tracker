import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';
import { registerUser } from '../reducers/usersReducer';
import { setNotification } from '../reducers/notificationReducer';
import { TextField, Button } from '@mui/material';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useField('text');
  const name = useField('text');
  const password = useField('password');

  const handleForm = (event) => {
    event.preventDefault();

    const passwordMinLength = 6;

    if (name.props.value === '') {
      dispatch(setNotification('Error: A name is required', 'error'));
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return null;
    }

    if (username.props.value === '') {
      dispatch(setNotification('Error: A username is required', 'error'));
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return null;
    }

    if (password.props.value === '') {
      dispatch(setNotification(`Error: A password is required`, 'error'));
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return null;
    }

    if (password.props.value.length < passwordMinLength) {
      dispatch(
        setNotification(
          `Error: password is shorter than the minimum allowed length (${passwordMinLength})`,
          'error'
        )
      );
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return null;
    }

    dispatch(
      registerUser({
        username: username.props.value,
        name: name.props.value,
        password: password.props.value,
      })
    );

    username.reset();
    name.reset();
    password.reset();

    dispatch(
      setNotification('Registration succesful! Please login.', 'success')
    );
    setTimeout(() => {
      setNotification(null);
    }, 5000);

    navigate('/login');
  };

  return (
    <div>
      <h3>Sign up for an account</h3>

      <form on onSubmit={handleForm}>
        <div>
          <TextField label='Name' {...name.props} />
        </div>
        <br></br>
        <div>
          <TextField label='Username' {...username.props} />
        </div>
        <br></br>
        <div>
          <TextField label='Password' {...password.props} />
        </div>
        <br></br>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          className='form'
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
