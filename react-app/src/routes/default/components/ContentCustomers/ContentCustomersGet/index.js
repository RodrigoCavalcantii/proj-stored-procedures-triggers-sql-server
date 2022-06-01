import React from 'react';
import "../../../styles/index.css";
export default function ContentCustomerGet({props}) {
    const [localCli,setLocalCli] = React.useState();
    
    return (
      <div className="center-div-content mt-5">
        <div className="row" >
            <div className="col-md-6">
                <div className="form-group">
                    <label>Customer Id&nbsp;&nbsp;&nbsp;<small>Para todos, apenas clique em Enviar!</small></label>
                    <input type="text" name="customerId" placeholder="Customer Id" onChange={({target}) => setLocalCli(target.value)} />
                </div>
            </div>
            <div className="col-md-6">
                <button className="btn btn-go" onClick={() => props.sendDataCustomerGet(localCli)}>Enviar</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {(props?.dataConsultCustomer.length > 0 || props?.dataConsultCustomer !== {}) && 
                    <table>
                        <thead>
                            <tr>
                                <td>Customer Id</td>
                                <td>Company Name</td>
                                <td>Contact Name</td>
                                <td>Contact Title</td>
                                <td>Address</td>
                                <td>City</td>
                                <td>Region</td>
                                <td>Postal Code</td>
                                <td>Country</td>
                                <td>Phone</td>
                                <td>Fax</td>
                            </tr>
                        </thead>
                        <tbody>
                            {props?.dataConsultCustomer?.map(obj => { 
                                return (<tr key={obj.customerId}>
                                    <td>{obj.customerId}</td>
                                    <td>{obj.companyName}</td>
                                    <td>{obj.contactName}</td>
                                    <td>{obj.contactTitle}</td>
                                    <td>{obj.address}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.region}</td>
                                    <td>{obj.postalCode}</td>
                                    <td>{obj.country}</td>
                                    <td>{obj.phone}</td>
                                    <td>{obj.fax}</td>
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