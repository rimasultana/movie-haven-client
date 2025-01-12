# Movie Haven

Welcome to **Movie Haven**! This is a dynamic and user-friendly Movie Portal that simplifies the process of exploring, managing, and enjoying movies.

## Live Site URL

Access the live website here: [Movie Haven](https://movie-haven-df1ab.web.app)

## Features

- **Explore Movies:** A responsive interface to browse through a collection of movies with detailed information.
- **Add Movies:** A private route for authenticated users to add their favorite movies to the collection, with validations for data integrity.
- **Manage Favorites:** Effortlessly add movies to your favorite list or remove them as needed.
- **Interactive Details Page:** View comprehensive movie details with options to delete or add the movie to your favorites.
- **Search & Filter:** Intuitive search and filter options powered by the `match-sorter` library for efficient exploration.
- **Responsive Design:** Fully responsive and optimized for all devices, ensuring seamless usability.
- **Social Authentication:** Authenticate users with Google for quick and secure login and registration.
- **Toast Notifications:** Real-time feedback using `react-hot-toast` for user actions like adding or deleting movies.
- **Dark Mode:** Switch between light and dark themes with the `react-toggle-dark-mode` library.
- **Ratings:** Movie ratings integrated using `react-star-ratings` for an engaging experience.

## Tech Stack

### Frontend:

- React.js
- Tailwind CSS
- DaisyUI
- React Router DOM
- Firebase Authentication

### Backend:

- Node.js
- Express.js

### Database:

- MongoDB

### Packages:

- `react-hook-form` for form validation
- `react-hot-toast` for notifications
- `swiper` for carousel effects

---

## Running the Project Locally

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can check if it's installed by running `node -v` in your terminal. If it's not installed, download it from the [official Node.js website](https://nodejs.org/).
- **Bun**: If you are using Bun as your package manager, ensure it's installed. You can check by running `bun -v`. If it's not installed, you can follow the [installation guide](https://bun.sh/).

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rimasultana/movie-haven-client
   ```
   
2. **Navigate to the Project Folder**:
   After cloning the repository, navigate into the project directory:
   ```bash
   cd movie-haven-client
   ```

3. **Install Dependencies**:
   Depending on your package manager (npm, yarn, or Bun), install the necessary dependencies:

   - If using **npm**:
     ```bash
     npm install
     ```
   - If using **yarn**:
     ```bash
     yarn
     ```
   - If using **Bun**:
     ```bash
     bun install
     ```

4. **Set up Firebase Configuration**:
   - Create a Firebase project if you haven't already by following the [Firebase setup guide](https://firebase.google.com/docs/web/setup).
   - Create a `.env` file in the root directory of your project and add the Firebase configuration:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

5. **Run the Project Locally**:
   Once everything is set up, you can start the development server:
   
   - If using **npm**:
     ```bash
     npm run dev
     ```
   - If using **yarn**:
     ```bash
     yarn dev
     ```
   - If using **Bun**:
     ```bash
     bun run dev
     ```

   This will start the project and open it in your default web browser, usually at `http://localhost:5173`.

6. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to view the application running locally.

---

Thank you for visiting **Movie Haven**! Dive in and enjoy exploring the world of movies.
