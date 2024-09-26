/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'MetrBox',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'MetrBox',
  },
  Meta: {
    Description: 'Unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Metrbox | Unlocking AI Potential',
    ThemeColor: '#32383E',
    TwitterSite: '@0xbloks',
  },
  URIs: {
    // Home: 'https://big-agi.com',
    // App: 'https://get.big-agi.com',
    // CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    // OpenRepo: 'https://github.com/enricoros/big-agi',
    // OpenProject: 'https://github.com/users/enricoros/projects/4',
    // SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
   // PrivacyPolicy: 'https://metrbox.com/privacy',
  },
} as const;
