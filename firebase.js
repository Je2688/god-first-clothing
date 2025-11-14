// Initialize Firebase (replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Start Firebase
firebase.initializeApp(firebaseConfig);

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "shop.html";
        })
        .catch(error => {
            alert(error.message);
        });
});

// Handle signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "shop.html";
        })
        .catch(error => {
            alert(error.message);
        });
});
