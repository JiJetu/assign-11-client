
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
  // Replace with your HERE Maps API credentials
  const hereAppId = 'YOUR_APP_ID';
  const hereAppCode = 'YOUR_APP_CODE';

  // Define the base map URL for HERE Maps
  const hereTileUrl = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?app_id=${hereAppId}&app_code=${hereAppCode}`;

  return (
    <div 
    className='h-96 w-96'
    style={{ width: '100%', height: '400px' }}>
      <MapContainer center={[52.5200, 13.4050]} zoom={12} >
        <TileLayer url={hereTileUrl} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
