import React from 'react';
import productsApi from '../../api/ProductsApi';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    console.log('HomePage constructor is called...');
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount is called');
    let products = productsApi.getAllProducts();
    this.setState({ products: products });

    // productsApi.getAllProducts()
    //   .then(res => {
    //     //const products = res.map(obj => obj.data);
    //     this.setState({ products: res });
    //     console.log(this.state.products.length);
    //   });
  }

  render() {
    return (
      <div className="jumbotron">
      Product List: {this.state.products.length}
      <ul>
          {this.state.products.map(product =>
            <li key={product.id}>{product.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default HomePage;