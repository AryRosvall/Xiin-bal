import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../assets/styles/components/placerating.scss';

class MiniMap extends Component {

  // eslint-disable-next-line react/state-in-constructor
  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
  };

  onMarkerClick = (props, marker) => this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
  });

  render() {

    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    const { location, name, id, google } = this.props;
    console.log(this.props);
    return (
      <div id='map' className='placeDetail__miniMap'>
        <Map
          google={google}
          zoom={15}
          initialCenter={{ lat: location.lat, lng: location.long }}
        >
          <Marker
            onClick={this.onMarkerClick}
            position={{ lat: location.lat, lng: location.long }}
            name={name}
            key={id}
          />

          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>

      </div>
    );
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MiniMap);

export default connect(null, null)(WrappedContainer);
