import React, { PureComponent } from "react";
import "./editCard.css";
import { setNameProduct, setSaveProduct, setDescriptionProduct,resetProduct } from '../../Redux/Actions/products';
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
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
  }

  onNameChanged(event){
    const name = event.target.value;
    this.props._setNameProduct(name);
    console.log("OnNameChanged name ="+ name);
  }

  onDescriptionChanged(event){
    const description = event.target.value;
    this.props._setDescriptionProduct(description);
    console.log("OnDescriptionChanged "+ description);
  }

  onSave() {
    console.log("OnSave name="+ this.props.product.name);
    this.props._setSaveProduct();
    //this.props.history.push('/');
  }
  
  onCancel(e){
    this.props._resetProduct();
    //this.props.history.push('/');
  }

  render() {
    console.log("Edit card render product= "+ this.props.product);
    const { classes } = this.props;
    return (
      
      <div className="content-card modal">
        <CardHeader title='Edit card'/>
        <CardContent>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.props.product.name}
              onChange={this.onNameChanged}
              margin="normal"
            />
            <TextField
              id="description"
              label="Description"
              className={classes.textField}
              value={this.props.product.description}
              onChange={this.onDescriptionChanged}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={this.onSave}>
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
  
const mapDispatchToProps = (dispatch) => ({
     _setNameProduct: (name) => dispatch(setNameProduct(name)),
     _setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
     _setSaveProduct: () => dispatch(setSaveProduct()),
     _resetProduct: () => dispatch(resetProduct()) 
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditCard));


