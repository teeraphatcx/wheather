export default function Settings() {
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
              <span className="text-2xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">ตั้งค่า</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">จัดการแอป</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/settings">
            <span>⚙️</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">ตั้งค่า</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span>🌤️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">อากาศ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-error to-error/80 text-on-primary py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            🚪 ออกจากระบบ
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
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-2">⚙️ การตั้งค่า</p>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">จัดการแอป <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">ของคุณ</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">ปรับแต่งประสบการณ์การใช้งาน</p>
            </div>
          </div>
        </header>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* General Settings */}
          <section>
            <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline">🌍 ตั้งค่าทั่วไป</h3>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">ภาษา</h4>
                    <p className="text-sm text-on-surface-variant">เลือกภาษาที่คุณต้องการ</p>
                  </div>
                  <select className="bg-surface-container-high text-on-surface px-4 py-2 rounded-lg border border-surface-container-highest">
                    <option>🇹🇭 ไทย</option>
                    <option>🇬🇧 English</option>
                  </select>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">หน่วยอุณหภูมิ</h4>
                    <p className="text-sm text-on-surface-variant">ใช้ Celsius หรือ Fahrenheit</p>
                  </div>
                  <select className="bg-surface-container-high text-on-surface px-4 py-2 rounded-lg border border-surface-container-highest">
                    <option>°C โรค</option>
                    <option>°F Fahrenheit</option>
                  </select>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">โหมดมืด</h4>
                    <p className="text-sm text-on-surface-variant">เปิดใช้งานโหมดมืดสำหรับการทำงานตอนกลางคืน</p>
                  </div>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:bg-primary-container transition-colors">
                    เปิด
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline">🔔 การแจ้งเตือน</h3>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">เตือนสภาพอากาศ</h4>
                    <p className="text-sm text-on-surface-variant">รับการแจ้งเตือนเมื่อมีสภาพอากาศที่สำคัญ</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">เตือนรายวัน</h4>
                    <p className="text-sm text-on-surface-variant">เตือนสภาพอากาศทุกเช้า 7:00 น.</p>
                  </div>
                  <input type="checkbox" className="w-6 h-6 cursor-pointer" />
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">เสียงแจ้งเตือน</h4>
                    <p className="text-sm text-on-surface-variant">เปิดเสียงเมื่อมีการแจ้งเตือน</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section>
            <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline">🔒 ความเป็นส่วนตัวและความปลอดภัย</h3>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">ใช้ตำแหน่งที่ตั้ง</h4>
                    <p className="text-sm text-on-surface-variant">อนุญาตเข้าถึงตำแหน่งของคุณ</p>
                  </div>
                  <button className="bg-secondary text-on-primary px-6 py-2 rounded-full font-bold hover:bg-secondary-container transition-colors">
                    ปิด
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-primary transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">ข้อมูลการใช้งาน</h4>
                    <p className="text-sm text-on-surface-variant">เก็บข้อมูลเพื่อปรับปรุงแอป</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
                </div>
              </div>

              <button className="w-full bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high hover:border-error transition-colors hover:bg-error/10">
                <p className="font-bold text-error">🗑️ ล้างข้อมูลแคช</p>
                <p className="text-sm text-on-surface-variant mt-2">ลบข้อมูลชั่วคราวเพื่อเพิ่มประสิทธิภาพ</p>
              </button>
            </div>
          </section>

          {/* About */}
          <section>
            <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline">ℹ️ เกี่ยวกับ</h3>
            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">เวอร์ชันแอป</span>
                  <span className="text-on-surface font-bold">v1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">อัปเดตล่าสุด</span>
                  <span className="text-on-surface font-bold">3 เมษายน 2566</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">ข้อมูลอุปกรณ์</span>
                  <span className="text-on-surface font-bold">iOS 18.2</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
