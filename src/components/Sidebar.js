import React from "react";

function Sidebar({isContentDisplayed ,setIsContentDisplayed}){
    return(
        <div className="container sidebar">
            <h3> Pizza Rossi </h3>
            <ul className="container sidebarlist">
                <li><button onClick={()=>setIsContentDisplayed(1)}>Pizza</button></li>
                <li><button onClick={()=>setIsContentDisplayed(2)}>Burger </button></li>
                <li><button onClick={()=>setIsContentDisplayed(3)}>Contact </button></li>

            </ul>
        </div>
    )
}

export default Sidebar;