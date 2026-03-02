import express, { Request, Response } from 'express'

const app = express()
// Vercel сам назначает порт, поэтому используем process.env.PORT
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Samurai')
})

// Для Vercel важно экспортировать app, если ты используешь их serverless функции,
// но для простого запуска оставим так:
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

export default app;