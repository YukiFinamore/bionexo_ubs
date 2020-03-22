import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

const UbsCard = ({
  name,
  address,
  city,
  phone,
  geocode,
  onClickHospital
}) => {
  return (
    <div className="ubs-card-container">
      <Card border="light" style={{ width: '18rem' }}>
        <Card.Header className="ubs-name">
          <a 
            href="#!"
            onClick={() => onClickHospital()}
          >
            {name}
          </a>
        </Card.Header>

        <Card.Body>
          <Card.Title className="ubs-locale">
            {address}
            {city}
          </Card.Title>

          <Card.Text className="ubs-phone">
            <b>Telefone:</b>
            {phone}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UbsCard