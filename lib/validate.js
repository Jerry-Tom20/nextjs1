
export default function login_validate(values){
    const errors= {};

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }


    if(!values.password) {
        errors.password= 'Required';
    }else if(values.password.length<8 || values.password.length>20) {
        errors.password = 'Must be greater than 8 or less than 20 characters';
    }else if(values.password.includes(" ")) {
        errors.password = 'No Spaces';
    }

    return errors;

}


export function signupValidate(values){
    const errors= {};

    if(!values.username){
        errors.username = 'Required';
    }else if(values.username.includes(" ")) {
        errors.username = 'No Spaces';
    }


    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }


    if(!values.password) {
        errors.password= 'Required';
    }else if(values.password.length<8 || values.password.length>20) {
        errors.password = 'Must be greater than 8 or less than 20 characters';
    }else if(values.password.includes(" ")) {
        errors.password = 'No Spaces';
    }


    if(!values.cpassword) {
        errors.cpassword= 'Required';
    }else if(values.password!==values.cpassword){
        errors.cpassword = 'Password not same';
    }else if(values.cpassword.includes(" ")) {
        errors.cpassword = 'No Spaces';
    }

    return errors;

}