import React, { useEffect, useState } from "react";
import { getPosts } from "../addPost.js";
import { ImCross } from "react-icons/im";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getPosts();
        if (result.success) {
          setPosts(result.posts);
        } else {
          console.error("Failed to fetch posts:", result.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  // Función para obtener una URL aleatoria de Lorem Picsum
  const getRandomImageUrl = () => {
    const width = 600; // Puedes ajustar el tamaño según lo necesites
    const height = 400; // Puedes ajustar el tamaño según lo necesites
    return `https://picsum.photos/${width}/${height}?random=${Math.floor(
      Math.random() * 1000
    )}`;
  };

  // Función para obtener una URL aleatoria de imagen de perfil
  const getRandomAvatarUrl = () => {
    const number = Math.floor(Math.random() * 100); // Genera un número aleatorio
    return `https://randomuser.me/api/portraits/men/${number}.jpg`; // URL de imagen de perfil
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          className="flex flex-col justify-center items-center bg-white rounded border border-stone-300 mb-5"
        >
          <div className="flex justify-between w-full items-center pb-5">
            <p className="text-sm ml-5 pt-5">👋DEV Challenges</p>
            <ImCross style={{ marginRight: "20px", marginTop: "20px" }} />
          </div>
          {/* Imagen principal */}
          <div className="items-center mr-5 ml-5 mb-3">
            <img
              className="rounded w-auto h-auto"
              src={post.imageUrl || getRandomImageUrl()} // Usa Lorem Picsum si no hay imagen
              alt="Post"
              onError={(e) => {
                console.error("Error loading image:", e.target.src);
                e.target.src = "default-image-url"; // URL por defecto en caso de error
              }}
            />
          </div>
          <div className="flex items-start w-full px-5 pb-5">
            {/* Contenedor de la foto de perfil y contenido del post */}
            <div className="flex flex-col w-full">
              {/* Contenedor de la foto de perfil y título */}
              <div className="flex items-start mb-3">
                {/* Foto de perfil del usuario */}
                <img
                  className="rounded-full w-8 h-8 mr-3" // 32x32 px = 8x8 rem
                  src={post.userImageUrl || getRandomAvatarUrl()} // Usa URL de avatar aleatorio
                  alt="User"
                  onError={(e) => {
                    console.error("Error loading user image:", e.target.src);
                    e.target.src = "https://via.placeholder.com/32"; // URL por defecto en caso de error
                  }}
                />
                {/* Nombre de usuario y fecha de creación */}
                <div className="flex flex-col">
                  <p className="font-bold text-sm">
                    {post.username || "Unknown User"}
                  </p>{" "}
                  {/* Mostrar el username aquí */}
                  <p className="text-sm text-gray-500">
                    {post.creationDate || "Unknown Date"}
                  </p>{" "}
                  {/* Mostrar la fecha de creación aquí */}
                </div>
              </div>
              {/* Título del post */}
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              {/* Tags del post */}
              <div>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-black mr-2 border border-transparent hover:border-gray-800 hover:bg-gray-200 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
