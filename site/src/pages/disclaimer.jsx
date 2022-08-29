import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import { useGlobal, useDisclaimer } from '@helpers-blog'
import components from "@elegantstack/flow-ui-components/src/Mdx";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx'


const PageDisclaimer = props => {
  const global = useGlobal()
  const disclaimer = useDisclaimer()
  //console.log(privacyPolicy)
  const seo = disclaimer.seo

  return (
    <Layout {...props}>
      <Seo seo={ seo }/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <Main>
          <PageTitle
            header={`${disclaimer.title} | ${global.siteName}`}
            subheader={seo.metaDescription}
          />
          <Divider/>
          <MDXProvider components={components}>
            <MDXRenderer>{ disclaimer.content.data.childMdx.body }</MDXRenderer>
          </MDXProvider>
        </Main>

      </Stack>
    </Layout>
  );
}

export default PageDisclaimer
