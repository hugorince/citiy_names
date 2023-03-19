import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Markers from "./Markers";


export default function Map({data}) {
    //const center = useMemo(()=>({lat:48, lng: 2}), []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      })
      if (!isLoaded) return <div>Loading...</div>
    return (
      <>
      <GoogleMap zoom={2.2} center={{ lat: 45, lng: 2.5 }} mapContainerClassName="map-container">
      <Markers obj={data}/>
      </GoogleMap>
      </>
    );
             
  }