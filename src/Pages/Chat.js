import React, { useState } from 'react'
import './chat.css';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
function Chat() {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

const handleEmailSend=(e)=>{
      e.preventDefault();

      const serviceId = 'service_1aqnrmq';
      const templateId = 'template_wldpa9v';
      const publickey = 'rWkAy4p5PsLsdibfy';

      const templateParams = {
        from_name:name,
        from_email:email,
        to_name:'Bhakur Organics',
        mobile:phone,
        message:message,
        reply_to:email
        
      }

      console.log(name,email,message,phone);
      emailjs.send(serviceId,templateId,templateParams,publickey)
      .then((response)=>{
        console.log("email sent successfully",response);
        alert("Message Sent");
        setName('');
        setMessage('');
        setEmail('');
        setPhone('');

      })
      .catch((e)=>{
        console.log("error occured")
      })


}


  return (
    <div className='chat-div'>
        <div className='email-form'>
            <h2>Write your Query</h2>
            <form onSubmit={handleEmailSend}>
                <div className='field'>
                  <label for="name">Name</label><br/>
                  <input type='text' placeholder='Enter Name' id='name' required="required" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='field'>
                    <label for="email">Email</label><br/>
                    <input type='email' placeholder='Enter email' id='email' required="required" onChange={(e)=>setEmail(e.target.value)}/>    
                </div>
                
                <div className='field'>
                    <label for="phonenumber">Phone Number</label><br/>
                    <input type="tel" placeholder='Enter 10-digit mobile number' pattern='[0-9]{10}' id="phonenumber" 
                    required="required" inputMode='numeric' onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                
                <div className='field'>
                    <label for="query">write your Query</label><br/>
                    <textarea id='query' onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>

                <div className='field'>
                  <button type='submit' className='email-btn'>Submit</button>
                </div>
                
            </form>
        </div>

        <div>OR</div>
        <div className='whatsapp-div'>
        <a href="https://wa.me/9407464630" target="_blank"  style={{textDecoration:"none"}}>
          <button className='btn-whatapp'><FaWhatsapp style={{fontSize:"30px"}}/><span>Connect On Whatsapp </span> </button>  
         </a>
         </div>
    </div>
  )
}

export default Chat