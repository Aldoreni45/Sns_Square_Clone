export default function AgentsSection() {
  return (
    <div className="agents-wrapper">

      {/* LEFT CATEGORY */}
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li>Information Processing</li>
          <li>Content & Communication</li>
          <li>Analytics & Decisioning</li>
          <li>Quality & Governance</li>
          <li>Operations & Automation</li>
          <li>Intelligence & Optimization</li>
        </ul>
      </div>

      {/* RIGHT CARDS */}
      <div className="agents-grid">

        {[
          {
            title: "Universal Summarizer Agent",
            desc: "Summarizes long documents into concise, actionable insights.",
          },
          {
            title: "Universal Document Classifier Agent",
            desc: "Automatically categorizes documents for organized storage and retrieval.",
          },
          {
            title: "General Data Extraction Agent",
            desc: "Transforms unstructured text into structured, actionable data.",
          },
          {
            title: "Contextual Answer Generation Agent",
            desc: "Generates accurate, cited answers from retrieved data for RAG.",
          },
        ].map((agent, i) => (
          <div key={i} className="agent-card">
            <h4>{agent.title}</h4>
            <p>{agent.desc}</p>

            <div className="agent-btns">
              <button className="primary">BOOK A DEMO</button>
              <button className="secondary">DETAILS</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
