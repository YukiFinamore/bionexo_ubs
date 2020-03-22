import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

const UbsCard = (props) => (
  <div className="ubs-card-container">
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Header className="ubs-name">
        1. UBS Jardim Europa
      </Card.Header>

      <Card.Body>
        <Card.Title className="ubs-locale">
          Rua Pascal, 1382 - Jardim Europa - SP
        </Card.Title>

        <Card.Text className="ubs-phone">
          <b>Telefone:</b>
          011 4157-8945         
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default UbsCard