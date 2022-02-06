import { secret } from './../config/secret';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction): Response | NextFunction => {
  // DEFAULT TOKEN = Bearer JWT
  const authHeader = req.headers.authorization;

  if(!authHeader)
    return res.status(401).send({'msg': 'Sem TOKEN de autorização'})

  const parts = authHeader.split(' ')

  if(!(parts.length === 2))
    return res.status(401).send({'msg': 'Erro no TOKEN'})

  const [b, token] = parts

  if(!/^Bearer$/i.test(b))
    return res.status(401).send({'msg': 'Má formação de TOKEN'})

  jwt.verify(token, secret, (err, decode) => {
    if(err)
      return res.status(401).send({'msg': 'TOKEN Invalido'})

    req.userId = decode?.id

    return next()
  })
}

export default checkAuth
