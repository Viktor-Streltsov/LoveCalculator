export type Lang = "ru" | "en"

export const dictionaries: Record<Lang, any> = {
  ru: {
    common: {
      appName: "Любовная совместимость",
      home: "Главная",
      about: "О приложении",
      back: "Назад",
      start: "Начать",
      heartAlt: "Сердце",
    },
    intro: {
      ariaLabel: "Вступление Love Calculator",
      title: "❤️ Love Calculator",
      subtitle: "Проверь свою совместимость и шансы на отношения",
    },
    home: {
      title: "Любовная совместимость",
      description: "Романтические тесты совместимости — по именам и датам рождения.",
      nameTestTitle: "Тест по именам",
      nameTestSubtitle: "Узнай магию ваших имён",
      dateTestTitle: "Тест по датам рождения",
      dateTestSubtitle: "Судьба по вашим датам",
      aboutTitle: "О приложении",
      aboutSubtitle: "Как работает совместимость и купидон",
    },
    nameTest: {
      title: "Тест по именам",
      subtitle: "Введи ваши имена и посмотри, как сильно купидон за вас.",
      youNameLabel: "Твое имя",
      youNamePlaceholder: "Например, Анна",
      partnerNameLabel: "Имя партнера",
      partnerNamePlaceholder: "Например, Иван",
      submit: "Проверить совместимость",
    },
    dateTest: {
      title: "Тест по датам рождения",
      subtitle: "Выбери даты рождения и смотри, что подскажет судьба.",
      yourBirthDateLabel: "Дата рождения тебя",
      partnerBirthDateLabel: "Дата рождения партнера",
      submit: "Проверить совместимость",
    },
    loading: {
      title: "Считаем любовь...",
      subtitle: "Купидон подсчитывает вашу совместимость, подожди пару секунд.",
    },
    result: {
      title: "Результат совместимости",
      notFound: "Похоже, данные для расчёта не найдены. Попробуй пройти тест ещё раз.",
      message: {
        veryHigh: [
          "Сказочная совместимость — как в романтическом фильме 💫",
          "Идеальная пара — берегите эту магию ✨",
          "Ваши сердца бьются почти в унисон ❤️",
        ],
        high: [
          "Отличная пара — чуть больше внимания друг к другу, и будет 100%",
          "Сильная совместимость, главное — не забывать говорить о чувствах",
          "Между вами явно есть chemistry, поддерживайте её",
        ],
        mid: [
          "Есть потенциал — всё зависит от искренности и заботы",
          "Немного работы над отношениями — и результат удивит вас",
          "Не идеал, но иногда самые крепкие истории рождаются из контрастов",
        ],
        low: [
          "Сложные отношения — но даже звёзды иногда спорят между собой",
          "Похоже, вы очень разные. Главное — честность к себе и друг другу",
          "Низкая совместимость, но выбор всегда за сердцем, а не за цифрами",
        ],
      },
    },
    about: {
      title: "О приложении",
      p1:
        "Love Compatibility — это лёгкое и игровое приложение для проверки совместимости влюблённых пар.",
      p2: "Здесь будут описаны использованные методы расчёта и дисклеймеры.",
    },
  },
  en: {
    common: {
      appName: "Love Compatibility",
      home: "Home",
      about: "About",
      back: "Back",
      start: "Start",
      heartAlt: "Heart",
    },
    intro: {
      ariaLabel: "Love Calculator introduction",
      title: "❤️ Love Calculator",
      subtitle: "Check your compatibility and relationship chances",
    },
    home: {
      title: "Love Compatibility",
      description: "Romantic compatibility tests — by names and birth dates.",
      nameTestTitle: "Name Test",
      nameTestSubtitle: "Discover the magic of your names",
      dateTestTitle: "Birth Date Test",
      dateTestSubtitle: "Fate based on your dates",
      aboutTitle: "About the app",
      aboutSubtitle: "How compatibility and Cupid work",
    },
    nameTest: {
      title: "Name Test",
      subtitle: "Enter your names and see how strongly Cupid feels for you.",
      youNameLabel: "Your name",
      youNamePlaceholder: "For example, Anna",
      partnerNameLabel: "Partner's name",
      partnerNamePlaceholder: "For example, Ivan",
      submit: "Check compatibility",
    },
    dateTest: {
      title: "Birth Date Test",
      subtitle: "Pick birth dates and see what fate has to say.",
      yourBirthDateLabel: "Your birth date",
      partnerBirthDateLabel: "Partner's birth date",
      submit: "Check compatibility",
    },
    loading: {
      title: "Calculating love...",
      subtitle: "Cupid is calculating your compatibility. Please wait a couple of seconds.",
    },
    result: {
      title: "Compatibility Result",
      notFound: "It looks like the calculation data was not found. Please try the test again.",
      message: {
        veryHigh: [
          "Fairytale compatibility — just like a romantic movie 💫",
          "Perfect match — protect this magic ✨",
          "Your hearts beat almost in unison ❤️",
        ],
        high: [
          "Great pair — a bit more attention to each other, and it will be 100%",
          "Strong compatibility — just don't forget to talk about your feelings",
          "There's definitely chemistry between you. Keep it alive",
        ],
        mid: [
          "There's potential — everything depends on sincerity and care",
          "A little work on the relationship — and the result will surprise you",
          "Not perfect, but sometimes the strongest stories are born from contrasts",
        ],
        low: [
          "Tough relationship — but even stars sometimes argue",
          "You seem very different. The main thing is honesty with yourself and each other",
          "Low compatibility, but the choice is always yours — not the numbers",
        ],
      },
    },
    about: {
      title: "About the app",
      p1:
        "Love Compatibility is a light and fun app for checking romantic couples' compatibility.",
      p2: "Here you will find a description of the calculation methods and disclaimers.",
    },
  },
}

