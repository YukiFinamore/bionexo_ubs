import React, { useState, useEffect } from 'react';
import { getHospitals } from '../../../services/api';
import Header from '../../../components/Header';
import UbsCard from '../../../components/UbsCard';
import GoogleMapReact from 'google-map-react';
import "./styles.scss";

const AnyReactComponent = ({ text }) => <div className="marker-item">{text}</div>;

const Home = () => {
  const [mapCenter, setMapCenter] = useState('')
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    getHospitals(mapCenter)
    .then(response => {
      setHospitals(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [mapCenter]);

  return (
    <div className="App">
      <Header/>

      <div className="ubs-list-container">
        <UbsCard/>
      </div>

      <div className="map-container">
        <GoogleMapReact
          onChange={({center}) => setMapCenter(`${center.lat}, ${center.lng}`)}
          bootstrapURLKeys={{ key: 'AIzaSyAbLNX2SRGGodG0eWxAzp5WeQGRHBD3hk8' }}
          defaultCenter={{
            lat: -23.5428363,
            lng: -46.637257
          }}
          defaultZoom={15}
        >
          {
            hospitals.length > 0 &&
            hospitals.map((hospital, index) => 
              <AnyReactComponent
                key={index}
                lat={hospital.geocode.lat}
                lng={hospital.geocode.long}
                text={index}
              />
            )
          }
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Home;
