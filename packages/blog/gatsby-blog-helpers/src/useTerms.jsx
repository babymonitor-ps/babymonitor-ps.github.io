import { useStaticQuery, graphql } from 'gatsby'

export const useTerms = () => {
  const { strapiTermsAndCondition } = useStaticQuery(termsQuery)
  return strapiTermsAndCondition
}

const termsQuery = graphql`
  query strapiTermsQuery {
    strapiTermsAndCondition {
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
