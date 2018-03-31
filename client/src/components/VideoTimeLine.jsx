import React from 'react';
import CurrentMovie from './CurrentMovie';

const VideoTimeLine = ({ list }) => (
  <div>
    {list.map(movie => <CurrentMovie movie={movie} />)}
  </div>
);

export default VideoTimeLine;