import React, { Component } from 'react'

const CamperTable = (props) => {

    if (!props.users) {
        return <div> Loading ... </div>
    }

    const verticalAlign = {
        marginBottom: "15px"
    }

    const img = {
        paddingRight: "15px"
    }

    const campers = props.users.map(function (user, i) {
        return (
            <tr key={i}>
                <td>{i+1}</td>
                <td><img style={img} src={user.img} height="30" width="30" alt="img" ></img><span style={verticalAlign}>{user.username}</span></td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        )
    })

    return campers
}

export default CamperTable