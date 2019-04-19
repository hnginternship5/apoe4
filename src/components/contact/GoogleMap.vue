<template>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;" class="first-section-reset"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Lagos coord to keep it simple
      center: { lat: 6.6080, lng: 3.6218 },
      markers: [],
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    addMarker() {
      if (this.center) {
        const marker = {
          lat: this.center.lat,
          lng: this.center.lng
        };
        this.markers.push({ position: marker });
        this.center = marker;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
      
    }
  }
};
</script>
