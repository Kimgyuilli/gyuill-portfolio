import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-emerald-400">안녕하세요, 저는</span>
          </div>
          <h1 className="mb-4 text-slate-100">IT 개발자 포트폴리오</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            풀스택 개발자 | 문제 해결사 | 혁신적인 솔루션 개발
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg transition-colors"
            >
              연락하기
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
            >
              프로젝트 보기
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
