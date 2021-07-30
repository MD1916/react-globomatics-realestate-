import React from 'react';
import {useState} from 'react';
import emailjs from 'emailjs-com';
const Inquiry = ()=>{
    const[contactInfo,setContactInfo]=useState({
        name:"",
        email:"",
        remarks:""
    });
    const onChange=(e)=>{
        setContactInfo({...contactInfo,[e.target.id]:e.target.value});

    };
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(contactInfo);
        emailjs.sendForm('service_vjdi0k9','template_daiqoya',e.target,'user_sC0yHXXGvY7ffLq4A9jVb')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text)
        }
        );
        e.target.reset();
    };


return (
    <form className="mt-2" onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor ="name">Name</label>
            <input id="name" type="text"
            placeholder="Name"
            value={contactInfo.name}
            className="form-control"
            name="name"
            onChange={onChange}/>

    </div>
    <div className="form-group">
            <label htmlFor ="email">Email</label>
            <input id="email" type="email"
            placeholder="Email"
            value={contactInfo.email}
            className="form-control"
            name="email"
            onChange={onChange}/>


    </div>
    <div className="form-group">
    <label htmlFor ="remarks">Remarks</label>
    <input id="remarks" type="text"
    placeholder="remarks"
    value={contactInfo.remarks}
    className="form-control"
    name="remarks"
    onChange={onChange}/>



</div>
<input type="submit" className="btn btn-primary mt-2" disabled={!contactInfo.name || !contactInfo.email}  value="submit"/>
    </form>
    
);
};
export default Inquiry;