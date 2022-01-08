import React from "react";
import Data from '../data/Data';
import Product from "./Product";
import Contact from "./Contact";

function Content({isContentDisplayed ,setIsContentDisplayed}){
    if (isContentDisplayed===0){
        return (
            <p>image pizzeria</p>
        )
        } else if(isContentDisplayed===1){
            return(
                <ul>
                    <div className="productlist">
                        {Data.filter(product=>product.type ==='pizza').map((product)=><Product product={product} key={product.id}/>)}
                    </div>
                </ul>
            )
        }else if(isContentDisplayed===2){
            return(
                <ul>
                    <div className="productlist">
                        {Data.filter(product=>product.type ==='burger').map((product)=><Product product={product} key={product.id}/>)}
                    </div>
                </ul>
            )
        } else if(isContentDisplayed===3){
            return(
            <Contact/>
            )
        }
}
export default Content;