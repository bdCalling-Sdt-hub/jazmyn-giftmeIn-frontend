export const surveyQuestions = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are your favorite hobbies?',
    options: [
      '📚 Reading',
      '🎮 Gaming',
      '🧘‍♀️ Yoga & Meditation',
      '🎨 Arts & Crafts',
      '🎵 Music & Instruments',
      '🏋️ Fitness & Gym',
      '🌱 Gardening',
      '🚀 Tech & Gadgets',
      '🍳 Cooking & Baking',
      '🏕️ Outdoor Adventures',
    ],
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What best describes your lifestyle?',
    options: [
      '🌿 Minimalist',
      '🏙️ Urban/Trendy',
      '🌍 Eco-friendly',
      '💼 Workaholic/Busy Professional',
      '💆 Self-Care & Wellness Enthusiast',
    ],
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What type of gifts excite you the most?',
    options: [
      '🎁 Surprise/Unique Finds',
      '🌟 Luxury/High-End Brands',
      '📦 Practical & Everyday Essentials',
      '🤣 Funny/Quirky Gifts',
      '❤️ Sentimental & Personalized Items',
    ],
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What categories of gifts do you enjoy receiving?',
    options: [
      '🏠 Home & Decor',
      '💄 Beauty & Skincare',
      '🍵 Coffee & Tea',
      '🖥️ Tech & Gadgets',
      '👕 Fashion & Accessories',
      '🛀 Self-Care & Relaxation',
      '🎧 Music & Entertainment',
      '🎮 Gaming & Collectibles',
      '🌿 Plants & Gardening',
    ],
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What’s your personality type when it comes to gifts?',
    options: [
      '🎭 I love fun and quirky gifts',
      '🏆 I appreciate high-quality & premium items',
      '🎨 I prefer creative & artsy gifts',
      '🧩 I enjoy puzzle & brain-teasing gifts',
      '🏡 I love cozy and homey gifts',
    ],
  },
  {
    id: 6,
    type: 'multiple-choice',
    limit: 3,
    question: 'What colors do you love seeing in your gifts?',
    options: ['🔵 Blue', '🔴 Red', '🟣 Purple', '🟢 Green', '⚫ Black', '⚪ White', '🟡 Yellow', '🌈 Surprise me!'],
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which occasions do you want gifts for?',
    options: ['🎂 Birthday', '🎄 Christmas', '💖 Valentine’s Day', '🎉 Other (Custom Date)'],
  },
  {
    id: 8,
    type: 'single-choice',
    question: 'Do you want multiple gifts per holiday if your budget allows?',
    options: ['✅ Yes, if I have enough balance', '❌ No, just one perfect gift per holiday'],
  },
  {
    id: 9,
    type: 'single-choice',
    question: 'Would you like to receive gifts randomly throughout the year as a surprise?',
    options: ['✅ Yes! Random gifts would be fun', '❌ No, just on my selected holidays'],
  },
  {
    id: 10,
    type: 'single-choice',
    question: 'Do you prefer gift for Men, Women, or both?',
    options: ['Men', 'Women', 'Both'],
  },
  {
    id: 11,
    type: 'text',
    question: 'Do you have any allergies or items you do not want to receive?',
    placeholder: 'e.g., No peanuts, no scented candles, no leather items',
  },
];

// export const budgetQuestions = [
//   {
//     id: 1,
//     type: 'multiple-choice',
//     question: 'Which holidays/events would you like gifts for?',
//     options: ['🎄 Christmas', '🎂 Birthday', '❤️ Valentine’s Day', ' ✍️ Other'],
//   },
//   {
//     id: 2,
//     type: 'multiple-choice',
//     question: 'What are your favorite hobbies or interests?',
//     options: ['📖 Reading', '🏋️ Fitness', '🧖‍♀️ Self-Care', '💻 Technology', '🍰 Cooking/Baking'],
//   },
//   {
//     id: 3,
//     type: 'single-choice',
//     question: 'What type of gifts do you usually prefer ?',
//     options: ['🎁 Practical', '❤️ Sentimental', '🔄 Both'],
//   },
//   {
//     id: 4,
//     type: 'text',
//     question: 'What is your favorite color or design style?',
//     options: [],
//   },
//   {
//     id: 5,
//     type: 'yes-no',
//     question: 'Do you have any allergies or restrictions (e.g., food, scents)?',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 6,
//     type: 'text',
//     question: 'What is one item you’ve always wanted but never bought for yourself? ',
//     options: [],
//   },
// ];

// export const littleExtraQuestions = [
//   {
//     id: 1,
//     type: 'multiple-choice',
//     question: 'Which holidays/events would you like gifts for?',
//     options: ['👨‍👩‍👧‍👦 Mother’s Day/Father’s Day', '💍 Anniversaries', '🎊 New Year’s Eve', ' ✍️ Other'],
//   },
//   {
//     id: 2,
//     type: 'multiple-choice',
//     question: 'What are your preferred types of gifts?',
//     options: [
//       '📱 Tech/Gadgets',
//       '💍 Accessories',
//       '📖 Books/Stationery',
//       '🏠 Home Decor',
//       '💄 Beauty/Skincare',
//       ' ✍️ Other',
//     ],
//   },
//   {
//     id: 3,
//     type: 'yes-no',
//     question: 'Do you enjoy receiving surprise items that are outside your usual preferences?',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 4,
//     type: 'text',
//     question: 'How do you typically relax or unwind?',
//     options: [],
//   },
//   {
//     id: 5,
//     type: 'single-choice',
//     question: 'Would you prefer one higher-value gift or several smaller items for a single event?',
//     options: ['💎 High-Value Gift', '🎁 Several Smaller Items'],
//   },
//   {
//     id: 6,
//     type: 'text',
//     question: 'Do you have a favorite brand or store you’d love gifts from?',
//     options: [],
//   },
// ];

// export const spoilingQuestions = [
//   {
//     id: 1,
//     type: 'yes-no',
//     question: 'Would you like to opt-in for random surprise gifts throughout the year?',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 2,
//     type: 'multiple-choice',
//     question: 'What type of luxury items do you enjoy?',
//     options: ['👗👠 Designer Fashion ', '🍷🍽️ Gourmet Food & Drinks ', '📱💻Exclusive Tech', ' ✍️ Other'],
//   },

//   {
//     id: 3,
//     type: 'multiple-choice',
//     question: ' What is your preferred gift wrapping style?',
//     options: ['🎨 Minimalist ', '💫 Luxurious', '🎨 Fun/Colorful', ' ✍️ Other'],
//   },
//   {
//     id: 4,
//     type: 'text',
//     question: 'Do you want your gifts to include personalized elements?',
//     options: [],
//   },
//   {
//     id: 5,
//     type: 'text',
//     question: 'Would you like handwritten notes or cards included with your gifts?',
//     options: [],
//   },
//   {
//     id: 6,
//     type: 'text',
//     question: 'Are there specific themes you’d like for your gifts?',
//     options: [],
//   },
// ];
