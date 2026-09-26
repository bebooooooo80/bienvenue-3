import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const unite2Vocabulary: VocabularyWord[] = [
  { id: 'u2_w1', french: 'un rouget grondin', arabic: 'نوع من السمك (جروندان)', category: 'aliment', exampleFr: 'Pour préparer le grondin au four.', exampleAr: 'لإعداد سمك الجروندان في الفرن.' },
  { id: 'u2_w2', french: 'du bamia', arabic: 'بامية', category: 'aliment', exampleFr: '1 kg de bamia.', exampleAr: '1 كيلو بامية.' },
  { id: 'u2_w3', french: 'de la viande de mouton', arabic: 'لحم ضأن', category: 'aliment', exampleFr: 'de la viande de mouton en morceaux.', exampleAr: 'لحم ضأن مقطع مكعبات.' },
  { id: 'u2_w4', french: 'un plat', arabic: 'طبق / وجبة', category: 'masculin', exampleFr: 'C\'est une recette d\'un plat.', exampleAr: 'هذه وصفة طبق شهي.' },
  { id: 'u2_w5', french: 'une recette', arabic: 'وصفة طعام', category: 'feminin', exampleFr: 'La recette du taguine.', exampleAr: 'وصفة الطاجن.' },
  { id: 'u2_w6', french: 'le thym', arabic: 'زعتر (توابل)', category: 'aliment', exampleFr: 'Ajoutez le thym et arrosez d\'huile.', exampleAr: 'أضف الزعتر ورش الزيت.' },
  { id: 'u2_w7', french: 'de l\'huile d\'olive', arabic: 'زيت زيتون', category: 'aliment', exampleFr: 'deux cuillères d\'huile d\'olive.', exampleAr: 'ملعقتان من زيت الزيتون.' },
  { id: 'u2_w8', french: 'le sel et le poivre', arabic: 'الملح والفلفل', category: 'aliment', exampleFr: 'Salez et poivrez le poisson.', exampleAr: 'تبل السمك بالملح والفلفل.' },
  { id: 'u2_w9', french: 'l\'ail', arabic: 'الثوم', category: 'aliment', exampleFr: '5 gousses d\'ail.', exampleAr: '5 فصوص ثوم.' },
  { id: 'u2_w10', french: 'l\'oignon', arabic: 'البصل', category: 'aliment', exampleFr: 'deux oignons coupés.', exampleAr: 'بصلتان مقطعتان.' },
  { id: 'u2_w11', french: 'du beurre', arabic: 'زبدة', category: 'aliment', exampleFr: '100 grammes de beurre.', exampleAr: '100 جرام زبدة.' },
  { id: 'u2_w12', french: 'des fruits', arabic: 'فواكه', category: 'aliment', exampleFr: 'Comme fruits, elle prend des pommes.', exampleAr: 'كفاكهة، هي تأخذ تفاحاً.' },
  { id: 'u2_w13', french: 'des frites', arabic: 'بطاطس مقلية محمرة', category: 'aliment', exampleFr: 'des biftecks et des frites.', exampleAr: 'شرائح لحم وبطاطس مقلية.' },
  { id: 'u2_w14', french: 'du riz', arabic: 'أرز', category: 'aliment', exampleFr: 'du poulet et du riz.', exampleAr: 'دجاج وأرز.' },
  { id: 'u2_w15', french: 'faire cuire', arabic: 'يسوي / يطهو', category: 'verbe', exampleFr: 'Faites cuire au four 15 minutes.', exampleAr: 'اتركه ينضج في الفرن 15 دقيقة.' },
  { id: 'u2_w16', french: 'ajouter', arabic: 'يضيف', category: 'verbe', exampleFr: 'Ajoutez les tomates écrasées.', exampleAr: 'أضف الطماطم المعصورة.' },
  { id: 'u2_w17', french: 'verser', arabic: 'يسكب / يصب', category: 'verbe', exampleFr: 'Versez le tout dans un plat.', exampleAr: 'اسكب الخليط كاملاً في طبق.' },
  { id: 'u2_w18', french: 'servir', arabic: 'يقدم الطعام', category: 'verbe', exampleFr: 'Servez-le chaud.', exampleAr: 'قدمه ساخناً.' }
];

