import React from "react";
import styles from "./posloprimciBlog.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogCardSmall = ({ image, date, category, title, link }) => {
  return (
    <article className={styles.singleBlogSmall}>
      <div className={styles.singleBlogSmall_imageBox}>
        <Image
          src={image}
          alt={`slika koja prikazuje blog: ${title}`}
          fill
          sizes="100%"
        />
      </div>
      <div className={styles.singleBlogSmall_content}>
        <div className={styles.singleBlogSmall_contentTop}>
          <Link href={link}>{category}</Link>
          <span>{date}</span>
        </div>
        <div className={styles.singleBlogSmall_contentMiddle}>
          <h6>{title}</h6>
        </div>
        <div className={styles.singleBlogSmall_contentBottom}>
          <Link href={link}>Saznajte više</Link>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_12988_200139)">
              <path
                d="M8.11191 1L12.8499 5.738M12.8499 5.738L8.11191 10.477M12.8499 5.738L1.00391 5.739"
                stroke="#19BB70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_12988_200139">
                <rect width="14" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </article>
  );
};

export default BlogCardSmall;
