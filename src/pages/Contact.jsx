import React from 'react'



export default function Contact() {
  return (
    <div className='contact--page'>
       <div className="container">
        <h1 className='section--title'>Contact Us</h1>
        <form action="action_page.php" className='contact--form'>
          <div className='form-group'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.."/>
          </div>
          <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email.."/>
          </div>
          <div className='form-group'>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Your Subject..."/>
          </div>
          <div className='form-group'>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write something.."></textarea>
          </div>
          <input type="submit" value="Submit" className='submit'/>
        </form>
      </div>
    </div>
  )
}
