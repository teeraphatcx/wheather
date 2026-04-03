export default function About() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-surface-container-low to-background text-on-background">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-container rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* SideNavBar */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low/80 backdrop-blur-xl flex flex-col py-8 space-y-4 z-50 border-r border-surface-container-highest">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center text-on-primary shadow-lg">
              <span className="text-2xl">ℹ️</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">เกี่ยวกับ</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">ข้อมูลแอป</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/about">
            <span>ℹ️</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">เกี่ยวกับ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span>🌤️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">อากาศ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            ⬆️ ปรับปรุง
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full max-w-7xl mx-auto">
        {/* Header with Logo */}
        <header className="mb-12 text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-primary-container/10 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary-container rounded-3xl shadow-2xl mb-6">
                <span className="text-6xl">🌤️</span>
              </div>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">ดูอากาศ <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">Pro</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">แอปพลิเคชันดูสภาพอากาศระดับมืออาชีพ</p>
            </div>
          </div>
        </header>

        {/* App Info */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-surface-container-lowest to-surface-container-low p-8 rounded-2xl shadow-lg border border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl mb-2">📊</p>
                <p className="text-sm text-on-surface-variant mb-1">เวอร์ชัน</p>
                <p className="font-bold text-on-surface">v1.0.0</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">📅</p>
                <p className="text-sm text-on-surface-variant mb-1">ออกแบบ</p>
                <p className="font-bold text-on-surface">2566</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">🌍</p>
                <p className="text-sm text-on-surface-variant mb-1">ประเทศ</p>
                <p className="font-bold text-on-surface">ประเทศไทย</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">⭐</p>
                <p className="text-sm text-on-surface-variant mb-1">คะแนน</p>
                <p className="font-bold text-on-surface">4.8/5.0</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">✨ คุณสมบัติ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📍", title: "สภาพอากาศเรียลไทม์", desc: "ข้อมูลอากาศตรงเวลาทุกวินาที" },
              { icon: "📅", title: "พยากรณ์ 5 วัน", desc: "ดูพยากรณ์อากาศรายชั่วโมง" },
              { icon: "🗺️", title: "แผนที่ตำแหน่ง", desc: "ดูอากาศหลายเมืองพร้อมกัน" },
              { icon: "🔔", title: "การแจ้งเตือน", desc: "เตือนเมื่อมีสภาพอากาศที่สำคัญ" },
              { icon: "📊", title: "สถิติอากาศ", desc: "ติดตามประวัติสภาพอากาศ" },
              { icon: "🎨", title: "ออกแบบสวยงาม", desc: "ส่วนต่อประสานผู้ใช้ที่ยอดเยี่ยม" },
            ].map((feature, index) => (
              <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors hover:shadow-xl">
                <p className="text-4xl mb-3">{feature.icon}</p>
                <h4 className="font-bold text-on-surface mb-2">{feature.title}</h4>
                <p className="text-sm text-on-surface-variant">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">💻 เทคโนโลยี</h3>
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-lg border border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { logo: "⚛️", name: "React", version: "18+" },
                { logo: "▲", name: "Next.js", version: "16+" },
                { logo: "🎨", name: "Tailwind CSS", version: "3+" },
                { logo: "🔷", name: "TypeScript", version: "5+" },
                { logo: "📱", name: "Responsive", version: "Mobile" },
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl mb-2">{tech.logo}</p>
                  <p className="font-bold text-on-surface text-sm">{tech.name}</p>
                  <p className="text-xs text-on-surface-variant">{tech.version}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">👥 ทีมพัฒนา</h3>
          <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-8 rounded-2xl shadow-lg border border-surface-container-high">
            <div className="text-center">
              <p className="text-6xl mb-4">👨‍💻</p>
              <h4 className="text-xl font-bold text-on-surface mb-2">Acer Development Team</h4>
              <p className="text-on-surface-variant mb-4">ทีมพัฒนาชาวไทย ที่มุ่งสร้างแอปพลิเคชันคุณภาพสูง</p>
              <div className="flex justify-center gap-4">
                <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:bg-primary-container transition-colors">
                  📧 ติดต่อ
                </button>
                <button className="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-bold hover:bg-surface-container-highest transition-colors">
                  🌐 เว็บไซต์
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📞 ช่วยเหลือ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors hover:shadow-xl">
              <p className="text-4xl mb-3">❓</p>
              <p className="font-bold text-on-surface mb-2">คำถามที่พบบ่อย</p>
              <p className="text-sm text-on-surface-variant">ดูคำตอบของคำถามทั่วไป</p>
            </button>

            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors hover:shadow-xl">
              <p className="text-4xl mb-3">🐛</p>
              <p className="font-bold text-on-surface mb-2">รายงานบัก</p>
              <p className="text-sm text-on-surface-variant">ช่วยเราปรับปรุงแอป</p>
            </button>

            <button className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors hover:shadow-xl">
              <p className="text-4xl mb-3">💬</p>
              <p className="font-bold text-on-surface mb-2">ติดต่อเรา</p>
              <p className="text-sm text-on-surface-variant">ส่งข้อความและฟีดแบ็ก</p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
