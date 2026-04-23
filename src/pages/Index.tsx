import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/3f778b68-82fd-48e3-86a7-966a72032630/files/cd135b97-c0a5-4b06-be77-676e8decc889.jpg";

const schedule = [
  {
    time: "10:00",
    title: "Добро пожаловать",
    desc: "Знакомство с CEO и историей компании — с чего всё начиналось и куда мы идём",
    icon: "Handshake",
    color: "#FF6B35",
    emoji: "👋",
  },
  {
    time: "10:30",
    title: "Тур по офису и командам",
    desc: "Побываем во всех отделах, познакомимся с коллегами и узнаем, кто чем занимается",
    icon: "Map",
    color: "#A855F7",
    emoji: "🗺️",
  },
  {
    time: "11:30",
    title: "Как мы работаем",
    desc: "Инструменты, процессы и корпоративная культура — всё, что поможет быстро влиться",
    icon: "Lightbulb",
    color: "#06B6D4",
    emoji: "⚙️",
  },
  {
    time: "13:00",
    title: "Обед",
    desc: "Совместный обед за счёт компании — лучшее время для неформального общения",
    icon: "UtensilsCrossed",
    color: "#22C55E",
    emoji: "🍽️",
    highlight: true,
  },
  {
    time: "14:00",
    title: "Практика: настройка инструментов",
    desc: "Настроим рабочее место, доступы и все необходимые сервисы вместе с IT-командой",
    icon: "Laptop",
    color: "#F59E0B",
    emoji: "💻",
  },
  {
    time: "15:00",
    title: "Q&A с основателями",
    desc: "Прямой диалог с основателями — любые вопросы, без фильтров и скриптов",
    icon: "MessageCircle",
    color: "#EC4899",
    emoji: "🎤",
  },
  {
    time: "15:45",
    title: "Подведение итогов и подарки",
    desc: "Планы на первые недели, welcome-kit и фото на память с командой",
    icon: "Gift",
    color: "#6366F1",
    emoji: "🎁",
  },
];

