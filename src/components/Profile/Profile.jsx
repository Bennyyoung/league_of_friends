import { Fragment } from 'react';
// import dayjs from 'dayjs
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import MuiLink from '@material/core/Link';
// import CalendarToday from '@material-ui/icons/CalenderToday';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '20px',
  },
  profile: {
    '&.image-wrapper': {
      textAlign: 'center',
      postion: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%',
      },
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFir: 'cover',
      maxWidth: '100%',
      borderRadius: '50%',
    },
    '& .profile.details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle',
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0',
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px',
      },
    },
  },
}));

export const Profile = () => {
 const classes = useStyles();
  return (
  <Paper className={classes.paper}>
   <div className={classes.profile}>
    <div className="profile-image">
     <img alt='profile'/>
    </div>
    <hr />
    <div className="profile-details">
     <Fragment>Hello</Fragment>
    </div>
   </div>
  </Paper>
  )
};
