import React from 'react'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
const Services = () => {
  return (
    <Layout>
    <div>
    <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <p>Column 1</p>
    </div>
    <div class="col-sm-4">
      <p>Column 2</p>
    </div>
    <div class="col-sm-4">
      <p>Column 3</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <p>Row 2, Column 1</p>
    </div>
    <div class="col-sm-4">
      <p>Row 2, Column 2</p>
    </div>
    <div class="col-sm-4">
      <p>Row 2, Column 3</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <p>Row 3, Column 1</p>
    </div>
    <div class="col-sm-4">
      <p>Row 3, Column 2</p>
    </div>
    <div class="col-sm-4">
      <p>Row 3, Column 3</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <p>Row 4, Column 1</p>
    </div>
    <div class="col-sm-4">
      <p>Row 4, Column 2</p>
    </div>
    <div class="col-sm-4">
      <p>Row 4, Column 3</p>
    </div>
  </div>
</div>
    </div>
    </Layout>
  )
}

export default Services