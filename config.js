// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'スピード',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'おはよう、',
  greetingAfternoon: 'こんにちは、',
  greetingEvening: '今晩は、',
  greetingNight: 'お休み、　',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '37.774929',
  weatherLongitude: '-122.419418',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Bitwarden',
      icon: 'lock',
      link: 'https://vault.bitwarden.com/#/',
    },
    {
      id: '3',
      name: 'Amazon',
      icon: 'shopping-cart',
      link: 'https://amazon.com',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'book-open',
      link: 'https://reddit.com/',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '6',
      name: 'Weather',
      icon: 'cloud-drizzle',
      link: 'https://weather.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Nintendo and lofi',
        link: 'https://www.youtube.com/watch?v=AvhplYM46Fc&list=PLtp9gBTCKnc8jUhCOeHOKArZbEKf44GdF',
      },
      {
        name: 'Dreamy lofi',
        link: 'https://youtu.be/fZwWQhfwjK0',
      },
      {
        name: 'Yamanote Train Melodies',
        link: 'https://youtu.be/4V6Q5l2S7Co',
      },
      {
        name: 'Nostalgia',
        link: 'https://youtu.be/7c_TmELfuZo',
      },
    ],
    secondList: [
      {
        name: 'itazuraneko',
        link: 'https://itazuraneko.neocities.org/index.html',
      },
      {
        name: '4chan',
        link: 'https://4chan.org/',
      },
      {
        name: 'Startmail',
        link: 'https://startmail.com/',
      },
      {
        name: 'The Moe Way',
        link: 'http://learnjapanese.moe/',
      },
    ],
  },
};
