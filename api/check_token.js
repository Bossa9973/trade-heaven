// api/check_token.js

export default function handler(req, res) {
    const validTokens = ['abc123', 'def456', 'ghi789']; // your tokens
  
    const { token } = req.query;
  
    // If token is missing, return 400 "no token"
    if (!token) {
      return res.status(400).send();  // No content in the body
    }
  
    // Check if token is valid
    if (validTokens.includes(token)) {
      return res.status(200).send();  // No content in the body
    } else {
      return res.status(403).send();  // No content in the body
    }
  }
  