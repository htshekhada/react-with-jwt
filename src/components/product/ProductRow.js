import React from 'react';
import {Link} from 'react-router';
import productsApi from '../../api/ProductsApi';

class ProductRow extends React.Component {
  
  constructor(props) {
    super(props);
    this.getCategoryName = this.getCategoryName.bind(this);
  }

  getCategoryName(categoryId) {
    return productsApi.getCategoryName(categoryId);
  }

  render() {
    let name = this.props.product.active ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    return (
      <li className="list-item">
        <div className="list-content" alt="hello">
          <h2>{name} - {this.props.product.code}</h2>
          <img src="http://placehold.it/110x145" alt="cover"/>
          <p>
            {this.props.product.description}<br/>
            Department: {this.getCategoryName(this.props.product.category)} => {this.getCategoryName(this.props.product["sub-category"])}
          </p>
          <p>Price : {this.props.product.rate}</p>
          <Link to={'/add-product/'+this.props.product.id}>Edit</Link>
        </div>
      </li>
    )
  }
}

export default ProductRow;

        // <td>{this.props.product.category}</td>
        // <td>{this.props.product["sub-category"]}</td>
// <td>{this.props.product.active?"Yes":"No"}</td>