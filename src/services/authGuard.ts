const checkAuthenticated = (req, res, next): void => {
    if (req.isAuthenticated()) { return next() }
    res.code(401).json({message: "unauthorized"});
  }

export default checkAuthenticated;