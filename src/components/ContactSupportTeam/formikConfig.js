import * as Yup from 'yup';

export const defaultValues = {
 firstName: '',
 lastName: '',
 country: '',
 subject: '',
};

export const validationSchema = Yup.object().shape({
 firstName: Yup.string()
 .max(15, 'Must be 15 characters or less')
 .required('Required'),
lastName: Yup.string()
 .max(20, 'Must be 20 characters or less')
 .required('Required'),
 country: Yup.string().required('Required').matches(/^\S*$/, 'No spaces').min(3, 'Must be at least 3 characters'),
 subject: Yup.string().required('Required').matches(/^\S*$/, 'No spaces').min(3, 'Must be at least 3 characters')
}); 