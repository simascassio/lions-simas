// =========================
// DADOS FAKE (36 CARROS)
// =========================
const CARS = [
  // Hatch (12)
  { id: 1,  type: "hatch", title: "Volkswagen Polo 1.0", year: 2020, price: 73990, km: 42000, img: "https://cdn.motor1.com/images/mgl/mJzOP/s1/4x3/volkswagen-polo.webp" },
  { id: 2,  type: "hatch", title: "Fiat Argo 1.3", year: 2019, price: 64990, km: 53000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250801/fiat-argo-1-0-firefly-flex-drive-manual-wmimagem14595433223.webp" },
  { id: 3,  type: "hatch", title: "Chevrolet Onix 1.0 Turbo", year: 2021, price: 79990, km: 31000, img: "https://s2-autoesporte.glbimg.com/_aFG5C8Bz2XOBgYLSKTiX-UkQxw=/0x0:6554x4374/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/h/8/nZPJR2RaCZsNNtkUuZbA/novo-onix-premier-15-.jpg" },
  { id: 4,  type: "hatch", title: "Hyundai HB20 1.0", year: 2022, price: 84990, km: 21000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260119/hyundai-hb20-1.0-tgdi-flex-platinum-automatico-wmimagem1257345291.jpg" },
  { id: 5,  type: "hatch", title: "Renault Sandero 1.6", year: 2018, price: 52990, km: 68000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260108/renault-sandero-1.0-12v-sce-flex-life-manual-wmimagem12084708032.jpg" },
  { id: 6,  type: "hatch", title: "Peugeot 208 1.6", year: 2023, price: 68990, km: 47000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260116/peugeot-208-1.0-firefly-flex-like-manual-wmimagem22305719279.jpg" },
  { id: 7,  type: "hatch", title: "Toyota Yaris Hatch", year: 2023, price: 70990, km: 56000, img: "https://promotive-public-images.s3.sa-east-1.amazonaws.com/a_fotos_vehiculos/m_toyota%20yaris%20xl%2023.jpg" },
  { id: 8,  type: "hatch", title: "Honda Fit 1.5", year: 2018, price: 87990, km: 72000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260115/honda-fit-1-5-ex-16v-flex-4p-automatico-wmimagem13271431315.webp" },
  { id: 9,  type: "hatch", title: "Ford Ka 1.0", year: 2019, price: 49990, km: 61000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202511/20251111/ford-ka-1.0-tivct-flex-sel-sedan-manual-wmimagem16082277082.jpg" },
  { id: 10, type: "hatch", title: "Citroën C3 1.0", year: 2025, price: 76990, km: 14000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202512/20251219/citroen-c3-1.0-firefly-flex-live-pack-manual-wmimagem13295214472.jpg" },
  { id: 11, type: "hatch", title: "Nissan March 1.6", year: 2018, price: 45990, km: 80000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260115/nissan-march-1.6-sv-16v-flex-4p-manual-wmimagem14155458695.jpg" },
  { id: 12, type: "hatch", title: "fiat argo 1.0", year: 2025, price: 65990, km: 52000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260112/fiat-argo-1.3-firefly-flex-trekking-cvt-wmimagem15395153337.jpg" },

  // SUV (12)
  { id: 13, type: "suv", title: "Jeep Renegade 1.8", year: 2020, price: 99990, km: 54000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260113/jeep-renegade-1-8-16v-flex-longitude-4p-automatico-wmimagem18271990675.webp" },
  { id: 14, type: "suv", title: "Hyundai Creta 2.0", year: 2021, price: 119990, km: 36000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260116/hyundai-creta-2.0-16v-flex-prestige-automatico-wmimagem19561920927.jpg" },
  { id: 15, type: "suv", title: "Volkswagen T-Cross 1.0", year: 2022, price: 129990, km: 24000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260117/volkswagen-tcross-1.0-200-tsi-total-flex-comfortline-automatico-wmimagem09193920728.jpg" },
  { id: 16, type: "suv", title: "Chevrolet Tracker 1.2", year: 2023, price: 139990, km: 18000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260114/chevrolet-tracker-1.2-turbo-flex-premier-automatico-wmimagem08024890561.jpg" },
  { id: 17, type: "suv", title: "Honda HR-V 1.8", year: 2019, price: 104990, km: 65000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260112/honda-hrv-1.8-16v-flex-ex-4p-automatico-wmimagem11344539953.jpg" },
  { id: 18, type: "suv", title: "Nissan Kicks 1.6", year: 2020, price: 94990, km: 58000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260107/nissan-kicks-1.6-16v-flexstart-s-4p-xtronic-wmimagem1214089038.jpg" },
  { id: 19, type: "suv", title: "Renault Duster 1.6", year: 2018, price: 78990, km: 82000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260117/renault-duster-1.6-16v-sce-flex-expression-xtronic-wmimagem12080630974.jpg" },
  { id: 20, type: "suv", title: "Toyota Corolla Cross", year: 2022, price: 159990, km: 22000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260120/toyota-corolla-cross-2-0-vvtie-flex-xre-direct-shift-wmimagem04005690237.webp" },
  { id: 21, type: "suv", title: "Fiat Pulse 1.0", year: 2023, price: 109990, km: 16000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260114/fiat-pulse-1.0-turbo-200-flex-audace-cvt-wmimagem16052267874.jpg" },
  { id: 22, type: "suv", title: "Peugeot 2008", year: 2024, price: 109990, km: 41000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260119/peugeot-2008-1-0-turbo-200-flex-allure-cvt-wmimagem20301435825.webp" },
  { id: 23, type: "suv", title: "Caoa Chery Tiggo 5X", year: 2022, price: 124990, km: 26000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260116/caoa-chery-tiggo-5x-1.5-vvt-turbo-iflex-txs-dct-wmimagem11540859230.jpg" },
  { id: 24, type: "suv", title: "Mitsubishi ASX", year: 2020, price: 109990, km: 69000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260115/mitsubishi-asx-2.0-mivec-flex-hpe-cvt-wmimagem13172818357.jpg" },

  // Sedan (12)
  { id: 25, type: "sedan", title: "Toyota Corolla 2.0", year: 2021, price: 139990, km: 33000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260114/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem16120171376.jpg" },
  { id: 26, type: "sedan", title: "Honda Civic 2.0", year: 2020, price: 129990, km: 52000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260120/honda-civic-2.0-16v-flexone-exl-4p-cvt-wmimagem0802529448.jpg" },
  { id: 27, type: "sedan", title: "Volkswagen Virtus 1.0", year: 2022, price: 89990, km: 24000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202511/20251114/VOLKSWAGEN-VIRTUS-1.0-200-TSI-COMFORTLINE-AUTOMATICO-wmimagem19342395218.jpg" },
  { id: 28, type: "sedan", title: "Chevrolet Onix Plus 1.0", year: 2023, price: 99990, km: 18000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202511/20251117/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem10394490838.jpg" },
  { id: 29, type: "sedan", title: "Nissan Versa 1.6", year: 2021, price: 89990, km: 39000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202512/20251224/nissan-versa-1-0-12v-flex-vdrive-manual-wmimagem20454987516.webp" },
  { id: 30, type: "sedan", title: "Hyundai HB20S 1.0", year: 2020, price: 79990, km: 45000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260117/hyundai-hb20s-1-0-tgdi-flex-platinum-plus-automatico-wmimagem12051025832.webp" },
  { id: 31, type: "sedan", title: "Fiat Cronos 1.3", year: 2019, price: 69990, km: 61000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202409/20240927/FIAT-CRONOS-1.3-FIREFLY-FLEX-DRIVE-MANUAL-wmimagem16342578033.jpg" },
  { id: 32, type: "sedan", title: "Renault Logan 1.6", year: 2018, price: 52990, km: 84000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260116/renault-logan-1.6-16v-sce-flex-zen-manual-wmimagem13190621577.jpg" },
  { id: 33, type: "sedan", title: "Chevrolet Cruze", year: 2019, price: 99990, km: 67000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202512/20251227/chevrolet-cruze-1.4-turbo-lt-16v-flex-4p-automatico-wmimagem1207160476.jpg" },
  { id: 34, type: "sedan", title: "Volkswagen Jetta", year: 2018, price: 104990, km: 92000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260102/volkswagenjetta14250tsitotalflexrlinetiptronic-WMIMAGEM18362756979.jpg" },
  { id: 35, type: "sedan", title: "Toyota Etios Sedan", year: 2018, price: 59990, km: 89000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202601/20260115/toyota-etios-1-5-xs-sedan-16v-flex-4p-manual-wmimagem14481811732.webp" },
  { id: 36, type: "sedan", title: "Caoa Chery Arrizo 6", year: 2022, price: 109990, km: 28000, img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202508/20250823/caoa-chery-arrizo-6-pro-1.5-vvt-turbo-iflex-cvt-WMIMAGEM12264061033.jpg" },
];

const PAGE_SIZE = 12;
let currentPage = 1;

const elGrid = document.getElementById("grid");
const elResults = document.getElementById("resultsLabel");
const elPageNumbers = document.getElementById("pageNumbers");

const elType = document.getElementById("type");
const elYearMin = document.getElementById("yearMin");
const elYearMax = document.getElementById("yearMax");
const elPriceMin = document.getElementById("priceMin");
const elPriceMax = document.getElementById("priceMax");
const elSortBy = document.getElementById("sortBy");

const btnApply = document.getElementById("btnApply");
const btnReset = document.getElementById("btnReset");
const btnPrev = document.getElementById("prevPage");
const btnNext = document.getElementById("nextPage");

// =========================
// HELPERS
// =========================
function formatBRL(value){
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function formatKM(value){
  return value.toLocaleString("pt-BR") + " km";
}

function readNumber(inputEl){
  const v = (inputEl.value || "").trim();
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function getFilters(){
  return {
    type: elType.value,
    yearMin: readNumber(elYearMin),
    yearMax: readNumber(elYearMax),
    priceMin: readNumber(elPriceMin),
    priceMax: readNumber(elPriceMax),
    sortBy: elSortBy.value,
  };
}

function applyFilters(list, f){
  let out = [...list];

  if (f.type !== "all"){
    out = out.filter(c => c.type === f.type);
  }
  if (f.yearMin !== null){
    out = out.filter(c => c.year >= f.yearMin);
  }
  if (f.yearMax !== null){
    out = out.filter(c => c.year <= f.yearMax);
  }
  if (f.priceMin !== null){
    out = out.filter(c => c.price >= f.priceMin);
  }
  if (f.priceMax !== null){
    out = out.filter(c => c.price <= f.priceMax);
  }

  // Ordenação
  switch (f.sortBy){
    case "priceAsc": out.sort((a,b)=>a.price-b.price); break;
    case "priceDesc": out.sort((a,b)=>b.price-a.price); break;
    case "yearAsc": out.sort((a,b)=>a.year-b.year); break;
    case "yearDesc": out.sort((a,b)=>b.year-a.year); break;
    default: break; // relevance (ordem original)
  }

  return out;
}

function totalPages(totalItems){
  return Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
}

function slicePage(list, page){
  const start = (page - 1) * PAGE_SIZE;
  return list.slice(start, start + PAGE_SIZE);
}

function setUrlPage(page){
  const url = new URL(window.location.href);
  url.searchParams.set("pagina", String(page));
  window.history.replaceState({}, "", url.toString());
}

function getUrlPage(){
  const url = new URL(window.location.href);
  const p = Number(url.searchParams.get("pagina") || "1");
  return Number.isFinite(p) && p >= 1 ? p : 1;
}

// =========================
// RENDER
// =========================
function renderCards(items){
  elGrid.innerHTML = items.map(car => `
    <article class="card">
      <div class="card__img">
        <img src="${car.img}" alt="${car.title}" loading="lazy">
        <div class="badge">${car.type}</div>
      </div>

      <div class="card__body">
        <div class="card__title">${car.title}</div>

        <div class="card__meta">
          <span>${car.year}</span>
          <span>•</span>
          <span>${formatKM(car.km)}</span>
        </div>

        <div class="card__price">
          <div class="price">${formatBRL(car.price)}</div>
          
        </div>
      </div>
    </article>
  `).join("");

  // botão fake (só pra parecer real)
  elGrid.querySelectorAll(".cta").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      alert("Página de detalhes (opcional). Você pode criar depois.");
    });
  });
}

function renderPagination(pages){
  elPageNumbers.innerHTML = "";

  for (let i = 1; i <= pages; i++){
    const b = document.createElement("button");
    b.className = "page-number" + (i === currentPage ? " active" : "");
    b.type = "button";
    b.textContent = String(i);
    b.addEventListener("click", ()=>{
      currentPage = i;
      setUrlPage(currentPage);
      update();
    });
    elPageNumbers.appendChild(b);
  }

  btnPrev.disabled = currentPage <= 1;
  btnNext.disabled = currentPage >= pages;
}

function update(){
  const f = getFilters();
  const filtered = applyFilters(CARS, f);

  const pages = totalPages(filtered.length);
  if (currentPage > pages) currentPage = pages;

  const pageItems = slicePage(filtered, currentPage);

  elResults.textContent = `${filtered.length} veículo(s) • Página ${currentPage} de ${pages}`;
  renderCards(pageItems);
  renderPagination(pages);
}

// =========================
// EVENTS
// =========================
btnApply.addEventListener("click", ()=>{
  currentPage = 1;
  setUrlPage(currentPage);
  update();
});

btnReset.addEventListener("click", ()=>{
  elType.value = "all";
  elYearMin.value = "";
  elYearMax.value = "";
  elPriceMin.value = "";
  elPriceMax.value = "";
  elSortBy.value = "relevance";

  currentPage = 1;
  setUrlPage(currentPage);
  update();
});

elSortBy.addEventListener("change", ()=>{
  currentPage = 1;
  setUrlPage(currentPage);
  update();
});

btnPrev.addEventListener("click", ()=>{
  if (currentPage > 1){
    currentPage--;
    setUrlPage(currentPage);
    update();
  }
});

btnNext.addEventListener("click", ()=>{
  currentPage++;
  setUrlPage(currentPage);
  update();
});

// =========================
// INIT
// =========================
currentPage = getUrlPage();
update();
