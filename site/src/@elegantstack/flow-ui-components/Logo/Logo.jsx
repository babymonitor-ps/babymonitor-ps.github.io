import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Heading } from 'theme-ui'
import './style.css';

const styles = {
  image: {
    verticalAlign: `middle`
  },
  grayscale: {
    WebkitFilter: `grayscale(1)`,
    filter: `grayscale(1)`,
    opacity: `0.7`
  },
  title: {
    m: 0
  }
}

const Logo = ({ title, grayscale, image, to, ...props }) => (
  <Heading
    as={Link}
    to={to}
    alt={title}
    aria-label={title}
    variant='h2'
    sx={styles.title}
    {...props}
  >
    {image ? (
      <img
        src={image}
        alt={title}
        className={'logo'}
        {...props}
      />
    ) : (
      title
    )}
  </Heading>
)

export default Logo

Logo.defaultProps = {
  to: '/'
}

Logo.propTypes = {
  title: PropTypes.string,
  grayscale: PropTypes.bool,
  fixed: PropTypes.object, //gatsby-transform-sharp
  to: PropTypes.string
}
