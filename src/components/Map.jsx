import React from 'react';
import GoogleMapReact from 'google-map-react';
import iss from './iss-img.png';

function Map({ center, zoom }) {
  return (
    <>
        <div className="map-container">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyA_Z7zuEFBsuohAS0M4wxbdwFXwDg5Dibo' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <img src={iss} alt="ISS icon" className="iss-icon" 
                    lat={center.lat}
                    lng={center.lng}
                />
            </GoogleMapReact>
        </div>
    </>
  )
}

Map.defaultProps = {
    center: {
        lat: 20.5937,
        lng: 78.9629
    },
    zoom: 11,
}

export default Map;