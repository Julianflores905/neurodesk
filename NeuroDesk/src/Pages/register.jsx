import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-950/80 border border-slate-800 rounded-[2rem] p-8 shadow-2xl">

        <div className="text-center mb-8">
          <img
            src="/logo.jpeg"
            alt="NeuroDesk"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />

          <h1 className="text-4xl font-black">
            Crear Cuenta
          </h1>

          <p className="text-slate-400 mt-2">
            Únete a NeuroDesk
          </p>
        </div>

        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-slate-700"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-slate-700"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-4 rounded-2xl bg-black/40 border border-slate-700"
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="w-full mb-6 p-4 rounded-2xl bg-black/40 border border-slate-700"
        />

        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-700 to-blue-900 font-bold hover:scale-105 transition-all">
          Crear Cuenta
        </button>

        <button className="w-full mt-4 py-4 rounded-2xl border border-slate-700 hover:scale-105 transition-all">
          Continuar con Google
        </button>

        <Link
          to="/"
          className="block text-center mt-6 text-slate-400 hover:text-white"
        >
          ← Volver al Inicio
        </Link>

      </div>

    </div>
  );
}