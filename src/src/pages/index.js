import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const moreLinks = [
  {
    text: "گوگل پادکست",
    url: "https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvMDBlNTMwMTM0M2U2NGUwNzhkNTkzYzZmMTdhODZhNTQueG1s?sa=X&ved=2ahUKEwj87qPp8P-AAxXrhf0HHQQbAjQQ9sEGegQIARAC"
  },
  {
    text: "اپل پادکست",
    url: "https://podcasts.apple.com/ae/podcast/%DA%A9%D9%88%D8%AF%DA%A9-%D9%85%D9%86/id1596644229",
  },
  {
    text: "اسپاتیفای",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "کست باکس",
    url: "https://castbox.fm/channel/id4638131",
  },
  {
    text: "تهران پادکست",
    url: "https://tehranpodcast.ir/bebegim/",
  },
  {
    text: "تلگرام",
    url: "https://tehranpodcast.ir/bebegim/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/koodakeman-icon.jpg"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <br/><br/>
      <h1>
        به پادکست <b>کودک من</b> خوش اومدین!
      </h1>
      <p className={styles.intro}>
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <div style={{ "text-align": "center" }}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="خانه" />

export default IndexPage
