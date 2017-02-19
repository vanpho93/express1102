let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server started'));
let PhepTinh = require('./PhepTinh1.js');
let handle = (req, res) => {
  res.send('Hello')
}

app.get('/', handle);

app.get('/admin', (req, res) => {
  if(true) res.send('Chao')
});


app.get('/show/:id/:name', (req, res) => {
  let {name, id} = req.params;
  res.send('Toi nhan duoc id = ' + id + name);
});

app.get('/:pt/:a/:b', (req, res) => {
  let pt = req.params.pt;
  let a = req.params.a;
  let b = req.params.b;
  let pheptinh = new PhepTinh(pt, a, b);
  res.send(pheptinh.getResult());
})

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
