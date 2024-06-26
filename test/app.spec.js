const supertest = require('supertest')
const { PrometheusTestApp } = require('../src/app')

const sutFactory = () => {
  const instance = new PrometheusTestApp()

  instance.applyRoutes()

  return supertest(instance.getApp())
}

describe('PrometheusTestApp', () => {
  it('should return 200 and Hello World!', async () => {
    const sut = sutFactory()

    const response = await sut.get('/')

    expect(response.status).toBe(200)
    expect(response.body).toStrictEqual({ message: 'Hello World!' })
  })
})
