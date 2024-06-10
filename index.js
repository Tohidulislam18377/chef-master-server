const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');

app.use(cors());

app.get('/',(req, res)=>{
    res.send('chef recipe is running')
});

app.get('/chef',(req, res)=>{
    res.send(chef)
});
app.get('/chef/:id', (req,res)=>{
    const chefId = req.params.id;
    const selectChef = chef.find(cook=>cook._id === chefId)
    res.send(selectChef)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port: ${port}`);
});