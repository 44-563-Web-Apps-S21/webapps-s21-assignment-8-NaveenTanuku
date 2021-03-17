const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<style>table, th, td {border: 2px solid black;border-collapse: collapse;}</style><table><tr><th>Name of the place</th><th>Number of hours to be spent</th><th>Expenses per person in place</th></tr><tr><td>Bali Indonesia</td><td>2 days</td><td>$100</td></tr><tr><td>Sydney</td><td>3 days</td><td>$1000</td></tr><tr><td>Maldives</td><td>1 day</td><td>$150</td></tr><tr><td>Paris</td><td>3 days</td><td>$750</td></tr></table>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})