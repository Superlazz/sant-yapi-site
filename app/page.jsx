"use client";

import React, { useState } from "react";

/**
 * Sant Yapı landing page
 * Debug fix:
 * - Removed lucide-react imports because CDN icon fetch failed.
 * - Removed framer-motion to keep the component dependency-free.
 * - Replaced all icons with inline SVG React components.
 */

function IconBase({ children, className = "h-6 w-6", viewBox = "0 0 24 24" }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function BuildingIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
    </IconBase>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </IconBase>
  );
}

function CompassIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </IconBase>
  );
}

function DraftingCompassIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M10 4 8 8" />
      <path d="M14 4 16 8" />
      <path d="M8 8h8" />
      <path d="m10 8-4 12" />
      <path d="m14 8 4 12" />
      <path d="M9 17h6" />
    </IconBase>
  );
}

function FileCheckIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="m9 13 2 2 4-4" />
    </IconBase>
  );
}

function LayersIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </IconBase>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

function MapPinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

function PhoneIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M22 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.3 19.3 0 0 1 5.6 12.8 19.8 19.8 0 0 1 2.5 4.2 2 2 0 0 1 4.5 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.7L7.7 9.6a16 16 0 0 0 6.7 6.7l1.6-1.6a2 2 0 0 1 1.7-.6l2.6.4a2 2 0 0 1 1.7 2Z" />
    </IconBase>
  );
}

function RulerIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m4 20 16-16" />
      <path d="m14 4 6 6" />
      <path d="M7 17h.01M10 14h.01M13 11h.01M16 8h.01" />
    </IconBase>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3s5 2 7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6c2-1 7-3 7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </IconBase>
  );
}

function SparklesIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3 13.5 7.5 18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 14l.6 1.4L7 16l-1.4.6L5 18l-.6-1.4L3 16l1.4-.6L5 14Z" />
    </IconBase>
  );
}

function WorkflowIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M12 10v4" />
    </IconBase>
  );
}

const services = [
  {
    icon: <BuildingIcon className="h-6 w-6" />,
    title: "Statik Proje Çizimleri",
    text: "Mühendislik hesaplarından gelen donelere göre kalıp, donatı ve uygulama paftalarının temiz şekilde hazırlanması.",
  },
  {
    icon: <DraftingCompassIcon className="h-6 w-6" />,
    title: "Kalıp ve Donatı Paftaları",
    text: "Kolon, perde, kiriş, döşeme, temel ve merdiven detaylarının okunabilir çizim standardıyla paftalanması.",
  },
  {
    icon: <LayersIcon className="h-6 w-6" />,
    title: "Uygulama Detay Çizimleri",
    text: "Blok, kat ve detay bazlı çizim düzeniyle şantiyede kolay okunabilen uygulama detaylarının hazırlanması.",
  },
  {
    icon: <FileCheckIcon className="h-6 w-6" />,
    title: "Revizyon ve Çizim Takibi",
    text: "Mimari revizyonlara, saha notlarına ve proje değişikliklerine göre paftaların düzenli şekilde güncellenmesi.",
  },
];

const stats = [
  ["01", "Hızlı Geri Dönüş"],
  ["02", "Temiz Pafta Düzeni"],
  ["03", "Detaylı Donatı Açılımları"],
  ["04", "Temiz Çizim Standardı"],
];

const process = [
  "Proje donelerinin alınması",
  "Mimari ve statik donelerin incelenmesi",
  "Kalıp, donatı ve detay pafta düzeninin kurulması",
  "Kalıp, donatı ve uygulama çizimlerinin hazırlanması",
  "Revizyon takibi ve teslim paketi",
];


const projectGallery = [
  {
    title: "Kalıp Planı Çizimi",
    category: "Kalıp Paftası",
    image: "",
  },
  {
    title: "Kolon Açılım Detayı",
    category: "Donatı Detayı",
    image: "",
  },
  {
    title: "Perde Açılım Detayı",
    category: "Donatı Detayı",
    image: "",
  },
  {
    title: "Temel Detay Paftası",
    category: "Uygulama Detayı",
    image: "",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 leading-8 text-stone-400">{description}</p> : null}
    </div>
  );
}

function DrawingPlaceholder({ title }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-yellow-500/20 bg-[#11100e]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-6 top-6 h-24 w-32 border border-yellow-300/40" />
      <div className="absolute bottom-8 right-8 h-28 w-40 border border-white/20" />
      <div className="absolute left-16 top-20 h-20 w-20 border border-yellow-300/25" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16">
        <p className="text-sm font-semibold text-yellow-300">Örnek proje görseli</p>
        <p className="mt-1 font-semibold text-white">{title}</p>
      </div>
    </div>
  );
}

