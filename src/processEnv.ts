declare global {
  namespace NodeJS {
    interface ProcessEnv {
      someData?: 'some value'
    }
  }
}
