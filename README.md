# TMDB Kinopoisk

A web application for searching and browsing movie information. Data is provided by the [TMDB API](https://developer.themoviedb.org/docs).

> Work in progress.

## Tech Stack

- React
- TypeScript
- Redux Toolkit (RTK Query, slice)
- React Router
- Zod
- CSS Modules
- Vite

## Features

- Main page with collections: Popular, Top Rated, Upcoming, Now Playing
- Category page with pagination
- Filtering and sorting movies by genre, rating, release date and title
- Movie search by title
- Favorite movies saved in localStorage
- Movie details page: overview, cast, similar movies
- Dark and light theme
- Error handling, loaders and skeletons

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/trifonova-dev/tmdb-kinopoisk.git
   cd tmdb-kinopoisk
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the project root:

   ```
   VITE_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_ACCESS_TOKEN=your_token
   ```

   You can get an access token in your [TMDB account settings](https://www.themoviedb.org/settings/api).

4. Run the project:

   ```bash
   pnpm dev
   ```

## Demo

The Vercel link will be added after deployment.

---

Data courtesy of [TMDB](https://www.themoviedb.org/).
