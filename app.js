const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const dishRoutes = require('./routes/dishRoutes');
const provinceRoutes = require('./routes/provinceRoutes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {

  res.send(`

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Kasi Kitchen API</title>

      <style>
      :root {
        --ink: #241915;
        --muted: #75635a;
        --paper: #f6efe6;
        --surface: #fffaf3;
        --line: rgba(70, 43, 30, 0.14);
        --clay: #b84f35;
        --saffron: #d9942b;
        --leaf: #27745d;
        --shadow: 0 24px 70px rgba(75, 42, 24, 0.14);
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        body {
          font-family: Georgia, 'Times New Roman', serif;
          min-height: 100vh;
          background-color: var(--paper);
          background-image: radial-gradient(rgba(184, 79, 53, 0.08) 1px, transparent 1px);
          background-size: 22px 22px;
          color: var(--ink);
          padding: 34px 20px;
        }

        .container {
          width: 100%;
          max-width: 1120px;
          margin: auto;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 44px 50px 48px;
          border: 1px solid rgba(70, 43, 30, 0.16);
          border-radius: 8px;
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 18px;
          background: var(--saffron);
          right: -80px;
             color: var(--ink);
          transform: rotate(-35deg);
             border-radius: 5px;
             background: #fffdf9;
             border: 1px solid var(--line);
             transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
             box-shadow: 0 10px 22px rgba(75, 42, 24, 0.1);
          gap: 12px;
          margin-bottom: 34px;
        }

        .logo-mark {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--clay);
          color: #fffaf3;
          font-family: Arial, sans-serif;
          font-size: 13px;
             color: var(--ink);
             font-family: Arial, sans-serif;
          letter-spacing: 1px;
          box-shadow: inset 0 0 0 5px rgba(255, 250, 243, 0.18);
             color: var(--muted);
             font-family: Arial, sans-serif;

        .brand-name {
             background: #f3e4d3;
             border: 1px solid rgba(184, 79, 53, 0.12);
             color: #684638;
             font-family: Arial, sans-serif;
          font-weight: 700;
        }
             color: var(--muted);
             font-family: Arial, sans-serif;
        .brand-label {
          display: block;
          margin-top: 2px;
          color: var(--muted);
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .badge {
             color: var(--ink);
          padding: 7px 12px;
             border-radius: 5px;
             background: #fffdf9;
             border: 1px solid var(--line);
             transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
             border-color: rgba(184, 79, 53, 0.5);
             box-shadow: 0 10px 22px rgba(75, 42, 24, 0.1);
        }

        h1 {
          position: relative;
             color: var(--leaf);
          font-size: clamp(48px, 8vw, 86px);
          line-height: 0.92;
          margin-bottom: 22px;
          letter-spacing: -2px;
        }

        h1 span {
          color: var(--clay);
        }

             color: var(--ink);
          position: relative;
          max-width: 650px;
          color: var(--muted);
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.75;
        }

        .status {
             background: rgba(255, 255, 255, 0.04);
          align-items: center;
          gap: 8px;
          margin-top: 28px;
             color: var(--muted);
          border-radius: 4px;
          background: rgba(39, 116, 93, 0.09);
          border: 1px solid rgba(39, 116, 93, 0.22);
          color: var(--leaf);
          font-family: Arial, sans-serif;
             color: var(--clay);
          font-weight: 700;
        }

        .dot {
          width: 8px;
          height: 8px;
             background: #f3e4d3;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(39, 116, 93, 0.6);
        }

        .section {
          margin-top: 30px;
             color: var(--muted);
          border-radius: 8px;
          background: rgba(255, 250, 243, 0.82);
          border: 1px solid var(--line);
          box-shadow: 0 12px 35px rgba(75, 42, 24, 0.06);
        }

        .section h2 {
          font-size: 25px;
          margin-bottom: 10px;
        }

        .section-description {
          color: var(--muted);
          font-family: Arial, sans-serif;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .endpoints {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 15px;
        }

        .endpoint {
          display: block;
          min-width: 0;
          text-decoration: none;
          color: var(--ink);
          padding: 20px;
          border-radius: 5px;
          background: #fffdf9;
          border: 1px solid var(--line);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .endpoint:hover {

          transform: translateY(-4px);

          border-color: rgba(184, 79, 53, 0.5);

          box-shadow: 0 10px 22px rgba(75, 42, 24, 0.1);

        }

        .method {

          display: inline-block;

          color: var(--leaf);
          font-family: Arial, sans-serif;

          font-size: 12px;

          font-weight: bold;

          letter-spacing: 1px;

          margin-bottom: 10px;

        }

        .endpoint-name {

          font-family: monospace;

          font-size: 15px;

          line-height: 1.5;

          overflow-wrap: anywhere;

          color: var(--ink);

        }

        .developers {

          display: grid;

          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

          gap: 16px;

        }

        .developer {

          padding: 22px;

          border-radius: 16px;

          background: rgba(255, 255, 255, 0.035);

          border: 1px solid rgba(255, 255, 255, 0.07);

        }

        .developer h3 {

          margin-bottom: 6px;

        }

        .developer p {

          color: #929292;

          font-size: 14px;

          margin-bottom: 15px;

        }

        .github {

          display: inline-block;

          color: #ffbd66;

          text-decoration: none;

          font-size: 14px;

        }

        .github:hover {

          text-decoration: underline;

        }

        .tech-stack {

          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 20px;

        }

        .tech {

          padding: 9px 13px;

          border-radius: 999px;

          background: #111;

          border: 1px solid rgba(255, 255, 255, 0.10);

          color: #cfcfcf;

          font-size: 13px;

        }

        footer {

          text-align: center;

          color: #666;

          font-size: 13px;

          padding: 35px 10px 10px;

        }

        @media (max-width: 650px) {

          body {

            padding: 20px 12px;

          }

          .hero {

            padding: 35px 24px;

            border-radius: 22px;

          }

          .section {

            padding: 24px 18px;

          }

          h1 {

            letter-spacing: -2px;

          }

        }

        /* Final brand layer: keeps the inline page theme consistent. */
        body {
          background: #fff2d8;
          background-image: radial-gradient(rgba(21, 92, 104, 0.11) 1px, transparent 1px), linear-gradient(135deg, #fff7e8 0%, #ffe7c2 100%);
          background-size: 24px 24px, 100% 100%;
          color: #172f38;
        }

        .hero {
          border: 2px solid #172f38;
          border-radius: 18px;
          background: #fffdf5;
          box-shadow: 10px 10px 0 #f05a3c;
        }

        .hero::before {
          background: #f5b82e;
          height: 22px;
          opacity: 1;
        }

        .brand {
          position: relative;
          z-index: 1;
        }

        .logo-mark {
          position: relative;
          display: block;
          width: 56px;
          height: 56px;
          border: 3px solid #172f38;
          border-radius: 50%;
          background: #f5b82e;
          box-shadow: 4px 4px 0 #f05a3c;
        }

        .pot-lid {
          position: absolute;
          top: 12px;
          left: 13px;
          width: 24px;
          height: 7px;
          border: 3px solid #172f38;
          border-radius: 50%;
          background: #fffdf5;
        }

        .pot-lid::after {
          content: "";
          position: absolute;
          top: -8px;
          left: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #172f38;
        }

        .pot-body {
          position: absolute;
          top: 19px;
          left: 12px;
          width: 26px;
          height: 19px;
          border: 3px solid #172f38;
          border-top: 0;
          border-radius: 0 0 9px 9px;
          background: #f05a3c;
        }

        .pot-handle {
          position: absolute;
          top: 23px;
          width: 7px;
          height: 10px;
          border: 3px solid #172f38;
          background: #f5b82e;
        }

        .pot-handle-left {
          left: 5px;
          border-right: 0;
          border-radius: 6px 0 0 6px;
        }

        .pot-handle-right {
          right: 5px;
          border-left: 0;
          border-radius: 0 6px 6px 0;
        }

        .brand-name,
        h1,
        .section h2 {
          color: #172f38;
        }

        h1 span {
          color: #f05a3c;
        }

        .badge {
          color: #155c68;
          border-left-color: #155c68;
        }

        .status {
          color: #155c68;
          border-color: rgba(21, 92, 104, 0.28);
          background: rgba(21, 92, 104, 0.1);
        }

        .dot {
          background: #155c68;
          box-shadow: 0 0 12px rgba(21, 92, 104, 0.65);
        }

        .section {
          border: 1px solid rgba(23, 47, 56, 0.16);
          border-radius: 14px;
          background: rgba(255, 253, 245, 0.88);
          box-shadow: 6px 6px 0 rgba(21, 92, 104, 0.16);
        }

        .section-description,
        .hero p,
        .developer p,
        footer {
          color: #536b70;
        }

        .endpoint,
        .developer {
          border: 1px solid rgba(23, 47, 56, 0.18);
          border-radius: 10px;
          background: #fffdf5;
        }

        .endpoint:hover {
          border-color: #f05a3c;
          background: #fff1d1;
          box-shadow: 4px 4px 0 rgba(240, 90, 60, 0.3);
        }

        .method {
          color: #155c68;
        }

        .endpoint-name {
          color: #172f38;
        }

        .github {
          color: #f05a3c;
        }

        .tech {
          background: #d8f0df;
          border-color: rgba(21, 92, 104, 0.16);
          color: #155c68;
        }

        @media (max-width: 650px) {
          .hero {
            box-shadow: 6px 6px 0 #f05a3c;
          }

          .section {
            box-shadow: 4px 4px 0 rgba(21, 92, 104, 0.16);
          }
        }

      </style>

      <style>
        /* Kasi township table: warm, bold, communal, and contemporary. */
        body {
          background-color: #fff1d2;
          background-image: repeating-linear-gradient(135deg, rgba(23, 63, 95, 0.045) 0 2px, transparent 2px 16px);
          color: #173f5f;
        }

        .hero {
          min-height: 430px;
          border: 0;
          border-radius: 18px 18px 5px 5px;
          background-color: #173f5f;
          background-image: linear-gradient(135deg, rgba(23, 63, 95, 0.98) 0 58%, rgba(60, 174, 163, 0.92) 58% 73%, rgba(237, 85, 59, 0.96) 73% 100%);
          box-shadow: 0 18px 0 #f6d55c, 0 30px 65px rgba(23, 63, 95, 0.22);
        }

        .hero::before {
          width: 100%;
          height: 14px;
          right: 0;
          bottom: 0;
          background: #f6d55c;
          transform: none;
          box-shadow: none;
          opacity: 1;
        }

        .brand-name,
        .hero h1 {
          color: #fff8e9;
        }

        .brand-label,
        .hero p {
          color: #dcece3;
        }

        .logo-mark {
          border-color: #fff8e9;
          background: #ed553b;
          box-shadow: 4px 4px 0 #f6d55c;
        }

        .pot-lid {
          border-color: #173f5f;
          background: #fff8e9;
        }

        .pot-body {
          border-color: #173f5f;
          background: #f6d55c;
        }

        .pot-handle {
          border-color: #173f5f;
          background: #3caea3;
        }

        .badge {
          color: #f6d55c;
          border-left-color: #f6d55c;
        }

        .hero h1 span {
          color: #f6d55c;
        }

        .status {
          color: #d9f5c5;
          border-color: rgba(217, 245, 197, 0.4);
          background: rgba(217, 245, 197, 0.12);
        }

        .status .dot {
          background: #d9f5c5;
          box-shadow: 0 0 10px rgba(217, 245, 197, 0.8);
        }

        .section {
          border: 2px solid rgba(23, 63, 95, 0.14);
          border-radius: 12px;
          background: #fff8e9;
          box-shadow: 7px 7px 0 rgba(60, 174, 163, 0.28);
        }

        .section h2 {
          color: #173f5f;
        }

        .section-description,
        .developer p,
        footer {
          color: #557078;
        }

        .endpoint,
        .developer {
          border: 1px solid rgba(23, 63, 95, 0.18);
          border-radius: 7px;
          background: #fffdf5;
        }

        .endpoint:nth-child(3n + 1) {
          border-top: 4px solid #ed553b;
        }

        .endpoint:nth-child(3n + 2) {
          border-top: 4px solid #3caea3;
        }

        .endpoint:nth-child(3n) {
          border-top: 4px solid #f6d55c;
        }

        .endpoint:hover {
          background: #fff1cf;
          border-color: #173f5f;
          box-shadow: 5px 5px 0 rgba(237, 85, 59, 0.28);
        }

        .method {
          color: #18766f;
        }

        .endpoint-name {
          color: #173f5f;
        }

        .github {
          color: #d84a34;
        }

        .tech {
          background: #d9f5c5;
          color: #173f5f;
          border: 1px solid rgba(23, 63, 95, 0.12);
        }

        @media (max-width: 650px) {
          .hero {
            min-height: 0;
            box-shadow: 5px 8px 0 #f6d55c;
          }

          .section {
            box-shadow: 4px 5px 0 rgba(60, 174, 163, 0.28);
          }
        }
      </style>

      <style>
        /* Luxe chef's counter direction */
        body {
          background-color: #f4f1e8;
          background-image: linear-gradient(135deg, #fffaf0, #e6f1ed);
        }

        .hero {
          min-height: 430px;
          border: 1px solid rgba(255, 250, 240, 0.2);
          background-color: #122231;
          background-image: linear-gradient(120deg, #122231 0%, #173847 58%, #0d1b28 100%);
          box-shadow: 13px 13px 0 #f05a3c, 0 30px 70px rgba(15, 31, 43, 0.3);
        }

        .hero::before {
          width: 480px;
          height: 3px;
          right: -120px;
          bottom: 55px;
          background: #b6d86a;
          transform: rotate(-26deg);
          box-shadow: 0 18px 0 rgba(245, 184, 46, 0.8), 0 36px 0 rgba(240, 90, 60, 0.8);
        }

        .brand-name,
        .hero h1 {
          color: #fffaf0;
        }

        .brand-label,
        .hero p {
          color: #b9d0cb;
        }

        .logo-mark {
          border-color: #fffaf0;
          background: #f05a3c;
          box-shadow: 4px 4px 0 #b6d86a;
        }

        .pot-lid {
          border-color: #122231;
          background: #fffaf0;
        }

        .pot-body {
          border-color: #122231;
          background: #b6d86a;
        }

        .pot-handle {
          border-color: #122231;
          background: #f5b82e;
        }

        .badge {
          position: relative;
          z-index: 1;
          color: #b6d86a;
          border-left-color: #b6d86a;
        }

        .hero h1 span {
          color: #f5b82e;
        }

        .status {
          position: relative;
          z-index: 1;
          color: #b6d86a;
          border-color: rgba(196, 255, 82, 0.4);
          background: rgba(196, 255, 82, 0.1);
        }

        .status .dot {
          background: #b6d86a;
          box-shadow: 0 0 10px rgba(182, 216, 106, 0.65);
        }

        .section {
          border: 1px solid rgba(18, 34, 49, 0.15);
          background: rgba(255, 253, 245, 0.92);
          box-shadow: 7px 7px 0 rgba(21, 92, 104, 0.16);
        }

        .section h2 {
          color: #122231;
        }

        .endpoint,
        .developer {
          background: #f8fffb;
          border-color: rgba(21, 92, 104, 0.2);
        }

        .endpoint:hover {
          background: #fff3d1;
          border-color: #f05a3c;
          box-shadow: 5px 5px 0 rgba(240, 90, 60, 0.35);
        }

        .method {
          color: #155c68;
        }

        .endpoint-name {
          color: #122231;
        }

        .tech {
          background: #b6d86a;
          color: #122231;
          border-color: transparent;
          font-weight: 700;
        }

        @media (max-width: 650px) {
          .hero {
            min-height: 0;
            box-shadow: 7px 7px 0 #f05a3c;
          }

        }
      </style>

    </head>

    <body>

      <main class="container">

        <section class="hero">

          <div class="brand" aria-label="Kasi Kitchen">

            <div class="logo-mark" aria-hidden="true">

              <span class="pot-lid"></span>

              <span class="pot-body"></span>

              <span class="pot-handle pot-handle-left"></span>

              <span class="pot-handle pot-handle-right"></span>

            </div>

            <div>

              <span class="brand-name">Kasi Kitchen</span>

              <span class="brand-label">Taste of home · API</span>

            </div>

          </div>

          <div class="badge">

            ● Frontend eye · Backend craft

          </div>

          <h1>

            Kasi <span>Kitchen</span>

          </h1>

          <p>

            A digital table for the vibrant, soulful world of Kasi food.

            Designed with a frontend eye and engineered as a dependable backend,

            this API brings dishes, provinces, and community stories together.

          </p>

          <div class="status">

            <span class="dot"></span>

            API Online

          </div>

        </section>

        <section class="section">

          <h2>API Endpoints</h2>

          <p class="section-description">

            Explore the available resources provided by the Kasi Kitchen API.

          </p>

          <div class="endpoints">

            <a class="endpoint" href="/api/dishes">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/dishes

              </div>

            </a>

            <a class="endpoint" href="/api/dishes/1">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/dishes/:id

              </div>

            </a>

            <a class="endpoint" href="/api/dishes/random">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/dishes/random

              </div>

            </a>

            <a class="endpoint" href="/api/about">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/about

              </div>

            </a>

            <a class="endpoint" href="/api/dishes/province/Gauteng">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/dishes/province/:province

              </div>

            </a>

            <a class="endpoint" href="/api/provinces">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/provinces

              </div>

            </a>

            <a class="endpoint" href="/api/provinces/1">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/provinces/:id

              </div>

            </a>

            <a class="endpoint" href="/api/provinces/1/dishes">

              <span class="method">GET</span>

              <div class="endpoint-name">

                /api/provinces/:id/dishes

              </div>

            </a>

          </div>

        </section>

        <section class="section">

          <h2>Developers</h2>

          <p class="section-description">

            Backend development team behind the Kasi Kitchen API.

          </p>

          <div class="developers">

            <div class="developer">

              <h3>Boitshepo</h3>

              <p>Backend Developer</p>

              <a

                class="github"

                href="https://github.com/boitsheporamaswe-glitch"

                target="_blank"

              >

                ↗ GitHub Profile

              </a>

            </div>

            <div class="developer">

              <h3>Felix</h3>

              <p>Backend Developer</p>

              <a

                class="github"

                href="https://github.com/ntsienifelix-commits"

                target="_blank"

              >

                ↗ GitHub Profile

              </a>

            </div>

          </div>

        </section>

        <section class="section">

          <h2>Technology</h2>

          <p class="section-description">

            Core technologies powering this backend project.

          </p>

          <div class="tech-stack">
            <span class="tech">Node.js</span>
            <span class="tech">Express.js</span>
            <span class="tech">REST API</span>
            <span class="tech">JavaScript</span>
            <span class="tech">JSON</span>
            <span class="tech">Nodemon</span>
          </div>
        </section>

        <footer>
          Kasi Kitchen API · Built with Node.js & Express
        </footer>

      </main>
    </body>
    </html>

  `);

});

app.use('/api', dishRoutes);
app.use('/api/provinces', provinceRoutes);
app.use((req, res) => res.status(404).json({ error: 'Route not found', hint: 'Visit /' }));
app.use(errorHandler);

module.exports = app;