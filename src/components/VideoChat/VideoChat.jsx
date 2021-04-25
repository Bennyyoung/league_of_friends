import { VideoPlayer }  from 'components';
import { Options } from 'components';
import { Notifications } from 'components';

export const VideoChat = () => {
  return (
    <>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </>
  );
};
