# Kasi Kitchen API

A REST API for South African dishes and provinces, built with Node.js and Express.

## Requirements

- Node.js 18 or newer
- npm

## Installation

From the project root:

```powershell
npm install
```

## Run the API

On Windows PowerShell, use `npm.cmd` if PowerShell blocks `npm.ps1`:

```powershell
npm.cmd run devStart
```

The API runs at:

```text
http://localhost:5000/
```

Open the URL in a browser to view the API home page.

## Endpoints

### About

```text
GET /api/about
```

### Dishes

```text
GET /api/dishes
GET /api/dishes/random
GET /api/dishes/:id
GET /api/dishes/province/:province
```

Examples:

```text
/api/dishes/1
/api/dishes/province/Gauteng
```

#### Dish Search, Filters, Sorting, and Pagination

`GET /api/dishes` supports these query parameters:

- `search`: search dish names, for example `?search=pap`
- `sort=price`: sort from lowest to highest price
- `sort=price_desc`: sort from highest to lowest price
- `minPrice` and `maxPrice`: filter by an inclusive price range
- `page`: page number, starting at `1`
- `limit`: results per page from `1` to `100`

Example:

```text
/api/dishes?search=pap&sort=price&minPrice=20&maxPrice=50&page=1&limit=5
```

Paginated responses include `total`, `page`, `limit`, and `totalPages` metadata.

### Provinces

```text
GET /api/provinces
GET /api/provinces/:id
GET /api/provinces/:id/dishes
```

Examples:

```text
/api/provinces/1
/api/provinces/1/dishes
```

## Project Structure

```text
app.js                 Express app and home page
server.js              Server startup
config/env.js          Port configuration
controllers/           Request handlers
data/                  Dish and province data
middleware/            Logger and error handling
routes/                API route definitions
```

## Configuration

The default port is `5000`. To use another port in PowerShell for the current session:

```powershell
$env:PORT=5001
npm.cmd run devStart
```

## Developers

- Boitshepo: https://github.com/Boitshepo-glitch
- Felix: https://github.com/ntsienifelix-commits
