interface Category {
  hint: {
    en: string;
    ar: string;
  };
  words: {
    en: string[];
    ar: string[];
  };
}

interface WordWithHint {
  word: string;
  hint: string;
}

const categories: Category[] = [
  {
    hint: { en: "It's a fruit", ar: "إنها فاكهة" },
    words: {
      en: [
        "Apple", "Banana", "Orange", "Strawberry", "Watermelon", "Grapes",
        "Pineapple", "Mango", "Peach", "Cherry", "Lemon", "Coconut",
        "Avocado", "Pomegranate", "Kiwi",
      ],
      ar: [
        "تفاحة", "موزة", "برتقالة", "فراولة", "بطيخ", "عنب", "أناناس",
        "مانجو", "خوخ", "كرز", "ليمون", "جوز هند", "أفوكادو", "رمان",
        "كيوي", "تين", "تمر", "مشمش", "توت", "جوافة",
      ],
    },
  },
  {
    hint: { en: "It's a vegetable", ar: "إنها خضار" },
    words: {
      en: [
        "Carrot", "Potato", "Tomato", "Onion", "Cucumber", "Broccoli",
        "Lettuce", "Corn", "Pepper", "Garlic",
      ],
      ar: [
        "جزر", "بطاطا", "طماطم", "بصل", "خيار", "بروكلي", "خس", "ذرة",
        "فلفل", "ثوم", "باذنجان", "كوسة", "فجل", "ملفوف", "سبانخ",
      ],
    },
  },
  {
    hint: { en: "It's an animal", ar: "إنه حيوان" },
    words: {
      en: [
        "Penguin", "Elephant", "Dolphin", "Butterfly", "Scorpion", "Lion",
        "Tiger", "Bear", "Wolf", "Fox", "Eagle", "Owl", "Shark", "Whale",
        "Octopus", "Crocodile", "Snake", "Monkey", "Giraffe", "Zebra",
        "Kangaroo", "Koala", "Panda", "Camel", "Horse", "Cow", "Sheep",
        "Chicken", "Duck", "Rabbit", "Cat", "Dog", "Parrot", "Turtle",
        "Frog", "Bee", "Spider", "Ant", "Crab", "Lobster", "Jellyfish",
        "Starfish", "Seahorse", "Peacock", "Flamingo", "Hippo", "Rhino",
        "Gorilla", "Cheetah", "Leopard",
      ],
      ar: [
        "أسد", "نمر", "فيل", "زرافة", "قرد", "دب", "ذئب", "ثعلب", "أرنب",
        "قطة", "كلب", "حصان", "بقرة", "خروف", "ماعز", "جمل", "غزال",
        "فهد", "نسر", "بومة", "صقر", "حمامة", "ببغاء", "ديك", "دجاجة",
        "بطة", "إوزة", "سمكة", "قرش", "حوت", "دولفين", "أخطبوط",
        "سلحفاة", "تمساح", "ضفدع", "ثعبان", "عقرب", "عنكبوت", "نحلة",
        "فراشة", "نملة", "سرطان بحر", "قنديل بحر", "نجم بحر",
        "حصان بحر", "طاووس", "فلامنجو", "كنغر", "كوالا", "باندا",
        "وحيد القرن", "فرس النهر", "غوريلا", "شمبانزي",
      ],
    },
  },
  {
    hint: { en: "It's food", ar: "إنه طعام" },
    words: {
      en: [
        "Pizza", "Hamburger", "Sushi", "Chocolate", "Ice cream", "Sandwich",
        "Pasta", "Rice", "Bread", "Cheese", "Butter", "Egg", "Bacon",
        "Steak", "Chicken wings", "Hot dog", "Taco", "Burrito", "Salad",
        "Soup", "Cake", "Cookie", "Donut", "Pancake", "Waffle", "Popcorn",
        "Candy",
      ],
      ar: [
        "بيتزا", "برجر", "سوشي", "شوكولاتة", "آيس كريم", "ساندويتش",
        "معكرونة", "أرز", "خبز", "جبنة", "زبدة", "بيض", "لحم", "دجاج",
        "سمك", "شوربة", "سلطة", "كعكة", "بسكويت", "دونات", "فطيرة",
        "كريب", "فشار", "حلوى", "عسل", "مربى", "كباب", "فلافل", "حمص",
        "شاورما", "منسف", "كسكس", "مقلوبة", "ورق عنب", "كنافة", "بقلاوة",
      ],
    },
  },
  {
    hint: { en: "It's a drink", ar: "إنه مشروب" },
    words: {
      en: [
        "Coffee", "Tea", "Juice", "Milkshake", "Smoothie", "Lemonade",
      ],
      ar: [
        "قهوة", "شاي", "عصير", "حليب", "ماء",
      ],
    },
  },
  {
    hint: { en: "It's a musical instrument", ar: "إنها آلة موسيقية" },
    words: {
      en: [
        "Guitar", "Piano", "Violin", "Drums", "Flute", "Trumpet",
        "Saxophone", "Harmonica", "Harp", "Accordion", "Banjo", "Cello",
      ],
      ar: [
        "جيتار", "بيانو", "كمان", "طبل", "ناي", "بوق", "عود", "قانون",
        "دف", "ربابة",
      ],
    },
  },
  {
    hint: { en: "It's a sport or activity", ar: "إنها رياضة أو نشاط" },
    words: {
      en: [
        "Football", "Basketball", "Tennis", "Swimming", "Skateboard",
        "Soccer", "Baseball", "Golf", "Hockey", "Volleyball", "Boxing",
        "Wrestling", "Karate", "Yoga", "Running", "Cycling", "Skiing",
        "Snowboarding", "Surfing", "Fishing", "Camping", "Hiking",
        "Rock climbing", "Bowling", "Archery", "Gymnastics", "Dancing",
      ],
      ar: [
        "كرة قدم", "كرة سلة", "كرة طائرة", "تنس", "سباحة", "ركض",
        "ملاكمة", "مصارعة", "كاراتيه", "جودو", "تايكواندو", "رماية",
        "سهام", "فروسية", "تزلج", "تسلق", "غوص", "صيد", "بولينج",
        "جمباز", "رقص", "يوغا",
      ],
    },
  },
  {
    hint: { en: "It's a place", ar: "إنه مكان" },
    words: {
      en: [
        "Mountain", "Ocean", "Castle", "Beach", "Forest", "Desert",
        "Volcano", "Waterfall", "Hospital", "Library", "Restaurant",
        "Airport", "Stadium", "Museum", "School", "University", "Church",
        "Mosque", "Temple", "Park", "Zoo", "Aquarium", "Theater", "Cinema",
        "Mall", "Supermarket", "Bank", "Hotel", "Farm", "Factory", "Prison",
        "Cemetery", "Lighthouse", "Bridge", "Tower", "Palace", "Pyramid",
        "Cave", "Island", "Jungle", "Lake", "River", "Swamp", "Glacier",
        "Canyon",
      ],
      ar: [
        "جبل", "بحر", "قلعة", "شاطئ", "غابة", "صحراء", "بركان", "شلال",
        "مستشفى", "مكتبة", "مطعم", "مطار", "ملعب", "متحف", "مدرسة",
        "جامعة", "مسجد", "كنيسة", "معبد", "حديقة", "حديقة حيوان",
        "مسرح", "سينما", "سوق", "بنك", "فندق", "مزرعة", "مصنع", "سجن",
        "مقبرة", "منارة", "جسر", "برج", "قصر", "هرم", "كهف", "جزيرة",
        "نهر", "بحيرة", "واحة", "وادي",
      ],
    },
  },
  {
    hint: { en: "It's a vehicle", ar: "إنها مركبة" },
    words: {
      en: [
        "Airplane", "Helicopter", "Submarine", "Motorcycle", "Bicycle",
        "Car", "Bus", "Train", "Boat", "Ship", "Yacht", "Rocket",
        "Spaceship", "Taxi", "Ambulance", "Fire truck", "Tractor", "Truck",
        "Scooter", "Hot air balloon",
      ],
      ar: [
        "طائرة", "هليكوبتر", "غواصة", "دراجة نارية", "دراجة", "سيارة",
        "حافلة", "قطار", "قارب", "سفينة", "يخت", "صاروخ", "مركبة فضائية",
        "تاكسي", "إسعاف", "سيارة إطفاء", "جرار", "شاحنة", "سكوتر",
        "منطاد", "عربة", "مترو",
      ],
    },
  },
  {
    hint: { en: "It's technology", ar: "إنها تكنولوجيا" },
    words: {
      en: [
        "Camera", "Telescope", "Microscope", "Computer", "Television",
        "Refrigerator", "Microwave", "Washing machine", "Vacuum cleaner",
        "Air conditioner", "Phone", "Laptop", "Tablet", "Headphones",
        "Speaker", "Printer", "Robot", "Drone", "Satellite", "Calculator",
        "Clock", "Watch", "Radio", "Projector",
      ],
      ar: [
        "كاميرا", "تلسكوب", "مجهر", "كمبيوتر", "تلفزيون", "ثلاجة",
        "مايكروويف", "غسالة", "مكنسة كهربائية", "مكيف", "هاتف", "لابتوب",
        "تابلت", "سماعات", "مكبر صوت", "طابعة", "روبوت", "درون",
        "قمر صناعي", "آلة حاسبة", "ساعة", "راديو",
      ],
    },
  },
  {
    hint: { en: "It's a profession", ar: "إنها مهنة" },
    words: {
      en: [
        "Dentist", "Police", "Firefighter", "Teacher", "Astronaut", "Doctor",
        "Nurse", "Lawyer", "Engineer", "Architect", "Pilot", "Chef",
        "Waiter", "Baker", "Farmer", "Mechanic", "Electrician", "Plumber",
        "Carpenter", "Painter", "Photographer", "Journalist", "Actor",
        "Singer", "Dancer", "Magician", "Clown", "Athlete", "Coach",
        "Scientist", "Detective", "Spy", "Soldier", "Judge", "Barber",
        "Librarian", "Taxi driver",
      ],
      ar: [
        "طبيب", "ممرض", "طبيب أسنان", "شرطي", "إطفائي", "معلم", "مهندس",
        "محامي", "طيار", "طباخ", "نادل", "خباز", "مزارع", "ميكانيكي",
        "كهربائي", "سباك", "نجار", "رسام", "مصور", "صحفي", "ممثل",
        "مغني", "راقص", "ساحر", "مهرج", "رياضي", "مدرب", "عالم", "محقق",
        "جاسوس", "جندي", "قاضي", "حلاق", "أمين مكتبة", "سائق", "بائع",
        "خياط", "جزار", "صيدلي", "رائد فضاء",
      ],
    },
  },
  {
    hint: { en: "It's a fantasy creature", ar: "إنه مخلوق خيالي" },
    words: {
      en: [
        "Dragon", "Vampire", "Zombie", "Werewolf", "Ghost", "Wizard",
        "Witch", "Mermaid", "Unicorn", "Phoenix", "Fairy", "Giant",
        "Troll", "Goblin", "Elf", "Dwarf", "Alien", "Monster", "Demon",
        "Angel", "Genie", "Centaur", "Cyclops", "Medusa", "Minotaur",
      ],
      ar: [
        "تنين", "مصاص دماء", "زومبي", "مستذئب", "شبح", "ساحر", "ساحرة",
        "حورية بحر", "وحيد قرن", "عنقاء", "جنية", "عملاق", "غول", "جني",
        "ملاك", "شيطان", "فضائي", "وحش", "عفريت", "قزم",
      ],
    },
  },
  {
    hint: { en: "It's an object", ar: "إنه شيء" },
    words: {
      en: [
        "Treasure", "Crown", "Sword", "Shield", "Bow and arrow", "Wand",
        "Key", "Lock", "Mirror", "Candle", "Lamp", "Book", "Newspaper",
        "Magazine", "Pen", "Pencil", "Scissors", "Hammer", "Screwdriver",
        "Knife", "Fork", "Spoon", "Plate", "Cup", "Bottle", "Umbrella",
        "Glasses", "Hat", "Shoes", "Bag", "Wallet", "Ring", "Necklace",
        "Bracelet", "Pillow", "Blanket", "Towel", "Toothbrush", "Soap",
        "Shampoo", "Balloon", "Kite", "Teddy bear", "Doll", "Puzzle",
        "Dice", "Cards", "Chess",
      ],
      ar: [
        "كنز", "تاج", "سيف", "درع", "قوس وسهم", "عصا سحرية", "مفتاح",
        "قفل", "مرآة", "شمعة", "مصباح", "كتاب", "جريدة", "مجلة", "قلم",
        "قلم رصاص", "مقص", "مطرقة", "مفك", "سكين", "شوكة", "ملعقة",
        "صحن", "كوب", "زجاجة", "مظلة", "نظارات", "قبعة", "حذاء", "حقيبة",
        "محفظة", "خاتم", "قلادة", "سوار", "وسادة", "بطانية", "منشفة",
        "فرشاة أسنان", "صابون", "شامبو", "بالون", "طائرة ورقية", "دمية",
        "لعبة", "أحجية", "نرد", "ورق لعب", "شطرنج",
      ],
    },
  },
  {
    hint: { en: "It's weather or nature", ar: "إنه طقس أو طبيعة" },
    words: {
      en: [
        "Tornado", "Rainbow", "Lightning", "Earthquake", "Sun", "Moon",
        "Star", "Cloud", "Rain", "Snow", "Wind", "Thunder", "Fog",
        "Hurricane", "Tsunami", "Meteor", "Comet", "Aurora", "Eclipse",
        "Sunrise", "Sunset", "Tree", "Flower", "Rose", "Sunflower",
        "Cactus", "Mushroom", "Grass", "Leaf",
      ],
      ar: [
        "إعصار", "قوس قزح", "برق", "زلزال", "شمس", "قمر", "نجمة",
        "سحابة", "مطر", "ثلج", "رياح", "رعد", "ضباب", "عاصفة", "تسونامي",
        "نيزك", "مذنب", "شفق قطبي", "كسوف", "شروق", "غروب", "شجرة",
        "زهرة", "وردة", "عباد الشمس", "صبار", "فطر", "عشب", "ورقة شجر",
        "نخلة", "زيتون",
      ],
    },
  },
  {
    hint: { en: "It's an event or celebration", ar: "إنها مناسبة أو احتفال" },
    words: {
      en: [
        "Fireworks", "Carnival", "Circus", "Wedding", "Birthday", "Concert",
        "Festival", "Parade", "Party", "Graduation", "Funeral", "Halloween",
        "Christmas", "New Year", "Easter", "Thanksgiving", "Valentine",
      ],
      ar: [
        "ألعاب نارية", "كرنفال", "سيرك", "زفاف", "عيد ميلاد",
        "حفلة موسيقية", "مهرجان", "موكب", "حفلة", "تخرج", "عيد الفطر",
        "عيد الأضحى", "رمضان", "رأس السنة",
      ],
    },
  },
  {
    hint: { en: "It's a famous place", ar: "إنه مكان مشهور" },
    words: {
      en: [
        "Hollywood", "Broadway", "Disneyland", "Olympics", "Safari",
        "Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum",
        "Great Wall", "Taj Mahal", "Mount Everest", "Niagara Falls",
        "Grand Canyon", "Amazon",
      ],
      ar: [
        "برج إيفل", "تمثال الحرية", "ساعة بيج بن", "الكولوسيوم",
        "سور الصين", "تاج محل", "جبل إيفرست", "شلالات نياجرا",
        "الأهرامات", "البتراء", "الكعبة", "المسجد الأقصى", "برج خليفة",
        "دبي", "مكة", "المدينة", "القدس", "القاهرة", "بغداد", "دمشق",
      ],
    },
  },
  {
    hint: { en: "It's a character or role", ar: "إنها شخصية أو دور" },
    words: {
      en: [
        "Pirate", "Knight", "Princess", "King", "Queen", "Prince", "Ninja",
        "Samurai", "Cowboy", "Superhero", "Villain", "Thief", "Prisoner",
        "Captain", "Explorer",
      ],
      ar: [
        "قرصان", "فارس", "أميرة", "ملك", "ملكة", "أمير", "نينجا",
        "ساموراي", "راعي بقر", "بطل خارق", "شرير", "لص", "سجين",
        "قبطان", "مستكشف", "محارب", "راهب",
      ],
    },
  },
  {
    hint: { en: "It's a body part", ar: "إنه جزء من الجسم" },
    words: {
      en: [
        "Heart", "Brain", "Eye", "Nose", "Mouth", "Ear", "Hand", "Foot",
        "Finger", "Tooth",
      ],
      ar: [
        "قلب", "دماغ", "عين", "أنف", "فم", "أذن", "يد", "قدم", "إصبع", "سن",
      ],
    },
  },
  {
    hint: { en: "It's something magical or mysterious", ar: "إنه شيء سحري أو غامض" },
    words: {
      en: [
        "Time machine", "Treasure map", "Magic carpet", "Crystal ball",
        "Love potion", "Invisible cloak", "Flying car", "Time travel",
        "Black hole", "Paradise", "Nightmare", "Dream", "Memory", "Secret",
        "Mystery", "Adventure", "Journey", "Discovery", "Invention",
        "Revolution",
      ],
      ar: [
        "آلة الزمن", "خريطة كنز", "سجادة طائرة", "كرة بلورية",
        "عباءة اختفاء", "سيارة طائرة", "ثقب أسود", "جنة", "كابوس", "حلم",
        "ذاكرة", "سر", "لغز", "مغامرة", "رحلة", "اكتشاف", "اختراع",
        "ثورة", "حرية", "سلام", "حب", "صداقة", "عائلة", "وطن", "تراث",
        "تاريخ", "مستقبل", "أمل", "نجاح", "فوز",
      ],
    },
  },
];

export const getRandomWordWithHint = (
  language: string = "en"
): WordWithHint => {
  const lang = language === "ar" ? "ar" : "en";

  // Pick a random category
  const category = categories[Math.floor(Math.random() * categories.length)];

  // Pick a random word from that category
  const wordList = category.words[lang];
  const word = wordList[Math.floor(Math.random() * wordList.length)];

  return {
    word,
    hint: category.hint[lang],
  };
};

export const getAvailableLanguages = (): string[] => {
  return ["en", "ar"];
};

// Legacy function for backwards compatibility
export const getRandomWord = (language: string = "en"): string => {
  return getRandomWordWithHint(language).word;
};
