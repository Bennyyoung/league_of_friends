import * as Yup from 'yup';

export const defaultValues = {
 fullName: '',
 email: '',
 phone: '',
 password: '',
 verifyPassword: '',
 userName: '',
 DoB:''
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
 fullName: Yup.string().required('Required').min(4, 'Must at least 4 characters'),
 email: Yup.string().email('Invalid email address').required('Required'),
 phone: Yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
 password: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
 userName: Yup.string().required('Required').matches(/^\S*$/, 'No spaces').min(3, 'Must be at least 3 characters'),
 verifyPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords much match'),
 DoB: Yup.date()
}); 