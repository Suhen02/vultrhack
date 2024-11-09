let fotm=addEventListener('form')
function submitForm(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const bloodType = document.getElementById('bloodType').value;

   
    console.log(`Form submitted with data:
    First Name: ${firstName}
    Last Name: ${lastName}
    Date: ${date}
    Time: ${time}
    Email: ${email}
    Contact Number: ${contactNumber}
    Blood Type: ${bloodType}`);
    fotm.innertext="form submitted"
}
