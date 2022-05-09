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
      </div>
    );

}