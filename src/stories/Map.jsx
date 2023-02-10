import React from 'react';
import PropTypes from 'prop-types';
import {
  Map as KendoMap,
  MapLayers,
  MapShapeLayer,
  MapTileLayer,
  MapBubbleLayer,
  MapMarkerLayer,
} from "@progress/kendo-react-map";
import './assets/index.scss';
import usersPerCountry from "./assets/map_data.json";
import urbanAreas from "./assets/urbanareas.json";

export const Map = ({...props }) => {
  const center = [30.2686, -97.7494];

  const tileUrl = (e) =>
  `https://tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = "© OpenStreetMap contributors";

const shapeStyle = {
  fill: {
    color: "green",
  },
};

const bubbles = urbanAreas;
const bubbleStyle = {
  fill: {
    color: "orange",
    opacity: 0.5,
  },
  stroke: {
    width: 1,
    color: "black",
  },
};

const markers = [
  {
    latlng: [30.2675, -97.7409],
    name: "Zevo Toys",
  },
  {
    latlng: [30.2707, -97.749],
    name: "Foo Bars",
  },
  {
    latlng: [30.2705, -97.7409],
    name: "Mainway Toys",
  },
  {
    latlng: [30.2686, -97.7494],
    name: "Acme Toys",
  },
];

const controls = {
  controls: {
    attribution: { position: props.attribution},
    navigator: { position: props.navigator},
    zoom: { position: props.zoom}
  }
}

  return (
    <>
      <KendoMap center={center} {...props} {...controls}>
        <MapLayers>
          <MapTileLayer urlTemplate={tileUrl} attribution={attribution} />
          { props.shapes &&
            <MapShapeLayer data={usersPerCountry} style={shapeStyle} />
           }
           { props.bubbles &&
          <MapBubbleLayer
            data={bubbles}
            locationField="Location"
            valueField="Pop2010"
            attribution="Population data from Nordpil and UN Population Division."
            style={bubbleStyle}
          />
          }
          { props.markers &&
          <MapMarkerLayer
            data={markers}
            locationField="latlng"
            titleField="name"
          />
          }
        </MapLayers>
      </KendoMap>
    </>
  );
};

Map.propTypes = {
  center: PropTypes.any,
  className: PropTypes.string,
  // Controls Props
    attribution: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
    navigator: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
    zoom: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  maxZoom: PropTypes.number,
  minSize: PropTypes.number,
  minZoom: PropTypes.number,
  pannable: PropTypes.bool,
  style: PropTypes.any,
  wraparound: PropTypes.bool,
  zoom: PropTypes.number,
  zoomable: PropTypes.bool
};

Map.defaultProps = {
};
