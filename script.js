function getFormvalue() {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the form element by its ID
    const form = document.getElementById("form1");

    // Access the values of the input fields
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display the full name using an alert
    alert(`${firstName} ${lastName}`);
}
