const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 3000

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));


app.post('/upload', function (req, res) {
  console.log(req.files.foo); // the uploaded file object
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
