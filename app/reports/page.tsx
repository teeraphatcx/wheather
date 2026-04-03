export default function Reports() {
  const locations = [
    { city: "กรุงเทพ", lat: 13.73, lng: 100.49, visits: 487, lastVisit: "3 นาทีที่แล้ว", weather: "มีเมฆ", temp: 32 },
    { city: "เชียงใหม่", lat: 18.79, lng: 98.98, visits: 234, lastVisit: "2 วันที่แล้ว", weather: "ฝนเล็กน้อย", temp: 28 },
    { city: "ภูเก็ต", lat: 7.89, lng: 98.40, visits: 156, lastVisit: "1 สัปดาห์ที่แล้ว", weather: "แดดสด", temp: 30 },
    { city: "นครศรีธรรมราช", lat: 8.43, lng: 100.09, visits: 89, lastVisit: "2 สัปดาห์ที่แล้ว", weather: "มีเมฆ", temp: 29 },
    { city: "ขอนแก่น", lat: 16.22, lng: 102.83, visits: 67, lastVisit: "1 เดือนที่แล้ว", weather: "แดดสด", temp: 31 },
    { city: "หาดใหญ่", lat: 7.79, lng: 100.58, visits: 45, lastVisit: "1 เดือนที่แล้ว", weather: "ฝนตกหนัก", temp: 28 },
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
              <span className="text-2xl">📍</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-tight">ตำแหน่ง</h1>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-semibold">บันทึกที่ตั้ง</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-0">
          <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-r-full py-3 px-6 my-1 shadow-lg flex items-center gap-4 group transition-all duration-300 hover:shadow-xl" href="/reports">
            <span>📍</span>
            <span className="text-[11px] uppercase tracking-widest font-bold">ตำแหน่ง</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-r-full py-3 px-6 my-1 flex items-center gap-4 hover:translate-x-1 transition-all duration-200" href="/">
            <span>🌤️</span>
            <span className="text-[11px] uppercase tracking-widest font-medium">อากาศ</span>
          </a>
        </div>
        <div className="px-6 space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container py-3 rounded-xl font-bold text-xs uppercase tracking-tighter hover:shadow-lg transition-all duration-300 hover:scale-105">
            ➕ เพิ่มตำแหน่ง
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
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] mb-2">📍 ตำแหน่งที่บันทึก</p>
              <h2 className="text-5xl font-black text-on-surface tracking-tight leading-tight font-headline mb-3">สถานที่ที่ <span className="bg-gradient-to-r from-surface-tint to-primary bg-clip-text text-transparent">คุณติ่งตาม</span></h2>
              <p className="text-on-surface-variant mt-2 leading-relaxed font-light text-lg">ดูและจัดการตำแหน่งที่บันทึกไว้ของคุณ</p>
            </div>
          </div>
        </header>

        {/* Locations Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">🗺️ ตำแหน่งทั้งหมด</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-container rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-surface-container-high cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm font-black text-primary mb-1">📍 {location.city}</p>
                      <p className="text-xs text-on-surface-variant">{location.lat.toFixed(2)}°N, {location.lng.toFixed(2)}°E</p>
                    </div>
                    <span className="text-3xl">{location.weather === 'แดดสด' ? '☀️' : location.weather === 'มีเมฆ' ? '☁️' : '🌧️'}</span>
                  </div>

                  <div className="bg-surface-container-high p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-on-surface-variant mb-1">อุณหภูมิ</p>
                        <p className="text-2xl font-bold text-on-surface">{location.temp}°</p>
                      </div>
                      <div>
                        <p className="text-xs text-on-surface-variant mb-1">สภาวะ</p>
                        <p className="text-sm font-bold text-on-surface">{location.weather}</p>
                      </div>
                      <div>
                        <p className="text-xs text-on-surface-variant mb-1">จำนวนครั้ง</p>
                        <p className="text-2xl font-bold text-primary">{location.visits}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <p className="text-on-surface-variant">ครั้งล่าสุด: {location.lastVisit}</p>
                    <button className="text-error hover:text-error-container transition-colors font-bold">🗑️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map View */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">🗺️ มุมมองแผนที่</h3>
          <div className="relative w-full h-96 bg-surface-container-lowest rounded-2xl shadow-lg border border-surface-container-high overflow-hidden group">
            {/* Simplified Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-container/10 to-surface"></div>

            {/* Map Markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  left: `${(location.lng - 98) * 15 + 50}%`,
                  top: `${(location.lat - 7) * 8 + 50}%`,
                }}
              >
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-on-primary shadow-lg flex items-center justify-center text-lg hover:scale-150 transition-transform">
                  📍
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface text-background px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap z-10">
                  {location.city}<br />{location.temp}°
                </div>
              </div>
            ))}

            {/* Map Info */}
            <div className="absolute top-4 left-4 bg-surface-container-low/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-surface-container-high">
              <p className="text-sm font-bold text-on-surface">🗺️ {locations.length} ตำแหน่ง</p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h3 className="text-2xl font-bold text-on-surface mb-6 font-headline">📊 สถิติตำแหน่ง</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">📌 ตำแหน่งทั้งหมด</p>
              <p className="text-4xl font-black text-on-surface mb-2">{locations.length}</p>
              <p className="text-sm text-on-surface-variant">บันทึกไว้ในแอป</p>
            </div>

            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">👁️ ทั้งหมดเข้าชม</p>
              <p className="text-4xl font-black text-on-surface mb-2">{locations.reduce((a, b) => a + b.visits, 0)}</p>
              <p className="text-sm text-on-surface-variant">ครั้งทั้งหมด</p>
            </div>

            <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 rounded-2xl shadow-lg border border-surface-container-high">
              <p className="text-on-surface-variant mb-2">⭐ สถานที่ยอดนิยม</p>
              <p className="text-2xl font-black text-on-surface mb-2">{locations[0].city}</p>
              <p className="text-sm text-on-surface-variant">{locations[0].visits} ครั้งเข้าชม</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
