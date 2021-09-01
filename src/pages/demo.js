import { useEffect, useState } from 'react';
import styles from './index.css';
import request from '../utils/request';

export default function () {
  useEffect(() => {
    getList()
   
  }, [getList])
  let [list, setList] = useState([])
  let [oneHeight, setOneHeight] = useState(100)
  let [size, setSize] = useState(0)
  let [loading, setLoading] = useState(false)
  let [page, setPage] = useState(1)
  let [pageSize, setPageSize] = useState(10)
  const getList = () => {
    setLoading(true)
    request({
      method: "GET",
      url: `/demo/getList`,
      data: {
        page: page,
        pageSize: pageSize
      },
    }).then(Response => {
      setLoading(false)
      setList(Response.data.list)
    })
  }

  const onScroll = (e) => {
    // console.log(e);
  }

  return (
    <div id="scrollContainer" className={styles.normal} onScroll={onScroll}>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                <div className={styles.item_box}>
                  <img className={styles.item_img} src={item.image}></img>
                  <div className={styles.item_msg}>
                    <div>{item.title}</div>
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
