const express = require('express');
// const morgan = require('morgan');
const app = express();
const port = 3000;

// app.use(morgan('dev'));
app.use(express.static('../dist'));
app.use(express.json());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});