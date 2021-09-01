import mockjs from 'mockjs';

const responseData = {
    status: 'ok',
    code: 200,
    data: {
        total: 1000,
        list: [
            {
                title: '这里是标题',
                time: 1630106498302,
                image: 'https://i0.hdslb.com/bfs/face/d8758f241f204fea5505ce4babfd4354ad618e53.jpg@96w_96h_1c_1s.webp',
                text: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述'
            }
        ]
    }
}

export default {
    // 支持值为 Object 和 Array
    'GET /demo/getList': (req, res) => {
        let page = req.query.page
        let pageSize = req.query.pageSize

        res.send(mockjs.mock({
            [`list|${pageSize}`]: [
                {
                    "id":"@increment()",
                    title: '@cname(2,4)',
                    date: '@date("yyyy-MM-dd")',
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_360708.png&refer=http%3A%2F%2Fcdn.onlinewebfonts.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633012168&t=82f1caae14d9c2228dbef71dec9aba96',
                    text: '@ctitle(10,16)'
                }
            ]
        }));

    }

}
