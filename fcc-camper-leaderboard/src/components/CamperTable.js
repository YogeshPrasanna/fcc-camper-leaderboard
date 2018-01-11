import React, { Component } from 'react'

const CamperTable = (props) => {

    if(!props.users){
        return <div> Loading ... </div>
    }

    console.log("Props.users : ", props.users)

    const campers = props.users.map(function(user,i){
        return (
            <tr key={i}>
                <td>{i}</td>
                <td><img src={user.img} height="30" width="30" alt="img" ></img>{user.username}</td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        )
    })

    return campers
}

export default CamperTable