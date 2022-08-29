import {useStaticQuery, graphql} from 'gatsby'

export const useAbout = () => {
  const {strapiAbout} = useStaticQuery(aboutQuery)
  return strapiAbout
}

const aboutQuery = graphql`
    query strapiAboutQuery {
        strapiAbout {
            id
            title
            content {
                data {
                    childMdx {
                        body
                    }
                }
            }
            createdAt(formatString: "MMMM DD, YYYY")
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
