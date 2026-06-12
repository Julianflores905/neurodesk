import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white">

      {/* NAVBAR */}
      <nav className="w-full border-b border-slate-800 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">
            <img
              src="/logo.jpeg"
              alt="NeuroDesk"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h1 className="text-2xl font-black">NeuroDesk</h1>
              <p className="text-slate-400 text-sm">
                Premium Plans
              </p>
            </div>
          </div>

         <div className="flex gap-4">

  <Link
    to="/login"
    className="px-5 py-2 rounded-2xl border border-blue-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300"
  >
    🔐 Login
  </Link>

  <Link
    to="/register"
    className="px-5 py-2 rounded-2xl border border-green-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300"
  >
    📝 Registro
  </Link>

  <Link
    to="/"
    className="px-5 py-2 rounded-2xl border border-purple-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
  >
    ← Inicio
  </Link>

</div>

        </div>
      </nav>

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-black mb-6">
          💎 Planes Premium
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl mx-auto">
          Desbloquea todo el potencial de NeuroDesk con IA ilimitada,
          automatización avanzada y herramientas exclusivas.
        </p>

      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* MENSUAL */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(34,197,94,0.4)",
            }}
            className="bg-slate-950/70 border border-slate-700 rounded-[2rem] p-8 backdrop-blur-xl"
          >
            <h2 className="text-4xl font-black mb-4">
              Mensual
            </h2>

            <p className="text-6xl font-black text-green-400 mb-8">
              $10
            </p>

            <ul className="space-y-4 text-slate-300 mb-10">
              <li>✓ IA ilimitada</li>
              <li>✓ Historial persistente</li>
              <li>✓ Buscar archivos duplicados</li>
              <li>✓ Modo automático</li>
              <li>✓ Limpieza caché/temp</li>
              <li>✓ Sugerencias automáticas</li>
            </ul>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300 font-bold">
              Comenzar
            </button>
          </motion.div>

          {/* 3 MESES */}
          <motion.div
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 45px rgba(34,197,94,0.7)",
            }}
            className="relative bg-slate-950/90 border-2 border-green-500 rounded-[2rem] p-8"
          >

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black font-black px-5 py-2 rounded-full">
              ⭐ RECOMENDADO
            </div>

            <h2 className="text-4xl font-black mb-4 mt-4">
              3 Meses
            </h2>

            <p className="text-6xl font-black text-green-400 mb-8">
              $25
            </p>

            <ul className="space-y-4 text-slate-300 mb-10">
              <li>✓ IA ilimitada</li>
              <li>✓ Historial persistente</li>
              <li>✓ Buscar archivos duplicados</li>
              <li>✓ Modo automático</li>
              <li>✓ Limpieza caché/temp</li>
              <li>✓ Sugerencias automáticas</li>
            </ul>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300 font-bold">
              Comenzar
            </button>
          </motion.div>

          {/* ANUAL */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(59,130,246,0.4)",
            }}
            className="bg-slate-950/70 border border-slate-700 rounded-[2rem] p-8"
          >
            <h2 className="text-4xl font-black mb-4">
              Anual
            </h2>

            <p className="text-6xl font-black text-blue-400 mb-8">
              $100
            </p>

            <ul className="space-y-4 text-slate-300 mb-10">
              <li>✓ IA ilimitada</li>
              <li>✓ Historial persistente</li>
              <li>✓ Buscar archivos duplicados</li>
              <li>✓ Modo automático</li>
              <li>✓ Limpieza caché/temp</li>
              <li>✓ Sugerencias automáticas</li>
            </ul>

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-green-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300 font-bold">
              Comenzar
            </button>
          </motion.div>

        </div>

      </section>

    </div>
  );
}