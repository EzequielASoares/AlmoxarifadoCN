import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'cometanordestino' && password === 'cometa123') {
      setError('');
      onLogin();
      navigate('/home') 
    } else {
      setError('Credenciais inválidas, tente novamente.');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>testando</h1>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Digite O Usuário'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Digite A Senha'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon'/>
        </div> 

        {error && <div className='error-message'>{error}</div>}

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
