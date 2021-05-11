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
 country: Yup.string()
  .oneOf(['Nigeria', 'Afganistan', 'Albania', 'Algeria', 'America Samao', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia & Herzegovina', 'Botswan', 'British Indian Ocean Ter', 'British', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands', 'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote DIvoire', 'Croati', 'Cuba', 'Curaco', 'Cyprus', 'Czech Rebuplic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falklan Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Hawaii', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'Indonesia', 'India', 'Iran', 'Iraq', 'Ireland', 'Isle o Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembosurg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritus', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles, "Netherlands', 'Nevis', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakist', 'Palau Island', 'Palestina', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Phillipines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius', 'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'St Pierre & Miquelon', 'St Vincent & Grenadines', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapole', 'Slovakia', 'Sloven', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda', 'United Kingdom', 'Ukraine', 'United Arab Emirates', 'United State of America', 'Uraguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virgin Islands (Brit)', 'Virgin Islands (USA)', 'Wake Island', 'Wallis & Futana Is', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
  ])
  .required('Required').matches(/^\S*$/, 'No spaces').min(3, 'Must be at least 3 characters'),

 subject: Yup.string().required('Required').min(3, 'Must be at least 3 characters')
});