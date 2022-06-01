import React from 'react';
import "../../styles/index.css";
export default function ContentProducts({props}) {
    const [localData,setLocalData] = React.useState({});
    
    function handleclick() {
        if(!localData.productID || !localData.discount ) {
            alert("Preencha todos os campos!");
        } else {
            props.setDataProduct([localData.productID,localData.discount]);
        }
    }
    
    
    return (
      <div className="center-div mt-5">
        <div className="row" >
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>product ID</label>
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
            <div className="col-md-3">
                <div className="form-group">
                    <label>discount</label>
                    <input type="text" name="discount" placeholder="discount" onChange={({target}) =>{ setLocalData({...localData,discount:target.value})}}  />
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>
        <div className="row" >
            <div className="col-md-4">
            </div>
            <div className="col-md-6">
            <button className="btn btn-o" onClick={() => handleclick()}>Enviar</button> 
            </div>
            <div className="col-md-4">
            </div>
        </div>
      </div>
    );

}