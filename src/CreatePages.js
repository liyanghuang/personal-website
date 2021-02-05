const path = require('path');

const createPages = async({graphql, actions }) => {

    const {createPage} = actions

    const {data} = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)

    ids = data.allMarkdownRemark.edges.map(e => e.node.id)


    console.log('craeting page')

    createPage({
        path: '/blog/',
        component: path.resolve('./src/templates/blog-listings-template.js'),
        context: {
            Ids: ids,
        }
    })
}

module.exports = createPages