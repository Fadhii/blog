import React from 'react'

import '../css/Header.css'

export default function Header() {
  return (
    <div>
   
    <header id="topnav">
    <div class="inner">
      <div class="logo">Blog</div>
      <nav role='navigation'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/form">Add Blog</a></li>
        </ul>
      </nav>  
    </div>
  </header>
  
</div>
  )
}