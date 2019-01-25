import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends React.PureComponent {
    render() {
        const props = this.props;
        console.log('render Card', props.id);
        const id= props.id;
        return (
            <div className="content-card">
                <h1>{props.name}</h1>
                <span>{props.description}</span>
                <img className="card-product-image" src={props.photoUrl} alt={props.name}/>
                <h5>Price {props.unitPrice} EUR</h5>
                <button className="btn add-to-cart">Add to cart</button>
                <button className="btn add-to-cart" onClick={() =>props.handleClick(id)}>Edit</button>
                <button className="btn add-to-cart" onClick={() =>props.handleDelete(id)}>Delete</button>
              </div>
        )
    }
}
Card.propTypes={
    handleClick: PropTypes.func,
    handleDelete : PropTypes.func
}
export default Card;