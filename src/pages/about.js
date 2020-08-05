import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title='About'/>
      <h1>About</h1>
      <p>Hi, I'm Kellyn and as Einstein I have no special talents, I'm only passionately curious. ❤️</p>
      <p>Want to work whith me?<Link to='/contact'> Reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage;
