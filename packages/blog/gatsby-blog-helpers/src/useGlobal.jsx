import { useStaticQuery, graphql } from 'gatsby'

export const useGlobal = () => {
  const { strapiGlobal } = useStaticQuery(globalQuery)
  return strapiGlobal
}

const globalQuery = graphql`
  query strapiGlobalQuery {
    strapiGlobal {
      id
      siteName
      siteDescription
      publishedAt(formatString: "MMMM DD, YYYY")
      defaultSeo {
        keywords
        metaTitle
        metaDescription
        metaImage {
          localFile {
            url
          }
        }
      }
      favicon {
        localFile {
          url
        }
      }
    }
  }
  
  `