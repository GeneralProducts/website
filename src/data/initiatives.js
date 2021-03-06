const initiatives = [
  {
    key: 1,
    title: "Why's (poignant) Guide to Ruby",
    body: "For Brighton Ruby 2020, we published a new edition of this seminal book that means so much to so many in the Ruby community. A real labour of love, it produced similar response from the 300+ people who received a copy in the post during the 2020 pandemic.",
    image_url: '/why.png',
    caption: "Poignant guide",
    link_href: "https://twitter.com/sfcgim/status/1278265191638106119",
    link_text: "Reactions on Twitter",
    social: [
      {
        url: 'https://twitter.com/brightonruby',
        className: 'fa-twitter',
      },
      {
        url: "https://poignant.guide",
        className: 'fa-firefox',
      }
    ]
  },
  {
    key: 2,
    title: '#SideProjectSummer 2020',
    body: "Carve out time for coding! To get momentum on publishers' increasing enthusiasm for code, every Friday afternoon, May to August, we convene on Twitter to compare notes on our side projects. It's fantastic to see all the things people are doing with their growing technical literacy.",
    image_url: '/sps20.png',
    caption: "SideProjectSummer.com",
    link_href: "https://twitter.com/search?q=%23SideProjectSummer&src=recent_search_click&f=live",
    link_text: "#SideProjectSummer hashtag",
    social: [
      {
        url: "https://github.com/GeneralProducts/side-project-summer",
        className: 'fa-github-square',
      },
      {
        url: 'https://twitter.com/sideprosummer',
        className: 'fa-twitter',
      }
    ]
  },
  {
    key: 3,
    title: 'JustSimply.dev',
    body: "If someone’s having to read your docs, it’s not “simple”, but technical documentation often resorts to words such as 'just', and 'simply', which can make for a frustrating read. We wrote a one-page website, justsimply.dev, to encourage documentation writers to look again at their language.",
    image_url: '/justsimply.png',
    caption: "https://justsimply.dev",
    link_href: "https://justsimply.dev/",
    link_text: "No programming is “painfully simple”.",
    social: [
      {
        url: "https://justsimply.dev/",
        className: 'fa-firefox',
      }
    ]
  },
  {
    key: 4,
    title: 'FutureBook Day of Code',
    body: "In association with The Bookseller's FutureBook conference, we were thrilled to deliver a Day of Code, which demystified programming for the book trade. 40 delegates from bookselling and publishing wrote their own website from scratch in a day, using Ruby, Jekyll, HTML and CSS.",
    image_url: '/doc.png',
    caption: "2019 Day of Code",
    link_href: "https://2019.dayofcode.co.uk",
    link_text: "See the results on the Day of Code website",
    social: [
      {
        url: "https://github.com/GeneralProducts/day-of-code",
        className: 'fa-github-square',
      }
    ]
  },
  {
    key: 5,
    title: 'Publishers who code',
    body: 'We run occasional coding sessions and courses for organisations such as Book Machine, eLife Sciences, the London Book Fair, SYP, and universities. Often we make these free to attend. We announce such courses on Twitter. Contact us if you\'d like us to quote for a private coding course for your organisation.',
    image_url: '/faber.jpg',
    caption: "Coding at Faber",
    social: [
      {
        url: "https://github.com/GeneralProducts/publishers-who-code",
        className: 'fa-github-square'
      },
      {
      url: 'https://twitter.com/hashtag/publisherswhocode?src=hashtag_click&f=live',
      className: 'fa-twitter',
      }
    ]
  },
  {
    key: 6,
    title: "Publishers' advice bot",
    body: 'A cheerful and informative advice bot for book publishers. Say “help” to me, and I\'ll give you some invaluable publishing advice!',
    image_url: '/bot.png',
    caption: "Beep!",
    social: [
      {
      url: 'https://twitter.com/bot_publishing',
      className: 'fa-twitter',
      }
    ]
  },
  {
    key: 7,
    title: 'ONIX Ninja',
    body: 'ONIX augmentation for clients who are unable to move to Consonance but who need to augment the ONIX produced by their legacy systems, for ingestion into Coresource, or similar demanding third parties.',
    image_url: '/onix_ninja.jpeg',
    caption: "Add complex price rules etc",
    social: [
      {
      url: 'https://twitter.com/onix_ninja',
      className: 'fa-twitter',
      }
    ]
  },
  {
    key: 8,
    title: 'Volunteering',
    body: 'We are proud to be long-time coaches and speakers at RailsGirls London and encourage many publishers that we meet to apply, try Ruby and Rails, and become part of the super-friendly community. We\'ve also volunteered at a number of other tech events for publishers and kids.',
    image_url: '/railsgirls.png',
    caption: "Railsgirls London",
    social: [
      {
      url: 'https://twitter.com/railsgirls_ldn',
      className: 'fa-twitter',
      }
    ]
  },
  {
    key: 9,
    title: 'Supporting open source',
    body: 'We donate to some of the open source code we rely on, such as Rubocop, via OpenCollective, and contribute to code where we can, such as the Lisbn rubygem, and the official Rails documentation.',
    image_url: '/rubocop.png',
    caption: "Rubocop's Open Collective page",
    link_href: "https://opencollective.com/rubocop#contributors",
    link_text: "Open Collective",
    social: [
      {
      url: 'https://twitter.com/opencollect',
      className: 'fa-twitter',
      }
    ]
  },
  {
    key: 10,
    title: 'Campaigns',
    body: "Whether it's supporting paid internships, attending an anti-Trump demonstration, or pushing for corporates to support technical literacy in publishing, we are proud of our actions to make the world a bit better.",
    image_url: '/trump.png',
    caption: "Hate never welcome",
    link_href: "https://www.consonance.app/blog/",
    link_text: "Read opinions on our blog",
    social: [
      {
        url: 'https://twitter.com/consonance_app',
        className: 'fa-twitter',
      }
    ]
  },
  {
    key: 11,
    title: 'Talks, writing & hosting events',
    body: 'We have a busy diary of events we run or contribute to throughout the year. Recent events include a coding seminar at the London Book Fair, BookMachine Unplugged, Byte the Book, Coding at the Castle for the Oxford SYP, the Pitch competition, and more.',
    image_url: '/castle.png',
    caption: "SYP's coding at the castle",
    link_href: "https://www.consonance.app/blog/",
    link_text: "Read about our past and future events on our blog",
    social: [
      {
        url: 'https://twitter.com/consonance_app',
        className: 'fa-twitter',
      }
    ]
  },
  {
    key: 12,
    title: 'Conference attendance',
    body: 'We enjoy refining our skills by attending the best conferences about things we care about. For instance, we are annual attendees of Brighton Ruby and Bath Ruby.',
    image_url: '/brighton.png',
    caption: "Andy Croll's Brighton Ruby",
    link_href: "https://www.consonance.app/blog/bath-ruby-2018/",
    link_text: "Read our write up of Bath Ruby 2018"
  },
  {
    key: 13,
    title: 'Component library',
    body: "This is a public collection of the building blocks that we use as we continue to improve Consonance. Just as Consonance gives its users “one source of truth” for their data, our component library provides us with “one source of truth” for some of the most key components in our code.",
    image_url: '/library.png',
    caption: "Our component library",
    link_href: "https://web.consonance.app/component_library",
    link_text: "See our component library"
  },
  {
    key: 14,
    title: 'Rebrand',
    body: "As we mature and grow, we decided that the name 'Bibliocloud' was a bit late-nineties. So we rebranded, and learned a lot along the way.",
    image_url: '/rebrand.png',
    caption: "Consonance",
    link_href: "https://www.consonance.app/blog/rebrand/",
    link_text: "Read about our rebrand"
  },
  {
    key: 15,
    title: 'Style guide',
    body: "We maintain a style guide for our brand. As part of that, we have a brand palette, with the colours based on our clients' wonderful books",
    image_url: '/styleguide.png',
    caption: "Our style guide",
    link_href: "https://www.consonance.app/style_guide/",
    link_text: "Read the guide"
  }
]

export default initiatives
