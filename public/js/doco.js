let map;
let service;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5
    });

    service = new google.maps.places.PlacesService(map);
}

document.getElementById('city').addEventListener('change', function() {
    const city = document.getElementById('city').value;
    const cityCoordinates = {
        'Bangalore': { lat: 12.9716, lng: 77.5946 },
        'Delhi': { lat: 28.7041, lng: 77.1025 },
        'Mumbai': { lat: 19.0760, lng: 72.8777 },
        'Chennai': { lat: 13.0827, lng: 80.2707 }
    };

    const coordinates = cityCoordinates[city];
    map.setCenter(coordinates);
    map.setZoom(12);

    const request = {
        location: coordinates,
        radius: '5000',
        type: ['hospital']
    };

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const hospitalSelect = document.getElementById('hospital');
            hospitalSelect.innerHTML = '<option value="" disabled selected hidden>Select a hospital</option>';
            results.forEach(function(place) {
                const option = document.createElement('option');
                option.value = place.name;
                option.text = place.name;
                hospitalSelect.appendChild(option);
            });
        }
    });
});

document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const symptom = document.getElementById('symptom').value;
    const hospital = document.getElementById('hospital').value;

    
    const doctorAvailable = Math.random() < 0.5;
    if (doctorAvailable) {
        document.getElementById('results').innerHTML = `Doctors specializing in ${symptom} are available at ${hospital}.`;
    
     document.getElementById('btn').style.display='block';
    } else {
        document.getElementById('results').innerHTML = `No doctors available for ${symptom} at ${hospital}.`;
        document.getElementById('appointmentForm').style.display = 'none';
    }
   
});
function openAppoint(){
    window.open("/doctor/appointment",'_blank',width=600,height=400);
}
document.addEventListener('DOMContentLoaded', initMap);
