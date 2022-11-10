import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>React Nav Bar</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-400 px-2 py-1">Home</Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">Crear una nueva tarea</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
