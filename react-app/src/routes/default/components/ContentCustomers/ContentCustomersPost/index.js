import React from 'react';
import "../../../styles/index.css";
export default function ContentCustomerPost({props}) {
    const [localData,setLocalData] = React.useState({});
    
    return (
      <div className="center-div mt-5">
        <div className="row" >
            <div className="col-md-3">
                <div className="form-group">
                    <label>Customer Id</label>
                    <input type="text" name="customer Id" placeholder="customerId" onChange={({target}) =>{ setLocalData({...localData,customerId:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name="company Name" placeholder="companyName" onChange={({target}) =>{ setLocalData({...localData,companyName:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Contact Name</label>
                    <input type="text" name="contact Name" placeholder="contactName" onChange={({target}) =>{ setLocalData({...localData,contactName:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Contact Title</label>
                    <input type="text" name="contact Title" placeholder="contactTitle" onChange={({target}) =>{ setLocalData({...localData,contactTitle:target.value})}} />
                </div>
            </div>
        </div>
        <div className="row" >
            <div className="col-md-3">
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="address" onChange={({target}) =>{ setLocalData({...localData,address:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" placeholder="city" onChange={({target}) =>{ setLocalData({...localData,city:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Region</label>
                    <input type="text" name="region" placeholder="region" onChange={({target}) =>{ setLocalData({...localData,region:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" name="postal Code" placeholder="postalCode" onChange={({target}) =>{ setLocalData({...localData,postalCode:target.value})}} />
                </div>
            </div>
        
        </div>
        <div className="row" >
            <div className="col-md-3">
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" name="country" placeholder="country" onChange={({target}) =>{ setLocalData({...localData,country:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="phone" onChange={({target}) =>{ setLocalData({...localData,phone:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Fax</label>
                    <input type="text" name="fax" placeholder="fax" onChange={({target}) =>{ setLocalData({...localData,fax:target.value})}} />
                </div>
            </div>
            <div className="col-md-3">
                <button className="btn btn-go" onClick={() => props.sendDataCustomerPost(localData)}>Enviar</button>
            </div>
        </div>
      </div>
    );

}