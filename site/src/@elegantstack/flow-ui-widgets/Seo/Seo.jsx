import React from 'react'
import Helmet from 'react-helmet'
import { helmetJsonLdProp } from 'react-schemaorg'
import { getSrc } from 'gatsby-plugin-image'
import { useGlobal } from '@helpers-blog'
import getImageVariant from '@components/utils/getImageVariant'

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  category,
  date,
  timeToRead,
  children,
  thumbnail,
  siteUrl,
  locale,
  seo = {}
}) => {

  //const site = useSiteMetadata()
  const global = useGlobal()
  
  if (Object.keys(seo).length === 0) {
    seo = {
      metaTitle: title,
      metaDescription: description,
      excerpt,
      meta,
      keywords,
      author,
      category,
      date,
      timeToRead,
      children,
      metaImage: thumbnail,
      siteUrl,
      locale
    }
  }

  const { defaultSeo, siteName, favicon } = global

  //console.log(seo)
  //console.log(defaultSeo)
  const fullSeo = { ...defaultSeo, ...seo};
  console.log(fullSeo)

  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}

  const imageSrc = getSrc(getImageVariant(fullSeo.metaImage, 'hero'))
  const imageUrl =
    imageSrc &&
    (imageSrc.startsWith('//') ? imageSrc : siteUrl && `${siteUrl}${imageSrc}`)

  /**
   * Meta Tags
   */

  //const { facebookMeta } = fullSeo

  const metaTags = [
    { itemprop: 'name', content: fullSeo.metaTitle || siteName },
    { itemprop: 'description', content: fullSeo.metaDescription || excerpt },
    { name: 'description', content: fullSeo.metaDescription || excerpt },

    { property: 'og:title', content: fullSeo.metaTitle || siteName },
    { property: 'og:description', content: fullSeo.metaDescription || excerpt },
    { property: 'og:type', content: date ? 'article' : 'website' },
    { property: 'og:site_name', content: siteName },
    { property: 'og:image', content: imageUrl },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: siteName },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: fullSeo.metaDescription || excerpt },
    { name: 'twitter:creator', content: twitter.url }
  ]

  if (fullSeo.keywords && fullSeo.keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: fullSeo.keywords.join(', ') })
  }

  if (date) {
    metaTags.push({ name: 'article:published_time', content: date })
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', value: 'Reading time' })
    metaTags.push({
      name: 'twitter:data1',
      value: `${timeToRead} min read`
    })
  }

  if (meta) {
    metaTags.push(meta)
  }

  /**
   * Structured Data (JSON-LD)
   */

  const scripts = []

  // Article
  if (title && author) {
    const articleJsonLd = helmetJsonLdProp({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      image: imageUrl,
      datePublished: date,
      author: {
        '@type': 'Person',
        name: author.name,
        url: author.slug
      }
    })
    scripts.push(articleJsonLd)
  }

  // Breadcrumb
  if (title && category) {
    const breadcrumbJsonLd = helmetJsonLdProp({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: siteName,
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: category.name,
          item: `${siteUrl}${category.slug}`
        }
      ]
    })
    scripts.push(breadcrumbJsonLd)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: locale || 'en'
      }}
      title={title}
      titleTemplate={`%s | ${siteName}`}
      meta={metaTags}
      script={scripts}
    >
      {children}
    </Helmet>
  )
}

export default Seo
