import React, { Component } from 'react';

class User extends Component{
    render(){
        return(
            <span>{this.props.name} - {this.props.title}</span>
        );
    }
}

export default User;