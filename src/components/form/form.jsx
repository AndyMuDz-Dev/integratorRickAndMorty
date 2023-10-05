import React, { useState } from 'react';
import style from './form.module.css';
import validator from './validation';

const Form = (props) => {
  const { login, email, password } = props;
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChangue = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [property]: value });
    validator({ ...userData, [property]: value }, setErrors, errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email === '' || userData.password === '') {
      return alert(
        'Los campos estan vacios, por favor rellenar para continuar con el registro'
      );
    }

    if (userData.email !== email || userData.password !== password) {
      alert('Error en correo electronico o contraseña');
    }

    // Si los campos no están vacíos, continuar con el proceso de inicio de sesión
    login(userData);
    setUserData({ email: '', password: '' });
  };

  return (
    <div className={style.container}>
      <form className={style.styleForm}>
        <span className={style.iniciarSe}>Iniciar Sesion</span>
        <div className={style.styleInputs}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            onChange={handleChangue}
            value={userData.email}
            className={style.inputEmail}
          />

          <span className={errors.email && style.errorEmail}>
            {errors.email}
          </span>

          <label htmlFor='password'>Password:</label>
          <input
            className={style.inputPass}
            type='password'
            name='password'
            onChange={handleChangue}
            value={userData.password}
          />

          <span className={errors.password && style.errorPass}>
            {errors.password}
          </span>

          <button
            type='submit'
            className={style.buttonSubmit}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
