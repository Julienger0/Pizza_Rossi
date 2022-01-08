import React from "react";

function Product({product}){
    return(
    <div className="product">
        <ul>
            <li><img src={product.image} alt='product' width="200" height="200"/></li> 
            <li> {product.name} </li>
            <div className="ingredients">
                <li> Ingrédients: </li>
                <ul>
                    {product.ingredients.map(ingredient=>{return(<li key={ingredient}>{ingredient}</li>)} )} 
                </ul>
                
            </div>
            
            <li> Prix: {product.price}€ </li>
        </ul>

    </div>
    ) 
}

export default Product;