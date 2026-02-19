// Toggle between Login and Signup
function toggleAuth() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');
}

// Handle Sign Up (Saves user to an array in local storage)
function handleSignup() {
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;

    if (email && pass) {
        // Get existing users array or create a new one
        let users = JSON.parse(localStorage.getItem('allUsers')) || [];

        // Check if email is already taken
        if (users.find(u => u.email === email)) {
            alert("This email is already registered.");
            return;
        }

        // Add new user object to the array
        users.push({ email: email, pass: pass });
        localStorage.setItem('allUsers', JSON.stringify(users));

        // Auto-login after signup by setting the "Session"
        localStorage.setItem('currentUser', email);
        
        alert("Account created successfully!");
        window.location.href = 'wallet.html.html'; 
    } else {
        alert("Please fill in all fields.");
    }
}

// Handle Login (Finds the specific user in the array)
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    
    // Fetch the array of all users
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];

    // Look for a match
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        // Set the session for THIS specific user
        localStorage.setItem('currentUser', email);
        window.location.href = 'wallet.html.html';
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html.html'; // or your login page name
}