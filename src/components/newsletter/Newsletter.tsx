import React, { FunctionComponent } from "react";

import NewsIcon from "./assets/icon-news.svg";

import styles from "./Newsletter.module.scss";

export interface NewsletterProps {
  data: NewsletterData;
}

export interface NewsletterData {
  action: string;
  method: "get" | "post";
  emailFieldName: string;
  firstNameFieldName: string;
  submitButtonName: string;
  serviceName: string;
  tosURL: string;
  privacyPolicyURL: string;
}

export const Newsletter: FunctionComponent<NewsletterProps> = ({ data }) => {
  const {
    action,
    method,
    emailFieldName,
    firstNameFieldName,
    submitButtonName,
    tosURL,
    privacyPolicyURL,
    serviceName,
  } = data;

  return (
    <div className={styles.newsWrapper}>
      <div className="container padding-vert--lg">
        <NewsIcon className={styles.newsIcon} />
        <h2>CS Research Papers Blog</h2>
        <p>
          These are my thoughts and opinions on research articles & publications
          in computer science from across the globe.
        </p>
        <p></p>
        <p>
          Navigate to the <b>Blog</b> tab to see what research articles &
          publications I have thoughts on. Email me with any insights you have
          about my thoughts and opinions.
        </p>
        <p></p>
        <p>Lets start a conversation!</p>
        <form
          action={action}
          className={styles.form}
          method={method}
          target="_blank"
        >
          {/* <input
            name={emailFieldName}
            placeholder="Your email"
            type="email"
            required
          /> */}
          {/* <input name={firstNameFieldName} placeholder="Your first name" /> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_4ed0fd1909674fddee53ac3e7_dfdcae99f5"
              tabIndex={-1}
              value=""
            />
          </div>
          {/* <button
            type="submit"
            name={submitButtonName}
            className="button button--primary"
          >
            Check it out!
          </button> */}
        </form>
        {/* <div className={styles.formFooter}>
          By subscribing, you agree with {serviceName}’s{" "}
          <a target="_blank" href={tosURL}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a target="_blank" href={privacyPolicyURL}>
            Privacy Policy
          </a>
          .
        </div> */}
      </div>
    </div>
  );
};
