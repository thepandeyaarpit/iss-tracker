import './App.css';
import Map from './components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState(76.7179);
  const [latitude, setLatitude] = useState(30.7046);

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    setLoading(true)
    const res = await axios.get('http://api.open-notify.org/iss-now.json')
    // console.log(res);
    const { longitude, latitude } = await res.data.iss_position

    setLongitude(parseFloat(longitude))
    setLatitude(parseFloat(latitude))
    setLoading(false)
    
  }

  return <div className='App'>{!loading ? (<Map center={{ lat: latitude, lng: longitude }} zoom={6} />) : (<h1>Loading</h1>)}</div>

  return (
    <Map />
  );
}

export default App;
