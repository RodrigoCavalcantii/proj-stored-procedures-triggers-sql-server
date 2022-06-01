import React from 'react';
import "../../styles/index.css";
import ContentCustomers from "../ContentCustomers";
import ContentOrders from "../ContentOrders";
import ContentProducts from "../ContentProducts";
import GlobalContextProvider, {
  GlobalContext,
  ACTIONS
} from "../../context/GlobalContextProvider";

export const Presentation = () => {
  const [state, dispatch] = React.useContext(GlobalContext);
  const [orderIdValue,setOrderIdValue] = React.useState(0);
  const [qtdSendItemOrder,setQtdSendItemOrder] = React.useState(0);
  const [currentPage,setCurrentPage] = React.useState(0);
  const [typeConsult,setTypeConsult] = React.useState(0);
  const [dataConsultCustomer,setDataConsultCustomer] = React.useState([]);
  const [dataConsultOrder,setDataConsultOrder] = React.useState([]);
  const [currentCart,setCurrentCart] = React.useState();
  const [qtdOrderDetail,setQtdOrderDetail] = React.useState(1);
  const [products,setProducts] = React.useState(1);
  const [dataProduct,setDataProduct] = React.useState([]);

  function sendDataCustomerGet(value){
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

  React.useEffect(() => {
    if(state.dataCustomer) {

      if(state.dataCustomer?.status !== 500) {
        alert("Sucesso !");
        if(state.dataCustomer.address === "" || state.dataCustomer.address) {
          setDataConsultCustomer([state.dataCustomer]);
        } else {
          setDataConsultCustomer(state.dataCustomer);
        }
      } else {
        alert("Usuario inexistente !");
        
      }
      dispatch({
          payload: "",
          type: ACTIONS.SET_DataCustomerGet,
      });
    }

  },[state.dataCustomer])
  
  function sendDataCustomerPost(value){
      dispatch({
          payload: value,
          type: ACTIONS.SET_DataCustomerPost,
      });
  }

  React.useEffect(() => {

    if(state.customerResponsePost) {
      if(state.customerResponsePost?.customerId === state.dataCustomerPost.customerId) {
        alert("Sucesso !");
        setTypeConsult(0);
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
      dispatch({
          payload: "",
          type: ACTIONS.SET_DataCustomerPost,
      });
    }
  },[state.customerResponsePost])

  function sendDataCustomerDel(value){
    if(value){
      if (window.confirm("Confirmar esse delete de Customer?")) {
         
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

    if(state.customerResponseDel) {
      if(state.customerResponseDel?.status === 200) {
        alert("Sucesso !");
        setTypeConsult(0)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
      dispatch({
        payload: "",
        type: ACTIONS.SET_DataCustomerDel,
    });
    }

  },[state.customerResponseDel])

  
  
  function sendDataCustomerPut(value){
    if(value.customerId){
        dispatch({
            payload: value,
            type: ACTIONS.SET_DataCustomerPut,
        });
    } else {
      alert("Informe o cliente !")
    }
  }
  

  React.useEffect(() => {

    if(state.customerResponsePut) {

      if(state.customerResponsePut?.status !== 500) {
        alert("Sucesso !");
        setTypeConsult(0)
      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
      dispatch({
          payload: "",
          type: ACTIONS.SET_DataCustomerPut,
      });
    }

  },[state.customerResponsePut])

  function sendDataOrderGet(value){
      if(value) {
        dispatch({
            payload: value,
            type: ACTIONS.SET_ORDER_DATA_GET,
        });
      } else {
        dispatch({
            payload: "0",
            type: ACTIONS.SET_ORDER_DATA_GET,
        });
      }
  }

  React.useEffect(() => {
    if(state.orderResponseGet) {

      if(state.orderResponseGet?.status !== 500) {
        if(state.orderResponseGet.orderId === "" || state.orderResponseGet.orderId) {
          setDataConsultOrder([state.orderResponseGet]);
        } else {
          setDataConsultOrder(state.orderResponseGet);
        }
      } else {
        alert("Verifique os dados e tente novamente !");
      }
      dispatch({
          payload: "",
          type: ACTIONS.SET_ORDER_DATA_GET,
      });
    }

  },[state.orderResponseGet]);

  
  function setNewOrder(value){
      
    setCurrentCart(value)
      if(value?.cart.length > 0) {
        if(value) {
          dispatch({
              payload: value,
              type: ACTIONS.SET_ORDER_DATA_POST,
          });
        }
      } else {
        alert("Adicione pelo menos um item ao carrinho")
      }
      
  }

  
  
  React.useEffect(() => {
    
    if(state.orderResponsePost) {
      
      if(state.orderResponsePost?.status !== 500) {
        
        if(state?.orderDataPost?.cart?.length > 0) {
          
          setQtdOrderDetail(state?.orderDataPost?.cart?.length - 1);
          dispatch({
              payload: {cart:state?.orderDataPost,idCart:0,orderId:state.orderResponsePost},
              type: ACTIONS.SET_ITEM_ORDER_DATA_POST,
          });
        }

      } else {
        alert("Verifique os dados e tente novamente !");
        
      }
      
    }

  },[state.orderResponsePost]);


  React.useEffect(() => {
    if(state.orderItemResponse) {
      if(state.orderItemResponse?.status !== 500) {
        if(currentCart.cart.length >= 2 && currentCart.cart.length >= Number(qtdSendItemOrder)+1 ) {
          dispatch({
              payload: {cart:state?.orderDataPost,idCart:Number(qtdSendItemOrder),orderId:state.orderResponsePost},
              type: ACTIONS.SET_ITEM_ORDER_DATA_POST,
          });
          setQtdSendItemOrder(qtdSendItemOrder+1);
        } else {

          dispatch({
              payload: null,
              type: ACTIONS.SET_ORDER_DATA_POST,
          });
          setCurrentCart();
          setOrderIdValue(0);
          setTypeConsult(0);
          alert("Order adicionada com sucesso ! -> Order Id: "+state.orderItemResponse.order.orderId);
        }
      } else {
        alert("Verifique os dados e tente novamente !");
      }
    }
  
  },[state.orderItemResponse]);

  React.useEffect(() => {
    if(state.productResponse) {
      setProducts(state.productResponse);
    }
  },[state.productResponse])
  
  function nextPage() {
    setCurrentPage(1)
  }

  function backPage() {
    setCurrentPage(0)
  }
  
  React.useEffect(() => {
    if(state.productDiscountResponse || state.productDiscountResponse === 0) {
      if(state.productDiscountResponse?.status === 500) {
        alert("Verifique os dados e tente novamente !")
      } else {
        alert("Sucesso desconto atribuido ao produto, valor depois do desconto : "+state.productDiscountResponse);
        setTypeConsult(0)
      }
    }
  },[state.productDiscountResponse]);

  
  React.useEffect(() => {
    if(dataProduct && dataProduct.length > 0) {
      dispatch({
          payload: dataProduct,
          type: ACTIONS.SET_DATA_PRODUCT_DISCOUNT,
      });
    }
  },[dataProduct]);
    
  const objContentCustomer = {
    sendDataCustomerGet:sendDataCustomerGet,
    sendDataCustomerPost:sendDataCustomerPost,
    sendDataCustomerDel:sendDataCustomerDel,
    sendDataCustomerPut:sendDataCustomerPut,
    dataConsultCustomer:dataConsultCustomer,
    setDataConsultCustomer:setDataConsultCustomer
  }

  const objContentOrder = {
    sendDataOrderGet:sendDataOrderGet,
    dataConsultOrder:dataConsultOrder,
    setDataConsultOrder:setDataConsultOrder,
    setNewOrder:setNewOrder,
    products:products
  }

  const objContentProduct = {
    products:products,
    setDataProduct: setDataProduct 
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
          <div className="col-md-2">
            <button className="btn btn-c" onClick={() => setTypeConsult(1)}>Customers</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-o " onClick={() => setTypeConsult(2)}>Orders</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-p" onClick={() => setTypeConsult(3)}>Product</button>
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
            {typeConsult === 3 &&
              <ContentProducts props={objContentProduct} />
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