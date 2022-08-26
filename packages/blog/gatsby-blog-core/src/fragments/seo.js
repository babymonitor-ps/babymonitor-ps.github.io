import { graphql } from 'gatsby'

export const query = graphql`
  fragment Seo on Seo {
      id
      keywords
      metaDescription
      metaTitle
      metaSocial {
          title
          description
          socialNetwork
      }
      metaImage {
          __typename
          ... on ImageSharp {
              ImageSharp_small: gatsbyImageData(
                  width: 600
                  height: 315
                  layout: FIXED
                  transformOptions: { cropFocus: NORTH }
                  placeholder: TRACED_SVG
                  quality: 75
              )
              ImageSharp_regular: gatsbyImageData(
                  width: 1200
                  height: 630
                  layout: FIXED
                  transformOptions: { cropFocus: NORTH }
                  placeholder: TRACED_SVG
                  quality: 100
              )
          }
          ... on ContentfulAsset {
              ContentfulAsset_small: gatsbyImageData(
                  width: 600
                  height: 315
                  layout: FIXED
                  cropFocus: TOP
                  resizingBehavior: THUMB
                  quality: 75
              )
              ContentfulAsset_regular: gatsbyImageData(
                  width: 1200
                  height: 630
                  layout: FIXED
                  cropFocus: TOP
                  resizingBehavior: THUMB
                  quality: 100
              )
          }
          ... on SanityImageAsset {
              SanityImageAsset_small: gatsbyImageData(
                  width: 600
                  height: 315
                  layout: FIXED
                  placeholder: NONE
                  fit: CLIP
              )
              SanityImageAsset_regular: gatsbyImageData(
                  width: 1200
                  height: 630
                  layout: FIXED
                  placeholder: NONE
                  fit: CLIP
              )
          }
      }
  }
  
`