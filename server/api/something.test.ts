import { CarrierType, EnvironmentType } from "../../interfaces/GeoEvent";
import { getGeoEvents } from "./events.get";

describe("Given the getgeoEvents function", () => {
  describe("When the function is invoked", () => {
    test("Then it should return an array of GeoEvents", async () => {});

    // Act (When)
    const result = getGeoEvents();

    // Assert (Then)
    // Check that result is an array with one element
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);

    const geoEvent = result[0];

    // Verify the structure of the GeoEvent object
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

    // Check that properties are valid enums
    expect(Object.values(EnvironmentType)).toContain(
      geoEvent.properties.environment
    );
    expect(Object.values(CarrierType)).toContain(geoEvent.properties.carrier);
  });
});
