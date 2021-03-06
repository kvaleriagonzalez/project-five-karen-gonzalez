import React, { Component } from 'react';
import './App.css';

//SearchBar COMPONENT
class SearchBar extends Component {

    render() {
        return (
            //GET USER INPUT / DISPLAY INFORMATION IN RENDER IN APP
            <div>
                <h2 className="color-search">Contact list</h2>
                <form action="" method="get">
                    <label forhtml="search"></label>
                    <input onChange={this.props.handleChange} value={this.props.contacts['']} type="text" placeholder="search contact" name="search" required/>
                    <label forhtml="Search"></label>
                    <input onClick={this.props.handleSearch} type="submit" value="search" />
                </form>
                <p class="text-info color-search">create contact before searching</p>
                <p className="text-info-p">A cute surprise when you search a contact</p>
            </div>
           
        )
    }
}

export default SearchBar;