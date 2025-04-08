import "./ProductCard.css"
import Button from "./button.tsx"

function ProductCard({ product }) {

    return (
        <article className="Card">

            <img className="imageCard" src={product.images} alt={product.title} />
            <div className="title-btn">
                <h2 className="product-title">{product.title}</h2>

                <Button product={product} />
            </div>

        </article>

    )
}

export default ProductCard