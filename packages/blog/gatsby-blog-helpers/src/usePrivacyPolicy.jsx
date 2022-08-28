import { useStaticQuery, graphql } from 'gatsby'

export const usePrivacyPolicy = () => {
  const { strapiPrivacyPolicy } = useStaticQuery(privacyPolicyQuery)
  return strapiPrivacyPolicy
}

const privacyPolicyQuery = graphql`
  query strapiPrivacyPolicyQuery {
    strapiPrivacyPolicy {
      id
      title
      content {
        data {
          childMdx {
            body
          }
        }
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      seo {
        keywords
        metaTitle
        metaDescription
        metaSocial {
          title
          description
          socialNetwork
        }
        metaImage {
          localFile {
            url
          }
        }
      }
    }
  }
  
`
