import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🚀 CI/CD Jenkins Demo</h1>
        <p>Automating builds and deployments with Jenkins</p>
      </header>

      <main className="main">
        <section className="card">
          <h2>📌 What is CI/CD?</h2>
          <p>
            <b>CI/CD (Continuous Integration and Continuous Delivery)</b> is a modern
            software development practice that automates code integration,
            testing, and deployment — ensuring faster and more reliable delivery.
          </p>
        </section>

        <section className="card">
          <h2>⚙️ Jenkins Pipeline</h2>
          <ul>
            <li>✅ Push code to GitHub</li>
            <li>✅ Jenkins pulls latest code</li>
            <li>✅ Build project using Vite/Node</li>
            <li>✅ Run automated tests</li>
            <li>✅ Deploy to server (Docker / AWS / EC2)</li>
          </ul>
        </section>

        <section className="card">
          <h2>🌟 Why Jenkins?</h2>
          <p>
            Jenkins is an open-source automation server that helps developers
            deliver software efficiently by automating repetitive tasks.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>Made with ❤️ for CI/CD Learning</p>
      </footer>
    </div>
  )
}

export default App
