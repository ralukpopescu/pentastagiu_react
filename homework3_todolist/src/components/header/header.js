import React, { Component } from 'react';
import './header.css';
import logo from '..//../to-do-list.png';


class Header extends Component{
    render() {
        return (
            <header className="App-header">
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <img src={logo} alt="logo" />
                        </td>
                        <td><p className="Paragraph-header"> To do list </p></td>
                        </tr>
                    </tbody>
                </table>
            </header>
        )
    }
}

export default Header;