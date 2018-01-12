import React from "react";
import CamperTable from './CamperTable'

const CamperDisplayArea = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>data</th>
                    <th>Camper</th>
                    <th onClick={() => this.getData(props.thirtyDays)}>30-days</th>
                    <th onClick={() => this.getData(props.allTime)}>All time</th>
                </tr>
                <CamperTable users={props.users} />
            </tbody>
        </table>
    )
}

export default CamperDisplayArea 