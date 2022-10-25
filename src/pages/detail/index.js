import { useEffect } from 'react';
import { parseQueryString } from '@/utils/utils.js';
import VideoPlayer from 'react-video-js-player';
import styles from './index.css';

export default function () {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className={styles.normal}>
      {/* <video controls src={`./${decodeURIComponent(parseQueryString().a)}`}></video> */}
      <VideoPlayer
        controls={true}
        src={`./${decodeURIComponent(parseQueryString().a)}`}
        width="100%"
        styles={{
          width: '100%',
        }}
      />
    </div>
  );
}
