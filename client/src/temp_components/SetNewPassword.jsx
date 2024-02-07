import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react'; // Importa los iconos


const PasswordResetComponent = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateInput = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
    } else {
      setErrorMessage('');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Resetear Contraseña</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">Nueva Contraseña</label>
            <div className="relative mt-2">
      <input
        id="newPassword"
        name="newPassword"
        type={passwordVisible ? "text" : "password"} // Cambia el tipo según el estado de passwordVisible
        autoComplete="off"
        required
        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        value={newPassword}
        onChange={handleNewPasswordChange}
        onBlur={validateInput}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        {passwordVisible ? (
          <IconEyeOff color="gray" size={24} onClick={togglePasswordVisibility} />
        ) : (
          <IconEye color="gray" size={24} onClick={togglePasswordVisibility} />
        )}
      </div>
    </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirmar Nueva Contraseña</label>
            <div className="relative mt-2">
      <input
        id="confirmPassword"
        name="confirmPassword"
        type={confirmPasswordVisible ? "text" : "password"} // Cambia el tipo según el estado de passwordVisible
        autoComplete="off"
        required
        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        onBlur={validateInput}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        {confirmPasswordVisible ? (
          <IconEyeOff color="gray" size={24} onClick={toggleConfirmPasswordVisibility} />
        ) : (
          <IconEye color="gray" size={24} onClick={toggleConfirmPasswordVisibility} />
        )}
      </div>
    </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Resetear Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetComponent;