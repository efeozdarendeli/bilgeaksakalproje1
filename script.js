const account = {
  name: "BİLGE",
  fullName: "Bilge Aksakal",
  city: "Balıkesir",
  school: "Balıkesir Üniversitesi",
  project: "Internet Programlama Final Projesi",
};

const slides = [
  {
    eyebrow: "Kisisel Bilgi Portali",
    title: "Bilge Aksakal icin hazirlanmis ozel portal",
    text: "Yemekler, kitaplar, hedefler ve iletisim bilgileri e-Devlet arayuzunden ilham alan kartlarla sunulur.",
    theme: "theme-blue",
  },
  {
    eyebrow: "Balıkesir Üniversitesi",
    title: "Internet Programlama final projesi",
    text: "HTML, CSS ve JavaScript ile giris ekrani, slider, arama, modal ve son kullanilan hizmetler eklenmistir.",
    theme: "theme-green",
  },
  {
    eyebrow: "Etkilesimli Hizmetler",
    title: "Kartlara tikla, detaylari gor, arama ile hizlica bul",
    text: "Her acilan kart son kullanilanlar listesine eklenir; arama kutusu yazarken oneriler gosterir.",
    theme: "theme-gold",
  },
];

const services = [
  {
    id: "food",
    title: "En Sevdigim Yemek",
    icon: "food",
    kicker: "Kisisel Bilgi",
    tags: ["kokorec", "yemek", "ayran", "bursa"],
    summary: "Fahri kokorec, ayran ve favori lezzetler.",
    body: `
      <div class="detail-visual food-visual">
        <div><strong>Fahri Kokorec</strong><span>Bursa'da ayranla en sevdigim lezzet</span></div>
      </div>
      <p>En sevdigim yemek Fahri kokorecte kokorec. Yaninda ayran olunca benim icin tam bir klasik oluyor.</p>
      <div class="tag-row"><span>Kokorec</span><span>Ayran</span><span>Bursa</span><span>Sutlac</span></div>
      <ul><li>Favori lezzet: Kokorec</li><li>Yaninda: Ayran</li><li>Tatli tercihi: Sutlac</li></ul>
    `,
  },
  {
    id: "books",
    title: "Okudugum Kitaplar",
    icon: "book",
    kicker: "Kitaplik",
    tags: ["kitap", "saftirik", "1984", "simyaci"],
    summary: "Okunan ve okunmak istenen kitaplar.",
    body: `
      <div class="detail-visual book-visual">
        <div><strong>Okuma Listem</strong><span>Kisa, akilda kalan ve farkli turlerden kitaplar</span></div>
      </div>
      <p>Bu bolumde son zamanlarda okudugum veya okumak istedigim kitaplar yer alir.</p>
      <div class="mini-gallery"><span>Saftirik</span><span>1984</span><span>Simyaci</span></div>
      <ul><li>Saftirik</li><li>1984</li><li>Hayvan Ciftligi</li><li>Simyaci</li></ul>
    `,
  },
  {
    id: "movies",
    title: "Sevdigim Filmler ve Diziler",
    icon: "film",
    kicker: "Ilgi Alani",
    tags: ["film", "dizi", "recep ivedik", "dark"],
    summary: "Film ve dizi tercihleri.",
    body: `
      <div class="detail-visual">
        <div><strong>Film ve Dizi Arsivi</strong><span>Komedi, gizem ve surukleyici hikayeler</span></div>
      </div>
      <p>Film ve dizi zevkim genelde komedi, bilim kurgu, gizem ve karakter odakli hikayeler etrafinda doner.</p>
      <div class="mini-gallery"><span>Recep İvedik</span><span>Inception</span><span>Dark</span></div>
      <ul><li>Recep İvedik</li><li>Inception</li><li>Dark</li><li>Breaking Bad</li></ul>
    `,
  },
  {
    id: "hobbies",
    title: "Hobilerim",
    icon: "hobby",
    kicker: "Gunluk Hayat",
    tags: ["hobi", "muzik", "oyun", "kod"],
    summary: "Bos zaman aktiviteleri.",
    body: `
      <div class="detail-visual">
        <div><strong>Gunluk Rutin</strong><span>Kod, muzik, oyun ve yeni teknolojiler</span></div>
      </div>
      <p>Bos zamanlarda hem bilgisayar basinda uretmeyi hem de zihni toparlayan aktiviteleri severim.</p>
      <div class="tag-row"><span>Kod yazmak</span><span>Muzik</span><span>Oyun</span><span>Teknoloji</span></div>
      <ul><li>Kod yazmak</li><li>Muzik dinlemek</li><li>Oyun oynamak</li><li>Yeni teknolojileri denemek</li></ul>
    `,
  },
  {
    id: "projects",
    title: "Projelerim",
    icon: "project",
    kicker: "Calisma Alani",
    tags: ["proje", "html", "css", "javascript"],
    summary: "Final odevi ve teknik parcalar.",
    body: `
      <div class="detail-visual goal-visual">
        <div><strong>Kisisel Portal</strong><span>HTML, CSS ve JavaScript ile hazirlandi</span></div>
      </div>
      <p>Bu final odevi icin e-Devlet arayuzunden ilham alan, kisisel bilgilerimi kartlarla anlatan bir web sitesi hazirladim.</p>
      <div class="timeline"><div><strong>HTML</strong><span>Sayfa yapisi ve iki ekranli kurgu</span></div><div><strong>CSS</strong><span>e-Devlet benzeri arayuz, responsive tasarim</span></div><div><strong>JS</strong><span>Giris, slider, arama, modal ve son kullanilanlar</span></div></div>
    `,
  },
  {
    id: "music",
    title: "Favori Muziklerim",
    icon: "music",
    kicker: "Dinleme Listesi",
    tags: ["muzik", "spotify", "pop", "rap"],
    summary: "Calisirken dinlenen muzikler.",
    body: `
      <div class="detail-visual">
        <div><strong>Dinleme Listem</strong><span>Calisirken odagi koruyan listeler</span></div>
      </div>
      <p>Calisirken genelde dikkat dagitmayan, ritmi iyi olan listeleri acarim.</p>
      <div class="mini-gallery"><span>Spotify</span><span>Turkce Pop</span><span>Rap</span></div>
      <ul><li>Spotify calisma listeleri</li><li>Turkce pop</li><li>Rap</li><li>Film muzikleri</li></ul>
    `,
  },
  {
    id: "city",
    title: "Yasadigim Sehir",
    icon: "city",
    kicker: "Konum",
    tags: ["balikesir", "balıkesir", "sehir", "universite"],
    summary: "Balıkesir ve sevilen yonleri.",
    body: `
      <div class="detail-visual city-visual">
        <div><strong>Balıkesir</strong><span>Huzurlu, sade ve ogrenci hayati icin rahat</span></div>
      </div>
      <p>Yasadigim sehir Balıkesir. Huzurlu yapisi ve merkezi konumuyla sevdigim bir sehir.</p>
      <div class="info-grid"><span>Sehir: Balıkesir</span><span>Universite: Balıkesir Üniversitesi</span><span>Sevdigim yani: Huzurlu olmasi</span><span>Gezilecek yer: Merkez</span></div>
    `,
  },
  {
    id: "blood",
    title: "Kan Grubu Bilgilerim",
    icon: "blood",
    kicker: "Onemli Bilgi",
    tone: "critical",
    tags: ["kan", "kan grubu", "a rh pozitif", "a+", "boy", "yas", "yaş", "saglik"],
    summary: "A Rh Pozitif, boy 1.71, yas 22.",
    body: `
      <div class="detail-visual blood-visual">
        <div><strong>A Rh Pozitif</strong><span>Kan grubu ve temel bilgiler</span></div>
      </div>
      <p>Bu kart acil durumda kolay gorulebilecek temel kisisel bilgileri gostermek icin eklendi.</p>
      <div class="vital-grid">
        <span><strong>Kan Grubu</strong>A Rh Pozitif</span>
        <span><strong>Boy</strong>1.71</span>
        <span><strong>Yaş</strong>22</span>
      </div>
    `,
  },
  {
    id: "goals",
    title: "Hedeflerim",
    icon: "goal",
    kicker: "Gelecek Plani",
    tags: ["hedef", "javascript", "react", "github"],
    summary: "Web gelistirme hedefleri.",
    body: `
      <div class="detail-visual goal-visual">
        <div><strong>Hedeflerim</strong><span>Web gelistirmede daha iyi projeler yapmak</span></div>
      </div>
      <p>Web gelistirme tarafinda daha iyi olmak ve kullanicinin aklinda kalan projeler yapmak istiyorum.</p>
      <div class="timeline"><div><strong>Kisa vade</strong><span>JavaScript'i guclendirmek</span></div><div><strong>Orta vade</strong><span>React ogrenmek</span></div><div><strong>Uzun vade</strong><span>Projeleri GitHub Pages uzerinde yayinlamak</span></div></div>
    `,
  },
  {
    id: "contact",
    title: "Iletisim Bilgilerim",
    icon: "contact",
    kicker: "Hesap",
    tags: ["iletisim", "mail", "github", "balikesir"],
    summary: "Mail, GitHub ve konum bilgileri.",
    body: `
      <div class="detail-visual">
        <div><strong>Iletisim</strong><span>Proje ve hesap bilgileri</span></div>
      </div>
      <p>Bu alan daha sonra gercek sosyal medya veya portfolyo linkleriyle genisletilebilir.</p>
      <ul><li>E-posta: aksakalbilge@gmail.com</li><li>GitHub: github.com/bilge</li><li>Konum: Balıkesir</li></ul>
    `,
  },
];

