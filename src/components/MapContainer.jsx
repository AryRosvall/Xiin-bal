import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../assets/styles/components/map.scss';

const styles = {
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  height: '70vh',

}

class MapContainer extends Component {


  render() {
    
    return(
      <div id='map'>
        <Map 
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
