import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const unite1Vocabulary: VocabularyWord[] = [
  { id: 'u1_w1', french: 'un musée', arabic: 'متحف', category: 'masculin', exampleFr: 'Le musée du Louvre est à Paris.', exampleAr: 'متحف اللوفر في باريس.' },
  { id: 'u1_w2', french: 'un touriste', arabic: 'سائح', category: 'masculin', exampleFr: 'Beaucoup de touristes visitent l\'Égypte.', exampleAr: 'الكثير من السياح يزورون مصر.' },
  { id: 'u1_w3', french: 'un monument', arabic: 'مبنى أثري / أثر', category: 'masculin', exampleFr: 'Il y a beaucoup de monuments au Caire.', exampleAr: 'يوجد العديد من الآثار في القاهرة.' },
  { id: 'u1_w4', french: 'un pays', arabic: 'بلد / دولة', category: 'masculin', exampleFr: 'L\'Égypte est un pays intéressant.', exampleAr: 'مصر بلد شيق.' },
  { id: 'u1_w5', french: 'une œuvre d\'art', arabic: 'عمل فني', category: 'feminin', exampleFr: 'Ce musée est riche en œuvres d\'art.', exampleAr: 'هذا المتحف غني بالأعمال الفنية.' },
  { id: 'u1_w6', french: 'une sculpture', arabic: 'عمل نحتي / تمثال منحوت', category: 'feminin', exampleFr: 'Pour voir des sculptures, je vais au musée.', exampleAr: 'لرؤية المنحوتات، أذهب إلى المتحف.' },
  { id: 'u1_w7', french: 'un bâtiment', arabic: 'مبنى / عمارة', category: 'masculin', exampleFr: 'Le bâtiment actuel est construit en 1902.', exampleAr: 'المبنى الحالي شُيّد عام 1902.' },
  { id: 'u1_w8', french: 'un égyptologue', arabic: 'عالم مصريات', category: 'masculin', exampleFr: 'Auguste Mariette est un égyptologue français.', exampleAr: 'أوجست مارييت عالم مصريات فرنسي.' },
  { id: 'u1_w9', french: 'un trésor', arabic: 'كنز', category: 'masculin', exampleFr: 'Les trésors de Tout Ank-Amon.', exampleAr: 'كنوز توت عنخ آمون.' },
  { id: 'u1_w10', french: 'le verre', arabic: 'الزجاج', category: 'masculin', exampleFr: 'La pyramide du Louvre est en verre.', exampleAr: 'هرم اللوفر من الزجاج.' },
  { id: 'u1_w11', french: 'un tour', arabic: 'جولة سياحية', category: 'masculin', exampleFr: 'Le tour commence à 10 heures.', exampleAr: 'الجولة تبدأ في العاشرة.' },
  { id: 'u1_w12', french: 'consacrer', arabic: 'يخصص / يكرس', category: 'verbe', exampleFr: 'consacrer du temps', exampleAr: 'يخصص وقتاً' },
  { id: 'u1_w13', french: 'construire', arabic: 'يشيد / يبني', category: 'verbe', exampleFr: 'construire un musée', exampleAr: 'يشيد متحفاً' },
  { id: 'u1_w14', french: 'fonder', arabic: 'يؤسس', category: 'verbe', exampleFr: 'Il a été fondé en 1858.', exampleAr: 'تأسس عام 1858.' },
  { id: 'u1_w15', french: 'se reposer', arabic: 'يستريح', category: 'verbe', exampleFr: 'Elle se repose après le déjeuner.', exampleAr: 'هي تستريح بعد الغداء.' },
  { id: 'u1_w16', french: 'se promener', arabic: 'يتنزه', category: 'verbe', exampleFr: 'Je me promène dans le jardin.', exampleAr: 'أتنزه في الحديقة.' },
  { id: 'u1_w17', french: 'renfermer', arabic: 'يضم / يحتوي على', category: 'verbe', exampleFr: 'Ce musée renferme la momie de Ramsès II.', exampleAr: 'يضم هذا المتحف مومياء رمسيس الثاني.' },
  { id: 'u1_w18', french: 'rappeler', arabic: 'يذكّر بـ', category: 'verbe', exampleFr: 'La pyramide de verre rappelle les pyramides d\'Égypte.', exampleAr: 'الهرم الزجاجي يذكرنا بأهرامات مصر.' }
];

