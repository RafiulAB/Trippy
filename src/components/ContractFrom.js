import React from 'react';
import './ContractFrom.css'
const ContractFrom = () => {
    return (
        <div className='form-container'>
         <h1>Send message to us!</h1>
        <form> 
        <input type="text" placeholder="Name"  />
         <input type="text" placeholder="Email"  />
         <input type="text" placeholder="subject"  />
         <textarea placeholder='Message' rows="10"></textarea>
         <button className='message-btn'>Send Message</button>
        </form>
        </div>
    );
};

export default ContractFrom;