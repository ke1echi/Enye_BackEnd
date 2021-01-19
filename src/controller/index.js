const fetch = require('node-fetch');


// Welcome controller
exports.ratesController = (req, res) => {
  console.log(req.query.base);
  console.log(req.query.currency);

  fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log('err'))

  // return res.json({ 
  //   success: true, 
  //   message: `Welcome to /api/rates services` 
  // });
}