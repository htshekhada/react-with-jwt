import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentWillMount() {
    let rows = []
    this.props.products.forEach((product) => {
        rows.push(<ProductRow product={product} key={product.id} />);
    });
    this.setState({ rows: rows });      
  }

  componentWillReceiveProps(next) {
    console.log('componentWillReceiveProps');
    let rows = []
    next.products.forEach((product) => {
        rows.push(<ProductRow product={product} key={product.id} />);
    });
    this.setState({ rows: rows });
  }

  render() {

    return (
      <ul className="list">
        {this.state.rows}
      </ul>
    )
  }
}

export default ProductTable;