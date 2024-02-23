const express = require('express')
const app = express()
const connectDB = require("./database/connect");
connectDB();
const cors = require('cors');
app.use(cors())
const port = 5000;
const bodyparser = require('body-parser');

app.use(bodyparser.json())





const templatesroutes = require('./routes/templatesController')
const catogoryroutes = require('./routes/categoryController')
const documentlistroutes = require('./routes/documentListController')
const serviceroutes = require('./routes/serviceController')


app.use('/admin/templates', templatesroutes);
app.use('/admin/category', catogoryroutes);
app.use('/admin/documentlist', documentlistroutes);
app.use('/admin/service', serviceroutes);




 
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});