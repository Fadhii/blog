import React from 'react'
import '../css/Form.css'

import Form from "react-bootstrap/Form";

export default function AddForm() {
  return (
    <div>
  <div class="login-box">
  
  <Form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Blog Name</label>
    </div>
    <div class="user-box">
      
      <input type="text" name="" required=""/>
      <label>Description</label>
    </div>
   
    <div class="user-box">
      
      <input type="text" name="" required=""/>
      <label>Author</label>
      </div>
      <a href="/submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </Form>
</div></div>
  )
}