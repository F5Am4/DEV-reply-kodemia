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
      return { success: true, message: data.message };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
