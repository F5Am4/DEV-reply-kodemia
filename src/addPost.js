export async function createPost(title, postText, tags) {
  try {
    const response = await fetch("/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, postText, tags }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create post");
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Función GET que obtiene todos los posts existentes en la base de datos
export async function getPosts() {
  try {
    const response = await fetch("/api/getPosts");
    if (response.ok) {
      const data = await response.json();
      return { success: true, posts: data };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch posts");
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
