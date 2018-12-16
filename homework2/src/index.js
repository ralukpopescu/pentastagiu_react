import React from 'react';
import ReactDOM from 'react-dom';

function ShowList(){
    const component = (
        <div>Please hover on the items below:
            <ol id="list">
                <li class="item" onclick="listItemClick(this)" onmouseover="listItemHover(this)" onmouseout="listItemLeave(this)">Coffee</li>
                <li class="item" onclick="listItemClick(this)" onmouseover="listItemHover(this)" onmouseout="listItemLeave(this)">Tea</li>
                <li class="item" onclick="listItemClick(this)" onmouseover="listItemHover(this)" onmouseout="listItemLeave(this)"> Milk</li>
            </ol>
        </div>
    );  

    ReactDOM.render(component, document.getElementById("root"));
};

function ListBehavior(){
    var selectedOption;
    function listItemClick(element)
    {
        selectedOption = element.textContent;
        element.style.backgroundColor = "blue";
    }

    function listItemHover(element)
    {
        element.style.fontSize ='20';
        element.style.backgroundColor = "lightblue";
    }
    function listItemLeave(element)
    {
        element.style.fontSize ='16';
        element.style.backgroundColor = "khaki";
    }
}

ShowList();
//ListBehavior();

