import { GeoEvent } from "~/interfaces/GeoEvent";
import { fakeGeoEvents } from "./events.get";

describe("Given the fakeGeoEvents function", () => {
  describe("When the function is invoked passing a 10 as an argument", () => {
    const expectedNumberOfElements = 10;
    const requestedNumberofEvents = 10;

    const result: GeoEvent[] = fakeGeoEvents(requestedNumberofEvents);
    const geoEvent: GeoEvent =
      result[Math.floor(Math.random() * requestedNumberofEvents)];

    test("Then it should return an array with 10 GeoEvents", async () => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(expectedNumberOfElements);
    });

    test("Then it should return an array of GeoEvents witht the right structure", async () => {
      expect(geoEvent).toEqual(
        expect.objectContaining({
          type: "Feature",
          geometry: expect.objectContaining({
            type: "Point",
            coordinates: expect.any(Array),
          }),
          properties: expect.objectContaining({
            environment: expect.any(String),
            carrier: expect.any(String),
          }),
        })
      );
    });
    test("Then it should return a geoEvent with the coordinates inside the limits of the map", async () => {
      const expectedXRange = [-4.12719, -3.258868];
      const expectedYRange = [40.187386, 40.647991];
      const xPoint: number = geoEvent.geometry.coordinates[0];
      const yPoint: number = geoEvent.geometry.coordinates[1];

      expect(xPoint).toBeGreaterThan(expectedXRange[0]);
      expect(xPoint).toBeLessThan(expectedXRange[1]);
      expect(yPoint).toBeGreaterThan(expectedYRange[0]);
      expect(yPoint).toBeLessThan(expectedYRange[1]);
    });
  });
});
