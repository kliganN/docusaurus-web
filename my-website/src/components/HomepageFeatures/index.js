import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Для кого этот ресурс?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Наша документация по системному администрированию - 
        полезный ресурс для всех уровней опыта в администрировании информационных систем. 
        Мы акцентируемся на простоте и удобстве использования данного руководства, 
        чтобы облегчить работу с технологическими задачами.
      </>
    ),
  },
  {
    title: 'О чем эта документация?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Документация по системному администрированию содержит четкие и 
        практические примеры Linux, которые помогают развивать навыки системных администраторов 
        и решать сложные задачи. Она является незаменимым источником информации для профессионалов, 
        стремящихся стать успешными системными администраторами.
      </>
    ),
  },
  {
    title: 'Связаться со мной',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        E-mail: kligann@subnetwork.ru
        tg: @kliganN
        Steam: BarrySeal1939
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
