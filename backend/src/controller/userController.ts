import { Request, Response } from 'express';
import conn from '../config/conn';
import IUser from '../interfaces/IUser';
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

class UserController {
  async findOne(req: Request, res: Response): Promise<Response> {
    // Pegando Paramentos do Request.Body
    const { id } = req.params;
    try {
      // Consultando o Banco 
      const user: IUser = await conn('user').select().where({id}).first()
      // Se não retornar erro e o user for null retona status 204 NO CONTENT
      if (user == undefined) return res.status(204).json()
      // Redefine paramentro de senha para não retonrar ao front
      user.password = undefined
      // Com tudo OK Retorna status 200 OK e o user do banco
      return res.status(200).json(user)
    } catch (error) {
      // Caso ocorra algum erro (Ex: Sem conexão com o Banco)
      return res.status(400)
        .json({error, 'msg': 'Não foi possivel estabelecer conexão com o banco de dados'})
    } 
  }

  async createUser(req: Request, res: Response): Promise<Response>{
    // Pegando Paramentos do Request.Body
    const {username, password} = req.body
    // Verifica se os campos foram passados
    if (!username || !password) return res.status(400).json({'msg': 'Preencha todos os campos!'})
    try {
      // Verifica antes de adicionar ao Banco se usuario já existe
      if (await conn('user').select('username').where({username}).first() != undefined) 
        return res.status(400).json({'msg':'Usario já utilizado'})
      // Encripta a senha e gera um UUID para usuario
      const cryptPass = bcrypt.hashSync(password, 8)
      const id = uuidv4()
      const user:number = await conn('user').insert({id, username, 'password': cryptPass})
      // Se o usario não for criado por algum motivo
      if (user == undefined) return res.status(204).json()
      // Resposta 200 OK | e Msg de sucesso
      return res.status(200).json({'msg': `Usuario ${username} criado com sucesso!`})
    } catch (error) {
      // Caso ocorra algum erro (Ex: Sem conexão com o Banco / Falha ao criar o Usuario)
      return res.status(400)
        .json({error, 'msg': 'Não foi possivel estabelecer conexão com o banco de dados'})
    }
  }
  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { newUsername, newPassword } = req.body

    try {
      if (await conn('user').select('username').where({id}).first() == undefined) 
        return res.status(400).json({'msg': 'Usuario não encontrado !'})

      if (newPassword != undefined){
        const newPassHash = bcrypt.hashSync(newPassword, 8);
        const user:number = await conn('user')
          .update({'username' : newUsername, 'password': newPassHash})
          .where({id})

        return res.status(200).json(user)
      } else {
        const user:number = await conn('user')
          .update({'username' : newUsername})
          .where({id})
  
        return res.status(200).json(user)
      }
    } catch (error) {
      // Caso ocorra algum erro (Ex: Sem conexão com o Banco / Falha ao criar o Usuario)
      return res.status(400)
        .json({error, 'msg': 'Não foi possivel estabelecer conexão com o banco de dados'})
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const user = await conn('user').delete().where({id})

      return res.status(200).json(user)
    } catch (error) {
      // Caso ocorra algum erro (Ex: Sem conexão com o Banco / Falha ao criar o Usuario)
      return res.status(400)
        .json({error, 'msg': 'Não foi possivel estabelecer conexão com o banco de dados'})
    }
  }
}

export default new UserController()
