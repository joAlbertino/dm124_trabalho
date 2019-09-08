const checkAuth = (request, response, next) => {
    const token = request.headers.authorization;
    if(/ZppopkxMjQ6YWx1bm9pb8983jkm/.test(token)) {
      next();
    } else {
      response.status(401).json({
        error: 'Not authorized'
      });
    }
  }
  
  module.exports = checkAuth;