import {
  CarrierType,
  EnvironmentType,
  type GeoEvent,
} from "../../interfaces/GeoEvent";

const bbox = [-4.12719, 40.187386, -3.258868, 40.647991];

export const getGeoEvents = () => {
  const environmentValues = Object.values(EnvironmentType);
  const carrierValues = Object.values(CarrierType);

  const randomEnvironment =
    environmentValues[Math.floor(Math.random() * environmentValues.length)];
  const randomCarrier =
    carrierValues[Math.floor(Math.random() * carrierValues.length)];

  const [cornerAX, cornerAY, cornerBX, cornerBY] = bbox;
  const geoEvents: GeoEvent[] = [];
  const newPointX = (cornerAX - cornerBX) * Math.random() + cornerAX;
  const newPointY = (cornerAY - cornerBY) * Math.random() + cornerAX;

  const newEvent: GeoEvent = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [newPointX, newPointY],
    },
    properties: {
      environment: randomEnvironment,
      carrier: randomCarrier,
    },
  };

  geoEvents.push(newEvent);

  return geoEvents;
};

// export default definedEventHandler((event) => {});
