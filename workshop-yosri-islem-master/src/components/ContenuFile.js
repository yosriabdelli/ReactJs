import React from 'react';
import imageInSrc from "../images/pic.jpg";
import ReactPlayer from 'react-player';




const TextFile = () => {
  return (
    <section id="contenu">
        
        <div style={{border:'solid 1px black',maxWidth :'100vw',margin:'0 0 20px 0',paddingBottom:'30px'}}>
            <h1 className={"title red"}>Your name here</h1><br/>
            <div className={"inner"}>
                <img src={imageInSrc} /><br/>
                <img src="/images/imageInPublic.jpg" />
            </div>
            
        </div>
        <ReactPlayer url='https://www.youtube.com/watch?v=oUFJJNQGwhk' style={{width:'320px', height:'240px',margin:'0 auto'}} />
    </section>
  );
};

export default TextFile;

