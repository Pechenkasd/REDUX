import { useState } from 'react'
import { Button, Container,  TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './store/RegistrSlice'


const App = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users);
    const handleRegister = () => {
        if (name.trim() || password.trim() || confirmPassword.trim()) {
            setError('Все поля должны быть заполнены');
            return
        }
        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return
        }
        
        try {
            dispatch(addContact({ username: name, password }));
            setError('');
            alert('Регистрация успешна');
            setName('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            setError(err.message);
        }
    };
  return (
    <Container>
      <TextField 
                label="Name"
                variant='outlined'
                value={name}
                fullWidth
                margin='normal'
                onChange={e => setName(e.target.value)}
            />
            <TextField 
                label="Password"
                variant='outlined'
                value={password}
                fullWidth
                margin='normal'
                onChange={e => setPassword(e.target.value)}
            />
            <TextField 
                label="Password"
                variant='outline'
                value={confirmPassword}
                fullWidth
                margin='normal'
                onChange={e =>  setConfirmPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button color='primary' variant='contained' onClick={handleRegister}>
        Регистрация
      </Button>
    </Container>
  )
}

export default App
