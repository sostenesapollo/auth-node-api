import 'dotenv/config'
import app from './app'

app.get('/', (req, res) => {
  return res.send('ola')
})

app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
  console.log('Servidor rodando!')
})
