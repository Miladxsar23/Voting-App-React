class Product extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { product, onVote } = this.props;
        return (
            <div className="item">
                <div className="image">
                    <img src={product.productImageUrl} alt="product_image" />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a>
                            <i className="large caret up icon" onClick={() => onVote(product.id)}></i>
                        </a>
                        {product.votes}
                    </div>
                    <div className='description'>
                        <a href={product.url}>{product.title}</a>
                        <p>{product.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submited By:</span>
                        <img className="ui avatar image" src={product.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        )
    }
}
class ProductList extends React.Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.setState({
            products : Seed.products
        })
    }
    addVoted(productId) {
        let newProducts = this.state.products.map(prod => {
            if (prod.id === productId) {
                return Object.assign({}, prod, {
                    votes : prod.votes + 1
                })
            }
            return prod;
        })
        console.log(this.state)
        console.log(newProducts)
        this.setState({
            products: newProducts
        })
    }
    render() {
        let seed = this.state.products.sort((a, b) => { return b.votes - a.votes });
        const row = seed.map((prod, index) => {
            return (
                <Product key={`product-` + prod.id} product={prod} onVote={this.addVoted.bind(this)} />
            )
        })
        return (
            <div className="ui unstackable items">
                {row}
            </div>
        )
    }
}

ReactDOM.render(<ProductList />, document.querySelector("#root"));