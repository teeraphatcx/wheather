export default function Weather() {
  const currentWeather = {
    city: "กรุงเทพ",
    temp: 32,
    feelsLike: 36,
    condition: "มีเมฆ",
    humidity: 75,
    wind: 8,
    pressure: 1013,
    visibility: 10,
    uvIndex: 8,
    icon: "cloud",
  };

  const cityWeather = [
    { city: "กรุงเทพ", temp: 32, condition: "มีเมฆ", humidity: 75, wind: 8, icon: "cloud", color: "from-blue-500" },
    { city: "เชียงใหม่", temp: 28, condition: "ฝนเล็กน้อย", humidity: 82, wind: 5, icon: "water_drop", color: "from-cyan-500" },
    { city: "ภูเก็ต", temp: 30, condition: "แดดสด", humidity: 70, wind: 12, icon: "sunny", color: "from-yellow-500" },
    { city: "นครศรีธรรมราช", temp: 31, condition: "มีเมฆ", humidity: 78, wind: 6, icon: "cloud", color: "from-indigo-500" },
  ];

  const hourly = [
    { time: "12:00", temp: 32, icon: "sunny" },
    { time: "13:00", temp: 33, icon: "sunny" },
    { time: "14:00", temp: 34, icon: "cloud" },
    { time: "15:00", temp: 33, icon: "cloud" },
    { time: "16:00", temp: 31, icon: "water_drop" },
    { time: "17:00", temp: 29, icon: "water_drop" },
    { time: "18:00", temp: 27, icon: "cloud" },
    { time: "19:00", temp: 26, icon: "nights_stay" },
  ];

  const forecast = [
    { day: "จันทร์", high: 33, low: 27, condition: "แดดสด", icon: "sunny", chance: "10%" },
    { day: "อังคาร", high: 32, low: 26, condition: "มีเมฆ", icon: "cloud", chance: "30%" },
    { day: "พุธ", high: 30, low: 25, condition: "ฝนตกหนัก", icon: "water_drop", chance: "80%" },
    { day: "พฤหัสบดี", high: 31, low: 26, condition: "แดดสด", icon: "sunny", chance: "5%" },
    { day: "ศุกร์", high: 32, low: 27, condition: "มีเมฆ", icon: "cloud", chance: "20%" },
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
              <span className="material-symbols-outlined text-2xl">cloud</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">ดูอากาศ</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">ทุกเมื่อทุกที่</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">cloud</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">สภาพอากาศ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/stats">
            <span>📊</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">สถิติ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/reports">
            <span>📍</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">ตำแหน่ง</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/settings">
            <span>⚙️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">ตั้งค่า</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/about">
            <span>ℹ️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">เกี่ยวกับ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/help">
            <span>❓</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">ช่วยเหลือ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            🔄 รีเฟรช
          </button>
          <p className="text-[10px] text-on-surface-variant text-center">อัปเดตครั้งล่าสุด 2 นาทีที่แล้ว</p>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full max-w-7xl mx-auto">
        {/* Header with Gradient */}
        <header className="mb-12">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-primary-container/10 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-2">📍 ข้อมูลสภาพอากาศจริงเวลา</p>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">สภาพอากาศ <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">ประเทศไทย</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">ข้อมูลสภาพอากาศปัจจุบันและพยากรณ์ 5 วันข้างหน้า</p>
            </div>
          </div>
        </header>

        {/* Current Weather - Hero Card */}
        <section className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-8 rounded-2xl shadow-2xl border border-surface-container-high">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Temp */}
                <div className="flex flex-col justify-center items-start lg:col-span-1">
                  <p className="text-on-surface-variant text-lg mb-2">{currentWeather.city}</p>
                  <div className="text-7xl font-black text-on-surface mb-2">{currentWeather.temp}°</div>
                  <p className="text-on-surface-variant text-base">สัมผัสได้ {currentWeather.feelsLike}°</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl text-surface-tint">{currentWeather.icon}</span>
                    <span className="text-2xl text-on-surface font-semibold">{currentWeather.condition}</span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">💧 ความชื้น</p>
                    <p className="text-3xl font-bold text-on-surface">{currentWeather.humidity}%</p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">💨 ลมพัด</p>
                    <p className="text-3xl font-bold text-on-surface">{currentWeather.wind} กม./ชม.</p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">🔽 ความดัน</p>
                    <p className="text-3xl font-bold text-on-surface">{currentWeather.pressure} mb</p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">👁️ มองเห็น</p>
                    <p className="text-3xl font-bold text-on-surface">{currentWeather.visibility} กม.</p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">☀️ ดัชนี UV</p>
                    <p className="text-3xl font-bold text-error">{currentWeather.uvIndex}</p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high hover:border-primary transition-colors">
                    <p className="text-on-surface-variant text-sm font-semibold mb-1">⏱️ เวลา</p>
                    <p className="text-xl font-bold text-on-surface">14:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hourly Forecast */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📋 พยากรณ์รายชั่วโมง</h3>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-2">
              {hourly.map((item, index) => (
                <div key={index} className="bg-surface-container-low p-4 rounded-xl min-w-[120px] text-center hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border border-surface-container-high">
                  <p className="font-bold text-on-surface mb-2">{item.time}</p>
                  <p className="text-3xl mb-2 text-center">{item.icon === 'sunny' ? '☀️' : item.icon === 'cloud' ? '☁️' : item.icon === 'water_drop' ? '🌧️' : '🌙'}</p>
                  <p className="text-2xl font-bold text-on-surface">{item.temp}°</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Weather Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">🏙️ สภาพอากาศในเมืองหลัก</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityWeather.map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} to-primary rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-surface-container-high cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`text-sm font-black bg-gradient-to-r ${item.color} to-primary bg-clip-text text-transparent`}>{item.city}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{item.condition}</p>
                    </div>
                    <span className="text-4xl">{item.icon === 'cloud' ? '☁️' : item.icon === 'water_drop' ? '🌧️' : '☀️'}</span>
                  </div>
                  
                  <div className="text-5xl font-black text-on-surface mb-4 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">{item.temp}°</div>
                  
                  <div className="space-y-2 border-t border-surface-container-high pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">💧 ความชื้น</span>
                      <span className="text-on-surface font-bold">{item.humidity}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">💨 ลมพัด</span>
                      <span className="text-on-surface font-bold">{item.wind} กม./ชม.</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Day Forecast */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📅 พยากรณ์ 5 วัน</h3>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {forecast.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-surface-container-low to-surface-container-high p-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-surface-container-high text-center">
                  <p className="font-black text-primary text-sm mb-3 uppercase">{item.day}</p>
                  <div className="flex justify-center mb-3 text-4xl">
                    {item.icon === 'sunny' ? '☀️' : item.icon === 'cloud' ? '☁️' : '🌧️'}
                  </div>
                  <div className="mb-3">
                    <p className="text-3xl font-black bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">{item.high}°</p>
                    <p className="text-sm text-on-surface-variant">{item.low}°</p>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">{item.condition}</p>
                  <div className="bg-primary/10 rounded-lg py-1 px-2 text-xs font-bold text-primary">💧 {item.chance}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Alerts & Tips */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">⚠️ คำแนะนำและเตือนการณ์</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-error to-error rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-surface-container-lowest p-6 rounded-xl border border-error/20 hover:border-error/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🔥</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2 text-lg">ระวังแดด</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">อากาศร้อนจัด ดัชนีรังสี UV = 8 ระดับสูงมาก ควรใส่ครีมกันแดด SPF 50+ และสวมหมวก</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-surface-container-lowest p-6 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💧</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2 text-lg">อากาศชื้นสูง</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">ความชื้นสัมพัทธ์ 75% อาจรู้สึกอึดอัด ควรดื่มน้ำบ่อยๆ อย่างน้อย 8 แก้ว/วัน</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tertiary to-tertiary rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-surface-container-lowest p-6 rounded-xl border border-tertiary/20 hover:border-tertiary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🌪️</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2 text-lg">ลมเบา</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">ลมพัดเฉพาะที่ด้วยความเร็ว 8 กม./ชม. เหมาะสำหรับกิจกรรมกลางแจ้ง</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
