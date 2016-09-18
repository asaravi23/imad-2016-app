var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1= {
    title:'Article 1 | asaravi',
    heading: 'article 1',
    date: '5 september 2016',
    content: `
           <p>
           hi this is asanga.
           </p>
           <p> hi my name is asanga kumar
           </p>
           <p>
           hello this is a linked object
           </p>
           `
};

function createtemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content= data.content;
    
    

var htmltemplate= `
<html>
<head>
</head>
<body bgcolor="blue">
hello
${content}
${date}
${heading}
${title}
</body>
</html>



`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function(req,res)
{  res.send(createtemplate(articleone));
});


app.get('/article2',function(req,res)
{ res.send('Article 2 requested');
});

app.get('/article3',function(req,res)
{ res.send('Article 3 requested');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
