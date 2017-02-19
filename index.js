let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server started'));

let handle = (req, res) => {
  res.send('Hello')
}

class PhepTinh {
  constructor(pt, soa, sob) {
    this.pt = pt;
    this.soa = soa;
    this.sob = sob;
  }
  getResult(){
    let chuoi = `${this.soa} ${this.getPt(this.pt)} ${this.sob}`;
    let kq = eval(chuoi);
    return `${chuoi} = ${kq}`;
  }
  getPt(str){
    switch (str) {
      case 'cong':
        return '+';
      case 'tru':
        return '-';
      case 'nhan':
        return '*';
      case 'chia':
        return '/';
    }
  }
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
