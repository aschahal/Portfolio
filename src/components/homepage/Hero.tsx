import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm{" "}
          <span className={styles.highlighted}>Amandeep Singh Chahal</span>,
          <br />
          CS graduate from UW-Madison.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          An ambitious creator, passionate programmer, and insightful problem
          solver.
          <br /> Interested in personal growth and tech trends.
        </p>
      </div>
    </header>
  );
};
