import 'dotenv/config'
import app from './app'

app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
  console.log('Servidor rodando!')
})
