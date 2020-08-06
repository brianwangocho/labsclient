import React, { useState, useEffect, useRef } from 'react'
import './videocall.css'
import io from "socket.io-client";
import Peer from "simple-peer";
import { object } from 'prop-types';


export default function Websocket(){
const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(()=>{
    //   connect to remote server
      socket.current = io.connect("https://evening-chamber-91386.herokuapp.com/")
        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(
            stream=>{
                setStream(stream);
                if(userVideo.current){
                    userVideo.current.srcObject= stream;
                }
            }
        )

        socket.current.on("yourId",(id)=>{
            setYourID(id)
        })
        socket.current.on("allUsers ", (users) => {
            console.log(`the key is ${users.toString()}`)
            
            setUsers(users);
          })

        socket.current.on("hallo",(data)=>{
            setReceivingCall(true)
            setCaller(data.from)
            setCallerSignal(data.signal)
        })

  },[])
//   call someone
function callPeer(id){
// CREATE A PEER OBJECT
const peer = new Peer({
    initiator:true,
    trickle:false,
    stream:stream
});
/// create the connection or handshake
    peer.on("signal",data=>{
        socket.current.emit("callUser",{
        userToCall:id,
        signalData:data,
        from:yourID})
        })

        peer.on("stream",stream=>{
            if(partnerVideo.current){
                partnerVideo.current.srcObject=stream;
            }
        })
        ///give back the signal
        socket.current.on("callAccepted",signal=>{
            setCallAccepted(true)
            peer.signal(signal)
        })
    }
    function acceptCall() {
        setCallAccepted(true);
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream: stream,
        });
        peer.on("signal", data => {
          socket.current.emit("acceptCall", { signal: data, to: caller })
        })
    
        peer.on("stream", stream => {
          partnerVideo.current.srcObject = stream;
        });
    
        peer.signal(callerSignal);
      }

  let UserVideo;
  if (stream) {
    UserVideo = (
        // muted makes the video silent
      <video playsInline muted ref={userVideo} autoPlay />
    );
  }
  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <video playsInline ref={partnerVideo} autoPlay />
    );
  }
  
  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }




    return(
        <div>
            {UserVideo}
            {PartnerVideo}
          
            {Object.keys(users).map(key => {
               console.log("see the keys");
               console.log("see the keys"+key);

                if (key === yourID) {
                    return (<h1>{key}</h1>);
                }
                return (
                    <button onClick={() => callPeer(key)}>Call {key}</button>
                );
        })
        }
            
         
        <div>
            {incomingCall}
        </div>
          
        
        </div>
    )
}