export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which blood type is known as the 'Universal Donor'?",
    options: ["A+", "B-", "O-", "AB+"],
    correctAnswer: 2,
    explanation: "O negative (O-) blood can be given to patients of any blood type because it lacks A, B, and Rh antigens."
  },
  {
    id: 2,
    question: "Which blood type is known as the 'Universal Recipient'?",
    options: ["O-", "AB+", "A-", "B+"],
    correctAnswer: 1,
    explanation: "AB positive (AB+) individuals can receive blood from any type because their immune system recognizes all antigens."
  },
  {
    id: 3,
    question: "What does the 'Rh' in blood types stand for?",
    options: ["Rhesus", "Red Hematology", "Reactive Hemoglobin", "Rare Health"],
    correctAnswer: 0,
    explanation: "Rh stands for Rhesus, named after the Rhesus monkey where the factor was first discovered."
  },
  {
    id: 4,
    question: "If a person has type A blood, what antibodies do they naturally produce?",
    options: ["Anti-A", "Anti-B", "Anti-O", "None"],
    correctAnswer: 1,
    explanation: "People with type A blood produce Anti-B antibodies to protect against type B blood cells."
  },
  {
    id: 5,
    question: "Which of these is NOT a component of blood?",
    options: ["Plasma", "Platelets", "Neurons", "Leukocytes"],
    correctAnswer: 2,
    explanation: "Neurons are nerve cells, not blood components. Blood consists of plasma, red cells, white cells (leukocytes), and platelets."
  },
  {
    id: 6,
    question: "How long do red blood cells typically live in the body?",
    options: ["10 days", "120 days", "1 year", "Forever"],
    correctAnswer: 1,
    explanation: "Red blood cells circulate for about 120 days before being broken down by the spleen and liver."
  },
  {
    id: 7,
    question: "What is the most common blood type in the world?",
    options: ["A+", "O+", "B+", "AB-"],
    correctAnswer: 1,
    explanation: "O positive (O+) is the most common blood type globally, found in about 37-40% of the population."
  },
  {
    id: 8,
    question: "What is the rarest common blood type?",
    options: ["O-", "B-", "AB-", "A-"],
    correctAnswer: 2,
    explanation: "AB negative (AB-) is typically the rarest of the eight main blood types, found in less than 1% of the population."
  },
  {
    id: 9,
    question: "Can an O+ person receive O- blood?",
    options: ["Yes", "No", "Only in emergencies", "Only if they are female"],
    correctAnswer: 0,
    explanation: "Yes, O+ can receive O- because O- lacks the Rh factor that O+ already has."
  },
  {
    id: 10,
    question: "What is the primary function of white blood cells?",
    options: ["Carry oxygen", "Clot blood", "Fight infection", "Transport nutrients"],
    correctAnswer: 2,
    explanation: "White blood cells (leukocytes) are the primary defense mechanism of the immune system against pathogens."
  },
  {
    id: 11,
    question: "Which organ is primarily responsible for filtering old red blood cells?",
    options: ["Heart", "Lungs", "Spleen", "Kidneys"],
    correctAnswer: 2,
    explanation: "The spleen acts as a filter for blood, removing old or damaged red blood cells."
  },
  {
    id: 12,
    question: "What percentage of the human body weight is typically blood?",
    options: ["2%", "7-8%", "15%", "25%"],
    correctAnswer: 1,
    explanation: "Blood typically makes up about 7-8% of an adult's total body weight."
  },
  {
    id: 13,
    question: "What gives red blood cells their color?",
    options: ["Chlorophyll", "Hemoglobin", "Plasma", "Iron oxide"],
    correctAnswer: 1,
    explanation: "Hemoglobin, an iron-rich protein that carries oxygen, gives blood its characteristic red color."
  },
  {
    id: 14,
    question: "Which blood component is responsible for clotting?",
    options: ["Plasma", "Red blood cells", "Platelets", "White blood cells"],
    correctAnswer: 2,
    explanation: "Platelets (thrombocytes) clump together to form clots and stop bleeding."
  },
  {
    id: 15,
    question: "What is 'Golden Blood'?",
    options: ["Blood with gold particles", "Rh-null blood", "Type AB+ blood", "Royal blood"],
    correctAnswer: 1,
    explanation: "Rh-null blood lacks all 61 antigens in the Rh system and is extremely rare (less than 50 people worldwide)."
  },
  {
    id: 16,
    question: "Can a person's blood type change during their lifetime?",
    options: ["Never", "Yes, through diet", "Yes, after a bone marrow transplant", "Yes, during puberty"],
    correctAnswer: 2,
    explanation: "A bone marrow transplant can change a person's blood type to that of the donor."
  },
  {
    id: 17,
    question: "What is the average volume of blood in an adult human?",
    options: ["2 liters", "5 liters", "10 liters", "15 liters"],
    correctAnswer: 1,
    explanation: "The average adult has about 4.5 to 5.5 liters of blood."
  },
  {
    id: 18,
    question: "Which blood type is most likely to be requested by hospitals in emergencies?",
    options: ["AB+", "O-", "A+", "B-"],
    correctAnswer: 1,
    explanation: "O- is always in high demand because it can be safely given to anyone when their blood type is unknown."
  },
  {
    id: 19,
    question: "What is the liquid part of blood called?",
    options: ["Serum", "Plasma", "Lymph", "Cytosol"],
    correctAnswer: 1,
    explanation: "Plasma is the yellowish liquid component of blood that holds the blood cells in whole blood in suspension."
  },
  {
    id: 20,
    question: "Who discovered the ABO blood group system?",
    options: ["Louis Pasteur", "Karl Landsteiner", "Gregor Mendel", "Marie Curie"],
    correctAnswer: 1,
    explanation: "Karl Landsteiner discovered the ABO blood groups in 1901, for which he received the Nobel Prize."
  },
  {
    id: 21,
    question: "What is the term for the clumping of red blood cells when incompatible blood types are mixed?",
    options: ["Coagulation", "Agglutination", "Hemolysis", "Thrombosis"],
    correctAnswer: 1,
    explanation: "Agglutination is the clumping of particles, such as red blood cells, when antibodies react with their corresponding antigens."
  },
  {
    id: 22,
    question: "Which blood type is often called the 'Universal Plasma Donor'?",
    options: ["O-", "AB+", "AB-", "A+"],
    correctAnswer: 1,
    explanation: "AB positive (AB+) is the universal plasma donor because its plasma contains no antibodies against A, B, or Rh antigens."
  },
  {
    id: 23,
    question: "What is the pH level of healthy human blood?",
    options: ["5.5 - 6.0", "7.35 - 7.45", "8.2 - 8.5", "6.8 - 7.0"],
    correctAnswer: 1,
    explanation: "Human blood is slightly basic, with a normal pH range of about 7.35 to 7.45."
  },
  {
    id: 24,
    question: "Which of these can be found in blood plasma?",
    options: ["Hormones", "Electrolytes", "Nutrients", "All of the above"],
    correctAnswer: 3,
    explanation: "Plasma transports hormones, electrolytes, nutrients, waste products, and gases throughout the body."
  },
  {
    id: 25,
    question: "What is the most common blood type in the United States?",
    options: ["A+", "O+", "B+", "O-"],
    correctAnswer: 1,
    explanation: "O positive (O+) is the most common blood type in the U.S., found in approximately 38% of the population."
  },
  {
    id: 26,
    question: "Which blood component is primarily responsible for transporting carbon dioxide back to the lungs?",
    options: ["Plasma", "Red blood cells", "White blood cells", "Platelets"],
    correctAnswer: 1,
    explanation: "While some CO2 is dissolved in plasma, red blood cells carry a significant portion back to the lungs for exhalation."
  },
  {
    id: 27,
    question: "What is the medical term for a low red blood cell count?",
    options: ["Leukemia", "Anemia", "Hemophilia", "Thrombosis"],
    correctAnswer: 1,
    explanation: "Anemia is a condition where you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues."
  },
  {
    id: 28,
    question: "Which blood type lacks both A and B antigens on the surface of red blood cells?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 3,
    explanation: "Type O blood has neither A nor B antigens on the surface of the red blood cells."
  },
  {
    id: 29,
    question: "How many main blood groups are there in the ABO system?",
    options: ["2", "4", "8", "12"],
    correctAnswer: 1,
    explanation: "The ABO system consists of four main blood groups: A, B, AB, and O."
  },
  {
    id: 30,
    question: "What is the function of antibodies in the blood?",
    options: ["Carry oxygen", "Clot blood", "Identify and neutralize foreign objects", "Produce energy"],
    correctAnswer: 2,
    explanation: "Antibodies are proteins produced by the immune system to identify and neutralize foreign objects like bacteria and viruses."
  },
  {
    id: 31,
    question: "Which blood type has both A and B antigens on the red blood cells?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 2,
    explanation: "Type AB blood has both A and B antigens on the surface of the red blood cells."
  },
  {
    id: 32,
    question: "What is the name of the process by which blood cells are produced?",
    options: ["Hemolysis", "Hematopoiesis", "Hemostasis", "Glycolysis"],
    correctAnswer: 1,
    explanation: "Hematopoiesis is the process of creating new blood cells in the body, primarily occurring in the bone marrow."
  },
  {
    id: 33,
    question: "Which of these is a rare blood type often found in people of African descent?",
    options: ["Duffy-negative", "Bombay phenotype", "Rh-null", "Kell-negative"],
    correctAnswer: 0,
    explanation: "The Duffy-negative blood type is common in people of African descent and provides some resistance to certain types of malaria."
  },
  {
    id: 34,
    question: "What is the 'Bombay Phenotype'?",
    options: ["A type of malaria", "A rare blood type that lacks the H antigen", "A blood clotting disorder", "A type of white blood cell"],
    correctAnswer: 1,
    explanation: "The Bombay phenotype is an extremely rare blood type that lacks the H antigen, which is the precursor to A and B antigens."
  },
  {
    id: 35,
    question: "Which blood type is the most common in Japan?",
    options: ["O", "A", "B", "AB"],
    correctAnswer: 1,
    explanation: "Type A is the most common blood type in Japan, followed by Type O."
  },
  {
    id: 36,
    question: "What is the primary role of the Rh factor in pregnancy?",
    options: ["Determines the baby's eye color", "Can cause Rh incompatibility if the mother is Rh- and the baby is Rh+", "Determines the baby's gender", "Has no role"],
    correctAnswer: 1,
    explanation: "Rh incompatibility can occur if an Rh-negative mother carries an Rh-positive baby, potentially leading to hemolytic disease of the newborn."
  },
  {
    id: 37,
    question: "Which blood component is used to treat patients with hemophilia?",
    options: ["Red blood cells", "Clotting factors", "White blood cells", "Platelets"],
    correctAnswer: 1,
    explanation: "Hemophilia is treated by replacing the missing clotting factors in the blood."
  },
  {
    id: 38,
    question: "What is the average lifespan of a platelet?",
    options: ["8-10 days", "120 days", "1 year", "1 hour"],
    correctAnswer: 0,
    explanation: "Platelets have a short lifespan, typically circulating for about 8 to 10 days."
  },
  {
    id: 39,
    question: "Which blood type is sometimes associated with a higher risk of stomach ulcers?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 3,
    explanation: "Some studies have suggested a link between Type O blood and a slightly higher risk of developing stomach ulcers."
  },
  {
    id: 40,
    question: "What is the name of the test used to determine a person's blood type?",
    options: ["Blood count", "Blood typing", "Blood pressure", "Blood sugar"],
    correctAnswer: 1,
    explanation: "Blood typing is the laboratory test used to determine a person's ABO and Rh blood groups."
  },
  {
    id: 41,
    question: "Which blood type is most common among Indigenous Australians?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: 3,
    explanation: "Type O is the most common blood type among Indigenous Australians."
  },
  {
    id: 42,
    question: "What is the function of fibrinogen in the blood?",
    options: ["Carry oxygen", "Fight infection", "Aid in blood clotting", "Transport glucose"],
    correctAnswer: 2,
    explanation: "Fibrinogen is a plasma protein that is converted into fibrin during blood clotting, forming the mesh of a blood clot."
  },
  {
    id: 43,
    question: "Which blood type was the first to be discovered?",
    options: ["A", "B", "O", "All ABO types were discovered together"],
    correctAnswer: 3,
    explanation: "Karl Landsteiner identified the A, B, and O blood groups at the same time in 1901."
  },
  {
    id: 44,
    question: "What is the term for a person who has two different alleles for a blood type gene?",
    options: ["Homozygous", "Heterozygous", "Genotype", "Phenotype"],
    correctAnswer: 1,
    explanation: "A person is heterozygous for a gene if they have two different versions (alleles) of that gene."
  },
  {
    id: 45,
    question: "Which blood type is considered the 'Universal Recipient' for plasma?",
    options: ["AB+", "O-", "O+", "A-"],
    correctAnswer: 2,
    explanation: "Type O (both O+ and O-) is the universal recipient for plasma because O plasma contains both anti-A and anti-B antibodies, but O red cells have no antigens."
  },
  {
    id: 46,
    question: "What is the primary component of blood plasma?",
    options: ["Proteins", "Water", "Glucose", "Salts"],
    correctAnswer: 1,
    explanation: "Blood plasma is composed of about 90-92% water."
  },
  {
    id: 47,
    question: "Which blood type is most common in Central and South America?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: 3,
    explanation: "Type O is exceptionally common among Indigenous populations in Central and South America."
  },
  {
    id: 48,
    question: "What is the name of the protein that stores oxygen in muscle cells?",
    options: ["Hemoglobin", "Myoglobin", "Albumin", "Globulin"],
    correctAnswer: 1,
    explanation: "Myoglobin is an iron- and oxygen-binding protein found in the muscle tissue of vertebrates."
  },
  {
    id: 49,
    question: "Which blood type is associated with a slightly lower risk of pancreatic cancer?",
    options: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 3,
    explanation: "Some research suggests that people with Type O blood may have a lower risk of developing pancreatic cancer compared to other types."
  },
  {
    id: 50,
    question: "What is the term for the study of blood and blood-forming tissues?",
    options: ["Cardiology", "Hematology", "Oncology", "Neurology"],
    correctAnswer: 1,
    explanation: "Hematology is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood."
  }
];
