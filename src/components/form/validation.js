const validator = (data, setErrors, errors) => {
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const passwordRegex = /^(?=.*\d).{6,8}$/;

  const newErrors = { email: '', password: '' };

  //email validation

  if (!data.email) {
    newErrors.email = 'Email vacio';
  } else if (!regexEmail.test(data.email)) {
    newErrors.email = 'Email Invalido';
  } else if (data.email.length > 35) {
    newErrors.email = 'no debe contener mas de 35 caracteres';
  }

  //   password validation

  if (!data.password) {
    newErrors.password = 'Password vacio';
  } else if (!passwordRegex.test(data.password)) {
    newErrors.password =
      'Debe contener al menos un dígito y tener entre 6 y 8 caracteres';
  }

  setErrors({ ...errors, ...newErrors });
};

export default validator;
