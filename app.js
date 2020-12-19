const express = require('express');
const { result } = require('lodash');
const bodyParser = require('body-parser');
const tsapi = require('torrent-search-api');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// async function torRes() {
//     const result = await getTor();
//     // for (let i=1; i < result.length; i++) {
//     //     console.log(`${results[i].title}\n`);
//     //     console.log(`${results[i].magnet}\n`);
//     // }

// //    console.log(result[0].title);
//     return result;
// }

app.use(express.static('./public'))

app.get('/tors', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
   async function getTor() {
    try {
      if(!req.query.address){
        return res.send({
            Error: "Enter the Search term"
        })
      }
        tsapi.enableProvider('Rarbg');
        return await tsapi.search(req.query.address, 'All', 15);
    } catch (error) {
        // console.log(error);
    }
}

    async function torRes() {
        try {
            const data = await getTor();
            return data;
            // console.log(data[0].title);
            // var datas ='';
            // for (let i=0; i < data.length; i++) {
            //             console.log(`${data[i].title}\n`);
            //             console.log(`${data[i].magnet}\n`);
            //              // datas+= `${data[i].title}\n
            //              //  ${data[i].magnet}\n\n`;
            //               datas+= data[i];
            //             }
            //             res.send(datas);

        } catch (error) {
            // console.log(error);
        }

    } 
    torRes().then((data)=>{
        // console.log(data);
        res.send(data);
    })
    // torRes().then((data)=>{

    //     console.log(data);
    //     // res.send(data);
    //     // var title ,magnet ='';
    //     // for(var i=0;i<data.length;i++){
    //     //     // console.log(data[i])
    //     //     title+=data[i].title;

    //     //     console.log(title)
    //     }

    //     //  for(var i=0;i<data.length;i++){
    //     //     // console.log(data[i])
    //     //     magnet+= data[i].magnet;

    //     //     console.log(title)
    //     // }

    //     // res.send({
    //     //     title:title,
    //     //     magnet:magnet
    //     //     // seeds:datas.seeds
    //     // });
    // });

})
app.listen(port)