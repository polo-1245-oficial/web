const express = require('express');
const cors = require('cors');
const activitiesRouter = require('./activities');
const meRouter = require('./me');

const app = express();
const PORT = process.env.PORT || 3000;

//CONFIG
global.id = '725316907187568701'; //El ID del usuario de Discord

app.use(cors());

app.use(activitiesRouter);
app.use(meRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});