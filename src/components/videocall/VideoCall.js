import React, { Component } from 'react'
import { Stream } from 'stream';


class VideoCall extends Component{
    constructor(props){
        super(props)
        this.localVideoRef = React.createRef();
    }



    render(){
        const constraint = {video:true}
        
        navigator.getUserMedia = ( navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
             const success  =(stream)=>{
                    this.localVideoRef.current.srcObject = stream
                }
                const failure  =(e)=>{
                   console.log("error",e);
                }
        
                navigator.getUserMedia(constraint,success,failure)
        return(
            <div>
                <video ref={this.localVideoRef} autoPlay></video>

            </div>
        )
    }
}
export default VideoCall;