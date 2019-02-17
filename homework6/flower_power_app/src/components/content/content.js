import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../card/cardProduct';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
              {this.props.allData.map(item =>
                      <CardProduct key={item.id} {...item} handleClick={this.props.handleClick} handleDelete = {this.props.handleDelete} product={this.props.product}/>)}
          </div>
        )
    }
}
Content.propTypes = {
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
    allData: PropTypes.any,
    product: PropTypes.any,
}
export default Content;