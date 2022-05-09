import React from 'react';
import "../../../styles/index.css";
export default function ContentCustomerDel({props}) {
    const [localCli,setLocalCli] = React.useState();
    
    return (
      <div className="center-div mt-5">
        <div className="row" >
            <div className="col-md-6">
                <div className="form-group">
                    <label>Customer Id</label>
                    <select name="customerId" placeholder="Customer Id" onChange={({target}) => setLocalCli(target.value)} >
                        <option value="">Selecione</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6">
                <button className="btn btn-go" onClick={() => props.sendDataCustomerDel(localCli)}>Enviar</button>
            </div>
        </div>
      </div>
    );

}