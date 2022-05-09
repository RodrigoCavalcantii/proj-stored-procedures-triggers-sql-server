import React from 'react';
import "../../styles/index.css";
import ContentCustomersGet from "./ContentCustomersGet"
import ContentCustomersPost from "./ContentCustomersPost"
import ContentCustomersDel from "./ContentCustomersDel"
import ContentCustomersPut from "./ContentCustomersPut"

export default function ContentCustomers({props}) {
  const [actionType,setActionType] = React.useState(0);
  
    return (
      <div className="center-div no-mt">
        <div className="row" >
            <div className="col-md-3">
            <button className="btn btn-c" onClick={() => setActionType(1)}>Consultar</button>
            </div>
            <div className="col-md-3">
            <button className="btn btn-c" onClick={() => setActionType(2)}>Cadastrar</button>
            </div>
            <div className="col-md-3">
            <button className="btn btn-c" onClick={() => setActionType(3)}>Deletar</button>
            </div>
            <div className="col-md-3">
            <button className="btn btn-c" onClick={() => setActionType(4)}>Editar</button>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {actionType === 1 &&
              <ContentCustomersGet props={props} />
            }
             {actionType === 2 &&
              <ContentCustomersPost props={props} />
            }
            {actionType === 3 &&
              <ContentCustomersDel props={props} />
            }
            {actionType === 4 &&
              <ContentCustomersPut props={props} />
            }
          </div>
        </div>
      </div>
    );

}