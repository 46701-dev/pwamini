function welcomeMessage() {
    alert("Welcome to Real Madrid Website");
}

function teamMessage() {
    alert("Meet Our Team");
}

function matchMessage() {
    alert("Upcoming Matches Loaded");
}

function newsMessage() {
    alert("Latest Club News");
}

function buyTicket() {
    alert("Ticket Purchase Successful");
}

function buyProduct() {
    alert("Product Added Successfully");
}

function contactMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Please fill all fields");
        return false;
    } else {
        let subjectText = "";
        switch(subject) {
            case "order": subjectText = "Order Problem"; break;
            case "payment": subjectText = "Payment Issue"; break;
            case "shipping": subjectText = "Shipping/Delivery"; break;
            case "product": subjectText = "Product Quality"; break;
            case "refund": subjectText = "Refund Request"; break;
            case "other": subjectText = "Other Store Issue"; break;
        }
        alert("Thank you " + name + "! Your message regarding '" + subjectText + "' has been sent. We will contact you at " + email + " soon.");
        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        return false; // Prevent actual form submission
    }
}