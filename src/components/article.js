import React from 'react';
import { Link } from 'gatsby';

import styles from './article.module.scss';

export default (props) => (

  <Link to={props.to}>
    <article className={styles.articleBox} key={props.id}>     
      
      <img className={styles.articleBox__img}
      src={`https://source.unsplash.com/random?${props.keywords}`} 
      alt={props.title}/>        
      
      <div className={styles.articleBox__content}>
        <h3>
          {props.title}
        </h3>
        <p className={styles.articleBox__contentDate}>{props.date}</p>
        <p>
          {props.excerpt}      
        </p>
      </div>
    </article>
  </Link>

);