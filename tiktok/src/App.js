import axios from './axios';
import React,{useEffect,useState} from 'react';
import './App.css';
import Video from './Video';
//import video from './videos/video.mp4';
//import chivita from './videos/chivita.mp4';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    async function fetchPosts(){
      const response = await axios.get('/v2/post');
      setVideos(response.data);

      return response;
    }
      fetchPosts();
  }, []);
  console.log(videos)
  return (
    <div className='app'>
        
        <div className="app_videos">
        {videos.map(({url, channel, description, song, likes, shares, messages}) => (
          <Video
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
           messages={messages} 
           shares={shares}

          />
        ))
        }
       
        </div>
       

  {/* video footer */}
   {/*  videosidebar */} 
      </div>
  );
}

export default App;
