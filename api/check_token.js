// api/check_token.js

export default function handler(req, res) {
    const validTokens = ['abc123', 'def456', 'ghi789']; // your tokens
  
    const { token } = req.query;
  
    if (!token) {
      return res.status(400).send("no token");
    }
  
    if (validTokens.includes(token)) {
      return res.status(200).send("valid");
    } else {
      return res.status(403).send("invalid");
    }
  }  