export const examMiTerme2018: OfficialExam = {
  id: 'exam_miterme_2018',
  title: 'Examen de Mi-Terme 2018',
  titleAr: 'امتحان منتصف الفصل الدراسي الأول 2018 - الرسمي',
  academicYear: '2018 - 3ème Préparatoire',
  totalMarks: 20,
  timeLimitMinutes: 30,
  bookletPages: 'صفحات 33، 34، 35',
  questions: [
    {
      id: 'ex1_q1',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب (8 درجات)',
      passage: `Village Touristique "Cheraton"\nÀ Charm El-Cheikh au bord de la mer rouge. 500 L.E. la nuit par personne en chambre double pendant les vacances de mi-année.\nBuffet ouvert: petit déjeuner, déjeuner et diner.\nRestaurants Égyptiens et Français.\nBoissons chaudes et froides. Deux piscines, mini zoo et un grand marché.\nRéservation.\nLe Caire: Tél.: 022575531 – 023382691`,
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '1- Ce document est ....................',
      options: ['une publicité', 'une lettre', 'un dialogue'],
      correctAnswer: 'une publicité',
      points: 1
    },
    {
      id: 'ex1_q2',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '2- Ce village se trouve ....................',
      options: ['à Charm El-Cheikh', 'à Guizèh', 'à Tanta'],
      correctAnswer: 'à Charm El-Cheikh',
      points: 1
    },
    {
      id: 'ex1_q3',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '3- Ce village offre .................... "Buffet ouvert".',
      options: ['trois repas', 'deux repas', 'un repas'],
      correctAnswer: 'trois repas',
      points: 1
    },
    {
      id: 'ex1_q4',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '1- Dans ce village, il n\'y a pas de boissons chaudes.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Faux (خطأ)',
      points: 1
    },
    {
      id: 'ex1_q5',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '2- Ce village se trouve au bord de la mer rouge.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Vrai (صح)',
      points: 1
    },
    {
      id: 'ex1_q6',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '3- Dans ce village, il y a un restaurant français seulement.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Faux (خطأ)',
      points: 1
    },
    {
      id: 'ex1_q7',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'C) Complète par un mot pris du texte :',
      instructionAr: 'أكمل بكلمة من النص:',
      type: 'mcq',
      prompt: '1- Au village touristique "Cheraton", il y a deux piscines, .................... et grand marché.',
      options: ['mini zoo', 'restaurant', 'cinéma'],
      correctAnswer: 'mini zoo',
      points: 1
    },
    {
      id: 'ex1_q8',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'C) Complète par un mot pris du texte :',
      instructionAr: 'أكمل بكلمة من النص:',
      type: 'mcq',
      prompt: '2- La nuit par personne en chambre double pendant les vacances de .................... est 500 L.E.',
      options: ['mi-année', 'été', 'printemps'],
      correctAnswer: 'mi-année',
      points: 1
    },
    {
      id: 'ex1_q9',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية (8 درجات)',
      instructionFr: 'Fais comme indiqué entre parenthèses :',
      instructionAr: 'أجب كما هو مطلوب بين القوسين:',
      type: 'mcq',
      prompt: '1- Hier, elle (arriver) .................... tôt. [Corrige le verbe]',
      options: ['est arrivée', 'a arrivé', 'est arrivé'],
      correctAnswer: 'est arrivée',
      points: 1
    },
    {
      id: 'ex1_q10',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Fais comme indiqué entre parenthèses :',
      instructionAr: 'أجب كما هو مطلوب بين القوسين:',
      type: 'mcq',
      prompt: '2- Nous (acheter) .................... ce livre. [Corrige le verbe au présent]',
      options: ['achetons', 'achetez', 'achetent'],
      correctAnswer: 'achetons',
      points: 1
    },
    {
      id: 'ex1_q11',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Remplace les mots soulignés par un pronom personnel :',
      instructionAr: 'استبدل الكلمة التي تحتها خط بضمير شخصي:',
      type: 'mcq',
      prompt: '3- Ali téléphone à sa mère. ⟶ Ali .................... téléphone.',
      options: ['lui', 'la', 'leur'],
      correctAnswer: 'lui',
      points: 1
    },
    {
      id: 'ex1_q12',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '4- Ali .................... ce livre. (choisir)',
      options: ['choisit', 'choisis', 'choisissons'],
      correctAnswer: 'choisit',
      points: 1
    },
    {
      id: 'ex1_q13',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر صفة الملكية الصحيحة:',
      type: 'mcq',
      prompt: '5- Je fais .................... devoirs.',
      options: ['mes', 'mon', 'ma'],
      correctAnswer: 'mes',
      points: 1
    },
    {
      id: 'ex1_q14',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Remplace les mots soulignés par un pronom personnel :',
      instructionAr: 'استبدل الكلمات (à l\'école) بضمير شخصي مناسب:',
      type: 'mcq',
      prompt: '6- Les élèves vont à l\'école. ⟶ Les élèves .................... vont.',
      options: ['y', 'les', 'lui'],
      correctAnswer: 'y',
      points: 1
    },
    {
      id: 'ex1_q15',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر صفة الملكية المناسبة:',
      type: 'mcq',
      prompt: '7- Nous lisons .................... leçon.',
      options: ['notre', 'votre', 'nos'],
      correctAnswer: 'notre',
      points: 1
    },
    {
      id: 'ex1_q16',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Remplace les mots soulignés par un pronom personnel :',
      instructionAr: 'استبدل الكلمات (ces gâteaux) بضمير مفعول مباشر:',
      type: 'mcq',
      prompt: '8- La mère prépare ces gâteaux. ⟶ La mère .................... prépare.',
      options: ['les', 'leur', 'en'],
      correctAnswer: 'les',
      points: 1
    },
    {
      id: 'ex1_q17',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف (4 درجات)',
      instructionFr: 'A) Qui parle :',
      instructionAr: 'من المتحدث:',
      type: 'mcq',
      prompt: '1- "Va au tableau."',
      options: ['Un professeur', 'Un médecin', 'Un client'],
      correctAnswer: 'Un professeur',
      points: 1
    },
    {
      id: 'ex1_q18',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'A) Qui parle :',
      instructionAr: 'من المتحدث:',
      type: 'mcq',
      prompt: '2- "Docteur! J\'ai mal à l\'estomac."',
      options: ['Un malade', 'Un guide', 'Un voyageur'],
      correctAnswer: 'Un malade',
      points: 1
    },
    {
      id: 'ex1_q19',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'B) Choisis la bonne réponse :',
      instructionAr: 'اختر الموقف المناسب:',
      type: 'mcq',
      prompt: '3- Tu demandes à un passant le lieu de la gare, tu dis :',
      options: ['Où est la gare?', 'La gare est grande.', 'La gare est près du musée.'],
      correctAnswer: 'Où est la gare?',
      points: 1
    },
    {
      id: 'ex1_q20',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'B) Choisis la bonne réponse :',
      instructionAr: 'اختر الموقف المناسب:',
      type: 'mcq',
      prompt: '4- Tu donnes à ton ami une information sur les pyramides, tu dis :',
      options: ['Les pyramides sont à Guizèh.', 'Où se trouvent les pyramides?', 'Je veux aller aux pyramides.'],
      correctAnswer: 'Les pyramides sont à Guizèh.',
      points: 1
    }
  ]
};

