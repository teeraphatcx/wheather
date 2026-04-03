export default function Help() {
  const faqs = [
    {
      question: "ฉันจะเปิดตำแหน่งใหม่ได้อย่างไร?",
      answer: "ไปที่หน้า 'ตำแหน่ง' แล้วคลิกปุ่ม '➕ เพิ่มตำแหน่ง' ใส่ชื่อเมืองและเลือกจากรายการ จะได้รับอัปเดตสภาพอากาศอยู่เสมอ"
    },
    {
      question: "ฉันสามารถปิดการแจ้งเตือนได้อย่างไร?",
      answer: "ไปที่หน้า 'ตั้งค่า' > 'การแจ้งเตือน' แล้วปิดตัวเลือกที่คุณไม่ต้องการ คุณสามารถเลือกเฉพาะการแจ้งเตือนที่สำคัญได้"
    },
    {
      question: "ข้อมูลอากาศอัปเดตบ่อยแค่ไหน?",
      answer: "ข้อมูลสภาพอากาศปัจจุบันอัปเดตทุก 30 นาที พยากรณ์ 5 วันอัปเดตทุกชั่วโมง ข้อมูลที่แม่นยำจากศูนย์กลางการบินพลเรือน"
    },
    {
      question: "ฉันสามารถเปลี่ยนหน่วยอุณหภูมิได้อย่างไร?",
      answer: "ไปที่หน้า 'ตั้งค่า' > 'ตั้งค่าทั่วไป' เลือกหน่วย Celsius (°C) หรือ Fahrenheit (°F) ตามที่คุณต้องการ"
    },
    {
      question: "บ้านแรกล่าสุดของฉันจะถูกบันทึกไว้ที่ไหน?",
      answer: "บ้านแรกล่าสุดของคุณจะแสดงอยู่ในส่วน 'สภาพอากาศที่จดจำ' บนหน้าหลัก คุณสามารถเห็นสภาพอากาศในแต่ละเมืองที่คุณเข้าชมมากที่สุด"
    },
    {
      question: "ฉันจะส่งออกข้อมูลอากาศได้อย่างไร?",
      answer: "ไปที่หน้า 'สถิติ' แล้วคลิกปุ่ม '⬇️ ส่งออก' คุณสามารถส่งออกเป็น PDF หรือไฟล์ CSV เพื่อการวิเคราะห์เพิ่มเติม"
    },
  ];

  const categories = [
    { icon: "🌤️", title: "สภาพอากาศ" },
    { icon: "🗺️", title: "ตำแหน่ง" },
    { icon: "⚙️", title: "ตั้งค่า" },
    { icon: "📊", title: "สถิติ" },
    { icon: "🔔", title: "การแจ้งเตือน" },
    { icon: "📱", title: "มือถือ" },
  ];

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
              <span className="text-2xl">❓</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">ช่วยเหลือ</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">คำถามทั่วไป</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/help">
            <span>❓</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">ช่วยเหลือ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span>🌤️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">อากาศ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            📧 ติดต่อ
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-primary-container/10 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-2">❓ ศูนย์ช่วยเหลือ</p>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">คำถามที่พบ <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">บ่อยและคำตอบ</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">ค้นหาคำตอบสำหรับคำถามทั่วไปและวิธีการใช้แอป</p>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-container rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high">
              <input 
                type="text" 
                placeholder="🔍 ค้นหาคำตอบ..." 
                className="w-full bg-transparent text-on-surface placeholder-on-surface-variant outline-none text-lg"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">🏷️ หมวดหมู่</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className="bg-surface-container-lowest p-4 rounded-xl text-center hover:bg-surface-container-high transition-colors border border-surface-container-high hover:border-primary cursor-pointer group"
              >
                <p className="text-3xl mb-2">{cat.icon}</p>
                <p className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">{cat.title}</p>
              </button>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">❓ คำถามและคำตอบ</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group bg-surface-container-lowest rounded-2xl border border-surface-container-high hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <button className="w-full p-6 text-left flex justify-between items-center">
                  <h4 className="font-bold text-on-surface text-lg group-hover:text-primary transition-colors">{faq.question}</h4>
                  <span className="text-2xl group-hover:rotate-180 transition-transform duration-300">🔽</span>
                </button>
                <div className="px-6 pb-6 pt-0 text-on-surface-variant border-t border-surface-container-high">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">💡 เคล็ดลับการใช้งาน</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "⏰", title: "ใช้พยากรณ์รายชั่วโมง", desc: "คำที่พยากรณ์รายชั่วโมงสำหรับการวางแผนในแต่ละวัน" },
              { icon: "📌", title: "บันทึกตำแหน่งโปรด", desc: "บันทึกตำแหน่งที่คุณเข้าชมบ่อยสำหรับการเข้าถึงที่รวดเร็ว" },
              { icon: "🔔", title: "ตั้งค่าการแจ้งเตือน", desc: "รับการแจ้งเตือนสำหรับสภาพอากาศที่สำคัญเท่านั้น" },
              { icon: "🌙", title: "ใช้โหมดมืด", desc: "เปิดโหมดมืดเพื่อลดความเหนื่อยตาตอนกลางคืน" },
              { icon: "📊", title: "ตรวจสอบสถิติ", desc: "ดูสถิติการใช้งานเพื่อเข้าใจพฤติกรรมอากาศของคุณ" },
              { icon: "🗺️", title: "ดูแผนที่", desc: "ดูแผนที่เพื่อเห็นภาพรวมของตำแหน่งหลายแห่ง" },
            ].map((tip, index) => (
              <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors hover:shadow-xl">
                <p className="text-4xl mb-3">{tip.icon}</p>
                <h4 className="font-bold text-on-surface mb-2">{tip.title}</h4>
                <p className="text-sm text-on-surface-variant">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📞 ยังคงต้องการความช่วยเหลือ?</h3>
          <div className="bg-gradient-to-r from-surface-container-lowest to-surface-container-low p-8 rounded-2xl shadow-lg border border-surface-container-high text-center">
            <p className="text-4xl mb-4">📬</p>
            <h4 className="text-2xl font-bold text-on-surface mb-3">ติดต่อทีมสนับสนุน</h4>
            <p className="text-on-surface-variant mb-6 max-w-2xl mx-auto">
              ทีมของเราพร้อมช่วยเหลือคุณ ส่งข้อความ อีเมล หรือเรียก 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:bg-primary-container transition-colors">
                📧 ส่งอีเมล
              </button>
              <button className="bg-surface-container-high text-on-surface px-8 py-3 rounded-full font-bold hover:bg-surface-container-highest transition-colors">
                💬 แชท
              </button>
              <button className="bg-surface-container-high text-on-surface px-8 py-3 rounded-full font-bold hover:bg-surface-container-highest transition-colors">
                📞 เรียก
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
