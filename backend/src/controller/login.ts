import { secret } from './../config/secret';
import { Request, Response } from 'express';
import conn from '../config/conn';
import bcrypt from 'bcrypt'
import IUser from '../interfaces/IUser';
import jwt from 'jsonwebtoken'

class Login {
  async auth(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    if(!username || !password)
      return res.status(400).json({'msg': 'Preencha todos os campos'})

    const user:IUser = await conn('user').select().where({username}).first()

    if (!user)
      return res.status(400).json({'msg': 'Usuario não encontrado!'})

    if (!await bcrypt.compare(password, user.password as string))
      return res.status(400).json({'msg': 'Senha Invalida!'})

    user.password = undefined

    const token = jwt.sign({'id': user.id}, secret, {
      'expiresIn': 3600
    })

    return res.status(200).json({user, token})
  }
}

export default new Login()
