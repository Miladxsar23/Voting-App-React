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
class ProductSorter extends React.Component {
    render() {
        const {onVote} = this.props;
        const sortedProduct = this.props.products.sort((a, b) => {return b.votes - a.votes});
        const row = sortedProduct.map((prod) => {
            return <Product key={"product-" + prod.id} product={prod} onVote={onVote}/>
        })
        return (
            <div className="ui unstackable items">
                {row}
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
    // define by arrow function for bind to "this"
    addVoted = (productId) => {
        let newProducts = this.state.products.map(prod => {
            if (prod.id === productId) {
                return Object.assign({}, prod, {
                    votes : prod.votes + 1
                })
            }
            return prod;
        })
        this.setState({
            products: newProducts
        })
    }
    render() {
        return (
            <div className="items">
                <ProductSorter products={this.state.products} onVote={this.addVoted} />
            </div>
        )
    }
}

ReactDOM.render(<ProductList />, document.querySelector("#root"));