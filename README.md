# Real Madrid Fan Website

This is a Real Madrid Fan Website  which is built with **HTML,CSS,JavaScript Bootstrap(5.0.2).** where you can know the News ,Fixtures,Team Store,Buy Tickets.

# Features
- **View Fixtures**
- **Buy Club Items**
- **Read News**
- **Buy Match Tickets**
- **View Squad Member Details**

## File Structure

PWA MINI/
├── index.html    # Main application file
├── matches.html  # Matches
├── news.html     # News 
├── store.html    # Store 
├── team.html     #team details
├── tickets.html  #Buy ticktets  
├── README.md               # Documentation
└── bootsrap-5.02/          # Bootsrap library (referenced from parent directory)
    └── Bootsrap-5.0.2/
        └── bootstrap.min.css
        
## Technologies used
- **HTML5 - Structure and Markup**
- **CSS3- For Styling**
- **JavaScript - For interactivity**
- **Bootstrap 4.0.0- Responsive CSS Framework for layout**

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Basic knowledge of HTML, CSS, JavaScript
- Bootstrap (via CDN or local files)

---

### Installation

1. Download or clone the project files  
2. Ensure all files are in the correct structure:

   index.html  
   team.html  
   matches.html  
   news.html  
   store.html  
   tickets.html  
   contact.html  
   script.js  
   style.css  

3. Open **index.html** in your web browser  

---

### Usage
1. *Home Page:* Click on the heading to see a welcome message  
2. *Team Page:* View player details and squad cards  
3. *Matches Page:* Click heading to load match alert  
4. *News Page:* Browse latest club news  
5. *Store Page:* Click **"Buy Now"** to simulate product purchase  
6. *Tickets Page:* Click **"Buy Now"** to book tickets  
7. *Contact Page:* Fill the form and click **"Submit"** to send message  

---

## Code Overview

### JavaScript Functions

```javascript
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
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Fill all fields");
        return false;
    } else {
        alert("Message Sent Successfully");
        return true;
    }
}
```

---

### Key Components

| Component | Description |
|-----------|-------------|
| Navbar (Bootstrap) | Navigation across all pages |
| Cards | Used for players, news, and products |
| onclick functions | Trigger alerts and actions |
| Form (Contact Page) | Collects user input with validation |
| Bootstrap Grid | Responsive layout system |

---

## Browser Compatibility

- Chrome 60+  
- Firefox 55+  
- Edge 79+  
- Safari 12+  

---

## Future Enhancements

- [ ] Add backend integration (Node.js / Firebase)  
- [ ] Store user data from forms  
- [ ] Add login/signup functionality  
- [ ] Improve UI with animations and effects  
- [ ] Add live match updates  
- [ ] Make fully mobile responsive  

---

## License

This project is open source and available for educational purposes.  

---

## Author

Created as part of a mini project using HTML, CSS, JavaScript, and Bootstrap.
