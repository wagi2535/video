import React from 'react';
import VideoListItems from "./video-list-items";

const VideoList =(props) =>{
    const VideoItems = props.videos.map((video) => {
        return (
        
            <VideoListItems 
            onVideoSelect={props.onVideoSelect}
            key ={video.etag} 
            video = {video} />)
    })
    return (
        <ul className="col-4 list-group">
        {VideoItems}
        </ul>
      
        )
}

export default VideoList 