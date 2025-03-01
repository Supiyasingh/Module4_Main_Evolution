# Q: 1 Problem Statement: Building a Books Library Management App

## Overview:
Your task is to build a simplified version of GoodReads, a book-tracking application. This application will allow users to register, log in, view a list of books, track their reading progress, and rate books. The app is built using React, Redux, Firebase Authentication, and React Router.

Demo Link
https://www.loom.com/share/7113b4da2d834d00a2a8ac6a25cb0ddc?sid=369bd52d-a861-4f1d-82ad-a19fabddb575

Folder Structure


Features to Implement:
User Authentication
Register a new user using Firebase Authentication.
Log in as an existing user.
Store user session in local storage.
Implement logout functionality.
Navigation Bar
Display the app title: "My Library".
Provide navigation links: Home, My Books (only if logged in), Login/Register (if not logged in), and Logout (if logged in).
Display logged-in user’s email.
Home Page
Fetch and display a list of books from Redux state.
Show a loading message while fetching books.
Display books using a BookCard component.
A Book card can have all the details and want to read button, on clicking it should be added to My Books page if logged in, else show an alert to login and then add.
User Book Management (My Books Page)
Display books added by the logged-in user.
Allow users to update the reading status of books (Want to Read, Currently Reading, Read).
Allow users to rate books (1-5 stars).
State Management (Redux)
Manage authentication state (login, register, logout actions).
Fetch books from a central store.
Update book ratings and status in Redux state.
Pages:
Home - Fetches and displays all the available books. (can see without login but only can add to my books page with login)
MyBooks - Fetch all the books added from the Home page along with the details, rating, and current status.
Components:
Navbar - Handles navigation and user authentication status.
Login - Allows users to log in.
Register - Allows users to sign up.
BookCard - Displays book details.
MyBookCard - Allows users to update book status and rating.
API & State Management:
Use Redux actions to fetch books, update book status, and handle authentication.
Use Firebase Authentication to log in and register.
Store user details in local storage for session persistence.
Redux Actions:
Authentication Actions
REGISTER_USER – Dispatch when a user registers.
LOGIN_USER – Dispatch when a user logs in.
LOGOUT_USER – Dispatch when a user logs out.
SET_USER – Dispatch to store the logged-in user in Redux.
Books Actions
FETCH_BOOKS_REQUEST – Dispatch before fetching books.
FETCH_BOOKS_SUCCESS – Dispatch when books are successfully fetched.
FETCH_BOOKS_FAILURE – Dispatch if fetching books fails.
ADD_BOOK_TO_USER_LIST – Dispatch when a user adds a book to their list from the Home page.
FETCH_MY_BOOKS - Dispatch when user visits My Books Page
UPDATE_BOOK_STATUS – Dispatch when a user updates their reading status.
UPDATE_BOOK_RATING – Dispatch when a user rates a book.
Firebase Realtime Database REST API Endpoints:
Authentication:

Use Email/Password Authentication from Firebase.

Fetch Books
Endpoint: GET /books.json

Request:

No request body required.

Response:

{
  "-BOOK_ID_1": {
    "author": "Author Name",
    "availability": true,
    "coverImage": "image_url",
    "status": "want to read",
    "title": "Book Title"
  },
  "-BOOK_ID_2": { ... }
}

Redux Action:

Type: FETCH_BOOKS_SUCCESS
Payload: Array of books with id, author, availability, coverImage, status, and title
Fetch My Books
Endpoint: GET /users/{userId}/myBooks.json

Request:

No request body required.

Response:

{
  "-BOOK_ID_1": {
    "author": "Author Name",
    "availability": true,
    "coverImage": "image_url",
    "id": "-BOOK_ID_1",
    "rating": 3,
    "status": "Currently Reading",
    "title": "Book Title"
  }
}

Redux Action:

Type: FETCH_MY_BOOKS
Payload: Array of books belonging to the user
Add to My Books
Endpoint: PUT /users/{userId}/myBooks/{bookId}.json

