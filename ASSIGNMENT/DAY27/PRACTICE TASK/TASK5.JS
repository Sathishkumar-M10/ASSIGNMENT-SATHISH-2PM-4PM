if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        
    },(error) => {
        console.log("Error getting location:", error.message);
    }
  );
} else {
    console.log("Geolocation is not supported by this browser.");
}
