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
  };
  checker: {
    step1: string;
    step2: string;
    giveTo: string;
    receiveFrom: string;
    supportiveNote: string;
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
  learn: {
    title: string;
    simpleAbo: string;
    simpleRh: string;
    whyMatters: string;
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
    },
    checker: {
      step1: "1. Choose a blood group",
      step2: "2. Here is the result:",
      giveTo: "You can GIVE blood to:",
      receiveFrom: "You can RECEIVE blood from:",
      supportiveNote: "Don't worry, hospitals always double-check everything for safety.",
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
    learn: {
      title: "Learn the Basics",
      simpleAbo: "Your blood type (A, B, AB, or O) is like a unique ID on your cells.",
      simpleRh: "The + or - sign is an extra marker. It helps doctors match you correctly.",
      whyMatters: "Matching correctly keeps your body safe and healthy during a transfusion.",
    },
    more: {
      title: "Settings",
      language: "Change Language / زبان",
      about: "About HemoMatch",
      disclaimer: "Medical Disclaimer",
      share: "Share with Friends",
      eligibility: "Can I Donate?",
      tracker: "Donation Tracker",
      rarity: "Blood Rarity",
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
    },
    checker: {
      step1: "1. بلڈ گروپ منتخب کریں",
      step2: "2. یہ رہا نتیجہ:",
      giveTo: "آپ ان کو خون دے سکتے ہیں:",
      receiveFrom: "آپ ان سے خون لے سکتے ہیں:",
      supportiveNote: "پریشان نہ ہوں، ہسپتال ہمیشہ حفاظت کے لیے ہر چیز کو دوبارہ چیک کرتے ہیں۔",
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
    learn: {
      title: "بنیادی باتیں سیکھیں",
      simpleAbo: "آپ کے خون کی قسم (A، B، AB، یا O) آپ کے خلیوں پر ایک منفرد آئی ڈی کی طرح ہے۔",
      simpleRh: "+ یا - کا نشان ایک اضافی مارکر ہے۔ یہ ڈاکٹروں کو آپ کو صحیح طریقے سے میچ کرنے میں مدد کرتا ہے۔",
      whyMatters: "صحیح طریقے سے میچ کرنا ٹرانسفیوژن کے دوران آپ کے جسم کو محفوظ اور صحت مند رکھتا ہے۔",
    },
    more: {
      title: "ترتیبات",
      language: "زبان تبدیل کریں / Change Language",
      about: "ہیمو میچ کے بارے میں",
      disclaimer: "طبی دستبرداری",
      share: "دوستوں کے ساتھ شیئر کریں",
      eligibility: "کیا میں عطیہ کر سکتا ہوں؟",
      tracker: "عطیہ ٹریکر",
      rarity: "خون کی نایابی",
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
