// Check for saved name in localStorage
window.onload = function() {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      document.getElementById("welcome-message").textContent = `Welcome back, ${savedName}!`;
      document.getElementById("welcome-message").classList.add("animate");
    }
  }
  
  // Save name and show welcome message
  function storeName() {
    const name = document.getElementById("username").value;
    if (name) {
      localStorage.setItem("username", name);
      document.getElementById("welcome-message").textContent = `Welcome, ${name}!`;
    }
  }
  
  // Trigger CSS animation with JS
  function animateMessage() {
    const msg = document.getElementById("welcome-message");
    msg.classList.remove("animate");
    void msg.offsetWidth; // Force reflow to restart animation
    msg.classList.add("animate");
  }
  