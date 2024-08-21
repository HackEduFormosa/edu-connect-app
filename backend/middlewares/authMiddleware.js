import jwt from 'jsonwebtoken';
//funcion
const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'No autorizado' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'No token, no autorizado' });
  }
};

export default protect;
