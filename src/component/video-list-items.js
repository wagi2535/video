import React from 'react';
// place ES syntic as ({video}) is same as const video = props.video
const VideoListItems = ({video, onVideoSelect}) => {
    console.log(video)
    const imageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item "> 
            <div className="video-list media">
                <div className= "media-left">
                    <img className="media-object" src={imageURL} alt="video"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                     {videoTitle}
                    </div>
                </div>
            </div>
        </li>
        )
    
}

export default VideoListItems;