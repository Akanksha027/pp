"use client";

import React from "react";
import styles from "./DownloadButton.module.css";

// Next.js download button component using CSS modules.
// The label toggles the checkbox to trigger the animation.
// The onChange handler triggers the APK download.

const DownloadButton = () => {
  const handleDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const link = document.createElement("a");
      link.href = "/periperi/periperi.apk";
      link.download = "periperi.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} onChange={handleDownload} />
        <span className={styles.circle}>
          <svg
            className={styles.icon}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div className={styles.square} />
        </span>
        <p className={styles.title}>Download</p>
        <p className={styles.title}>Open</p>
      </label>
    </div>
  );
};

export default DownloadButton;
