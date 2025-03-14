import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import ThemedImage from "@theme/ThemedImage";

import whoIsUsing from "../data/whoIsUsing";
import styles from "./index.module.css";
import { FcShipped, FcCollaboration, FcApproval } from "react-icons/fc";

function Feature({ icon, title, description, reverse, outStyles }) {
  return (
    <div
      style={{ ...outStyles }}
      className={clsx("row", styles.feature, reverse && styles.featureReverse)}
    >
      <div className="col col--6 text--center">{icon}</div>
      <div className={clsx("col col--6")}>
        <div>
          <h3
            className={styles.featureTitle}
            style={{ color: "var(--ifm-color-primary)" }}
          >
            {title}
          </h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <main>
        <header className={clsx("container", styles.banner)}>
          <div className="container">
            <h2
              className={styles.title}
              style={{ color: "var(--ifm-color-primary)" }}
            >
              {siteConfig.title}
            </h2>
            <p className={styles.description}>{siteConfig.tagline}</p>
            <div className={styles.indexCtas}>
              <div>
                <Link
                  className={clsx(
                    "button button--lg button--secondary",
                    styles.button,
                  )}
                  to="/docs/"
                >
                  <Translate description="homepage getting started button">
                    Getting Started
                  </Translate>
                </Link>
              </div>
              <div>
                <Link
                  className={clsx(
                    "button button--primary button--lg",
                    styles.button,
                  )}
                  to="/docs/getting-started/getting-started-with-kusion-cli/install-kusion"
                >
                  <Translate description="homepage install button">
                    Install
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <br></br>
        <br></br>

        <div className="container">
          <div className="container text--center">
            <h2
              className={styles.subtitle}
              style={{ color: "var(--ifm-color-primary)" }}
            >
              <Translate id="home.quickstart">
                All About Your Modern Apps by Platform Engineering
              </Translate>
            </h2>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
          <div className="container">
            <Feature
              icon={<FcShipped size={224} />}
              title={
                <Translate id="home.easyshipping">
                  Dynamic Configuration Management
                </Translate>
              }
              description={
                <>
                  <p>
                    <Translate id="home.easyshipping.1">
                      Effortlessly manage all application operations in a unified, streamlined manner.
                    </Translate>
                  </p>
                  <ul className="left-align-ul">
                    <li>
                      <Translate id="home.easyshipping.2">
                        Environment-Agnostic Application Configurations
                      </Translate>

                    </li>
                    <li>
                      <Translate id="home.easyshipping.3">
                        Standardized and flexible platform configurations
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.easyshipping.4">
                        Kubernetes-first, lightweight and user-friendly
                      </Translate>
                    </li>
                  </ul>
                </>
              }
            />
            <Feature
              outStyles={{ marginLeft: 32 }}
              icon={<FcCollaboration size={224} />}
              title={
                <Translate id="home.platformengineering">
                  Enable Developer Self-Service
                </Translate>
              }
              description={
                <>
                  <p>
                    <Translate id="home.platformengineering.1">
                      Meet customized needs with reusable building blocks.
                    </Translate>
                  </p>
                  <ul className="left-align-ul">
                    <li>
                      <Translate id="home.platformengineering.2">
                        A growing ecosystem of open modules integrated with various cloud-native infrastructures
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.platformengineering.3">
                        An efficient collaboration model for App Developers and Platform Engineers
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.platformengineering.4">
                        Paving the golden path for end-to-end DevOps lifecycle management
                      </Translate>
                    </li>
                  </ul>
                </>
              }
              reverse={true}
            />
            <Feature
              icon={<FcApproval size={224} />}
              title={
                <Translate id="home.enterpriseops">
                  Built-in Security and Compliance
                </Translate>
              }
              description={
                <>
                  <p>
                    <Translate id="home.enterpriseops.1">
                      Ensuring security from the first line of code to production runtime.
                    </Translate>
                  </p>
                  <ul className="left-align-ul">
                    <li>
                      <Translate id="home.enterpriseops.2">
                        Codified shift-left validation to detect configuration risks early
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.enterpriseops.3">
                        Extended check stages throughout the workload lifecycle
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.enterpriseops.4">
                        Enterprise-grade fine-grained cluster control for Kubernetes
                      </Translate>
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
          <div className="container text--center">
            <h2
              className={clsx("hero__subtitle", styles.poppinsFont)}
              style={{ color: "var(--ifm-color-primary)" }}
            >
              <Translate id="home.whoisusing">Adopted by</Translate>
            </h2>
            <div className={styles.whiteboard}>
              <div className="row">
                {whoIsUsing.map((w) => (
                  <div
                    key={w.name}
                    className={clsx("col col--4", styles.whiteboardCol)}
                  >
                    <a
                      className={styles.logoWrapper}
                      href={w.href}
                      target="_blank"
                    >
                      <img
                        style={w.style}
                        src={useBaseUrl(w.img)}
                        alt={w.name}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
          <div className="container text--center">
            <h2 className={clsx("hero__subtitle", styles.poppinsFont)}>
              KusionStack is a {" "}
              <Link to="https://cncf.io/">
                Cloud Native Computing Foundation
              </Link>{" "}
              Sandbox Project
            </h2>
            <div>
              <ThemedImage
                className={styles.cncfLogo}
                alt="CNCF themed image"
                sources={{
                  light: useBaseUrl("/img/cncf-color.png"),
                  dark: useBaseUrl("/img/cncf-white.png"),
                }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
            <div className="container text--center">
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '15vh' }}>
                    <h2 className={clsx("hero__subtitle", styles.poppinsFont)} style={{ marginRight: '0px', fontSize: "16px" }}>
                        Originally created by
                    </h2>
                    <a href="https://external-link.com" target="_blank" rel="noopener noreferrer">
                        <ThemedImage
                            className={styles.cncfLogo}
                            alt="Ant Open Source"
                            sources={{
                                light: useBaseUrl("/img/oss_logo_black.svg"),
                                dark: useBaseUrl("/img/oss_logo_black.svg"),
                            }}
                            style={{ width: '200px', height: 'auto' }} // Adjust the width as needed
                        />
                    </a>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
      </main>
    </Layout>
  );
}

export default Home;
