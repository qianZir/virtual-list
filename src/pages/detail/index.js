import { useEffect } from 'react';
import { parseQueryString } from '@/utils/utils.js';
import styles from './index.css';

export default function () {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className={styles.normal}>
      <video controls src={`./${decodeURIComponent(parseQueryString().a)}`}></video>
    </div>
  );
}
