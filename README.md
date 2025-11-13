Component Overview
Task Manager
Add new tasks with input field

Mark tasks as completed/incomplete

Filter tasks (All, Active, Completed)

Delete tasks

Persistent storage using localStorage

Posts Display
Fetch posts from JSONPlaceholder API

Search functionality

Load more pagination

Responsive grid layout

Theme System
Light/Dark mode toggle

Persistent theme preference

Tailwind CSS dark mode classes

Custom Hooks
useLocalStorage
Persists state to localStorage automatically:

jsx
const [tasks, setTasks] = useLocalStorage('tasks', [])
API Integration
Uses JSONPlaceholder for demo data:

GET /posts - Fetch blog posts

Search functionality with query parameters

Pagination with _page and _limit parameters

Styling
Tailwind CSS for utility-first styling

Responsive design for mobile, tablet, desktop

Dark mode support with CSS classes

Custom components with variant props

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Deployment
The app can be deployed to any static hosting service:

Vercel

Netlify

GitHub Pages

Firebase Hosting

Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Create a Pull Request

License
MIT License - feel free to use this project for learning and development.