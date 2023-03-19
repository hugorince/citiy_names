import { useState, useEffect } from "react";
import css from './App.css';
import axios from "axios";
import Map from "./components/Map";
import Result from "./components/Result";
import Form from "./components/Form";
import Title from "./components/Title";


export default function App() {
  const [city, setCity] = useState('');
  const [coordonates, setCoordonates] = useState([]);

  const searchCity = async () => {
    
    const url = 'https://api.roadgoat.com/api/v2/destinations/auto_complete?q=' + city
    await axios.get(url, {
      auth : {
        username: process.env.REACT_APP_ROAD_GOAT_USERNAME,
        password: process.env.REACT_APP_ROAD_GOAT_PASSWORD
      }
    }).then((res) => {
        console.log(res.data.data)
        const gps = [];
        res.data.data.map(ville => {
        if (ville.attributes.short_name.toLowerCase() === city){
          gps.push({short: ville.attributes.short_name, name: ville.attributes.long_name, latitude: ville.attributes.latitude, longitude: ville.attributes.longitude})
        }})
        setCoordonates(gps);
      })
  }

  
  
  return (
    <>
    <div className="flex flex-col space-y-8 items-center bg-gradient-to-r from-cyan-100 to-blue-100 h-screen">
      <div className="pt-4 text-indigo-900">
      <Title />
      </div>
      <div className="drop-shadow-xl">
      <Form city={city} 
      searchCity={()=>{
        searchCity()}} 
        setCity={setCity}/>
        </div>
      <div className="border border-black w-9/12 drop-shadow-xl">
      <Map data={coordonates}/>
      </div>
      <Result city={coordonates} />
    </div>
    </>
    );
}