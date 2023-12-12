import React from "react";
import './DiscriptionBox.css'
const DiscriptionBox = ()=>{
    return(
        <div className="descriptionbox">
            <div className="discriptionbox-navigator">
                <div className="discriptionbox-nav-box">Description</div>
                <div className="discriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="discriptionbox-discription">
                <p>Some Text</p>
                <p>Another sample text</p>
            </div>
        </div>
    )
}
export default DiscriptionBox