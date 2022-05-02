import React from 'react'
import { Button, Card, Row, Col } from 'antd';
import "antd/dist/antd.css";
import "./index.css"

function index() {
  return (
  <>    
  

 
    {/* --------------------------------- */}

    <Row gutter={16}>
      <Col span={12}>
      <Card  className="multiplier-card" title="Mutliplier"  bordered={false}>
     <div className="card-wrapper">
     <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
     </div>

    </Card>
      </Col>
      <Col span={12}>
        <Card   className="multiplier-card" title="Round" bordered={false}>
        <div className="card-wrapper">
     <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
    <Button type="primary" className="mrButton">50</Button>
     </div>
        </Card>
      </Col>
      
    </Row>


  </>

  )
}

export default index