const features = [
  {
    id: "student",
    title: "Ogrenci Bilgilerim",
    icon: "briefcase",
    text: "Ders, okul ve proje bilgilerini tek pencerede gosterir.",
    body: `
      <div class="detail-visual goal-visual"><div><strong>Ogrenci Bilgileri</strong><span>Balıkesir Üniversitesi</span></div></div>
      <ul><li>Ad Soyad: Bilge Aksakal</li><li>Ders: Internet Programlama</li><li>Proje: Kisisel Portal</li><li>Durum: Final odevi</li></ul>
    `,
  },
  {
    id: "new",
    title: "Yeni Eklenenler",
    icon: "megaphone",
    text: "Portala eklenen en yeni kisisel bolumler.",
    body: `
      <p>Siteye son eklenen bolumler burada listelenir. Bu sayede incelerken hangi parcalarin etkilesimli oldugu hemen gorulur.</p>
      <div class="tag-row"><span>Slider</span><span>Arama onerileri</span><span>Son kullanilanlar</span><span>Zengin modal</span></div>
    `,
  },
  {
    id: "notes",
    title: "Evrak ve Notlar",
    icon: "document",
    text: "Kisa notlar, belgeler ve proje aciklamalari.",
    body: `
      <p>Bu bolum proje tesliminde kullanilabilecek aciklama notlarini barindirir.</p>
      <ul><li>Giris ekrani: profil tabanli giris</li><li>Ana ekran: kisisel kartlar</li><li>Etkilesim: arama, modal, slider ve gecmis listesi</li></ul>
    `,
  },
];

