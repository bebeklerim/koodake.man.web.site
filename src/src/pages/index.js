import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "فصل دوم - قصه موش و شتر",
    url: "https://castbox.fm/episode/قصه-موش-و-شتر-id4638131-id622135014?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=%D9%82%D8%B5%D9%87%20%D9%85%D9%88%D8%B4%20%D9%88%20%D8%B4%D8%AA%D8%B1-CastBox_FM",
    description:
      `در این قسمت قصه موش و شتر رو براتون بازخوانی کردیم.
سعی کردیم فضای اپیزودهای این فصل ملایم باشن تا فرزندان دلبندمون در زمان استراحتشون هم همراهمون باشن. 
تمامی داستان های این فصل برای کودکان 5 تا 7 سال مناسب هستند. 
منبع مکتوب این قسمت کتاب 10 قصه از مثنوی مولوی از انتشارات قدیانی - کتابهای بنفشه هست.
`,
  },
  {
    text: "فصل دوم - قصه ماهی دیل",
    url: "https://castbox.fm/episode/قصه-ماهی-دیل-id4638131-id587729859?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=%D9%82%D8%B5%D9%87%20%D9%85%D8%A7%D9%87%DB%8C%20%D8%AF%DB%8C%D9%84-CastBox_FM",
    description:
      `در این قسمت قصه ماهی دیل رو براتون بازخوانی کردیم.در این فصل داستان هایی از ایران و جهان برای کوچولوهای عزیز آماده کردیم. 
      امیدواریم بشنون و بپسندن. 
      `,
  },
  {
    text: "فصل اول - شعر نهنگ و دریا (گروه سنی 2 تا 6 سال)",
    url: "https://castbox.fm/episode/اپیزود-2%3A-شعر-نهنگ-و-دریا-(گروه-سنی-2-تا-6-سال)-id4638131-id439273654?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=%D8%A7%D9%BE%DB%8C%D8%B2%D9%88%D8%AF%202%3A%20%D8%B4%D8%B9%D8%B1%20%D9%86%D9%87%D9%86%DA%AF%20%D9%88%20%D8%AF%D8%B1%DB%8C%D8%A7%20(%DA%AF%D8%B1%D9%88%D9%87%20%D8%B3%D9%86%DB%8C%202%20%D8%AA%D8%A7%206%20%D8%B3%D8%A7%D9%84)-CastBox_FM",
    description:
      `تو این قسمت شعر نهنگ و دریا رو براتون آماده کردیم.

      این قسمت مناسب کوچولوهای نازنین 2 تا 6 ساله‌ست.
      
      امیدواریم که دوست داشته باشید.
      `,
  },
  {
    text: "فصل اول - شعر آفتاب مهتاب (گروه سنی 2 تا 6 سال)",
    url: "https://castbox.fm/episode/اپیزود-3%3A-شعر-آفتاب-مهتاب-(گروه-سنی-2-تا-6-سال)-id4638131-id439889798?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=%D8%A7%D9%BE%DB%8C%D8%B2%D9%88%D8%AF%203%3A%20%D8%B4%D8%B9%D8%B1%20%D8%A2%D9%81%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%AA%D8%A7%D8%A8%20(%DA%AF%D8%B1%D9%88%D9%87%20%D8%B3%D9%86%DB%8C%202%20%D8%AA%D8%A7%206%20%D8%B3%D8%A7%D9%84)-CastBox_FM",
    description:
      `تو این قسمت شعر آفتاب مهتاب رو براتون آماده کردیم.

      این قسمت مناسب کوچولوهای نازنین 2 تا 6 ساله‌ست.
      `,
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
    url: "https://open.spotify.com/show/04ZDNZSX5I18H5yjJFMYGm?si=95325f4aaa9f45e8",
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
    url: "https://t.me/koooodake_man",
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
