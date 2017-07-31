import React, { Component } from 'react';
import User from '../User'

class  UserRow extends React.Component{
    render(){
        return (
            <li>
                <User idUser={this.props.idUser} name={this.props.name} title={this.props.title} />
            </li>
        );
    }
}

export default UserRow;