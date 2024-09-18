// auth.js
export async function loginUser(email, password) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return { success: true, message: "Login successful", token: data.token };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
