import { VideoPlayer } from 'components';
import { Options } from 'components';
import { Notifications } from 'components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

export const VideoChat = () => {
  const classes = useStyles();

  return (
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
  );
};
