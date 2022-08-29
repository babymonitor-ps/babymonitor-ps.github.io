import { useStaticQuery, graphql } from 'gatsby'

export const useDisclaimer = () => {
  const { strapiDisclaimer } = useStaticQuery(disclaimerQuery)
  return strapiDisclaimer
}

const disclaimerQuery = graphql`
  query strapiDisclaimerQuery {
    strapiDisclaimer {
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
