import React from 'react'
import {Link} from 'react-router-dom'
import {GenericScrollBox,ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box'; // ES6


class Messages extends React.Component {
render(){
    return(
        <div>
            <h1>Type a Message Here!</h1>
        {/* <GenericScrollBox style={{height: '200px'}} axes={ScrollAxes.Y} fastTrack={FastTrack.PAGING}>
          <div className="scroll-box__viewport">
            Place any content here.
          </div>
        </GenericScrollBox> */}
        <ScrollBox style={{height: '200px'}} axes={ScrollAxes.Y} fastTrack={FastTrack.PAGING}>
  Place any content here.
</ScrollBox>
        
        </div>
    
//         <div class="scroll-box scroll-box--wrapped">
//   <div class="scroll-box__track scroll-box__track--x">
//     <div class="scroll-box__handle scroll-box__handle--x"></div>
//   </div>
//   <div class="scroll-box__track scroll-box__track--y">
//     <div class="scroll-box__handle scroll-box__handle--y"></div>
//   </div>
//   <div class="scroll-box__viewport">
//     Place any content here.
//   </div>
// </div>
    )
}
}
export default Messages;