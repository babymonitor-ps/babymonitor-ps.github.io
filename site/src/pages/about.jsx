import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import { useGlobal, useAbout } from '@helpers-blog'
import components from "@elegantstack/flow-ui-components/src/Mdx";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx'


const PageAbout = props => {
  const global = useGlobal()
  const about = useAbout()
  //console.log(privacyPolicy)
  const seo = about.seo

  return (
    <Layout {...props}>
      <Seo seo={ seo }/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <Main>
          <PageTitle
            header={`${about.title} | ${global.siteName}`}
            subheader={seo.metaDescription}
          />
          <Divider/>
          <MDXProvider components={components}>
            <MDXRenderer>{ about.content.data.childMdx.body }</MDXRenderer>
          </MDXProvider>
        </Main>

      </Stack>
    </Layout>
  );
}

export default PageAbout
