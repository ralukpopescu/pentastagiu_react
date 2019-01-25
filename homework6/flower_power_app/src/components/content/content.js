import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
              {this.props.allData.map(item =>
                      <Card key={item.id} {...item} handleClick={this.props.handleClick} handleDelete = {this.props.handleDelete} product={this.props.product}/>)}
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