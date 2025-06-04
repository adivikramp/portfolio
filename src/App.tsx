import CompanyCard from "./components/CompanyCard"
import { companies } from "./data/companies"

const App = () => {
  return (
    <main className="w-2/5 mx-auto min-h-screen">
      {/* Headline */}
      <header className="pt-16 flex h-full w-full justify-center">
        <div className="flex flex-col gap-y-2 w-auto">
          <h1 className="text-6xl font-bold">Hi, I'm Aditya <span className="text-7xl">👋</span></h1>
          <p className="text-xl font-semibold">Software Engineer. Love building apps with a strong focus on UI/UX. Consistent on Github.</p>
        </div>
        <div className="w-2/5 flex items-center justify-center h-full">
          <img src="/images/profile.jpg" className="w-36 h-36 rounded-full bg-cover bg-center"></img>
        </div>
      </header>

      {/* About */}
      <div className="flex flex-col pt-8 gap-y-2">
        <h1 className="text-xl font-bold">About</h1>
        <p className="text-sm tracking-wide">I am currently working as a Software Engineer at Shopvana and contributing to open source in my free time. In the past, I pursued a degree in computer science. I am constantly building new projects to learn new skills, and competing in several hackathons.</p>
      </div>

      {/* Experience */}
      <div className="flex flex-col pt-8 gap-y-2">
        <h1 className="text-xl font-bold">Work Experience</h1>
        <div className="flex flex-col gap-y-4 mt-2">
          {/* Item-1 */}
          {companies.map(company => (
            <CompanyCard key={company.id} id={company.id} logo={company.logo} name={company.name} role={company.role} description={company.description} date={company.date} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App