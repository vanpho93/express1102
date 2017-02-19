let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server started'));

let handle = (req, res) => {
  res.send('Hello')
}

app.get('/', handle);

app.get('/admin', (req, res) => {
  if(true) res.send('Chao')
});

app.get('/show/:id/:name', (req, res) => {
  let myId = req.params.id;
  let name = req.params.name;
  res.send('Toi nhan duoc id = ' + myId + name);
});

// app.get('/a', (req, res) => {
//   res.send('TRUOC');
// });
//
// app.get('/:bien', (req, res) => {
//   res.send('Tieu roi');
// });
//
// app.get('*', (req, res) => {
//   res.send('Khong ton tai')
// })
