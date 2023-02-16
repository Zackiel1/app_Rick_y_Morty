export function validation (userData) {
    let errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexPassword = /^((?!.*[\s])(?=.*[a-z])(?=.*\d).{6,10})/;

    if(!userData.username){
        errors.username = 'Por favor, complete los dos campo.';
    } else if(!regexEmail.test(userData.username)){
        errors.username = 'Email Incorrecto.';
    }
    
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La clave tiene que ser entre 6 y 10 caracteres.';
    } else if(!regexPassword.test(userData.password)){
        errors.password = 'La clave tiene que tener al menos una letra.';
    }

    return errors;
}