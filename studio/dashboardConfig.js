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
                  buildHookId: '5f3e8652cf5e4d0325ea2d91',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-3-studio-w761a1mm',
                  apiId: '50ec76ee-a81f-444c-95a0-b18b2ac3de0b'
                },
                {
                  buildHookId: '5f3e8652cf5e4dd912ea2fc4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-3-web-jia9r3av',
                  apiId: 'd0e3abbb-d856-4a7f-bd95-7fff478c397b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-kitchen-sink3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-3-web-jia9r3av.netlify.app', category: 'apps'}
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
