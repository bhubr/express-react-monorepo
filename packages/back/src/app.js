// src/app.js
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Check whether we are in production env
const isProd = process.env.NODE_ENV === 'production';

const app = express();
app.use(bodyParser.json());

app.get('/api/foo', (req, res) => res.json({ foo: 'bar' }));

if (isProd) {
  // Compute the build path and index.html path
  const buildPath = path.resolve(__dirname, '../../front/build');
  const indexHtml = path.join(buildPath, 'index.html');

  // Setup build path as a static assets path
  app.use(express.static(buildPath));
  // Serve index.html on unmatched routes
  app.get('*', (req, res) => res.sendFile(indexHtml));
}

export default app;
