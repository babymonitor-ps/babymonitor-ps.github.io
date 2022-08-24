import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import ContactForm from '@elegantstack/flow-ui-widgets/src/ContactForm'
import ContactInfo from '@elegantstack/flow-ui-widgets/src/ContactInfo'
import Commitment from '@elegantstack/flow-ui-widgets/src/Commitment'

const PagePrivacy = props => (
  <Layout {...props}>
    <Seo title='Privacy Policy | Baby Monitor' />
    <Divider />
    <Stack effectProps={{ effect: 'fadeInDown' }}>
      <Main>
        <PageTitle
          header="Privacy Policy | Baby Monitor"
          subheader='The best baby monitor app and gadget to watch over your kids. You will get notifications on your phone, with sound and video, as soon as they start crying or making noise.'
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        <Commitment />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)

export default PagePrivacy
