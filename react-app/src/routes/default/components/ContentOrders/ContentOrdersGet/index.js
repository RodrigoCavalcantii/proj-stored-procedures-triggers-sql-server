import React from 'react';
import "../../../styles/index.css";
export default function ContentOrderGet({props}) {
    const [localCli,setLocalCli] = React.useState();
    
    return (
      <div className="center-div mt-5">
        <div className="row" >
            <div className="col-md-6">
                <div className="form-group">
                    <label>Order Id&nbsp;&nbsp;&nbsp;<small>Para todos, apenas clique em Enviar!</small></label>
                    <input type="text" name="OrderId" placeholder="Order Id" onChange={({target}) => setLocalCli(target.value)} />
                </div>
            </div>
            <div className="col-md-6">
                <button className="btn btn-go" onClick={() => props.sendDataOrderGet(localCli)}>Enviar</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {props?.dataConsultOrder.length > 0 && 
                    <table>
                        <thead>
                            <tr>
                                <td>Order Id</td>
                                <td>Customer</td>
                                <td>Employee</td>
                                <td>ShipVia</td>
                                <td>Freight</td>
                                <td>Ship Name</td>
                                <td>Ship Address</td>
                                <td>Ship City</td>
                                <td>Ship Region</td>
                                <td>Ship PostalCode</td>
                                <td>Ship Country</td>
                            </tr>
                        </thead>
                        <tbody>
                            {props?.dataConsultOrder?.map(obj => { 
                                return (<tr key={obj.orderId}>
                                    <td>{obj.orderId}</td>
                                    <td>{obj.customer?.companyName}</td>
                                    <td>{obj.employee?.firstName}</td>
                                    <td>{obj.shipVia}</td>
                                    <td>{obj.freight}</td>
                                    <td>{obj.shipName}</td>
                                    <td>{obj.shipAddress}</td>
                                    <td>{obj.shipCity}</td>
                                    <td>{obj.shipRegion}</td>
                                    <td>{obj.shipPostalCode}</td>
                                    <td>{obj.shipCountry}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
      </div>
    );

}