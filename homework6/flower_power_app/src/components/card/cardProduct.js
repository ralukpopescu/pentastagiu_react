import React from 'react';
import PropTypes from 'prop-types';
import './cardProduct.css';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

const styles = ({
    card: {
      maxWidth: 500,
    },
    media: {
      maxWidth: 500,
      height: 200,
      opacity: .8,
    },
  });

class CardProduct extends React.PureComponent {
    render() {
        const props = this.props;
        console.log('render Card', props.id);
        const id= props.id;
        return (
            <div className="content-card">
                <Card >
                <CardHeader title={props.name}
                            subheader={props.description}/>
                    <img className="card-product-image" src={props.photoUrl} alt={props.name}/>
                    {/* <CardMedia  className={props.classes.media} 
                                src={props.photoUrl}
                                title={props.name} /> */}
                    <CardContent>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Add to cart
                        </Button>
                        <Button size="small" color="primary" onClick={() =>props.handleClick(id)}>
                            Edit
                        </Button>
                        <Button size="small" color="primary" onClick={() =>props.handleDelete(id)}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
CardProduct.propTypes={
    name: PropTypes.string,
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
    addToCartClick: PropTypes.func
}
export default withStyles(styles)(CardProduct);