const loginView = document.querySelector("#loginView");
const portalView = document.querySelector("#portalView");
const enterButton = document.querySelector("#enterButton");
const serviceGrid = document.querySelector("#serviceGrid");
const featureGrid = document.querySelector("#featureGrid");
const searchInput = document.querySelector("#portalSearch");
const searchSuggestions = document.querySelector("#searchSuggestions");
const resultCount = document.querySelector("#resultCount");
const recentList = document.querySelector("#recentList");
const clearRecent = document.querySelector("#clearRecent");
const accountButton = document.querySelector("#accountButton");
const studentInfoButton = document.querySelector("#studentInfoButton");
const modal = document.querySelector("#detailModal");
const modalClose = document.querySelector("#modalClose");
const modalIcon = document.querySelector("#modalIcon");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const bannerCard = document.querySelector("#bannerCard");
const bannerCopy = document.querySelector("#bannerCopy");
const sliderDots = document.querySelector("#sliderDots");
const prevSlide = document.querySelector("#prevSlide");
const nextSlide = document.querySelector("#nextSlide");

let activeSlide = 0;
let recentIds = [];

function iconSvg(type) {
  const icons = {
    food: "<path d='M18 9v14M26 9v14M22 9v14M16 23h12M36 9c5 5 4 14-2 18v12h-6V9h8Z'/>",
    book: "<path d='M13 12h14c4 0 6 2 6 6v22H19c-3 0-6-2-6-5V12Zm20 0h4c3 0 5 2 5 5v23h-9V12ZM19 20h8M19 28h8'/>",
    film: "<path d='M12 14h32v26H12V14Zm8 0v26M36 14v26M12 22h8M12 32h8M36 22h8M36 32h8'/>",
    hobby: "<path d='M18 30c-5-2-7-8-4-13 7 2 10 7 8 13m10 0c5-2 7-8 4-13-7 2-10 7-8 13M20 32h16v6H20zM23 38h10'/>",
    project: "<path d='M14 16h28v21H14V16Zm5 6h8M19 29h15M18 43h20'/>",
    music: "<path d='M33 13v21c0 4-3 7-8 7-4 0-7-2-7-5s3-5 7-5c1 0 2 0 3 1V17l14-3v7l-9 2Z'/>",
    city: "<path d='M14 40V17h10v23M26 40V11h14v29M18 23h2M18 30h2M30 17h2M35 17h2M30 24h2M35 24h2M30 31h2M35 31h2'/>",
    goal: "<path d='M28 43a15 15 0 1 1 0-30 15 15 0 0 1 0 30Zm0-7a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-8 13-13'/>",
    contact: "<path d='M14 18h28v22H14V18Zm0 0 14 12 14-12M20 40V16h16v24'/>",
    blood: "<path d='M28 10c8 10 13 17 13 24 0 8-6 13-13 13s-13-5-13-13c0-7 5-14 13-24Zm-7 24h14M28 27v14'/>",
    briefcase: "<path d='M13 20h30v19H13V20Zm9 0v-5h12v5M13 28h30M25 28h6v5h-6z'/>",
    megaphone: "<path d='M14 29h8l17-10v22L22 31h-8v-2Zm8 2 3 9h-6l-3-9'/>",
    document: "<path d='M17 12h16l8 8v24H17V12Zm16 0v9h8M23 28h12M23 35h12'/>",
  };

  return `<svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="23" fill="#4389bd"/><g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.document}</g></svg>`;
}

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, " ");
}

