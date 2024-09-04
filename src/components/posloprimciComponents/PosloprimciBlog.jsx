import React from "react";
import styles from "./posloprimciBlog.module.css";
import BlogCardBig from "./BlogCardBig";
import BlogCardSmall from "./BlogCardSmall";

const PosloprimciBlog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__header}>
          <h2 className={styles.blog__header_title}>
            Pažljivo osluškujemo trendove modernog tržišta rada
          </h2>
          <p className={styles.blog__header_text}>
            U modernom poslovnom svijetu koji se neprestano mijenja ključno je
            biti informiran o najnovijim trendovima i promjenama na tržištu
            rada. Cilj nam je pružiti vam uvide, savjete, analize trendova rada,
            te prilike i izazove koji se pred vama nalaze.
          </p>
        </div>
        <div className={styles.blog__blogs}>
          <div className={styles.blog__blogs_box}>
            <BlogCardBig
              image={"/bigBlogImage.png"}
              date={"October 13, 2021"}
              category={"Savjeti"}
              title={"Rješavanje osjećaja usamljenosti na poslu"}
              description={
                "Usamljenost na radnom mjestu postala je većom temom nakon Covid-19 pandemije. Usamljenost kao osje"
              }
              link={"/"}
            />
          </div>
          <div className={styles.blog__blogs_box}>
            <BlogCardSmall
              image={""}
              date={"October 13, 2021"}
              category={"Savjeti"}
              title={""}
              description={""}
              link={"/"}
            />
            <BlogCardSmall
              image={""}
              date={"October 13, 2021"}
              category={"Savjeti"}
              title={""}
              description={""}
              link={"/"}
            />
            <BlogCardSmall
              image={""}
              date={"October 13, 2021"}
              category={"Savjeti"}
              title={""}
              description={""}
              link={"/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosloprimciBlog;
