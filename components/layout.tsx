import Head from "next/head";
import styles from "./layout.module.scss";

export const siteTitle = "Unimelb Timetable";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="what class is in what room at what time in what semester at what university?"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header></header>
      <main>{children}</main>
      <footer>
        Liam Saliba, March 2022.{" "}
        <a href="https://github.com/liamsaliba/unimelb-timetable">
          Open Source
        </a>{" "}
        - antd, next.js, gh-pages. Data scraped from{" "}
        <a href="https://sws.unimelb.edu.au/">Unimelb's website.</a>
      </footer>
    </div>
  );
}
