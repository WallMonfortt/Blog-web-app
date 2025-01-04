import express from 'express'
import bodyParser from 'body-parser';

const app = express()
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/' , (req, res) => {
    res.render('index.ejs',{
        currentPage : 'Home'
    })
});


app.listen(port, ()=>{
    console.log(`app running o port: ${port}`)
    
});

// TODO: fix left font-size
// find a way to preserve the selected option
