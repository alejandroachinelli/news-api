import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Everything from '../components/Everything';
import TopHeadline from '../components/TopHeadline';
import NavigationBar from '../components/Navbar';
import { Container } from 'semantic-ui-react';
import Carousel from '../components/Carousel';

export default function News() {

  return (
    <Router>
        <NavigationBar/>
        <Container style={{marginTop: '7em' }}>
          <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/api/news/top-headline" element={<TopHeadline />} />
              <Route path="/api/news/search" element={<Everything />} />
          </Routes>
        </Container>
    </Router>
  )
}