const Index = () => {
  const TOTAL_SPOTS = 30;
  const REGISTERED = 12;

  const [form, setForm] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    food: "no",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen font-golos"
      style={{ background: "#0A0A0F", color: "#F0F0FF" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(10,10,15,0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-montserrat font-black text-sm"
            style={{ background: "linear-gradient(135deg, #FF6B35, #A855F7)" }}
          >
            OD
          </div>
          <span className="font-montserrat font-bold text-white text-sm tracking-wide">
            Onboarding Day
          </span>
        </div>
        <div className="hidden md:flex gap-8">
          {[
            { label: "О мероприятии", id: "about" },
            { label: "Программа", id: "schedule" },
            { label: "Регистрация", id: "register" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium transition-all duration-300"
              style={{ color: "rgba(240,240,255,0.6)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FF6B35")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(240,240,255,0.6)")
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("register")}
          className="font-montserrat font-bold text-xs px-5 py-2.5 rounded-full text-white transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #A855F7)",
          }}
        >
          Зарегистрироваться
        </button>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Onboarding Day"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(168,85,247,0.3) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Animated blobs */}
        <div
          className="absolute"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(255,107,53,0.15)",
              border: "1px solid rgba(255,107,53,0.3)",
              color: "#FF6B35",
              animation: "fadeInDown 0.6s ease both",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#FF6B35",
                animation: "pulse 2s infinite",
              }}
            />
            15 мая 2025 · Главный офис
          </div>

          <h1
            className="font-montserrat font-black leading-none mb-6"
            style={{
              fontSize: "clamp(48px, 8vw, 110px)",
              background:
                "linear-gradient(135deg, #FFFFFF 0%, rgba(255,107,53,0.9) 40%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 0.8s ease 0.2s both",
            }}
          >
            Onboarding
            <br />
            Day
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              color: "rgba(240,240,255,0.7)",
              animation: "fadeInUp 0.8s ease 0.4s both",
            }}
          >
            Добро пожаловать в команду! Этот день создан специально для вас —
            чтобы познакомиться, влиться в ритм и почувствовать себя частью
            чего-то большого.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}
          >
            <button
              onClick={() => scrollTo("register")}
              className="font-montserrat font-bold px-8 py-4 rounded-full text-white text-base transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                boxShadow: "0 0 40px rgba(255,107,53,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(255,107,53,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(255,107,53,0.4)";
              }}
            >
              Зарегистрироваться
            </button>
            <button
              onClick={() => scrollTo("schedule")}
              className="font-montserrat font-bold px-8 py-4 rounded-full text-white text-base transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              Программа дня
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex justify-center gap-12 mt-20"
            style={{ animation: "fadeInUp 0.8s ease 0.8s both" }}
          >
            {[
              { value: "1 день", label: "насыщенной программы" },
              { value: "7+", label: "активностей" },
              { value: "100%", label: "заряд на старт" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div
                  className="font-montserrat font-black text-2xl md:text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(240,240,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animation: "bounce 2s infinite" }}
        >
          <Icon name="ChevronDown" size={24} style={{ color: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#A855F7",
                }}
              >
                О мероприятии
              </div>
              <h2
                className="font-montserrat font-black text-4xl md:text-5xl leading-tight mb-6"
                style={{ color: "#F0F0FF" }}
              >
                Ваш первый
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  день в команде
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "rgba(240,240,255,0.65)" }}
              >
                Onboarding Day — это специально спроектированный день, который
                помогает новым сотрудникам почувствовать себя частью команды с
                первого часа. Мы убрали сухие инструктажи и заменили их живым
                общением, практикой и атмосферой настоящего старта.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(240,240,255,0.65)" }}
              >
                За один день вы познакомитесь с командой, узнаете ценности
                компании, побываете во всех отделах и уйдёте домой с зарядом
                энергии и чёткими планами на первые недели.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: "MapPin", text: "Главный офис, конференц-зал «Орбита»" },
                  { icon: "Calendar", text: "15 мая 2025, 09:00 – 18:00" },
                  { icon: "Users", text: "Для всех новых сотрудников" },
                  { icon: "Gift", text: "Подарки и welcome-kit" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <Icon
                      name={item.icon}
                      size={16}
                      style={{ color: "#FF6B35", flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "rgba(240,240,255,0.7)" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                  filter: "blur(40px)",
                  opacity: 0.3,
                  transform: "scale(0.95)",
                }}
              />
              <img
                src={HERO_IMAGE}
                alt="Команда"
                className="relative rounded-3xl w-full object-cover"
                style={{
                  height: 480,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{
                  background: "rgba(10,10,15,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #FF6B35, #A855F7)" }}
                  >
                    <Icon name="Star" size={22} style={{ color: "#fff" }} />
                  </div>
                  <div>
                    <div
                      className="font-montserrat font-bold text-sm"
                      style={{ color: "#F0F0FF" }}
                    >
                      98% участников
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(240,240,255,0.5)" }}
                    >
                      рекомендуют коллегам
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: "rgba(255,107,53,0.15)",
                border: "1px solid rgba(255,107,53,0.3)",
                color: "#FF6B35",
              }}
            >
              Расписание
            </div>
            <h2
              className="font-montserrat font-black text-4xl md:text-5xl"
              style={{ color: "#F0F0FF" }}
            >
              Программа дня
            </h2>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute hidden md:block"
              style={{
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(to bottom, transparent, #FF6B35 8%, #A855F7 92%, transparent)",
                opacity: 0.4,
              }}
            />

            <div className="space-y-6">
              {schedule.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className="relative flex items-center gap-0 md:gap-0"
                  >
                    {/* LEFT SIDE (desktop) */}
                    <div
                      className={`hidden md:flex flex-1 ${isLeft ? "justify-end pr-10" : "justify-end pr-10 opacity-0 pointer-events-none"}`}
                    >
                      {isLeft && (
                        <div
                          className="max-w-xs w-full p-5 rounded-2xl transition-all duration-300 cursor-default"
                          style={{
                            background: item.highlight
                              ? `linear-gradient(135deg, ${item.color}25, ${item.color}10)`
                              : "rgba(255,255,255,0.04)",
                            border: `1px solid ${item.highlight ? item.color + "50" : "rgba(255,255,255,0.07)"}`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                            e.currentTarget.style.borderColor = item.color + "80";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.borderColor = item.highlight
                              ? item.color + "50"
                              : "rgba(255,255,255,0.07)";
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{item.emoji}</span>
                            <span
                              className="font-montserrat font-black text-base"
                              style={{ color: "#F0F0FF" }}
                            >
                              {item.title}
                            </span>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(240,240,255,0.55)" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CENTER DOT + TIME */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}30, ${item.color}15)`,
                          border: `2px solid ${item.color}`,
                          boxShadow: `0 0 20px ${item.color}40`,
                        }}
                      >
                        <Icon name={item.icon} size={22} style={{ color: item.color }} fallback="Star" />
                      </div>
                      <div
                        className="font-montserrat font-black text-sm mt-2 px-3 py-1 rounded-full"
                        style={{
                          background: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}40`,
                        }}
                      >
                        {item.time}
                      </div>
                    </div>

                    {/* RIGHT SIDE (desktop) */}
                    <div
                      className={`hidden md:flex flex-1 ${!isLeft ? "justify-start pl-10" : "justify-start pl-10 opacity-0 pointer-events-none"}`}
                    >
                      {!isLeft && (
                        <div
                          className="max-w-xs w-full p-5 rounded-2xl transition-all duration-300 cursor-default"
                          style={{
                            background: item.highlight
                              ? `linear-gradient(135deg, ${item.color}25, ${item.color}10)`
                              : "rgba(255,255,255,0.04)",
                            border: `1px solid ${item.highlight ? item.color + "50" : "rgba(255,255,255,0.07)"}`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.02)";
                            e.currentTarget.style.borderColor = item.color + "80";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.borderColor = item.highlight
                              ? item.color + "50"
                              : "rgba(255,255,255,0.07)";
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{item.emoji}</span>
                            <span
                              className="font-montserrat font-black text-base"
                              style={{ color: "#F0F0FF" }}
                            >
                              {item.title}
                            </span>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(240,240,255,0.55)" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* MOBILE layout */}
                    <div
                      className="flex md:hidden gap-4 w-full p-4 rounded-2xl transition-all duration-300"
                      style={{
                        background: item.highlight
                          ? `linear-gradient(135deg, ${item.color}20, ${item.color}08)`
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${item.highlight ? item.color + "40" : "rgba(255,255,255,0.07)"}`,
                      }}
                    >
                      <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${item.color}20`,
                            border: `1.5px solid ${item.color}60`,
                          }}
                        >
                          <Icon name={item.icon} size={18} style={{ color: item.color }} fallback="Star" />
                        </div>
                        <span
                          className="font-montserrat font-black text-xs"
                          style={{ color: item.color }}
                        >
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{item.emoji}</span>
                          <span
                            className="font-montserrat font-bold text-sm"
                            style={{ color: "#F0F0FF" }}
                          >
                            {item.title}
                          </span>
                        </div>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "rgba(240,240,255,0.55)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Что взять с собой */}
          <div
            className="mt-16 p-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(168,85,247,0.1))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎒</span>
              <h3
                className="font-montserrat font-black text-xl"
                style={{ color: "#F0F0FF" }}
              >
                Что взять с собой
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { emoji: "💻", title: "Ноутбук", desc: "Нужен для настройки рабочего места и практической части" },
                { emoji: "🪪", title: "Паспорт", desc: "Потребуется для оформления пропуска в офис" },
                { emoji: "😊", title: "Хорошее настроение", desc: "Самое главное — мы ждём вас с открытым сердцем!" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <div
                      className="font-montserrat font-bold text-sm mb-1"
                      style={{ color: "#F0F0FF" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(240,240,255,0.5)" }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="py-28 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0a2e 0%, #0d1a0a 50%, #1a0d00 100%)",
        }}
      >
        {/* Glow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            top: "-20%",
            right: "-10%",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
            bottom: "-10%",
            left: "-5%",
          }}
        />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: "rgba(168,85,247,0.25)",
                border: "1px solid rgba(168,85,247,0.5)",
                color: "#C084FC",
              }}
            >
              Участие
            </div>
            <h2
              className="font-montserrat font-black text-4xl md:text-5xl mb-4"
              style={{ color: "#F0F0FF" }}
            >
              Зарегистрироваться
            </h2>
            <p style={{ color: "rgba(240,240,255,0.65)" }}>
              Заполните форму — и мы пришлём подтверждение на вашу почту
            </p>

            {/* Counter */}
            <div
              className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="flex gap-1">
                {Array.from({ length: TOTAL_SPOTS }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      background: i < REGISTERED
                        ? "linear-gradient(135deg, #FF6B35, #A855F7)"
                        : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
              <span className="font-montserrat font-bold text-sm" style={{ color: "#F0F0FF" }}>
                Уже зарегистрировалось:{" "}
                <span style={{
                  background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {REGISTERED} из {TOTAL_SPOTS} мест
                </span>
              </span>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 80px rgba(168,85,247,0.15), 0 0 40px rgba(255,107,53,0.1)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                    boxShadow: "0 0 60px rgba(255,107,53,0.4)",
                  }}
                >
                  <span className="text-4xl">🎉</span>
                </div>
                <h3
                  className="font-montserrat font-black text-2xl md:text-3xl mb-4"
                  style={{ color: "#F0F0FF" }}
                >
                  Отлично!
                </h3>
                <p className="text-lg mb-2" style={{ color: "rgba(240,240,255,0.85)" }}>
                  Ждём тебя <strong style={{ color: "#FF6B35" }}>15 мая</strong>.
                </p>
                <p style={{ color: "rgba(240,240,255,0.55)" }}>
                  Письмо с подтверждением придёт на корпоративную почту.
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    color: "#86EFAC",
                  }}
                >
                  <Icon name="CheckCircle" size={16} style={{ color: "#86EFAC" }} />
                  Место {REGISTERED + 1} из {TOTAL_SPOTS} — твоё!
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "rgba(240,240,255,0.8)" }}
                    >
                      Имя и фамилия *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0F0FF",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#FF6B35")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "rgba(240,240,255,0.8)" }}
                    >
                      Должность *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Product Manager"
                      value={form.position}
                      onChange={(e) =>
                        setForm({ ...form, position: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0F0FF",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#FF6B35")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "rgba(240,240,255,0.8)" }}
                  >
                    Отдел *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Маркетинг, Разработка, HR..."
                    value={form.department}
                    onChange={(e) =>
                      setForm({ ...form, department: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F0F0FF",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#FF6B35")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "rgba(240,240,255,0.8)" }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="ivan@company.ru"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0F0FF",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#FF6B35")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "rgba(240,240,255,0.8)" }}
                    >
                      Телефон
                    </label>
                    <input
                      type="tel"
                      placeholder="+7 999 000-00-00"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#F0F0FF",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#FF6B35")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-3"
                    style={{ color: "rgba(240,240,255,0.8)" }}
                  >
                    Пожелания к питанию
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { value: "no", label: "🍽️ Нет", },
                      { value: "veg", label: "🥗 Вегетарианское" },
                      { value: "halal", label: "☪️ Халяль" },
                      { value: "gluten", label: "🌾 Без глютена" },
                      { value: "other", label: "✏️ Другое" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setForm({ ...form, food: opt.value })}
                        className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left"
                        style={{
                          background: form.food === opt.value
                            ? "linear-gradient(135deg, rgba(255,107,53,0.25), rgba(168,85,247,0.25))"
                            : "rgba(255,255,255,0.05)",
                          border: form.food === opt.value
                            ? "1.5px solid rgba(255,107,53,0.6)"
                            : "1.5px solid rgba(255,255,255,0.08)",
                          color: form.food === opt.value ? "#F0F0FF" : "rgba(240,240,255,0.55)",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "rgba(240,240,255,0.8)" }}
                  >
                    Комментарий или вопрос
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Есть особые пожелания или вопросы?"
                    value={form.comment}
                    onChange={(e) =>
                      setForm({ ...form, comment: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F0F0FF",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#FF6B35")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-montserrat font-black py-5 rounded-2xl text-white text-lg transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35 0%, #A855F7 100%)",
                    boxShadow: "0 0 60px rgba(255,107,53,0.4), 0 4px 20px rgba(0,0,0,0.3)",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 60px rgba(255,107,53,0.6), 0 4px 20px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0 60px rgba(255,107,53,0.4), 0 4px 20px rgba(0,0,0,0.3)";
                  }}
                >
                  <Icon name="Rocket" size={20} style={{ color: "#fff" }} />
                  Подтвердить участие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-14 px-6"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Organizer */}
          <div
            className="flex items-center gap-4 p-5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-montserrat font-black text-white text-lg"
              style={{ background: "linear-gradient(135deg, #FF6B35, #A855F7)" }}
            >
              АП
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "rgba(240,240,255,0.4)" }}>
                Организатор
              </div>
              <div className="font-montserrat font-bold text-sm" style={{ color: "#F0F0FF" }}>
                Анна Петрова
              </div>
              <div className="flex flex-wrap gap-3 mt-1.5">
                <a
                  href="mailto:hr@company.ru"
                  className="flex items-center gap-1.5 text-xs transition-all duration-200"
                  style={{ color: "#FF6B35" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Icon name="Mail" size={12} style={{ color: "#FF6B35" }} />
                  hr@company.ru
                </a>
                <a
                  href="https://t.me/anna_hr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-all duration-200"
                  style={{ color: "#A855F7" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Icon name="Send" size={12} style={{ color: "#A855F7" }} />
                  @anna_hr
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-center" style={{ color: "rgba(240,240,255,0.25)" }}>
            © 2025 Onboarding Day
            <br />
            Всё для вашего успешного старта
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(240,240,255,0.25);
        }
      `}</style>
    </div>
  );
};

export default Index;