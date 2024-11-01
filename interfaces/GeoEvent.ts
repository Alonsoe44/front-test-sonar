import type { Feature, Point } from "geojson";

export enum EnvironmentType {
  INDOOR = "INDOOR",
  OUTDOOR = "OUTDOOR",
  VEHICLE = "VEHICLE",
}

export enum CarrierType {
  ORANGE = "ORANGE",
  MOVISTAR = "MOVISTAR",
  VODAFONE = "VODAFONE",
}

export interface MetadataEvent {
  environment: EnvironmentType;
  carrier: CarrierType;
}

export interface GeoEvent extends Feature<Point, MetadataEvent> {}
