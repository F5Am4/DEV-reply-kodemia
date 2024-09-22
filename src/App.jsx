import React from "react";
import { AuthProvider } from "./AuthContext"; // Asegúrarse de ajustar la ruta según la ubicación real de AuthContext
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
// import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <AuthProvider>
      <NavBar />
      <MainPage />
    </AuthProvider>
  );
}
