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
                            path
                            category
                        }
                    }
                }
            }
        }
    `)

    const postNumbers = data.allMarkdownRemark.edges.map(e => e.node.frontmatter.postNumber).sort((a,b) => parseInt(b) - parseInt(a))
    const postsPerPage = 8;
    const numPages = Math.ceil(postNumbers.length / postsPerPage)

    for (let i = 0; i < numPages; i+= 1) {

        let postsThisPage = postNumbers.slice(i*postsPerPage, (i+ 1)*postsPerPage);
        let pathString = (i === 0)? '/blog/' : `/blog/page/${i+1}/`;

        createPage({
            path: pathString,
            component: path.resolve('./src/templates/blog-listings-template.js'),
            context: {
                postids: postsThisPage,
                currpage: i+1,
                numpages: numPages,
                category: "default"
            }
        });
    }

    const reflectionPostEdges = data.allMarkdownRemark.edges.filter(e => (e.node.frontmatter.category === "Reflections"))
    const reflectionPostNumbers = reflectionPostEdges.map(e => e.node.frontmatter.postNumber).sort((a, b) => parseInt(b) - parseInt(a))
    const reflectionNumPages = Math.ceil(reflectionPostNumbers.length / postsPerPage)

    for (let i = 0; i < reflectionNumPages; i+= 1) {

        let postsThisPage = reflectionPostNumbers.slice(i*postsPerPage, (i+ 1)*postsPerPage);
        let pathString = (i === 0)? '/blog/reflections/' : `/blog/reflections/page/${i+1}/`;

        createPage({
            path: pathString,
            component: path.resolve('./src/templates/blog-listings-template.js'),
            context: {
                postids: postsThisPage,
                currpage: i+1,
                numpages: reflectionNumPages,
                category: "reflections"
            }
        });
    }

    const techPostEdges = data.allMarkdownRemark.edges.filter(e => (e.node.frontmatter.category === "Tech"))
    const techPostNumbers = techPostEdges.map(e => e.node.frontmatter.postNumber).sort((a, b) => parseInt(b) - parseInt(a))
    const techNumPages = Math.ceil(techPostNumbers.length / postsPerPage)

    for (let i = 0; i < techNumPages; i+= 1) {

        let postsThisPage = techPostNumbers.slice(i*postsPerPage, (i+ 1)*postsPerPage);
        let pathString = (i === 0)? '/blog/tech/' : `/blog/tech/page/${i+1}/`;

        createPage({
            path: pathString,
            component: path.resolve('./src/templates/blog-listings-template.js'),
            context: {
                postids: postsThisPage,
                currpage: i+1,
                numpages: techNumPages,
                category: "tech"
            }
        });
    }

    data.allMarkdownRemark.edges.forEach(e => {
        let extraPosts = data.allMarkdownRemark.edges.filter(edge => ((edge.node.frontmatter.category === e.node.frontmatter.category) && (edge.node.frontmatter.postNumber != e.node.frontmatter.postNumber)))
        let extraPostsNums = extraPosts.map(e => e.node.frontmatter.postNumber)
        let relatedPosts = []
        for(let i = 0; i < Math.min(extraPosts.length, 3); i++){
            let rand = Math.floor(Math.random() * extraPosts.length)
            if(!relatedPosts.includes(extraPostsNums[rand])) {
                relatedPosts.push(extraPostsNums[rand])
            }
            else {
                i -= 1
            }
        }
        createPage({
            path: e.node.frontmatter.path,
            component: path.resolve('./src/templates/blog-post-template.js'),
            context: {
                postid: e.node.frontmatter.postNumber,
                relatedPosts: relatedPosts,
            }
        })
    })

}

module.exports = createPages