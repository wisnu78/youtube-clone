import React from 'react';

const VideoListItem = ({video,onSelectedVideo}) => {
  //console.log(video);
  const ImageUrl = video.snippet.thumbnails.default.url;
  const Title    = video.snippet.title;
  return(
    <li onClick={()=>onSelectedVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ImageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {Title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
