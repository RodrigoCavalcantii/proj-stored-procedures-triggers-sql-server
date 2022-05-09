import React from 'react';
import "../../styles/index.css";
import ContentOrdersGet from "./ContentOrdersGet"
import ContentOrdersPost from "./ContentOrdersPost"

export default function ContentOrders({props}) {
  const [actionType,setActionType] = React.useState(0);
  
    return (
      <div className="center-div no-mt">
        <div className="row" >
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
            <button className="btn btn-o" onClick={() => setActionType(2)}>Consultar</button>
            </div>
            <div className="col-md-3">
            <button className="btn btn-o" onClick={() => setActionType(1)}>Cadastrar</button>
            </div>
            <div className="col-md-3">
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {actionType === 1 &&
              <ContentOrdersGet props={props} />
            }
            {actionType === 2 &&
                <ContentOrdersPost props={props} />
            }
          </div>
        </div>
      </div>
    );

}