import React from 'react';

const VideoDetails = ({video}) =>{
    if(!video){
        return <h2> loading...</h2>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
    
        <div className="video-detail col-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src ={url}> </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
        
        )
}


export default VideoDetails