export const examMiAnnee2019: OfficialExam = {
  id: 'exam_miannee_2019',
  title: 'Examen de Mi-année 2018 - 2019',
  titleAr: 'امتحان نصف العام الدراسي الشامل 2018 - 2019 (الرسمي)',
  academicYear: '2018-2019 - 3ème Préparatoire',
  totalMarks: 20,
  timeLimitMinutes: 30,
  bookletPages: 'صفحات 58، 59، 60',
  questions: [
    {
      id: 'ex2_q1',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب (10 درجات)',
      passage: `Restaurant "Bon appétit"\n15, rue de la Gare, le Caire\nTél: 022763548\n\nLe garçon : Bonjour monsieur, vous désirez?\nLe client : Je voudrais dîner.\nLe garçon : Que prenez-vous comme entrée?\nLe client : Des tomates et des concombres.\nLe garçon : Et comme plat principal?\nLe client : Du poulet et du riz.\nLe garçon : Et comme dessert ?\nLe client : Des gâteaux au chocolat.`,
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '1. Ce document est ....................',
      options: ['un dialogue', 'une lettre', 'un article'],
      correctAnswer: 'un dialogue',
      points: 1
    },
    {
      id: 'ex2_q2',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '2. Ce restaurant se trouve ....................',
      options: ['au Caire', 'à Mansourah', 'à Tanta'],
      correctAnswer: 'au Caire',
      points: 1
    },
    {
      id: 'ex2_q3',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '3. Ce client voudrait prendre ....................',
      options: ['le dîner', 'le déjeuner', 'le petit-déjeuner'],
      correctAnswer: 'le dîner',
      points: 1
    },
    {
      id: 'ex2_q4',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '1. Le client prend des fruits frais comme dessert.',
      options: ['Faux (خطأ)', 'Vrai (صح)'],
      correctAnswer: 'Faux (خطأ)',
      points: 1
    },
    {
      id: 'ex2_q5',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '2. "Ali Baba" est le nom de ce restaurant.',
      options: ['Faux (خطأ)', 'Vrai (صح)'],
      correctAnswer: 'Faux (خطأ)',
      points: 1
    },
    {
      id: 'ex2_q6',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '3. Le client prend du poulet et du riz comme plat principal.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Vrai (صح)',
      points: 1
    },
    {
      id: 'ex2_q7',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'B) Mets (vrai) ou (faux) :',
      instructionAr: 'ضع علامة صح أو خطأ:',
      type: 'true_false',
      prompt: '4. Dans ce restaurant, il y a un téléphone.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Vrai (صح)',
      points: 1
    },
    {
      id: 'ex2_q8',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'C) Complète par un mot pris du texte :',
      instructionAr: 'أكمل بكلمة من النص:',
      type: 'mcq',
      prompt: '1. Comme entrée, le client prend des tomates et ....................',
      options: ['des concombres', 'des carottes', 'des pommes'],
      correctAnswer: 'des concombres',
      points: 1
    },
    {
      id: 'ex2_q9',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'C) Complète par un mot pris du texte :',
      instructionAr: 'أكمل بكلمة من النص:',
      type: 'mcq',
      prompt: '2. Comme dessert, le client prend des .................... au chocolat.',
      options: ['gâteaux', 'glaces', 'crêpes'],
      correctAnswer: 'gâteaux',
      points: 1
    },
    {
      id: 'ex2_q10',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: قطعة الفهم والاستيعاب',
      instructionFr: 'C) Complète par un mot pris du texte :',
      instructionAr: 'أكمل بكلمة من النص:',
      type: 'mcq',
      prompt: '3. Ce restaurant est 15 rue de la ....................',
      options: ['Gare', 'Paix', 'Place'],
      correctAnswer: 'Gare',
      points: 1
    },
    {
      id: 'ex2_q11',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية (5 درجات)',
      instructionFr: 'Fais comme indiqué entre parenthèses :',
      instructionAr: 'أجب كما هو مطلوب بين القوسين:',
      type: 'mcq',
      prompt: '1- Je (jouer) .................... au tennis. [Corrige le verbe]',
      options: ['joue', 'joues', 'jouent'],
      correctAnswer: 'joue',
      points: 0.5
    },
    {
      id: 'ex2_q12',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Fais comme indiqué entre parenthèses :',
      instructionAr: 'انفِ الجملة:',
      type: 'mcq',
      prompt: '2- Mona regarde un film. [Mets à la forme négative]',
      options: ['Mona ne regarde pas de film.', 'Mona ne regarde pas un film.', 'Mona regarde pas film.'],
      correctAnswer: 'Mona ne regarde pas de film.',
      points: 0.5
    },
    {
      id: 'ex2_q13',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Fais comme indiqué entre parenthèses :',
      instructionAr: 'صحح الفعل في الماضي المركب:',
      type: 'mcq',
      prompt: '3- Hier, nous (acheter) .................... une nouvelle voiture.',
      options: ['avons acheté', 'sommes achetés', 'avons achète'],
      correctAnswer: 'avons acheté',
      points: 0.5
    },
    {
      id: 'ex2_q14',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis :',
      instructionAr: 'اختر أداة التجزئة:',
      type: 'mcq',
      prompt: '4- Elle boit .................... café.',
      options: ['du', 'de la', 'de l\''],
      correctAnswer: 'du',
      points: 0.5
    },
    {
      id: 'ex2_q15',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Remplace les mots soulignés par un pronom personnel :',
      instructionAr: 'استبدل (ces leçons) بضمير شخصي:',
      type: 'mcq',
      prompt: '5- Nous lisons ces leçons. ⟶ Nous .................... lisons.',
      options: ['les', 'leur', 'en'],
      correctAnswer: 'les',
      points: 0.5
    },
    {
      id: 'ex2_q16',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Remplace les mots soulignés par un pronom personnel :',
      instructionAr: 'استبدل (à Ali) بضمير شخصي:',
      type: 'mcq',
      prompt: '6- Je parle à Ali. ⟶ Je .................... parle.',
      options: ['lui', 'le', 'y'],
      correctAnswer: 'lui',
      points: 0.5
    },
    {
      id: 'ex2_q17',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis :',
      instructionAr: 'اختر صفة الملكية:',
      type: 'mcq',
      prompt: '7- Vous écoutez bien .................... leçon.',
      options: ['votre', 'notre', 'vos'],
      correctAnswer: 'votre',
      points: 0.5
    },
    {
      id: 'ex2_q18',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Relie par (Qui - Que - Où) :',
      instructionAr: 'اربط بضمير وصل مناسب:',
      type: 'mcq',
      prompt: '8- C\'est la voiture. Mon père achète cette voiture. ⟶ C\'est la voiture .......... mon père achète.',
      options: ['que', 'qui', 'où'],
      correctAnswer: 'que',
      points: 0.5
    },
    {
      id: 'ex2_q19',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Relie par (Qui - Que - Où) :',
      instructionAr: 'اربط بضمير وصل مناسب:',
      type: 'mcq',
      prompt: '9- C\'est le film. Il est intéressant. ⟶ C\'est le film .......... est intéressant.',
      options: ['qui', 'que', 'où'],
      correctAnswer: 'qui',
      points: 0.5
    },
    {
      id: 'ex2_q20',
      section: 'grammaire',
      sectionTitleFr: '2) Grammaire',
      sectionTitleAr: 'ثانياً: القواعد اللغوية',
      instructionFr: 'Choisis :',
      instructionAr: 'اختر التصريف الصحيح في المستقبل القريب:',
      type: 'mcq',
      prompt: '10- Demain, elle (faire) .................... du ski.',
      options: ['va faire', 'fait', 'vais faire'],
      correctAnswer: 'va faire',
      points: 0.5
    },
    {
      id: 'ex2_q21',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف (5 درجات)',
      instructionFr: 'Où vas-tu pour ...... ?',
      instructionAr: 'أين تذهب لـ :',
      type: 'mcq',
      prompt: '1. Voir un film.',
      options: ['Au cinéma', 'Au stade', 'À l\'hôpital'],
      correctAnswer: 'Au cinéma',
      points: 1
    },
    {
      id: 'ex2_q22',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'Où vas-tu pour ...... ?',
      instructionAr: 'أين تذهب لـ :',
      type: 'mcq',
      prompt: '2. Voir un match.',
      options: ['Au stade', 'Au restaurant', 'Au cinéma'],
      correctAnswer: 'Au stade',
      points: 1
    },
    {
      id: 'ex2_q23',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'Où vas-tu pour ...... ?',
      instructionAr: 'أين تذهب لـ :',
      type: 'mcq',
      prompt: '3. Consulter le médecin.',
      options: ['À l\'hôpital', 'Au garage', 'Au musée'],
      correctAnswer: 'À l\'hôpital',
      points: 1
    },
    {
      id: 'ex2_q24',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الموقف المناسب:',
      type: 'mcq',
      prompt: '4- Tu es chez le fruitier, tu dis :',
      options: ['Donnez-moi un kilo de bananes !', 'Combien coûte un kilo de tomates?', 'Je voudrais de la salade verte.'],
      correctAnswer: 'Donnez-moi un kilo de bananes !',
      points: 1
    },
    {
      id: 'ex2_q25',
      section: 'production',
      sectionTitleFr: '3) Production & Situations',
      sectionTitleAr: 'ثالثاً: الإنتاج والمواقف',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الموقف المناسب:',
      type: 'mcq',
      prompt: '5- Ton ami te demande combien de repas tu prends par jour, tu dis :',
      options: ['Je prends trois repas.', 'Combien coûte ce repas?', 'J\'aime les fruits.'],
      correctAnswer: 'Je prends trois repas.',
      points: 1
    }
  ]
};

