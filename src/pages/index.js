import { useEffect } from 'react';
import styles from './index.css';

export default function() {
  useEffect(() => {
    console.log(123123);
  }, []);

  return <div id="scrollContainer" className={styles.normal}>
    为啥什么东西都没有啊
  </div>;
}
