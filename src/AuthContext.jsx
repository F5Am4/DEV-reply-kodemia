import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar el estado de la autenticación en el montaje del componente
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/checkAuth", {
          credentials: "include",
        });
        if (response.ok) {
          console.log("isAuthenticated: true");
          setIsAuthenticated(true);
        } else {
          console.log("isAuthenticated: false");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log("isAuthenticated: false");
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // Asegura que la cookie de sesión se envíe con la solicitud
      });
      setIsAuthenticated(false); // Actualiza el estado de autenticación a false oara desactivar la sesión
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
