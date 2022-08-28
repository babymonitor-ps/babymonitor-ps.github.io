import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import ContactInfo from '@elegantstack/flow-ui-widgets/src/ContactInfo'
import Commitment from '@elegantstack/flow-ui-widgets/src/Commitment'
import { useGlobal, usePrivacyPolicy } from '@helpers-blog'
import components from "@elegantstack/flow-ui-components/src/Mdx";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx'


const PagePrivacy = props => {
  const global = useGlobal()
  const privacyPolicy = usePrivacyPolicy()
  const seo = privacyPolicy.seo[0]

  //console.log(privacyPolicy.content)

  return (
    <Layout {...props}>
      <Seo seo={ seo }/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <Main>
          <PageTitle
            header={`${privacyPolicy.title} | ${global.siteName}`}
            subheader={seo.metaDescription}
          />
          <Divider/>
          <MDXProvider components={components}>
            <MDXRenderer>{ privacyPolicy.content.data.childMdx.body }</MDXRenderer>
          </MDXProvider>
        </Main>
        {/*<Sidebar>
          <Commitment/>
          <Divider/>
          <ContactInfo/>
        </Sidebar>*/}
      </Stack>
    </Layout>
  );
}

export default PagePrivacy
