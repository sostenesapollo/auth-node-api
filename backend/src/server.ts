import 'dotenv/config'
import app from './app'

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://${process.env.HOST}:${process.env.PORT}`)
})
