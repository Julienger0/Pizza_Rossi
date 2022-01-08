import React from "react";

function Product({product}){
    return(
    <div className="container product">
        <ul>
            <li><img src={product.image} alt='product' width="200" height="200"/></li> 
            <li> {product.name} </li>
            <li> Prix: {product.price}€ </li>
            <div className="ingredients">
                <li> Ingrédients: </li>
                <ul>
                    {product.ingredients.map(ingredient=>{return(<li key={ingredient}>{ingredient}</li>)} )} 
                </ul>
                
            </div>
            
            
        </ul>

    </div>
    ) 
}

export default Product;