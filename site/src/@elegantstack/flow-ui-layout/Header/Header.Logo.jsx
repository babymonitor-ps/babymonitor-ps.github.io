import React from 'react'
import { useColorMode } from 'theme-ui'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import logoLight from '../../../../content/assets/logo.svg'
import logoDark from '../../../../content/assets/logo-dark.svg'
import Logo from "@elegantstack/flow-ui-components/src/Logo";

export const HeaderLogo = ({ ...props }) => {
  const { title } = useSiteMetadata()

  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return isDark ? (
      <Logo image={logoDark} title={title} alt={title} {...props} />
  ) : (
      <Logo image={logoLight} title={title} alt={title} {...props} />
  )
}
