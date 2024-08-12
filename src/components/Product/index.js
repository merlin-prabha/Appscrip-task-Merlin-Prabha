import "./index.css"

const Product = (props) => {
    const {details} = props 
    const {category, description, image, price, rating, title} = details
    const {rate, count} = rating

    return (
        <li className="product">
            <img src={image} alt="image" className="image" />
            <p className="heading">{title}</p>
            <p className="description">{description}</p>
        </li>
    )
}

export default Product