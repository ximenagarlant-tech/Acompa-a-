import React, { useState } from 'react';
import { 
  Heart, Shield, Users, Activity, Clock, 
  Smartphone, CheckCircle, Menu, X, ArrowRight,
  Stethoscope, Brain, Smile
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-teal-200">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer">
              <Heart className="h-8 w-8 text-teal-600 fill-teal-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                Acompaña+
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problema" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">El Problema</a>
              <a href="#proceso" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Cómo Funciona</a>
              <a href="#beneficios" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Beneficios</a>
              <a href="#unete" className="text-teal-700 font-medium hover:text-teal-800 transition-colors">Soy Joven/Estudiante</a>
              <a href="#contacto" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Solicitar Valoración
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-teal-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
            <a href="#problema" className="block px-3 py-2 text-slate-600 font-medium">El Problema</a>
            <a href="#proceso" className="block px-3 py-2 text-slate-600 font-medium">Cómo Funciona</a>
            <a href="#beneficios" className="block px-3 py-2 text-slate-600 font-medium">Beneficios</a>
            <a href="#contacto" className="block w-full text-center mt-4 bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-md">
              Solicitar Valoración
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
                Conectando Generaciones en México
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Devuélveles la sonrisa con <span className="text-teal-600">compañía de calidad.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Conectamos a adultos mayores con jóvenes estudiantes y profesionales de la salud capacitados. 
                Combatimos la epidemia de soledad, estimulamos su mente y te damos la tranquilidad que necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Encontrar un Acompañante <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#proceso" className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-teal-600 hover:text-teal-700 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                  Conocer el Proceso
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-orange-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Confianza total</p>
                  <p className="font-bold text-slate-800">Perfiles 100% Verificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">La Epidemia de Soledad Silenciosa</h2>
            <p className="text-lg text-slate-600">
              Las dinámicas laborales actuales provocan que los adultos mayores pasen largas jornadas solos. 
              El aislamiento tiene un impacto directo en el deterioro de su salud física y emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Brain className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Deterioro Cognitivo</h3>
              <p className="text-slate-600">
                La falta de estimulación mental y conversación acelera cuadros de pérdida de memoria, depresión y ansiedad.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Activity className="h-12 w-12 text-red-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sedentarismo</h3>
              <p className="text-slate-600">
                El miedo a salir solos provoca inactividad física severa, negligencia en cuidados y mayor riesgo de accidentes.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Desgaste del Cuidador</h3>
              <p className="text-slate-600">
                Los hijos (30-55 años) sufren estrés constante tratando de balancear sus jornadas laborales con el cuidado de sus padres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Proceso Operativo */}
      <section id="proceso" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso Operativo</h2>
            <p className="text-lg text-slate-300">
              Diseñado con rigor metodológico para garantizar la seguridad, el bienestar y un servicio de excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-teal-400 font-black text-6xl absolute -top-6 -left-4 opacity-20">1</div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 relative z-10 h-full">
                <Stethoscope className="h-10 w-10 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">Valoración Inicial</h4>
                <p className="text-slate-400 text-sm">
                  Un especialista realiza una valoración profunda (Índice de Lawton, Escala UCLA) para diseñar un Plan de Cuidado Personalizado.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-teal-400 font-black text-6xl absolute -top-6 -left-4 opacity-20">2</div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 relative z-10 h-full">
                <Shield className="h-10 w-10 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">Selección Rigurosa</h4>
                <p className="text-slate-400 text-sm">
                  Exámenes psicométricos, técnicos y de honestidad. Validación estricta de antecedentes y referencias del talento joven.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-teal-400 font-black text-6xl absolute -top-6 -left-4 opacity-20">3</div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 relative z-10 h-full">
                <Users className="h-10 w-10 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">Match de Confianza</h4>
                <p className="text-slate-400 text-sm">
                  Cruzamos el perfil clínico y de personalidad para encontrar al "Acompañante" ideal y presentamos una terna seleccionada.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-teal-400 font-black text-6xl absolute -top-6 -left-4 opacity-20">4</div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 relative z-10 h-full">
                <Smartphone className="h-10 w-10 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">Monitoreo Tecnológico</h4>
                <p className="text-slate-400 text-sm">
                  Registro en tiempo real de actividades. Los familiares reciben notificaciones y reportes periódicos para total tranquilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition Section */}
      <section id="beneficios" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Una solución que beneficia a toda la familia</h2>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Smile className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Para el Adulto Mayor</h4>
                  <p className="text-slate-600">Envejecimiento activo. Reciben estimulación cognitiva, activación física, compañía para paseos recreativos y apoyo en gestiones cotidianas, mejorando su humor y salud mental.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Para los Hijos Cuidadores</h4>
                  <p className="text-slate-600">Tranquilidad absoluta. Reducción del estrés laboral sabiendo que sus padres están en buenas manos, con cuidadores validados estrictamente y reportes constantes vía nuestra app.</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1516302752946-60851f5038ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953eb1f5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-700 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5">
            
            <div className="md:col-span-2 p-10 bg-teal-800 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">¿Listo para mejorar la calidad de vida de tu familiar?</h3>
              <p className="text-teal-100 mb-8">
                Déjanos tus datos. Nuestro equipo gerontológico se pondrá en contacto contigo vía WhatsApp o llamada para agendar una valoración inicial.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>Sin compromisos iniciales</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>Atención 100% personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>Personal validado rigurosamente</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-3 p-10 bg-white">
              {formStatus === 'submitted' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">¡Solicitud Enviada!</h4>
                  <p className="text-slate-600">Nos pondremos en contacto contigo a la brevedad para realizar el perfilamiento inicial.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Solicita Información</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">Tu Nombre</label>
                      <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">Teléfono (WhatsApp)</label>
                      <input required type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="55 1234 5678" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Ciudad / Zona</label>
                    <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Ej. CDMX, Monterrey, etc." />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Necesidad principal del adulto mayor</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      <option>Solo compañía y estimulación</option>
                      <option>Apoyo para salir a paseos / citas</option>
                      <option>Apoyo cognitivo leve</option>
                      <option>Otro (lo explicaré en llamada)</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-lg shadow-md transition-colors mt-4">
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-teal-500 fill-teal-500" />
              <span className="text-xl font-bold text-white">Acompaña+</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Mejorando sustancialmente la calidad de vida y salud mental del adulto mayor, mientras brindamos oportunidades de desarrollo a los jóvenes de México.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#problema" className="hover:text-teal-400 transition-colors">El Problema</a></li>
              <li><a href="#proceso" className="hover:text-teal-400 transition-colors">Metodología</a></li>
              <li><a href="#beneficios" className="hover:text-teal-400 transition-colors">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Contacto</h5>
            <ul className="space-y-2 text-sm">
              <li>hola@acompanamas.mx</li>
              <li>Atención B2C y B2B</li>
              <li className="mt-4">
                <a href="#unete" className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1">
                  ¿Eres estudiante? Únete aquí <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Acompaña+. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos del Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}