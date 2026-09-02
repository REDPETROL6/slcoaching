export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Header
    nav: {
      methodology: 'Méthodologie',
      plans: 'Formules',
      protocol: 'Protocole',
      results: 'Résultats',
    },
    tagline: 'Physiologie Appliquée',
    startNow: 'Commencer',

    // Hero
    hero: {
      badge: 'Système de Coaching Scientifique',
      title1: 'Construisez votre',
      title1Accent: 'physique.',
      title2: 'Piloté par les données, un',
      title2Break: 'accompagnement premium.',
      subtitle:
        "Une flexibilité totale sans compromis sur le suivi. Une précision clinique — des protocoles d'entraînement personnalisés, un calibrage des macros et une analyse biomécanique de la technique, livrés selon votre rythme et affinés par les preuves.",
      ctaPrimary: 'Obtenir votre protocole',
      ctaSecondary: 'La méthodologie',
      stats: [
        { value: '6j/7', label: 'Support & Suivi' },
        { value: '100%', label: 'Personnalisé' },
        { value: '12 sem', label: 'Blocs Élite' },
      ],
      cards: [
        { label: 'Gestion du volume' },
        { label: 'Progression' },
        { label: 'WADA / ADEL' },
      ],
      alt: 'Athlète exécutant un squat arrière à la barre avec lumière naturelle',
    },

    // Methodology
    methodology: {
      eyebrow: 'La Méthodologie',
      title: "L'Avantage de la Précision d'Élite",
      intro:
        "La flexibilité n'est pas un compromis — c'est un modèle rigoureux d'accompagnement. Tout est écrit, mesurable, et conçu pour optimiser vos résultats avec un suivi constant.",
      pillars: [
        {
          title: 'Une Flexibilité Totale',
          body:
            "Un coaching qui respecte votre vie professionnelle et votre récupération. Vous vous entraînez quand cela vous arrange, tout en bénéficiant d'un encadrement et de retours constants.",
        },
        {
          title: 'Suivi Continu et Documenté',
          body:
            "Fuseaux horaires, horaires de travail, voyages — je m'adapte. Vos retours arrivent de façon structurée et restent toujours documentés pour suivre votre évolution mathématiquement.",
        },
        {
          title: 'Précision Clinique',
          body:
            'Chaque protocole est livré sous forme de PDF et tableur structurés : séries exactes, charges, tempo et repères de volume. Aucune approximation, entièrement vérifiable.',
        },
        {
          title: 'Analyse Biomécanique de la Technique',
          body:
            "Envoyez vos vidéos de mouvement. Je décompose les angles articulaires, la trajectoire de la barre et la mécanique positionnelle image par image pour vous renvoyer des corrections précises.",
        },
      ],
      credentials: [
        {
          title: 'Formation en Ingénierie',
          body:
            "Une approche de systèmes et de tolérances appliquée à la performance humaine. Les programmes sont modélisés, mesurés et itérés comme tout système de précision.",
        },
        {
          title: 'Certifié WADA / ADEL Antidopage',
          body:
            'Un coaching fondé sur les principes du sport propre. Les recommandations restent dans des limites fondées sur les preuves, conformes et axées sur la santé.',
        },
      ],
    },

    // Pricing
    pricing: {
      eyebrow: 'Formules de Coaching',
      title: 'Choisissez votre niveau de précision',
      intro:
        "Tarification transparente en abonnement mensuel. Chaque formule repose sur le même système fondé sur les preuves — à vous de décider le niveau d'accompagnement.",
      mostPopular: 'Le plus populaire',
      perMonth: '/ mois',
      usd: 'USD',
      plans: [
        {
          name: 'Pack Fondation',
          tagline: 'Les fondations de votre transformation, mesurées et ajustées.',
          cta: 'Commencer',
          features: [
            "Audit initial (analyse vidéo et objectifs)",
            "Ciblage précis des macros quotidiennes",
            "2 bilans mensuels (exécution, poids, progression)",
            "Ajustements continus du programme",
            "Suivi structuré de vos performances",
          ],
        },
        {
          name: 'Pack Deluxe',
          tagline: 'Suivi hebdomadaire et optimisation nutritionnelle avancée.',
          cta: 'Améliorer',
          features: [
            "Tout le contenu du Pack Fondation",
            "Bilan hebdomadaire à jour fixe",
            "Protocole compléments sur-mesure (âge & profil)",
            "Livre PDF exclusif : +50 recettes saines",
            "Optimisation continue des macros",
          ],
        },
        {
          name: 'Pack Élite',
          tagline: 'Prise en charge totale, corrections vidéo et menus.',
          cta: 'Choisir Élite',
          features: [
            "Tout le contenu du Pack Deluxe",
            "Messagerie 6j/7 (réponse rapide en journée)",
            "Corrections vidéo de vos exécutions",
            "2 appels vidéo mensuels de suivi stratégique",
            "Menus hebdomadaires sur-mesure renouvelés",
          ],
        },
      ],
    },

    // Questionnaire
    questionnaire: {
      eyebrow: 'Obtenir votre protocole',
      title: "Construisez votre profil d'entrée",
      intro:
        'Plus vos données sont précises, plus votre protocole est affûté. Cela prend environ trois minutes — tout reste confidentiel.',
      steps: [
        { title: 'Métriques & Objectif' },
        { title: 'Disponibilité' },
        { title: 'Expérience' },
        { title: 'Nutrition' },
        { title: 'Analyse' },
      ],
      stepOf: 'Étape {n} sur {total}',
      fields: {
        age: 'Âge',
        agePlaceholder: 'ex. 28',
        gender: 'Genre',
        select: 'Sélectionner',
        male: 'Homme',
        female: 'Femme',
        other: 'Autre / Je préfère ne pas répondre',
        height: 'Taille (cm)',
        heightPlaceholder: 'ex. 178',
        weight: 'Poids (kg)',
        weightPlaceholder: 'ex. 76',
        primaryGoal: 'Objectif principal',
        daysPerWeek: "Jours d'entraînement / semaine",
        days: 'jours',
        timePerSession: 'Durée / séance',
        equipment: 'Équipement disponible',
        equipmentHint:
          'Salle commerciale, installation à domicile, et toute machine spécifique qui vous manque.',
        equipmentPlaceholder:
          'ex. Salle commerciale complète, mais pas de reverse hyper ni de barre safety squat.',
        experience: "Expérience d'entraînement (années)",
        lessThan1: "Moins d'1 an",
        years13: '1–3 ans',
        years35: '3–5 ans',
        years5plus: '5 ans et plus',
        injuries: 'Blessures & Limitations',
        injuriesHint:
          'Blessures, gêne articulaire ou limitations biomécaniques que je dois prendre en compte.',
        injuriesPlaceholder:
          "ex. Conflit de l'épaule gauche au développement militaire ; légère gêne du genou au squat profond.",
        allergies: 'Allergies & Intolérances',
        allergiesPlaceholder: 'ex. Intolérant au lactose, allergie aux fruits à coque',
        restrictions: 'Restrictions alimentaires',
        restrictionsPlaceholder: 'ex. Végétarien, pas de porc',
        calories: 'Apport calorique quotidien actuel',
        caloriesHint: 'Une estimation approximative suffit.',
        caloriesPlaceholder: 'ex. 2400',
      },
      goals: [
        { value: 'hypertrophy', label: 'Hypertrophie' },
        { value: 'fat_loss', label: 'Perte de masse grasse' },
        { value: 'plateau', label: 'Franchir un plateau' },
      ],
      photo: {
        title: 'Joindre des photos de physique pour analyse',
        desc: "Acceptez d'envoyer des photos de face, de profil et de dos pour que je puisse évaluer les proportions et prioriser votre programmation. Vous recevrez un lien de téléversement sécurisé après l'envoi.",
        front: 'Face',
        side: 'Profil',
        back: 'Dos',
      },
      nav: {
        back: 'Retour',
        continue: 'Continuer',
        submit: 'Envoyer le profil',
        submitting: 'Envoi en cours',
      },
      done: {
        title: 'Profil reçu',
        body: 'Vos données sont enregistrées. Votre protocole personnalisé sera construit à partir de ces informations et livré sous forme de PDF et tableur structurés. Surveillez votre boîte mail.',
        another: 'En envoyer un autre',
      },
      error: "Une erreur est survenue lors de l'envoi de votre profil. Veuillez réessayer.",
    },

    // Testimonials
    testimonials: {
      eyebrow: 'Résultats',
      title: 'Des résultats documentés et reproductibles',
      intro:
        'De vraies transformations sont ajoutées ici au fur et à mesure que les clients terminent leurs blocs. Les encadrés ci-dessous sont des espaces réservés prêts pour des images avant / après vérifiées.',
      items: [
        {
          quote:
            "L'accompagnement a tout débloqué. Tout est documenté, chaque progression justifiée. J'ai arrêté de deviner et j'ai commencé à construire.",
          name: 'Thomas M.',
          detail: 'Pack Deluxe',
        },
        {
          quote:
            "Les analyses de mes vidéos de mouvement ont corrigé un problème de squat que deux coachs en présentiel n'avaient pas vu. Véritablement clinique.",
          name: 'Hugo C.',
          detail: 'Pack Élite',
        },
        {
          quote:
            "J'ai brisé un plateau de deux ans au développé-couché en huit semaines. La gestion du volume a fait la différence — rien n'était laissé au hasard.",
          name: 'Antoine V.',
          detail: 'Pack Fondation',
        },
      ],
      transformations: [
        { duration: '12 Semaines', focus: 'Recomposition' },
        { duration: '16 Semaines', focus: 'Prise de masse sèche' },
        { duration: '20 Semaines', focus: 'Phase de sèche' },
      ],
      beforeAfter: 'Avant / Après',
      altSuffix: 'transformation (espace réservé)',
    },

    // About
    about: {
      eyebrow: 'À propos du Coach',
      title: 'Bonjour, je suis Sacha.',
      paragraphs: [
        "Je suis un athlète de haut niveau et je construis les physiques comme un ingénieur construit des systèmes — avec mesure, tolérances et preuves. Ma formation en ingénierie et en commerce m'a appris à me méfier de l'à-peu-près et à respecter les données, et j'applique cette même discipline à chaque protocole d'entraînement et de nutrition que je rédige.",
        "Mon approche de l'accompagnement est un choix délibéré. Elle oblige tout à être documenté, précis et suivi : votre programme vit dans un PDF et un tableur structurés, votre technique est analysée image par image, et chaque ajustement est justifié. Tout est pensé pour votre progression, avec un encadrement réactif.",
        "Je suis certifié WADA / ADEL antidopage et engagé dans un coaching propre et axé sur la santé. Mon objectif est simple : vous donner un système que vous comprenez, que vous pouvez exécuter de manière flexible, et auquel vous pouvez faire confiance pour des résultats reproductibles.",
      ],
      badges: [
        { k: 'Ingénieur', v: 'Esprit système' },
        { k: 'Certifié', v: 'WADA / ADEL' },
        { k: 'Accompagnement', v: 'Suivi premium' },
      ],
      coach: 'Coach & Fondateur',
      alt: 'Espace réservé pour le portrait du coach Sacha',
    },

    // Contact
    contact: {
      eyebrow: 'Contact',
      title: 'Des questions avant de commencer ?',
      intro:
        'Pour toute demande générale sur les packs, le processus, ou pour savoir si mon approche premium convient à votre situation — envoyez un message et vous recevrez une réponse réfléchie.',
      points: [
        'Aucune obligation, aucun appel commercial forcé',
        'Les réponses sont complètes et détaillées',
        'Prêt à commencer ? Rendez-vous sur Obtenir votre protocole',
      ],
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'E-mail',
      emailPlaceholder: 'vous@email.com',
      message: 'Message',
      messagePlaceholder: 'Que souhaitez-vous savoir ?',
      send: 'Envoyer le message',
      sending: 'Envoi en cours',
      sentTitle: 'Message envoyé',
      sentBody: 'Merci de votre message — une réponse arrive bientôt.',
      another: 'En envoyer un autre',
      error: "Le message n'a pas pu être envoyé. Veuillez réessayer.",
    },

    // Footer
    footer: {
      desc: "Coaching scientifique et accompagnement sur-mesure. Construisez votre physique avec des protocoles de précision, un calibrage des macros et une analyse de la technique.",
      navigate: 'Navigation',
      legal: 'Mentions légales',
      legalLinks: ['Politique de confidentialité', "Conditions d'utilisation", 'Accord de coaching'],
      rights: 'Tous droits réservés.',
      cleanSport: 'Certifié WADA / ADEL · Sport propre',
    },
  },

  en: {
    nav: {
      methodology: 'Methodology',
      plans: 'Plans',
      protocol: 'Protocol',
      results: 'Results',
    },
    tagline: 'Applied Physiology',
    startNow: 'Start Now',

    hero: {
      badge: 'Science-Based Coaching System',
      title1: 'Engineer your',
      title1Accent: 'physique.',
      title2: 'Data-driven, premium',
      title2Break: 'coaching support.',
      subtitle:
        'Total flexibility without compromising on guidance. Clinical precision — custom training protocols, macro calibration, and biomechanical form analysis, delivered on your timeline and refined by evidence.',
      ctaPrimary: 'Get Your Protocol',
      ctaSecondary: 'The Methodology',
      stats: [
        { value: '6d/7', label: 'Active Support' },
        { value: '100%', label: 'Personalized' },
        { value: '12wk', label: 'Elite Blocks' },
      ],
      cards: [
        { label: 'Volume Control' },
        { label: 'Progression' },
        { label: 'WADA / ADEL' },
      ],
      alt: 'Athlete performing a barbell back squat with natural lighting',
    },

    methodology: {
      eyebrow: 'The Methodology',
      title: 'The Elite Precision Advantage',
      intro:
        'Flexibility is not a compromise — it is a rigorous model of support. Everything is written down, measurable, and built to optimize your results with constant tracking.',
      pillars: [
        {
          title: 'Total Flexibility',
          body:
            'Coaching that respects your work life and recovery. You train when it fits your schedule, while benefiting from constant guidance and feedback.',
        },
        {
          title: 'Continuous Documented Tracking',
          body:
            'Time zones, work shifts, travel — I adapt. Your feedback arrives structurally and remains documented to track your evolution mathematically.',
        },
        {
          title: 'Clinical Precision',
          body:
            'Every protocol ships as a structured PDF and spreadsheet: exact sets, loads, tempo, and volume landmarks. No guesswork, fully auditable.',
        },
        {
          title: 'Biomechanical Form Analysis',
          body:
            'Send your lift videos. I break down joint angles, bar path, and positional mechanics frame by frame and return precise corrections.',
        },
      ],
      credentials: [
        {
          title: 'Engineering Background',
          body:
            'A systems-and-tolerances mindset applied to human performance. Programs are modeled, measured, and iterated like any precision system.',
        },
        {
          title: 'WADA / ADEL Anti-Doping Certified',
          body:
            'Coaching grounded in clean-sport principles. Guidance stays within evidence-based, compliant, and health-first boundaries.',
        },
      ],
    },

    pricing: {
      eyebrow: 'Coaching Packs',
      title: 'Choose your level of precision',
      intro:
        'Transparent monthly subscription pricing. Every pack is built from the same evidence-first system — you decide the level of support.',
      mostPopular: 'Most Popular',
      perMonth: '/ month',
      usd: 'USD',
      plans: [
        {
          name: 'Foundation Pack',
          tagline: 'The blueprint for your transformation, measured and adjusted.',
          cta: 'Get Started',
          features: [
            'Initial audit (video analysis and goal setting)',
            'Precise daily macro targeting',
            'Bi-weekly check-ins (execution, weight, progress)',
            'Continuous program adjustments',
            'Structured performance tracking',
          ],
        },
        {
          name: 'Deluxe Pack',
          tagline: 'Weekly tracking and advanced nutritional optimization.',
          cta: 'Upgrade',
          features: [
            'Everything in the Foundation Pack',
            'Weekly check-ins on a fixed day',
            'Custom supplement protocol (based on age & profile)',
            'Exclusive PDF book: 50+ healthy & rewarding recipes',
            'Continuous macro optimization',
          ],
        },
        {
          name: 'Elite Pack',
          tagline: 'Total management, video form correction, and custom meal plans.',
          cta: 'Choose Elite',
          features: [
            'Everything in the Deluxe Pack',
            '6/7 days messaging access (fast daytime response)',
            'Custom video breakdowns of your lifts',
            '2 monthly strategic video calls',
            'Custom weekly meal plans (updated weekly)',
          ],
        },
      ],
    },

    questionnaire: {
      eyebrow: 'Get Your Protocol',
      title: 'Build your intake profile',
      intro:
        'The more precise your inputs, the sharper your protocol. Takes about three minutes — everything stays confidential.',
      steps: [
        { title: 'Metrics & Goal' },
        { title: 'Availability' },
        { title: 'Experience' },
        { title: 'Nutrition' },
        { title: 'Analysis' },
      ],
      stepOf: 'Step {n} of {total}',
      fields: {
        age: 'Age',
        agePlaceholder: 'e.g. 28',
        gender: 'Gender',
        select: 'Select',
        male: 'Male',
        female: 'Female',
        other: 'Other / Prefer not to say',
        height: 'Height (cm)',
        heightPlaceholder: 'e.g. 178',
        weight: 'Weight (kg)',
        weightPlaceholder: 'e.g. 76',
        primaryGoal: 'Primary Goal',
        daysPerWeek: 'Training Days / Week',
        days: 'days',
        timePerSession: 'Time / Session',
        equipment: 'Equipment Access',
        equipmentHint:
          'Commercial gym, home setup, and any specific machinery you lack.',
        equipmentPlaceholder:
          'e.g. Full commercial gym, but no reverse hyper or safety squat bar.',
        experience: 'Training Experience (years)',
        lessThan1: 'Less than 1 year',
        years13: '1–3 years',
        years35: '3–5 years',
        years5plus: '5+ years',
        injuries: 'Injuries & Limitations',
        injuriesHint:
          'Injuries, joint discomfort, or biomechanical limitations I should program around.',
        injuriesPlaceholder:
          'e.g. Left shoulder impingement on overhead pressing; mild knee discomfort on deep squats.',
        allergies: 'Allergies & Intolerances',
        allergiesPlaceholder: 'e.g. Lactose intolerant, tree-nut allergy',
        restrictions: 'Dietary Restrictions',
        restrictionsPlaceholder: 'e.g. Vegetarian, no pork',
        calories: 'Current Daily Calories',
        caloriesHint: 'Rough estimate is fine.',
        caloriesPlaceholder: 'e.g. 2400',
      },
      goals: [
        { value: 'hypertrophy', label: 'Hypertrophie' },
        { value: 'fat_loss', label: 'Fat Loss' },
        { value: 'plateau', label: 'Breaking Plateau' },
      ],
      photo: {
        title: 'Attach physique photos for analysis',
        desc: 'Opt in to submit front, side, and back photos so I can assess proportions and prioritize your programming. You will receive a secure upload link after submitting.',
        front: 'Front',
        side: 'Side',
        back: 'Back',
      },
      nav: {
        back: 'Back',
        continue: 'Continue',
        submit: 'Submit Profile',
        submitting: 'Submitting',
      },
      done: {
        title: 'Profile received',
        body: 'Your intake is locked in. Your custom protocol will be built from these inputs and delivered as a structured PDF and spreadsheet. Watch your inbox.',
        another: 'Submit Another',
      },
      error: 'Something went wrong submitting your profile. Please try again.',
    },

    testimonials: {
      eyebrow: 'Results',
      title: 'Documented, repeatable outcomes',
      intro:
        'Real transformations are added here as clients complete their blocks. The panels below are placeholders ready for verified before / after imagery.',
      items: [
        {
          quote:
            'The premium support was the unlock. Everything documented, every progression justified. I stopped guessing and started building.',
          name: 'Thomas M.',
          detail: 'Deluxe Pack',
        },
        {
          quote:
            'The form breakdowns from my lift videos fixed a squat issue two in-person coaches missed. Genuinely clinical.',
          name: 'Hugo C.',
          detail: 'Elite Pack',
        },
        {
          quote:
            'Broke a two-year bench plateau in eight weeks. The volume management was the difference — nothing was left to chance.',
          name: 'Antoine V.',
          detail: 'Foundation Pack',
        },
      ],
      transformations: [
        { duration: '12 Weeks', focus: 'Recomposition' },
        { duration: '16 Weeks', focus: 'Lean Bulk' },
        { duration: '20 Weeks', focus: 'Fat Loss Phase' },
      ],
      beforeAfter: 'Before / After',
      altSuffix: 'transformation placeholder',
    },

    about: {
      eyebrow: 'About the Coach',
      title: "Hi, I'm Sacha.",
      paragraphs: [
        "I'm a high-level athlete and I build physiques the way an engineer builds systems — with measurement, tolerances, and evidence. My engineering and business background trained me to distrust guesswork and respect data, and I apply that same discipline to every training and nutrition protocol I write.",
        'My coaching approach is a deliberate choice. It forces everything to be documented, precise, and tracked: your program lives in a structured PDF and spreadsheet, your form is analyzed frame by frame, and every adjustment is justified. Everything is designed for your progression, with responsive guidance.',
        "I'm WADA / ADEL anti-doping certified and committed to clean, health-first coaching. My goal is simple: give you a system you understand, can execute flexibly, and can trust to deliver repeatable results.",
      ],
      badges: [
        { k: 'Engineer', v: 'Systems mindset' },
        { k: 'Certified', v: 'WADA / ADEL' },
        { k: 'Support', v: 'Premium guidance' },
      ],
      coach: 'Coach & Founder',
      alt: 'Portrait placeholder for coach Sacha',
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Questions before you start?',
      intro:
        'For general inquiries about the packs, the process, or whether my premium approach fits your situation — send a message and you\'ll get a considered reply.',
      points: [
        'No obligation, no forced sales calls',
        'Replies are thorough and detailed',
        'Ready to start? Head to Get Your Protocol',
      ],
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'What would you like to know?',
      send: 'Send Message',
      sending: 'Sending',
      sentTitle: 'Message sent',
      sentBody: 'Thanks for reaching out — expect a reply soon.',
      another: 'Send Another',
      error: 'Message could not be sent. Please try again.',
    },

    footer: {
      desc: 'Science-based, premium coaching support. Engineer your physique with precision protocols, macro calibration, and biomechanical form analysis.',
      navigate: 'Navigate',
      legal: 'Legal',
      legalLinks: ['Privacy Policy', 'Terms of Service', 'Coaching Agreement'],
      rights: 'All rights reserved.',
      cleanSport: 'WADA / ADEL Certified · Clean Sport',
    },
  },
} as const;
