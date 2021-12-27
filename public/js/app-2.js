class Product extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src="./images/products/image-aqua.png" alt="product_image" />
                </div>
                <div className="middle aligned content">
                    <div className='description'>
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks.</p>
                    </div>
                    <div className="extra">
                        <span>Submited By:</span>
                        <img className="ui avatar image" src="images/avatars/daniel.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;