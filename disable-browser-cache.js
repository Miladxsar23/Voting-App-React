// More info: http://stackoverflow.com/a/2068407/862877

function middleware(req, res, next){
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  }
  exports.middleware = middleware;