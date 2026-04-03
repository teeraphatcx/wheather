export default function Weather() {
  const weatherData = [
    { city: "กรุงเทพ", temp: 32, condition: "มีเมฆ", humidity: 75, wind: 8, icon: "cloud" },
    { city: "เชียงใหม่", temp: 28, condition: "ฝนเล็กน้อย", humidity: 82, wind: 5, icon: "water_drop" },
    { city: "ภูเก็ต", temp: 30, condition: "แดดสด", humidity: 70, wind: 12, icon: "sunny" },
    { city: "นครศรีธรรมราช", temp: 31, condition: "มีเมฆ", humidity: 78, wind: 6, icon: "cloud" },
  ];

  const forecast = [
    { day: "จันทร์", high: 33, low: 27, condition: "แดดสด", icon: "sunny" },
    { day: "อังคาร", high: 32, low: 26, condition: "มีเมฆ", icon: "cloud" },
    { day: "พุธ", high: 30, low: 25, condition: "ฝนตกหนัก", icon: "water_drop" },
    { day: "พฤหัสบดี", high: 31, low: 26, condition: "แดดสด", icon: "sunny" },
    { day: "ศุกร์", high: 32, low: 27, condition: "มีเมฆ", icon: "cloud" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-on-background">
      {/* SideNavBar */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-8 space-y-4 z-50">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-lg">
              <span className="material-symbols-outlined">cloud</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">ดูอากาศ</h1>
              <p className="text-[10px] uppercase tracking-widest text-outline">ข้อมูลสภาพอากาศ</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-200" href="/weather">
            <span className="material-symbols-outlined">cloud</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">สภาพอากาศ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span className="material-symbols-outlined">show_chart</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">กลับหน้าหลัก</span>
          </a>
        </div>
        <div className="px-6 space-y-4">
          <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:opacity-90 transition-opacity">
            รีเฟรช
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8 max-w-[1600px] w-full">
        {/* Header Section */}
        <header className="mb-12">
          <div className="max-w-2xl">
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-2">ข้อมูลสภาพอากาศจริงเวลา</p>
            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-tight font-headline">สภาพอากาศ <span className="text-surface-tint">ประเทศไทย</span></h2>
            <p className="text-on-surface-variant mt-4 leading-relaxed font-light">ข้อมูลสภาพอากาศปัจจุบันและพยากรณ์ 5 วันข้างหน้า อัปเดตทุก 30 นาที</p>
          </div>
        </header>

        {/* Current Weather Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">สภาพอากาศในเมืองหลัก</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherData.map((item, index) => (
              <div key={index} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_40px_40px_-10px_rgba(25,28,29,0.06)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-primary">{item.city}</span>
                    <p className="text-xs text-on-surface-variant mt-1">{item.condition}</p>
                  </div>
                  <span className="material-symbols-outlined text-surface-tint text-4xl">{item.icon}</span>
                </div>
                
                <div className="text-4xl font-bold text-on-surface mb-4">{item.temp}°</div>
                
                <div className="space-y-2 border-t border-surface-container-high pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">ความชื้น</span>
                    <span className="text-on-surface font-semibold">{item.humidity}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">ลมพัด</span>
                    <span className="text-on-surface font-semibold">{item.wind} กม./ชม.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Day Forecast */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">พยากรณ์ 5 วัน</h3>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_40px_40px_-10px_rgba(25,28,29,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {forecast.map((item, index) => (
                <div key={index} className="bg-surface-container-low p-4 rounded-lg text-center">
                  <p className="font-black text-primary text-sm mb-3">{item.day}</p>
                  <div className="flex justify-center mb-3">
                    <span className="material-symbols-outlined text-surface-tint">{item.icon}</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-on-surface">{item.high}°</p>
                    <p className="text-sm text-on-surface-variant">{item.low}°</p>
                  </div>
                  <p className="text-xs text-on-surface-variant">{item.condition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Tips */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">คำแนะนำสภาพอากาศ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_40px_40px_-10px_rgba(25,28,29,0.06)] border-l-4 border-error">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-error text-2xl">warning</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">ระวังแดด</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">อากาศร้อนจัด ดัชนีรังสีอัตราเร่ง ควรใส่ครีมกันแดด SPF 50+</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_40px_40px_-10px_rgba(25,28,29,0.06)] border-l-4 border-secondary">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">water_drop</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">อากาศชื้นสูง</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">ความชื้นสัมพัทธ์สูง อาจรู้สึกอึดอัด ควรดื่มน้ำบ่อยๆ</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_40px_40px_-10px_rgba(25,28,29,0.06)] border-l-4 border-tertiary">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-2xl">air</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">คุณภาพอากาศ</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">คุณภาพอากาศส่วนใหญ่ดี ผู้ที่มีปัญหาระบบทางเดินหายใจควรระวัง</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
