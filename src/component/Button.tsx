import { useState } from "react"

function Button({ product }) {

    const [display, setDisplay] = useState(false)
    return (
        <article>

            {display ? (<div>
                <h3>Price: {product.price}</h3>
                <h3>Stock: {product.stock}</h3>
                <h3>Rating: {product.rating}</h3>
            </div>) : null}

            <button onClick={() => setDisplay(!display)}>{display ? "Voir moins" : "Voir plus"}</button>

        </article>
    )
}

export default Button;