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
     Home: 'https://metrbox.com',
     App: 'https://agi.metrbox.com',
     CardImage: 'https://metrbox.com/wp-content/uploads/2024/09/x-card.png',
     OpenRepo: 'https://github.com/metrbox/big-agi',
     OpenProject: 'https://github.com/users/metrbox',
     SupportInvite: 'https://discord.gg/BCsxqtVt',
     Twitter: 'https://www.twitter.com/0xbloks',
    PrivacyPolicy: 'https://metrbox.com/privacy/',
  },
} as const;
