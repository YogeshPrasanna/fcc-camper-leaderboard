import React from "react";
import CamperTable from './CamperTable'

const CamperDisplayArea = (props) => {

    const style = {
        backgroundColor: "#FFF1EC",
        "display": "inline-block",
        "margin": "0 auto"
    }

    const tableRowStyle = {
        "background": "orange"
    }

    return (
        <table style={style}>
            <tbody>
                <tr style={tableRowStyle}>
                    <th>#</th>
                    <th>Camper</th>
                    <th onClick={() => props.getData(props.thirtyDays)}>30-days</th>
                    <th onClick={() => props.getData(props.allTime)}>All time</th>
                </tr>
                <CamperTable users={props.users} />
            </tbody>
        </table>
    )
}

export default CamperDisplayArea 