/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';

const GeoLocation = () => {
  const lattitude = useSelector(state => state.lattitude);
  const longitude = useSelector(state => state.longitude);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: lattitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}>
        <Marker
          coordinate={{latitude: lattitude, longitude: longitude}}></Marker>
      </MapView>
    </View>
  );
};

export default GeoLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
