import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = () => {

    const [contactDetails, setContactDetails] = useState(
        {
            name: '',
            email: '',
            contact_text: ''
        }
    )

    function handleChanges(e){
        // console.log(e.target.value);
        // console.log(e.target.name);
        
        setContactDetails({...contactDetails, [e.target.name]: e.target.value })
        // console.log(contactDetails);
        
    }
    function sendMail(e){
        e.preventDefault()
        console.log(contactDetails);
        
    }
  return (
    <section className='formSection'> 
      <h3>Contact</h3>
      <div className="formWrapper">
        <form action="" onSubmit={sendMail}>
            <input name='name' type="text" placeholder='Name' onChange={(e)=>{handleChanges(e)}} />
            <input name='email' type="text" placeholder='Email' onChange={(e)=>{handleChanges(e)}} />
            <textarea name="contact_text" id="" onChange={(e)=>{handleChanges(e)}} ></textarea>
            <button >Send</button>
        </form>
        
      </div>
      
    </section>
  )
}

export default Form
