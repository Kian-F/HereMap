
  var platform = new H.service.Platform({
    apikey: "sO7v_Ahru4MfJnpVhwrvuS1XO6OpANbHz_4dFWAYFQQ"
})

  // initializing default layers for the map
  let defaultLayers = platform.createDefaultLayers();
  // rendering map within the container on the page
  let map = new H.Map(
          document.getElementById('mapContainer'),
          defaultLayers.vector.normal.map, // rendering vector map with NORMAL map view.
          {
              zoom: 11, // Initial zoom level of map
              center: {lat: -33.8696, lng: 151.20691} // Initial center of map
          });

          // Create the default UI:
    var ui = H.ui.UI.createDefault(map, defaultLayers);

     // initialize basic map events 
     var mapEvents = new H.mapevents.MapEvents(map);
     // Initialize for map behaviour on events
     var behavior = new H.mapevents.Behavior(mapEvents);