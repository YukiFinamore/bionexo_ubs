import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import "intersection-observer";
import { ScrollView } from "@cantonjs/react-scroll-view";
import { getHospitals, filterByInput } from '../../../services/api';
import Header from '../../../components/Header';
import UbsCard from '../../../components/UbsCard';
import GoogleMapReact from 'google-map-react';
import "./styles.scss";

const Marker = ({ index, name, address }) => 
  <div className="marker-item">
    <p className="index-number">
      {index + 1}
    </p>

    <div className="hospital-info">
      <h2>
        {name}
      </h2>

      <p>
        {address}
      </p>
    </div>
  </div>;

const Home = () => {
  const [mapCenter,         setMapCenter]         = useState('-23.5428363, -46.637257')
  const [test,              setTest]              = useState({lat: -23.5428363, lng: -46.637257})
  const [hospitals,         setHospitals]         = useState([])
  const [search,            setSearch]            = useState('')
  const [hospitalsBySearch, setHospitalsBySearch] = useState([])
  const [page,              setPage]              = useState(1)


  useEffect(() => {
    getHospitals(mapCenter)
    .then(response => {
      setHospitals(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [mapCenter]);

  const getListByTerm = (page) => {
    filterByInput(search, page)
    .then(response => {
      if (page > 1) {
        setHospitalsBySearch(hospitalsBySearch.concat(response.data))
      } else {
        setHospitalsBySearch(response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const endReached = () => {
    getListByTerm(page + 1)
    setPage(page + 1)
  };

  const onClickSearchByTerm = () => {
    setPage(1)
    getListByTerm(1)
  }

  return (
    <div className="App">
      <Header/>

      <div className="input-container">
        <InputGroup>
          <input 
            type="text" 
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Busca"
          />

          <InputGroup.Append>
            <Button disabled={search.length < 3 ? true : false} className="search-button" variant="outline-secondary" onClick={() => onClickSearchByTerm()}>
              <FaSearch/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

      <ScrollView 
        onEndReached={search.length > 3 && endReached}
        className="ubs-list-container"
      >
        {
          hospitalsBySearch.length > 0 &&
          hospitalsBySearch.map((hospital, index) => 
            <UbsCard
              key={index}
              name={hospital.name}
              address={hospital.address}
              city={hospital.city}
              phone={hospital.phone}
              onClickHospital={() => setTest({lat: hospital.geocode.lat, lng: hospital.geocode.long})}
            />
          )
        }
      </ScrollView>
        
      <div className="map-container">
        <GoogleMapReact
          onChange={({center}) => setMapCenter(`${center.lat}, ${center.lng}`)}
          bootstrapURLKeys={{ key: 'AIzaSyAbLNX2SRGGodG0eWxAzp5WeQGRHBD3hk8' }}
          center={test}
          defaultZoom={13}
        >
          {
            hospitals.length > 0 &&
            hospitals.map((hospital, index) => 
              <Marker
                key={index}
                lat={hospital.geocode.lat}
                lng={hospital.geocode.long}
                index={index}
                name={hospital.name}
                address={hospital.address}
              />
            )
          }
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Home;