export const unite1Section: UnitSection = {
  id: 'unite1',
  order: 2,
  titleFr: 'Unité (1) : Balade',
  titleAr: 'الوحدة الأولى: جولة ونزهة سياحية',
  descriptionAr: 'نصوص الفهم القرائي (متحف اللوفر والمتحف المصري)، الضمائر الشخصية (Sujet, C.O.D, C.O.I, Y)، صفات الملكية، الأفعال ذات الضميرين، المواقف، والأماكن والشخصيات.',
  badgeIcon: '🏛️',
  vocabulary: unite1Vocabulary,
  exam: examMiTerme2018,
  lessons: [
    {
      id: 'u1-louvre',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 1,
      title: 'Texte: Le Musée du Louvre',
      titleAr: 'نص الفهم والاستيعاب: متحف اللوفر بباريس',
      subtitleFr: 'Compréhension du texte & Pyramide de verre',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 12 و 13',
      readingPassage: {
        imageSrc: '0012.jpg',
        imagePageNumber: 12,
        imageCaptionFr: 'Unité (1) - Balade : Le Musée du Louvre',
        imageCaptionAr: 'صورة الصفحة 12 الأصلية من الكتاب المدرسي: نص متحف اللوفر والهرم الزجاجي',
        fullFrenchText: "Voici le Louvre à Paris, c'est un grand musée. Devant le Louvre, on voit des touristes de toutes les nationalités : des Égyptiens, des Japonais, des Espagnols, des Américains ... Beaucoup de touristes aiment visiter la section des antiquités égyptiennes. Pour entrer au Louvre, on passe sous la pyramide de verre qui rappelle les grandes pyramides d'Égypte.",
        fullArabicTranslation: "هذا هو متحف اللوفر في باريس، وهو متحف كبير. أمام اللوفر، نرى سياحاً من جميع الجنسيات: مصريين، يابانيين، إسبان، أمريكيين... الكثير من السياح يحبون زيارة قسم الآثار المصرية. للدخول إلى اللوفر، نمر تحت الهرم الزجاجي الذي يذكرنا بأهرامات مصر الكبرى.",
        sentences: [
          {
            id: 'u1_s1',
            french: "Voici le Louvre à Paris, c'est un grand musée.",
            arabic: "هذا هو متحف اللوفر في باريس، وهو متحف كبير."
          },
          {
            id: 'u1_s2',
            french: "Devant le Louvre, on voit des touristes de toutes les nationalités : des Égyptiens, des Japonais, des Espagnols, des Américains ...",
            arabic: "أمام اللوفر، نرى سياحاً من جميع الجنسيات: مصريين، يابانيين، إسبان، أمريكيين..."
          },
          {
            id: 'u1_s3',
            french: "Beaucoup de touristes aiment visiter la section des antiquités égyptiennes.",
            arabic: "الكثير من السياح يحبون زيارة قسم الآثار المصرية."
          },
          {
            id: 'u1_s4',
            french: "Pour entrer au Louvre, on passe sous la pyramide de verre qui rappelle les grandes pyramides d'Égypte.",
            arabic: "للدخول إلى اللوفر، نمر تحت الهرم الزجاجي الذي يذكرنا بأهرامات مصر الكبرى."
          }
        ],
        keyVocabulary: [
          { french: 'un musée', arabic: 'متحف', partOfSpeech: 'n.m.' },
          { french: 'un touriste', arabic: 'سائح', partOfSpeech: 'n.m.' },
          { french: 'une nationalité', arabic: 'جنسية', partOfSpeech: 'n.f.' },
          { french: 'antiquités égyptiennes', arabic: 'آثار مصرية', partOfSpeech: 'loc.' },
          { french: 'la pyramide de verre', arabic: 'الهرم الزجاجي', partOfSpeech: 'loc.' },
          { french: 'rappeler', arabic: 'يذكر بـ', partOfSpeech: 'v.' }
        ]
      },
      stages: {
        comprendre: {
          titleAr: 'اقرأ النص واستوعب الأفكار الرئيسية',
          summaryAr: 'النص يتناول متحف اللوفر الكبير بباريس، زواره من كل الجنسيات، قسم الآثار المصرية، والهرم الزجاجي الشهير.',
          grammarPoints: [
            {
              title: 'نص الوحدة الأولى (صفحة 12)',
              ruleAr: 'Voici le Louvre à Paris, c\'est un grand musée. Devant le Louvre, on voit des touristes de toutes les nationalités : des Égyptiens, des Japonais, des Espagnols, des Américains ... Beaucoup de touristes aiment visiter la section des antiquités égyptiennes. Pour entrer au Louvre, on passe sous la pyramide de verre qui rappelle les grandes pyramides d\'Égypte.',
              details: [
                'نوع الوثيقة: مقال (un article) يعرف بمتحف اللوفر.',
                'الزوار: سياح من مختلف الجنسيات.',
                'القسم المفضل: قسم الآثار المصرية (la section des antiquités égyptiennes).',
                'المدخل: الهرم الزجاجي (la pyramide de verre) الذي يذكرنا بأهرامات مصر.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أبرز الأسئلة والتعبيرات',
          descriptionAr: 'ترجمة ونماذج إجابات الأسئلة المقالية (صفحة 13):',
          examples: [
            {
              french: 'Où se trouve le musée du Louvre ? ⟶ Le musée du Louvre se trouve à Paris.',
              arabic: 'أين يقع متحف اللوفر؟ ⟶ يقع متحف اللوفر في باريس.'
            },
            {
              french: 'Quelle section les touristes aiment-ils visiter ? ⟶ Ils aiment visiter la section des antiquités égyptiennes.',
              arabic: 'أي قسم يحب السياح زيارته؟ ⟶ يحبون زيارة قسم الآثار المصرية.'
            },
            {
              french: 'Qu\'est-ce que la pyramide de verre nous rappelle ? ⟶ Elle rappelle les grandes pyramides d\'Égypte.',
              arabic: 'ماذا تذكرنا به الهرم الزجاجي؟ ⟶ يذكرنا بأهرامات مصر العظيمة.'
            }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 12 و 13 بالكتاب',
          descriptionAr: 'أجب عن أسئلة الفهم القرائي:',
          questions: [
            {
              id: 'q_u1_louvre_1',
              type: 'multiple-choice',
              instruction: 'صفحة 12 (سؤال A-1): Ce document est ..........',
              prompt: 'Ce document est :',
              options: ['un article', 'un dialogue', 'une conversation téléphonique'],
              correctAnswer: 'un article',
              explanation: 'النص عبارة عن مقال وصفي تعريفي.'
            },
            {
              id: 'q_u1_louvre_2',
              type: 'multiple-choice',
              instruction: 'صفحة 12 (سؤال A-2): Ce texte parle du ..........',
              prompt: 'Ce texte parle du :',
              options: ['musée du Louvre', 'musée égyptien', 'musée El Mountazah'],
              correctAnswer: 'musée du Louvre',
              explanation: 'النص يتحدث عن متحف اللوفر بباريس.'
            },
            {
              id: 'q_u1_louvre_3',
              type: 'multiple-choice',
              instruction: 'صفحة 13 (سؤال B-1): Mets Vrai ou Faux :',
              prompt: 'Le musée du Louvre n\'est pas grand.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ فالنص يذكر "c\'est un grand musée".'
            },
            {
              id: 'q_u1_louvre_4',
              type: 'multiple-choice',
              instruction: 'صفحة 13 (سؤال B-4): Mets Vrai ou Faux :',
              prompt: 'Les grandes pyramides d\'Égypte sont en verre.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ أهرامات مصر من الحجارة، بينما هرم اللوفر هو الذي من الزجاج.'
            }
          ]
        },
        corriger: {
          titleAr: 'تصحيح الفهم',
          descriptionAr: 'تأكد من عدم الخلط بين هرم مصر وهرم اللوفر:',
          commonMistakes: [
            {
              mistake: 'الاعتقاد بأن جميع زوار اللوفر مصريون فقط.',
              correction: 'On voit des touristes de toutes les nationalités.',
              why: 'يزور اللوفر سياح من مختلف دول العالم (مصر، اليابان، إسبانيا، أمريكا).'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_louvre_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 13 (سؤال B-5): On passe sous une pyramide de verre pour entrer au musée du Louvre.',
              prompt: 'هل العبارة صحيحة أم خاطئة؟',
              options: ['Vrai (صح)', 'Faux (خطأ)'],
              correctAnswer: 'Vrai (صح)',
              explanation: 'صحيح؛ يمر الزوار تحت الهرم الزجاجي للدخول.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي استيعاب النص',
          descriptionAr: 'أجب خلال 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_louvre_1',
              type: 'multiple-choice',
              instruction: 'ما هو القسم الأكثر زيارة باللوفر؟',
              prompt: 'La section la plus aimée par les touristes est :',
              options: ['la section des antiquités égyptiennes', 'la section romaine', 'la section moderne'],
              correctAnswer: 'la section des antiquités égyptiennes',
              explanation: 'قسم الآثار المصرية.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-musee-egyptien',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 2,
      title: 'Texte: Le Musée Égyptien',
      titleAr: 'نص الفهم والاستيعاب: المتحف المصري بالقاهرة',
      subtitleFr: 'Compréhension du texte & Auguste Mariette',
      estimatedMinutes: 15,
      bookletPages: 'صفحة 14',
      stages: {
        comprendre: {
          titleAr: 'اقرأ واستوعب نص المتحف المصري (صفحة 14)',
          summaryAr: 'تاريخ المتحف المصري: تأسيسه عام 1858 ببولاق على يد عالم المصريات أوجست مارييت، وانتقاله لميدان التحرير 1902، واحتواؤه على 100,000 قطعة أثرية ومومياء رمسيس الثاني وكنوز توت عنخ آمون.',
          grammarPoints: [
            {
              title: 'النص الأصلي (صفحة 14)',
              ruleAr: 'L\'Égypte est un pays intéressant pour les touristes. Il y a beaucoup de monuments à visiter au Caire : les musées, les pyramides, le sphinx, la citadelle, l\'opéra et la Tour du Caire. Aussi on peut visiter le musée Gréco-romain à Alexandrie. On prend comme exemple le musée Égyptien ; C\'est un musée très riche en œuvres d\'art. Il a été fondé en 1858 à Boulak par l\'égyptologue français Auguste Mariette. Le bâtiment actuel, construit en 1902, se trouve à la place El Tahrir près du Nil. Les livres d\'histoires disent que ce musée est un monde fascinant. On y trouve cent mille (100,000) objets qui nous parlent de la civilisation de l\'Egypte des pharaons : des statues, des sculptures, des peintures. Ce musée renferme la momie de Ramsès II, les trésors de Tout Ank-Amon, ainsi que d\'autres trésors qui racontent comment se déroulait la vie quotidienne des pharaons au bord du Nil.',
            }
          ]
        },
        exemple: {
          titleAr: 'أهم التواريخ والشخصيات',
          descriptionAr: 'احفظ هذه الحقائق للامتحان:',
          examples: [
            { french: '1858 : Fondation à Boulak par Auguste Mariette', arabic: '1858: التأسيس في بولاق على يد أوجست مارييت' },
            { french: '1902 : Le bâtiment actuel à la place El Tahrir', arabic: '1902: المبنى الحالي بميدان التحرير' },
            { french: '100 000 objets de la civilisation pharaonique', arabic: '100 ألف قطعة من الحضارة الفرعونية' },
            { french: 'La momie de Ramsès II et les trésors de Tout Ank-Amon', arabic: 'مومياء رمسيس الثاني وكنوز توت عنخ آمون' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 14 بالكتاب',
          descriptionAr: 'أجب عن أسئلة صح وخطأ والتوصيل:',
          questions: [
            {
              id: 'q_u1_egy_1',
              type: 'multiple-choice',
              instruction: 'صفحة 14 (سؤال 1-a): Mets Vrai ou Faux :',
              prompt: 'C\'est un Égyptien qui a fondé le musée du Caire.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ الذي أسسه هو عالم المصريات الفرنسي أوجست مارييت (Auguste Mariette).'
            },
            {
              id: 'q_u1_egy_2',
              type: 'multiple-choice',
              instruction: 'صفحة 14 (سؤال 1-b): Mets Vrai ou Faux :',
              prompt: 'Le musée Égyptien se trouve à la place El Tahrir.',
              options: ['Vrai (صح)', 'Faux (خطأ)'],
              correctAnswer: 'Vrai (صح)',
              explanation: 'صحيح؛ يقع بميدان التحرير قرب النيل.'
            },
            {
              id: 'q_u1_egy_3',
              type: 'multiple-choice',
              instruction: 'صفحة 14 (سؤال 1-c): Mets Vrai ou Faux :',
              prompt: 'Le Musée Gréco-romain renferme la momie de Ramsès II.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ المتحف المصري بالقاهرة هو الذي يضم مومياء رمسيس الثاني.'
            },
            {
              id: 'q_u1_egy_4',
              type: 'multiple-choice',
              instruction: 'صفحة 14 (سؤال II-Associe): En 1902, le musée actuel ..........',
              prompt: 'En 1902, le musée actuel :',
              options: ['a été installé à la place El Tahrir.', 'beaucoup d\'œuvres d\'art.', 'montrent la vie des égyptiens.'],
              correctAnswer: 'a été installé à la place El Tahrir.',
              explanation: 'تم تشييده بميدان التحرير في عام 1902.'
            }
          ]
        },
        corriger: {
          titleAr: 'تأكيد المعلومات التاريخية',
          descriptionAr: 'فرق بين تاريخ التأسيس وتاريخ مبنى التحرير:',
          commonMistakes: [
            {
              mistake: 'الاعتقاد بأن المتحف تأسس في ميدان التحرير عام 1858.',
              correction: 'تأسس في بولاق عام 1858 ثم انتقل لمبنى التحرير عام 1902.',
              why: 'أوجست مارييت بدأ المتحف في بولاق أولاً.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_egy_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 14: أين يوجد المتحف اليوناني الروماني؟',
              prompt: 'Le musée Gréco-romain se trouve à :',
              options: ['Alexandrie', 'Le Caire', 'Louxor'],
              correctAnswer: 'Alexandrie',
              explanation: 'يقع في الإسكندرية (Alexandrie).'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي معلومات المتحف المصري',
          descriptionAr: 'أجب خلال 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_egy_1',
              type: 'multiple-choice',
              instruction: 'كم عدد القطع الأثرية في المتحف المصري؟',
              prompt: 'Combien d\'objets trouve-t-on dans le musée ?',
              options: ['Cent mille (100,000)', 'Dix mille (10,000)', 'Un million'],
              correctAnswer: 'Cent mille (100,000)',
              explanation: '100,000 قطعة أثرية.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-pronoms-personnels',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 3,
      title: 'Les Pronoms Personnels',
      titleAr: 'الضمائر الشخصية: الفاعل، المفعول المباشر وغير المباشر، وضمير المكان Y',
      subtitleFr: 'Sujet, C.O.D (le/la/l\'/les), C.O.I (lui/leur), Lieu (Y)',
      estimatedMinutes: 20,
      bookletPages: 'صفحات 15، 16، 17، 18، 19، 51، 52',
      stages: {
        comprendre: {
          titleAr: 'قاعدة الضمائر الشخصية بالكامل (صفحات 15-17)',
          summaryAr: 'تستخدم الضمائر الشخصية لتجنب تكرار الكلمات في الجملة.',
          grammarPoints: [
            {
              title: '1. ضمائر الفاعل (Pronoms Sujets - صفحة 15)',
              ruleAr: 'Il (مفرد مذكر: Ali, le sac)، Elle (مفرد مؤنث: Alice, une gomme)، Nous (اسم + moi: Ali et moi)، Vous (اسم + toi: Ali et toi)، Ils (جمع مذكر: Les garçons)، Elles (جمع مؤنث: Les filles).',
            },
            {
              title: '2. ضمائر المفعول المباشر (C.O.D - صفحة 16)',
              ruleAr: 'مفعول مباشر غير مسبوق بحرف جر:',
              details: [
                'Le ⟶ مفرد مذكر (Il regarde le match ⟶ Il le regarde)',
                'La ⟶ مفرد مؤنث (Il regarde la télé ⟶ Il la regarde)',
                'L\' ⟶ مفرد مذكر/مؤنث أمام فعل يبدأ بحرف متحرك (Tu aimes ton frère ⟶ Tu l\'aimes)',
                'Les ⟶ جمع بنوعيه (Elle donne les fleurs ⟶ Elle les donne)'
              ]
            },
            {
              title: '3. ضمائر المفعول غير المباشر العاقل (C.O.I - صفحة 17)',
              ruleAr: 'مسبوق بحرف الجر (à, au, à la, aux) + شخص / عاقل:',
              details: [
                'lui ⟶ للمفرد المذكر أو المؤنث (Je parle à mon ami ⟶ Je lui parle / à sa mère ⟶ lui)',
                'leur ⟶ للجمع بنوعيه (Il téléphone à ses amis ⟶ Il leur téléphone / aux professeurs ⟶ leur)'
              ]
            },
            {
              title: '4. ضمير المكان (Y - C.C.L - صفحة 17)',
              ruleAr: 'يعوض مفعول مكان مسبوق بـ (à, au, aux, dans, chez, en):',
              details: [
                'Je vais à l\'école ⟶ J\'y vais.',
                'Nous partons à Paris ⟶ Nous y partons.',
                'Les filles jouent dans la cour ⟶ Les filles y jouent.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة توضيحية من تدريبات الكتاب',
          descriptionAr: 'شاهد تحويل المفعول إلى ضمير:',
          examples: [
            { french: 'Ali téléphone à son ami. ⟶ Ali lui téléphone.', arabic: 'علي يتصل بصديقه. ⟶ علي يتصل به (lui).' },
            { french: 'Je regarde ce film. ⟶ Je le regarde.', arabic: 'أنا أشاهد هذا الفيلم. ⟶ أنا أشاهده (le).' },
            { french: 'Ali et moi allons à l\'école. ⟶ Nous y allons.', arabic: 'علي وأنا نذهب للمدرسة. ⟶ نحن نذهب إليها.' },
            { french: 'Mona va écrire à ses parents. ⟶ Mona va leur écrire.', arabic: 'منى ستكتب لوالديها. ⟶ منى ستكتب لهما (leur).' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 18 و 19 و 51 بالكتاب',
          descriptionAr: 'استبدل الكلمات المحددة بالضمير المناسب:',
          questions: [
            {
              id: 'q_u1_pr_1',
              type: 'multiple-choice',
              instruction: 'صفحة 18 (سؤال 1): استبدل (à son ami) بضمير:',
              prompt: 'Ali téléphone à son ami. ⟶ Ali .......... téléphone.',
              options: ['lui', 'le', 'y'],
              correctAnswer: 'lui',
              explanation: 'à + شخص مفرد ⟶ lui.'
            },
            {
              id: 'q_u1_pr_2',
              type: 'multiple-choice',
              instruction: 'صفحة 18 (سؤال 2): استبدل (ce film) بضمير:',
              prompt: 'Je regarde ce film. ⟶ Je .......... regarde.',
              options: ['le', 'lui', 'la'],
              correctAnswer: 'le',
              explanation: 'ce film مفعول مباشر مفرد مذكر ⟶ le.'
            },
            {
              id: 'q_u1_pr_3',
              type: 'multiple-choice',
              instruction: 'صفحة 18 (سؤال 4): استبدل (au club) بضمير:',
              prompt: 'Nous allons au club. ⟶ Nous .......... allons.',
              options: ['y', 'le', 'lui'],
              correctAnswer: 'y',
              explanation: 'au club اسم مكان مسبوق بحرف جر ⟶ Y.'
            },
            {
              id: 'q_u1_pr_4',
              type: 'multiple-choice',
              instruction: 'صفحة 18 (سؤال 6): استبدل (à ses parents) بضمير:',
              prompt: 'Mona va écrire à ses parents. ⟶ Mona va .......... écrire.',
              options: ['leur', 'les', 'lui'],
              correctAnswer: 'leur',
              explanation: 'à + اسم جمع عاقل ⟶ leur.'
            },
            {
              id: 'q_u1_pr_5',
              type: 'multiple-choice',
              instruction: 'صفحة 19 (سؤال 12): استبدل (Karim / la citadelle):',
              prompt: 'Karim visite la citadelle. ⟶ Il .......... visite.',
              options: ['la', 'lui', 'l\''],
              correctAnswer: 'la',
              explanation: 'la citadelle مفرد مؤنث مباشر ⟶ la.'
            }
          ]
        },
        corriger: {
          titleAr: 'الفرق بين le/la و lui/leur',
          descriptionAr: 'قاعدة ذهبية لعدم الخلط:',
          commonMistakes: [
            {
              mistake: 'استخدام les بدلاً من leur مع الأفعال التي تأخذ حرف الجر à (مثل téléphoner à, parler à).',
              correction: 'Je leur parle (وليس Je les parle).',
              why: 'أفعال الحديث والاتصال تأخذ حرف الجر à + شخص، لذا نستخدم lui أو leur.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_pr_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 51 (سؤال 6): Ils parlent aux parents.',
              prompt: 'Ils .......... parlent.',
              options: ['leur', 'les', 'lui'],
              correctAnswer: 'leur',
              explanation: 'parler à + جمع عاقل ⟶ leur.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الضمائر الشخصية',
          descriptionAr: 'أجب خلال 60 ثانية:',
          timeLimitSeconds: 60,
          challengeQuestions: [
            {
              id: 'def_u1_pr_1',
              type: 'multiple-choice',
              instruction: 'صفحة 18 (سؤال 9): Mona est allée aux pyramides.',
              prompt: 'Mona .......... est allée.',
              options: ['y', 'les', 'leur'],
              correctAnswer: 'y',
              explanation: 'aux pyramides مكان ⟶ Y.'
            },
            {
              id: 'def_u1_pr_2',
              type: 'multiple-choice',
              instruction: 'صفحة 19 (سؤال 13): Mona prend ses cahiers.',
              prompt: 'Mona .......... prend.',
              options: ['les', 'leur', 'des'],
              correctAnswer: 'les',
              explanation: 'ses cahiers مفعول به جمع مباشر ⟶ les.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-adjectifs-possessifs',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 4,
      title: 'Les Adjectifs Possessifs',
      titleAr: 'صفات الملكية وقاعدة الاسم المؤنث البادئ بمتحرك',
      subtitleFr: 'Mon/Ma/Mes, Ton/Ta/Tes, Son/Sa/Ses, Notre, Votre, Leur',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 20 و 21',
      stages: {
        comprendre: {
          titleAr: 'جدول صفات الملكية (صفحة 20)',
          summaryAr: 'تحدد صفة الملكية حسب المالك (الضمير الفاعل) والمملوك (مذكر / مؤنث / جمع).',
          grammarPoints: [
            {
              title: 'جدول صفات الملكية الكامل (صفحة 20)',
              ruleAr: 'صفات الملكية بحسب الفاعل:',
              table: {
                headers: ['الضمير (المالك)', 'مفرد مذكر + مبدوء بمتحرك', 'مفرد مؤنث', 'جمع بنوعيه'],
                rows: [
                  ['Je', 'Mon', 'Ma', 'Mes'],
                  ['Tu', 'Ton', 'Ta', 'Tes'],
                  ['Il / Elle', 'Son', 'Sa', 'Ses'],
                  ['Nous', 'Notre', 'Notre', 'Nos'],
                  ['Vous', 'Votre', 'Votre', 'Vos'],
                  ['Ils / Elles', 'Leur', 'Leur', 'Leurs']
                ]
              }
            },
            {
              title: 'ملاحظة هامة جداً (N.B - صفحة 20)',
              ruleAr: 'إذا كان الاسم المفرد المؤنث يبدأ بحرف متحرك، نستخدم (Mon, Ton, Son) بدلاً من (Ma, Ta, Sa) لمنع التقاء حرفين متحركين:',
              details: [
                'école (مؤنث) ⟶ Mon école / Ton école / Son école',
                'amie (مؤنث) ⟶ Mon amie / Ton amie / Son amie'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة من تدريبات صفحة 21 بالكتاب',
          descriptionAr: 'لاحظ مطابقة صفة الملكية:',
          examples: [
            { french: 'Je donne ma gomme à mon frère.', arabic: 'أنا أعطي ممحاتي (مؤنث: ma) لأخي (مذكر: mon).' },
            { french: 'Il montre son cahier à son professeur.', arabic: 'هو يري كشكوله لمعلمه.' },
            { french: 'Nous aimons notre professeur et nos parents.', arabic: 'نحن نحب معلمنا (مفرد: notre) ووالدينا (جمع: nos).' },
            { french: 'Il va à son école avec sa sœur.', arabic: 'هو يذهب إلى مدرسته (son école لأنها تبدأ بمتحرك) مع أخته (sa sœur).' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 21 بالكتاب',
          descriptionAr: 'اختر صفة الملكية الصحيحة:',
          questions: [
            {
              id: 'q_u1_adj_1',
              type: 'multiple-choice',
              instruction: 'صفحة 21 (سؤال 2): Tu dois prendre .......... veste, il fait froid.',
              prompt: 'Tu dois prendre .......... veste.',
              options: ['ta', 'ton', 'tes'],
              correctAnswer: 'ta',
              explanation: 'veste مفرد مؤنث مع Tu ⟶ ta.'
            },
            {
              id: 'q_u1_adj_2',
              type: 'multiple-choice',
              instruction: 'صفحة 21 (سؤال 3): Vous respectez .......... professeur.',
              prompt: 'Vous respectez .......... professeur.',
              options: ['votre', 'vos', 'leur'],
              correctAnswer: 'votre',
              explanation: 'professeur مفرد مع Vous ⟶ votre.'
            },
            {
              id: 'q_u1_adj_3',
              type: 'multiple-choice',
              instruction: 'صفحة 21 (سؤال 14): Il va à .......... école avec .......... sœur.',
              prompt: 'Il va à .......... école.',
              options: ['son', 'sa', 'ses'],
              correctAnswer: 'son',
              explanation: 'école مفرد مؤنث يبدأ بمتحرك ⟶ son.'
            },
            {
              id: 'q_u1_adj_4',
              type: 'multiple-choice',
              instruction: 'صفحة 21 (سؤال 8): Les amis ont pris .......... billets.',
              prompt: 'Les amis ont pris .......... billets.',
              options: ['leurs', 'leur', 'ses'],
              correctAnswer: 'leurs',
              explanation: 'Les amis = Ils + billets جمع ⟶ leurs.'
            }
          ]
        },
        corriger: {
          titleAr: 'تجنب خطأ Ma école و Sa amie',
          descriptionAr: 'انتبه للنقطة الأكثر تكراراً في الامتحانات:',
          commonMistakes: [
            {
              mistake: 'كتابة ma école أو sa amie.',
              correction: 'mon école / son amie.',
              why: 'لأن الكلمتين تبدآن بحرف متحرك (é / a) فتتحول ma/ta/sa إلى mon/ton/son.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_adj_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 21: C\'est mon amie.',
              prompt: 'Ali parle à .......... amie.',
              options: ['son', 'sa', 'ses'],
              correctAnswer: 'son',
              explanation: 'amie مؤنث مبدوء بحرف متحرك ⟶ son.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي صفات الملكية',
          descriptionAr: 'أجب خلال 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_adj_1',
              type: 'multiple-choice',
              instruction: 'صفحة 21 (سؤال 10): Nous prenons .......... petit-déjeuner avec .......... parents.',
              prompt: 'avec .......... parents.',
              options: ['nos', 'notre', 'vos'],
              correctAnswer: 'nos',
              explanation: 'parents جمع مع nous ⟶ nos.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-verbes-pronominaux',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 5,
      title: 'Les Verbes Pronominaux',
      titleAr: 'الأفعال ذات الضميرين وتصريفها ونفيها',
      subtitleFr: 'Se + verbe (se lever, se coucher, s\'habiller...)',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 22 و 23',
      stages: {
        comprendre: {
          titleAr: 'تصريف الأفعال ذات الضميرين (صفحة 22)',
          summaryAr: 'الفعل ذو الضميرين يسبق مصدره بالضمير (se / s\') ويتغير ضمير المفعول حسب الفاعل.',
          grammarPoints: [
            {
              title: 'ضمائر المفعول المنعكسة مع الفاعل',
              ruleAr: 'Je ⟶ me (m\') | Tu ⟶ te (t\') | Il/Elle/On ⟶ se (s\') | Nous ⟶ nous | Vous ⟶ vous | Ils/Elles ⟶ se (s\')',
              table: {
                headers: ['الضمير', 'تصريف Se promener (يتنزه)'],
                rows: [
                  ['Je', 'me promène'],
                  ['Tu', 'te promènes'],
                  ['Il / Elle / On', 'se promène'],
                  ['Nous', 'nous promenons'],
                  ['Vous', 'vous promenez'],
                  ['Ils / Elles', 'se promènent']
                ]
              }
            },
            {
              title: 'صيغة النفي للأفعال ذات الضميرين (صفحة 22)',
              ruleAr: 'نضع ضمير المفعول والفعل معاً بين طرفي النفي ne ... pas:',
              details: [
                'Ex: Les filles ne se promènent pas seules. (البنات لا يتنزهن بمفردهن)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة الأفعال من الكتاب (صفحة 22)',
          descriptionAr: 'أشهر الأفعال المقررة:',
          examples: [
            { french: 's\'appeler (يُسمى / يُدعى)', arabic: 'Je m\'appelle Ali.' },
            { french: 'se lever (يستيقظ / ينهض)', arabic: 'Chaque jour, je me lève tôt.' },
            { french: 's\'habiller (يرتدي ملابسه)', arabic: 'Je m\'habille, puis je prends le petit-déjeuner.' },
            { french: 'se tromper (يخطئ)', arabic: 'Vous vous trompez de numéro.' },
            { french: 'se coucher (ينام)', arabic: 'Mon frère se couche à 9h du soir.' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 23 بالكتاب',
          descriptionAr: 'اختر التصريف الصحيح:',
          questions: [
            {
              id: 'q_u1_vp_1',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 1): Chaque jour, je .......... tôt.',
              prompt: 'Chaque jour, je .......... tôt.',
              options: ['me lève', 'se lève', 'se lever'],
              correctAnswer: 'me lève',
              explanation: 'مع Je نأخذ me lève.'
            },
            {
              id: 'q_u1_vp_2',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 2): Vous .......... de numéro.',
              prompt: 'Vous .......... de numéro.',
              options: ['vous trompez', 'me trompe', 'nous trompons'],
              correctAnswer: 'vous trompez',
              explanation: 'مع Vous نأخذ vous trompez.'
            },
            {
              id: 'q_u1_vp_3',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 4): Je .......... , puis je prends le petit-déjeuner.',
              prompt: 'Je .......... , puis je prends le petit-déjeuner.',
              options: ['m’habille', 't’habilles', 's’habille'],
              correctAnswer: 'm’habille',
              explanation: 'مع Je أمام متحرك ⟶ m’habille.'
            },
            {
              id: 'q_u1_vp_4',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 6): Tu .......... les dents chaque matin?',
              prompt: 'Tu .......... les dents chaque matin?',
              options: ['te brosses', 'me brosse', 'vous brossez'],
              correctAnswer: 'te brosses',
              explanation: 'مع Tu نأخذ te brosses.'
            }
          ]
        },
        corriger: {
          titleAr: 'تجنب خلط الضمير المنعكس',
          descriptionAr: 'انتبه لتوافق الفاعل والضمير المنعكس:',
          commonMistakes: [
            {
              mistake: 'قول Je se lève أو Ali te couche.',
              correction: 'Je me lève / Ali se couche.',
              why: 'يجب أن يتطابق الضمير المنعكس دائماً مع فاعل الجملة.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_vp_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 8): Nous .......... de route.',
              prompt: 'Nous .......... de route.',
              options: ['nous trompons', 'vous trompez', 'se trompent'],
              correctAnswer: 'nous trompons',
              explanation: 'مع Nous نكرر الضمير ⟶ nous nous trompons.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الأفعال ذات الضميرين',
          descriptionAr: 'أجب خلال 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_vp_1',
              type: 'multiple-choice',
              instruction: 'صفحة 23 (سؤال 5): Aujourd’hui, Ali .......... au directeur.',
              prompt: 'Ali .......... au directeur de l\'école.',
              options: ['se présente', 'se présenter', 'se présentent'],
              correctAnswer: 'se présente',
              explanation: 'Ali = Il ⟶ se présente.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-situations',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 6,
      title: 'Situations de l\'Unité 1',
      titleAr: 'مواقف الحياة اليومية والتواصل - الوحدة الأولى',
      subtitleFr: 'Choisis la bonne réponse (Demander, proposer, quitter...)',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 24 و 25',
      stages: {
        comprendre: {
          titleAr: 'كيف تجيب عن سؤال المواقف في الامتحان؟ (صفحات 24-25)',
          summaryAr: 'انتبه للمتحدث والمطلوب: هل أنت من تسأل (Tu demandes) وماذا تقول (Tu dis) أو ماذا يرد الطرف الآخر (Il dit)؟',
          grammarPoints: [
            {
              title: 'مفاتيح حل سؤال المواقف',
              ruleAr: 'مفاهيم هامة:',
              details: [
                'Tu demandes le lieu de la gare ⟶ Où est la gare? (سؤال عن المكان)',
                'Tu demandes à ton ami pourquoi il va à Paris ⟶ Pour visiter les monuments (إجابة بالسبب)',
                'Tu proposes de visiter le musée ⟶ Si on visitait le musée? (اقتراح)',
                'Pour quitter quelqu\'un ⟶ Au revoir monsieur! (وداع / انصراف)',
                'Tu demandes la nationalité ⟶ Quelle est votre nationalité? (سؤال عن الجنسية)',
                'Pour voir des sculptures ⟶ Je vais au musée (الغرض من الذهاب للمتحف)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة المواقف المحلولة',
          descriptionAr: 'نماذج من امتحانات سابقة:',
          examples: [
            { french: 'Tu demandes à un passant le lieu de la gare, tu dis : "Où est la gare?"', arabic: 'تسأل عابراً عن مكان المحطة: "أين المحطة؟"' },
            { french: 'Tu proposes à ton ami français de visiter le musée : "Si on visitait le musée?"', arabic: 'تقترح على صديقك زيارة المتحف: "ما رأيك لو زرنا المتحف؟"' },
            { french: 'Pour quitter quelqu\'un tu dis : "Au revoir monsieur!"', arabic: 'لتوديع شخص ما تقول: "إلى اللقاء سيدي!"' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 24 و 25 بالكتاب',
          descriptionAr: 'اختر الإجابة الصحيحة لكل موقف:',
          questions: [
            {
              id: 'q_u1_sit_1',
              type: 'multiple-choice',
              instruction: 'صفحة 24 (سؤال 1): Tu demandes à un passant le lieu de la gare , tu dis :',
              prompt: 'Tu demandes à un passant le lieu de la gare , tu dis :',
              options: ['Où est la gare?', 'La gare est grande.', 'La gare est près du musée.'],
              correctAnswer: 'Où est la gare?',
              explanation: 'لأنك أنت السائل (tu dis) فتطرح سؤالاً عن المكان: Où est la gare?'
            },
            {
              id: 'q_u1_sit_2',
              type: 'multiple-choice',
              instruction: 'صفحة 24 (سؤال 2): Tu demandes à ton ami pourquoi il va à Paris , il dit :',
              prompt: 'Tu demandes à ton ami pourquoi il va à Paris , il dit :',
              options: ['Pour visiter les monuments, je les aime.', 'Je suis Italien.', 'J\'habite avec ma famille au Caire.'],
              correctAnswer: 'Pour visiter les monuments, je les aime.',
              explanation: 'الصديق يجيب بالسبب (il dit): Pour visiter les monuments.'
            },
            {
              id: 'q_u1_sit_3',
              type: 'multiple-choice',
              instruction: 'صفحة 24 (سؤال 3): Tu proposes à ton ami français de visiter le musée, tu lui dis :',
              prompt: 'Tu proposes à ton ami français de visiter le musée, tu lui dis :',
              options: ['Si on visitait le musée ?', 'Où se trouve le musée ?', 'En Égypte, il y a plusieurs musées.'],
              correctAnswer: 'Si on visitait le musée ?',
              explanation: 'صيغة الاقتراح المشهورة: Si on + imparfait ⟶ Si on visitait le musée ?'
            },
            {
              id: 'q_u1_sit_4',
              type: 'multiple-choice',
              instruction: 'صفحة 25 (سؤال 7): Pour voir des sculptures, on dit :',
              prompt: 'Pour voir des sculptures, on dit :',
              options: ['Je vais au musée .', 'Je vais à l\'Opéra.', 'Je vais au stade .'],
              correctAnswer: 'Je vais au musée .',
              explanation: 'المنحوتات والآثار توجد في المتحف (au musée).'
            }
          ]
        },
        corriger: {
          titleAr: 'الفرق بين Tu dis و Il dit',
          descriptionAr: 'انتبه لمن يتحدث في نهاية الموقف:',
          commonMistakes: [
            {
              mistake: 'اختيار جملة خبرية عندما ينتهي الموقف بـ tu demandes... tu dis (المطلوب سؤال).',
              correction: 'انظر لآخر كلمتين في الموقف دائماً.',
              why: 'إذا طلب tu dis ⟶ سؤال، وإذا طلب il dit ⟶ إجابة.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_sit_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 25 (سؤال 8): Pour quitter quelqu’un tu dis :',
              prompt: 'Pour quitter quelqu’un tu dis :',
              options: ['Au revoir monsieur!', 'Attendez monsieur !', 'Merci monsieur !'],
              correctAnswer: 'Au revoir monsieur!',
              explanation: 'عند الانصراف والاستئذان نقول: Au revoir.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي المواقف السريع',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_sit_1',
              type: 'multiple-choice',
              instruction: 'صفحة 24 (سؤال 4): Un touriste demande à son guide à quelle heure le tour commence, le guide dit :',
              prompt: 'Le guide dit :',
              options: ['Le tour commence à 10 heures .', 'À quelle heure commence le tour ?', 'Le tour coûte 150 L.E.'],
              correctAnswer: 'Le tour commence à 10 heures .',
              explanation: 'المرشد يجيب عن موعد البداية.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-lieux-personnages',
      unitId: 'unite1',
      unitTitle: 'Unité 1',
      unitTitleAr: 'الوحدة الأولى',
      order: 7,
      title: 'Les Lieux et Les Personnages',
      titleAr: 'الأماكن والشخصيات والمهن - أسئلة الإنتاج',
      subtitleFr: 'Qui parle? Où vas-tu pour...? Qui peut faire ce travail?',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 26 و 27',
      stages: {
        comprendre: {
          titleAr: 'جدول الشخصيات والأماكن المقررة (صفحة 26)',
          summaryAr: 'جدول شامل يربط كل شخصية بالمكان المرتبط بها وبالوظيفة التي تؤديها.',
          grammarPoints: [
            {
              title: 'جدول الشخصيات والأماكن (صفحة 26)',
              ruleAr: 'الأزواج الأساسية المقررة:',
              table: {
                headers: ['الشخصية (Le personnage)', 'المكان (Le lieu)'],
                rows: [
                  ['un client (زبون) / un serveur', 'au restaurant / au café'],
                  ['un guide (مرشد سياحي)', 'au musée'],
                  ['un élève (تلميذ) / un professeur (معلم)', 'à l\'école / en classe'],
                  ['un médecin (طبيب) / une infirmière / un malade', 'à l\'hôpital'],
                  ['un pilote (طيار) / une hôtesse', 'à l\'aéroport'],
                  ['un pharmacien (صيدلي)', 'à la pharmacie'],
                  ['un guichetier (موظف شباك التذاكر)', 'au guichet / au cinéma / à la gare'],
                  ['un mécanicien (ميكانيكي)', 'au garage'],
                  ['un journaliste (صحفي)', 'au journal']
                ]
              }
            }
          ]
        },
        exemple: {
          titleAr: 'أنماط أسئلة الإنتاج في الامتحان (صفحة 27)',
          descriptionAr: 'تعرف على الأسئلة الكلاسيكية:',
          examples: [
            { french: 'Où vas-tu pour voir un film ? ⟶ Au cinéma.', arabic: 'أين تذهب لمشاهدة فيلم؟ ⟶ إلى السينما.' },
            { french: 'Où vas-tu pour consulter le médecin ? ⟶ À l\'hôpital.', arabic: 'أين تذهب لاستشارة الطبيب؟ ⟶ إلى المستشفى.' },
            { french: 'Qui parle : "Va au tableau" ? ⟶ Le professeur.', arabic: 'من المتحدث: "اذهب إلى السبورة"؟ ⟶ المعلم.' },
            { french: 'Qui peut faire ce travail : Conduire l\'avion ? ⟶ Le pilote.', arabic: 'من يمكنه قيادة الطائرة؟ ⟶ الطيار.' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 27 بالكتاب',
          descriptionAr: 'أجب عن أسئلة الشخصيات والأماكن:',
          questions: [
            {
              id: 'q_u1_lp_1',
              type: 'multiple-choice',
              instruction: 'صفحة 27 (1-1): Où vas-tu pour voir un match ?',
              prompt: 'Où vas-tu pour voir un match ?',
              options: ['Au stade', 'Au cinéma', 'Au restaurant'],
              correctAnswer: 'Au stade',
              explanation: 'لمشاهدة مباراة نذهب إلى الاستاد (Au stade).'
            },
            {
              id: 'q_u1_lp_2',
              type: 'multiple-choice',
              instruction: 'صفحة 27 (2-4): Qui parle: "Désolé l\'hôtel est complet." ?',
              prompt: 'Qui parle: "Désolé l\'hôtel est complet." ?',
              options: ['Le réceptionniste', 'Le médecin', 'Le professeur'],
              correctAnswer: 'Le réceptionniste',
              explanation: 'موظف الاستقبال في الفندق (Le réceptionniste).'
            },
            {
              id: 'q_u1_lp_3',
              type: 'multiple-choice',
              instruction: 'صفحة 27 (3-3): Qui peut faire ce travail: Réparer la voiture ?',
              prompt: 'Qui peut faire ce travail: Réparer la voiture ?',
              options: ['Le mécanicien', 'Le pilote', 'Le pharmacien'],
              correctAnswer: 'Le mécanicien',
              explanation: 'الميكانيكي (Le mécanicien) هو من يصلح السيارات.'
            }
          ]
        },
        corriger: {
          titleAr: 'تثبيت الأماكن والمهن',
          descriptionAr: 'لا تخلط بين المهن المتشابهة:',
          commonMistakes: [
            {
              mistake: 'الخلط بين un pilote (يقود طائرة) و un mécanicien (يصلح سيارات).',
              correction: 'Le pilote conduit l\'avion / Le mécanicien répare la voiture.',
              why: 'كل مهنة لها فعل مميز يحددها.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u1_lp_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 27: Qui peut examiner les malades ?',
              prompt: 'Qui peut examiner les malades ?',
              options: ['Le médecin', 'Le guide', 'Le vendeur'],
              correctAnswer: 'Le médecin',
              explanation: 'الطبيب (Le médecin) هو من يفحص المرضى.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي المهن والأماكن',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u1_lp_1',
              type: 'multiple-choice',
              instruction: 'صفحة 27 (2-2): Qui parle: "Fais le devoir et va au lit." ?',
              prompt: 'Qui parle: "Fais le devoir et va au lit." ?',
              options: ['Le père / La mère', 'Le guide', 'Le médecin'],
              correctAnswer: 'Le père / La mère',
              explanation: 'الأب أو الأم (Le père / La mère).'
            }
          ]
        }
      }
    }
  ]
};
