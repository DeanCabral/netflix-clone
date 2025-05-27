# Netflix Clone

A simple Netflix clone built with **React.js** for the frontend and **Firebase** for authentication and backend services. This project mimics the UI and basic functionality of Netflix, including user authentication, movie browsing, and a personal watchlist.

## Features

- 🔐 User Authentication (Sign In / Sign Up) with Firebase Auth
- 🎬 Browse Movies via TMDb API integration
- ❤️ Save movies to a personalized watchlist (Firebase Firestore)
- 🔍 Responsive UI with category-based carousels (Popular, Trending, Top Rated)
- 🎥 Hover effects and video trailers on movie thumbnails

## Tech Stack

- **Frontend**: React, Javascript
- **Backend / Services**: Firebase (Auth, Firestore)
- **Third-Party APIs**: TMDb (The Movie Database) API for movie data

## Getting Started

### Prerequisites

- Node.js and npm
- Firebase project
- TMDb API key (free to obtain at https://www.themoviedb.org/documentation/api)

### Installation

```bash
git clone https://github.com/DeanCabral/netflix-clone.git
cd netflix-clone
npm install
```

### Configuration

1. Create a .env file in the root of your project.

2. Add your TMDb API key with the correct prefix depending on your setup (example for Vite):
``` VITE_TMDB_KEY=your_tmdb_api_key_here ```

3. Restart your development server to load environment variables.