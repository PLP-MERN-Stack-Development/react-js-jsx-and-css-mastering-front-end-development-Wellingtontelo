import { ThemeProvider } from './Context/ThemeContext.jsx'
import Layout from './Components/Layout.jsx'
import TaskManager from './pages/TaskManager.jsx'
import Posts from './pages/Posts.jsx'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="space-y-8">
          <TaskManager />
          <Posts />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App