function searchText(item) {
  return [item.title, item.kicker, item.summary, item.tags?.join(" "), stripHtml(item.body)].join(" ").toLocaleLowerCase("tr-TR");
}

function renderServices(list) {
  serviceGrid.innerHTML = "";
  resultCount.textContent = `${list.length} hizmet`;

  if (!list.length) {
    serviceGrid.innerHTML = '<p class="empty-message">Aradigin kart bulunamadi. Kokorec, kitap, Balıkesir veya hedef yazmayi deneyebilirsin.</p>';
    return;
  }

  list.forEach((item) => {
    const button = document.createElement("button");
    button.className = `service-card${item.tone === "critical" ? " service-card-critical" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="service-icon">${iconSvg(item.icon)}</span>
      <span class="service-title">${item.title}</span>
    `;
    button.addEventListener("click", () => openDetail(item));
    serviceGrid.appendChild(button);
  });
}

function renderFeatures() {
  featureGrid.innerHTML = "";

  features.forEach((item) => {
    const button = document.createElement("button");
    button.className = "feature-card";
    button.type = "button";
    button.innerHTML = `
      <span class="round-icon">${iconSvg(item.icon)}</span>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
      <span>Tumu ›</span>
    `;
    button.addEventListener("click", () => openDetail({ ...item, kicker: "One Cikan Hizmet" }));
    featureGrid.appendChild(button);
  });
}

