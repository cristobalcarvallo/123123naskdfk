import React, { useEffect } from "react";

const BossRequests = () => {
    useEffect(() => {
        fetch(`http://localhost:3000/boss`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async (response) => {
            return  await response.json()
        })
        .then((data) => {
            console.log(data)
        })
    }, [])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Solicitud</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Solicitud 1 </td>
                    <td> Aceptado </td>
                </tr>
                <tr>
                    <td> Solicitud 2 </td>
                    <td> Rechazado </td>
                </tr>
                </tbody>
            </table>
        </div>
        
    )
}


export default BossRequests;