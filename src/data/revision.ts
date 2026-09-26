import { Lesson, UnitSection } from '../types';

export const revisionSection: UnitSection = {
  id: 'revision',
  order: 1,
  titleFr: 'Révision Générale',
  titleAr: 'المراجعة العامة التأسيسية',
  descriptionAr: 'مراجعة شاملة لأساسيات وقواعد ومنهج اللغة الفرنسية المقررة: تكوين الجملة، زمن المضارع، زمن الماضي المركب، الأعداد، وصيغة النفي.',
  badgeIcon: '📚',
  vocabulary: [],
  lessons: [
    {
      id: 'rev-phrase',
      unitId: 'revision',
      unitTitle: 'Révision',
      unitTitleAr: 'المراجعة العامة',
      order: 1,
      title: 'La Phrase',
      titleAr: 'تكوين الجملة في اللغة الفرنسية',
      subtitleFr: 'Sujet + Verbe + Complément',
      estimatedMinutes: 10,
      bookletPages: 'صفحة 65',
      stages: {
        comprendre: {
          titleAr: 'افهم تكوين الجملة الفرنسية',
          summaryAr: 'تتكون الجملة في اللغة الفرنسية من ثلاثة عناصر أساسية: الفاعل (Sujet)، الفعل (Verbe)، والمفعول أو التكملة (Complément).',
          grammarPoints: [
            {
              title: '1. الفاعل (Le Sujet)',
              ruleAr: 'قد يكون اسماً علماً (Ahmed, Mona, Sara) أو اسماً عاماً (le sac, la table) أو ضمير فاعل (Je, Tu, Il, Elle, Nous, Vous, Ils, Elles).',
              details: ['Je (أنا)', 'Tu (أنتَ / أنتِ)', 'Il (هو)', 'Elle (هي)', 'Nous (نحن)', 'Vous (أنتم / حضرتك)', 'Ils (هم)', 'Elles (هن)']
            },
            {
              title: '2. الفعل (Le Verbe)',
              ruleAr: 'ينقسم الفعل إلى 3 مجموعات رئيسية بحسب نهايته في المصدر:',
              table: {
                headers: ['المجموعة', 'النهاية في المصدر', 'أمثلة'],
                rows: [
                  ['1ère groupe', '-er', 'Marcher, Parler, Regarder, Manger'],
                  ['2ème groupe', '-ir', 'Finir, Choisir, Obéir, Réussir'],
                  ['3ème groupe (Irréguliers)', '-re / -oir / -ir', 'Être, Avoir, Faire, Aller, Prendre']
                ]
              }
            },
            {
              title: '3. المفعول (Le Complément)',
              ruleAr: 'يكمل معنى الجملة وقد يكون مفعولاً مباشراً أو جاراً ومجروراً (à l\'école, une pomme).',
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة توضيحية من الكتاب',
          descriptionAr: 'لاحظ ترتيب الكلمات في الجملة الفرنسية:',
          examples: [
            {
              french: 'Je vais à l\'école.',
              arabic: 'أنا أذهب إلى المدرسة.',
              note: 'Sujet: Je | Verbe: vais | Complément: à l\'école'
            },
            {
              french: 'Sara mange une pomme.',
              arabic: 'سارة تأكل تفاحة.',
              note: 'Sujet: Sara (nom) | Verbe: mange | Complément: une pomme'
            },
            {
              french: 'Ahmed écoute la chanson.',
              arabic: 'أحمد يستمع إلى الأغنية.',
              note: 'Sujet: Ahmed | Verbe: écoute | Complément: la chanson'
            }
          ]
        },
        pratiquer: {
          titleAr: 'تدريب تفاعلي',
          descriptionAr: 'حدد أركان الجملة أو اختر الإجابة الصحيحة:',
          questions: [
            {
              id: 'q_phrase_1',
              type: 'multiple-choice',
              instruction: 'حدد الفاعل في الجملة التالية:',
              prompt: '"Sara mange une pomme"',
              options: ['Sara', 'mange', 'une pomme'],
              correctAnswer: 'Sara',
              explanation: 'Sara هي الفاعل (Sujet) وهو اسم علم مفرد مؤنث.'
            },
            {
              id: 'q_phrase_2',
              type: 'multiple-choice',
              instruction: 'حدد الفعل في الجملة التالية:',
              prompt: '"Je vais à l\'école"',
              options: ['Je', 'vais', 'à l\'école'],
              correctAnswer: 'vais',
              explanation: 'vais هو فعل الجملة (Verbe aller).'
            },
            {
              id: 'q_phrase_3',
              type: 'multiple-choice',
              instruction: 'إلى أي مجموعة ينتمي الفعل "Parler"؟',
              prompt: 'Le verbe "Parler" appartient au :',
              options: ['1er groupe (-er)', '2ème groupe (-ir)', '3ème groupe (irrégulier)'],
              correctAnswer: '1er groupe (-er)',
              explanation: 'الأفعال المنتهية بـ -er تنتمي للمجموعة الأولى.'
            }
          ]
        },
        corriger: {
          titleAr: 'صحح أخطاءك ومراجعة النقاط الصعبة',
          descriptionAr: 'أخطاء شائعة يقع فيها الطلاب:',
          commonMistakes: [
            {
              mistake: 'وضع الفعل قبل الفاعل كما في العربية: Vais je à l\'école.',
              correction: 'Je vais à l\'école.',
              why: 'في اللغة الفرنسية، تبدأ الجملة الخبرية بالفاعل دائماً ثم الفعل.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_phrase_rem_1',
              type: 'multiple-choice',
              instruction: 'اختر الترتيب الصحيح للجملة الفرنسية:',
              prompt: 'أي جملة صحيحة التركيب؟',
              options: ['Ali regarde la télé.', 'Regarde Ali la télé.', 'La télé Ali regarde.'],
              correctAnswer: 'Ali regarde la télé.',
              explanation: 'الترتيب القياسي هو: فاعل (Ali) + فعل (regarde) + مفعول (la télé).'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي إتقان تكوين الجملة',
          descriptionAr: 'أجب عن التحدي في أسرع وقت لإحراز 3 نجوم!',
          timeLimitSeconds: 60,
          challengeQuestions: [
            {
              id: 'def_phrase_1',
              type: 'multiple-choice',
              instruction: 'اختر الضمير المناسب لتعويض (Ali et moi):',
              prompt: 'Ali et moi = ..........',
              options: ['Nous', 'Vous', 'Ils'],
              correctAnswer: 'Nous',
              explanation: 'اسم + moi = الضمير Nous (نحن).'
            },
            {
              id: 'def_phrase_2',
              type: 'multiple-choice',
              instruction: 'اختر الضمير المناسب لتعويض (Ali et toi):',
              prompt: 'Ali et toi = ..........',
              options: ['Vous', 'Nous', 'Ils'],
              correctAnswer: 'Vous',
              explanation: 'اسم + toi = الضمير Vous (أنتم).'
            }
          ]
        }
      }
    },
    {
      id: 'rev-present',
      unitId: 'revision',
      unitTitle: 'Révision',
      unitTitleAr: 'المراجعة العامة',
      order: 2,
      title: 'Le Présent de l\'indicatif',
      titleAr: 'زمن المضارع للمجموعات الثلاث والأفعال الشاذة',
      subtitleFr: '1er, 2ème et 3ème groupes',
      estimatedMinutes: 15,
      bookletPages: 'صفحات 5، 6، 55، 66',
      stages: {
        comprendre: {
          titleAr: 'تصريف الأفعال في زمن المضارع',
          summaryAr: 'المضارع يعبر عن حدث يقع الآن في الحاضر أو عادة متكررة (Maintenant, Aujourd\'hui, Chaque jour).',
          grammarPoints: [
            {
              title: '1. المجموعة الأولى (تنتهي بـ -er مثل Marcher, Parler, Regarder)',
              ruleAr: 'نحذف -er ونضيف النهايات: Je (-e), Tu (-es), Il/Elle (-e), Nous (-ons), Vous (-ez), Ils/Elles (-ent).',
              table: {
                headers: ['الضمير', 'النهاية', 'تصريف verbe Marcher'],
                rows: [
                  ['Je', '-e', 'marche'],
                  ['Tu', '-es', 'marches'],
                  ['Il / Elle', '-e', 'marche'],
                  ['Nous', '-ons', 'marchons'],
                  ['Vous', '-ez', 'marchez'],
                  ['Ils / Elles', '-ent', 'marchent']
                ]
              }
            },
            {
              title: '2. المجموعة الثانية (تنتهي بـ -ir مثل Finir, Choisir)',
              ruleAr: 'نحذف -ir ونضيف النهايات: -is, -is, -it, -issons, -issez, -issent.',
              table: {
                headers: ['الضمير', 'النهاية', 'تصريف verbe Finir'],
                rows: [
                  ['Je', '-is', 'finis'],
                  ['Tu', '-is', 'finis'],
                  ['Il / Elle', '-it', 'finit'],
                  ['Nous', '-issons', 'finissons'],
                  ['Vous', '-issez', 'finissez'],
                  ['Ils / Elles', '-issent', 'finissent']
                ]
              }
            },
            {
              title: '3. أفعال المجموعة الثالثة الشاذة الأساسية (Aller, Avoir, Faire, Être)',
              ruleAr: 'أفعال تحفظ كما هي:',
              table: {
                headers: ['الضمير', 'Aller (يذهب)', 'Avoir (يملك)', 'Faire (يعمل)', 'Être (يكون)'],
                rows: [
                  ['Je / J\'', 'vais', 'ai', 'fais', 'suis'],
                  ['Tu', 'vas', 'as', 'fais', 'es'],
                  ['Il / Elle', 'va', 'a', 'fait', 'est'],
                  ['Nous', 'allons', 'avons', 'faisons', 'sommes'],
                  ['Vous', 'allez', 'avez', 'faites', 'êtes'],
                  ['Ils / Elles', 'vont', 'ont', 'font', 'sont']
                ]
              }
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة عملية من تدريبات الكتاب (صفحة 5 و 6)',
          descriptionAr: 'أمثلة الجمل في زمن المضارع مع الكلمات الدالة:',
          examples: [
            {
              french: 'Maintenant, le professeur explique la leçon.',
              arabic: 'الآن، المعلم يشرح الدرس.',
              note: 'le professeur = Il -> verbe expliquer -> explique'
            },
            {
              french: 'Aujourd\'hui, nous allons au stade.',
              arabic: 'اليوم، نحن نذهب إلى الاستاد.',
              note: 'Nous + verbe aller -> allons'
            },
            {
              french: 'Chaque jour, ils finissent leurs devoirs.',
              arabic: 'كل يوم، هم ينهون واجباتهم.',
              note: 'ils + verbe finir -> finissent'
            },
            {
              french: 'J\'ai un livre. / Tu es content.',
              arabic: 'أنا أملك كتاباً. / أنت سعيد.',
              note: 'avoir / être'
            }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 5 و 6 و 55 من الكتاب',
          descriptionAr: 'اختر التصريف الصحيح للفعل:',
          questions: [
            {
              id: 'q_pres_1',
              type: 'multiple-choice',
              instruction: 'صفحة 6 (سؤال 1): اختر الإجابة الصحيحة:',
              prompt: 'Maintenant, le professeur .................... la leçon.',
              options: ['expliquez', 'explique', 'expliques'],
              correctAnswer: 'explique',
              explanation: 'le professeur مفرد مذكر يعادل الضمير Il، ويأخذ النهاية -e في المجموعة الأولى.'
            },
            {
              id: 'q_pres_2',
              type: 'multiple-choice',
              instruction: 'صفحة 6 (سؤال 2): اختر الإجابة الصحيحة:',
              prompt: 'Aujourd\'hui, Nous .................... au stade.',
              options: ['aller', 'allez', 'allons'],
              correctAnswer: 'allons',
              explanation: 'مع الضمير Nous يصرف فعل aller إلى allons.'
            },
            {
              id: 'q_pres_3',
              type: 'multiple-choice',
              instruction: 'صفحة 6 (سؤال 3): اختر الإجابة الصحيحة:',
              prompt: 'Chaque jour, ils .................... leurs devoirs.',
              options: ['finis', 'finissent', 'finissons'],
              correctAnswer: 'finissent',
              explanation: 'مع الضمير ils في المجموعة الثانية نضع النهاية -issent -> finissent.'
            },
            {
              id: 'q_pres_4',
              type: 'multiple-choice',
              instruction: 'صفحة 6 (سؤال 4): اختر الإجابة الصحيحة:',
              prompt: 'Chaque matin, je .................... prendre le petit déjeuner tôt.',
              options: ['préfère', 'préfères', 'préférez'],
              correctAnswer: 'préfère',
              explanation: 'مع الضمير Je نأخذ النهاية -e -> préfère.'
            },
            {
              id: 'q_pres_5',
              type: 'multiple-choice',
              instruction: 'صفحة 5 (سؤال 4): Mets au présent:',
              prompt: 'Nous .................... des gâteaux. (manger)',
              options: ['mangeons', 'mangons', 'mangez'],
              correctAnswer: 'mangeons',
              explanation: 'مع أفعال -ger نضع حرف e قبل ons للمحافظة على نطق الجيم مع Nous: mangeons.'
            },
            {
              id: 'q_pres_6',
              type: 'multiple-choice',
              instruction: 'صفحة 5 (سؤال 8): Mets au présent:',
              prompt: 'ils .................... 16 ans. (avoir)',
              options: ['ont', 'sont', 'avons'],
              correctAnswer: 'ont',
              explanation: 'تصريف verbe avoir مع ils هو ont.'
            }
          ]
        },
        corriger: {
          titleAr: 'أخطاء شائعة في تصريف المضارع',
          descriptionAr: 'تجنب هذه الأخطاء المتكررة:',
          commonMistakes: [
            {
              mistake: 'الخلط بين vous faites و vous faisez.',
              correction: 'Vous faites (فعل faire شاذ مع vous).',
              why: 'فعل faire مع vous يأخذ faites، ومثله dire -> dites.'
            },
            {
              mistake: 'الخلط بين ils ont (avoir) و ils sont (être).',
              correction: 'Ils ont 16 ans (للعمر نستخدم avoir).',
              why: 'للتعبير عن السن نستخدم verbe avoir وليس être.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_pres_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 55 (سؤال 7): اختر التصريف الصحيح:',
              prompt: 'Chaque jour, vous .................... le devoir. (faire)',
              options: ['faites', 'faisez', 'faisons'],
              correctAnswer: 'faites',
              explanation: 'تصريف فعل faire مع vous هو vous faites.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي سرعة تصريف المضارع',
          descriptionAr: 'أجب بدقة وسرعة خلال 60 ثانية:',
          timeLimitSeconds: 60,
          challengeQuestions: [
            {
              id: 'def_pres_1',
              type: 'multiple-choice',
              instruction: 'صفحة 6 (سؤال 7): اختر الإجابة:',
              prompt: 'Elle .................... 15 ans.',
              options: ['a', 'as', 'ai'],
              correctAnswer: 'a',
              explanation: 'Elle a 15 ans.'
            },
            {
              id: 'def_pres_2',
              type: 'multiple-choice',
              instruction: 'اختر تصريف verbe être مع Nous:',
              prompt: 'Nous .................... des filles.',
              options: ['sommes', 'êtes', 'sont'],
              correctAnswer: 'sommes',
              explanation: 'Nous sommes des filles.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-passe-compose',
      unitId: 'revision',
      unitTitle: 'Révision',
      unitTitleAr: 'المراجعة العامة',
      order: 3,
      title: 'Le Passé Composé',
      titleAr: 'الماضي المركب وقواعد المساعد وتبعية اسم المفعول',
      subtitleFr: 'Avoir / Être + Participe Passé',
      estimatedMinutes: 20,
      bookletPages: 'صفحات 7، 8، 53، 54، 67، 68، 69',
      stages: {
        comprendre: {
          titleAr: 'قاعدة زمن الماضي المركب بالتفصيل',
          summaryAr: 'يتكون الماضي المركب من: تصريف فعل Avoir أو فعل Être في المضارع + اسم المفعول من الفعل الأساسي (Participe Passé).',
          grammarPoints: [
            {
              title: '1. الكلمات الدالة على الماضي المركب (Les mots clés - صفحة 67)',
              ruleAr: 'Hier (أمس)، Avant-hier (أول أمس)، passé(e) (الماضي مثل le mois passé)، dernier(e) (الأخير مثل la semaine dernière)، Il y a + مدة (منذ مثل il y a un mois).',
            },
            {
              title: '2. الأفعال الـ 14 التي تأخذ المساعد Être (صفحة 69)',
              ruleAr: 'أفعال الحركة والحالة الـ 14 وعكسها تأخذ المساعد être:',
              details: [
                'aller (ذهب) ⟷ venir (أتى)',
                'arriver (وصل) ⟷ partir (رحل)',
                'entrer (دخل) ⟷ sortir (خرج)',
                'naître (وُلد) ⟷ mourir (مات)',
                'monter (صعد) ⟷ descendre (نزل)',
                'tomber (سقط) ⟷ rester (بقي)',
                'passer (مرّ) ⟷ retourner (عاد)'
              ]
            },
            {
              title: '3. تبعية اسم المفعول مع المساعد Être (L\'accord - صفحة 69)',
              ruleAr: 'اسم المفعول مع المساعد être يتبع الفاعل في النوع والعدد:',
              details: [
                'Elle (مفرد مؤنث) ⟵ نضيف (e) مثل: Elle est allée au cinéma.',
                'Nous / Vous / Ils (جمع مذكر) ⟵ نضيف (s) مثل: Ils sont montés.',
                'Elles (جمع مؤنث) ⟵ نضيف (es) مثل: Elles sont parties.'
              ]
            },
            {
              title: '4. صياغة اسم المفعول (Le Participe Passé - صفحة 68)',
              ruleAr: 'كيف نشتق اسم المفعول من المصدر:',
              details: [
                'المجموعة الأولى (-er): نحذف r ونضع é (arriver -> arrivé, monter -> monté)',
                'المجموعة الثانية (-ir): نحذف r فقط (finir -> fini, sortir -> sorti)',
                'المجموعة الثالثة الشاذة: être -> été, avoir -> eu, faire -> fait, voir -> vu, écrire -> écrit, boire -> bu, prendre -> pris, lire -> lu, mettre -> mis, venir -> venu, naître -> né, mourir -> mort, descendre -> descendu.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة محلولة من الكتاب (صفحة 7 و 8 و 69)',
          descriptionAr: 'تطبيق مباشر على المساعد والتبعية:',
          examples: [
            {
              french: 'Avant-hier, nous sommes allés chez notre tante.',
              arabic: 'أول أمس، ذهبنا عند عمتنا.',
              note: 'Verbe aller يأخذ être + تبعية s مع nous.'
            },
            {
              french: 'Hier, Sami est arrivé à 8 heures.',
              arabic: 'أمس، وصل سامي في الساعة الثامنة.',
              note: 'Verbe arriver يأخذ être (Sami = Il).'
            },
            {
              french: 'Hier, il a fait son travail.',
              arabic: 'أمس، هو عمل واجبه.',
              note: 'Verbe faire يأخذ المساعد avoir (participe passé: fait).'
            },
            {
              french: 'Ce matin, ma chatte est tombée par terre.',
              arabic: 'هذا الصباح، سقطت قطتي أرضاً.',
              note: 'tomber يأخذ être + تبعية e للمؤنث (ma chatte).'
            }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 7 و 8 و 53 من الكتاب',
          descriptionAr: 'اختر الإجابة الصحيحة في الماضي المركب:',
          questions: [
            {
              id: 'q_pc_1',
              type: 'multiple-choice',
              instruction: 'صفحة 7 (سؤال 1): اختر الإجابة الصحيحة:',
              prompt: 'Ali .................... le devoir hier.',
              options: ['a fait', 'vais faire', 'fait'],
              correctAnswer: 'a fait',
              explanation: 'hier دالة على الماضي المركب، وفعل faire يأخذ المساعد avoir -> a fait.'
            },
            {
              id: 'q_pc_2',
              type: 'multiple-choice',
              instruction: 'صفحة 7 (سؤال 2): اختر الإجابة الصحيحة:',
              prompt: 'Hier, nous .................... le petit déjeuner.',
              options: ['avons pris', 'allons prendre', 'a pris'],
              correctAnswer: 'avons pris',
              explanation: 'مع nous نضع avons + اسم المفعول pris.'
            },
            {
              id: 'q_pc_3',
              type: 'multiple-choice',
              instruction: 'صفحة 8 (سؤال 4): اختر الإجابة الصحيحة:',
              prompt: 'Le mois dernier, j\' .................... à Alexandrie.',
              options: ['ai voyagé', 'a voyagé', 'voyager'],
              correctAnswer: 'ai voyagé',
              explanation: 'j\'ai voyagé (المساعد avoir مع Je).'
            },
            {
              id: 'q_pc_4',
              type: 'multiple-choice',
              instruction: 'صفحة 8 (سؤال 7): اختر الإجابة الصحيحة:',
              prompt: 'Tu .................... à Kédzénia hier.',
              options: ['es allé', 'est allé', 'suis allé'],
              correctAnswer: 'es allé',
              explanation: 'مع Tu في الماضي المركب مع être: Tu es allé.'
            },
            {
              id: 'q_pc_5',
              type: 'multiple-choice',
              instruction: 'صفحة 8 (سؤال 8): اختر الإجابة الصحيحة:',
              prompt: 'Nous .................... à Alexandrie.',
              options: ['sommes partis', 'êtes partis', 'avons partis'],
              correctAnswer: 'sommes partis',
              explanation: 'verbe partir من أفعال être ويأخذ تبعية s مع nous: sommes partis.'
            },
            {
              id: 'q_pc_6',
              type: 'multiple-choice',
              instruction: 'صفحة 8 (سؤال 10): اختر الإجابة الصحيحة:',
              prompt: 'Ils .................... en mai.',
              options: ['sont nés', 'suis nés', 'êtes nés'],
              correctAnswer: 'sont nés',
              explanation: 'naître يأخذ être -> ils sont nés.'
            }
          ]
        },
        corriger: {
          titleAr: 'أبرز أخطاء الماضي المركب',
          descriptionAr: 'انتبه لهذه القواعد الذهبية:',
          commonMistakes: [
            {
              mistake: 'نسيان إضافة التبعية (e/s/es) مع المساعد être.',
              correction: 'Elle est allée (إضافة e لأن الفاعل مفرد مؤنث).',
              why: 'المساعد être يفرض مطابقة اسم المفعول مع الفاعل دائماً.'
            },
            {
              mistake: 'وضع تبعية مع المساعد avoir في الحالات العادية.',
              correction: 'Elle a mangé (بدون إضافة e إضافية).',
              why: 'مع المساعد avoir لا توجد تبعية للفاعل.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_pc_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 53 (سؤال 5): اختر الإجابة الصحيحة:',
              prompt: 'Le samedi passé, elles .................... au basket.',
              options: ['ont joué', 'a joué', 'avons joué'],
              correctAnswer: 'ont joué',
              explanation: 'jouer يأخذ المساعد avoir -> elles ont joué.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الماضي المركب والتبعية',
          descriptionAr: 'اختبر دقتك وسرعتك في 60 ثانية:',
          timeLimitSeconds: 60,
          challengeQuestions: [
            {
              id: 'def_pc_1',
              type: 'multiple-choice',
              instruction: 'صفحة 54 (سؤال 1): ضع الفعل في الماضي المركب:',
              prompt: 'Avant-hier, nous (aller) .................... chez notre tante.',
              options: ['sommes allés', 'avons allé', 'sommes allé'],
              correctAnswer: 'sommes allés',
              explanation: 'aller يأخذ être + s للجمع -> sommes allés.'
            },
            {
              id: 'def_pc_2',
              type: 'multiple-choice',
              instruction: 'صفحة 54 (سؤال 3): ضع الفعل في الماضي المركب:',
              prompt: 'Avant-hier, elle (venir) .................... à 9 heures.',
              options: ['est venue', 'a venu', 'est venu'],
              correctAnswer: 'est venue',
              explanation: 'venir يأخذ être + e للتأنيث -> est venue.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-nombres',
      unitId: 'revision',
      unitTitle: 'Révision',
      unitTitleAr: 'المراجعة العامة',
      order: 4,
      title: 'Les Nombres',
      titleAr: 'الأعداد والأرقام من 1 إلى 3000 وكتابتها بالحروف',
      subtitleFr: 'Lecture et écriture des nombres',
      estimatedMinutes: 10,
      bookletPages: 'صفحة 70',
      stages: {
        comprendre: {
          titleAr: 'قراءة وكتابة الأعداد بالفرنسية',
          summaryAr: 'جدول الأرقام والأعداد المقررة بصفحة 70 في الكتاب المدرسي وكيفية تركيب الأعداد المركبة.',
          grammarPoints: [
            {
              title: '1. الأعداد من 1 إلى 20 (صفحة 70)',
              ruleAr: 'الأعداد الأساسية:',
              table: {
                headers: ['الرقم', 'الكتابة', 'الرقم', 'الكتابة'],
                rows: [
                  ['1', 'un', '11', 'onze'],
                  ['2', 'deux', '12', 'douze'],
                  ['3', 'trois', '13', 'treize'],
                  ['4', 'quatre', '14', 'quatorze'],
                  ['5', 'cinq', '15', 'quinze'],
                  ['6', 'six', '16', 'seize'],
                  ['7', 'sept', '17', 'dix-sept'],
                  ['8', 'huit', '18', 'dix-huit'],
                  ['9', 'neuf', '19', 'dix-neuf'],
                  ['10', 'dix', '20', 'vingt']
                ]
              }
            },
            {
              title: '2. العشرات والمئات والآلاف (صفحة 70)',
              ruleAr: 'vingt (20), trente (30), quarante (40), cinquante (50), soixante (60), soixante-dix (70), quatre-vingts (80), quatre-vingt-dix (90), cent (100), deux cents (200), trois cents (300), mille (1000), deux mille (2000), trois mille (3000).'
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة على الأعداد المركبة',
          descriptionAr: 'لاحظ إضافة "et" مع العدد 1 في 21، 31، 41، 51، 61، 71:',
          examples: [
            { french: '21 = vingt et un', arabic: 'واحد وعشرون' },
            { french: '22 = vingt-deux', arabic: 'اثنان وعشرون' },
            { french: '71 = soixante et onze', arabic: 'واحد وسبعون' },
            { french: '80 = quatre-vingts (مع s الجمع)', arabic: 'ثمانون' },
            { french: '81 = quatre-vingt-un (بدون s وبدون et)', arabic: 'واحد وثمانون' },
            { french: '100 000 = cent mille objets', arabic: 'مائة ألف قطعة (متحف القاهرة)' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريب على كتابة الأرقام',
          descriptionAr: 'اختر الكتابة الصحيحة للعدد:',
          questions: [
            {
              id: 'q_num_1',
              type: 'multiple-choice',
              instruction: 'كيف يكتب الرقم 15 بالحروف الفرنسية؟',
              prompt: '15 = ..........',
              options: ['quinze', 'seize', 'quatorze'],
              correctAnswer: 'quinze',
              explanation: '15 = quinze.'
            },
            {
              id: 'q_num_2',
              type: 'multiple-choice',
              instruction: 'كيف يكتب الرقم 70 بالحروف الفرنسية؟',
              prompt: '70 = ..........',
              options: ['soixante-dix', 'soixante', 'septante'],
              correctAnswer: 'soixante-dix',
              explanation: '70 = soixante-dix (60 + 10).'
            },
            {
              id: 'q_num_3',
              type: 'multiple-choice',
              instruction: 'كيف يكتب الرقم 80 بالحروف الفرنسية؟',
              prompt: '80 = ..........',
              options: ['quatre-vingts', 'quatre-vingt', 'huitante'],
              correctAnswer: 'quatre-vingts',
              explanation: '80 = quatre-vingts تأخذ حرف s عند تمامها.'
            }
          ]
        },
        corriger: {
          titleAr: 'أخطاء كتابة الأرقام',
          descriptionAr: 'لاحظ الفرق بين 21 و 81:',
          commonMistakes: [
            {
              mistake: 'كتابة quatre-vingt et un.',
              correction: 'quatre-vingt-un (بدون et).',
              why: 'العدد 81 و 91 لا يأخذان حرف العطف et على عكس 21 و 31 و 41.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_num_rem_1',
              type: 'multiple-choice',
              instruction: 'اختر الكتابة الصحيحة للعدد 21:',
              prompt: '21 = ..........',
              options: ['vingt et un', 'vingt-un', 'vingt et une'],
              correctAnswer: 'vingt et un',
              explanation: '21 = vingt et un.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الأرقام السريع',
          descriptionAr: 'حدد الأرقام التالية في 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_num_1',
              type: 'multiple-choice',
              instruction: 'ما هو العدد: soixante-douze؟',
              prompt: 'soixante-douze = ..........',
              options: ['72', '62', '82'],
              correctAnswer: '72',
              explanation: '60 + 12 = 72.'
            },
            {
              id: 'def_num_2',
              type: 'multiple-choice',
              instruction: 'ما هو العدد: quatre-vingt-onze؟',
              prompt: 'quatre-vingt-onze = ..........',
              options: ['91', '81', '71'],
              correctAnswer: '91',
              explanation: '80 + 11 = 91.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-negation',
      unitId: 'revision',
      unitTitle: 'Révision',
      unitTitleAr: 'المراجعة العامة',
      order: 5,
      title: 'La Forme Négative',
      titleAr: 'صيغة النفي وتحويل أدوات النكرة والتجزئة',
      subtitleFr: 'Ne ... pas & transformation en de/d\'',
      estimatedMinutes: 10,
      bookletPages: 'صفحات 50، 41، 42',
      stages: {
        comprendre: {
          titleAr: 'قواعد النفي في اللغة الفرنسية (صفحة 50)',
          summaryAr: 'لنفي الجملة نضع الفعل بين طرفي النفي ne ... pas (أو n\' ... pas إذا بدأ الفعل بحرف متحرك).',
          grammarPoints: [
            {
              title: '1. القاعدة الأساسية',
              ruleAr: 'Sujet + ne (n\') + Verbe + pas + Complément',
              details: [
                'Il regarde la télé. ⟶ Il ne regarde pas la télé.',
                'J\'écris la leçon. ⟶ Je n\'écris pas la leçon.'
              ]
            },
            {
              title: '2. تحويل أدوات النكرة والتجزئة (صفحة 41 و 50)',
              ruleAr: 'تتحول أدوات التجزئة (du, de la, de l\', des) وأدوات النكرة (un, une, des) عند النفي إلى (de) أو (d\') أمام الحرف المتحرك، ما عدا إذا كان فعل الجملة هو verbe Être.',
              details: [
                'Elle boit du café. ⟶ Elle ne boit pas de café.',
                'Nous mangeons des fruits. ⟶ Nous ne mangeons pas de fruits.',
                'استثناء مع être: Tu es un élève. ⟶ Tu n\'es pas un élève (تبقى un كما هي).',
                'استثناء مع être: C\'est mon frère. ⟶ Ce n\'est pas mon frère.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة من تدريبات صفحة 50 بالكتاب',
          descriptionAr: 'قارن بين الجمل المثبتة والمنفية:',
          examples: [
            {
              french: 'Elle boit du café. ⟶ Elle ne boit pas de café.',
              arabic: 'هي تشرب قهوة. ⟶ هي لا تشرب قهوة.',
              note: 'تحولت du إلى de عند النفي.'
            },
            {
              french: 'Elle a une nouvelle voiture. ⟶ Elle n\'a pas de nouvelle voiture.',
              arabic: 'هي لديها سيارة جديدة. ⟶ ليس لديها سيارة جديدة.',
              note: 'تحولت une إلى de.'
            },
            {
              french: 'Tu es un élève. ⟶ Tu n\'es pas un élève.',
              arabic: 'أنت تلميذ. ⟶ لست تلميذاً.',
              note: 'مع verbe être لا تتغير un إلى de.'
            }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفحة 50 بالكتاب',
          descriptionAr: 'حول إلى صيغة النفي الصحيحة:',
          questions: [
            {
              id: 'q_neg_1',
              type: 'multiple-choice',
              instruction: 'صفحة 50 (سؤال 1): انفي الجملة التالية:',
              prompt: '"Elle boit du café."',
              options: [
                'Elle ne boit pas de café.',
                'Elle ne boit pas du café.',
                'Elle boit pas café.'
              ],
              correctAnswer: 'Elle ne boit pas de café.',
              explanation: 'تتحول أداة التجزئة du إلى de عند النفي.'
            },
            {
              id: 'q_neg_2',
              type: 'multiple-choice',
              instruction: 'صفحة 50 (سؤال 3): انفي الجملة مع verbe être:',
              prompt: '"Tu es un élève."',
              options: [
                'Tu n\'es pas un élève.',
                'Tu n\'es pas d\'élève.',
                'Tu es pas un élève.'
              ],
              correctAnswer: 'Tu n\'es pas un élève.',
              explanation: 'مع فعل Être تبقى أداة النكرة un كما هي دون تحويل.'
            },
            {
              id: 'q_neg_3',
              type: 'multiple-choice',
              instruction: 'صفحة 50 (سؤال 6): انفي الجملة التالية:',
              prompt: '"Nous mangeons des fruits."',
              options: [
                'Nous ne mangeons pas de fruits.',
                'Nous ne mangeons pas des fruits.',
                'Nous mangeons pas fruits.'
              ],
              correctAnswer: 'Nous ne mangeons pas de fruits.',
              explanation: 'أداة التجزئة des تتحول إلى de في النفي.'
            }
          ]
        },
        corriger: {
          titleAr: 'تجنب خطأ النفي مع verbe Être',
          descriptionAr: 'قاعدة هامة جداً للامتحان:',
          commonMistakes: [
            {
              mistake: 'تحويل un/une إلى de عند وجود verbe être (مثل: Ce n\'est pas de livre).',
              correction: 'Ce n\'est pas un livre.',
              why: 'مع فعل être لا يتم تحويل أدوات النكرة أبداً.'
            }
          ],
          remedialQuestions: [
            {
              id: 'q_neg_rem_1',
              type: 'multiple-choice',
              instruction: 'صفحة 50 (سؤال 10): اختر نفي الجملة:',
              prompt: '"Ils sont des amis."',
              options: [
                'Ils ne sont pas des amis.',
                'Ils ne sont pas d\'amis.',
                'Ils sont pas amis.'
              ],
              correctAnswer: 'Ils ne sont pas des amis.',
              explanation: 'مع فعل être تبقى des كما هي.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي صيغة النفي',
          descriptionAr: 'أجب خلال 45 ثانية:',
          timeLimitSeconds: 45,
          challengeQuestions: [
            {
              id: 'def_neg_1',
              type: 'multiple-choice',
              instruction: 'صفحة 50 (سؤال 8): انفي الجملة:',
              prompt: '"Il y a des élèves en classe."',
              options: [
                'Il n\'y a pas d\'élèves en classe.',
                'Il n\'y a pas des élèves en classe.',
                'Il y a pas d\'élèves en classe.'
              ],
              correctAnswer: 'Il n\'y a pas d\'élèves en classe.',
              explanation: 'تحولت des إلى d\' لأن élèves تبدأ بحرف متحرك.'
            }
          ]
        }
      }
    }
  ]
};
