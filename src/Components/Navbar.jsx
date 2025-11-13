export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Tasks</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </div>
    </nav>
  )
}