export default function SantYapiWebsiteConcept() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    type: "idle",
    message: "",
  });

  function updateFormField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    const subject = "Sant Yapı Web Sitesi - Yeni İletişim Talebi";
    const body = [
      "Merhaba Sant Yapı,",
      "",
      "Web sitenizdeki iletişim formu üzerinden ulaşıyorum.",
      "",
      `Ad / Firma: ${formData.name}`,
      `Telefon veya E-posta: ${formData.contact}`,
      `Hizmet: ${formData.service || "Belirtilmedi"}`,
      "",
      "Mesaj:",
      formData.message,
    ].join("
");

    const mailtoUrl = `mailto:info@santyapi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setFormStatus({
      type: "success",
      message: "E-posta uygulamanız açıldı. Mesajı göndermek için açılan mail ekranında Gönder'e basın.",
    });
  }

  return (
    <main className="min-h-screen bg-[#080807] text-stone-100">
      <section className="relative overflow-hidden border-b border-yellow-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="absolute left-1/2 top-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-yellow-500/10" />
        <div className="absolute right-[-160px] top-24 h-80 w-80 rotate-45 border border-yellow-400/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-yellow-500/40 bg-yellow-500/10 shadow-lg shadow-yellow-900/20">
                <span className="font-serif text-xl font-bold text-yellow-300">S</span>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[0.20em] text-white">SANT YAPI</p>
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70">Statik Proje Ofisi</p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
              <a href="#hizmetler" className="hover:text-yellow-300">Hizmetler</a>
              <a href="#surec" className="hover:text-yellow-300">Süreç</a>
              <a href="#galeri" className="hover:text-yellow-300">Görseller</a>
              <a href="#iletisim" className="hover:text-yellow-300">İletişim</a>
            </div>

            <a href="#iletisim" className="hidden rounded-full border border-yellow-500/40 px-5 py-2 text-sm font-medium text-yellow-200 transition hover:bg-yellow-500 hover:text-black md:inline-flex">
              Teklif Al
            </a>
          </nav>

          <div className="grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">
                <SparklesIcon className="h-4 w-4" />
                Kalıp, donatı ve uygulama çizimlerinde temiz pafta standardı
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Projeleriniz için net, okunabilir ve sahaya uygun teknik çizimler.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
                Sant Yapı; kalıp planı, kolon-perde-kiriş-döşeme detayları, temel ve merdiven çizimleri gibi uygulama paftalarını hızlı, okunabilir ve kontrollü bir çizim standardıyla hazırlar.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#iletisim" className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black shadow-xl shadow-yellow-900/20 transition hover:bg-yellow-300">
                  Projeni Gönder <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="#hizmetler" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-yellow-400/60 hover:text-yellow-200">
                  Hizmetleri İncele
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-yellow-500/20 bg-[#11100e] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-yellow-300/70">Proje Paketi</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">Teknik Çizim Üretim Akışı</h3>
                    </div>
                    <RulerIcon className="h-9 w-9 text-yellow-300" />
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      ["Kalıp Planı", "Aks, kolon, perde, kiriş ve döşeme çizim düzeni"],
                      ["Donatı Detayları", "Kolon, perde, kiriş, temel, döşeme ve merdiven paftaları"],
                      ["Revizyon Takibi", "Mimari ve saha notlarına göre güncel çizim teslimi"],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex gap-3">
                          <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                          <div>
                            <p className="font-semibold text-white">{title}</p>
                            <p className="mt-1 text-sm leading-6 text-stone-400">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-10 lg:grid-cols-4 lg:px-8">
        {stats.map(([number, label]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-yellow-300">{number}</p>
            <p className="mt-2 text-lg font-semibold text-white">{label}</p>
          </div>
        ))}
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Hizmetler" title="Teknik çizim üretiminde ihtiyacınız olan ana başlıklar." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-500/10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-500/10 text-yellow-300 group-hover:bg-yellow-400 group-hover:text-black">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="surec" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionTitle
            eyebrow="Çalışma Sistemi"
            title="Çizim tesliminde düzenli ve izlenebilir akış."
            description="Her çizim işi; gelen statik doneler, mimari değişiklikler, blok teslim tarihleri ve revizyon notlarıyla birlikte kontrollü şekilde ilerletilir. Amaç, şantiyede rahat okunabilen ve uygulamada kafa karıştırmayan temiz bir çizim paketi teslim etmektir."
          />
          <div className="space-y-4">
            {process.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-yellow-400 font-bold text-black">{index + 1}</div>
                <p className="font-medium text-stone-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionTitle
            eyebrow="Proje Görselleri"
            title="Kalıp, donatı ve uygulama paftalarından seçili çalışmalar."
            description="Gerçek çizim görselleri eklendiğinde bu alan portfolyo gibi çalışır. DWG ekran görüntüsü, PDF pafta çıktısı veya render edilmiş detay görseli kullanılabilir."
          />
          <p className="leading-8 text-stone-400">
            Görselleri eklerken proje adı, pafta tipi ve kısa açıklama ile yayınlamak en temiz yöntem olur. Gizli bilgiler varsa paftadaki blok adı, ada-parsel, mühendis/müşteri isimleri kapatılarak paylaşılır.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectGallery.map((project) => (
            <article key={project.title} className="group rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-3 transition hover:-translate-y-1 hover:border-yellow-400/40">
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-64 w-full rounded-[1.5rem] object-cover" />
              ) : (
                <DrawingPlaceholder title={project.title} />
              )}
              <div className="p-4">
                <p className="text-sm text-yellow-300">{project.category}</p>
                <h3 className="mt-2 font-semibold text-white">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-yellow-400 text-black lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 lg:p-12">
            <CompassIcon className="h-10 w-10" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight">Misyonumuz</h2>
            <p className="mt-5 leading-8 text-black/75">
              Müşterilerin taleplerine hızlı geri dönüş veren, temiz pafta düzeniyle okunabilir, uygulanabilir ve kontrollü teknik çizim paketleri hazırlamak.
            </p>
          </div>
          <div className="border-t border-black/10 bg-black/90 p-8 text-white lg:border-l lg:border-t-0 lg:p-12">
            <WorkflowIcon className="h-10 w-10 text-yellow-300" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight">Vizyonumuz</h2>
            <p className="mt-5 leading-8 text-stone-300">
              Teknik çizim kalitesini, otomasyon gücünü ve düzenli revizyon takibini birleştirerek sektörde güven duyulan bir çizim ofisi standardı oluşturmak.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="border-t border-white/10 bg-[#050504]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="İletişim"
              title="Projenizi birlikte netleştirelim."
              description="Mimari proje, statik doneler veya revizyon notlarınızı iletin; çizim kapsamı, pafta listesi ve teslim planı üzerinden hızlıca değerlendirelim."
            />
            <div className="mt-8 space-y-4 text-stone-300">
              <p className="flex items-center gap-3"><MailIcon className="h-5 w-5 text-yellow-300" /> info@santyapi.com</p>
              <p className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-yellow-300" /> +90 530 905 73 36</p>
              <p className="flex items-center gap-3"><MapPinIcon className="h-5 w-5 text-yellow-300" /> İstanbul / Türkiye</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6" onSubmit={handleContactSubmit}>
            <div className="grid gap-4">
              <input
                aria-label="Adınız / Firma adınız"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-stone-500 focus:border-yellow-400"
                placeholder="Adınız / Firma adınız"
                value={formData.name}
                onChange={(event) => updateFormField("name", event.target.value)}
                required
              />
              <input
                aria-label="Telefon veya e-posta"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-stone-500 focus:border-yellow-400"
                placeholder="Telefon veya e-posta"
                value={formData.contact}
                onChange={(event) => updateFormField("contact", event.target.value)}
                required
              />
              <select
                aria-label="Hizmet seçiniz"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-stone-300 outline-none focus:border-yellow-400"
                value={formData.service}
                onChange={(event) => updateFormField("service", event.target.value)}
              >
                <option value="">Hizmet seçiniz</option>
                <option>Statik proje çizimleri</option>
                <option>Kalıp ve donatı paftaları</option>
                <option>Revizyon / kontrol</option>
                <option>Diğer</option>
              </select>
              <textarea
                aria-label="Projeniz hakkında kısa bilgi"
                className="min-h-36 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-stone-500 focus:border-yellow-400"
                placeholder="Projeniz hakkında kısa bilgi"
                value={formData.message}
                onChange={(event) => updateFormField("message", event.target.value)}
                required
              />
              <button
                type="submit"
                disabled={formStatus.type === "sending"}
                className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Mail Uygulamasını Aç
              </button>
              {formStatus.message ? (
                <p className={formStatus.type === "error" ? "text-sm text-red-300" : "text-sm text-yellow-200"}>
                  {formStatus.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
        <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-stone-500">
          © 2026 Sant Yapı. Tüm hakları saklıdır. santyapi.com
        </footer>
      </section>
    </main>
  );
}

/*
Suggested tests for a normal React/Vitest or Jest setup:

import { render, screen } from "@testing-library/react";
import SantYapiWebsiteConcept from "./SantYapiWebsiteConcept";

test("renders brand name", () => {
  render(<SantYapiWebsiteConcept />);
  expect(screen.getByText(/SANT YAPI/i)).toBeInTheDocument();
});

test("renders main hero heading", () => {
  render(<SantYapiWebsiteConcept />);
  expect(screen.getByText(/Projeleriniz için net, okunabilir ve sahaya uygun teknik çizimler/i)).toBeInTheDocument();
});

test("renders service cards", () => {
  render(<SantYapiWebsiteConcept />);
  expect(screen.getByText(/Statik Proje Çizimleri/i)).toBeInTheDocument();
  expect(screen.getByText(/Kalıp ve Donatı Paftaları/i)).toBeInTheDocument();
  expect(screen.getByText(/Revizyon ve Çizim Takibi/i)).toBeInTheDocument();
});

test("renders gallery section", () => {
  render(<SantYapiWebsiteConcept />);
  expect(screen.getByText(/Proje Görselleri/i)).toBeInTheDocument();
});

test("renders contact form submit button", () => {
  render(<SantYapiWebsiteConcept />);
  expect(screen.getByRole("button", { name: /Mesaj Gönder/i })).toBeInTheDocument();
});
*/
