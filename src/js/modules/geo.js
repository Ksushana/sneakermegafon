const links = document.querySelectorAll(".megalink");
links.forEach(link => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLinks);
      function setLinks(position) {
        function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
          var R = 6371; // Radius of the earth in km
          var dLat = deg2rad(lat2-lat1);  // deg2rad below
          var dLon = deg2rad(lon2-lon1);
          var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c; // Distance in km
          return d;
        }

        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }

        if (getDistanceFromLatLonInKm(59.57, 30.19, position.coords.latitude, position.coords.longitude) < 150) {
          link.setAttribute("href", "https://spb.megafon.ru/tariffs/all/bez_pereplat_internet.html");
        }
      }
    } else {
      link.setAttribute("href", "https://moscow.megafon.ru/tariffs/all/bez_pereplat_vsyo.html");
    }
  }
  getLocation();
});





