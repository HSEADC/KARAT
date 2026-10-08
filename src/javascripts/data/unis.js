/* 141 вуз в 70 странах, данные с официальных сайтов (октябрь 2026). feeYear - примерная плата в год в евро */
window.UNIS = [
  {
    id: "tum",
    name: "Technical University of Munich",
    country: "Германия",
    city: "Мюнхен",
    tuition: "€2 000–3 000 за семестр (для не-ЕС, зависит от программы) + €97 взнос",
    feeYear: 5000,
    cur: "EUR",
    ielts: null,
    lang: "немецкий / английский",
    deadline: "15 июля (зимний семестр)",
    src: [
      "https://www.tum.de/en/studies/fees/tuition",
      "https://www.tum.de/en/studies/degree-programs/detail/informatics-bachelor-of-science-bsc"
    ],
    note: "Языковое требование зависит от программы",
    dirs: ["it", "science", "business", "medicine", "arch"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Burkhard Mücke",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Bibliothek_der_TU_M%C3%BCnchen_06.jpg"
    }
  },
  {
    id: "lmu",
    name: "LMU Munich",
    country: "Германия",
    city: "Мюнхен",
    tuition: "Без платы за обучение, взнос €97 за семестр",
    feeYear: 194,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "15 июля (зимний семестр, через International Office)",
    src: ["https://www.lmu.de/en/study/degree-students/dates-and-deadlines/"],
    dirs: ["medicine", "science", "social", "law", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Diego Delso",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Edificio_principal_de_la_Universidad_Ludwig-Maximilian,_M%C3%BAnich,_Alemania,_2012-04-30,_DD_03.JPG"
    }
  },
  {
    id: "hu",
    name: "Humboldt-Universität zu Berlin",
    country: "Германия",
    city: "Берлин",
    tuition: "Без платы за обучение, семестровый взнос ≈ €305–355",
    feeYear: 660,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "15 июля (зимний семестр, через uni-assist)",
    src: [
      "https://www.hu-berlin.de/en/study/before-your-studies/apply/international-students/further-study-programmes"
    ],
    dirs: ["social", "science", "law", "medicine"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Christian Wolf (www.c-w-design.de)",
      license: "CC BY-SA 3.0 de",
      url: "https://commons.wikimedia.org/wiki/File:Hauptgeb%C3%A4ude_der_Humboldt-Universit%C3%A4t_mit_Alexander_von_Humboldt_Denkmal_-_Berlin.jpg"
    }
  },
  {
    id: "fu",
    name: "Freie Universität Berlin",
    country: "Германия",
    city: "Берлин",
    tuition: "Без платы за обучение, взнос €376,80 за семестр",
    feeYear: 754,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "1 июня – 15 июля 2026 (бакалавриат, зима)",
    src: [
      "https://www.fu-berlin.de/en/studium/bewerbung/bewerbungsfristen/index.html",
      "https://www.fu-berlin.de/en/studium/studieren/studienorganisation/gebuehren/index.html"
    ],
    dirs: ["social", "science", "law", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Torinberl",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Freie_Universitaet_Berlin_-_Campus_-_Blick_vom_Henry-Ford-Bau_zur_Mensa_1_-_mit_Regenbogen.jpg"
    }
  },
  {
    id: "tub",
    name: "TU Berlin",
    country: "Германия",
    city: "Берлин",
    tuition: "Без платы за обучение, семестровый взнос",
    feeYear: 700,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "15 июля (с конкурсом) / 31 августа (без конкурса)",
    src: [
      "https://www.tu.berlin/en/studierendensekretariat/dates-deadlines-for-application-and-enrollment-at-tu-berlin"
    ],
    dirs: ["it", "arch", "science", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Sebaso",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:20141115_-_TU_Berlin_Campus_Hertzallee_4_by_sebaso.jpg"
    }
  },
  {
    id: "heidelberg",
    name: "Heidelberg University",
    country: "Германия",
    city: "Гейдельберг",
    tuition: "€1 500 за семестр для не-ЕС + семестровый взнос",
    feeYear: 3000,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "15 июля (зимний семестр)",
    src: [
      "https://www.uni-heidelberg.de/en/study/management-of-studies/semester-fees/tuition-fees-for-international-students"
    ],
    dirs: ["medicine", "science", "social", "law"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Ribax",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Grabengasse_Heidelberg_Campus_Altstadt_IMG_0241.jpg"
    }
  },
  {
    id: "rwth",
    name: "RWTH Aachen University",
    country: "Германия",
    city: "Ахен",
    tuition: "Без платы за обучение, взнос ≈ €320 за семестр",
    feeYear: 640,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "15 июля (зимний семестр, не-ЕС)",
    src: [
      "https://www.rwth-aachen.de/cms/root/studium/im-studium/internationales/~inno/faq/?lidx=1"
    ],
    dirs: ["it", "science", "arch", "business", "medicine"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Sascha Faber",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:RWTH_Aachen_University_II._Physikalisches_Institut.jpg"
    }
  },
  {
    id: "uhh",
    name: "Universität Hamburg",
    country: "Германия",
    city: "Гамбург",
    tuition: "Без платы за обучение, взнос €402 за семестр",
    feeYear: 804,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "1 июня – 15 июля (зимний семестр)",
    src: [
      "https://www.uni-hamburg.de/en/campuscenter/studienorganisation/studienverlauf/beitraege-gebuehren/semesterbeitrag.html",
      "https://www.uni-hamburg.de/en/campuscenter/bewerbung/fristen-termine.html"
    ],
    dirs: ["social", "law", "science", "business", "medicine"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Minderbinder",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_Hebebrandstra%C3%9Fe_in_Hamburg-Winterhude,_Haus_D_und_Container.JPG"
    }
  },
  {
    id: "koeln",
    name: "Universität zu Köln",
    country: "Германия",
    city: "Кёльн",
    tuition: "Без платы за обучение, взнос €355,65 за семестр",
    feeYear: 711,
    cur: "EUR",
    ielts: null,
    lang: "немецкий (DSH-2)",
    deadline: "15 июля (зимний семестр, uni-assist)",
    src: [
      "https://uni-koeln.de/en/studium-lehre/international/studium-in-koeln/internationale-bewerbungen/bachelor-studium-staatsexamen/bewerbungsverfahren-fuer-nicht-eu-buergerinnen/application-procedure-for-non-eu-citizens-with-formal-university-entrance-qualification-studienstart-international-integrale"
    ],
    dirs: ["business", "law", "social", "medicine", "science"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "A.Savin",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Pano-unikoeln-magnusplatz.jpg"
    }
  },
  {
    id: "goethe",
    name: "Goethe-Universität Frankfurt",
    country: "Германия",
    city: "Франкфурт",
    tuition: "Без платы за обучение, взнос ≈ €290 за семестр",
    feeYear: 580,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "уточняйте на сайте (зависит от программы)",
    src: [
      "https://www.uni-frankfurt.de/111102954/FAQ_about_the_Application_Process?locale=en"
    ],
    dirs: ["business", "law", "social", "science", "medicine"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Carl Ha",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Fernheizwerk,-Campus-Bockenheim,-Frankfurt-a.-M.-(July-2018).jpg"
    }
  },
  {
    id: "kit",
    name: "Karlsruhe Institute of Technology",
    country: "Германия",
    city: "Карлсруэ",
    tuition: "€1 500 за семестр для не-ЕС + взнос ≈ €200",
    feeYear: 3400,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "уточняйте на сайте (зависит от программы)",
    src: ["https://www.intl.kit.edu/istudies/12606.php"],
    dirs: ["it", "science", "arch"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "BlueBreezeWiki",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Karlsruhe_Universit%C3%A4t_from_Physikhochhaus_pic1_meph666-2005-Feb-10.jpg"
    }
  },
  {
    id: "tud",
    name: "TU Dresden",
    country: "Германия",
    city: "Дрезден",
    tuition: "Без платы за обучение, семестровый взнос",
    feeYear: 600,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "1 апреля – 15 июля (иностранный аттестат)",
    src: [
      "https://tu-dresden.de/studium/vor-dem-studium/internationales/faq?set_language=en"
    ],
    dirs: ["it", "science", "arch", "medicine", "social"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Toniklemm",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:TU_Dresden_Campus_2024_Luftbild_Toni_Klemm_2500px.jpg"
    }
  },
  {
    id: "freiburg",
    name: "University of Freiburg",
    country: "Германия",
    city: "Фрайбург",
    tuition: "€1 500 за семестр для не-ЕС + семестровый взнос",
    feeYear: 3400,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "портал открывается 1 июня (зимний семестр)",
    src: [
      "https://uni-freiburg.de/en/studies/during-your-studies/tuition-fees-international-students/"
    ],
    dirs: ["medicine", "science", "social", "law"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Till Westermayer from Freiburg, Germany",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Lulea_University_of_Technology_-_B-building.jpg"
    }
  },
  {
    id: "uva",
    name: "University of Amsterdam",
    country: "Нидерланды",
    city: "Амстердам",
    tuition: "€13 900–34 700 в год для не-ЕС (зависит от факультета)",
    feeYear: 13900,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / нидерландский",
    deadline: "1 апреля (рекомендуемый), 1 мая (финальный); 15 января для программ с лимитом",
    src: [
      "https://www.uva.nl/en/education/fees-and-funding/tuition-fees/tuition-fees.html",
      "https://www.uva.nl/en/programmes/bachelors/psychology/application-and-admission/international-prior-education/application-and-admission.html"
    ],
    dirs: ["social", "business", "law", "science", "medicine", "it"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Fons Heijnsbroek",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Modern_architecture_of_university_buildings_at_the_campus_Roeterseiland;_free_photo_Amsterdam,_Fons_Heijnsbroek_10-2021.jpg"
    }
  },
  {
    id: "leiden",
    name: "Leiden University",
    country: "Нидерланды",
    city: "Лейден",
    tuition: "€18 700 в год для не-ЕС (2026/27)",
    feeYear: 18700,
    cur: "EUR",
    ielts: 6,
    lang: "английский / нидерландский",
    deadline: "1 апреля (англоязычные программы)",
    src: [
      "https://www.universiteitleiden.nl/en/education/study-programmes/bachelor/international-studies/admission-and-application/admission-requirements"
    ],
    dirs: ["law", "social", "science", "medicine"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "OSeveno",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_Den_Haag_Universiteit_Leiden_01.jpg"
    }
  },
  {
    id: "uu",
    name: "Utrecht University",
    country: "Нидерланды",
    city: "Утрехт",
    tuition: "€13 415 (гуманитарные и соц.) / €17 073 (естественные) в год для не-ЕС",
    feeYear: 13415,
    cur: "EUR",
    ielts: null,
    lang: "английский / нидерландский",
    deadline: "1 апреля (для не-ЕС)",
    src: [
      "https://www.uu.nl/en/bachelors/general-information/how-to-apply/fees/tuition-fees"
    ],
    dirs: ["science", "social", "law", "medicine"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Naberacka",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Utrecht_University_campus_panorama.jpg"
    }
  },
  {
    id: "tudelft",
    name: "TU Delft",
    country: "Нидерланды",
    city: "Делфт",
    tuition: "€19 906 в год для не-ЕС (2026/27)",
    feeYear: 19906,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "15 января (программы с лимитом) / 1 апреля (остальные)",
    src: [
      "https://www.tudelft.nl/en/education/study-programme-orientation/practical-matters/tuition-fee-finances",
      "https://www.tudelft.nl/en/education/admission-and-application/bsc-international-diploma/1-admission-requirements"
    ],
    dirs: ["it", "arch", "design", "science"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Vera de Kok",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Pro-Palestinian_encampment_-_TU_Delft_Library_2024.jpg"
    }
  },
  {
    id: "eur",
    name: "Erasmus University Rotterdam",
    country: "Нидерланды",
    city: "Роттердам",
    tuition: "€13 500 в год для не-ЕС (большинство школ), RSM — €14 000",
    feeYear: 13500,
    cur: "EUR",
    ielts: 6,
    lang: "английский",
    deadline: "1 апреля (не-ЕС) / 15 января (программы с лимитом)",
    src: [
      "https://www.eur.nl/en/education/practical-matters/registration/tuition-fee/tuition-fee-2026-2027",
      "https://www.eur.nl/en/bachelor/international-bachelor-economics-and-business-economics/admission"
    ],
    note: "IELTS от 6.0 до 7.0 в зависимости от программы",
    dirs: ["business", "social", "medicine", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "PersianDutchNetwork",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Erasmus_University_Night_Rotterdam_2013.JPG"
    }
  },
  {
    id: "rug",
    name: "University of Groningen",
    country: "Нидерланды",
    city: "Гронинген",
    tuition: "Плата для не-ЕС — см. сайт (зависит от программы)",
    feeYear: null,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / нидерландский",
    deadline: "15 января (с лимитом) / 1 мая (остальные)",
    src: [
      "https://www.rug.nl/education/application-enrolment-tuition-fees/admission/procedures/application-informatie/application-deadlines/bachelor-application-deadlines?lang=en",
      "https://www.rug.nl/education/application-enrolment-tuition-fees/admission/procedures/application-informatie/with-non-dutch-diploma/bachelor/bachelor-entry-requirements/language-requirements-and-exemptions?lang=en"
    ],
    dirs: ["science", "social", "business", "law", "medicine", "it"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Donald Trung Quoc Don",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Groningen_-_Campus_Frysl%C3%A2n,_Leeuwarden_(2018)_01.jpg"
    }
  },
  {
    id: "maastricht",
    name: "Maastricht University",
    country: "Нидерланды",
    city: "Маастрихт",
    tuition: "€13 200–32 000 в год для не-ЕС (2026/27, по программам)",
    feeYear: 13200,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "уточняйте на сайте программы",
    src: [
      "https://www.maastrichtuniversity.nl/new-calculation-institutional-tuition-fees-and-transitional-arrangement"
    ],
    dirs: ["business", "social", "law", "medicine", "science"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Mark Ahsmann",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:20130504_Maastricht_View_over_Maastricht_from_Sint_Pietersberg_01(cropped).jpg"
    }
  },
  {
    id: "dae",
    name: "Design Academy Eindhoven",
    country: "Нидерланды",
    city: "Эйндховен",
    tuition: "€12 449 в год для не-ЕС (2026/27)",
    feeYear: 12449,
    cur: "EUR",
    ielts: 6,
    lang: "английский",
    deadline: "приём на 2026/27 закрыт; язык — до 22 апреля 2026",
    src: [
      "https://www.designacademy.nl/page/487/tuition-fees-and-living-expenses",
      "https://www.designacademy.nl/page/7476/bachelor-admissions-faq"
    ],
    dirs: ["design"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Rosemoon",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Building_VGZ_Eindhoven_-_Kennedy_Business_Center.JPG"
    }
  },
  {
    id: "kuleuven",
    name: "KU Leuven",
    country: "Бельгия",
    city: "Лёвен",
    tuition: "≈ €5 613 в год для не-ЕЭЗ (некоторые программы дороже)",
    feeYear: 5613,
    cur: "EUR",
    ielts: 7,
    lang: "английский / нидерландский",
    deadline: "1 марта (рекомендуемый для не-ЕЭЗ)",
    src: [
      "https://www.kuleuven.be/english/apply/application-instructions/apply-to-kuleuven"
    ],
    note: "IELTS 6.5–7.5 в зависимости от программы",
    dirs: ["arch", "it", "science", "medicine", "business", "social", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Kvdh",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:KU_Leuven_Campus_Brussels_Hermes.jpg"
    }
  },
  {
    id: "ugent",
    name: "Ghent University",
    country: "Бельгия",
    city: "Гент",
    tuition: "€7 079 в год (англоязычный бакалавриат, не-ЕЭЗ) / €1 181 (нидерландский)",
    feeYear: 7079,
    cur: "EUR",
    ielts: 6.5,
    lang: "нидерландский / английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://www.ugent.be/student/en/administration/tuition/tuition-fee-bachelor-programme-linking-programme-and-preparatory-programme.htm/copy_of_tuitionbalinkprepa20262027"
    ],
    dirs: ["science", "medicine", "it", "social", "law", "business"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "rvanhegelsom",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Ghent_University_campus_Ledeganck.jpg"
    }
  },
  {
    id: "ulb",
    name: "Université libre de Bruxelles",
    country: "Бельгия",
    city: "Брюссель",
    tuition: "€1 194 + €4 175 доп. взнос в год (не-ЕС, если страна не в списке освобождения)",
    feeYear: 5369,
    cur: "EUR",
    ielts: null,
    lang: "французский",
    deadline: "16 февраля – 31 марта (для не-ЕС)",
    src: [
      "https://www.ulb.be/en/enrolment/tuitions-fees",
      "https://www.ulb.be/en/enrolment/submit-an-application"
    ],
    dirs: ["social", "law", "science", "medicine", "business", "arch"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Edison McCullen",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Facult%C3%A9_de_droit_de_l%27universit%C3%A9_libre_de_Bruxelles.jpg"
    }
  },
  {
    id: "sorbonne",
    name: "Sorbonne Université",
    country: "Франция",
    city: "Париж",
    tuition: "€175 в год (бакалавриат) + CVEC; для не-ЕС возможен дифференцированный тариф — см. сайт",
    feeYear: 175,
    cur: "EUR",
    ielts: null,
    lang: "французский",
    deadline: "DAP: 1 октября – 15 января (для не-ЕС, через Campus France)",
    src: [
      "https://www.sorbonne-universite.fr/en/news/registration-procedures-international-students"
    ],
    dirs: ["science", "medicine", "social"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Benoît Prieur",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Universit%C3%A9_Sorbonne_Nouvelle_-_entr%C3%A9e_en_juin_2023.JPG"
    }
  },
  {
    id: "sciencespo",
    name: "Sciences Po",
    country: "Франция",
    city: "Париж",
    tuition: "€14 900 в год для не-ЕС (первое зачисление)",
    feeYear: 14900,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / французский",
    deadline: "1 марта 2027 (международный трек)",
    src: [
      "https://www.sciencespo.fr/students/en/fees-funding/tuition-fees/",
      "https://www.sciencespo.fr/admissions/en/undergraduate/foreign-secondary-schools/"
    ],
    dirs: ["social", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Maxime GRÉGOIRE",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Amphith%C3%A9%C3%A2tre_%C3%A9tudiant,_salle_de_cours._Ancien_Coll%C3%A8ge_des_J%C3%A9suites_de_Reims,_aujourd%27hui_campus_de_Sciences_Po_Paris.jpg"
    }
  },
  {
    id: "polytechnique",
    name: "École Polytechnique",
    country: "Франция",
    city: "Палезо",
    tuition: "€19 600 в год для не-ЕС (Bachelor of Science, набор 2027)",
    feeYear: 19600,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "1-й раунд: 17 сентября – 20 октября 2026",
    src: [
      "https://programmes.polytechnique.edu/en/bachelor/costs-and-funding/tuition-fees",
      "https://programmes.polytechnique.edu/en/bachelor/admissions/faq"
    ],
    dirs: ["it", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Jérémy Barande",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_Ecole_polytechnique_de_palaiseau.jpg"
    }
  },
  {
    id: "saclay",
    name: "Université Paris-Saclay",
    country: "Франция",
    city: "Париж",
    tuition: "€178 в год (бакалавриат); для не-ЕС действует частичное освобождение",
    feeYear: 178,
    cur: "EUR",
    ielts: null,
    lang: "французский",
    deadline: "уточняйте на сайте (Campus France / Parcoursup)",
    src: ["https://www.universite-paris-saclay.fr/en/admission/tuition-fees"],
    dirs: ["science", "it", "medicine", "law"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Chabe01",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:B%C3%A2timent_102_Campus_Vall%C3%A9e_Universit%C3%A9_Paris_Saclay_-_Orsay_(FR91)_-_2026-01-17_-_1.jpg"
    }
  },
  {
    id: "psl",
    name: "Université PSL",
    country: "Франция",
    city: "Париж",
    tuition: "€175 в год (национальный бакалавриат); англоязычные International Bachelor — €19 500–20 000 для не-ЕС",
    feeYear: 175,
    cur: "EUR",
    ielts: null,
    lang: "французский / английский",
    deadline: "Campus France: 1 октября – 15 декабря; Parcoursup: до 12 марта",
    src: [
      "https://psl.eu/en/education/applying-bachelors-degree",
      "https://psl.eu/en/education/international-bachelor-science-ai"
    ],
    dirs: ["science", "social", "business", "design"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "RT59RC",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:B%C3%A2timent_Recherche_Nord,_Campus_Condorcet_2024.jpg"
    }
  },
  {
    id: "uga",
    name: "Université Grenoble Alpes",
    country: "Франция",
    city: "Гренобль",
    tuition: "€178 в год (бакалавриат); для не-ЕС — дифференцированный тариф, возможно освобождение",
    feeYear: 178,
    cur: "EUR",
    ielts: null,
    lang: "французский",
    deadline: "уточняйте на сайте (Campus France)",
    src: [
      "https://www.univ-grenoble-alpes.fr/registration-fees/registration-fees-626553.kjsp"
    ],
    dirs: ["science", "it", "social"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Rémih",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Biblioth%C3%A8que_sciences_campus_Grenoble.JPG"
    }
  },
  {
    id: "polimi",
    name: "Politecnico di Milano",
    country: "Италия",
    city: "Милан",
    tuition: "до €3 893 в год (не-ЕС, проживающие за рубежом — максимальная ставка)",
    feeYear: 3893,
    cur: "EUR",
    ielts: 6,
    lang: "английский / итальянский",
    deadline: "зависит от направления, несколько окон в год",
    src: [
      "https://www.polimi.it/en/prospective-students/how-much-does-it-cost/laurea-laurea-magistrale-and-single-cycle-programmes",
      "https://www.polimi.it/en/students/language-requirements/students-of-an-english-language-laurea-study-programme"
    ],
    dirs: ["arch", "design", "it", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Pasafr",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:PoliMi_main_building.jpg"
    }
  },
  {
    id: "unibo",
    name: "Università di Bologna",
    country: "Италия",
    city: "Болонья",
    tuition: "от €157 + переменная часть по доходу; для граждан не-ОЭСР — фиксированно €1 157",
    feeYear: 1157,
    cur: "EUR",
    ielts: 6,
    lang: "итальянский / английский",
    deadline: "зависит от программы",
    src: [
      "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/tuition-fees-and-exemptions",
      "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/tuition-fees-and-exemptions/reduced-fixed-fee-for-citizens-of-particularly-poor-and-developing-countries-or-non-eu-non-oecd-countries"
    ],
    dirs: ["social", "law", "science", "medicine", "business"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Twice25 & Rinina25",
      license: "CC BY 2.5",
      url: "https://commons.wikimedia.org/wiki/File:Bologna-Saffi-Universit%C3%A0-DSCF7205.JPG"
    }
  },
  {
    id: "sapienza",
    name: "Sapienza Università di Roma",
    country: "Италия",
    city: "Рим",
    tuition: "€300–1 500 в год (зависит от страны проживания)",
    feeYear: 1500,
    cur: "EUR",
    ielts: null,
    lang: "итальянский / английский",
    deadline: "15 мая 2026 (не-ЕС, нужна виза), регистрация Universitaly до 30 июня",
    src: ["https://www.uniroma1.it/en/en/admissions"],
    dirs: ["arch", "medicine", "science", "social", "law", "it"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Albarubescens",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Green_roofs,_Citt%C3%A0_universitaria_of_Rome.jpg"
    }
  },
  {
    id: "bocconi",
    name: "Bocconi University",
    country: "Италия",
    city: "Милан",
    tuition: "≈ €17 000 в год (бакалавриат, 2026/27)",
    feeYear: 17000,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / итальянский",
    deadline: "несколько раундов; пример: 2–29 сент., 25 нояб. – 26 янв., 8–27 апр.",
    src: [
      "https://www.unibocconi.it/en/applying-bocconi/bachelor-and-law-programs/fees",
      "https://www.unibocconi.it/en/applying-bocconi/bachelor-and-law-programs/application-and-admissions/english-certificates-accepted-enrollment"
    ],
    dirs: ["business", "law", "social"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Paolo Gamba",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Bocconi_Grafton_Building_Milan.jpg"
    }
  },
  {
    id: "polito",
    name: "Politecnico di Torino",
    country: "Италия",
    city: "Турин",
    tuition: "до €2 601 в год (не-ЕС, зависит от страны)",
    feeYear: 2601,
    cur: "EUR",
    ielts: null,
    lang: "английский (B2) / итальянский",
    deadline: "22 мая 2026 (не-ЕС, нужна виза)",
    src: [
      "https://www.polito.it/en/education/applying-studying-graduating/admissions-and-enrolment/bachelor-s-degree-programmes/applicants-with-a-non-italian-qualification"
    ],
    dirs: ["it", "arch", "design", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Neq00",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Politecnico_di_Torino_(sede_di_corso_Duca).JPG"
    }
  },
  {
    id: "unipd",
    name: "Università di Padova",
    country: "Италия",
    city: "Падуя",
    tuition: "€2 790 (гуманитарные) / €2 990 (естественные) в год для не-ЕС",
    feeYear: 2790,
    cur: "EUR",
    ielts: null,
    lang: "итальянский / английский",
    deadline: "7 января – 7 марта 2027 (программы с ограничением мест)",
    src: [
      "https://www.unipd.it/en/contribuzione-studentesca",
      "https://www.unipd.it/en/studiare-inglese-come-fare-domanda"
    ],
    dirs: ["medicine", "science", "social", "it", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Mattiniero70",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:DSC_6587_fiore_di_botta.jpg"
    }
  },
  {
    id: "unimi",
    name: "Università degli Studi di Milano",
    country: "Италия",
    city: "Милан",
    tuition: "€146 + вторая часть по доходу (ISEE); для иностранцев — фиксированные суммы по группе гражданства",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "итальянский / английский",
    deadline: "30 апреля 2026 (не-ЕС, нужна виза)",
    src: [
      "https://www.unimi.it/en/study/bachelor-and-master-study/fees-and-how-pay-them/fees-2026/2027"
    ],
    dirs: ["medicine", "science", "law", "social"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Stefano Stabile",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Universit%C3%A0_degli_Studi_di_Milano_-_sede_via_festa_del_perdono_-_Ca%27_Granda_-_cortile_interno.JPG"
    }
  },
  {
    id: "ub",
    name: "Universitat de Barcelona",
    country: "Испания",
    city: "Барселона",
    tuition: "€82 за кредит для не-ЕС (≈ €4 920 за 60 ECTS) + сборы",
    feeYear: 4920,
    cur: "EUR",
    ielts: null,
    lang: "испанский / каталанский",
    deadline: "зависит от программы (предзапись весной)",
    src: ["https://www.ub.edu/acad/matricula/decreto.pdf"],
    dirs: ["social", "medicine", "science", "law", "business", "design"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Léna",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Edifici_hist%C3%B2ric_de_la_Universitat_de_Barcelona,_garden.jpg"
    }
  },
  {
    id: "uam",
    name: "Universidad Autónoma de Madrid",
    country: "Испания",
    city: "Мадрид",
    tuition: "€113,71–136,44 за кредит для не-ЕС без резидентства (≈ €6 820–8 190 в год)",
    feeYear: 6820,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "25 июня – 6 июля 2026 (перевод с иностранным образованием)",
    src: [
      "https://www.uam.es/uam/media/doc/1606965874673/precios-para-estudiantes-extranjeros---ea.pdf"
    ],
    dirs: ["science", "medicine", "law", "social", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Zarateman",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Campus_de_la_Universidad_Aut%C3%B3noma_de_Madrid_(UAM)-Centro_de_Estudios_de_Posgrado.JPG"
    }
  },
  {
    id: "ucm",
    name: "Universidad Complutense de Madrid",
    country: "Испания",
    city: "Мадрид",
    tuition: "€113,71–136,44 за кредит для не-ЕС без резидентства (≈ €6 820–8 190 в год)",
    feeYear: 6820,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "ранний приём: 3 комиссии (февраль, апрель, июнь)",
    src: [
      "https://www.ucm.es/faq/matricula/que-precio-tiene-un-grado-universitario-si-soy-extranjero",
      "https://www.ucm.es/informacion/precios-de-grado"
    ],
    dirs: ["social", "medicine", "law", "science", "design"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Ricardo Ricote Rodrí…",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Universidad_Complutense,_Campus_de_la_Ciudad_Universitaria_de_Madrid_-_panoramio.jpg"
    }
  },
  {
    id: "upf",
    name: "Universitat Pompeu Fabra",
    country: "Испания",
    city: "Барселона",
    tuition: "≈ €6 800–6 911 в год для не-ЕС (одинарный бакалавриат)",
    feeYear: 6800,
    cur: "EUR",
    ielts: null,
    lang: "испанский / каталанский / английский (B2)",
    deadline: "зависит от программы (весной)",
    src: ["https://www.upf.edu/en/web/graus/preus"],
    dirs: ["business", "social", "law", "it", "medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Xavier Dengra",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Pati_Jaume_I_Universitat_Pompeu_Fabra.jpg"
    }
  },
  {
    id: "ie",
    name: "IE University",
    country: "Испания",
    city: "Мадрид / Сеговия",
    tuition: "€26 500–29 880 в год (частный вуз)",
    feeYear: 26500,
    cur: "EUR",
    ielts: 7,
    lang: "английский",
    deadline: "несколько раундов приёма",
    src: [
      "https://www.ie.edu/university/admission/payment-methods/",
      "https://www.ie.edu/university/studies/academic-programs/bachelor-laws/admissions-fees/"
    ],
    dirs: ["business", "law", "social", "arch", "design"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "FDV",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Caleido-IE-31102022.jpg"
    }
  },
  {
    id: "ulisboa",
    name: "Universidade de Lisboa",
    country: "Португалия",
    city: "Лиссабон",
    tuition: "€3 500 в год (статус международного студента, Faculdade de Ciências)",
    feeYear: 3500,
    cur: "EUR",
    ielts: null,
    lang: "португальский / английский",
    deadline: "2 января – 6 февраля и 6 апреля – 22 мая 2026",
    src: [
      "https://ciencias.ulisboa.pt/en/international-student-tuition-fees",
      "https://ciencias.ulisboa.pt/en/international-students/application-bachelors-degree"
    ],
    dirs: ["arch", "design", "science", "medicine", "law", "social"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Jotaguareluaz",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Universidade_Europeia_Campus_Carnide_(Lisboa).png"
    }
  },
  {
    id: "uporto",
    name: "Universidade do Porto",
    country: "Португалия",
    city: "Порту",
    tuition: "€3 500–16 500 в год для международных студентов (по факультетам)",
    feeYear: 3500,
    cur: "EUR",
    ielts: null,
    lang: "португальский",
    deadline: "2 янв – 6 фев / 9 фев – 2 апр / 2 июня – 22 июля 2026",
    src: [
      "https://www.up.pt/portal/en/study/bachelors-and-integrated-masters-degrees/general-information-and-tuition-fees/",
      "https://www.up.pt/portal/en/study/international-students/special-call-for-applications/"
    ],
    dirs: ["arch", "design", "medicine", "science", "it", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Eugenio Hansen, OFS",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Universidade_do_Vale_do_Rio_dos_Sinos._Campus_Porto_Alegre.jpg"
    }
  },
  {
    id: "univie",
    name: "Universität Wien",
    country: "Австрия",
    city: "Вена",
    tuition: "€726,72 за семестр для не-ЕС + взнос ÖH",
    feeYear: 1453,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "22 июня – 3 августа 2026 (зимний семестр, не-ЕС)",
    src: [
      "https://wiki.univie.ac.at/pages/viewpage.action?pageId=145832071",
      "https://studieren.univie.ac.at/en/admission/application-and-admission-periods/"
    ],
    dirs: ["social", "science", "law"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Josef Krpelan / derknopfdruecker.com, Universität Wien",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:11_Universit%C3%A4t_Wien_Campus-der-Universit%C3%A4t_Hof1_Park_Ian_Ehm.jpg"
    }
  },
  {
    id: "wu",
    name: "WU Vienna University of Economics and Business",
    country: "Австрия",
    city: "Вена",
    tuition: "€726,72 за семестр для не-ЕС + ÖH €26,20",
    feeYear: 1453,
    cur: "EUR",
    ielts: null,
    lang: "немецкий / английский (B2)",
    deadline: "5 сентября (зимний) / 5 февраля (летний)",
    src: [
      "https://www.wu.ac.at/en/students/getting-organized/tuition-fees-students-union-oeh-dues",
      "https://www.wu.ac.at/en/programs/application-and-admission/zulassungsfristen-fuer-die-erstzulassung"
    ],
    dirs: ["business", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "P e z i",
      license: "CC BY-SA 3.0 at",
      url: "https://commons.wikimedia.org/wiki/File:Campus_WU_D4_DSC_1441w.jpg"
    }
  },
  {
    id: "tuwien",
    name: "TU Wien",
    country: "Австрия",
    city: "Вена",
    tuition: "€726,72 за семестр для не-ЕС + взнос ÖH",
    feeYear: 1453,
    cur: "EUR",
    ielts: null,
    lang: "немецкий",
    deadline: "16 января – 15 июля (зимний семестр, не-ЕС)",
    src: [
      "https://www.tuwien.at/en/studies/admission/students-union-fee-and-tuition-fee/tuition-fee",
      "https://www.tuwien.at/en/studies/admission/bachelors-programmes/admission-with-an-international-school-leaving-certificate"
    ],
    dirs: ["it", "arch", "science"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Peter Haas",
      license: "CC BY-SA 3.0 at",
      url: "https://commons.wikimedia.org/wiki/File:Technische_Universit%C3%A4t_Wien_mainbuilding_mainentrance_northview.jpg"
    }
  },
  {
    id: "angewandte",
    name: "Universität für angewandte Kunst Wien",
    country: "Австрия",
    city: "Вена",
    tuition: "€752,92 за семестр для не-ЕС",
    feeYear: 1506,
    cur: "EUR",
    ielts: null,
    lang: "немецкий / английский",
    deadline: "портфолио 7–21 января 2027, экзамены 22 февраля – 5 марта 2027",
    src: [
      "https://dieangewandte.at/en/studies/study_information/tuition_fees",
      "https://www.dieangewandte.at/application"
    ],
    dirs: ["design", "arch"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Viennaphotographer",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Bibliothek_der_Universit%C3%A4t_f%C3%BCr_Angewandte_Kunst.jpg"
    }
  },
  {
    id: "eth",
    name: "ETH Zürich",
    country: "Швейцария",
    city: "Цюрих",
    tuition: "CHF 2 190 за семестр для иностранных студентов (часть — CHF 730)",
    feeYear: 4700,
    cur: "CHF",
    ielts: null,
    lang: "немецкий (бакалавриат)",
    deadline: "1 декабря – 31 марта (иностранный аттестат)",
    src: [
      "https://ethz.ch/en/studies/financial.html",
      "https://ethz.ch/en/studies/bachelor/application/non-swiss-matriculation-certificate/dates.html"
    ],
    dirs: ["it", "science", "arch"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "Jean Schmitt",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Cows_in_front_of_the_campus_ETH_H%C3%B6nggerberg.jpg"
    }
  },
  {
    id: "epfl",
    name: "EPFL",
    country: "Швейцария",
    city: "Лозанна",
    tuition: "CHF 2 190 за семестр для иностранных студентов (с осени 2025) + сборы",
    feeYear: 4700,
    cur: "CHF",
    ielts: null,
    lang: "французский (бакалавриат)",
    deadline: "середина ноября – 30 апреля",
    src: [
      "https://www.epfl.ch/education/studies/en/rules-and-procedures/study-taxes/tuition-fee-other-fees/",
      "https://www.epfl.ch/education/admission/admission-2/bachelor-admission-criteria-and-application/how-to-apply/"
    ],
    dirs: ["it", "science", "arch"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "Manuel Schmalstieg",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_EPFL_-_B%C3%A2timent_BI_01.jpg"
    }
  },
  {
    id: "uzh",
    name: "University of Zurich",
    country: "Швейцария",
    city: "Цюрих",
    tuition: "CHF 1 220 за семестр для иностранных студентов (720 + 500 надбавка)",
    feeYear: 2600,
    cur: "CHF",
    ielts: null,
    lang: "немецкий",
    deadline: "1 января – 30 апреля (осенний семестр)",
    src: [
      "https://www.uzh.ch/en/studies/application/fees.html",
      "https://www.uzh.ch/en/studies/application/deadlines.html"
    ],
    dirs: ["medicine", "law", "social", "science", "business"],
    region: "eu",
    citySize: "big",
    english: false,
    photo: {
      author: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_Switzerland-University-of-Zurich-Main-Building-01.jpg"
    }
  },
  {
    id: "cuni",
    name: "Charles University",
    country: "Чехия",
    city: "Прага",
    tuition: "англоязычные программы: ≈ €5 000–7 100 в год (не-ЕС, по факультетам)",
    feeYear: 5000,
    cur: "EUR",
    ielts: null,
    lang: "чешский / английский",
    deadline: "28 февраля – 30 апреля 2026 (по факультетам)",
    src: ["https://cuni.cz/UKEN-372.html", "https://cuni.cz/UKEN-1632.html"],
    dirs: ["medicine", "social", "law", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "VitVit",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Praha_Karolinum_ext_1.jpg"
    }
  },
  {
    id: "muni",
    name: "Masaryk University",
    country: "Чехия",
    city: "Брно",
    tuition: "англоязычный бакалавриат: CZK 68 000 (≈ €2 700) – €3 000 в год, отдельные программы до €14 000",
    feeYear: 2700,
    cur: "EUR",
    ielts: null,
    lang: "чешский / английский",
    deadline: "по факультетам: 28 февраля – 15 мая",
    src: [
      "https://www.muni.cz/en/admissions/bachelors-and-masters-studies/how-to-apply",
      "https://www.sci.muni.cz/en/international/study-in-english/bc"
    ],
    dirs: ["it", "social", "medicine", "science", "business", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "I.Sáček, senior",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:2013_Masaryk_University_Campus_20703.JPG"
    }
  },
  {
    id: "vut",
    name: "Brno University of Technology",
    country: "Чехия",
    city: "Брно",
    tuition: "англоязычные программы €1 000–9 200 в год (не-ЕС), FIT — €3 000",
    feeYear: 3000,
    cur: "EUR",
    ielts: null,
    lang: "чешский / английский",
    deadline: "обычно до 31 марта (по программам)",
    src: [
      "https://www.vut.cz/en/students/admission-office/faq",
      "https://www.fit.vut.cz/applicants/degree-programme-en/.en"
    ],
    dirs: ["it", "arch", "design", "business"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Mercy",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Building_in_Udolni_street,_Brno.jpg"
    }
  },
  {
    id: "cvut",
    name: "Czech Technical University in Prague",
    country: "Чехия",
    city: "Прага",
    tuition: "CZK 110 000 в год (англоязычный бакалавриат)",
    feeYear: 4400,
    cur: "CZK",
    ielts: null,
    lang: "чешский / английский",
    deadline: "31 марта – 13 августа 2026 (по факультетам)",
    src: [
      "https://fjfi.cvut.cz/en/applicants/bachelors-studies",
      "https://www.fbmi.cvut.cz/en/admissions/how-to-apply"
    ],
    dirs: ["it", "arch", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Czech Wikipedia user Packa",
      license: "CC BY-SA 2.5",
      url: "https://commons.wikimedia.org/wiki/File:CzechTech_Univ_Campus,_Prague_Dejvice.jpg"
    }
  },
  {
    id: "uw",
    name: "University of Warsaw",
    country: "Польша",
    city: "Варшава",
    tuition: "зависит от программы; пример — €5 250 за семестр (английская филология, не-ЕС, 2025/26)",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "польский / английский",
    deadline: "июнь – 9 июля (первый цикл)",
    src: [
      "https://welcome.uw.edu.pl/before-you-arrive/tuition-fees/",
      "https://rekrutacja.uw.edu.pl/files/pdf/tuition_fees_2025-2026_06.2025.pdf"
    ],
    dirs: ["social", "law", "science", "business"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Scotch Mist",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Warsaw_2023_109_University_Main_Gate.jpg"
    }
  },
  {
    id: "uj",
    name: "Jagiellonian University",
    country: "Польша",
    city: "Краков",
    tuition: "англоязычный бакалавриат: €4 200–5 000 в год (напр. European Studies, Global and Development Studies)",
    feeYear: 4200,
    cur: "EUR",
    ielts: null,
    lang: "польский / английский",
    deadline: "1-й раунд 23 февраля – 9 марта, далее до 24 июня",
    src: [
      "https://internationalstudents.uj.edu.pl/en/studenci/oplaty",
      "https://irk.uj.edu.pl/en-gb/offer/IiJM_C_26/programme/global.deve.stud_s1s_C_en/"
    ],
    dirs: ["social", "medicine", "science", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Slawojar2",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Faculty_of_Biochemistry,_Biophysics_and_Biotechnology_of_the_Jagiellonian_University.jpg"
    }
  },
  {
    id: "pw",
    name: "Warsaw University of Technology",
    country: "Польша",
    city: "Варшава",
    tuition: "€2 000–3 000 за семестр для не-ЕС (англоязычный B.Sc.)",
    feeYear: 4000,
    cur: "EUR",
    ielts: null,
    lang: "польский / английский",
    deadline: "заявка до 21 июля 2026, документы до 19 августа (октябрьский набор)",
    src: [
      "https://www.students.pw.edu.pl/How-to-Apply/Admission-to-B.Sc",
      "https://ww4.mini.pw.edu.pl/application-process/tuition-fees/"
    ],
    dirs: ["it", "arch", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "OstroKemp77",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Czytelnia_Biblioteki_Terenu_Po%C5%82udniowego_PW.jpg"
    }
  },
  {
    id: "elte",
    name: "Eötvös Loránd University (ELTE)",
    country: "Венгрия",
    city: "Будапешт",
    tuition: "€2 000–4 500 за семестр для не-ЕС (по факультетам)",
    feeYear: 7200,
    cur: "EUR",
    ielts: null,
    lang: "венгерский / английский",
    deadline: "31 мая 2026 (самофинансирование, осенний набор)",
    src: [
      "https://www.elte.hu/en/student-finances",
      "https://gtk.elte.hu/en/application-deadline-for-self-financed-international-students-nearing"
    ],
    dirs: ["social", "science", "law", "it"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Globetrotter19",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:E%C3%B6tv%C3%B6s_Lor%C3%A1nd_University_-_North_and_South_Block_from_R%C3%A1k%C3%B3czi_Bridge,_2016_Budapest.jpg"
    }
  },
  {
    id: "semmelweis",
    name: "Semmelweis University",
    country: "Венгрия",
    city: "Будапешт",
    tuition: "General Medicine: USD 10 450 за семестр (англ. программа)",
    feeYear: 19000,
    cur: "USD",
    ielts: null,
    lang: "английский / венгерский / немецкий",
    deadline: "31 мая 2027 (General Medicine)",
    src: [
      "https://semmelweis.hu/registrar/files/2025/12/Admission_Rules_2026.pdf",
      "https://semmelweis.hu/admission/programs/medicine/"
    ],
    dirs: ["medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Globetrotter19",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_Ludovik_Sportpl%C3%A4tze,_Sporthalle_von_Nagyv%C3%A1radplatz_4,_2024_J%C3%B3zsefv%C3%A1ros.jpg"
    }
  },
  {
    id: "helsinki",
    name: "University of Helsinki",
    country: "Финляндия",
    city: "Хельсинки",
    tuition: "€13 000 в год для не-ЕС (англоязычный бакалавриат)",
    feeYear: 13000,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / финский / шведский",
    deadline: "5–19 января 2027 (группа 1, иностранный аттестат)",
    src: [
      "https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/tuition-fees-and-scholarship-programme",
      "https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/apply-bachelors-programmes"
    ],
    dirs: ["science", "social", "law", "medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Coen",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Diaconia_University_of_Applied_Sciences_in_Kyl%C3%A4saari,_Helsinki,_Finland,_2021.jpg"
    }
  },
  {
    id: "aalto",
    name: "Aalto University",
    country: "Финляндия",
    city: "Эспоо",
    tuition: "€12 000 (бизнес, технологии) / €15 000 (искусство и дизайн) в год для не-ЕС",
    feeYear: 12000,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "7–22 января 2027",
    src: [
      "https://www.aalto.fi/en/admission-services/scholarships-and-tuition-fees",
      "https://www.aalto.fi/en/admission-services/apply-to-bachelors-programmes-in-english"
    ],
    dirs: ["design", "it", "business", "arch", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Lauri Silvennoinen",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Aalto_University_Otaniemi_Campus_Library_October_7_2012_01.png"
    }
  },
  {
    id: "tampere",
    name: "Tampere University",
    country: "Финляндия",
    city: "Тампере",
    tuition: "€10 000 в год для не-ЕС (бакалавриат, набор 2026)",
    feeYear: 10000,
    cur: "EUR",
    ielts: 6,
    lang: "английский / финский",
    deadline: "7–21 января 2027",
    src: [
      "https://www.tuni.fi/en/study-with-us/apply-to-tampere-university/financial-matters/tuition-fees-scholarships",
      "https://www.tuni.fi/en/tau/bachelors-programmes/applying"
    ],
    dirs: ["it", "social", "medicine", "science"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Kotivalo",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Tampere_University_Kampusareena_Hervanta.jpg"
    }
  },
  {
    id: "lund",
    name: "Lund University",
    country: "Швеция",
    city: "Лунд",
    tuition: "≈ SEK 375 000–390 000 за всю программу (≈ SEK 130 000 в год) для не-ЕС",
    feeYear: 11500,
    cur: "SEK",
    ielts: null,
    lang: "английский / шведский",
    deadline: "середина октября – 15 января",
    src: [
      "https://www.lunduniversity.lu.se/study/international-business-bachelors-programme-EGIBU",
      "https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/applying-studies-when-apply"
    ],
    dirs: ["science", "social", "business", "law", "medicine", "arch"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Einaz80",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Lund_University_Main_Building.jpg"
    }
  },
  {
    id: "kth",
    name: "KTH Royal Institute of Technology",
    country: "Швеция",
    city: "Стокгольм",
    tuition: "SEK 423 000 за всю программу (BSc ICT) для не-ЕС",
    feeYear: 12400,
    cur: "SEK",
    ielts: null,
    lang: "английский / шведский",
    deadline: "16 октября 2026 – 15 января 2027, документы до 1 февраля",
    src: [
      "https://www.kth.se/en/studies/bachelor/fees-1.646274",
      "https://www.kth.se/en/studies/bachelor/how-to-apply-for-bachelor-s-studies-1.450312"
    ],
    dirs: ["it", "arch", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Joongi Kim from Stockholm, South Korea",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:KTH_Main_Campus_(2438722826).jpg"
    }
  },
  {
    id: "uppsala",
    name: "Uppsala University",
    country: "Швеция",
    city: "Уппсала",
    tuition: "SEK 297 000–495 000 за всю программу для не-ЕС (по программам)",
    feeYear: 10900,
    cur: "SEK",
    ielts: null,
    lang: "английский / шведский",
    deadline: "15 января",
    src: [
      "https://www.uu.se/en/study/bachelors-studies",
      "https://www.uu.se/en/study/programme/bachelors-programme-game-design-and-graphics"
    ],
    dirs: ["science", "social", "medicine", "law", "design"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Gustav Lundin",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_1477_Bl%C3%A5senhus_Uppsala_okt_2016.jpg"
    }
  },
  {
    id: "su",
    name: "Stockholm University",
    country: "Швеция",
    city: "Стокгольм",
    tuition: "SEK 90 000 (гуманитарные/соц./право) / SEK 140 000 (естественные) в год для не-ЕС",
    feeYear: 7900,
    cur: "SEK",
    ielts: null,
    lang: "шведский / английский",
    deadline: "15 января 2027 (осень 2027)",
    src: [
      "https://www.su.se/english/education/how-to-apply/costs-fees-and-scholarships",
      "https://www.su.se/english/education/how-to-apply/important-dates"
    ],
    dirs: ["social", "science", "law", "business"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Leonhard Lenz",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Albano_campusomr%C3%A5de_Stockholm_2022-09-20_01.jpg"
    }
  },
  {
    id: "ku",
    name: "University of Copenhagen",
    country: "Дания",
    city: "Копенгаген",
    tuition: "для не-ЕС платно — сумма на странице программы",
    feeYear: null,
    cur: "DKK",
    ielts: null,
    lang: "датский / английский",
    deadline: "15 марта (12:00 CET), документы до 5 июля",
    src: [
      "https://www.ku.dk/studies/admission/bachelor/non-eu-eea-and-non-nordic-countries"
    ],
    dirs: ["science", "social", "law", "medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Jens Cederskjold from København S, Danmark",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Campus_architecture_-_Karen_Blixens_Plads_-_University_of_Copenhagen_(50698437228).jpg"
    }
  },
  {
    id: "dtu",
    name: "Technical University of Denmark (DTU)",
    country: "Дания",
    city: "Конгенс-Люнгбю",
    tuition: "€15 000 в год для не-ЕС (BSc General Engineering)",
    feeYear: 15000,
    cur: "EUR",
    ielts: null,
    lang: "английский / датский",
    deadline: "15 марта, 12:00 (квота 2) / 5 июля (квота 1)",
    src: [
      "https://www.dtu.dk/english/education/undergraduate/general-engineering/admission-and-deadlines/fees-funding-and-permits",
      "https://www.dtu.dk/english/education/undergraduate/general-engineering/admission-and-deadlines/deadlines-and-important-dates"
    ],
    dirs: ["it", "science"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Askholmer",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:DTU%27s_campus_in_Sisimiut..jpg"
    }
  },
  {
    id: "uio",
    name: "University of Oslo",
    country: "Норвегия",
    city: "Осло",
    tuition: "NOK 218 000 в год для не-ЕЭЗ (2027/28)",
    feeYear: 18700,
    cur: "NOK",
    ielts: null,
    lang: "норвежский / английский",
    deadline: "15 октября – 1 декабря",
    src: [
      "https://www.uio.no/english/studies/admission/tuition/",
      "https://www.uio.no/english/studies/admission/"
    ],
    dirs: ["science", "social", "law", "medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Radosław Botev",
      license: "CC BY 3.0 pl",
      url: "https://commons.wikimedia.org/wiki/File:Domus_Media,_Universitetet_i_Oslo_2008.jpg"
    }
  },
  {
    id: "ntnu",
    name: "NTNU",
    country: "Норвегия",
    city: "Тронхейм",
    tuition: "для не-ЕЭЗ платно (пример: NOK 205 600 в год, магистратура) — см. программу",
    feeYear: null,
    cur: "NOK",
    ielts: null,
    lang: "норвежский / английский",
    deadline: "1 декабря (не-ЕС/ЕЭЗ)",
    src: [
      "https://www.ntnu.edu/studies/financing-and-scholarships",
      "https://www.ntnu.edu/studies/application"
    ],
    dirs: ["it", "arch", "science", "design", "medicine"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "NTNU – Norwegian University of Science and Technology",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:NTNU_-_Campus_Dragvoll.jpg"
    }
  },
  {
    id: "tartu",
    name: "University of Tartu",
    country: "Эстония",
    city: "Тарту",
    tuition: "€6 000 в год (англоязычный бакалавриат)",
    feeYear: 6000,
    cur: "EUR",
    ielts: 5.5,
    lang: "английский / эстонский",
    deadline: "15 апреля",
    src: [
      "https://ut.ee/en/content/frequently-asked-questions",
      "https://ut.ee/en/application-fee"
    ],
    note: "IELTS от 5.5 до 7.0 в зависимости от программы",
    dirs: ["science", "social", "medicine", "it", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Ivar Leidus",
      license: "CC BY-SA 3.0 ee",
      url: "https://commons.wikimedia.org/wiki/File:Tartu_%C3%9Clikooli_peahoone_2012.jpg"
    }
  },
  {
    id: "taltech",
    name: "Tallinn University of Technology (TalTech)",
    country: "Эстония",
    city: "Таллин",
    tuition: "€6 000–7 000 в год для не-ЕС (англоязычный бакалавриат)",
    feeYear: 6000,
    cur: "EUR",
    ielts: 6,
    lang: "английский / эстонский",
    deadline: "1 апреля (не-ЕС) / 1 мая (ОЭСР и проживающие в Эстонии)",
    src: [
      "https://taltech.ee/en/admission-and-application",
      "https://taltech.ee/en/bachelors-programmes/cyber-security-engineering"
    ],
    dirs: ["it", "business", "science"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Guillaume Speurt",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Tallinn_University_of_Technology_(7973998478).jpg"
    }
  },
  {
    id: "lu",
    name: "University of Latvia",
    country: "Латвия",
    city: "Рига",
    tuition: "€3 500 в год для не-ЕС (English, European Languages and Business Studies)",
    feeYear: 3500,
    cur: "EUR",
    ielts: null,
    lang: "латышский / английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://apply.lu.lv/courses/course/138",
      "https://www.lu.lv/en/admissions/degree-studies/"
    ],
    dirs: ["social", "business", "science", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Scotch Mist",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Vilnius_University_02.jpg"
    }
  },
  {
    id: "vu",
    name: "Vilnius University",
    country: "Литва",
    city: "Вильнюс",
    tuition: "€3 430–4 437 в год для не-ЕС (англоязычный бакалавриат)",
    feeYear: 4350,
    cur: "EUR",
    ielts: 6.5,
    lang: "литовский / английский",
    deadline: "1 июля (не-ЕС/EFTA)",
    src: [
      "https://www.vu.lt/en/admissions/admissions-to-bachelor-studies",
      "https://www.vu.lt/en/studies/bachelor-studies/international-business"
    ],
    dirs: ["social", "business", "medicine", "it", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "CAPTAIN RAJU",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Vilnius_in_2019.12.jpg"
    }
  },
  {
    id: "tcd",
    name: "Trinity College Dublin",
    country: "Ирландия",
    city: "Дублин",
    tuition: "для не-ЕС — по таблице сборов (зависит от программы)",
    feeYear: null,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "1 февраля (приоритетный), 30 июня (финальный)",
    src: [
      "https://www.tcd.ie/study/international/how-to-apply/entry-requirements.php",
      "https://www.tcd.ie/study/international/how-to-apply/index.php"
    ],
    dirs: ["social", "science", "medicine", "law", "business", "it"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Darren J. Prior",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Bilingual_Irish_English_languages_signs_on_Trinity_College_Dublin_TCD_campus_(2024).jpg"
    }
  },
  {
    id: "ucd",
    name: "University College Dublin",
    country: "Ирландия",
    city: "Дублин",
    tuition: "для не-ЕС — по таблице сборов (зависит от программы)",
    feeYear: null,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "с 1 октября; при необходимости визы — до 1 июля (рекомендуется)",
    src: [
      "https://www.ucd.ie/students/fees/noneucoursefees/",
      "https://www.ucd.ie/global/study-at-ucd/faqs/"
    ],
    dirs: ["business", "social", "science", "law", "medicine", "arch"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Alvarez Garrido",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Picture_of_the_University_College_Dublin_campus.jpg"
    }
  },
  {
    id: "oxford",
    name: "University of Oxford",
    country: "Великобритания",
    city: "Оксфорд",
    tuition: "£37 380–62 820 в год для иностранных студентов (2026/27)",
    feeYear: 43700,
    cur: "GBP",
    ielts: 7,
    lang: "английский",
    deadline: "15 октября, 18:00 (UCAS)",
    src: [
      "https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/course-fees",
      "https://www.ox.ac.uk/admissions/undergraduate/international-students/english-language-requirements"
    ],
    note: "IELTS 7.0–7.5 в зависимости от курса",
    dirs: ["social", "science", "law", "medicine", "it"],
    region: "uk",
    citySize: "student",
    english: true,
    photo: {
      author: "Julian Herzog (Website)",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Radcliffe_Camera_Oxford_Roof_Detail_2018.jpg"
    }
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    country: "Великобритания",
    city: "Кембридж",
    tuition: "£29 052–44 214 в год + college fee £13 245 (иностранные студенты, 2026/27)",
    feeYear: 49500,
    cur: "GBP",
    ielts: 7.5,
    lang: "английский",
    deadline: "15 октября 2026, 18:00 (UCAS, набор 2027)",
    src: [
      "https://www.undergraduate.study.cam.ac.uk/international-students/international-fees-and-costs",
      "https://www.undergraduate.study.cam.ac.uk/apply/before/entry-requirements"
    ],
    dirs: ["science", "social", "law", "medicine", "arch", "it"],
    region: "uk",
    citySize: "student",
    english: true,
    photo: {
      author: "Dmitry Tonkonog",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:20130808_Kings_College_Chapel_01.jpg"
    }
  },
  {
    id: "imperial",
    name: "Imperial College London",
    country: "Великобритания",
    city: "Лондон",
    tuition: "£42 700–58 600 в год для иностранных студентов (2026/27)",
    feeYear: 50000,
    cur: "GBP",
    ielts: 6.5,
    lang: "английский",
    deadline: "13 января 2027 (большинство курсов), 15 октября (медицина)",
    src: [
      "https://www.imperial.ac.uk/students/fees-and-funding/tuition-fees/undergraduate-tuition-fees/",
      "https://www.imperial.ac.uk/study/apply/undergraduate/process/deadlines/",
      "https://www.imperial.ac.uk/study/apply/english-language/"
    ],
    dirs: ["it", "science", "medicine", "business"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Dmnk.saman",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Imperial_College_-_South_Kensington_Campus.jpg"
    }
  },
  {
    id: "ucl",
    name: "University College London (UCL)",
    country: "Великобритания",
    city: "Лондон",
    tuition: "£32 000–46 700 в год для иностранных студентов (2026/27)",
    feeYear: 37400,
    cur: "GBP",
    ielts: 6.5,
    lang: "английский",
    deadline: "13 января 2027, 18:00 (UCAS, кроме медицины)",
    src: [
      "https://www.ucl.ac.uk/study/student-finances/tuition-fees/fee-schedules/fee-schedules-2026-2027/undergraduate-fees-2026-2027",
      "https://www.ucl.ac.uk/prospective-students/undergraduate/application/requirements/english-requirements"
    ],
    note: "IELTS 6.5–8.0 в зависимости от уровня программы",
    dirs: ["arch", "social", "science", "law", "medicine", "design"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Diliff",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Wilkins_Building_1,_UCL,_London_-_Diliff.jpg"
    }
  },
  {
    id: "lse",
    name: "London School of Economics (LSE)",
    country: "Великобритания",
    city: "Лондон",
    tuition: "£28 900–39 900 в год для иностранных студентов (2026/27)",
    feeYear: 33800,
    cur: "GBP",
    ielts: 7,
    lang: "английский",
    deadline: "UCAS (январь) — уточняйте на сайте",
    src: [
      "https://info.lse.ac.uk/staff/divisions/Planning-Division/Assets/Documents/Table-of-Fees-2026-27-and-PGR-structure-combined-28Nov2025.pdf"
    ],
    dirs: ["social", "business", "law"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Acumen Images",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:The_Marshall_Building_Campus,_London_School_of_Economics.jpg"
    }
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    country: "Великобритания",
    city: "Эдинбург",
    tuition: "фиксированная годовая плата для иностранных студентов — по таблице (зависит от программы)",
    feeYear: null,
    cur: "GBP",
    ielts: 6.5,
    lang: "английский",
    deadline: "13 января 2027 (UCAS), 15 октября 2026 (медицина)",
    src: [
      "https://study.ed.ac.uk/undergraduate/fees-funding/fees-costs/international-eu-eea",
      "https://study.ed.ac.uk/undergraduate/applying/making-application/when-apply",
      "https://study.ed.ac.uk/undergraduate/entry-requirements/english-language"
    ],
    dirs: ["science", "medicine", "social", "design", "law", "it"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Jorge Franganillo",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Edinburgh_Holyrood_Campus_(49483153027).jpg"
    }
  },
  {
    id: "manchester",
    name: "University of Manchester",
    country: "Великобритания",
    city: "Манчестер",
    tuition: "£27 800–37 800 в год для иностранных студентов (2026/27)",
    feeYear: 32500,
    cur: "GBP",
    ielts: 6,
    lang: "английский",
    deadline: "середина января (UCAS), 15 октября (медицина)",
    src: [
      "https://www.manchester.ac.uk/study/undergraduate/courses/2026/00560/bsc-computer-science/",
      "https://www.manchester.ac.uk/study/undergraduate/key-dates/"
    ],
    note: "IELTS 6.0–7.0 в зависимости от курса",
    dirs: ["business", "science", "it", "social", "medicine", "arch", "law"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "Rept0n1x",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Didsbury_Campus,_Manchester_Metropolitan_University_(1).JPG"
    }
  },
  {
    id: "kcl",
    name: "King's College London",
    country: "Великобритания",
    city: "Лондон",
    tuition: "для иностранных студентов — по таблице (зависит от программы)",
    feeYear: null,
    cur: "GBP",
    ielts: 6.5,
    lang: "английский",
    deadline: "13 января 2027 (UCAS), 15 октября 2026 (медицина, стоматология)",
    src: [
      "https://www.kcl.ac.uk/study/undergraduate/fees-and-funding/tuition-fees",
      "https://www.kcl.ac.uk/study/undergraduate/how-to-apply/english-language-requirements"
    ],
    note: "IELTS 6.5–7.5 в зависимости от программы",
    dirs: ["medicine", "social", "law", "science", "business"],
    region: "uk",
    citySize: "big",
    english: true,
    photo: {
      author: "KiloCharlieLima",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:King%27s_Building_and_Strand_quad.jpg"
    }
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology (MIT)",
    country: "США",
    city: "Кембридж (Массачусетс)",
    tuition: "$66 720 в год (обучение), полная стоимость ≈ $92 760 (2026/27); щедрая финансовая помощь",
    feeYear: 61400,
    cur: "USD",
    ielts: null,
    lang: "английский",
    deadline: "Early Action — начало ноября, Regular Action — 1 января",
    src: [
      "https://catalog.mit.edu/mit/undergraduate-education/costs/",
      "https://catalog.mit.edu/mit/undergraduate-education/admissions/"
    ],
    dirs: ["it", "science", "arch", "business"],
    region: "na",
    citySize: "student",
    english: true,
    photo: {
      author: "Peacearth",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Great_dome_of_MIT,_Feb_2021.jpg"
    }
  },
  {
    id: "stanford",
    name: "Stanford University",
    country: "США",
    city: "Стэнфорд",
    tuition: "см. сайт финансовой помощи (2026/27)",
    feeYear: null,
    cur: "USD",
    ielts: null,
    lang: "английский",
    deadline: "5 января (Regular Decision)",
    src: [
      "https://admission.stanford.edu/apply/international/index.html",
      "https://financialaid.stanford.edu/undergrad/apply/requirements/rd_international.html"
    ],
    note: "Тест по английскому не обязателен",
    dirs: ["it", "science", "business", "social", "medicine", "design"],
    region: "na",
    citySize: "student",
    english: true,
    photo: {
      author: "Mark Leschinsky",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Stanford_University_Aerial_View.jpg"
    }
  },
  {
    id: "harvard",
    name: "Harvard University",
    country: "США",
    city: "Кембридж (Массачусетс)",
    tuition: "$62 226 в год (обучение), полная стоимость ≈ $91 634 (2026/27)",
    feeYear: 57200,
    cur: "USD",
    ielts: null,
    lang: "английский",
    deadline: "1 января (Regular Decision)",
    src: [
      "https://registrar.fas.harvard.edu/tuition-and-fees",
      "https://college.harvard.edu/admissions/apply/first-year-applicants"
    ],
    note: "Тест по английскому не обязателен",
    dirs: ["social", "science", "law", "medicine", "business"],
    region: "na",
    citySize: "student",
    english: true,
    photo: {
      author: "Marco Almbauer",
      license: "Public domain",
      url: "https://commons.wikimedia.org/wiki/File:Harvard_Yard_im_Sommer.jpg"
    }
  },
  {
    id: "nyu",
    name: "New York University (NYU)",
    country: "США",
    city: "Нью-Йорк",
    tuition: "см. сайт (зависит от школы)",
    feeYear: null,
    cur: "USD",
    ielts: 7,
    lang: "английский",
    deadline: "5 января (Regular Decision)",
    src: [
      "https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/international-applicants.html"
    ],
    dirs: ["business", "social", "design", "law", "medicine", "science"],
    region: "na",
    citySize: "big",
    english: true,
    photo: {
      author: "Beyond My Ken",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Washington_News_near_University_Place.jpg"
    }
  },
  {
    id: "berkeley",
    name: "UC Berkeley",
    country: "США",
    city: "Беркли",
    tuition: "≈ $31 525 за семестр для нерезидентов (когорта 2026/27, вкл. доплату для нерезидентов)",
    feeYear: 58000,
    cur: "USD",
    ielts: 6.5,
    lang: "английский",
    deadline: "1–30 ноября",
    src: [
      "https://registrar.berkeley.edu/tuition-fees/fee-schedule/",
      "https://admissions.berkeley.edu/requirements-for-international-students",
      "https://admissions.berkeley.edu/apply-to-berkeley/dates-deadlines/"
    ],
    dirs: ["it", "science", "social", "business", "arch", "law"],
    region: "na",
    citySize: "student",
    english: true,
    photo: {
      author: "Pillsmarch",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:UC_Berkeley_College_of_Engineering,_McLaughlin_Hall.jpg"
    }
  },
  {
    id: "utoronto",
    name: "University of Toronto",
    country: "Канада",
    city: "Торонто",
    tuition: "≈ CAD 66 110 в год для иностранцев (2025/26, 1-й курс; ставки 2026/27 публикуются летом)",
    feeYear: 44300,
    cur: "CAD",
    ielts: 6.5,
    lang: "английский",
    deadline: "15 января (большинство программ), ранний — 7 ноября",
    src: [
      "https://future.utoronto.ca/sites/default/files/assets/files/2025/2026-27-International-UAB_1.pdf"
    ],
    dirs: ["science", "social", "it", "medicine", "business", "arch", "law"],
    region: "na",
    citySize: "big",
    english: true,
    photo: {
      author: "Maksim Sokolov (Maxergon)",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:A_view_from_the_Back_Campus_of_the_University_of_Toronto.jpg"
    }
  },
  {
    id: "mcgill",
    name: "McGill University",
    country: "Канада",
    city: "Монреаль",
    tuition: "CAD 31 837–74 678 в год для иностранцев (2026/27, по факультетам)",
    feeYear: 21300,
    cur: "CAD",
    ielts: 6.5,
    lang: "английский",
    deadline: "15 января 2027 (иностранный аттестат)",
    src: [
      "https://www.mcgill.ca/student-accounts/tuition-fees/general-tuition-and-fees-information/tuition-fees-2026-27",
      "https://www.mcgill.ca/undergraduate-admissions/apply/english-proficiency"
    ],
    dirs: ["science", "medicine", "law", "business", "social", "arch"],
    region: "na",
    citySize: "big",
    english: true,
    photo: {
      author: "Jeangagnon",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:McGill_University_downtown_campus_01.jpg"
    }
  },
  {
    id: "ubc",
    name: "University of British Columbia",
    country: "Канада",
    city: "Ванкувер",
    tuition: "CAD 51 530 (Arts) – 66 678 (Commerce) в год для иностранцев, 1-й курс",
    feeYear: 34500,
    cur: "CAD",
    ielts: 6.5,
    lang: "английский",
    deadline: "см. сайт; программа International Scholars — 15 ноября 2026",
    src: [
      "https://students.ubc.ca/finances/tuition-fees/undergraduate-tuition-fees/",
      "https://you.ubc.ca/applying-ubc/requirements/english-language-competency/",
      "https://you.ubc.ca/applying-ubc/dates-deadlines/"
    ],
    dirs: ["science", "social", "business", "it", "medicine", "arch", "law"],
    region: "na",
    citySize: "big",
    english: true,
    photo: {
      author: "Ddryden87",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Kwantlen_Polytechnic_University,_Cloverdale_campus,_front_entrance_(exterior).jpg"
    }
  },
  {
    id: "utokyo",
    name: "University of Tokyo",
    country: "Япония",
    city: "Токио",
    tuition: "¥642 960 в год + вступительный взнос ¥282 000 (одинаково для всех)",
    feeYear: 3900,
    cur: "JPY",
    ielts: null,
    lang: "японский (англоязычная PEAK — набор 2026 был последним)",
    deadline: "PEAK: последний набор (сентябрь 2026) закрыт; остальные программы — на японском",
    src: [
      "https://www.u-tokyo.ac.jp/en/prospective-students/tuition_fees.html",
      "https://peak.c.u-tokyo.ac.jp/apply/index.html"
    ],
    dirs: ["science", "social", "it"],
    region: "asia",
    citySize: "big",
    english: false,
    photo: {
      author: "Daderot",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Big_tree_-_Hongo_Campus,_the_University_of_Tokyo_-_DDSC04887.JPG"
    }
  },
  {
    id: "snu",
    name: "Seoul National University",
    country: "Южная Корея",
    city: "Сеул",
    tuition: "в среднем ≈ ₩6 034 163 в год (≈ ₩2,4–3,7 млн за семестр, по факультетам)",
    feeYear: 4050,
    cur: "KRW",
    ielts: 6,
    lang: "корейский / английский",
    deadline: "весна 2027: онлайн-заявка 6–9 июля 2026",
    src: [
      "https://en.snu.ac.kr/academics/resources/registration",
      "https://en.snu.ac.kr/admission/overview/notice?md=v&bbsidx=170606"
    ],
    note: "Нужен TOPIK 3+ или TOEFL 80 / IELTS 6.0",
    dirs: ["science", "social", "business", "medicine", "law", "design"],
    region: "asia",
    citySize: "big",
    english: true,
    photo: {
      author: "고려",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:The_61st_Seoul_National_University_student_council_%22Neil%22_is_conducting_a_press_conference_against_the_appointment_of_Cho_Kuk,_the_nominee_for_justice_minister_(1).jpg"
    }
  },
  {
    id: "nus",
    name: "National University of Singapore",
    country: "Сингапур",
    tuition: "SGD 22 200 (бизнес) – 39 700 (computing) в год для иностранцев не из АСЕАН (2026/27)",
    city: "Сингапур",
    feeYear: 15300,
    cur: "SGD",
    ielts: null,
    lang: "английский",
    deadline: "см. сайт приёмной комиссии",
    src: [
      "https://www.nus.edu.sg/registrar/docs/info/administrative-policies-procedures/ugtuitioncurrent.pdf",
      "https://www.nus.edu.sg/oam/docs/default-source/nus-publications/intlprospectus.pdf?sfvrsn=867e648c_50"
    ],
    dirs: [
      "business",
      "it",
      "science",
      "social",
      "law",
      "medicine",
      "arch",
      "design"
    ],
    region: "asia",
    citySize: "big",
    english: true,
    photo: {
      author: "RFNirmala",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:CREATE_Tower,_National_University_of_Singapore_15Jul2026.jpg"
    }
  },
  {
    id: "tsinghua",
    name: "Tsinghua University",
    country: "Китай",
    city: "Пекин",
    tuition: "пример: ¥26 000 (RMB) в год (Zhishan College); по программам — см. каталог",
    feeYear: 3300,
    cur: "CNY",
    ielts: null,
    lang: "китайский (HSK 5) / частично английский",
    deadline: "сентябрь – февраль (по департаментам)",
    src: [
      "https://www.zsc.tsinghua.edu.cn/en/Join_Zhishan_College/Scholarships_and_Financial_Aid.htm",
      "https://www.tsinghua.edu.cn/en/Admissions/International_Students1/Financial_Aid.htm"
    ],
    note: "Бакалавриат в основном на китайском, нужен HSK 5",
    dirs: ["it", "science", "arch", "business", "design"],
    region: "asia",
    citySize: "big",
    english: true,
    photo: {
      author: "N509FZ",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Tsinghua_University_Primary_School,_Shuangqingyuan_campus_(20230310102635).jpg"
    }
  },
  {
    id: "kaist",
    name: "KAIST",
    country: "Южная Корея",
    city: "Тэджон",
    tuition: "см. руководство для иностранных абитуриентов (бакалавриат)",
    feeYear: null,
    cur: "KRW",
    ielts: 6.5,
    lang: "английский / корейский",
    deadline: "см. сайт приёмной комиссии",
    src: [
      "https://admission.kaist.ac.kr/wz/api/admin/files/view/intl-undergraduate/pdf/Admission%20Guide%20for%20international%20applicants%202023.pdf"
    ],
    dirs: ["it", "science", "business"],
    region: "asia",
    citySize: "student",
    english: true,
    photo: {
      author: "AhmadElq",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:KAIST%27s_campus_road.jpg"
    }
  },
  {
    id: "ljubljana",
    name: "University of Ljubljana",
    country: "Словения",
    city: "Любляна",
    tuition: "для не-ЕС — по правилам о плате для иностранцев (граждане Балкан приравнены к ЕС)",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "словенский",
    deadline: "18 февраля – 18 марта 2026 (не-ЕС), 2-й срок — 2–3 сентября",
    src: [
      "https://www.uni-lj.si/assets/Visokosolska-prijavno-informacijska-sluzba/2026-ANG/2026_zlozenka_3delna_neEU_ang.pdf"
    ],
    dirs: ["social", "science", "medicine", "law", "arch", "design"],
    region: "eu",
    citySize: "student",
    english: false,
    photo: {
      author: "John Samuel",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Front_facade_of_the_University_of_Ljubljana_Administration_Building_01.jpg"
    }
  },
  {
    id: "koc",
    name: "Koç University",
    country: "Турция",
    city: "Стамбул",
    tuition: "$38 000 в год (все направления, кроме медицины — $59 000)",
    feeYear: 35000,
    cur: "USD",
    ielts: null,
    lang: "английский",
    deadline: "ранний 1 янв – 1 мар, основной 2 мар – 31 мая, поздний до 15 июля 2026",
    src: [
      "https://international.ku.edu.tr/undergraduate-programs/tuition-and-scholarships/",
      "https://international.ku.edu.tr/undergraduate-programs/how-to-apply/"
    ],
    dirs: ["business", "social", "law", "science", "it", "medicine"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Yasu (talk)",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Nihon_University_Tokorozawa_Campus.jpg"
    }
  },
  {
    id: "unimelb",
    name: "University of Melbourne",
    country: "Австралия",
    city: "Мельбурн",
    tuition: "AUD 36 000–61 000 в год (зависит от предметов)",
    feeYear: 27000,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "уточняйте на сайте (по программе)",
    src: [
      "https://study.unimelb.edu.au/how-to-apply/undergraduate-study/international-applications/fees-and-payments",
      "https://study.unimelb.edu.au/how-to-apply/english-language-requirements"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "oceania",
    citySize: "big",
    english: true,
    note: "Депозит при зачислении — AUD 17 000",
    photo: {
      author: "Moriarty.L",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Melbourne_University-South_Lawn.jpg"
    }
  },
  {
    id: "auckland",
    name: "University of Auckland",
    country: "Новая Зеландия",
    city: "Окленд",
    tuition: "NZD 40 225–58 009 в год + сервисный сбор ≈ NZD 1 133",
    feeYear: 24300,
    cur: "EUR",
    ielts: 6,
    lang: "английский",
    deadline: "уточняйте на сайте (по программе)",
    src: [
      "https://www.auckland.ac.nz/en/study/fees-and-money-matters/tuition-fees/international-student-fees/undergraduate-international-fees.html"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "oceania",
    citySize: "big",
    english: true,
    note: "IELTS 6.0, ни одна часть ниже 5.5",
    photo: {
      author: "Uhooep",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Clock_Tower,_University_of_Auckland.jpg"
    }
  },
  {
    id: "hi",
    name: "University of Iceland",
    country: "Исландия",
    city: "Рейкьявик",
    tuition: "Без платы за обучение, регистрационный сбор ISK 75 000 в год",
    feeYear: 495,
    cur: "EUR",
    ielts: null,
    lang: "исландский / английский",
    deadline: "1 февраля",
    src: [
      "https://english.hi.is/study/apply/application-deadline",
      "https://english.hi.is/faq/when-application-deadline"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law"],
    region: "eu",
    citySize: "student",
    english: false,
    note: "Для не-ЕЭЗ — сбор за рассмотрение €135",
    photo: {
      author: "rheins",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Iceland_-_2013.08_-_panoramio.jpg"
    }
  },
  {
    id: "unilu",
    name: "University of Luxembourg",
    country: "Люксембург",
    city: "Эш-сюр-Альзет",
    tuition: "€200–400 за семестр, без отдельной платы для иностранцев",
    feeYear: 800,
    cur: "EUR",
    ielts: null,
    lang: "французский / немецкий / английский",
    deadline: "31 марта для не-ЕС (пример: Computer Science)",
    src: [
      "https://www.uni.lu/en/admissions/bachelor-master/",
      "https://www.uni.lu/fstm-en/study-programs/bachelor-in-computer-science/admissions/"
    ],
    dirs: ["it", "business", "science", "social", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    note: "Сбор за заявку €50",
    photo: {
      author: "GilPe",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Belval,_Uni.lu_-_Maison_du_savoir_(101).jpg"
    }
  },
  {
    id: "ucy",
    name: "University of Cyprus",
    country: "Кипр",
    city: "Никосия",
    tuition: "€6 834 в год для не-ЕС",
    feeYear: 6834,
    cur: "EUR",
    ielts: null,
    lang: "греческий",
    deadline: "уточняйте на сайте",
    src: [
      "https://www.ucy.ac.cy/study/undergraduate-studies/tuition-fees/?lang=en"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law", "arch"],
    region: "eu",
    citySize: "student",
    english: false,
    note: "10 стипендий 50% для не-ЕС",
    photo: {
      author: "An. Antoniou",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:A@a_University_of_Cyprus_-_panoramio_(11).jpg"
    }
  },
  {
    id: "uom",
    name: "University of Malta",
    country: "Мальта",
    city: "Мсида",
    tuition: "Для не-ЕС зависит от курса, например €10 800 в год (Computing Science)",
    feeYear: 10800,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://www.um.edu.mt/international/students/tuitionfees/",
      "https://www.um.edu.mt/courses/overview/ubschicgcft-2026-7-o/"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law", "arch"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Christian Camenzuli",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Malta_Msida_campus_Quadrangle,_in_2026_(first_angle).jpg"
    }
  },
  {
    id: "unizg",
    name: "University of Zagreb",
    country: "Хорватия",
    city: "Загреб",
    tuition: "Зависит от факультета, например €5 574 в год (FER, бакалавриат на английском)",
    feeYear: 5574,
    cur: "EUR",
    ielts: null,
    lang: "хорватский / английский",
    deadline: "уточняйте на факультете",
    src: [
      "https://www.unizg.hr/homepage/study-at-the-university-of-zagreb/international-degree-seeking-students/",
      "https://www.fer.unizg.hr/en/studies"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "eu",
    citySize: "big",
    english: true,
    note: "Сбор за заявку на FER — €230",
    photo: {
      author: "Suradnik13",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Zagreb_(cropped).jpg"
    }
  },
  {
    id: "bgu",
    name: "University of Belgrade",
    country: "Сербия",
    city: "Белград",
    tuition: "Зависит от факультета: €1 500 (экономика) – €2 000–3 000 (электротехника) в год",
    feeYear: 2000,
    cur: "EUR",
    ielts: null,
    lang: "сербский / английский",
    deadline: "по приёмной кампании (июль)",
    src: [
      "http://arhiva.rect.bg.ac.rs/en/study-in-belgrade/cost-of-styding.php",
      "https://www.etf.bg.ac.rs/en/studies/tuition"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law", "arch"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Jorge Láscar from Melbourne, Australia",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Captain_Mi%C5%A1a%27s_Mansion_(13807789883).jpg"
    }
  },
  {
    id: "auth",
    name: "Aristotle University of Thessaloniki",
    country: "Греция",
    city: "Салоники",
    tuition: "€6 000 в год (бакалавриат на английском, Sports and Exercise Science)",
    feeYear: 6000,
    cur: "EUR",
    ielts: null,
    lang: "греческий / английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://sportsciences.auth.gr/admissions",
      "https://www.auth.gr/en/ugrad-en/"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "eu",
    citySize: "big",
    english: true,
    note: "Большинство программ — на греческом",
    photo: {
      author: "Alkoclick",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Chemistry_square_of_Aristotle_University.jpg"
    }
  },
  {
    id: "uniba",
    name: "Comenius University Bratislava",
    country: "Словакия",
    city: "Братислава",
    tuition: "€2 000 в год (бакалавриат на английском), медицина — €13 000",
    feeYear: 2000,
    cur: "EUR",
    ielts: null,
    lang: "словацкий / английский",
    deadline: "уточняйте на факультете",
    src: [
      "https://uniba.sk/en/study/",
      "https://www.flaw.uniba.sk/en/bachelors-degree-programme-in-english/"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law"],
    region: "eu",
    citySize: "big",
    english: true,
    photo: {
      author: "Univerzita Komenského v Bratislave",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Univerzita_Komensk%C3%A9ho.jpg"
    }
  },
  {
    id: "ubb",
    name: "Babeș-Bolyai University",
    country: "Румыния",
    city: "Клуж-Напока",
    tuition: "Для не-ЕС — по факультету, см. приложение 4 к правилам",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "румынский / венгерский / английский",
    deadline: "уточняйте на сайте",
    src: ["https://www.ubbcluj.ro/en/taxe/taxe_de_scolarizare_in_valuta"],
    dirs: ["it", "business", "science", "social", "law"],
    region: "eu",
    citySize: "student",
    english: true,
    photo: {
      author: "Christo",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Kolozsv%C3%A1r,_Babe%C8%99%E2%80%93Bolyai_Tudom%C3%A1nyegyetem.jpg"
    }
  },
  {
    id: "aubg",
    name: "American University in Bulgaria",
    country: "Болгария",
    city: "Благоевград",
    tuition: "€6 900 за семестр (2026/27), одинаково для всех",
    feeYear: 13800,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "1 марта (ранний), 1 июня (для не-ЕС)",
    src: ["https://www.aubg.edu/admissions/bachelors/cost-aid/"],
    dirs: ["it", "business", "social"],
    region: "eu",
    citySize: "student",
    english: true,
    note: "Стипендии до 40%",
    photo: {
      author: "Akehayova",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:American_University_in_Bulgaria.jpg"
    }
  },
  {
    id: "tsu",
    name: "Tbilisi State University",
    country: "Грузия",
    city: "Тбилиси",
    tuition: "$4 000 в год (Computer Science на английском); на грузинском — 1 125 лари за семестр",
    feeYear: 3700,
    cur: "EUR",
    ielts: null,
    lang: "грузинский / английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://computing.tsu.ge/en/for-enrollee",
      "https://www.tsu.ge/en/page/Bachelor's-Guide"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law"],
    region: "ca",
    citySize: "big",
    english: true,
    photo: {
      author: "Patrik Kunec",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Tbilisi,_Georgia_-_Building_of_the_Tbilisi_State_University_-_2023.jpg"
    }
  },
  {
    id: "aua",
    name: "American University of Armenia",
    country: "Армения",
    city: "Ереван",
    tuition: "4 450 000–4 950 000 драмов в год (до финансовой помощи)",
    feeYear: 10700,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "уточняйте на сайте (ранний и основной раунды)",
    src: ["https://admissions.aua.am/ugrad/tuition-and-fees/"],
    dirs: ["it", "business", "science", "social"],
    region: "ca",
    citySize: "big",
    english: true,
    note: "Стипендии до 50% для иностранцев",
    photo: {
      author: "Benoît Prieur",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:American_University_of_Armenia_(main_building)-June_2023.jpg"
    }
  },
  {
    id: "nu",
    name: "Nazarbayev University",
    country: "Казахстан",
    city: "Астана",
    tuition: "$15 000 в год (2027/28), одинаково для всех",
    feeYear: 13800,
    cur: "EUR",
    ielts: 6,
    lang: "английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://nu.edu.kz/admissions/how-to-apply/foundation-undergraduate/regular-admissions/",
      "https://apply.nu.edu.kz/en/admissions"
    ],
    dirs: ["it", "business", "medicine", "science", "social"],
    region: "ca",
    citySize: "big",
    english: true,
    note: "IELTS 6.0, writing не ниже 6.0",
    photo: {
      author: "Dinononozavr1",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Nazarbayev_University_2.jpg"
    }
  },
  {
    id: "wiut",
    name: "Westminster International University in Tashkent",
    country: "Узбекистан",
    city: "Ташкент",
    tuition: "54 600 000 сумов в год для иностранцев (2026/27, ≈ $4 484)",
    feeYear: 4100,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "уточняйте на сайте",
    src: ["https://www.wiut.uz/tuition-fees-international"],
    dirs: ["it", "business", "social", "law"],
    region: "ca",
    citySize: "big",
    english: true,
    note: "IELTS зависит от программы (например, 6.5 на Commercial Law)",
    photo: {
      author: "Bekhruzbek Ochilov",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Westminster_International_University_in_Tashkent.jpg"
    }
  },
  {
    id: "manas",
    name: "Kyrgyz-Turkish Manas University",
    country: "Киргизия",
    city: "Бишкек",
    tuition: "Без платы за обучение; медицина — взнос $4 000 в год (2026/27)",
    feeYear: 0,
    cur: "EUR",
    ielts: null,
    lang: "турецкий / киргизский",
    deadline: "уточняйте на сайте",
    src: [
      "https://manas.edu.kg/en/about_manas/why-manas",
      "https://manas.edu.kg/en/news/8110"
    ],
    dirs: ["design", "it", "business", "medicine", "science", "social"],
    region: "ca",
    citySize: "big",
    english: false,
    note: "Год языковой подготовки — бесплатно",
    photo: {
      author: "Эрнист",
      license: "Public domain",
      url: "https://commons.wikimedia.org/wiki/File:Manas_University.jpg"
    }
  },
  {
    id: "ada",
    name: "ADA University",
    country: "Азербайджан",
    city: "Баку",
    tuition: "8 000–8 500 манатов в год для иностранцев",
    feeYear: 4500,
    cur: "EUR",
    ielts: 6,
    lang: "английский",
    deadline: "8 апреля 2026 (поздний срок — 1 июля)",
    src: [
      "https://www.ada.edu.az/en/admission/undergraduate",
      "https://www.ada.edu.az/en/admission/tuition-costs"
    ],
    dirs: ["it", "business", "social", "law"],
    region: "ca",
    citySize: "big",
    english: true,
    photo: {
      author: "ADA University",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:ADA_University_Library_building.jpg"
    }
  },
  {
    id: "aus",
    name: "American University of Sharjah",
    country: "ОАЭ",
    city: "Шарджа",
    tuition: "AED 110 876 в год (2026/27, все направления)",
    feeYear: 27700,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "24 декабря 2026 (весна), 15 августа 2027 (осень)",
    src: [
      "https://www.aus.edu/admissions/bachelors-degrees/undergraduate-tuition-and-fees",
      "https://www.aus.edu/admissions/bachelors-degrees/deadlines-and-important-dates-for-undergraduate-admissions"
    ],
    dirs: ["design", "it", "business", "science", "social", "arch"],
    region: "mena",
    citySize: "big",
    english: true,
    photo: {
      author: "Gureni",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:American_University_of_Sharjah_(36).jpg"
    }
  },
  {
    id: "qu",
    name: "Qatar University",
    country: "Катар",
    city: "Доха",
    tuition: "1 200–1 700 риалов за кредитный час (с осени 2026)",
    feeYear: 10500,
    cur: "EUR",
    ielts: null,
    lang: "английский / арабский",
    deadline: "26 марта 2026 (иностранцы, осень)",
    src: [
      "https://www.qu.edu.qa/en-us/students/admission/undergraduate/Pages/tuition-fees.aspx",
      "https://www.qu.edu.qa/en-us/students/admission/undergraduate/Pages/application-timeline.aspx"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law", "arch"],
    region: "mena",
    citySize: "big",
    english: true,
    photo: {
      author: "Sky2105",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Qatar_University.Campus.jpg"
    }
  },
  {
    id: "tau",
    name: "Tel Aviv University",
    country: "Израиль",
    city: "Тель-Авив",
    tuition: "$15 500–17 500 в год (международные BA)",
    feeYear: 15000,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский / иврит",
    deadline: "31 августа (BA Liberal Arts)",
    src: [
      "https://international.tau.ac.il/fees_and_expenses",
      "https://liberal-arts.tau.ac.il/Fees"
    ],
    dirs: ["it", "business", "science", "social"],
    region: "mena",
    citySize: "big",
    english: true,
    photo: {
      author: "israel zeller ישראל זלר",
      license: "CC BY 2.5",
      url: "https://commons.wikimedia.org/wiki/File:145716_tel_aviv_university_library_PikiWiki_Israel.jpg"
    }
  },
  {
    id: "auc",
    name: "American University in Cairo",
    country: "Египет",
    city: "Каир",
    tuition: "$735 за кредитный час",
    feeYear: 20300,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "1 марта (ранний), 1 июня (основной) 2026",
    src: [
      "https://www.aucegypt.edu/admissions/tuition-and-financial-assistance",
      "https://www.aucegypt.edu/admissions/undergraduate/deadlines"
    ],
    dirs: ["design", "it", "business", "science", "social", "arch"],
    region: "mena",
    citySize: "big",
    english: true,
    note: "Нужно подтвердить $33 000 на первый год",
    photo: {
      author: "Effeietsanders",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:American_University_in_Cairo.JPG"
    }
  },
  {
    id: "aui",
    name: "Al Akhawayn University",
    country: "Марокко",
    city: "Ифран",
    tuition: "3 360 дирхамов за кредит",
    feeYear: 9300,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://aui.ma/admission-aid/international/tuition-and-fees",
      "https://aui.ma/admission-aid/international/freshmen"
    ],
    dirs: ["it", "business", "science", "social"],
    region: "mena",
    citySize: "student",
    english: true,
    photo: {
      author: "Anass Sedrati",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Al_Akhawayn_University_Campus_-_Ifrane_1.jpg"
    }
  },
  {
    id: "uct",
    name: "University of Cape Town",
    country: "ЮАР",
    city: "Кейптаун",
    tuition: "Плата по программе + международный сбор ZAR 80 400 в год (вне Африки)",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "31 июля 2026 (на 2027 год)",
    src: [
      "https://uct.ac.za/students/applications-apply-undergraduate-qualifications/application-procedure",
      "https://www.uct.ac.za/sites/default/files/media/documents/uct_ac_za/49/2026-fees-booklet.pdf"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "mena",
    citySize: "big",
    english: true,
    photo: {
      author: "Vysotsky",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Jameson_Hall_at_the_University_of_Cape_Town_in_2014.jpg"
    }
  },
  {
    id: "ashoka",
    name: "Ashoka University",
    country: "Индия",
    city: "Сонипат",
    tuition: "$11 712 в год за обучение (приём 2027)",
    feeYear: 10800,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "4 раунда, заявки с 7 октября 2026",
    src: [
      "https://www.ashoka.edu.in/undergraduate-international-students-fee-structure/",
      "https://www.ashoka.edu.in/admissions/undergraduate-international-students/"
    ],
    dirs: ["it", "business", "science", "social"],
    region: "asia",
    citySize: "student",
    english: true,
    photo: {
      author: "Arora.prianca",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Ashoka_University_Campus.jpg"
    }
  },
  {
    id: "umy",
    name: "Universiti Malaya",
    country: "Малайзия",
    city: "Куала-Лумпур",
    tuition: "≈ RM 60 000–100 000 за всю программу (зависит от факультета)",
    feeYear: 4000,
    cur: "EUR",
    ielts: 5,
    lang: "английский / малайский",
    deadline: "уточняйте на сайте",
    src: [
      "https://study.um.edu.my/doc/tution-fee/Fee%20Structure,%20UG,%20International%20-%20Updated%2022%20Oct%202025.pdf",
      "https://aasd.um.edu.my/faq-ug-international-admission"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "asia",
    citySize: "big",
    english: true,
    photo: {
      author: "Chaoyang Sunrise",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:University_of_Malaya_Library_Building.jpg"
    }
  },
  {
    id: "chula",
    name: "Chulalongkorn University",
    country: "Таиланд",
    city: "Бангкок",
    tuition: "76 000–133 900 бат за семестр (международные программы)",
    feeYear: 4900,
    cur: "EUR",
    ielts: 6,
    lang: "английский / тайский",
    deadline: "уточняйте на сайте",
    src: ["https://www.chula.ac.th/en/academics/admissions/tuition-and-fees/"],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "asia",
    citySize: "big",
    english: true,
    note: "Для части программ — IELTS 6.5",
    photo: {
      author: "Supanut Arunoprayote",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Chulalongkorn_University_Auditorium.jpg"
    }
  },
  {
    id: "ui",
    name: "Universitas Indonesia",
    country: "Индонезия",
    city: "Депок",
    tuition: "≈ 30 млн рупий за семестр + вступительный взнос 60 млн (международный класс)",
    feeYear: 3400,
    cur: "EUR",
    ielts: 5.5,
    lang: "английский / индонезийский",
    deadline: "уточняйте на сайте",
    src: [
      "https://international.ui.ac.id/undergraduate-program/",
      "https://feb.ui.ac.id/en/tuition-fees/"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law", "arch"],
    region: "asia",
    citySize: "student",
    english: true,
    note: "Инженерия — IELTS 6.0",
    photo: {
      author: "Alif Mikail",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Stasiun_Universitas_Indonesia.jpg"
    }
  },
  {
    id: "rmitvn",
    name: "RMIT University Vietnam",
    country: "Вьетнам",
    city: "Хошимин",
    tuition: "≈ $14 345 в год (бакалавриат, 8 курсов)",
    feeYear: 13200,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "за 4–6 месяцев до старта (февраль, июнь, октябрь)",
    src: [
      "https://www.rmit.edu.vn/study-at-rmit/tuition-fees",
      "https://www.rmit.edu.vn/study-at-rmit/international-students/study-full-degree-in-vietnam"
    ],
    dirs: ["design", "it", "business", "social"],
    region: "asia",
    citySize: "big",
    english: true,
    note: "Ни одна часть IELTS ниже 6.0",
    photo: {
      author: "Prenn",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:RMIT_University_Vietnam_-_Campus_(2).JPG"
    }
  },
  {
    id: "ateneo",
    name: "Ateneo de Manila University",
    country: "Филиппины",
    city: "Кесон-Сити",
    tuition: "≈ 110 691 песо за семестр + сборы и 5 000 песо для иностранцев",
    feeYear: 4400,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "17 августа 2026 (ACET) / 12 декабря 2026 (IB, SAT)",
    src: [
      "https://www.ateneo.edu/college/tuition-fees",
      "https://www.ateneo.edu/college/admissions/apply/first-year/international"
    ],
    dirs: ["design", "it", "business", "science", "social"],
    region: "asia",
    citySize: "big",
    english: true,
    note: "Иностранцы изучают два курса филиппинского",
    photo: {
      author: "RFNirmala",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Ateneo_de_Manila_University_bird%27s_eye_view_(Loyola_Heights)_26Oct2025_02.jpg"
    }
  },
  {
    id: "hku",
    name: "University of Hong Kong",
    country: "Гонконг",
    city: "Гонконг",
    tuition: "HK$224 000 (не-STEM) – 249 000 (STEM) в год",
    feeYear: 27800,
    cur: "EUR",
    ielts: 6.5,
    lang: "английский",
    deadline: "25 ноября 2026 (первый раунд)",
    src: [
      "https://www.hku.hk/en/admission-aid/tuition-fee-scholarships",
      "https://admissions.hku.hk/apply/international-qualifications/english-language-requirement"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "asia",
    citySize: "big",
    english: true,
    note: "Writing и speaking не ниже 6.0",
    photo: {
      author: "Wpcpey",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Main_Building_of_The_University_of_Hong_Kong_Entrance_view_2016.jpg"
    }
  },
  {
    id: "ntu",
    name: "National Taiwan University",
    country: "Тайвань",
    city: "Тайбэй",
    tuition: "TWD 50 460–62 100 за семестр (медицина дороже)",
    feeYear: 3300,
    cur: "EUR",
    ielts: null,
    lang: "китайский / английский",
    deadline: "5 ноября 2026 (первый раунд, сентябрь 2027)",
    src: [
      "https://admissions.ntu.edu.tw/fees-scholarships/tuition-fees/",
      "https://admissions.ntu.edu.tw/apply/degree-students/admission-information/application-timeline/"
    ],
    dirs: ["it", "business", "medicine", "science", "social", "law"],
    region: "asia",
    citySize: "big",
    english: false,
    photo: {
      author: "peellden",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:National_Taiwan_University_Library_20060802.jpg"
    }
  },
  {
    id: "unam",
    name: "UNAM",
    country: "Мексика",
    city: "Мехико",
    tuition: "Практически бесплатно (символический взнос)",
    feeYear: 0,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "по конвокатории, дважды в год",
    src: [
      "https://faq-escolar.cuaed.unam.mx/pdf.php?cat=8&id=25&artlang=es",
      "https://repositorio.dgae.unam.mx/Licenciatura2026/convocatoria_licenciatura2026.pdf"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "latam",
    citySize: "big",
    english: false,
    note: "Нужны вступительный экзамен и средний балл не ниже 7.0",
    photo: {
      author: "Andrea Juárez",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_UNAM_-_2019.jpg"
    }
  },
  {
    id: "usp",
    name: "University of São Paulo",
    country: "Бразилия",
    city: "Сан-Паулу",
    tuition: "Без платы за обучение для всех",
    feeYear: 0,
    cur: "EUR",
    ielts: null,
    lang: "португальский",
    deadline: "по экзамену Fuvest или Enem",
    src: [
      "https://www.iri.usp.br/br/graduacao/ingresso-graduacao/estrangeiros",
      "https://www5.usp.br/ensino/graduacao/"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "latam",
    citySize: "big",
    english: false,
    photo: {
      author: "Photograph by Mike Peel (www.mikepeel.net).",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:At_Cidade_Universit%C3%A1ria_Armando_de_Salles_Oliveira_2023_054.jpg"
    }
  },
  {
    id: "uba",
    name: "University of Buenos Aires",
    country: "Аргентина",
    city: "Буэнос-Айрес",
    tuition: "Без платы за обучение, в том числе для иностранцев",
    feeYear: 0,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "запись на CBC (базовый цикл)",
    src: [
      "https://www.uba.ar/estudiantesextranjeros",
      "https://www.cbc.uba.ar/inscripciones"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "latam",
    citySize: "big",
    english: false,
    note: "Без вступительного экзамена, но нужен испанский",
    photo: {
      author: "perezcotapos",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Facultad_de_Derecho_UBA_-_panoramio.jpg"
    }
  },
  {
    id: "puc",
    name: "Pontificia Universidad Católica de Chile",
    country: "Чили",
    city: "Сантьяго",
    tuition: "CLP 5,6–10,3 млн в год (2026, по программе)",
    feeYear: 7800,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "по централизованному или специальному приёму",
    src: [
      "https://admision.uc.cl/financiamiento-y-matricula/financiamiento-y-matricula-futuros-estudiantes/aranceles-de-pregrado/",
      "https://admision.uc.cl/informacion-para/estudiantes-internacionales/ven-a-estudiar-a-la-uc/"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "latam",
    citySize: "big",
    english: false,
    photo: {
      author: "Sfs90",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Casa_Central_Pontificia_Universidad_Catolica_de_Chile.JPG"
    }
  },
  {
    id: "uniandes",
    name: "Universidad de los Andes",
    country: "Колумбия",
    city: "Богота",
    tuition: "COP 26 860 000 за семестр (2026), медицина — 38 220 000",
    feeYear: 12400,
    cur: "EUR",
    ielts: null,
    lang: "испанский",
    deadline: "уточняйте на сайте",
    src: ["https://matriculas.uniandes.edu.co/pregrado/valores-pregrado"],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "latam",
    citySize: "big",
    english: false,
    photo: {
      author: "Peter Angritt",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Universidad_de_los_Andes_-_Jos%C3%A9_Maria_Espinosa.jpg"
    }
  },
  {
    id: "unili",
    name: "University of Liechtenstein",
    country: "Лихтенштейн",
    city: "Вадуц",
    tuition: "CHF 1 250 за семестр для не-ЕЭЗ",
    feeYear: 2700,
    cur: "EUR",
    ielts: null,
    lang: "немецкий / английский",
    deadline: "31 марта (зимний семестр, если нужна виза)",
    src: [
      "https://www.uni.li/en/studies/plan-your-studies/study-costs-und-funding",
      "https://www.uni.li/en/studies/application-and-admission"
    ],
    dirs: ["it", "business", "arch"],
    region: "eu",
    citySize: "student",
    english: true,
    note: "Сбор за рассмотрение CHF 100",
    photo: {
      author: "Clemensoe",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Universit%C3%A4t_Liechtenstein.jpg"
    }
  },
  {
    id: "ujordan",
    name: "University of Jordan",
    country: "Иордания",
    city: "Амман",
    tuition: "$400 за кредитный час (International Program)",
    feeYear: 11000,
    cur: "EUR",
    ielts: null,
    lang: "арабский / английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://registration.ju.edu.jo/en/english/Pages/MajorsAndFees_new.aspx",
      "https://ju.edu.jo/Pages/Process/InternationalStudents.aspx"
    ],
    dirs: [
      "design",
      "it",
      "business",
      "medicine",
      "science",
      "social",
      "law",
      "arch"
    ],
    region: "mena",
    citySize: "big",
    english: true,
    photo: {
      author: "Malkawi99",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:The_main_gate,_University_of_Jordan.jpg"
    }
  },
  {
    id: "lums",
    name: "LUMS",
    country: "Пакистан",
    city: "Лахор",
    tuition: "≈ PKR 1,5 млн за первый год + вступительный взнос PKR 176 600",
    feeYear: 5000,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "27 января 2026 (осень 2026)",
    src: [
      "https://admission.lums.edu.pk/critical-dates-all-programmes",
      "https://lums.edu.pk/programmes/bs-computer-science"
    ],
    dirs: ["it", "business", "science", "social", "law"],
    region: "asia",
    citySize: "big",
    english: true,
    note: "Сбор за заявку для иностранцев — $200",
    photo: {
      author: "USAID Pakistan",
      license: "Public domain",
      url: "https://commons.wikimedia.org/wiki/File:Jacaranda_tree_at_LUMS,_the_conference_venue_(13985341085).jpg"
    }
  },
  {
    id: "kfupm",
    name: "King Fahd University of Petroleum and Minerals",
    country: "Саудовская Аравия",
    city: "Дахран",
    tuition: "Платная программа для иностранцев — см. сайт",
    feeYear: null,
    cur: "EUR",
    ielts: null,
    lang: "английский",
    deadline: "уточняйте на сайте",
    src: [
      "https://www.kfupm.edu.sa/study/international-students/apply-as-an-international-student",
      "https://admissions.kfupm.edu.sa/en/new-admission/fee-study-program-(admission-of-non-saudi-students)"
    ],
    dirs: ["it", "business", "science", "arch"],
    region: "mena",
    citySize: "student",
    english: true,
    note: "Нужны тесты Qudrat и Tahsili; стипендии от 10 до 100%",
    photo: {
      author: "Ahmed",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:KFUPM.jpg"
    }
  }
];

/* авторы фото для статей */
window.PHOTO_CREDITS = {
  delft: {
    title: "File:TU Delft Universiteitsbibliotheek.jpg",
    author: "Choinowski",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:TU_Delft_Universiteitsbibliotheek.jpg"
  },
  epfl: {
    title: "File:EPFL Rolex Learning Center-004.jpg",
    author: "Fridolin freudenfett",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:EPFL_Rolex_Learning_Center-004.jpg"
  },
  aalto: {
    title: "File:Aalto University, Väre building, 2019.jpg",
    author: "Tove Ørsted",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Aalto_University,_V%C3%A4re_building,_2019.jpg"
  },
  oodi: {
    title: "File:Interior of Helsinki Central Library Oodi in 2019 (46535194044).jpg",
    author: "Nicolas Buffler from Guilherand Granges, France",
    license: "CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Interior_of_Helsinki_Central_Library_Oodi_in_2019_(46535194044).jpg"
  },
  aalto_lobby: {
    title: "File:Aalto University School of Business lobby in Väre.jpg",
    author: "Aatu Dorochenko",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Aalto_University_School_of_Business_lobby_in_V%C3%A4re.jpg"
  },
  zuidas: {
    title: "File:Zuidas VU 10.jpg",
    author: "MrAronymous",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Zuidas_VU_10.jpg"
  },
  hero_amsterdam: {
    title: "File:Canal houses and Oude Kerk at blue hour with water reflection in Damrak Amsterdam Netherlands.jpg",
    author: "Basile Morin",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Canal_houses_and_Oude_Kerk_at_blue_hour_with_water_reflection_in_Damrak_Amsterdam_Netherlands.jpg"
  },
  hero_nyhavn: {
    title: "File:Kopenhagen (DK), Nyhavn -- 2017 -- 1538.jpg",
    author: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Kopenhagen_(DK),_Nyhavn_--_2017_--_1538.jpg"
  },
  about_prague: {
    title: "File:Prague - Charles Bridge (55160931335).jpg",
    author: "Jorge Franganillo",
    license: "CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Prague_-_Charles_Bridge_(55160931335).jpg"
  },
  about_lisbon: {
    title: "File:Number 28 tram, Calçada de São Francisco, Lisbon, Portugal julesvernex2.jpg",
    author: "Jules Verne Times Two",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Number_28_tram,_Cal%C3%A7ada_de_S%C3%A3o_Francisco,_Lisbon,_Portugal_julesvernex2.jpg"
  }
};
