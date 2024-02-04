import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FormAudio } from "../pages/FormAudio";
import { Home } from "../pages/Home";

// import { useAuth } from "../context/AuthContext";



// interface ProtectedRouteProps {
//   element: React.ReactNode;
// }

// export function ProtectedRoute({ element }: ProtectedRouteProps) {
//   const { isLoggedIn } = useAuth();

//   if (isLoggedIn) {
//     return element;
//   }

//   return <Navigate to="/LoginPage" />;
// }

export const MyRouter = (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/formularioaudio/*" element={<FormAudio />} />
      {/* <Route path="/pedidos/:parametro" element={<Pedidos />} /> */}
      {/* <Route path="/pagamento/*" element={<Pay />} /> */}
      {/* <Route path="/about/*" element={<ProtectedRoute element={<About />} />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="/cardapio/*" element={<ProtectedRoute element={<Menu />} />} */}
      {/* /> */}
    </Routes>
);
