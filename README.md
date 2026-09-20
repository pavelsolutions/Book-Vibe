# 📚 Book Vibe

### A modern and responsive book management web application built with Next.js, TypeScript, and Tailwind CSS.

Book Vibe is a book discovery and reading management application where users can explore books, view book details, add books to their reading list or wishlist, sort their saved books, and visualize their reading progress.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add your live URL here](https://your-live-url.com)

🔗 **GitHub Repository:** [Add your GitHub repository URL here](https://github.com/your-username/book-vibe)

---

## ✨ Features

- 📚 Browse and explore books
- 🔎 View detailed information about individual books
- 📖 Add books to the **Read Books** list
- ❤️ Add books to the **Wishlist**
- 🔄 Switch between Read Books and Wishlist
- 📊 Sort books by:
  - Rating
  - Number of Pages
  - Publisher Year
- 📈 View reading statistics with charts
- 🎨 Modern and clean user interface
- 📱 Fully responsive design
- 🧩 Reusable React components
- 🔤 Type-safe development with TypeScript
- 🖼️ Optimized images using Next.js Image
- 🚫 Custom 404 / Not Found page
- ⚡ Next.js App Router architecture

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| Next.js | React framework |
| React | UI development |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| React Icons | UI icons |
| Recharts | Reading statistics |
| Context API | Global state management |
| JSON | Book data |

---

## 📸 Project Preview

### Home Page

![Book Vibe Home Page](./public/screenshots/home.png)

### Books Page

![Book Vibe Books Page](./public/screenshots/books.png)

### Listed Books

![Book Vibe Listed Books](./public/screenshots/listed-books.png)

> Add your actual screenshots inside:
>
> `public/screenshots/`

---

## 📂 Project Structure

```text
book-vibe/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── books/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── listed-books/
│   │   └── page.tsx
│   │
│   ├── types/
│   │   └── bookType.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   │
│   └── shared/
│       ├── BookCard.tsx
│       └── BookListItem.tsx
│
├── context/
│   └── BooksContext.tsx
│
├── public/
│   └── booksData.json
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
````

---

## 📖 Application Pages

### 🏠 Home Page

The home page provides an introduction to Book Vibe and highlights books for users to explore.

```text
/
```

---

### 📚 Books Page

The Books page displays available books in a responsive layout.

```text
/books
```

Users can select a book and navigate to its detailed page.

---

### 📕 Book Details

Book Vibe uses a dynamic route to display individual book information.

```text
/books/[id]
```

Examples:

```text
/books/1
/books/2
/books/3
```

The book ID is used to find the corresponding book from the book data.

---

### 📋 Listed Books

The Listed Books page allows users to manage their reading activity.

```text
/listed-books
```

It contains two sections:

```text
Read Books
Wishlist Books
```

Users can switch between the two lists and sort their books.

---

## 🔽 Book Sorting

Book Vibe includes a custom sorting dropdown.

```text
┌───────────────────┐
│     Sort By   ▼   │
├───────────────────┤
│      Rating       │
│  Number of pages  │
│   Publisher year  │
└───────────────────┘
```

Books can be sorted by:

### ⭐ Rating

```ts
sortedBooks.sort((a, b) => b.rating - a.rating);
```

### 📄 Number of Pages

```ts
sortedBooks.sort(
  (a, b) => b.totalPages - a.totalPages
);
```

### 📅 Publisher Year

```ts
sortedBooks.sort(
  (a, b) => b.yearOfPublishing - a.yearOfPublishing
);
```

---

## 📊 Reading Statistics

Book Vibe provides a visual representation of the user's read books using **Recharts**.

The chart displays:

* 📚 Book name
* 📄 Number of pages
* 📊 Reading statistics

Example:

```text
Pages

500 |             █
400 |       █     █
300 |       █     █
200 |  █    █     █
100 |  █    █     █
    └──────────────────
       Book 1  Book 2
```

---

## ❤️ Wishlist

Users can add books to their wishlist for future reading.

The wishlist is managed through the application's React Context.

```text
Wishlist
   │
   ├── Book 1
   ├── Book 2
   └── Book 3
```

---

## 📖 Read Books

Users can mark books as read and manage their reading collection.

```text
Read Books
   │
   ├── Book 1
   ├── Book 2
   └── Book 3
```

The read books are also used to generate reading statistics.

---

## 🧩 State Management

Book Vibe uses **React Context API** for managing book-related state.

The `BooksContext` manages:

```text
Books
 │
 ├── Read Books
 │
 └── Wishlist
```

This allows different components to access the same book state without unnecessary prop drilling.

---

## 📘 Book Data

Book information is stored in:

```text
public/booksData.json
```

Example:

```json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "https://example.com/book.jpg",
  "review": "A timeless classic.",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}
```

---

## 🔤 TypeScript Interface

Book data is strongly typed using TypeScript.

```ts
export interface IBook {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}
```

---

## 🎨 UI & Design

Book Vibe follows a clean and modern design approach.

### Design Highlights

* Modern navigation bar
* Responsive book cards
* Clean typography
* Rounded cards
* Soft shadows
* Green primary color
* Responsive grid layouts
* Custom sorting dropdown
* Interactive buttons
* Modern footer
* Empty states
* Responsive reading statistics

---

## 📱 Responsive Design

Book Vibe is designed to work across different devices.

### Mobile

```text
┌─────────────────┐
│     Navbar      │
├─────────────────┤
│                 │
│    Book Card    │
│                 │
├─────────────────┤
│    Book Card    │
│                 │
├─────────────────┤
│     Footer      │
└─────────────────┘
```

### Desktop

```text
┌─────────────────────────────────────────────┐
│                  Navbar                     │
├─────────────────────────────────────────────┤
│                                             │
│  Book 1    Book 2    Book 3    Book 4      │
│                                             │
├─────────────────────────────────────────────┤
│                  Footer                     │
└─────────────────────────────────────────────┘
```

---

## 🧠 Concepts Practiced

This project helped demonstrate several modern web development concepts.

### React

* Components
* Props
* State
* Hooks
* Context API
* Conditional Rendering
* List Rendering
* Event Handling
* Reusable Components

### TypeScript

* Interfaces
* Type aliases
* Union types
* Type-safe props
* Type-safe state
* Type-safe function parameters

### Next.js

* App Router
* Server Components
* Client Components
* Dynamic Routes
* Layouts
* `next/image`
* `notFound()`
* Metadata
* Route parameters

### Tailwind CSS

* Responsive design
* Flexbox
* CSS Grid
* Spacing
* Typography
* Hover effects
* Responsive breakpoints
* Modern UI design

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-vibe.git
```

### 2. Navigate to the project

```bash
cd book-vibe
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Runs the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production

```bash
npm start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Checks the project for code quality and linting issues.

---

## 🚀 Future Improvements

Possible future improvements for Book Vibe:

* 🔐 User authentication
* 🗄️ Database integration
* 🔎 Search functionality
* 🏷️ Category filtering
* ⭐ Rating filtering
* 📄 Pagination
* 🌙 Dark mode
* 👤 User profile
* ☁️ Cloud-based wishlist
* 🔔 Notifications
* 📱 Progressive Web App
* 🌐 External book API integration
* 📊 Advanced reading analytics

---

## 👨‍💻 Author

### Arham

Frontend Developer & Data Science Student

**Technologies & Skills**

```text
JavaScript
TypeScript
React
Next.js
Tailwind CSS
Python
Data Science
```

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning and portfolio purposes.

````

### GitHub header I recommend

For your actual repository, I would use this shorter, cleaner header:

```md
# 📚 Book Vibe

### A modern book discovery and reading management application built with Next.js, TypeScript & Tailwind CSS.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge" />
</p>

<p align="center">
  <b>Explore books • Track reading • Manage wishlist • View statistics</b>
</p>
````

This is better for your **portfolio/GitHub** because it immediately tells someone what **Book Vibe** is and which technologies you used.
