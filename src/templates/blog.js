import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from '../components/layout';
import Head from '../components/head';

//NOTE: Generate posts from markdown
// export const query = graphql`
//   query (
//     $slug: String
//   ) {
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query (
    $slug: String
  ) {
    contentfulBlogPost (
        slug: {
          eq: $slug
        }
    ) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {/* //NOTE: Show the content in markdown */}
      {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> */}
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}


export default Blog;
