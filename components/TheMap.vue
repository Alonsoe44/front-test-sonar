<template lang="pug">
#map.h-100.w-100
</template>

<script setup lang="ts">
import { Map as Maplibre } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { GeoEvent } from "~/interfaces/GeoEvent.js";

const props = defineProps<{
  events: GeoEvent[];
  colorBy: "env" | "carrier";
}>();

const mapRef = shallowRef<Maplibre | null>(null);

onMounted(() => {
  mapRef.value = markRaw(
    new Maplibre({
      container: "map",
      center: [-3.706512, 40.415587],
      zoom: 7,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          },
          events: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: props.events as GeoEvent[],
            },
          },
          bbox: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-4.12719, 40.187386],
                    [-4.12719, 40.647991],
                    [-3.258868, 40.647991],
                    [-3.258868, 40.187386],
                    [-4.12719, 40.187386],
                  ],
                ],
              },
              properties: {
                name: "[-4.12719,40.187386,-3.258868,40.647991]",
              },
            },
          },
        },
        layers: [
          {
            id: "base-tiles",
            source: "osm",
            type: "raster",
            layout: {
              visibility: "visible",
            },
          },
          {
            id: "bbox-outline",
            source: "bbox",
            type: "line",
            layout: {
              visibility: "visible",
            },
            paint: {
              "line-color": "#33632d",
              "line-width": 3,
            },
          },
          // Implementar aqui la layer para events
        ],
      },
    })
  );
});

// Implementar la reactividad a los cambios de props
</script>
