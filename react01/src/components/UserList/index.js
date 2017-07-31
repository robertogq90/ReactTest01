import React, { Component } from 'react';
import UserRow from '../UserRow'

class UserList extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.listado.map((user) => {
                        return <UserRow idUser={user.idUser} name={user.name} title={user.title} />
                    })
                }
            </ul>
        );
    }
}

export default UserList;