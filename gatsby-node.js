const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/BlogPost/index.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
            category {
              slug
            }
          }
        }
        allContentfulCategory {
          nodes {
            name
            slug
          }
        }
        allContentfulPerson{
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/${post.category.slug}/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }


  //category pages
  // Define a template for blog post
  const categoryTemplate = path.resolve('./src/templates/Category/index.js');


  const categories = result.data.allContentfulCategory.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (categories.length > 0) {
    categories.forEach((category, index) => {

      createPage({
        path: `/${category.slug}/`,
        component: categoryTemplate,
        context: {
          categorySlug: category.slug,
        },
      })
    })
  }

  //category pages
  // Define a template for blog post
  const personTemplate = path.resolve('./src/templates/Person/index.js');


  const persons = result.data.allContentfulPerson.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (persons.length > 0) {
    persons.forEach((person, index) => {

      createPage({
        path: `/${person.slug}/`,
        component: personTemplate,
        context: {
          personSlug: person.slug,
        },
      })
    })
  }

}
