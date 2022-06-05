import React, { useState } from "react";

function Item({ name, category }) {
    const add = "Add to Cart";
    const remove = "Remove from Cart";
    const [inCart, setInCart] = useState(false);

    function handleLiClick() {
        setInCart((inCart) => !inCart);
    }

    return (
        <li className={inCart ? "in-cart" : ""}>
            <span>{name}</span>
            <span className="category">{category}</span>
            <button className={inCart ? "remove" : "add"} onClick={handleLiClick}>{inCart ? remove : add}</button>
        </li>
    );
}

export default Item;
