import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"; // Asegúrate de tener una imagen para el logo

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-teal-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-6">
          <img src={logo} alt="Consultorio Ayelén Maitén Giacoboni" className="h-12" />
        </div>
        <div className="flex items-center justify-center flex-grow">
          <img src="" alt="" />
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input type="text" placeholder="Buscar" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline" />
          </form>
        </div>
        <div className="ml-6 flex items-center justify-end">
          <ul className="flex space-x-4 items-center">
            <li>
              <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>
                Categorías
              </button>
              {showCategories && (
                <ul className="absolute bg-white text-xl w-[20%] py-2 mt-2 border rounded-lg shadow-md">
                  <li>
                    <button className="hover:underline">Categoría 1</button>
                  </li>
                  <li>
                    <button className="hover:underline">Categoría 2</button>
                  </li>
                  <li>
                    <button className="hover:underline">Categoría 3</button>
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
