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
      
        
        
        <Container class='cnt'>
          <div class='cont'>
      <h1 className="text-center mt-50" class='head'>All Blogs</h1>
      </div>
      {postss.map((posts,i)=>
      (
      <Card key={i} className='card mt-5 pt-5' style={{ width: '70rem' }}>
      
      <Card.Body>
      
        <Card.Title>{posts.id}</Card.Title>
        <Card.Text>
          {posts.title}
        </Card.Text>
        
        <Button variant="primary">More...</Button>
      </Card.Body>
    </Card>
      )
      )}

      
      </Container>
    </div>
  );
}