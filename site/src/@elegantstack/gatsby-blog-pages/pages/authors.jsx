import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@elegantstack/flow-ui-components/src/PageTitle'
import Divider from '@elegantstack/flow-ui-components/src/Divider'
import Seo from '@elegantstack/flow-ui-widgets/src/Seo'
import AuthorExpanded from '@elegantstack/flow-ui-widgets/src/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'

const PageAuthors = props => {
  const authors = useBlogAuthors()

  return (
    <Layout {...props}>
      <Seo title='Our Team | Baby Monitor' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header='Team Members | Baby Monitor'
          subheader='The best baby monitor app and gadget to watch over your kids. You will get notifications on your phone, with sound and video, as soon as they start crying or making noise.'
        />
      </Stack>
      <Stack>
        <Main>
          {authors.map((author, i) => (
            <React.Fragment key={`item-${i}`}>
              <Divider />
              <AuthorExpanded author={author} withLink />
            </React.Fragment>
          ))}
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageAuthors
