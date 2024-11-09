let map;
let service;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 }, 
        zoom: 5
    });

    service = new google.maps.places.PlacesService(map);
}

document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    let coordinates;

    switch (city) {
        case 'Bangalore':
            coordinates = { lat: 12.9716, lng: 77.5946 };
            break;
        case 'Delhi':
            coordinates = { lat: 28.7041, lng: 77.1025 };
            break;
        case 'Mumbai':
            coordinates = { lat: 19.0760, lng: 72.8777 };
            break;
        case 'Chennai':
            coordinates = { lat: 13.0827, lng: 80.2707 };
            break;
        case 'Mangalore':
                coordinates = { lat: 12.91723, lng: 74.85603 };
                break;
        case 'Hubli':
                coordinates = { lat: 15.34776 , lng: 75.13378 };
                break;  
        case 'Kolkotta':
              coordinates = { lat:  22.56263, lng: 88.36304 };
              break;   
        case 'Pune':
              coordinates = { lat: 18.51957, lng:  73.85535 };
              break;      
        case 'Hydrabad':
              coordinates = { lat: 17.38405, lng: 78.45636 };
              break; 
        case 'Belgavi':
              coordinates = { lat: 15.852792, lng:  74.498703 };
              break;   
        default:
            coordinates = { lat: 20.5937, lng: 78.9629 };
    }

    map.setCenter(coordinates);
    map.setZoom(12);

    const request = {
        location: coordinates,
        radius: '5000',
        type: ['hospital']
    };

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    });
});

function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        const infowindow = new google.maps.InfoWindow({
            content: place.name
        });
        infowindow.open(map, marker);
    });
}

document.addEventListener('DOMContentLoaded', initMap);
