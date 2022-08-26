import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import ContactForm from '@elegantstack/flow-ui-widgets/src/ContactForm'
import ContactInfo from '@elegantstack/flow-ui-widgets/src/ContactInfo'
import Commitment from '@elegantstack/flow-ui-widgets/src/Commitment'
import { useGlobal, usePrivacyPolicy } from '@helpers-blog'


const PagePrivacy = props => {
  const global = useGlobal()
  const privacyPolicy = usePrivacyPolicy()
  const seo = privacyPolicy.seo[0]

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
          <ContactForm/>
        </Main>
        <Sidebar>
          <Commitment/>
          <Divider/>
          <ContactInfo/>
        </Sidebar>
      </Stack>
    </Layout>
  );
}

export default PagePrivacy
