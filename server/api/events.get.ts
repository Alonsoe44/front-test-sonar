import {
  CarrierType,
  EnvironmentType,
  type GeoEvent,
} from "../../interfaces/GeoEvent";

const bbox = [-4.12719, 40.187386, -3.258868, 40.647991];

export const fakeGeoEvents = (eventsNumber: number): GeoEvent[] => {
  const environmentValues = Object.values(EnvironmentType);
  const carrierValues = Object.values(CarrierType);
  const [cornerAX, cornerAY, cornerBX, cornerBY] = bbox;
  const geoEvents: GeoEvent[] = [];

  for (let i = 0; i < eventsNumber; i++) {
    const randomEnvironment =
      environmentValues[Math.floor(Math.random() * environmentValues.length)];
    const randomCarrier =
      carrierValues[Math.floor(Math.random() * carrierValues.length)];

    const newPointX = (cornerBX - cornerAX) * Math.random() + cornerAX;
    const newPointY = (cornerBY - cornerAY) * Math.random() + cornerAY;

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
  }

  return geoEvents;
};

const getEventHandler = async () => {
  const data = fakeGeoEvents(10000);
  return data;
};

export default getEventHandler;
