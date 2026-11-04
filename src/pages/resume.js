import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ResumePage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            website
            linkedin
          }
        }
      }
    `
  )
  return (
  <Layout page="resume">
    <SEO title="Resume" />
    <div class="custom-row">
      <article class="home col-md-8 col-md-offset-2">
        <section>
          <h2 class="sub-heading">Resume</h2>
          <div class="resume">
            <a href="https://www.jasmeetoberai.com/ai-resume/">Online Resume</a>
            <br />
            <a href={"https://ca.linkedin.com/in/" + site.siteMetadata.linkedin }>LinkedIn Profile</a>
            <br />
            <br />
            <iframe
              title="ai-resume"
              src="https://www.jasmeetoberai.com/ai-resume/"
              style={{ width: '100%', height: '800px', border: '1px solid #ddd' }}
              frameBorder="0"
            />
          </div>
        </section>
      </article>
    </div>
  </Layout>
  )
}

export default ResumePage
