const path = require('path');

const createPages = async({graphql, actions }) => {

    const {createPage} = actions

    const {data} = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter{
                            postNumber
                        }
                    }
                }
            }
        }
    `)

    const postNumbers = data.allMarkdownRemark.edges.map(e => e.node.frontmatter.postNumber).sort((a,b) => parseInt(b) - parseInt(a))
    const postsPerPage = 4;
    const numPages = Math.ceil(postNumbers.length / postsPerPage)

    for (let i = 0; i < numPages; i+= 1) {

        postsThisPage = postNumbers.slice(i*postsPerPage, (i+ 1)*postsPerPage);
        const pathString = (i === 0)? '/blog/' : `/blog/page/${i+1}/`;

        createPage({
            path: pathString,
            component: path.resolve('./src/templates/blog-listings-template.js'),
            context: {
                postids: postsThisPage,
                currpage: i+1,
                numpages: numPages
            }
        });
    }
}

module.exports = createPages