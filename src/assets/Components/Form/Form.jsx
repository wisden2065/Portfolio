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
    <section className='formSection' id='contact-section'> 
      <h3 className='skills_title'>Contact</h3>
      <div className="formWrapper">
        <form action="" onSubmit={sendMail}>
            <input className='input' name='name' type="text" placeholder='Name' onChange={(e)=>{handleChanges(e)}} />
            <input className='input' name='email' type="text" placeholder='Email' onChange={(e)=>{handleChanges(e)}} />
            <textarea className='input' name="contact_text" id="" onChange={(e)=>{handleChanges(e)}} ></textarea>
            <button >Send</button>
        </form>
        
      </div>
      
    </section>
  )
}

export default Form
