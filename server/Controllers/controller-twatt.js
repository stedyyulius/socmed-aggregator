
function searchStory (req,res,next){
  twatt.Auth(oauth=>{
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=%40${req.body.search}`,
        process.env.Access_token, 
        process.env.Access_token_secret,             
        function (e, data){
          if (e) console.error(e);
          let datas = JSON.parse(data).forEach(a=>{
              res.send(a)
          })
        
        
      
        }); 
      })  
    }  

function timeline (req,res,next){
  twatt.Auth(oauth=>{
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.Access_token, 
        process.env.Access_token_secret,             
        function (e, data){
          if (e) console.error(e);        
           res.send(data)
           //res.send(`On ${data[0].id}\n${data[0].source}`)  
        }); 
      })
    }
    
module.exports = {
    searchStory,timeline
  }