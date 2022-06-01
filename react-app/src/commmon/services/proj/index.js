import ProjFetchAPI from "./api"


const getCustomer = async (dataCustomerGet) => {
    let idC = "";

    if(dataCustomerGet && dataCustomerGet !== "0") {
        idC = "/"+dataCustomerGet;
    }

    const json = {};
    
    const response = await ProjFetchAPI.get(`http://localhost:8080/customers`+idC, { body: json });
    return response?.data || [];
} 

const getOrder = async (dataorderGet) => {
    let idC = "";

    if(dataorderGet && dataorderGet !== "0") {
        idC = "/"+dataorderGet;
    }

    const json = {};
    
    const response = await ProjFetchAPI.get(`http://localhost:8080/orders`+idC, { body: json });
     
    return response?.data || [];
} 

const deleteCustomer = async (dataCustomerDelete) => {
    let idC = "";

    if(dataCustomerDelete && dataCustomerDelete !== "0") {
        idC = "/"+dataCustomerDelete;
    }

    const json = {};
    
    const response = await ProjFetchAPI.delete(`http://localhost:8080/customers`+idC, { body: json });
     
    return response?.data || [];
}

const postCustomer = async (dataCustomerPost) => {

    const json = dataCustomerPost;
    
    const response = await ProjFetchAPI.post(`http://localhost:8080/customers`, { body: json });
     
    return response?.data || [];
}
const putCustomer = async (dataCustomerPost) => {

    const json = {
        "companyName": dataCustomerPost.companyName,
        "contactName": dataCustomerPost.contactName,
        "contactTitle": dataCustomerPost.contactTitle,
        "postalCode": dataCustomerPost.postalCode,
        "region": dataCustomerPost.region,
        "city": dataCustomerPost.city,
        "address": dataCustomerPost.address,
        "country": dataCustomerPost.country,
        "phone": dataCustomerPost.phone,
        "fax": dataCustomerPost.fax
    };

    
    const response = await ProjFetchAPI.put(`http://localhost:8080/customers/`+dataCustomerPost.customerId, { body: json });
     
    return response?.data || [];
}

const postOrder = async (dataOrderPost) => {

    const json = {
        "customer": {
            "customerId": dataOrderPost.values.customerId
        },
        "employee": {
            "employeeID":Number(dataOrderPost.values.employeeID)
        },
        "shipVia": 3,
        "freight": Number(dataOrderPost?.cart?.length) * 5,
        "shipName": dataOrderPost.values?.shipName,
        "shipAddress": dataOrderPost.values?.shipAddress,
        "shipCity": dataOrderPost.values?.shipCity,
        "shipRegion": dataOrderPost.values?.shipRegion,
        "shipPostalCode": dataOrderPost.values?.shipPostalCode,
        "shipCountry": dataOrderPost.values?.shipCountry
    };

    const response = await ProjFetchAPI.post(`http://localhost:8080/orders`, { body: json });
     
    return response?.data || [];
}

const postOrderItem = async (dataOrderItemPost) => {

    const arProd = dataOrderItemPost.cart.cart[dataOrderItemPost.idCart].productID.split(";")
    const json = {
        "product": {
            "productID": Number(arProd[0])
        },
        "order": {
            "orderId": dataOrderItemPost.orderId.orderId
        },
        "unitPrice": Number(arProd[2].replace("$","")),
        "quantity": Number(dataOrderItemPost.cart.cart[dataOrderItemPost.idCart].quantity),
        "discount": 0.0
    };
    
    const response = await ProjFetchAPI.post(`http://localhost:8080/ordersDetail`, { body: json });
     
    return response?.data || [];
}


const getProducts = async () => {
   
    const json = {};
    
    const response = await ProjFetchAPI.get(`http://localhost:8080/products`, { body: json });
    return response?.data || [];
} 

const postProductDiscount = async (arData) => {

    const arDataAux = arData[0].split(";")
   
    const json = {
        "productId": Number(arDataAux[0]),
        "discount": Number(arData[1].replace(",","."))
    };
    
    const response = await ProjFetchAPI.post(`http://localhost:8080/products/discount`, { body: json });
    return response?.data || [];
} 


export const ProjService = {
    getCustomer,
    postCustomer,
    deleteCustomer,
    putCustomer,
    getOrder,
    postOrder,
    postOrderItem,
    getProducts,
    postProductDiscount
}