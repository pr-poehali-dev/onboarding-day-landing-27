import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/3f778b68-82fd-48e3-86a7-966a72032630/files/cd135b97-c0a5-4b06-be77-676e8decc889.jpg";

const schedule = [
  {
    time: "09:00",
    title: "Сбор и приветственный кофе",
    desc: "Знакомство с командой, горячие напитки и неформальное общение",
    icon: "Coffee",
    color: "#FF6B35",
  },
  {
    time: "10:00",
    title: "Приветственное слово CEO",
    desc: "История компании, миссия, ценности и большие цели на горизонте",
    icon: "Mic",
    color: "#A855F7",
  },
  {
    time: "11:30",
    title: "Экскурсия по офису",
    desc: "Знакомство с пространством, отделами и ключевыми коллегами",
    icon: "Map",
    color: "#06B6D4",
  },
  {
    time: "13:00",
    title: "Совместный обед",
    desc: "Обед всей командой — лучшее время для неформального знакомства",
    icon: "UtensilsCrossed",
    color: "#22C55E",
  },
  {
    time: "14:30",
    title: "Воркшоп по корпоративной культуре",
    desc: "Интерактивное занятие: ценности, правила и способы работы вместе",
    icon: "Users",
    color: "#F59E0B",
  },
  {
    time: "16:00",
    title: "Q&A с руководителями",
    desc: "Прямой диалог с лидерами команд — любые вопросы приветствуются",
    icon: "MessageCircle",
    color: "#EC4899",
  },
  {
    time: "17:30",
    title: "Завершение и фото на память",
    desc: "Групповое фото, подарки от компании и планы на первые недели",
    icon: "Camera",
    color: "#6366F1",
  },
];

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
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

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,107,53,0.4) 10%, rgba(168,85,247,0.4) 90%, transparent)",
              }}
            />

            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 md:gap-10 p-5 md:p-6 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Dot for timeline */}
                  <div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden md:block"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}`,
                    }}
                  />

                  {/* Time */}
                  <div
                    className="font-montserrat font-bold text-sm md:text-base flex-shrink-0 w-14 md:w-16 pt-1"
                    style={{ color: item.color }}
                  >
                    {item.time}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}20` }}
                  >
                    <Icon
                      name={item.icon}
                      size={18}
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className="font-montserrat font-bold text-base md:text-lg mb-1"
                      style={{ color: "#F0F0FF" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(240,240,255,0.55)" }}
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
      <section id="register" className="py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#A855F7",
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
            <p style={{ color: "rgba(240,240,255,0.6)" }}>
              Заполните форму — и мы пришлём подтверждение на вашу почту
            </p>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                  }}
                >
                  <Icon name="Check" size={36} style={{ color: "#fff" }} />
                </div>
                <h3
                  className="font-montserrat font-black text-2xl mb-3"
                  style={{ color: "#F0F0FF" }}
                >
                  Вы зарегистрированы!
                </h3>
                <p style={{ color: "rgba(240,240,255,0.6)" }}>
                  Ждём вас 15 мая. Детали придут на указанную почту.
                </p>
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
                  className="w-full font-montserrat font-bold py-4 rounded-xl text-white text-base transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                    boxShadow: "0 0 40px rgba(255,107,53,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 40px rgba(255,107,53,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0 40px rgba(255,107,53,0.3)";
                  }}
                >
                  Подтвердить участие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6 text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "rgba(240,240,255,0.35)",
        }}
      >
        <p className="text-sm">
          © 2025 Onboarding Day · Всё для вашего успешного старта
        </p>
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
