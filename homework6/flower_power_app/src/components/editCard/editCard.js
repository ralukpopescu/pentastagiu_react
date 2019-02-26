import React, { PureComponent } from "react";
import "./editCard.css";
import {setSaveProduct,resetProduct } from '../../Redux/Actions/products';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class EditCard extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      id : this.props.product.id,
      name: this.props.product.name,
      description: this.props.product.description,
      unitPrice: this.props.product.unitPrice,
      photoUrl: this.props.product.photoUrl,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("OnSubmit product name ="+ this.state.name+ " description="+ this.state.description +" "+  this.state.unitPrice);
    //this.props._setNameProduct(this.state.name);
    //this.props._setDescriptionProduct(this.state.description);
    this.props._updateProduct(this.state);
    //this.props.history.push('/');
  }

  onCancel(){
    this.props._resetProduct();
    this.props.history.push('/');
  }

  onChanged = (event) => {
    this.setState({...this.state,
        [event.target.id]: event.target.value
    });
  }  
 
  render() {
    const { classes } = this.props;
    return (
      <div className="content-card modal">
        <CardHeader title='Edit card'/>
        <CardContent>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.onChanged}
              margin="normal"
            />
            <TextField
              id="description"
              label="Description"
              className={classes.textField}
              value={this.state.description}
              onChange={this.onChanged}
              margin="normal"
            />
            <TextField
              id="unitPrice"
              label="Unit price"
              type="number"
              className={classes.textField}
              value={this.state.unitPrice}
              onChange={this.onChanged}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={this.onSubmit}>
              Save
            </Button>
            <Button type="submit" size="small" color="primary" onClick={this.onCancel}>
              Cancel
            </Button>
          </CardActions>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => ({
  product: state.products.product
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
 // _setNameProduct: (name) => dispatch(setNameProduct(name)),
  //_setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
  _updateProduct: (product) => dispatch(setSaveProduct(product)),
  _resetProduct: () => dispatch(resetProduct()) 
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditCard));


