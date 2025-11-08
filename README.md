🚀 React Tasks Showcase

This project is a collection of practical React tasks that cover both fundamental and advanced concepts in React.
It serves as a hands-on learning project demonstrating how different React hooks, patterns, and techniques are implemented in real-world components.
🧩 Project Overview

This application showcases 11 unique React tasks, each demonstrating a specific concept or feature such as:

✅ useState, useEffect, useReducer, useRef, useMemo, useCallback hooks

✅ React Context API for global state management

✅ Custom Hooks & Higher Order Components (HOC)

✅ Dynamic Routing & Protected Routes (using React Router)

✅ Lazy Loading Components with Suspense

✅ Programmatic Navigation using useNavigate & useLocation

✅ CRUD operations (Create, Read, Update, Delete)

✅ API Integration using fetch()

✅ Authentication-based access

Each task focuses on a distinct concept and is navigable through the app’s centralized “All React Tasks” page.

🏠 App Navigation
Main Components:

Home Page → Displays links to all tasks.

Login Page → Users must log in to access protected routes (e.g., Task 10).

AllTasks Page → Serves as the main dashboard listing all implemented React tasks.

🧠 Implemented Tasks Summary
Task No.	Concept / Title	Key React Features Used
Task 1–2	Increment / Decrement & Show-Hide Features	useState
Task 3	Form Handling in React	useState, onSubmit, controlled inputs
Task 4	CRUD App	useState
Task 5	Fetching API Data (Drinks API)	useEffect, fetch()
Task 6	useReducer with API CRUD	useReducer, API integration
Task 7	Render Count Tracker	useRef
Task 8	Performance Optimization	useMemo, useCallback, React.memo
Task 9	Programmatic Navigation	useNavigate, useLocation
Task 10	Protected Route + Dynamic Routing	useAuth, PrivateRoute, useParams, useEffect
Task 11	Higher Order Components & Custom Hooks	HOC, useCounter, useTheme
🔑 Highlighted Features
🔹 Lazy Loading (Suspense)

Components like Task 5 are lazy-loaded using React’s Suspense for performance optimization.

const LazyTask5 = React.lazy(() => import('./Task5'));
<Suspense fallback={<h2>Loading...</h2>}>
    <LazyTask5 />
</Suspense>

🔹 Authentication System

Implemented using React Context (AuthContext)

Login and Logout functionality

Protected route: Task 10 (User Details page)

🔹 Dynamic Routing

Task 10 dynamically navigates to /task10/:id showing user-specific data fetched from an API.

🔹 HOC (Higher Order Component)

Reusable logic for counting clicks and hovers.

function enhancedCounter(WrappedComponent) {
    return function EnhancedComponent() {
        const [count, setCount] = useState(0);
        const increment = () => setCount(count + 1);
        return <WrappedComponent count={count} increment={increment} />;
    };
}

🔹 Custom Hooks

useCounter → Manages counter logic

useTheme → Handles light/dark theme switching

💻 Technologies Used

React.js (Vite Build Tool)

React Router DOM

JavaScript (ES6+)

HTML5, CSS3 (Inline & External Styling)

Context API & Custom Hooks

REST API Integration (JSONPlaceholder)

🧱 Folder Structure
React-Tasks/
│
├── src/
│   ├── components/
│   │   ├── Task1.jsx
│   │   ├── Task2.jsx
│   │   ├── ...
│   │   ├── Task11.jsx
│   │
│   ├── customhoks/
│   │   ├── useCounter.js
│   │   ├── themeSwitching.js
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── UserContext.js
│   │   ├── ProductContext.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
└── package.json

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Ganesh7509/React-Tasks.git

2️⃣ Navigate to the Project
cd React-Tasks

3️⃣ Install Dependencies
npm install

4️⃣ Start the App
npm run dev

🌐 Live Demo

👉 Visit Deployed Site :https://react-tasks-f5z9.vercel.app/

🧑‍💻 Developer

👤 Name: Ganesh Kunde
🎓 Background: B.Tech 
💼 Skills: HTML, CSS, JavaScript, React.js, Git, GitHub,Node js express js mongo db typescript redux
🔗 GitHub: Ganesh7509

🔗 LinkedIn: https://www.linkedin.com/in/ganesh-kunde-73b534229

🏁 Conclusion

This project is a complete demonstration of core to advanced React concepts.
It shows a strong understanding of component architecture, reusability, hooks, routing, and state management — making it an ideal showcase for recruiters.

