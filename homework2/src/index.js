import React from 'react';
import ReactDOM from 'react-dom';

class Drinks extends React.Component{
    
    handleSelectedItem(item){
        var element = document.getElementById(item);
        element.style.backgroundColor = "blue";
    }

    handleMouseOver(item){
        var element = document.getElementById(item);
        element.style.fontSize ='20';
        element.style.backgroundColor = "lightblue";
    }

    handleMouseLeave(item){
        var element = document.getElementById(item);
        element.style.fontSize ='16';
        element.style.backgroundColor = "khaki";
    }

    render() {
        return(
            <div>Please hover on the items below:
                <ul id="list">
                    <li id="item1" onClick={this.handleSelectedItem.bind(this, 'item1')} onMouseOver={this.handleMouseOver.bind(this, 'item1')}
                                   onMouseLeave={this.handleMouseLeave.bind(this, 'item1')}> Coffee</li>
                    <li id="item2" onClick={this.handleSelectedItem.bind(this, 'item2')} onMouseOver={this.handleMouseOver.bind(this, 'item2')}
                                   onMouseLeave={this.handleMouseLeave.bind(this, 'item2')}> Tea</li>
                    <li id="item3" onClick={this.handleSelectedItem.bind(this, 'item3')} onMouseOver={this.handleMouseOver.bind(this, 'item3')}
                                   onMouseLeave={this.handleMouseLeave.bind(this, 'item3')} > Milk</li>
                </ul>
            </div>
            );
    }
}

class AccountInformation extends React.Component{
    handleBtnClick (){
        window.alert("Button clicked ");
    }

    render() {
        return(
            <div>
                <fieldset>
                    <legend>Please complete your personal information:</legend>
                    First name:<br/>
                    <input id="txtFirstName" type="text" name="firstname"/><br/>
                    Last name:<br/>
                    <input id="txtLastName" type="text" name="lastname"/><br/><br/>
                    <button onClick={() => this.handleBtnClick()} > Order </button>
              </fieldset>
            </div>
            );
    }
}

ReactDOM.render(<Drinks/>, document.getElementById("div1"));
ReactDOM.render(<AccountInformation/>, document.getElementById("div2"));

