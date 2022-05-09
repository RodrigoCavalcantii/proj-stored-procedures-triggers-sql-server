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
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
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
    console.log("dataCustomerGet",state.dataCustomerGet)
     if(state.dataCustomerGet) {
         ProjService.getCustomer(state.dataCustomerGet)
         .then((response) =>{
             console.log("response", response)
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
    console.log("dataCustomerPost",state.dataCustomerPost)
     if(state.dataCustomerPost) {
         ProjService.postCustomer(state.dataCustomerPost)
         .then((response) =>{
             console.log("response", response)
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
    console.log("dataCustomerDel",state.dataCustomerDel)
     if(state.dataCustomerDel) {
         ProjService.deleteCustomer(state.dataCustomerDel)
         .then((response) =>{
             console.log("response", response)
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
    console.log("dataCustomerPut",state.dataCustomerPut)
     if(state.dataCustomerPut) {
         ProjService.putCustomer(state.dataCustomerPut)
         .then((response) =>{
             console.log("response", response)
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

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;