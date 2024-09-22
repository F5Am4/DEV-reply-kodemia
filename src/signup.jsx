export async function signUp(email, password) {
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const message = await response.text();
    return { success: true, message };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
