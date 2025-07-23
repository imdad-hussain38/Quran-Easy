// Redirect to login if not authenticated
if (!localStorage.getItem("authToken")) {
  window.location.href = "/login.html";
}

// Video Call Button Event
document.getElementById("startCallBtn").addEventListener("click", () => {
  window.location.href = "/video-call.html";
});
