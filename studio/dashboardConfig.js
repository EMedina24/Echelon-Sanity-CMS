export default {
  widgets: [
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
                  buildHookId: '60b8fc6cd39c161c3d602551',
                  title: 'Sanity Studio',
                  name: 'echelon-sanity-cms-studio',
                  apiId: '07bea4ba-c965-4430-95a1-d311150fdf4f'
                },
                {
                  buildHookId: '60b8fc6da0ba0f21d69f2fe0',
                  title: 'Blog Website',
                  name: 'echelon-sanity-cms',
                  apiId: 'f6be3474-0adc-4051-a84f-a5901c170486'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EMedina24/Echelon-Sanity-CMS',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://echelon-sanity-cms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
