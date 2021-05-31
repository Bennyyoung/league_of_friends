import * as Yup from 'yup';

export const defaultValues = {
 fullName: '',
 email: '',
 phone: '',
 password: '',
 userName: '',
 verifyPassword: '',
};

export const validationSchema = Yup.object().shape({
 fullName: Yup.string().required('Required').min(4, 'Must at least 4 characters'),
 email: Yup.string().email('Invalid email address').required('Required'),
 phone: Yup.number().required('Required').min(10, 'Must be at least 10 characters'),
 password: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
 verifyPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords much match'),
 userName: Yup.string().required('Required').matches(/^\S*$/, 'No spaces').min(3, 'Must be at least 3 characters')
}); 