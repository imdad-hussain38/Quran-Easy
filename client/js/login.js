document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userRole", data.role);
      localStorage.setItem("userId", data.userId); // ✅ Save userId too

      if (data.role === "student") {
        window.location.href = "/dashboard.html";
      } else if (data.role === "teacher") {
        window.location.href = "/teacher-dashboard.html";
      } else {
        alert("Unknown role");
      }
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("Login failed", err);
    alert("Something went wrong");
  }
});
