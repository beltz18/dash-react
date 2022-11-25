// import React from 'react'
// // import { MapContainer, Marker, TileLayer } from 'react-leaflet'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import useGeoLocation from '../../hook/location/useLocation'

// const Map = () => {
//   const location = useGeoLocation()

//   return location.loaded ? (
//     <MapContainer
//       center={[location.coord.lat,location.coord.lng]}
//       zoom={13}
//       className="Map"
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//       />
//       <Marker
//         key={1}
//         position={[location.coord.lat,location.coord.lng]}
//       >
//         <Popup>
//           I am a pop-up!
//         </Popup>
//       </ Marker>
//     </MapContainer>
//   ) : (
//     <h1>
//       {location.error}
//     </h1>
//   )
// }

// export default Map