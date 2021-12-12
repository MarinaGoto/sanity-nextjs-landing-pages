export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b645cb9b7491de8bb13712',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u1oeq3g8',
                  apiId: 'a94d8751-4566-408b-97b7-89da3829a156'
                },
                {
                  buildHookId: '61b645cb722d4ffc2c5f5375',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-32u1db8y',
                  apiId: '5dd4a6fb-e057-49e1-8a0e-d4b471b81674'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarinaGoto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-32u1db8y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
