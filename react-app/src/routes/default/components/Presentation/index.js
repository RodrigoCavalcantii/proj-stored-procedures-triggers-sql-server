import React from 'react';
import "../../styles/index.css";
import ContentCustomers from "../ContentCustomers"
import ContentOrders from "../ContentOrders"
import GlobalContextProvider, {
  GlobalContext,
  ACTIONS
} from "../../context/GlobalContextProvider";

export const Presentation = () => {
  const [state, dispatch] = React.useContext(GlobalContext);
  const [currentPage,setCurrentPage] = React.useState(0);
  const [typeConsult,setTypeConsult] = React.useState(0);

  //// Customer \/
  
  function sendDataCustomerGet(value){
    if (window.confirm("Confirmar essa consulta de Customer?")) {
      console.log("fazer o dispatch",value)
      if(value) {
        dispatch({
            payload: value,
            type: ACTIONS.SET_DataCustomerGet,
        });
      } else {
        dispatch({
            payload: "0",
            type: ACTIONS.SET_DataCustomerGet,
        });
      }
      
    }
  }

  React.useEffect(() => {
    console.log("state.dataCustomer",state.dataCustomer);

    if(state.dataCustomer) {

      // state.dataCustomer.status = 200;
      
      if(state.dataCustomer?.status === 200) {
        alert("Sucesso !");
        setTypeConsult(2)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
    }

  },[state.dataCustomer])
  
  function sendDataCustomerPost(value){
    if (window.confirm("Confirmar esse cadastro de Customer?")) {
      console.log("fazer o dispatch",value)
      dispatch({
          payload: value,
          type: ACTIONS.SET_DataCustomerPost,
      });
    }
  }

  React.useEffect(() => {
    console.log("state.customerResponsePost",state.customerResponsePost);

    if(state.customerResponsePost) {

      // state.customerResponsePost.status = 200;
      
      if(state.customerResponsePost?.status === 200) {
        alert("Sucesso !");
        setTypeConsult(2)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
    }

  },[state.customerResponsePost])

  function sendDataCustomerDel(value){
    if(value){
      if (window.confirm("Confirmar esse delete de Customer?")) {
        console.log("fazer o dispatch",value)
        dispatch({
            payload: value,
            type: ACTIONS.SET_DataCustomerDel,
        });
      }
    } else {
      alert("Selecione o cliente !")
    }
  }


  React.useEffect(() => {
    console.log("state.customerResponseDel",state.customerResponseDel);

    if(state.customerResponseDel) {

      // state.customerResponseDel.status = 200;
      
      if(state.customerResponseDel?.status === 200) {
        alert("Sucesso !");
        setTypeConsult(2)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
    }

  },[state.customerResponseDel])

  
  
  function sendDataCustomerPut(value){
    if(value.customerId){
      if (window.confirm("Confirmar essa edicao de Customer?")) {
        console.log("fazer o dispatch",value)
        dispatch({
            payload: value,
            type: ACTIONS.SET_DataCustomerPut,
        });
      }
    } else {
      alert("Selecione o cliente !")
    }
  }
  

  React.useEffect(() => {
    console.log("state.customerResponsePut",state.customerResponsePut);

    if(state.customerResponsePut) {

      // state.customerResponsePut.status = 200;
      
      if(state.customerResponsePut?.status === 200) {
        alert("Sucesso !");
        setTypeConsult(2)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
    }

  },[state.customerResponsePut])

  //// order \/
  
  function sendDataOrderGet(value){
    if (window.confirm("Confirmar essa consulta de Order ?")) {
      console.log("fazer o dispatch",value)
    }
  }
  
  function nextPage() {
    setCurrentPage(1)
  }

  function backPage() {
    setCurrentPage(0)
  }
    
  const objContentCustomer = {
    sendDataCustomerGet:sendDataCustomerGet,
    sendDataCustomerPost:sendDataCustomerPost,
    sendDataCustomerDel:sendDataCustomerDel,
    sendDataCustomerPut:sendDataCustomerPut
  }
  const objContentOrder = {
    sendDataOrderGet:sendDataOrderGet,
  }
  
  return(
    <>
    {currentPage === 0 && 
      <div className="center-div-main">
        <h3>Unicap</h3>
        <h2>Projeto Banco de Dados II</h2>
        <h3>Alunos:<br/>Renato Rabello<br/>Rodrigo Cavalcanti</h3>
        <button className="btn btn-go" onClick={nextPage}>Go</button>
      </div>
    }
    {currentPage === 1 && 
      <div className="center-div-content">
        <div className="row" >
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
            <button className="btn btn-c" onClick={() => setTypeConsult(1)}>Customers</button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-o " onClick={() => setTypeConsult(2)}>Orders</button>
          </div>
          <div className="col-md-3">
          </div>
        </div>
        <div className="row" >
          <div className="col-md-12">
            {typeConsult === 1 &&
              <ContentCustomers props={objContentCustomer} />
            }
            {typeConsult === 2 &&
              <ContentOrders props={objContentOrder} />
            }
          </div>
        </div>
        <button className="btn btn-go" onClick={backPage}>Back</button>
      </div>
    }
    </>
  );
  
}

const PresentationWithProvider = () => (
  <GlobalContextProvider>
    <Presentation  />
  </GlobalContextProvider>
);
export default PresentationWithProvider;