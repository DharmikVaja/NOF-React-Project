const Questions = [
  {
    text:
      " Which of the three banks will be merged with the other two to create India’s third-largest bank?",
    options: [
      { id: 0, text: "Punjab National Bank ", isCorrect: false },
      { id: 1, text: " Bank of Baroda ", isCorrect: false },
      { id: 2, text: "Dena Bank", isCorrect: false },
      { id: 3, text: "Indian Bank", isCorrect: true },
    ],
  },
  {
    text: "The largest public sector undertaking in the country is?",
    options: [
      { id: 0, text: "Railways", isCorrect: true },
      { id: 1, text: "Airways", isCorrect: false },
      { id: 2, text: "Roadways", isCorrect: false },
      { id: 3, text: "Iron and Steel Plants", isCorrect: false },
    ],
  },
  {
    text: "What is the name of the weak zone of the earth's crust?",
    options: [
      { id: 0, text: "Seismic", isCorrect: true }, // Option A is correct
      { id: 1, text: "Cosmic", isCorrect: false },
      { id: 2, text: "Formic", isCorrect: false },
      { id: 3, text: "Anaemic", isCorrect: false },
    ],
  },
  {
    text: "Where was India's first national Museum opened?",
    options: [
      { id: 0, text: "Delhi", isCorrect: false },
      { id: 1, text: "Hyderabad", isCorrect: false },
      { id: 2, text: "Rajasthan", isCorrect: false },
      { id: 3, text: "Mumbai", isCorrect: true },
    ],
  },
  {
    text: "In 2019, Which popular singer was awarded the Bharat Ratna award?",
    options: [
      { id: 0, text: "Lata Mangeshkar", isCorrect: false },
      { id: 1, text: "Asha Bhosle", isCorrect: false },
      { id: 2, text: "Bhupen Hazarika", isCorrect: true },
      { id: 3, text: "Manna Dey", isCorrect: false },
    ],
  },
  {
    text:
      "The world's nation's first 5G mobile network was launched by which country?",
    options: [
      { id: 0, text: "Japan", isCorrect: false },
      { id: 1, text: "Asia", isCorrect: false }, // Not a specific country
      { id: 2, text: "South Korea", isCorrect: true },
      { id: 3, text: "Malaysia", isCorrect: false },
    ],
  },
  {
    text: "When was Pravasi Bhartiya Divas held in Varanasi?",
    options: [
      { id: 0, text: "2017", isCorrect: false },
      { id: 1, text: "2015", isCorrect: false },
      { id: 2, text: "2019", isCorrect: true },
      { id: 3, text: "2020", isCorrect: false },
    ],
  },
  {
    text: "Vijay Singh (golf player) is from which country?",
    options: [
      { id: 0, text: "UK", isCorrect: false },
      { id: 1, text: "USA", isCorrect: false },
      { id: 2, text: "India", isCorrect: false },
      { id: 3, text: "Fiji", isCorrect: true },
    ],
  },
  {
    text: "What is the full form of DRDL?",
    options: [
      {
        id: 0,
        text: "Differential Research and Documentation Laboratory",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Department of Research and Development Laboratory",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Defense Research and Development Laboratory",
        isCorrect: false,
      },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "The green planet in the solar system is?",
    options: [
      { id: 0, text: "Mars", isCorrect: false },
      { id: 1, text: "Uranus", isCorrect: true }, // Note: This is the correct answer.
      { id: 2, text: "Venus", isCorrect: false },
      { id: 3, text: "Earth", isCorrect: false },
    ],
  },
  {
    text: "What is the father of Indian missile technology?",
    options: [
      { id: 0, text: "Dr Homi Bhabha", isCorrect: false },
      { id: 1, text: "Dr Chidambaram", isCorrect: false },
      { id: 2, text: "Dr U.R. Rao", isCorrect: false },
      { id: 3, text: "Dr A.P.J. Abdul Kalam", isCorrect: true },
    ],
  },
  {
    text: "Where was India's first national Museum opened?",
    options: [
      { id: 0, text: "Delhi", isCorrect: false },
      { id: 1, text: "Hyderabad", isCorrect: false },
      { id: 2, text: "Rajasthan", isCorrect: false },
      { id: 3, text: "Mumbai", isCorrect: true },
    ],
  },
  {
    text: "In 2019, Which popular singer was awarded the Bharat Ratna award?",
    options: [
      { id: 0, text: "Lata Mangeshkar", isCorrect: false },
      { id: 1, text: "Asha Bhosle", isCorrect: false },
      { id: 2, text: "Bhupen Hazarika", isCorrect: true },
      { id: 3, text: "Manna Dey", isCorrect: false },
    ],
  },
  {
    text:
      "The world's nation's first 5G mobile network was launched by which country?",
    options: [
      { id: 0, text: "Japan", isCorrect: false },
      { id: 1, text: "Asia", isCorrect: false }, // Not a specific country
      { id: 2, text: "South Korea", isCorrect: true },
      { id: 3, text: "Malaysia", isCorrect: false },
    ],
  },
  {
    text: "When was Pravasi Bhartiya Divas held in Varanasi?",
    options: [
      { id: 0, text: "2017", isCorrect: false },
      { id: 1, text: "2015", isCorrect: false },
      { id: 2, text: "2019", isCorrect: true },
      { id: 3, text: "2020", isCorrect: false },
    ],
  },
  {
    text: "   ‘Dykes’ are especially constructed in:",
    options: [
      { id: 0, text: "Norway", isCorrect: false },
      { id: 1, text: "USA", isCorrect: false },
      { id: 2, text: "France", isCorrect: false },
      { id: 3, text: "Holland", isCorrect: true },
    ],
  },

  {
    text: "Which is the major area where the ‘Garba’ dance form is common?",
    options: [
      { id: 0, text: "Maharashtra", isCorrect: false },
      { id: 1, text: "Gujarat", isCorrect: true },
      { id: 2, text: "Rajasthan", isCorrect: false },
      { id: 3, text: "Punjab", isCorrect: false },
    ],
  },
  {
    text: "Bull-fighting is the national game of which country?",
    options: [
      { id: 0, text: "Spain", isCorrect: false },
      { id: 1, text: "Portugal", isCorrect: false },
      { id: 2, text: "Hungary", isCorrect: false },
      { id: 3, text: "None", isCorrect: true },
    ],
  },
  {
    text: "Formation of ozone hole is maximum over:?",
    options: [
      { id: 0, text: "Africa", isCorrect: false },
      { id: 1, text: "India", isCorrect: false },
      { id: 2, text: "Europe", isCorrect: false },
      { id: 3, text: "Antarctica", isCorrect: true },
    ],
  },
  {
    text: " Which one of the following is the greatest circle?",
    options: [
      { id: 0, text: "Arctic Circle", isCorrect: false },
      { id: 1, text: "Equator", isCorrect: true },
      { id: 2, text: "Tropic of Cancer", isCorrect: false },
      { id: 3, text: "Tropic of Capricorn", isCorrect: false },
    ],
  },
  {
    text: "What is the full form of DRDL?",
    options: [
      {
        id: 0,
        text: "Differential Research and Documentation Laboratory",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Department of Research and Development Laboratory",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Defense Research and Development Laboratory",
        isCorrect: false,
      },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "The green planet in the solar system is?",
    options: [
      { id: 0, text: "Mars", isCorrect: false },
      { id: 1, text: "Uranus", isCorrect: true },
      { id: 2, text: "Venus", isCorrect: false },
      { id: 3, text: "Earth", isCorrect: false },
    ],
  },
  {
    text: "What is the father of Indian missile technology?",
    options: [
      { id: 0, text: "Dr Homi Bhabha", isCorrect: false },
      { id: 1, text: "Dr Chidambaram", isCorrect: false },
      { id: 2, text: "Dr U.R. Rao", isCorrect: false },
      { id: 3, text: "Dr A.P.J. Abdul Kalam", isCorrect: true },
    ],
  },

  {
    text: "What is the reason behind the Bats flying in the dark?",
    options: [
      {
        id: 0,
        text: "they produce high pitched sounds called ultrasonics",
        isCorrect: true,
      },
      { id: 1, text: "the light startles them", isCorrect: false },
      {
        id: 2,
        text: "they have a perfect vision in the dark",
        isCorrect: false,
      },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },
  {
    text: "Which of these is the small-scale industry in India?",
    options: [
      { id: 0, text: "Jute industry", isCorrect: false },
      { id: 1, text: "Paper Industry", isCorrect: false },
      { id: 2, text: "Textile Industry", isCorrect: false },
      { id: 3, text: "Handloom Industry", isCorrect: true },
    ],
  },
  {
    text: "Which of these is the plant important in sericulture?",
    options: [
      { id: 0, text: "Cassia", isCorrect: false },
      { id: 1, text: "Legumes", isCorrect: false },
      { id: 2, text: "Pea", isCorrect: false },
      { id: 3, text: "Mulberry", isCorrect: true },
    ],
  },
  {
    text: "The largest public sector undertaking in the country is?",
    options: [
      { id: 0, text: "Railways", isCorrect: true },
      { id: 1, text: "Airways", isCorrect: false },
      { id: 2, text: "Roadways", isCorrect: false },
      { id: 3, text: "Iron and Steel Plants", isCorrect: false },
    ],
  },
  {
    text:
      "At which place on earth are there days & nights of equal length always?",
    options: [
      { id: 0, text: "Equator", isCorrect: true },
      { id: 1, text: "Poles", isCorrect: false },
      { id: 2, text: "Prime Meridian", isCorrect: false },
      { id: 3, text: "Nowhere", isCorrect: false },
    ],
  },
  {
    text:
      "In 2017, Who was appointed as the new Brand Ambassador for Swachh Bharat Mission?",
    options: [
      { id: 0, text: "Kangana Ranaut", isCorrect: false },
      { id: 1, text: "Priyanka Chopra", isCorrect: false },
      { id: 2, text: "Anushka Sharma", isCorrect: false },
      { id: 3, text: "Shilpa Shetty", isCorrect: true },
    ],
  },
  {
    text: "The study of Heavenly bodies is Known as _________?",
    options: [
      { id: 0, text: "Astrophysics", isCorrect: false },
      { id: 1, text: "Astronautics", isCorrect: false },
      { id: 2, text: "Astrology", isCorrect: false },
      { id: 3, text: "Astronomy", isCorrect: true },
    ],
  },
];
export default Questions;
