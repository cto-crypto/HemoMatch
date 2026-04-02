export type Language = 'en' | 'ur';

export interface Translation {
  tabs: {
    home: string;
    checker: string;
    chart: string;
    learn: string;
    more: string;
  };
  home: {
    welcome: string;
    subtitle: string;
    cta: string;
    quickSelect: string;
    universalDonor: string;
    universalRecipient: string;
    impactTitle: string;
    impactSubtitle: string;
    impactCounter: string;
    didYouKnow: string;
    factText: string;
    learnMore: string;
    statsTitle: string;
    statsSubtitle: string;
    verified: string;
    bloodGuide: string;
    tapToExplore: string;
  };
  checker: {
    step1: string;
    step2: string;
    giveTo: string;
    receiveFrom: string;
    supportiveNote: string;
    pickBloodType: string;
    liveCompatibilityMap: string;
    groupsCount: string;
    whyDonate: string;
    whyReceive: string;
    expertInsight: string;
    selectGroup: string;
    discoverSecrets: string;
  };
  memory: {
    title: string;
    trick: string;
    rules: { title: string; desc: string }[];
  };
  myths: {
    title: string;
    items: { myth: string; reality: string }[];
  };
  stats: {
    title: string;
    shortageAlert: string;
    shortageCritical: string;
    shortageStable: string;
    shortageLow: string;
    shortageSimulated: string;
    globalDistribution: string;
    percentByType: string;
    regionalComparison: string;
    aboByRegion: string;
    donorRecip: string;
    rowsDonorColsRecip: string;
    donorRecipHeader: string;
    matrixLegend: string;
    growthTrends: string;
    growthTrendsDesc: string;
    sourceWho: string;
  };
  learn: {
    title: string;
    interactiveGuide: string;
    basicsTab: string;
    mythsTab: string;
    quizTab: string;
    aboSystem: string;
    rhFactor: string;
    whyMatters: string;
    simpleAbo: string;
    simpleRh: string;
    commonMyth: string;
    medicalReality: string;
    testKnowledge: string;
    quizDesc: string;
    startQuiz: string;
    randomQuestions: string;
  };
  more: {
    title: string;
    language: string;
    about: string;
    disclaimer: string;
    share: string;
    eligibility: string;
    tracker: string;
    rarity: string;
    settingsResources: string;
    trackEligibility: string;
    digitalId: string;
    checkEligibility: string;
    resources: string;
    appDescription: string;
    version: string;
  };
  chart: {
    title: string;
    subtitle: string;
    howTo: string;
    step1: string;
    step2: string;
  };
  tracker: {
    title: string;
    subtitle: string;
    label: string;
    nextDate: string;
    note: string;
    empty: string;
  };
  rarity: {
    title: string;
    subtitle: string;
  };
  card: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      bloodGroup: string;
      age: string;
      phone: string;
      location: string;
      emergencyName: string;
      emergencyPhone: string;
      medicalNote: string;
      generate: string;
      reset: string;
    };
    preview: {
      title: string;
      download: string;
      share: string;
      edit: string;
    };
    idLabel: string;
    emergencyContact: string;
    validID: string;
    personalizeId: string;
    fillDetails: string;
    yourName: string;
    tapToReveal: string;
    canGiveTo: string;
    canReceiveFrom: string;
    tapToClose: string;
    hemoMatchId: string;
    placeholders: {
      name: string;
      age: string;
      phone: string;
      location: string;
      emergencyName: string;
      emergencyPhone: string;
      medicalNote: string;
    };
  };
  disclaimer: {
    title: string;
    text: string;
  };
  eligibility: {
    title: string;
    subtitle: string;
    questions: string[];
    resultReady: string;
    resultNotReady: string;
  };
  components: {
    title: string;
    items: { name: string; desc: string; percent: string }[];
  };
}

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    tabs: {
      home: "Home",
      checker: "Checker",
      chart: "Chart",
      learn: "Learn",
      more: "More",
    },
    home: {
      welcome: "Hi! Let's check blood compatibility.",
      subtitle: "It's actually simpler than you think. Let's break it down together.",
      cta: "Start Checking",
      quickSelect: "Or pick a group below:",
      universalDonor: "Universal Donor",
      universalRecipient: "Universal Receiver",
      impactTitle: "Community Impact",
      impactSubtitle: "Tap the drop to simulate a donation",
      impactCounter: "Simulated Lives Saved",
      didYouKnow: "Did you know?",
      factText: "Blood is actually living tissue. It carries oxygen, nutrients, and helps fight infections.",
      learnMore: "Learn more about blood groups",
      statsTitle: "Global Statistics",
      statsSubtitle: "Explore blood type distribution worldwide",
      verified: "Verified Medical Info",
      bloodGuide: "Blood Guide",
      tapToExplore: "Tap to explore",
    },
    checker: {
      step1: "1. Choose a blood group",
      step2: "2. View Compatibility",
      giveTo: "Can Donate To",
      receiveFrom: "Can Receive From",
      supportiveNote: "Always consult with a medical professional for actual blood transfusions. This tool is for educational guidance.",
      pickBloodType: "Pick a blood type to see compatibility",
      liveCompatibilityMap: "Live Compatibility Map",
      groupsCount: "Groups",
      whyDonate: "can donate to these groups because they share compatible antigens.",
      whyReceive: "can safely receive blood from these donors without an immune reaction.",
      expertInsight: "Expert Insight",
      selectGroup: "Select a blood group",
      discoverSecrets: "Discover compatibility secrets",
    },
    memory: {
      title: "Quick Memory Trick",
      trick: "Remember these two simple rules:",
      rules: [
        { title: "O gives to all", desc: "O Negative is the universal donor." },
        { title: "AB receives from all", desc: "AB Positive is the universal receiver." },
      ],
    },
    myths: {
      title: "Myth vs Reality",
      items: [
        { myth: "Everyone can donate to everyone", reality: "Only certain groups match safely." },
        { myth: "Same blood type is always needed", reality: "Some types can receive from many others." },
        { myth: "O+ is the universal donor", reality: "Actually, only O- is the universal donor." },
      ],
    },
    stats: {
      title: "Global Statistics",
      shortageAlert: "Live Shortage Alert",
      shortageCritical: "Critical",
      shortageStable: "Stable",
      shortageLow: "Low",
      shortageSimulated: "Simulated real-time data for educational purposes.",
      globalDistribution: "Global Distribution",
      percentByType: "Percentage by Blood Type",
      regionalComparison: "Regional Comparison",
      aboByRegion: "ABO Distribution by Region",
      donorRecip: "Donor / Recipient",
      rowsDonorColsRecip: "Compatibility Matrix",
      donorRecipHeader: "Donor / Recip",
      matrixLegend: "Rows: Donor | Columns: Recipient",
      growthTrends: "Growth Trends",
      growthTrendsDesc: "Blood group distribution changes slowly over generations due to migration and genetic factors. Type O remains the most resilient and widespread globally.",
      sourceWho: "Source: World Health Organization",
    },
    learn: {
      title: "Learn the Basics",
      interactiveGuide: "Interactive guide to blood groups",
      basicsTab: "Basics",
      mythsTab: "Myths",
      quizTab: "Quiz",
      aboSystem: "ABO System",
      rhFactor: "Rh Factor",
      whyMatters: "Why it Matters",
      simpleAbo: "Your blood type (A, B, AB, or O) is like a unique ID on your cells.",
      simpleRh: "The + or - sign is an extra marker. It helps doctors match you correctly.",
      commonMyth: "Common Myth",
      medicalReality: "Medical Reality",
      testKnowledge: "Test Your Knowledge",
      quizDesc: "Ready to see how much you've learned about blood groups? Take our interactive quiz.",
      startQuiz: "Start Quiz",
      randomQuestions: "10 Random Questions per Session",
    },
    more: {
      title: "Settings",
      language: "Language",
      about: "About HemoMatch",
      disclaimer: "Medical Disclaimer",
      share: "Share App",
      eligibility: "Eligibility Check",
      tracker: "Donation Tracker",
      rarity: "Blood Rarity",
      settingsResources: "App settings and resources",
      trackEligibility: "Track your eligibility",
      digitalId: "Digital emergency ID",
      checkEligibility: "Check if you can donate",
      resources: "Resources",
      appDescription: "HemoMatch is a premium medical utility designed to simplify blood group compatibility and provide emergency identification tools.",
      version: "HemoMatch v1.0",
    },
    tracker: {
      title: "Donation Tracker",
      subtitle: "Track your donations and know exactly when you can save lives again.",
      label: "Last Donation Date",
      nextDate: "Next Eligible Date",
      note: "Standard 3-month recovery period.",
      empty: "Select the date of your last donation to calculate your next window.",
    },
    rarity: {
      title: "Blood Rarity",
      subtitle: "Blood type rarity varies by population, but here are the approximate global averages.",
    },
    card: {
      title: "Digital Blood ID",
      subtitle: "Create your emergency medical card",
      idLabel: "BLOOD ID CARD",
      validID: "VERIFIED MEDICAL DATA",
      emergencyContact: "EMERGENCY CONTACT",
      personalizeId: "Personalize Your ID",
      fillDetails: "Fill in your details to update the card live",
      yourName: "Your Name",
      tapToReveal: "Tap to reveal",
      canGiveTo: "Can Give To",
      canReceiveFrom: "Can Receive From",
      tapToClose: "Tap anywhere to close",
      hemoMatchId: "HemoMatch Medical ID",
      placeholders: {
        name: "John Doe",
        age: "25",
        phone: "+1 234 567 890",
        location: "New York, USA",
        emergencyName: "Jane Doe",
        emergencyPhone: "+1 987 654 321",
        medicalNote: "Any allergies or medical conditions...",
      },
      form: {
        name: "Full Name",
        bloodGroup: "Blood Group",
        age: "Age",
        phone: "Phone Number",
        location: "City / Location",
        emergencyName: "Emergency Contact Name",
        emergencyPhone: "Emergency Contact Number",
        medicalNote: "Medical Note (Optional)",
        generate: "Generate Card",
        reset: "Reset Form"
      },
      preview: {
        title: "Your Digital ID",
        download: "Download Card",
        share: "Share Card",
        edit: "Edit Details"
      }
    },
    chart: {
      title: "Compatibility Matrix",
      subtitle: "A definitive guide to how different blood groups interact safely.",
      howTo: "How to read this chart?",
      step1: "Find your blood group in the GIVE ↓ column to see who you can donate to.",
      step2: "Look at the TOP ROW to see who you can receive blood from.",
    },
    disclaimer: {
      title: "Just a Guide",
      text: "This is for learning. Real medical decisions are always made by doctors in a hospital.",
    },
    eligibility: {
      title: "Donation Check",
      subtitle: "See if you're ready to save lives today.",
      questions: [
        "Are you between 18 and 65 years old?",
        "Do you weigh more than 50kg (110lbs)?",
        "Are you feeling healthy and well today?",
        "Have you waited 3 months since your last donation?",
      ],
      resultReady: "You might be eligible! Visit a local blood center to confirm.",
      resultNotReady: "You may need to wait or consult a doctor first.",
    },
    components: {
      title: "What's in your Blood?",
      items: [
        { name: "Red Cells", desc: "Carry oxygen to your body.", percent: "45%" },
        { name: "Plasma", desc: "The liquid that carries everything.", percent: "55%" },
        { name: "Platelets", desc: "Help stop bleeding (clotting).", percent: "<1%" },
        { name: "White Cells", desc: "Fight infections and germs.", percent: "<1%" },
      ],
    },
  },
  ur: {
    tabs: {
      home: "ہوم",
      checker: "چیکر",
      chart: "چارٹ",
      learn: "سیکھیں",
      more: "مزید",
    },
    home: {
      welcome: "ہیلو! آئیے خون کی مطابقت چیک کریں۔",
      subtitle: "یہ آپ کے خیال سے کہیں زیادہ آسان ہے۔ آئیے اسے مل کر سمجھتے ہیں۔",
      cta: "چیک کرنا شروع کریں",
      quickSelect: "یا نیچے سے ایک گروپ منتخب کریں:",
      universalDonor: "یونیورسل ڈونر",
      universalRecipient: "یونیورسل وصول کنندہ",
      impactTitle: "کمیونٹی پر اثر",
      impactSubtitle: "عطیہ کی نقل کرنے کے لیے قطرے پر ٹیپ کریں",
      impactCounter: "بچائی گئی فرضی زندگیاں",
      didYouKnow: "کیا آپ جانتے ہیں؟",
      factText: "خون دراصل زندہ ٹشو ہے۔ یہ آکسیجن اور غذائی اجزاء لے جاتا ہے اور انفیکشن سے لڑنے میں مدد کرتا ہے۔",
      learnMore: "بلڈ گروپس کے بارے میں مزید جانیں",
      statsTitle: "عالمی اعداد و شمار",
      statsSubtitle: "دنیا بھر میں خون کی اقسام کی تقسیم دیکھیں",
      verified: "تصدیق شدہ طبی معلومات",
      bloodGuide: "بلڈ گائیڈ",
      tapToExplore: "دریافت کرنے کے لیے ٹیپ کریں",
    },
    checker: {
      step1: "1. بلڈ گروپ منتخب کریں",
      step2: "2. مطابقت دیکھیں",
      giveTo: "عطیہ دے سکتے ہیں",
      receiveFrom: "وصول کر سکتے ہیں",
      supportiveNote: "اصل خون کی منتقلی کے لیے ہمیشہ طبی پیشہ ور سے مشورہ کریں۔ یہ ٹول تعلیمی رہنمائی کے لیے ہے۔",
      pickBloodType: "مطابقت دیکھنے کے لیے بلڈ ٹائپ منتخب کریں",
      liveCompatibilityMap: "لائیو مطابقت کا نقشہ",
      groupsCount: "گروپس",
      whyDonate: "ان گروپس کو خون دے سکتے ہیں کیونکہ ان کے اینٹیجنز مطابقت رکھتے ہیں۔",
      whyReceive: "بغیر کسی مدافعتی ردعمل کے ان عطیہ دہندگان سے محفوظ طریقے سے خون حاصل کر سکتے ہیں۔",
      expertInsight: "ماہرانہ بصیرت",
      selectGroup: "بلڈ گروپ منتخب کریں",
      discoverSecrets: "مطابقت کے راز دریافت کریں",
    },
    memory: {
      title: "یاد رکھنے کا آسان طریقہ",
      trick: "بس یہ دو اصول یاد رکھیں:",
      rules: [
        { title: "O سب کو دیتا ہے", desc: "O نیگیٹو سب کو خون دے سکتا ہے۔" },
        { title: "AB سب سے لیتا ہے", desc: "AB پازیٹو سب سے خون لے سکتا ہے۔" },
      ],
    },
    myths: {
      title: "غلط فہمی بمقابلہ حقیقت",
      items: [
        { myth: "ہر کوئی ہر کسی کو عطیہ کر سکتا ہے", reality: "صرف مخصوص گروپس ہی محفوظ طریقے سے میچ کرتے ہیں۔" },
        { myth: "ہمیشہ ایک ہی بلڈ ٹائپ کی ضرورت ہوتی ہے", reality: "کچھ اقسام بہت سے دوسرے لوگوں سے وصول کر سکتی ہیں۔" },
        { myth: "O+ یونیورسل ڈونر ہے", reality: "دراصل، صرف O- ہی یونیورسل ڈونر ہے۔" },
      ],
    },
    stats: {
      title: "عالمی اعداد و شمار",
      shortageAlert: "خون کی کمی کا الرٹ",
      shortageCritical: "انتہائی اہم",
      shortageStable: "مستحکم",
      shortageLow: "کم",
      shortageSimulated: "تعلیمی مقاصد کے لیے فرضی ڈیٹا۔",
      globalDistribution: "عالمی تقسیم",
      percentByType: "بلڈ ٹائپ کے لحاظ سے فیصد",
      regionalComparison: "علاقائی موازنہ",
      aboByRegion: "علاقے کے لحاظ سے ABO تقسیم",
      donorRecip: "عطیہ دہندہ / وصول کنندہ",
      rowsDonorColsRecip: "مطابقت کا میٹرکس",
      donorRecipHeader: "عطیہ دہندہ / وصول کنندہ",
      matrixLegend: "قطاریں: عطیہ دہندہ | کالم: وصول کنندہ",
      growthTrends: "ترقی کے رجحانات",
      growthTrendsDesc: "ہجرت اور جینیاتی عوامل کی وجہ سے خون کے گروپ کی تقسیم نسلوں میں آہستہ آہستہ بدلتی ہے۔ ٹائپ O عالمی سطح پر سب سے زیادہ پھیلا ہوا ہے۔",
      sourceWho: "ماخذ: عالمی ادارہ صحت",
    },
    learn: {
      title: "بنیادی باتیں سیکھیں",
      interactiveGuide: "بلڈ گروپس کے لیے انٹرایکٹو گائیڈ",
      basicsTab: "بنیادی باتیں",
      mythsTab: "غلط فہمیاں",
      quizTab: "کوئز",
      aboSystem: "ABO سسٹم",
      rhFactor: "Rh فیکٹر",
      whyMatters: "یہ کیوں ضروری ہے",
      simpleAbo: "آپ کے خون کی قسم (A، B، AB، یا O) آپ کے خلیوں پر ایک منفرد آئی ڈی کی طرح ہے۔",
      simpleRh: "+ یا - کا نشان ایک اضافی مارکر ہے۔ یہ ڈاکٹروں کو آپ کو صحیح طریقے سے میچ کرنے میں مدد کرتا ہے۔",
      commonMyth: "عام غلط فہمی",
      medicalReality: "طبی حقیقت",
      testKnowledge: "اپنے علم کی جانچ کریں",
      quizDesc: "دیکھنا چاہتے ہیں کہ آپ نے بلڈ گروپس کے بارے میں کتنا سیکھا ہے؟ ہمارا کوئز لیں۔",
      startQuiz: "کوئز شروع کریں",
      randomQuestions: "فی سیشن 10 بے ترتیب سوالات",
    },
    more: {
      title: "ترتیبات",
      language: "زبان",
      about: "ہیمو میچ کے بارے میں",
      disclaimer: "طبی دستبرداری",
      share: "ایپ شیئر کریں",
      eligibility: "اہلیت کی جانچ",
      tracker: "عطیہ ٹریکر",
      rarity: "خون کی نایابی",
      settingsResources: "ایپ کی ترتیبات اور وسائل",
      trackEligibility: "اپنی اہلیت کو ٹریک کریں",
      digitalId: "ڈیجیٹل ایمرجنسی آئی ڈی",
      checkEligibility: "چیک کریں کہ کیا آپ عطیہ کر سکتے ہیں",
      resources: "وسائل",
      appDescription: "ہیمو میچ ایک پریمیم میڈیکل یوٹیلیٹی ہے جو بلڈ گروپ کی مطابقت کو آسان بنانے اور ہنگامی شناختی ٹولز فراہم کرنے کے لیے بنائی گئی ہے۔",
      version: "ہیمو میچ v1.0",
    },
    tracker: {
      title: "عطیہ ٹریکر",
      subtitle: "اپنے عطیات کو ٹریک کریں اور جانیں کہ آپ دوبارہ کب جانیں بچا سکتے ہیں۔",
      label: "آخری عطیہ کی تاریخ",
      nextDate: "اگلی اہل تاریخ",
      note: "معیاری 3 ماہ کی ریکوری کی مدت۔",
      empty: "اپنی اگلی ونڈو کا حساب لگانے کے لیے اپنے آخری عطیہ کی تاریخ منتخب کریں۔",
    },
    rarity: {
      title: "خون کی نایابی",
      subtitle: "خون کی قسم کی نایابی آبادی کے لحاظ سے مختلف ہوتی ہے، لیکن یہاں عالمی اوسط دی گئی ہیں۔",
    },
    card: {
      title: "بلڈ گروپ آئی ڈی",
      subtitle: "اپنا ہنگامی طبی کارڈ بنائیں",
      idLabel: "بلڈ آئی ڈی کارڈ",
      validID: "تصدیق شدہ طبی ڈیٹا",
      emergencyContact: "ہنگامی رابطہ",
      personalizeId: "اپنی آئی ڈی کو ذاتی بنائیں",
      fillDetails: "کارڈ کو لائیو اپ ڈیٹ کرنے کے لیے اپنی تفصیلات درج کریں",
      yourName: "آپ کا نام",
      tapToReveal: "دیکھنے کے لیے ٹیپ کریں",
      canGiveTo: "عطیہ دے سکتے ہیں",
      canReceiveFrom: "وصول کر سکتے ہیں",
      tapToClose: "بند کرنے کے لیے کہیں بھی ٹیپ کریں",
      hemoMatchId: "ہیمو میچ میڈیکل آئی ڈی",
      placeholders: {
        name: "علی خان",
        age: "25",
        phone: "+92 300 1234567",
        location: "لاہور، پاکستان",
        emergencyName: "احمد خان",
        emergencyPhone: "+92 300 7654321",
        medicalNote: "کوئی الرجی یا طبی حالات...",
      },
      form: {
        name: "پورا نام",
        bloodGroup: "بلڈ گروپ",
        age: "عمر",
        phone: "فون نمبر",
        location: "شہر / مقام",
        emergencyName: "ہنگامی رابطہ کا نام",
        emergencyPhone: "ہنگامی رابطہ کا نمبر",
        medicalNote: "طبی نوٹ (اختیاری)",
        generate: "کارڈ بنائیں",
        reset: "فارم ری سیٹ کریں"
      },
      preview: {
        title: "آپ کی ڈیجیٹل آئی ڈی",
        download: "کارڈ ڈاؤن لوڈ کریں",
        share: "کارڈ شیئر کریں",
        edit: "تبدیلی کریں"
      }
    },
    chart: {
      title: "مطابقت کا چارٹ",
      subtitle: "خون کے مختلف گروپس کے محفوظ طریقے سے ملنے کا حتمی گائیڈ۔",
      howTo: "اس چارٹ کو کیسے پڑھیں؟",
      step1: "یہ دیکھنے کے لیے کہ آپ کس کو عطیہ کر سکتے ہیں، GIVE ↓ کالم میں اپنا بلڈ گروپ تلاش کریں۔",
      step2: "یہ دیکھنے کے لیے کہ آپ کس سے خون وصول کر سکتے ہیں، اوپر والی قطار کو دیکھیں۔",
    },
    disclaimer: {
      title: "صرف ایک گائیڈ",
      text: "یہ سیکھنے کے لیے ہے۔ حقیقی طبی فیصلے ہمیشہ ہسپتال میں ڈاکٹروں کے ذریعے کیے جاتے ہیں۔",
    },
    eligibility: {
      title: "عطیہ کی جانچ",
      subtitle: "دیکھیں کہ کیا آپ آج جانیں بچانے کے لیے تیار ہیں۔",
      questions: [
        "کیا آپ کی عمر 18 سے 65 سال کے درمیان ہے؟",
        "کیا آپ کا وزن 50 کلوگرام سے زیادہ ہے؟",
        "کیا آپ آج صحت مند محسوس کر رہے ہیں؟",
        "کیا آپ نے اپنے آخری عطیہ کے بعد 3 ماہ انتظار کیا ہے؟",
      ],
      resultReady: "آپ اہل ہو سکتے ہیں! تصدیق کے لیے مقامی بلڈ سینٹر جائیں۔",
      resultNotReady: "آپ کو انتظار کرنے یا پہلے ڈاکٹر سے مشورہ کرنے کی ضرورت پڑ سکتی ہے۔",
    },
    components: {
      title: "آپ کے خون میں کیا ہے؟",
      items: [
        { name: "سرخ خلیات", desc: "آپ کے جسم تک آکسیجن پہنچاتے ہیں۔", percent: "45%" },
        { name: "پلازما", desc: "وہ مائع جو ہر چیز کو لے جاتا ہے۔", percent: "55%" },
        { name: "پلیٹلیٹس", desc: "خون بہنے کو روکنے میں مدد کرتے ہیں۔", percent: "<1%" },
        { name: "سفید خلیات", desc: "انفیکشن اور جراثیم سے لڑتے ہیں۔", percent: "<1%" },
      ],
    },
  },
};
