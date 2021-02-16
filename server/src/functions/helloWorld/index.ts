export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.helloWorld`,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello-world',
      }
    }
  ]
}
