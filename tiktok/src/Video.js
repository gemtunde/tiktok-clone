import React, {useRef, useState} from 'react';
//import video from './videos/video.mp4';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, shares, messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
    // if video is playing
    //stop it
    if(playing){
        videoRef.current.pause();
        setPlaying(false);
    }

    //otherwise if its not playing...
    //play it
    else{
        videoRef.current.play();
        setPlaying(true);
    }

}

    return (
        <div className='video'>
            <video 
            onClick = {handleVideoPress}
            className='video_player' 
            loop 
            ref = {videoRef}
            type='video/mp4' 
            //src={video}
            src={url}>

            </video>

            {/* videofooter */}
            <VideoFooter 
            channel={channel}
            description={description}
            song={song}
            />

            {/* video sidebar */}
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    )
}

export default Video
