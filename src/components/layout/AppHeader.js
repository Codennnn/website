import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { LAYOUT, SCREENS } from '~/config/theme'
import navItems from '~/config/nav'
import { isExternal } from '@/utils'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${LAYOUT.headerHeight};
  color: var(--color-text);

  .header-inner {
    display: flex;
    align-items: center;
    width: 1150px;
    height: 100%;
    margin: 0 auto;

    .site-name {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 2rem;

      .logo {
        width: 10rem;
        margin-right: 1rem;
      }
    }
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  font-weight: bold;

  .nav-item {
    padding: 0 1.2rem;

    a.active {
      color: var(--color-accent);
    }
  }

  @media (max-width: ${SCREENS.sm}) {
    display: none;
  }
`

const Actions = styled.div`
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;

  .toggle-menu {
    display: none;
    margin-left: 1rem;
    fill: #fff;
    stroke: #fff;
  }

  @media (max-width: ${SCREENS.sm}) {
    .toggle-menu {
      display: block;
    }
  }
`

export default function AppHeader() {
  return (
    <Header className="header">
      <div className="header-inner">
        <Link className="site-name" to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>

        <NavLinks>
          {navItems.map(({ url, name }) => (
            <div className="nav-item" key={name}>
              {isExternal(url) ? (
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {name}
                </a>
              ) : (
                <Link to={url} partiallyActive activeClassName="active">
                  {name}
                </Link>
              )}
            </div>
          ))}
        </NavLinks>

        <Actions className="actions"></Actions>
      </div>
    </Header>
  )
}
