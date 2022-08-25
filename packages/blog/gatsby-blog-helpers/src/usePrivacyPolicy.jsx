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
      publishedAt(formatString: "MMMM DD, YYYY")
      seo {
        keywords
        metaTitle
        metaDescription
        metaImage {
          localFile {
            url
          }
        }
      }
    }
  }
  
`
