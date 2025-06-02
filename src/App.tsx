const App = () => {
  return (
    <main className="w-2/5 mx-auto border border-black min-h-screen">
      {/* Headline */}
      <header className="pt-16 flex h-full w-full justify-center border border-amber-400">
        <div className="flex flex-col gap-y-1 w-auto">
          <h1 className="text-6xl font-bold">Hi, I'm Aditya <span className="text-7xl">👋</span></h1>
          <p className="text-xl font-semibold">Software Engineer. Love building apps with a strong focus on UI/UX. Consistent on Github.</p>
        </div>
        <div className="w-2/5 flex items-center justify-center h-full">
          <img src="/images/profile.jpg" className="w-36 h-36 rounded-full bg-cover bg-center"></img>
        </div>
      </header>

      {/* About */}
      <div className="flex flex-col pt-4">
        <h1 className="text-xl font-bold">About</h1>
      </div>
    </main>
  )
}

export default App