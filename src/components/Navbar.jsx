import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"; // Asegúrate de tener una imagen para el logo

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-sky-950 py-4">
      <div className="flex items-center justify-center px-4">
        <div className="mr-6">
          <img src={logo} alt="Consultorio Ayelén Maitén Giacoboni" className="h-12" />
        </div>
        <div className="flex items-center justify-center w-[60%] px-4">
          <img src="" alt="" />
          <form className="bg-white p-2 w-full rounded-lg">
            <input type="text" placeholder="Buscar" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline" />
          </form>
        </div>
        <div className="ml-6 flex items-center justify-end">
          <ul className="flex space-x-4 items-center">
            <li>
              <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>
                Menú
              </button>
              {showCategories && (
                <ul className="absolute bg-white text-xl w-[20%] py-2 mt-2 border rounded-lg shadow-md">
                  <li>
                    <button className="hover:underline">Nosotros</button>
                  </li>
                  <li>
                    <button className="hover:underline">Turnos</button>
                  </li>
                  <li>
                    <button className="hover:underline">Blog</button>
                  </li>
                  <li>
                    <button className="text-white text-xl">Productos</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className="text-white text-xl">Productos</button>
            </li>
            <li>
              <button className="text-white text-xl">Contacto</button>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