function renderSlider() {
  const slide = slides[activeSlide];
  bannerCard.classList.remove("theme-blue", "theme-green", "theme-gold");
  bannerCard.classList.add(slide.theme);
  bannerCopy.innerHTML = `<p>${slide.eyebrow}</p><strong>${slide.title}</strong><span>${slide.text}</span>`;

  sliderDots.innerHTML = "";
  slides.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.className = `slider-dot${index === activeSlide ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `${index + 1}. duyuru`);
    dot.addEventListener("click", () => {
      activeSlide = index;
      renderSlider();
    });
    sliderDots.appendChild(dot);
  });
}

function goSlide(step) {
  activeSlide = (activeSlide + step + slides.length) % slides.length;
  renderSlider();
}

function renderSuggestions(matches) {
  if (!matches.length) {
    searchSuggestions.innerHTML = '<p class="recent-empty">Sonuc bulunamadi.</p>';
    searchSuggestions.classList.remove("is-hidden");
    return;
  }

  searchSuggestions.innerHTML = "";
  matches.slice(0, 5).forEach((item) => {
    const button = document.createElement("button");
    button.className = "suggestion-btn";
    button.type = "button";
    button.innerHTML = `<span class="suggestion-icon">${item.title.charAt(0)}</span><span><strong>${item.title}</strong><span>${item.summary}</span></span>`;
    button.addEventListener("click", () => {
      searchInput.value = item.title;
      searchSuggestions.classList.add("is-hidden");
      renderServices([item]);
      openDetail(item);
    });
    searchSuggestions.appendChild(button);
  });
  searchSuggestions.classList.remove("is-hidden");
}

function filterServices() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  const filtered = query ? services.filter((item) => searchText(item).includes(query)) : services;
  renderServices(filtered);
  renderSuggestions(query ? filtered : services.slice(0, 4));
}

function addRecent(item) {
  if (!item.id) {
    return;
  }

  const knownItem = [...services, ...features].some((entry) => entry.id === item.id);
  if (!knownItem) {
    return;
  }

  recentIds = [item.id, ...recentIds.filter((id) => id !== item.id)].slice(0, 6);
  renderRecent();
}

function renderRecent() {
  recentList.innerHTML = "";

  if (!recentIds.length) {
    recentList.innerHTML = '<p class="recent-empty">Henuz bir hizmet acilmadi. Kartlara tikladikca burada gorunecek.</p>';
    return;
  }

  recentIds.forEach((id) => {
    const item = [...services, ...features].find((entry) => entry.id === id);
    if (!item) {
      return;
    }

    const button = document.createElement("button");
    button.className = "recent-card";
    button.type = "button";
    button.innerHTML = `${iconSvg(item.icon)}<span><strong>${item.title}</strong><span>${item.kicker || "One Cikan Hizmet"}</span></span>`;
    button.addEventListener("click", () => openDetail({ ...item, kicker: item.kicker || "One Cikan Hizmet" }));
    recentList.appendChild(button);
  });
}

function openDetail(item) {
  modalIcon.innerHTML = iconSvg(item.icon);
  modalKicker.textContent = item.kicker || "Kisisel Kart";
  modalTitle.textContent = item.title;
  modalBody.innerHTML = item.body;
  addRecent(item);
  modal.showModal();
}

enterButton.addEventListener("click", () => {
  enterButton.disabled = true;
  loginView.classList.add("login-view--leaving");

  window.setTimeout(() => {
    loginView.classList.add("is-hidden");
    portalView.classList.remove("is-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 240);
});

searchInput.addEventListener("input", filterServices);
searchInput.addEventListener("focus", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  const matches = query ? services.filter((item) => searchText(item).includes(query)) : services.slice(0, 4);
  renderSuggestions(matches);
});

searchInput.addEventListener("blur", () => {
  window.setTimeout(() => searchSuggestions.classList.add("is-hidden"), 160);
});

accountButton.addEventListener("click", () => {
  openDetail({
    id: "account",
    title: account.fullName,
    icon: "contact",
    kicker: "Hesap Bilgileri",
    body: `
      <div class="detail-visual"><div><strong>${account.fullName}</strong><span>${account.school}</span></div></div>
      <ul><li>Kisa ad: ${account.name}</li><li>Sehir: ${account.city}</li><li>Proje: ${account.project}</li></ul>
    `,
  });
});

studentInfoButton.addEventListener("click", () => openDetail({ ...features[0], kicker: "Ogrenci Bilgileri" }));
clearRecent.addEventListener("click", () => {
  recentIds = [];
  renderRecent();
});
prevSlide.addEventListener("click", () => goSlide(-1));
nextSlide.addEventListener("click", () => goSlide(1));

modalClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) {
    modal.close();
  }
});

window.setInterval(() => goSlide(1), 5200);

renderServices(services);
renderFeatures();
renderSlider();
renderRecent();
