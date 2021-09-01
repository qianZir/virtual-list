import { useEffect, useState, useMemo } from 'react';
import styles from './index.css';
import request from '../utils/request';

export default function () {
  useEffect(() => {
    getList()
    // 获取容器最大容积
    // setSize(Math.floor(document.getElementById("scrollContainer").scrollHeight / oneHeight) + 2)
  }, [])
  let [list, setList] = useState([])
  let [showList, setShowList] = useState([])
  let [oneHeight, setOneHeight] = useState(100)
  let [size, setSize] = useState(10)
  let [startIndex, setStartIndex] = useState(0)
  let [endIndex, setEndIndex] = useState(0)
  let [top, setTop] = useState(0)
  let [bottom, setBottom] = useState(0)
  let [loading, setLoading] = useState(false)
  let [page, setPage] = useState(1)
  let [pageSize, setPageSize] = useState(10)

  useMemo(() => {
    let endIndex = startIndex + size
    if (!list[endIndex]) {
      endIndex = list.length
    }
    setEndIndex(endIndex)
    setTop(startIndex * oneHeight)
    setShowList(list.slice(startIndex, endIndex))
  }, [startIndex, endIndex, size, list]);

  useMemo(() => {
    setBottom((list.length - endIndex) * oneHeight)
  }, [endIndex]);



  const getList = () => {
    request({
      method: "GET",
      url: `/demo/getList`,
      data: {
        page: page,
        pageSize: pageSize
      },
    }).then(response => {
      setLoading(false)
      list = list.concat(response.data.list)
      setPage(page += 1)
      setList(list)

    })
  }

  const onScroll = (e) => {
    setStartIndex(Math.floor(document.getElementById("scrollContainer").scrollTop / oneHeight))
    if (startIndex + size >= list.length && !loading) {
      console.log('滚动到底部啦');
      setLoading(true)
      getList()
    }
  }

  return (
    <div id="scrollContainer" className={styles.normal} onScroll={onScroll}>
      <ul style={{ paddingTop: `${top}px`, paddingBottom: `${bottom}px` }} >
        {
          showList.map(item => {
            return (
              <li key={item.id}>
                <div className={styles.item_box}>
                  <img className={styles.item_img} src={item.image}></img>
                  <div className={styles.item_msg}>
                    <div>{item.title + item.id}</div>
                    <div>{item.text}</div>
                    <div>{item.date}</div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
