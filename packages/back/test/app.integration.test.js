// test/app.integration.test.js
import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('GETs /api/foo and should obtain { foo: "bar" }', async () => {
    expect.assertions(1);
    const res = await request(app)
      .get('/api/foo')
      .expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "foo": "bar",
      }
    `);
  });
});
