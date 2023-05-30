const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
// dotenv 불러오기
require("dotenv").config();
// 모듈 불러오기
const mailer = require('./mailer.js');

// 메일 전송 라우트
export default  function postMail(){
app.post("/mail", (req, res) => {
  
  const { yourname, youremail, yoursubject, yourmessage } = req.body.data;



  mailer(yourname, youremail, yoursubject, yourmessage)
    .then((response) => {
      if (response === "success") {
        console.log('성공적으로 Message Sent Successfully! ');
        console.log(  yourname );
        console.log(  youremail );
        console.log(  yoursubject );
        console.log(  yourmessage );

        res.status(200).json({
          status: 'Success',
          code: 200,
          message: '성공적으로 Message Sent Successfully!',
        })
    } else {
      res.json({
        status: 'Fail',
        code: response.code
      })
    }
  })
});



app.listen(port, () => {
  console.log(` 포트번호는 Example app listening on port ${port}`)
})

}