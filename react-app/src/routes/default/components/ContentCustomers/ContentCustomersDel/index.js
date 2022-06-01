import React from 'react';
import "../../../styles/index.css";
export default function ContentCustomerDel({props}) {
    const [localCli,setLocalCli] = React.useState();
    
    return (
      <div className="center-div mt-5">
        <div className="row" >
            <div className="col-md-6">
                    
                <div className="form-group">
                        <label>Customer Id&nbsp;&nbsp;&nbsp;<small>Para todos, apenas clique em Enviar!</small></label>
                        <input type="text" name="customerId" placeholder="Customer Id" onChange={({target}) => setLocalCli(target.value)} />
                    </div>
            </div>
            <div className="col-md-6">
                <button className="btn btn-go" onClick={() => props.sendDataCustomerDel(localCli)}>Enviar</button>
            </div>
        </div>
      </div>
    );

}