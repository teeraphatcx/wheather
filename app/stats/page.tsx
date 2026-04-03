export default function Stats() {
  const stats = [
    { label: "วันที่ใช้งาน", value: 127, unit: "วัน", icon: "📅", color: "from-blue-500" },
    { label: "ครั้งที่เปิดดู", value: 3450, unit: "ครั้ง", icon: "👁️", color: "from-cyan-500" },
    { label: "ตำแหน่งที่บันทึก", value: 28, unit: "ตำแหน่ง", icon: "📍", color: "from-green-500" },
    { label: "ลูกความเสี่ยง", value: 156, unit: "เหตุการณ์", icon: "⚠️", color: "from-red-500" },
  ];

  const monthlyData = [
    { month: "ม.ค.", views: 120 },
    { month: "ก.พ.", views: 180 },
    { month: "มี.ค.", views: 150 },
    { month: "เม.ย.", views: 220 },
    { month: "พ.ค.", views: 280 },
    { month: "มิ.ย.", views: 240 },
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
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">สถิติ</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">ข้อมูลการใช้งาน</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/stats">
            <span>📊</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">สถิติ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span>🌤️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">อากาศ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            ⬇️ ส่งออก
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
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-2">📊 สถิติการใช้งาน</p>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">ประวัติของคุณ <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">ตามสถิติ</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">ดูข้อมูลการใช้งานแอปของคุณ</p>
            </div>
          </div>
        </header>

        {/* Main Stats Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} to-primary rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-surface-container-high cursor-pointer">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-black text-on-surface mb-2 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">{stat.value}</div>
                  <p className="text-sm text-on-surface-variant mb-1">{stat.unit}</p>
                  <p className="text-sm font-bold text-on-surface">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chart Area */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📈 การเข้าชมรายเดือน</h3>
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-lg border border-surface-container-high">
            <div className="flex items-end justify-between h-64 gap-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center group">
                  <div className="w-full h-48 bg-gradient-to-t from-primary to-primary-container rounded-t-lg hover:from-primary-container hover:to-primary transition-all duration-300 hover:shadow-xl relative cursor-pointer" style={{height: `${(data.views / 300) * 200}px`}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface text-background px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap">
                      {data.views}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-on-surface mt-2">{data.month}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Times */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">⏰ เวลาที่ใช้งานมากที่สุด</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">⏰ ช่วงซ้ายบ้าน</p>
              <p className="text-4xl font-black text-on-surface mb-2">6:00 - 8:00</p>
              <p className="text-sm text-on-surface-variant">ช่วงเช้าเป็นเวลาที่ใช้งานมากที่สุด</p>
            </div>
            
            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">☀️ ช่วงกลางวัน</p>
              <p className="text-4xl font-black text-on-surface mb-2">12:00 - 14:00</p>
              <p className="text-sm text-on-surface-variant">ช่วงกลางวันมีการใช้งานปานกลาง</p>
            </div>
            
            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">🌙 ช่วงเย็น</p>
              <p className="text-4xl font-black text-on-surface mb-2">18:00 - 20:00</p>
              <p className="text-sm text-on-surface-variant">ช่วงเย็นมีการใช้งานเพิ่มขึ้นอีก</p>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">🕐 กิจกรรมล่าสุด</h3>
          <div className="bg-surface-container-lowest rounded-2xl shadow-lg border border-surface-container-high overflow-hidden">
            <div className="divide-y divide-surface-container-high">
              {[
                { action: "ดูสภาพอากาศที่กรุงเทพ", time: "3 ชั่วโมงที่แล้ว", icon: "📍" },
                { action: "เปิดพยากรณ์ 5 วัน", time: "5 ชั่วโมงที่แล้ว", icon: "📅" },
                { action: "ตั้งค่าการแจ้งเตือน", time: "1 วันที่แล้ว", icon: "🔔" },
                { action: "ดูอากาศที่ภูเก็ต", time: "2 วันที่แล้ว", icon: "📍" },
              ].map((item, index) => (
                <div key={index} className="p-4 hover:bg-surface-container-high transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">{item.action}</p>
                      <p className="text-sm text-on-surface-variant">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
