import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../assets/styles/components/map.scss';

class MapContainer extends Component {

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
    const { places, google } = this.props;
    console.log(this.props);

    return (
      <div id='map'>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {
            places.map((place) => (
              <Marker
                onClick={this.onMarkerClick}
                position={{ lat: place.location.lat, lng: place.location.long }}
                name={place.name}
                key={place.id}
              />
            ))
          }
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

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);

export default connect(mapStateToProps, null)(WrappedContainer);
