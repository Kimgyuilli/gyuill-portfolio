import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { ContactInfoItem } from '@/components/common/ContactInfoItem';
import { SocialLink } from '@/components/common/SocialLink';
import { contactInfoData, socialLinksData } from '@/data/contact';

const contactIconMap = {
  이메일: <Mail size={20} />,
  전화번호: <Phone size={20} />,
  위치: <MapPin size={20} />,
} as const;

const socialIconMap = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
} as const;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락해주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-slate-100">연락처 정보</h3>

            <div className="space-y-4 mb-8">
              {contactInfoData.map((info, index) => (
                <ContactInfoItem
                  key={index}
                  info={{
                    ...info,
                    icon: contactIconMap[info.label as keyof typeof contactIconMap],
                  }}
                />
              ))}
            </div>

            <div>
              <h4 className="mb-4 text-slate-100">소셜 미디어</h4>
              <div className="flex gap-4">
                {socialLinksData.map((link, index) => (
                  <SocialLink
                    key={index}
                    link={{
                      ...link,
                      icon: socialIconMap[link.label as keyof typeof socialIconMap],
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-slate-300">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-slate-300">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-slate-300">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="메시지를 입력하세요..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>메시지 보내기</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© 2025 IT Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