Request:

{
  "author": "Author Name",
  "availability": true,
  "coverImage": "image_url",
  "status": "Want to Read",
  "title": "Book Title"
}

Response:

{
  "author": "Author Name",
  "availability": true,
  "coverImage": "image_url",
  "status": "Want to Read",
  "title": "Book Title"
}

Redux Action:

Type: ADD_TO_MY_BOOKS
Payload: Response data from API
Update Book Status
Endpoint: PATCH /users/{userId}/myBooks/{bookId}.json

Request:

{
  "status": "Read"
}

Response:

{
  "status": "Read"
}

Redux Action:

Type: UPDATE_BOOK_STATUS
Payload: { bookId, status }
Update Book Rating
Endpoint: PATCH /users/{userId}/myBooks/{bookId}.json

Request:

{
  "rating": 5
}

Response:

{
  "rating": 5
}

Redux Action:

Type: UPDATE_BOOK_RATING
Payload: { bookId, rating }
Initial data for firebase
Save the following data in a JSON file
Import this JSON file into the Real Time Database URL of your firebase project.
{
	"books": {
		"-OK60V0HT8YMnyeQ2RSV": {
			"author": "Andrew Hunt & David Thomas",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/FF5733/FFFFFF?text=The+Pragmatic+Programmer",
			"status": "want to read",
			"title": "The Pragmatic Programmer"
		},
		"-OK6CNe_wybyaqRGSSCu": {
			"author": "Robert C. Martin",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/3498DB/FFFFFF?text=Clean+Code",
			"status": "currently reading",
			"title": "Clean Code"
		},
		"-OK6CUEIvB2JYxvlZOoV": {
			"author": "Kyle Simpson",
			"availability": false,
			"coverImage": "https://placehold.co/300x300/2ECC71/FFFFFF?text=You+Don't+Know+JS",
			"status": "want to read",
			"title": "You Don't Know JS"
		},
		"-OK6CYpfCNU7NtpPieOB": {
			"author": "Marijn Haverbeke",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/F1C40F/000000?text=Eloquent+JavaScript",
			"status": "read",
			"title": "Eloquent JavaScript"
		},
		"-OK7BPrzsOrX5Aoej1kA": {
			"author": "John Resig & Bear Bibeault",
			"availability": false,
			"coverImage": "https://placehold.co/300x300/C0392B/FFFFFF?text=Secrets+of+the+JavaScript+Ninja",
			"status": "read",
			"title": "Secrets of the JavaScript Ninja"
		},
		"-OK7BTzxqbfTxLWcaA6K": {
			"author": "Mark Ethan Trostler",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/D35400/FFFFFF?text=Testable+JavaScript",
			"status": "want to read",
			"title": "Testable JavaScript"
		},
		"-OK7BWgtz8mmHnJqPbt7": {
			"author": "Kyle Simpson",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/1ABC9C/FFFFFF?text=You+Don%27t+Know+JS%3A+ES6+%26+Beyond",
			"status": "read",
			"title": "You Don't Know JS: ES6 & Beyond"
		},
		"-OK7B_FT6xi2QwZBHlex": {
			"author": "Addy Osmani",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/F39C12/FFFFFF?text=Learning+JavaScript+Design+Patterns",
			"status": "currently reading",
			"title": "Learning JavaScript Design Patterns"
		},
		"-OK7BbeBfVvtc6kLxXgq": {
			"author": "David Flanagan",
			"availability": true,
			"coverImage": "https://placehold.co/300x300/9B59B6/FFFFFF?text=JavaScript%3A+The+Definitive+Guide",
			"status": "read",
			"title": "JavaScript: The Definitive Guide"
		}
	}
}

Ensure that your code is well-commented.
Submit a GitHub repository with the complete project.
Include Firebase credentials in a .env file (Do not expose API keys in public repositories an d make sure .env is created at root level).
Deploy the app using Firebase Hosting and share the live URL.