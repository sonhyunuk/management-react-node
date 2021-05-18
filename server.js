const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: "https://placeimg.com/64/48/any",
            name: '홍길동',
            birthday: '961222',
            gender: '남자',
            job: '대학생'
        },
        {
            id: 2,
            image: "https://placeimg.com/64/48/any",
            name: '전원주',
            birthday: '951222',
            gender: '여자',
            job: '프로그래머'
        }, {
            id: 3,
            image: "https://placeimg.com/64/48/any",
            name: '김구라',
            birthday: '921222',
            gender: '남자',
            job: '고등학생'
        }
    ]);
});

app.listen(port, () => console.log('listing'));