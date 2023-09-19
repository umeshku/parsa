import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl, FeatureGroup, Circle, Rectangle } from 'react-leaflet'
import { DataContext } from '../DataContext';
export const Map1= (props) => {

    const Data=useContext(DataContext)
    const household=Data.household
    const center = [26.45708701, 87.29974413]



    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>MAP </h5>
                    
                    <MapContainer center={[ props.household.Latitude, props.household.Longitude]} zoom={13} scrollWheelZoom={false}>
                    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
     
      <LayersControl.Overlay checked name="Household">
        
        
            <Marker  
           
            position={[ props.household.Latitude, props.household.Longitude]}>
                {/* {console.log(Data && house.Latitude, Data && house.Longitude)} */}
                <Popup>
            <a href={`http://www.google.com/maps/place/${props.household.Latitude},${props.household.Longitude}`} target="_blank"> {props.household.Q7} <br/>Click Here to see in GoogleMap </a>
          </Popup>
            </Marker>
        
      </LayersControl.Overlay>
    </LayersControl>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
