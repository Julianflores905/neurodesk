import { motion } from "framer-motion";

export default function NeuroDeskWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="w-full border-b border-slate-800 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-700 to-blue-900 flex items-center justify-center text-2xl font-bold">
              N
            </div>

            <div>
              <h1 className="text-2xl font-black">NeuroDesk</h1>
              <p className="text-slate-400 text-sm">
                Premium Workspace
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-2xl border border-slate-700 bg-slate-900/40 hover:bg-slate-800 transition-all">
              Login
            </button>

            <button className="px-6 py-2 rounded-2xl bg-gradient-to-r from-green-700 to-blue-900 hover:scale-105 transition-all duration-300">
              Registro
            </button>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-900/20 border border-green-900/30 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">
              Versión 3.5 Disponible
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            Instala
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              NeuroDesk
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
            Plataforma futurista diseñada para productividad,
            velocidad y experiencia premium.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="px-10 py-5 rounded-3xl bg-gradient-to-r from-green-700 to-blue-900 hover:scale-105 transition-all duration-300 text-lg font-bold">
              Descargar App
            </button>

            <button className="px-10 py-5 rounded-3xl border border-slate-700 bg-slate-900/40 hover:bg-slate-800 transition-all text-lg">
              Ver Demo
            </button>

          </div>

        </motion.div>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="bg-slate-950/80 border border-slate-800 rounded-[2rem] p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h3 className="text-3xl font-black">
                  NeuroDesk OS
                </h3>

                <p className="text-slate-400">
                  AI Dashboard
                </p>
              </div>

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">

              <div className="bg-black/40 border border-slate-800 rounded-3xl p-6">
                <p className="text-slate-400 mb-2">
                  Estado
                </p>

                <h4 className="text-2xl font-bold text-green-400">
                  Online
                </h4>
              </div>

              <div className="bg-black/40 border border-slate-800 rounded-3xl p-6">
                <p className="text-slate-400 mb-2">
                  Versión
                </p>

                <h4 className="text-2xl font-bold">
                  v3.5.1
                </h4>
              </div>

            </div>

            <button className="w-full py-5 rounded-3xl bg-gradient-to-r from-green-700 to-blue-900 hover:scale-[1.02] transition-all duration-300 text-xl font-bold">
              Instalar NeuroDesk
            </button>

          </div>

        </motion.div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Características Premium
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Diseño moderno y organizado con estilo profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {[
            {
              icon: "⚡",
              title: "Ultra Rápido",
              desc: "Optimización avanzada y rendimiento extremo.",
            },
            {
              icon: "🧠",
              title: "IA Integrada",
              desc: "Funciones inteligentes para productividad.",
            },
            {
              icon: "🔒",
              title: "Seguridad",
              desc: "Protección moderna y autenticación segura.",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-950/70 border border-slate-800 rounded-[2rem] p-8 shadow-xl"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-green-700/30 to-blue-900/30 flex items-center justify-center text-3xl mb-8 border border-slate-700">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}