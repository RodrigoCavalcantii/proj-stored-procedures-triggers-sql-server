import React from 'react';
import "../../../styles/index.css";
export default function ContentOrderPost({props}) {
    const [localData,setLocalData] = React.useState({});
    const [cart,setCart] = React.useState([]);

    function addCart() {
      if(localData?.productID && localData?.quantity) {
        setCart([...cart , {productID:localData.productID,quantity:localData.quantity}]);
        setLocalData({...localData,productID:"",quantity:""})
      } else {
        alert("Informe o produto e sua quantidade !")
      }
    }

    function removeItem(obj){
      var newArray = cart.filter((item) => item.productID !== obj.productID && item.quantity !== obj.quantity);
      setCart(newArray)
    }

    function sendCart() {
        props.setNewOrder({cart:cart,values:localData})
    }
    
    return (
      <div className="center-div mt-5">
      <div className="row" >
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
              <div className="form-group">
                  <label>customer Id</label>
                  <input type="text" name="customerId" placeholder="customerId" onChange={({target}) =>{ setLocalData({...localData,customerId:target.value})}} value={localData?.customerId && localData?.customerId} />
              </div>
          </div>
          <div className="col-md-3">
              <div className="form-group">
                  <label>employee ID</label>
                  <input type="text" name="employeeID" placeholder="employeeID" onChange={({target}) =>{ setLocalData({...localData,employeeID:target.value})}} value={localData?.employeeID && localData?.employeeID} />
              </div>
          </div>
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
          </div>
      </div>
        <div className="row" >
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>ship Name</label>
                    <input type="text" name="shipName" placeholder="shipName" onChange={({target}) =>{ setLocalData({...localData,shipName:target.value})}} value={localData?.shipName && localData?.shipName} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>shipAddress</label>
                    <input type="text" name="shipAddress" placeholder="shipAddress" onChange={({target}) =>{ setLocalData({...localData,shipAddress:target.value})}} value={localData?.shipAddress && localData?.shipAddress} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>shipCity</label>
                    <input type="text" name="shipCity" placeholder="shipCity" onChange={({target}) =>{ setLocalData({...localData,shipCity:target.value})}} value={localData?.shipCity && localData?.shipCity} />
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>shipRegion</label>
                    <input type="text" name="shipRegion" placeholder="shipRegion" onChange={({target}) =>{ setLocalData({...localData,shipRegion:target.value})}} value={localData?.shipRegion && localData?.shipRegion} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>shipPostalCode</label>
                    <input type="text" name="shipPostalCode" placeholder="shipPostalCode" onChange={({target}) =>{ setLocalData({...localData,shipPostalCode:target.value})}} value={localData?.shipPostalCode && localData?.shipPostalCode} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>shipCountry</label>
                    <input type="text" name="shipCountry" placeholder="shipCountry" onChange={({target}) =>{ setLocalData({...localData,shipCountry:target.value})}} value={localData?.shipCountry && localData?.shipCountry} />
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>
        <div className="row" >
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label>product ID</label>
                    {/* <input type="text" name="product ID" placeholder="productID" onChange={({target}) =>{ setLocalData({...localData,productID:target.value})}} value={localData?.productID && localData?.productID} /> */}
                    <select type="select" name="selectProd" placeholder="productID"  onChange={({target}) =>{ setLocalData({...localData,productID:target.value})} } >
                        {props?.products &&
                            <option value="">Selecione</option>
                            
                        }
                        {props?.products.map((obj) => {
                                return <option value={obj.productID+";"+obj.productName+";$"+obj.unitPrice}>{obj.productName} - ${obj.unitPrice} - {obj.quantityPerUnit} </option>
                            })
                            }
                        
                    </select>
                </div>
            </div>
            {/* <div className="col-md-2">
                <div className="form-group">
                    <label>product ID</label>
                    <input type="text" name="product ID" placeholder="productID" onChange={({target}) =>{ setLocalData({...localData,productID:target.value})}} value={localData?.productID && localData?.productID} />
                </div>
            </div> */}
            <div className="col-md-2">
                <div className="form-group">
                    <label>quantity</label>
                    <input type="text" name="quantity" placeholder="quantity" onChange={({target}) =>{ setLocalData({...localData,quantity:target.value})}} value={localData?.quantity && localData?.quantity} />
                </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-o" onClick={() => addCart()}>Add</button>
            </div>
            <div className="col-md-4">
            </div>
        </div>
        <div className="row" >
            <div className="col-md-4">
            </div>
            <div className="col-md-6">
            {cart?.length > 0 && 
                    <table>
                        <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td>Product </td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map(obj => { 
                                return (<tr key={obj.productID+obj.quantity}>
                                    <td><a className="btn-remove" onClick={() => removeItem(obj)} >X</a></td>
                                    <td>{obj.productID.replaceAll(";"," - ")}</td>
                                    <td>{obj.quantity}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                }
            </div>
            <div className="col-md-4">
            </div>
        </div>
        <div className="row" >
            <div className="col-md-4">
            </div>
            <div className="col-md-6">
            {cart?.length > 0 && <button className="btn btn-o" onClick={() => sendCart()}>Enviar</button> }
            </div>
            <div className="col-md-4">
            </div>
        </div>
      </div>
    );

}