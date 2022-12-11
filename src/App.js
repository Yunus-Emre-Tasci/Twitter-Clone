import React from 'react'

const App = () => {
  return (
    <div div className = 'flex min-h-screen mx-auto border max-w-7xl' >
      <div className='w-72 bg-blue-200'>Sidebar</div>
      <main className='flex-1 bg-purple-200'>Feed</main>
      <aside className='bg-green-200 w-80'>Timeline</aside>
    </div>
  )
}

export default App