export const unite2Section: UnitSection = {
  id: 'unite2',
  order: 3,
  titleFr: 'Unité (2) : Préparer un repas',
  titleAr: 'الوحدة الثانية: إعداد وجبة طعام',
  descriptionAr: 'وصفات الطهي (سمك الجروندان وطاجن البامية)، أدوات التجزئة (du, de la, de l\', des)، ضمائر الوصل (qui, que, où)، ومواقف التسوق والمطاعم.',
  badgeIcon: '🍳',
  vocabulary: unite2Vocabulary,
  exam: examMiAnnee2019,
  lessons: [
    {
      id: 'u2-grondin',
      unitId: 'unite2',
      unitTitle: 'Unité 2',
      unitTitleAr: 'الوحدة الثانية',
      order: 1,
      title: 'Texte: Grondin au four',
      titleAr: 'نص الفهم والاستيعاب: سمك الجروندان بالفرن',
      subtitleFr: 'Recette & Ingrédients du poisson',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 37 و 38',
      readingPassage: {
        imageSrc: '0037.jpg',
        imagePageNumber: 37,
        imageCaptionFr: 'Unité (2) - Préparer un repas : Grondin au four',
        imageCaptionAr: 'صورة الصفحة 37 الأصلية من الكتاب المدرسي: وصفة ومكونات سمك الجروندان بالفرن',
        fullFrenchText: "Grondin au four. Ingrédients : un gros rouget grondin, deux oignons, une grosse tomate, deux carottes, sel, poivre, thym, deux cuillères à soupe d'huile d'olive. Recette : Lavez le poisson. Mettez-le dans un plat, et tout autour mettez la tomate et les oignons coupés. Salez, poivrez, ajoutez le thym et arrosez l'huile d'olive. Faites cuire dans un four à 400 degrés pendant 15 minutes. Servez-le chaud.",
        fullArabicTranslation: "سمك جروندان بالفرن. المقادير: سمكة روجيه جروندان كبيرة، بصلتان، ثمرة طماطم كبيرة، جزرتان، ملح، فلفل، زعتر، ملعقتان كبيرتان من زيت الزيتون. الوصفة: اغسل السمك. ضعه في طبق، وحوله ضع الطماطم والبصل المقطع. تبل بالملح والفلفل، أضف الزعتر ورش زيت الزيتون. اطهه في الفرن على درجة 400 لمدة 15 دقيقة. قدمه ساخناً.",
        sentences: [
          {
            id: 'u2_s1',
            french: "Grondin au four : un gros rouget grondin, deux oignons, une grosse tomate, deux carottes, sel, poivre, thym, deux cuillères à soupe d'huile d'olive.",
            arabic: "سمك جروندان بالفرن: سمكة جروندان كبيرة، بصلتان، طماطم كبيرة، جزرتان، ملح، فلفل، زعتر، ملعقتان زيت زيتون."
          },
          {
            id: 'u2_s2',
            french: "Lavez le poisson.",
            arabic: "اغسل السمك."
          },
          {
            id: 'u2_s3',
            french: "Mettez-le dans un plat, et tout autour mettez la tomate et les oignons coupés.",
            arabic: "ضعه في صينية أو طبق، وحوله ضع الطماطم والبصل المقطع."
          },
          {
            id: 'u2_s4',
            french: "Salez, poivrez, ajoutez le thym et arrosez l'huile d'olive.",
            arabic: "تبل بالملح والفلفل، وأضف الزعتر ورش زيت الزيتون."
          },
          {
            id: 'u2_s5',
            french: "Faites cuire dans un four à 400 degrés pendant 15 minutes. Servez-le chaud.",
            arabic: "اطهه في الفرن على درجة حرارة 400 لمدة 15 دقيقة. قدمه ساخناً."
          }
        ],
        keyVocabulary: [
          { french: 'un rouget grondin', arabic: 'نوع من السمك', partOfSpeech: 'n.m.' },
          { french: 'un oignon', arabic: 'بصل', partOfSpeech: 'n.m.' },
          { french: 'de l\'huile d\'olive', arabic: 'زيت زيتون', partOfSpeech: 'loc.' },
          { french: 'le thym', arabic: 'زعتر', partOfSpeech: 'n.m.' },
          { french: 'un plat', arabic: 'طبق / صينية', partOfSpeech: 'n.m.' },
          { french: 'faire cuire', arabic: 'يسوي / يطهو', partOfSpeech: 'v.' },
          { french: 'servir chaud', arabic: 'يقدم ساخناً', partOfSpeech: 'loc.' }
        ]
      },
      stages: {
        comprendre: {
          titleAr: 'نص وصفة سمك الجروندان (صفحة 37)',
          summaryAr: 'وصفة تحضير طبق سمك الجروندان بالفرن مع الخضراوات وزيت الزيتون وطريقة طهيه.',
          grammarPoints: [
            {
              title: 'المكونات وطريقة الإعداد (صفحة 37)',
              ruleAr: 'Grondin au four :\n• Ingrédients : un gros rouget grondin, deux oignons, une grosse tomate, 2 carottes, sel, poivre, thym, deux cuillères à soupe d\'huile d\'olive.\n• Recette : Lavez le poisson. Mettez-le dans un plat, et tout autour mettez la tomate et les oignons coupés. Salez, poivrez, ajoutez le thym et arrosez l\'huile d\'olive. Faites cuire dans un four à 400 degrés pendant 15 minutes. Servez-le chaud.',
              details: [
                'نوع الوثيقة: وصفة طبق (une recette d\'un plat).',
                'المكونات: سمك جروندان، بصل، طماطم، جزر، ملح، فلفل، زعتر، ملعقتين زيت زيتون.',
                'مدة الطهي: 15 دقيقة في فرن على 400 درجة.',
                'التقديم: يُقدم ساخناً (Servez-le chaud).'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أسئلة الفهم على النص (صفحة 38)',
          descriptionAr: 'نماذج إجابات الأسئلة المباشرة:',
          examples: [
            { french: 'Combien de cuillères d\'huile d\'olive faut-il ? ⟶ Il faut deux cuillères à soupe.', arabic: 'كم ملعقة زيت زيتون نحتاج؟ ⟶ نحتاج ملعقتين كبيرتين.' },
            { french: 'Comment on sert le Grondin au four ? ⟶ On le sert chaud.', arabic: 'كيف يُقدم السمك؟ ⟶ يُقدم ساخناً.' },
            { french: 'Est-ce qu\'on ajoute des tomates ? ⟶ Oui, on ajoute une grosse tomate coupée.', arabic: 'هل نضيف طماطم؟ ⟶ نعم، طماطم كبيرة مقطعة.' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 38 بالكتاب',
          descriptionAr: 'أجب عن أسئلة صح وخطأ:',
          questions: [
            {
              id: 'q_u2_gr_1',
              type: 'multiple-choice',
              instruction: 'صفحة 38 (سؤال A-1): Ce document est une recette d\'un plat.',
              prompt: 'Ce document est une recette d\'un plat.',
              options: ['Vrai (صح)', 'Faux (خطأ)'],
              correctAnswer: 'Vrai (صح)',
              explanation: 'صحيح؛ الوثيقة عبارة عن وصفة إعداد طبق سمك.'
            },
            {
              id: 'q_u2_gr_2',
              type: 'multiple-choice',
              instruction: 'صفحة 38 (سؤال A-2): On peut acheter un rouget grondin à la boulangerie.',
              prompt: 'On peut acheter un rouget grondin à la boulangerie.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ المخبز يبيع الخبز والحلوى وليس السمك (السمك نشتريه من poissonnerie أو le marché).'
            },
            {
              id: 'q_u2_gr_3',
              type: 'multiple-choice',
              instruction: 'صفحة 38 (سؤال A-3): On met du concombre avec le poisson.',
              prompt: 'On met du concombre avec le poisson.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ الوصفة تحتوي على بصل وطماطم وجزر، ولا يوجد خيار (concombre).'
            },
            {
              id: 'q_u2_gr_4',
              type: 'multiple-choice',
              instruction: 'صفحة 38 (سؤال A-6): On arrose le poisson avec l\'huile d\'olive.',
              prompt: 'On arrose le poisson avec l\'huile d\'olive.',
              options: ['Vrai (صح)', 'Faux (خطأ)'],
              correctAnswer: 'Vrai (صح)',
              explanation: 'صحيح؛ نرش السمك بزيت الزيتون.'
            }
          ]
        },
        corriger: {
          titleAr: 'تصحيح الفهم',
          descriptionAr: 'تأكد من التفاصيل الرقمية للوصفة:',
          commonMistakes: [
            {
              mistake: 'الاعتقاد بأن السمك يطهى على 40 درجة (quarante degrés).',
              correction: 'على 400 درجة (quatre cents degrés) لمدة 15 دقيقة.',
              why: 'في الفرن الحراري 400 درجة فهرنهايت.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u2_gr_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 38: كيف يُقدم الطبق؟',
              prompt: 'On sert le grondin au four :',
              options: ['chaud', 'froid', 'tiède'],
              correctAnswer: 'chaud',
              explanation: 'يُقدم ساخناً (chaud).'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي نص الجروندان',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u2_gr_1',
              type: 'multiple-choice',
              instruction: 'كم ملعقة زيت زيتون بالوصفة؟',
              prompt: 'Combien de cuillères à soupe d\'huile d\'olive ?',
              options: ['deux cuillères', 'cinq cuillères', 'une cuillère'],
              correctAnswer: 'deux cuillères',
              explanation: 'ملعقتان كبيرتان.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-taguine',
      unitId: 'unite2',
      unitTitle: 'Unité 2',
      unitTitleAr: 'الوحدة الثانية',
      order: 2,
      title: 'Texte: Taguine de bamia à l\'agneau',
      titleAr: 'نص الفهم والاستيعاب: طاجن بامية باللحم الضأن',
      subtitleFr: 'Compréhension du texte & Recette égyptienne',
      estimatedMinutes: 15,
      bookletPages: 'صفحة 39',
      stages: {
        comprendre: {
          titleAr: 'نص طاجن البامية باللحم (صفحة 39)',
          summaryAr: 'طريقة إعداد طاجن بامية بلحم الضأن، المقادير والخطوات بدقة.',
          grammarPoints: [
            {
              title: 'المقادير والخطوات (صفحة 39)',
              ruleAr: 'Taguine de bamia à l\'agneau :\n• Les ingrédients : 1 kg de bamia, 1/2 kg de tomates, 1/2 kg de viande de mouton en morceaux, 100 grammes de beurre, 2 oignons, 5 gousses d\'ail, sel, poivre.\n• La recette : Préparez les légumes. Faites cuire la viande avec l\'oignon et le beurre pendant 30 minutes. Ajoutez les tomates écrasées, laissez bouillir puis ajoutez le bamia. Laissez cuire pendant 15 minutes, ajoutez l\'ail haché. Versez le tout dans un taguine et mettez-le au four pendant 15 minutes.',
            }
          ]
        },
        exemple: {
          titleAr: 'الأوقات والمقادير الرئيسية',
          descriptionAr: 'احفظ الأرقام الواردة بالنص:',
          examples: [
            { french: '1/2 kg de viande de mouton (لحم ضأن)', arabic: 'نصف كيلو لحم ضأن' },
            { french: '2 oignons (بصلتان فقط)', arabic: '2 بصل' },
            { french: '5 gousses d\'ail haché (5 فصوص ثوم)', arabic: '5 فصوص ثوم مفروم' },
            { french: 'Au four pendant 15 minutes', arabic: 'في الفرن لمدة 15 دقيقة' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 39 بالكتاب',
          descriptionAr: 'اختر الإجابة الصحيحة وضع علامة صح أو خطأ:',
          questions: [
            {
              id: 'q_u2_tag_1',
              type: 'multiple-choice',
              instruction: 'صفحة 39 (سؤال A-1): Pour faire ce taguine, il faut de la viande ..........',
              prompt: 'Pour faire ce taguine, il faut de la viande :',
              options: ['de mouton', 'de canard', 'de volaille'],
              correctAnswer: 'de mouton',
              explanation: 'لحم ضأن (viande de mouton).'
            },
            {
              id: 'q_u2_tag_2',
              type: 'multiple-choice',
              instruction: 'صفحة 39 (سؤال A-2): Pour faire ce taguine, il faut ajouter ..........',
              prompt: 'Il faut ajouter :',
              options: ['l’ail haché', 'les pommes de terre', 'le poisson'],
              correctAnswer: 'l’ail haché',
              explanation: 'الثوم المفروم (l’ail haché).'
            },
            {
              id: 'q_u2_tag_3',
              type: 'multiple-choice',
              instruction: 'صفحة 39 (سؤال A-3): Il faut mettre le taguine au four pendant .......... minutes.',
              prompt: 'Au four pendant :',
              options: ['quinze', 'trente', 'cinquante'],
              correctAnswer: 'quinze',
              explanation: '15 دقيقة في الفرن (quinze minutes).'
            },
            {
              id: 'q_u2_tag_4',
              type: 'multiple-choice',
              instruction: 'صفحة 39 (سؤال B-2): Il faut cinq oignons pour faire ce taguine.',
              prompt: 'Il faut cinq oignons pour faire ce taguine.',
              options: ['Faux (خطأ)', 'Vrai (صح)'],
              correctAnswer: 'Faux (خطأ)',
              explanation: 'خطأ؛ الوصفة تطلب بصلتين فقط (2 oignons).'
            }
          ]
        },
        corriger: {
          titleAr: 'تثبيت خطوات الوصفة',
          descriptionAr: 'انتبه للمكونات:',
          commonMistakes: [
            {
              mistake: 'الاعتقاد بأنه يتم استخدام زيت بدلاً من الزبدة.',
              correction: 'الوصفة تحدد 100 جرام زبدة (100 grammes de beurre).',
              why: 'لتحمير اللحم والبصل.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u2_tag_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 39 (سؤال B-1): Pour faire ce taguine, il faut du beurre.',
              prompt: 'هل العبارة صحيحة؟',
              options: ['Vrai (صح)', 'Faux (خطأ)'],
              correctAnswer: 'Vrai (صح)',
              explanation: 'صحيح؛ 100 جرام زبدة.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي طاجن البامية',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u2_tag_1',
              type: 'multiple-choice',
              instruction: 'كم كمية البامية المطلوبة؟',
              prompt: 'Combien de bamia faut-il ?',
              options: ['1 kg', '1/2 kg', '2 kg'],
              correctAnswer: '1 kg',
              explanation: '1 كجم بامية.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-articles-partitifs',
      unitId: 'unite2',
      unitTitle: 'Unité 2',
      unitTitleAr: 'الوحدة الثانية',
      order: 3,
      title: 'Les Articles Partitifs',
      titleAr: 'أدوات التجزئة مع المأكولات والمشروبات وتحويلها بالنفي',
      subtitleFr: 'Du, De la, De l\', Des & transformation en de/d\'',
      estimatedMinutes: 20,
      bookletPages: 'صفحات 41 و 42',
      stages: {
        comprendre: {
          titleAr: 'جدول أدوات التجزئة الكامل (صفحة 41)',
          summaryAr: 'تستخدم أدوات التجزئة للتعبير عن كمية غير محددة من الأطعمة والمشروبات مع أفعال (manger, boire, acheter, prendre, vouloir, mettre).',
          grammarPoints: [
            {
              title: 'تصنيف أدوات التجزئة (صفحة 41)',
              ruleAr: 'أدوات التجزئة والأطعمة المقررة في الكتاب:',
              table: {
                headers: ['الأداة', 'النوع والعدد', 'أمثلة من الكتاب'],
                rows: [
                  ['Du', 'مفرد مذكر', 'du pain, du fromage, du beurre, du riz, du sucre, du chocolat, du yaourt, du gâteau, du sel, du poivre, du poulet, du poisson, du veau, du vinaigre, du citron, du thé, du café, du jus, du coca, du lait'],
                  ['De la', 'مفرد مؤنث', 'de la viande, de la salade, de la glace, de la confiture, de la crème, de la farine, de la limonade, de la crêpe, de la soupe'],
                  ['De l\'', 'مفرد مبدوء بحرف متحرك', 'de l\'eau, de l\'huile, de l\'oignon, de l\'ail, de l\'agneau, de l\'escalope, de l\'orangeade'],
                  ['Des', 'جمع بنوعيه', 'des fruits, des frites, des œufs, des pâtes, des pommes, des légumes, des tomates, des biftecks, des pommes de terre, des haricots verts, des pêches, des poires']
                ]
              }
            },
            {
              title: 'قاعدة النفي الهامة (Attention - صفحة 41)',
              ruleAr: 'عند تحويل الجملة إلى النفي (ne ... pas)، تتحول كل أدوات التجزئة (du, de la, de l\', des) إلى (de) أو (d\') أمام الحرف المتحرك:',
              details: [
                'Tu manges du poisson ? ⟶ Non, je ne mange pas de poisson.',
                'Tu bois de l\'eau ? ⟶ Non, je ne bois pas d\'eau.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة من تدريبات الكتاب (صفحة 42)',
          descriptionAr: 'تطبيق عملي:',
          examples: [
            { french: 'Elle achète des légumes, de l\'huile, du fromage et du riz.', arabic: 'هي تشتري خضراوات (جمع: des)، زيتاً (متحرك: de l\')، جبناً (مذكر: du)، وأرزاً (مذكر: du).' },
            { french: 'Elle commande de la limonade avec des gâteaux.', arabic: 'هي تطلب ليمونادة مع كعك.' },
            { french: 'Mais elle n\'achète pas de beurre.', arabic: 'لكنها لا تشتري زبدة (تحولت du إلى de بسبب النفي).' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 42 بالكتاب',
          descriptionAr: 'اختر أداة التجزئة الصحيحة أو de عند النفي:',
          questions: [
            {
              id: 'q_u2_art_1',
              type: 'multiple-choice',
              instruction: 'صفحة 42: Elle achète .......... fromage.',
              prompt: 'Elle achète .......... fromage.',
              options: ['du', 'de la', 'des'],
              correctAnswer: 'du',
              explanation: 'fromage مفرد مذكر ⟶ du.'
            },
            {
              id: 'q_u2_art_2',
              type: 'multiple-choice',
              instruction: 'صفحة 42: Elle achète .......... huile.',
              prompt: 'Elle achète .......... huile.',
              options: ['de l\'', 'du', 'de la'],
              correctAnswer: 'de l\'',
              explanation: 'huile مفرد مبدوء بحرف متحرك (h) ⟶ de l\'.'
            },
            {
              id: 'q_u2_art_3',
              type: 'multiple-choice',
              instruction: 'صفحة 42: Elle n\'achète pas .......... beurre.',
              prompt: 'Mais elle n\'achète pas .......... beurre.',
              options: ['de', 'du', 'des'],
              correctAnswer: 'de',
              explanation: 'بسبب النفي ne ... pas تتحول du إلى de.'
            },
            {
              id: 'q_u2_art_4',
              type: 'multiple-choice',
              instruction: 'صفحة 42 (حوار السوبرماركت): Le vendeur : On n\'a pas .......... beurre.',
              prompt: 'On n\'a pas .......... beurre.',
              options: ['de', 'du', 'de la'],
              correctAnswer: 'de',
              explanation: 'نفي n\'a pas ⟶ de.'
            }
          ]
        },
        corriger: {
          titleAr: 'تجنب خطأ التجزئة في النفي',
          descriptionAr: 'قاعدة أساسية للامتحان:',
          commonMistakes: [
            {
              mistake: 'ترك du أو de la في الجملة المنفية (مثل: Je ne mange pas du poisson).',
              correction: 'Je ne mange pas de poisson.',
              why: 'أدوات التجزئة تصبح de / d\' دائماً بعد النفي.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u2_art_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 42: Je ne bois pas .......... eau.',
              prompt: 'Je ne bois pas .......... eau.',
              options: ['d\'', 'de l\'', 'de'],
              correctAnswer: 'd\'',
              explanation: 'في النفي أمام حرف متحرك ⟶ d\'.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي أدوات التجزئة',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u2_art_1',
              type: 'multiple-choice',
              instruction: 'صفحة 42: Au restaurant, on peut manger .......... salade.',
              prompt: 'on peut manger .......... salade.',
              options: ['de la', 'du', 'des'],
              correctAnswer: 'de la',
              explanation: 'salade مفرد مؤنث ⟶ de la.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-pronoms-relatifs',
      unitId: 'unite2',
      unitTitle: 'Unité 2',
      unitTitleAr: 'الوحدة الثانية',
      order: 4,
      title: 'Les Pronoms Relatifs (Qui - Que - Où)',
      titleAr: 'ضمائر الوصل: Qui (فاعل) و Que (مفعول) و Où (مكان)',
      subtitleFr: 'Relier les phrases par un pronom relatif',
      estimatedMinutes: 20,
      bookletPages: 'صفحات 43، 44، 45، 56، 57',
      stages: {
        comprendre: {
          titleAr: 'قواعد ضمائر الوصل بالتفصيل (صفحة 43)',
          summaryAr: 'تربط ضمائر الوصل بين جملتين لحذف الكلمة المكررة في الجملة الثانية دون تكرار.',
          grammarPoints: [
            {
              title: '1. الضمير Qui (الذي / التي للفاعل)',
              ruleAr: 'يحل محل كلمة مكررة في الجملة الثانية تقع فاعلاً (Sujet) أو ضميراً يعود عليه (il, elle, ils, elles). ويأتي بعده فعل مباشرة.',
              details: [
                'L\'orange est un fruit. Ce fruit donne du jus.',
                '⟶ L\'orange est un fruit qui donne du jus. (البرتقال فاكهة تعطي عصيراً)'
              ]
            },
            {
              title: '2. الضمير Que / Qu\' (الذي / التي للمفعول المباشر)',
              ruleAr: 'يحل محل كلمة مكررة في الجملة الثانية تقع مفعولاً به مباشراً (C.O.D) غير مسبوق بحرف جر. ويأتي بعده فاعل + فعل.',
              details: [
                'Les enfants aiment le gâteau. La mère prépare ce gâteau.',
                '⟶ Les enfants aiment le gâteau que la mère prépare. (يحب الأطفال الكعكة التي تعدها الأم)'
              ]
            },
            {
              title: '3. الضمير Où (حيث / الذي فيه للمكان أو الزمان)',
              ruleAr: 'يحل محل مفعول غير مباشر للمكان مسبوق بحرف جر (à, au, aux, dans, en...).',
              details: [
                'Voilà l\'usine. Mon père travaille dans cette usine.',
                '⟶ Voilà l\'usine où mon père travaille. (ها هو المصنع حيث يعمل أبي)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة محلولة من تدريبات الكتاب (صفحة 44 و 45)',
          descriptionAr: 'شاهد كيفية ربط الجملتين:',
          examples: [
            { french: 'Mon frère aime les fruits. Maman achète ces fruits. ⟶ Mon frère aime les fruits que maman achète.', arabic: 'أخي يحب الفواكه التي تشتريها أمي (Que مفعول).' },
            { french: 'C\'est ma ville. J\'habite dans cette ville. ⟶ C\'est ma ville où j\'habite.', arabic: 'هذه مدينتي حيث أعيش (Où مكان).' },
            { french: 'Voilà le cahier. Le cahier est carré. ⟶ Voilà le cahier qui est carré.', arabic: 'ها هو الكشكول الذي يكون مربعاً (Qui فاعل).' },
            { french: 'Paris est une belle ville. Cette ville est jolie. ⟶ Paris est une belle ville qui est jolie.', arabic: 'باريس مدينة جميلة التي تكون لطيفة (Qui فاعل).' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 44 و 45 و 56 بالكتاب',
          descriptionAr: 'اختر ضمير الوصل المناسب (qui / que / où):',
          questions: [
            {
              id: 'q_u2_rel_1',
              type: 'multiple-choice',
              instruction: 'صفحة 44 (سؤال 1): Mon frère aime les fruits, maman achète les fruits.',
              prompt: 'Mon frère aime les fruits .......... maman achète.',
              options: ['que', 'qui', 'où'],
              correctAnswer: 'que',
              explanation: 'les fruits مفعول به مباشر في الجملة الثانية ⟶ que.'
            },
            {
              id: 'q_u2_rel_2',
              type: 'multiple-choice',
              instruction: 'صفحة 44 (سؤال 2): C\'est ma ville, j\'habite dans cette ville.',
              prompt: 'C\'est ma ville .......... j\'habite.',
              options: ['où', 'que', 'qui'],
              correctAnswer: 'où',
              explanation: 'dans cette ville تدل على مكان مسبوق بحرف جر ⟶ où.'
            },
            {
              id: 'q_u2_rel_3',
              type: 'multiple-choice',
              instruction: 'صفحة 44 (سؤال 4): Voilà le cahier, le cahier est carré.',
              prompt: 'Voilà le cahier .......... est carré.',
              options: ['qui', 'que', 'où'],
              correctAnswer: 'qui',
              explanation: 'le cahier فاعل في الجملة الثانية ويتبعه فعل est ⟶ qui.'
            },
            {
              id: 'q_u2_rel_4',
              type: 'multiple-choice',
              instruction: 'صفحة 45 (سؤال 9): Je préfère le gâteau. Ce gâteau est délicieux.',
              prompt: 'Je préfère le gâteau .......... est délicieux.',
              options: ['qui', 'que', 'où'],
              correctAnswer: 'qui',
              explanation: 'يحل محل فاعل ويليه فعل ⟶ qui.'
            },
            {
              id: 'q_u2_rel_5',
              type: 'multiple-choice',
              instruction: 'صفحة 45 (سؤال 10): Ma mère a acheté une robe. Je n\'aime pas cette robe.',
              prompt: 'Ma mère a acheté une robe .......... je n\'aime pas.',
              options: ['que', 'qui', 'où'],
              correctAnswer: 'que',
              explanation: 'cette robe مفعول به مباشر ⟶ que.'
            }
          ]
        },
        corriger: {
          titleAr: 'كيف تفرق بين Qui و Que في الامتحان؟',
          descriptionAr: 'علامة سريعة ومضمونة 100%:',
          commonMistakes: [
            {
              mistake: 'وضع que بدلاً من qui قبل الفعل.',
              correction: 'انظر لما بعد النقط: إذا جاء بعد النقط فعل (Verbe) ⟶ اختر Qui، وإذا جاء بعد النقط فاعل (اسم أو ضمير مثل je, tu, il...) ⟶ اختر Que.',
              why: 'لأن Qui تحل محل فاعل فيأتي بعدها الفعل، بينما Que تحل محل مفعول فيأتي بعدها الفاعل والفعل.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u2_rel_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 56 (سؤال 8): Je mange dans ce restaurant. Ce restaurant sert de bons repas.',
              prompt: 'Je mange dans ce restaurant .......... sert de bons repas.',
              options: ['qui', 'que', 'où'],
              correctAnswer: 'qui',
              explanation: 'بعد النقط يوجد فعل (sert) ⟶ qui.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي ضمائر الوصل',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u2_rel_1',
              type: 'multiple-choice',
              instruction: 'صفحة 57 (سؤال 11): Voici l\'école. Je vais à l\'école pour étudier.',
              prompt: 'Voici l\'école .......... je vais pour étudier.',
              options: ['où', 'que', 'qui'],
              correctAnswer: 'où',
              explanation: 'مكان مسبوق بحرف جر à l\'école ⟶ où.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-situations',
      unitId: 'unite2',
      unitTitle: 'Unité 2',
      unitTitleAr: 'الوحدة الثانية',
      order: 5,
      title: 'Situations de l\'Unité 2',
      titleAr: 'مواقف الوحدة الثانية: المطعم والمشتريات والطهي',
      subtitleFr: 'Au café, chez le fruitier, chez l\'épicier, au restaurant',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 46، 47، 60',
      stages: {
        comprendre: {
          titleAr: 'مواقف الوحدة الثانية المقررة (صفحات 46-47)',
          summaryAr: 'مواقف طلب المشروبات والمأكولات في المقهى وعند بائع الفاكهة والبقال والمطعم.',
          grammarPoints: [
            {
              title: 'المواقف الأساسية وإجاباتها النموذجية',
              ruleAr: 'نماذج مقررة بالكتاب:',
              details: [
                'Dans un café, tu demandes ta boisson préférée ⟶ "Un jus d\'orange, s\'il vous plaît!"',
                'Tu es chez le fruitier ⟶ "Donnez-moi un kilo de bananes!"',
                'Tu es chez l\'épicier ⟶ "Donnez-moi un paquet de thé et un kilo de sucre."',
                'Au restaurant, tu demandes au garçon le menu ⟶ "Apportez-moi le menu S.V.P."',
                'Ton ami te demande combien de repas tu prends par jour ⟶ "Je prends trois repas."',
                'La mère veut faire des gâteaux, elle dit à sa fille ⟶ "Apporte-moi de la farine, des œufs et de la crème."'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'نماذج المواقف',
          descriptionAr: 'لاحظ السياق والمكان:',
          examples: [
            { french: 'Chez le fruitier : "Donnez-moi un kilo de bananes!"', arabic: 'عند بائع الفاكهة: "أعطني كيلو موز!"' },
            { french: 'Au restaurant : "Apportez-moi le menu S.V.P."', arabic: 'في المطعم: "أحضر لي قائمة الطعام من فضلك."' },
            { french: 'Nombre de repas : "Je prends trois repas par jour."', arabic: 'عدد الوجبات: "أتناول ثلاث وجبات يومياً."' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 46 و 47 بالكتاب',
          descriptionAr: 'اختر الإجابة الصحيحة:',
          questions: [
            {
              id: 'q_u2_sit_1',
              type: 'multiple-choice',
              instruction: 'صفحة 46 (سؤال 1): Dans un café, tu demandes ta boisson préférée ; tu dis :',
              prompt: 'Dans un café, tu demandes ta boisson préférée ; tu dis :',
              options: ['Un jus d\'orange, s\'il vous plaît !', 'Je voudrais du riz, s\'il vous plaît !', 'Qu\'est-ce que vous voulez boire ?'],
              correctAnswer: 'Un jus d\'orange, s\'il vous plaît !',
              explanation: 'تطلب مشروبك المفضل في المقهى: عصير برتقال من فضلك.'
            },
            {
              id: 'q_u2_sit_2',
              type: 'multiple-choice',
              instruction: 'صفحة 46 (سؤال 2): Tu es chez le fruitier ; tu dis :',
              prompt: 'Tu es chez le fruitier ; tu dis :',
              options: ['Donnez-moi un kilo de bananes !', 'Combien coûte un kilo de Pois ?', 'Je voudrais de la salade verte.'],
              correctAnswer: 'Donnez-moi un kilo de bananes !',
              explanation: 'عند بائع الفواكه تطلب فواكه مثل الموز (bananes).'
            },
            {
              id: 'q_u2_sit_3',
              type: 'multiple-choice',
              instruction: 'صفحة 47 (سؤال 6): Au restaurant, tu demandes au garçon le menu : tu lui dis :',
              prompt: 'Au restaurant, tu demandes au garçon le menu : tu lui dis :',
              options: ['Apportez-moi le menu S.V.P.', 'Voilà le menu.', 'Que voulez-vous ?'],
              correctAnswer: 'Apportez-moi le menu S.V.P.',
              explanation: 'تطلب قائمة الطعام بأدب: أحضر لي المنيو من فضلك.'
            },
            {
              id: 'q_u2_sit_4',
              type: 'multiple-choice',
              instruction: 'صفحة 47 (سؤال 8): La mère veut faire des gâteaux, elle dit à sa fille :',
              prompt: 'La mère veut faire des gâteaux, elle dit à sa fille :',
              options: ['Apporte-moi de la farine, des œufs et de la crème.', 'Apporte-moi des tomates et des concombres.', 'Apporte-moi du poivre et du sel.'],
              correctAnswer: 'Apportez-moi de la farine, des œufs et de la crème.',
              explanation: 'لصنع الكعك نحتاج دقيقاً وبيضا وكريمة.'
            }
          ]
        },
        corriger: {
          titleAr: 'تثبيت مواقف الأماكن',
          descriptionAr: 'تذكر البائع والسلعة:',
          commonMistakes: [
            {
              mistake: 'طلب خضراوات عند بائع الفواكه (fruitier).',
              correction: 'عند الفكهاني نطلب bananes / pommes / pêches / poires.',
              why: 'لأن البائع مخصص للفواكه.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_u2_sit_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 46 (سؤال 3): Tu es chez l\'épicier; tu lui dis :',
              prompt: 'Tu es chez l\'épicier; tu lui dis :',
              options: ['Donnez-moi un paquet de thé et un kilo de sucre.', 'Je voudrais deux kilos d\'oranges.', 'Combien coûte un kilo de tomates?'],
              correctAnswer: 'Donnez-moi un paquet de thé et un kilo de sucre.',
              explanation: 'عند البقال (l\'épicier) نشتري الشاي والسكر.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي مواقف الوحدة الثانية',
          descriptionAr: 'أجب في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_u2_sit_1',
              type: 'multiple-choice',
              instruction: 'صفحة 47 (سؤال 7): Ton ami te demande combien de repas tu prends par jour, tu dis :',
              prompt: 'Tu dis :',
              options: ['Je prends trois repas.', 'Combien coûte ce repas ?', 'J\'aime les fruits.'],
              correctAnswer: 'Je prends trois repas.',
              explanation: 'أتناول ثلاث وجبات.'
            }
          ]
        }
      }
    }
  ]
};
