import { useState, useEffect } from 'react';
import { 
  Heart, 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  Smartphone, 
  Stethoscope, 
  Zap, 
  ChevronRight, 
  Instagram, 
  ShoppingBag,
  Clock,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ECG_CARDS = [
  { title: 'Фундамент', desc: 'Провідна система, водії ритму, розрахунок ЧСС.', color: 'bg-blue-500' },
  { title: 'Синусові порушення', desc: 'Брадикардія, СССВ, синоатріальні блокади.', color: 'bg-indigo-500' },
  { title: 'Аритмії', desc: 'AVNRT, WPW, фібриляція передсердь, VT, VF.', color: 'bg-purple-500' },
  { title: 'Провідність', desc: 'AV-блокади I-III ст., блокади ніжок пучка Гіса.', color: 'bg-teal-500' },
  { title: 'Гіпертрофії', desc: 'Критерії для шлуночків та передсердь.', color: 'bg-emerald-500' },
  { title: 'Critical Zone', desc: 'STEMI, NSTEMI, синдром Велленса, ТЕЛА.', color: 'bg-red-500' },
];

const FEATURES = [
  { icon: <Zap className="w-6 h-6" />, title: 'Стисло та по суті', desc: 'Тільки робочі критерії, без "води".' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Висока якість', desc: 'Ламіновані картки, що не бояться антисептиків.' },
  { icon: <Layers className="w-6 h-6" />, title: 'Зручний розмір', desc: 'Ідеально для кишені халата або скрабу.' },
  { icon: <Activity className="w-6 h-6" />, title: 'Кольорове кодування', desc: 'Миттєвий пошук потрібної теми.' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Heart className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Medicards<span className="text-indigo-600">.ua</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#cards" className="hover:text-indigo-600 transition-colors">Набори</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Переваги</a>
            <a href="#order" className="hover:text-indigo-600 transition-colors">Замовити</a>
          </div>
          <a 
            href="https://www.instagram.com/medicards.ua/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              <span>Зроблено медиками для медиків</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Твій кишеньковий гід по <span className="text-indigo-600">ЕКГ</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
              Від норми до STEMI за 30 секунд. Професійні флеш-картки, які містять усю необхідну клінічну базу в зручному форматі.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/medicards.ua/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2"
              >
                Замовити набір
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-200 bg-white text-slate-600 font-semibold">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/doc${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <span className="text-sm">500+ задоволених лікарів</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=800&q=80" 
                alt="Medicards ECG Set" 
                className="rounded-[2rem] w-full h-auto object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Ламіновані</p>
                  <p className="text-xs text-slate-500">Не бояться антисептиків</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Картки в наборі', value: '25+' },
            { label: 'Тем діагностики', value: '12' },
            { label: 'Доставка', value: '24г' },
            { label: 'Відгуки', value: '4.9/5' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Чому Medicards мають бути у твоїй кишені?</h2>
            <p className="text-slate-600">Ми продумали кожну деталь, щоб ви могли зосередитись на пацієнті, а не на пошуку інформації.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-50 transition-all"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Showcase */}
      <section id="cards" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Повний спектр ЕКГ-діагностики</h2>
              <p className="text-slate-400 text-lg">Кожна картка — це вижимка найважливішого. Від базових розрахунків до критичних станів.</p>
            </div>
            <a 
              href="https://www.instagram.com/medicards.ua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all active:scale-95 whitespace-nowrap"
            >
              Переглянути всі теми
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECG_CARDS.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-1 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all"
              >
                <div className="p-8">
                  <div className={`w-12 h-12 ${card.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg`}>
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Кому це потрібно?</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Студентам-медикам', desc: 'Ідеально для підготовки до КРОК-2/3 та іспитів.' },
                    { title: 'Інтернам', desc: 'Терапевтам, анестезіологам, кардіологам.' },
                    { title: 'Лікарям екстреної допомоги', desc: 'Швидка діагностика біля ліжка пацієнта.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-xl mb-1">{item.title}</p>
                        <p className="text-indigo-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <Stethoscope className="w-32 h-32 md:w-40 md:h-40 opacity-50" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white text-indigo-600 p-6 rounded-3xl shadow-2xl rotate-12">
                    <p className="text-4xl font-black">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest">Практично</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Order */}
      <section id="order" className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto mb-8">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Готові зробити діагностику впевненою?</h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Замовляйте набір Medicards прямо зараз через Instagram.
          </p>
          <p className="text-indigo-600 font-bold text-xl mb-12">Ціну уточнюйте в Direct 📩</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/medicards.ua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Instagram className="w-6 h-6" />
              Замовити набір
            </a>
            <a 
              href="https://www.instagram.com/medicards.ua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center"
            >
              Дізнатись ціну
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Відправка сьогодні</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Зручна оплата</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Medicards<span className="text-indigo-600">.ua</span></span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Medicards.ua. Зроблено з любов'ю до медицини 🇺🇦</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Activity className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
