// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhkVD_5J-RCRfXF3o00HNgKut2DEkP6-k",
    authDomain: "newdb-b19cc.firebaseapp.com",
    databaseURL: "https://newdb-b19cc-default-rtdb.asia-southeast1.firebasedatabase.app",  // Add this line
    projectId: "newdb-b19cc",
    storageBucket: "newdb-b19cc.firebasestorage.app",
    messagingSenderId: "518346357228",
    appId: "1:518346357228:web:8dc5fc970386654432e8c9"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Contact Us Form submission
// Handle form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting the traditional way

  // Get form values
  const firstName = document.querySelector('[name="First Name"]').value;
  const lastName = document.querySelector('[name="Last Name"]').value;
  const email = document.querySelector('[name="Email"]').value;
  const message = document.querySelector('[name="Message"]').value;

  // Create a reference in the database using email as a unique key
  const emailRef = ref(db, 'ContactUs/' + email.replace(/\./g, ',')); // Replace dots with commas for Firebase key compatibility

  // Check if email already exists in Realtime Database
  get(emailRef).then(snapshot => {
    if (snapshot.exists()) {
      // Email already exists
      alert("This email is already registered.");
    } else {
      // Email doesn't exist, proceed to insert data
      set(emailRef, {
        firstName,
        lastName,
        email,
        message,
        timestamp: new Date().toISOString()
      })
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error writing data: ", error);
        alert("There was an error sending the message.");
      });
    }
  }).catch((error) => {
    console.error("Error checking email: ", error);
    alert("There was an error checking the email.");
  });
});
//Contact us Form submission end!


document.getElementById('footer-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    console.log('Footer form submitted'); // Log to check if the event is triggered
  
    // Get footer form values
    const fullName = document.querySelector('[name="Full Name"]').value;
    const email = document.querySelector('[name="Email"]').value;
    const contactNumber = document.querySelector('[name="Contact Number"]').value;
    const country = document.querySelector('[name="Country"]').value;
    const message = document.querySelector('[name="Message"]').value;
  
    console.log('Form Data:', { fullName, email, contactNumber, country, message }); // Log form data
  
    // Create a reference in the database using email as a unique key
    const emailRef = ref(db, 'footerData/' + email.replace(/\./g, ',')); // Replacing '.' with ',' for Firebase compatibility
  
    // Check if email already exists in Realtime Database
    get(emailRef).then(snapshot => {
      if (snapshot.exists()) {
        // Email already exists
        alert("This email is already registered.");
      } else {
        // Email doesn't exist, proceed to insert data
        set(emailRef, {
          fullName,
          email,
          contactNumber,
          country,
          message,
          timestamp: new Date().toISOString()
        })
        .then(() => {
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.error("Error writing data: ", error);
          alert("There was an error sending the message.");
        });
      }
    }).catch((error) => {
      console.error("Error checking email: ", error);
      alert("There was an error checking the email.");
    });
  });

