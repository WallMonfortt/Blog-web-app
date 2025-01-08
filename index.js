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
    let [date, id ] = getDate()
    console.log(date)
    posts.push({
        title: data.title,
        author: data.author,
        content: data.content,
        date: date,
        id: id
    })
    res.render('index.ejs', {
        currentPage: 'success'
    })

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

function getDate() {
    let date = new Date()
    console.log(date)
    let month = String(date.getMonth() + 1).padStart(2,'0')
    let hours = String(date.getHours()).padStart(2,'0')
    let min = String(date.getMinutes()).padStart(2,'0')
    let sec = String(date.getSeconds()).padStart(2,'0')
    let day = ''
    switch (date.day) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = ' Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
    
        default:
            day = 'Saturday'
            break;
    }
    return [`${day}-${month}-${date.getFullYear()}/${hours}:${min}:${sec}`, date]
}

// TODO: find a way to preserve the selected option


let posts = [
    {
        id: '2025-01-08T18:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/11:09:13'
    },
    {
        id: '2025-01-08T17:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/11:08:13'
    },
    {
        id: '2025-01-08T16:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/10:09:13'
    },
    {
        id: '2025-01-08T15:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/09:09:13'
    },
    {
        id: '2025-01-08T14:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/08:09:13'
    },
    {
        id: '2025-01-08T13:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/07:09:13'
    },
    {
        id: '2025-01-08T12:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/06:09:13'
    },
    {
        id: '2025-01-08T11:42:03.319Z',
        title: "Post number 1",
        author: "Wal",
        content: "Bacon ipsum dolor amet landjaeger bacon kevin capicola chuck shank porchetta pork kielbasa ribeye meatball. Jowl beef brisket, picanha pancetta pork alcatra kevin pork chop venison strip steak salami ham hock ribeye. Tenderloin ground round picanha, porchetta kevin flank chislic pork loin tri-tip fatback ribeye filet mignon t-bone andouille. Boudin spare ribs pancetta venison drumstick bresaola turducken leberkas pork sirloin filet mignon pastrami ball tip tri-tip kevin. Sirloin shankle tail alcatra.",
        date: 'Saturday-01-2025/04:09:13'
    },
    
]