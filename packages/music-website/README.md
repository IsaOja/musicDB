# music-website

This project is a simple music-themed website built with Vue.js and Vite. It includes views for Albums, Artists, Songs, and Playlists, allowing users to explore and interact with music content.

## Project Structure

- **src/**: Contains the source code for the application.
  - **App.vue**: The main component that includes the router view.
  - **main.js**: The entry point of the application.
  - **style.css**: Global styles for the application.
  - **assets/**: Directory for static assets like images and fonts.
  - **components/**: Contains reusable components for Albums, Artists, Playlists, and Songs.
    - **Album.vue**: Displays details of an individual album.
    - **Artist.vue**: Displays details of an individual artist.
    - **Playlist.vue**: Displays details of a playlist.
    - **Song.vue**: Displays details of an individual song.
  - **views/**: Contains views that utilize the components to display lists of Albums, Artists, Playlists, and Songs.
    - **AlbumsView.vue**: Displays a list of albums.
    - **ArtistsView.vue**: Displays a list of artists.
    - **PlaylistsView.vue**: Displays a list of playlists.
    - **SongsView.vue**: Displays a list of songs.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd music-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- View a list of albums, artists, songs, and playlists.
- Each component displays relevant details and can be expanded for more information.

## Technologies Used

- Vue.js
- Vite
- CSS

## License

This project is licensed under the MIT License.