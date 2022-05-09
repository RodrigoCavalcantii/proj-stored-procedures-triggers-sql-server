import ProjFetchAPI from "./api"


const getCustomer = async (dataCustomerGet) => {
    let idC = "";

    if(dataCustomerGet && dataCustomerGet !== "0") {
        idC = "/"+dataCustomerGet;
    }

    const json = {};
    
    const response = await ProjFetchAPI.get(`http://localhost:8080/customers`+idC, { body: json });
    console.log(response);
    return response?.data || [];
} 

const deleteCustomer = async (dataCustomerDelete) => {
    let idC = "";

    if(dataCustomerDelete && dataCustomerDelete !== "0") {
        idC = "/"+dataCustomerDelete;
    }

    const json = {};
    
    const response = await ProjFetchAPI.delete(`http://localhost:8080/customers`+idC, { body: json });
    console.log(response);
    return response?.data || [];
}

const postCustomer = async (dataCustomerPost) => {

    const json = dataCustomerPost;
    
    const response = await ProjFetchAPI.post(`http://localhost:8080/customers`, { body: json });
    console.log(response);
    return response?.data || [];
}
const putCustomer = async (dataCustomerPost) => {

    const json = dataCustomerPost;
    
    const response = await ProjFetchAPI.put(`http://localhost:8080/customers`, { body: json });
    console.log(response);
    return response?.data || [];
}


export const ProjService = {
    getCustomer,
    postCustomer,
    deleteCustomer,
    putCustomer
}