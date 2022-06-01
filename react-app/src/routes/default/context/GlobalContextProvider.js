import { createContext, useEffect, useReducer } from "react";
import {ProjService} from "../../../commmon/services/proj/index"

export const GlobalContext = createContext();
export const ACTIONS = {
    SET_DataCustomerGet: "SET_DataCustomerGet",
    SET_DATA_CUSTOMER: "SET_DATA_CUSTOMER",
    SET_DataCustomerPost: "SET_DataCustomerPost",
    SET_CUSTOMER_RESPONSE_POST: "SET_CUSTOMER_RESPONSE_POST",
    SET_DataCustomerDel: "SET_DataCustomerDel",
    SET_CUSTOMER_RESPONSE_DEL: "SET_CUSTOMER_RESPONSE_DEL",
    SET_DataCustomerPut: "SET_DataCustomerPut",
    SET_CUSTOMER_RESPONSE_PUT: "SET_CUSTOMER_RESPONSE_PUT",
    SET_ORDER_DATA_GET: "SET_ORDER_DATA_GET",
    SET_ORDER_RESPONSE_GET: "SET_ORDER_RESPONSE_GET",
    SET_ORDER_DATA_POST: "SET_ORDER_DATA_POST",
    SET_ORDER_RESPONSE_POST: "SET_ORDER_RESPONSE_POST",
    SET_ITEM_ORDER_DATA_POST: "SET_ITEM_ORDER_DATA_POST",
    SET_ITEM_ORDER_RESPONSE_POST: "SET_ITEM_ORDER_RESPONSE_POST",
    SET_PRODUCT_RESPONSE: "SET_PRODUCT_RESPONSE",
    SET_DATA_PRODUCT_DISCOUNT:"SET_DATA_PRODUCT_DISCOUNT",
    SET_DATA_PRODUCT_DISCOUNT_RESPONSE:"SET_DATA_PRODUCT_DISCOUNT_RESPONSE"
};

const initialState = {
  dataCustomerGet: "",
  dataCustomer: "",
  dataCustomerPost: "",
  customerResponsePost: "",
  dataCustomerDel: "",
  customerResponseDel: "",
  dataCustomerPut: "",
  customerResponsePut: "",
  orderDataGet: "",
  orderResponseGet: "",
  orderDataPost: "",
  orderResponsePost: "",
  orderItemPost: "",
  orderItemResponse: "",
  productResponse: "",
  productDiscount: "",
  productDiscountResponse:""
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA_PRODUCT_DISCOUNT_RESPONSE: {
      return {
        ...state,
        productDiscountResponse: action.payload,
      };
    }
    case ACTIONS.SET_DATA_PRODUCT_DISCOUNT: {
      return {
        ...state,
        productDiscount: action.payload,
      };
    }
    case ACTIONS.SET_PRODUCT_RESPONSE: {
      return {
        ...state,
        productResponse: action.payload,
      };
    }
    case ACTIONS.SET_ITEM_ORDER_RESPONSE_POST: {
      return {
        ...state,
        orderItemResponse: action.payload,
      };
    }
    case ACTIONS.SET_ITEM_ORDER_DATA_POST: {
      return {
        ...state,
        orderItemPost: action.payload,
      };
    }
    case ACTIONS.SET_ORDER_RESPONSE_POST: {
      return {
        ...state,
        orderResponsePost: action.payload,
      };
    }
    case ACTIONS.SET_ORDER_DATA_POST: {
      return {
        ...state,
        orderDataPost: action.payload,
      };
    }
    case ACTIONS.SET_ORDER_RESPONSE_GET: {
      return {
        ...state,
        orderResponseGet: action.payload,
      };
    }
    case ACTIONS.SET_ORDER_DATA_GET: {
      return {
        ...state,
        orderDataGet: action.payload,
      };
    }
    case ACTIONS.SET_DataCustomerGet: {
      return {
        ...state,
        dataCustomerGet: action.payload,
      };
    }
    case ACTIONS.SET_DATA_CUSTOMER: {
      return {
        ...state,
        dataCustomer: action.payload,
      };
    }
    case ACTIONS.SET_DataCustomerPost: {
      return {
        ...state,
        dataCustomerPost: action.payload,
      };
    }
    case ACTIONS.SET_CUSTOMER_RESPONSE_POST: {
      return {
        ...state,
        customerResponsePost: action.payload,
      };
    }
    case ACTIONS.SET_DataCustomerDel: {
      return {
        ...state,
        dataCustomerDel: action.payload,
      };
    }
    case ACTIONS.SET_CUSTOMER_RESPONSE_DEL: {
      return {
        ...state,
        customerResponseDel: action.payload,
      };
    }
    case ACTIONS.SET_DataCustomerPut: {
      return {
        ...state,
        dataCustomerPut: action.payload,
      };
    }
    case ACTIONS.SET_CUSTOMER_RESPONSE_PUT: {
      return {
        ...state,
        customerResponsePut: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  
  
  
  useEffect(() => {
    
    if(state.productDiscount) {
        ProjService.postProductDiscount(state.productDiscount)
        .then((response) =>{
          
            dispatch({
                payload: response,
                type: ACTIONS.SET_DATA_PRODUCT_DISCOUNT_RESPONSE,
              });
        })
        .catch((error) => {
          
        })
    }
  },[state.productDiscount]);
  

  
  useEffect(() => {
    
     if(state.orderItemPost) {
         ProjService.postOrderItem(state.orderItemPost)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_ITEM_ORDER_RESPONSE_POST,
               });
         })
         .catch((error) => {
           
         })
     }
   },[state.orderItemPost]);
   

  useEffect(() => {
    
     if(state.orderDataPost) {
         ProjService.postOrder(state.orderDataPost)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_ORDER_RESPONSE_POST,
               });
         })
         .catch((error) => {
           
         })
     }
   },[state.orderDataPost]);

   
  useEffect(() => {
    
     if(state.orderDataGet) {
         ProjService.getOrder(state.orderDataGet)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_ORDER_RESPONSE_GET,
               });
         })
         .catch((error) => {
           
         })
     }
   },[state.orderDataGet]);

  useEffect(() => {
    
     if(state.dataCustomerGet) {
         ProjService.getCustomer(state.dataCustomerGet)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_DATA_CUSTOMER,
               });
         })
         .catch((error) => {
             console.log("error", error)
         })
     }
   },[state.dataCustomerGet]);

   useEffect(() => {
     
     if(state.dataCustomerPost) {
         ProjService.postCustomer(state.dataCustomerPost)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_CUSTOMER_RESPONSE_POST,
               });
         })
         .catch((error) => {
             console.log("error", error)
         })
     }
   },[state.dataCustomerPost]);

   useEffect(() => {
     
     if(state.dataCustomerDel) {
         ProjService.deleteCustomer(state.dataCustomerDel)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_CUSTOMER_RESPONSE_DEL,
               });
         })
         .catch((error) => {
             console.log("error", error)
         })
     }
   },[state.dataCustomerDel]);

   useEffect(() => {
     
     if(state.dataCustomerPut) {
         ProjService.putCustomer(state.dataCustomerPut)
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_CUSTOMER_RESPONSE_PUT,
               });
         })
         .catch((error) => {
             console.log("error", error)
         })
     }
   },[state.dataCustomerPut]);

   useEffect(() => {
     
         ProjService.getProducts()
         .then((response) =>{
           
             dispatch({
                 payload: response,
                 type: ACTIONS.SET_PRODUCT_RESPONSE,
               });
         })
         .catch((error) => {
             console.log("error", error)
         })
     
   },[]);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;