import { MarkerF } from "@react-google-maps/api";

export default function Markers({obj}) {

    let result = obj.map( (city) => {
      return <MarkerF position={{lat: city.latitude, lng: city.longitude}}/>
    });
    
    return (
      <>
      {result}
      </>
    )
  }
  