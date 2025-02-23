# Netflix GPT

This project is a Netflix-like application built with React, TypeScript, and Vite. It integrates with Firebase for authentication and uses OpenAI's GPT for movie recommendations.

## Live Link
[Netflix GPT](https://netflix-gpt-b6669.web.app/)


## Features

- User authentication with Firebase
- Movie browsing and search
- GPT-powered movie recommendations
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```
2. Install dependencies
   ``` sh
   pnpm install
   ```
3. Set up Firebase:
    Install Firebase CLI:
    ```sh
    pnpm install -g firebase-tools
    ```
    Log in to Firebase:
    ```sh
    firebase login
    ```
    Initialize Firebase:    
    ```sh
    firebase init
    ```
    Deploy to Firebase
    ```sh
    firebase deploy
    ```
4. Create a .env file in the root directory and add your API keys:
   ```sh
   VITE_API_KEY=your_api_key
   VITE_OPENAI_KEY=your_openai_key
   ```

5. Running the Project
   To start the development server:
   ```sh
   pnpm run dev
   ```
6. To build the project for production:
   ```sh
    pnpm build
    ```
    To preview the production build
    ```sh
    pnpm preview
    ```   



## Usage
 Firebase Authentication
 To log in or sign up, use the following credentials:

Email: user1@test.com
Password: User1@test
GPT Movie Recommendations
Use the GPT search feature to get movie recommendations based on your query.

## Project Structure
```sh
src
 ┣ assets 
 ┃ ┣ 220x330_no_image.svg
 ┃ ┗ react.svg
 ┣ common
 ┃ ┣ ErrorBoundary.tsx
 ┃ ┣ Icons.tsx
 ┃ ┣ Img.tsx
 ┃ ┣ NotFoundPage.tsx
 ┃ ┗ Spinner.tsx
 ┣ components
 ┃ ┣ ui
 ┃ ┃ ┣ Skeleton.tsx
 ┃ ┃ ┗ dropdown-menu.tsx
 ┃ ┣ Body.tsx
 ┃ ┣ BrowserHeader.tsx
 ┃ ┣ GPTMovieSuggestion.tsx
 ┃ ┣ GPTSearchBar.tsx
 ┃ ┣ GPTSearchButton.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ LanguageSelection.tsx
 ┃ ┣ MainContainer.tsx
 ┃ ┣ MovieCard.tsx
 ┃ ┣ MovieList.tsx
 ┃ ┣ MoviesContainer.tsx
 ┃ ┣ Result.tsx
 ┃ ┣ SecondaryContainer.tsx
 ┃ ┣ VideoBackground.tsx
 ┃ ┗ VideoTitle.tsx
 ┣ hooks
 ┃ ┣ useDebounce.ts
 ┃ ┣ useFetch.ts
 ┃ ┗ useFormatter.ts
 ┣ lib
 ┃ ┣ constant.ts
 ┃ ┗ utils.ts
 ┣ pages
 ┃ ┣ Browse.tsx
 ┃ ┣ Error.tsx
 ┃ ┣ GPTSearch.tsx
 ┃ ┗ Login.tsx
 ┣ services
 ┃ ┣ api.ts
 ┃ ┗ constant.ts
 ┣ store
 ┃ ┣ appStore.ts
 ┃ ┣ gptSlice.ts
 ┃ ┣ moviesSlice.ts
 ┃ ┗ userSlice.ts
 ┣ utils
 ┃ ┣ firebase.ts
 ┃ ┣ languageConstants.ts
 ┃ ┣ openai.ts
 ┃ ┗ validate.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

#Contributing
Contributions are welcome! Please open an issue or submit a pull request

