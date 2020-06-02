import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styles from './header.module.scss';

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
);

const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
);

const SocialButton = (props) => {
  let style = '';
  let url = '';

  if (props.site === 'twitter') {
    style = styles.buttonTwitter;
    url = `https://twitter.com/${props.username}`;
  } else if (props.site === 'linkedin') {
    style = styles.buttonLinkedin;
    url = `https://www.linkedin.com/in/${props.username}`;
  } else if (props.site === 'github') {
    style = styles.buttonGithub;
    url = `https://www.github.com/${props.username}`;
  }

  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  );
}

export default () => (

  <StaticQuery 

    query = {graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render = { data => (

      <header className={styles.container}>

        <div className={styles.row}>
          <HomeButton to='/' text={data.site.siteMetadata.title} />
          <SocialButton site='github' username='isabelrubim'></SocialButton>
          <SocialButton site='linkedin' username='isabelrubim'></SocialButton>
          <SocialButton site='twitter' username='belrubim'></SocialButton>
        </div>

        <div className={styles.row}>
          <HeaderLink to='/' text='Articles' />
          <HeaderLink to='/about' text='About' />
        </div>

      </header>

    )}

  />
  
);