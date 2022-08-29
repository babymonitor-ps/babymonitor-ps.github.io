import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx'
import { useGlobal, useTerms } from '@helpers-blog'
import components from "@elegantstack/flow-ui-components/src/Mdx";

const PageContact = props => {
  const global = useGlobal()

  const termsAndCondition = useTerms()
  //console.log(termsAndCondition)
  const seo = termsAndCondition.seo

  return (
    <Layout {...props}>
      <Seo seo={ seo } />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <Main>
          <PageTitle
            header={`${termsAndCondition.title} | ${global.siteName}`}
            subheader={seo.metaDescription}
          />
          <Divider />
          <MDXProvider components={components}>
            <MDXRenderer>{ termsAndCondition.content.data.childMdx.body }</MDXRenderer>
          </MDXProvider>
        </Main>

      </Stack>
    </Layout>
  )
}

export default PageContact
