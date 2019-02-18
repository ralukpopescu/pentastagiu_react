import React, { PureComponent } from "react";
import "./addCard.css";
import { saveProduct } from "../../Redux/Actions/products";
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

class AddCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      unitPrice: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    const newProduct = this.state;
    newProduct.photoUrl = '';
    this.props._saveProduct(newProduct);
  }

  onChanged(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }  

  render() {
    const { classes } = this.props;
    return (
      <form noValidate autoComplete="off">
      <div className="content-card modal">
        <CardHeader title='Add card'/>
        <CardContent>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              onChange={this.onChanged}
              margin="normal"
            />
            <TextField
              id="description"
              label="Description"
              className={classes.textField}
              onChange={this.onChanged}
              margin="normal"
            />
            <TextField
              id="price"
              label="Price"
              defaultValue="0"
              className={classes.textField}
              onChange={this.onChanged}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button type="submit" size="small" color="primary" onClick={this.onSubmit}>
              Save
            </Button>
          </CardActions>
      </div>
      </form>
    );
  }
}
 
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  _saveProduct: (product) => dispatch(saveProduct(product)) 
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(styles)(AddCard));




