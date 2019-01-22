import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
                  {this.props.allData.map(function(item){
                    return <Card key={item.id} {...item} handleClick={this.props.handleClick}/>
                }, this)}
          </div>
        )
    }
}
Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
}
export default Content;