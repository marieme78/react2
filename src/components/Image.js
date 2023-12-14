import React from "react";
import product from "../product.json"

const Image = () => {
    return(
        <div>
            <img src={product.image} style={{height:250,width:300}}></img>
        </div>
    )
}
export default Image ;