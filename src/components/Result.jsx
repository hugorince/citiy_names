import { useEffect, useState } from "react";

export default function Result({city}){
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    let countries = [];

    city.map((ville) => {
        const arr = ville.name.split(',');
        const country = arr[arr.length -1];
        if (countries.includes(country) === false){
          countries.push(country);
        }
    })

    setCountries(countries.map((country) => {
      return <div className="flex space-x-4" key={country}>
              <h2>{country}</h2>
            </div>
    }))  
  }, [city]);
    
    if(city[0]) {
    return (
        <>
        <div className="flex flex-col items-center justify-center text-indigo-900 pb-8">
          <div className="text-2xl">Countries where there is at leat one city called <a className="italic font-bold">{city[0].short}</a> :</div>
          <div className="flex space-x-8 items-center justify-center text-2xl">
            {countries}
          </div>
      </div>
        </>
    )
}
}