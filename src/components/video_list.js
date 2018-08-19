import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const VideoList = props.videos.map((video)=>{
    return(
            <VideoListItem
              key={video.etag}
              onSelectedVideo={props.onSelectedVideo} 
              video={video} />
          )
  })

  return(
    <ul className="col-md-4 list-group">
      {VideoList}
    </ul>
  )
}

export default VideoList;
