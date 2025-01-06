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

app.post('/submit' , (req, res) => {
    console.log(req.body)
    const data = req.body
// TODO: handle data
    posts.push({
        title: data.title,
        author: data.author,
        content: data.content
    })
    res.sendStatus(200)

    // TODO: Add ok view, or modify response
})

app.get('/essays', (req, res) => {
    res.render('index.ejs', {
        currentPage: 'essays',
        essays: posts
    })
})


app.listen(port, ()=>{
    console.log(`app running o port: ${port}`)
});

// TODO: find a way to preserve the selected option


let posts = [
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
    {
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra."
    },
]