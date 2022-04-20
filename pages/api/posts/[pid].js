export default function handler(req, res) {

    if (req.method === 'GET') {
        // Process a POST request
        const { pid } = req.query
        res.send(`Post: ${pid}`)
      } else {
        // Handle any other HTTP method
      }
   
}