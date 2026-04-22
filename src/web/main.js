import "./styles.css";

const app = document.querySelector("#app");

const caseData = {
  id: "ONB-1001",
  employeeName: "Jordan Taylor",
  country: "United Kingdom",
  startDate: "2026-05-01",
  contractType: "Employment",
  route: "onboarding_ops",
  status: "needs_review",
  riskFlags: ["Missing signature"],
  checklist: [
    { label: "Request received", done: true },
    { label: "Documents ingested", done: true },
    { label: "Rules check passed", done: false },
    { label: "Human review", done: false },
    { label: "Onboarding completed", done: false },
  ],
  summary:
    "Case ONB-1001 for Jordan Taylor\nCountry: United Kingdom\nStart date: 2026-05-01\nContract: Employment\nRoute: onboarding_ops\nFlags: Missing signature",
  followUp:
    "Hi Jordan Taylor, we are reviewing your onboarding information and need a few items before we can continue: Missing signature.",
};

app.innerHTML = `
  <main class="shell">
    <section class="hero">
      <div class="eyebrow">Codex-built demo</div>
      <h1>Onboarding Ops, but the boring bits are gone.</h1>
      <p class="lede">
        A human-in-the-loop automation concept for intake, validation, routing, drafting, and audit logging.
      </p>
      <div class="hero-actions">
        <span class="chip chip-accent">AI-assisted triage</span>
        <span class="chip">Rules-based checks</span>
        <span class="chip">Audit-ready</span>
      </div>
    </section>

    <section class="grid">
      <article class="panel spotlight">
        <div class="panel-header">
          <div>
            <p class="label">Live case</p>
            <h2>${caseData.id}</h2>
          </div>
          <span class="status ${caseData.status}">${caseData.status.replace("_", " ")}</span>
        </div>

        <div class="case-meta">
          <div><span>Employee</span><strong>${caseData.employeeName}</strong></div>
          <div><span>Country</span><strong>${caseData.country}</strong></div>
          <div><span>Start date</span><strong>${caseData.startDate}</strong></div>
          <div><span>Contract</span><strong>${caseData.contractType}</strong></div>
        </div>

        <div class="timeline">
          ${caseData.checklist
            .map(
              (item, idx) => `
                <div class="step ${item.done ? "done" : ""}">
                  <div class="dot">${item.done ? "✓" : idx + 1}</div>
                  <div>
                    <strong>${item.label}</strong>
                    <p>${item.done ? "Completed" : "Pending automation or review"}</p>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="panel">
        <p class="label">Risk flags</p>
        <h2>1 blocker detected</h2>
        <div class="flag-list">
          ${caseData.riskFlags.map((flag) => `<div class="flag">${flag}</div>`).join("")}
        </div>
        <p class="muted">
          The system would pause progression, route the case to onboarding ops, and draft a review-safe message.
        </p>
      </article>

      <article class="panel">
        <p class="label">AI summary</p>
        <pre>${caseData.summary}</pre>
      </article>

      <article class="panel">
        <p class="label">Draft follow-up</p>
        <div class="message">${caseData.followUp}</div>
      </article>
    </section>

    <section class="footer-note">
      <p>
        Built to show that onboarding operations can be turned into a clean workflow product instead of a manual chasing exercise.
      </p>
    </section>
  </main>
`;
