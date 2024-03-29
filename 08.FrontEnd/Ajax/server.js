const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// 정적 파일 서비스
app.use('/image', express.static(__dirname + '/../../Resources/images'));

app.use(bodyParser.urlencoded({extended : false}));

const data = [
	{title:'야구', image:'image/baseball.png'},
	{title:'농구', image:'image/basketball.png'},
	{title:'축구', image:'image/football.png'}	
];

app.get('/items', (req, res) => {
   const obj = {
      count : data.length,
      data : data
   };
   res.send(obj);
});

app.put('/items', (req, res) => {
   console.log('put request');
   console.log('request body :', req.body);
   res.send({msg: 'Put Request success'});
});

app.delete('/items/:id', (req, res) => {
   res.status(501).send({msg: 'Delete not supported'});
});


// index.html
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);