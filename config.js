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
  greetingAfternoon: '今日は、',
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
      name: 'Gitlab',
      icon: 'gitlab',
      link: 'https://gitlab.com/',
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
      name: 'Slack',
      icon: 'slack',
      link: 'https://slack.com',
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
        name: 'no thoughts, head empty',
        link: 'https://www.youtube.com/watch?v=qZGwRz8wnSY&list=PLyJloYf4OGtaSaplK_E9LruV5a2fIXeX6&index=1',
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
        name: 'GitHub',
        link: 'https://github.com/',
      },
      {
        name: 'Arch User Repository',
        link: 'https://aur.archlinux.org/',
      },
    ],
  },
};
