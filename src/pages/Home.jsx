import React from 'react'

import Container from 'react-bootstrap/Container';
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Home.css'

export default function App() {
  const[postss,setPosts]=useState([]);
  useEffect(()=>{
    getData();
  },[]);
  const getData=async () =>{
    try{
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"     
      );
      const formattedData = await incomingData.json();
      setPosts(formattedData);
      console.log(formattedData);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className='mx-5'>
      
      <div class='cont'>
      <h1 className="text-center mt-50" class='head'>All Blogs</h1>
      </div>
        
        <Container class='cnt'>
          
      <div>
      {postss.map((posts,i)=>
      (
      <Card key={i} className='card mt-5 pt-5' style={{ width: '70rem' }}>
      
      <Card.Body>
      
        <Card.Title class='title'>{posts.id}</Card.Title>
        <Card.Text class='txt'>
          {posts.title}
        </Card.Text>
        
        <Button variant="primary" style={{backgroundColor:'#0000', color: 'white'}}>More...</Button>
      </Card.Body>
    </Card>
      )
      )}</div>

      
      </Container>
      </div>
    
  );
}