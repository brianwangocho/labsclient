import React from 'react'
import Chat from "./chat"


function Chats(){

    return(
        <div>
        
            <Chat
            name="Dwight"
            message="Met a dentist called krentist"
            timestamp="35 minutes ago"
            profilePic="https://img1.looper.com/img/gallery/the-untold-truth-of-dwight-schrute/intro-1562620300.jpg"
            />
             <Chat
            name="Michael Scott"
            message="I would not miss it for the world. But if something else came up I would definitely not go."
            timestamp="35 minutes ago"
            profilePic="https://cdn.pastemagazine.com/www/articles/assets_c/2019/06/HDOFFC523A1.00_03_29_23-thumb-633x357-1127384.jpg"
            />
            <Chat
            name="Ryan"
            message="drinks later ?"
            timestamp="40 minutes"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDq2h5t2LyAhh7yDVoP_x803cS9yAPSUYYeg&usqp=CAU"
            />
            </div>

    )
}
export default Chats;