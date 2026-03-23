export const insights = [
  {
    slug: "microservices-in-digital-banking",
    title: "Microservices in Digital Banking: Beyond Technical Decomposition",
    summary:
      "A practical perspective on designing microservices for digital banking platforms with attention to scalability, governance, integration, and long-term maintainability.",
    category: "Architecture",
    intro:
      "Microservices in digital banking should not be treated as a simple system split based only on technical boundaries. In enterprise environments, architecture decisions must consider business domains, regulatory expectations, operational resilience, and long-term platform evolution.",
    section1Title: "Why decomposition alone is not enough",
    section1Body:
      "Many organizations start microservices initiatives by breaking a monolith into smaller services. While that can improve modularity, it does not automatically produce a good architecture. A strong microservices model must also define ownership, integration contracts, operational boundaries, failure handling, and deployment discipline.",
    section2Title: "What matters in banking platforms",
    section2Body:
      "In digital banking, microservices design must balance customer experience, performance, security, compliance, and maintainability. Service boundaries should align with capabilities that can evolve with reasonable independence while still supporting enterprise controls and integration consistency.",
    section3Title: "The architecture mindset",
    section3Body:
      "A mature architecture approach to microservices focuses not only on service decomposition, but on the surrounding ecosystem: observability, configuration governance, secure integration, resiliency, versioning, and platform standards. That is what turns a technical pattern into a sustainable operating model.",
  },
  {
    slug: "why-architecture-governance-matters",
    title: "Why Architecture Governance Still Matters in Modern Delivery",
    summary:
      "Modern engineering speed is important, but enterprise scale requires governance, consistency, and structured decision-making to stay sustainable.",
    category: "Governance",
    intro:
      "Architecture governance is sometimes misunderstood as a blocker to delivery speed. In reality, strong governance helps organizations scale engineering effectively by reducing drift, clarifying standards, and improving decision quality across teams.",
    section1Title: "Speed without structure creates entropy",
    section1Body:
      "Fast-moving teams can deliver quickly in the short term, but without governance the enterprise often accumulates inconsistency in design patterns, operational models, technology choices, and non-functional quality. Over time, that creates friction, duplication, and maintainability challenges.",
    section2Title: "Governance should enable, not block",
    section2Body:
      "Good architecture governance is not about excessive approval cycles. It is about creating guardrails, reusable standards, clear principles, and practical review mechanisms that help teams move faster with more confidence and less rework.",
    section3Title: "The real enterprise value",
    section3Body:
      "In large organizations, governance supports alignment across multiple squads, platforms, and initiatives. It improves traceability, reduces avoidable variation, and creates a stronger foundation for transformation programs that need both speed and control.",
  },
  {
    slug: "bff-for-customer-facing-platforms",
    title: "When a BFF Pattern Makes Sense for Customer-Facing Platforms",
    summary:
      "A look at how backend-for-frontend patterns can simplify channel integration, improve performance, and support more tailored digital experiences.",
    category: "Digital Channels",
    intro:
      "Backend-for-frontend patterns are especially useful when customer-facing channels need tailored responses, aggregated data, and faster iteration without overloading frontend applications with orchestration complexity.",
    section1Title: "Why channels need tailored backends",
    section1Body:
      "Mobile apps, web platforms, and other digital channels often have different interaction patterns, payload needs, and performance expectations. A shared backend can work for common services, but channel-specific orchestration often benefits from a BFF layer that shapes responses for the consumer.",
    section2Title: "Where the BFF adds value",
    section2Body:
      "A BFF can simplify frontend logic, aggregate data from multiple services, reduce over-fetching, and support channel-specific evolution. This becomes especially useful in dashboard scenarios, personalization journeys, and composite customer experiences.",
    section3Title: "Use it with discipline",
    section3Body:
      "A BFF should not become an uncontrolled aggregation layer with business logic scattered across channel teams. Its role should remain clear: optimize channel interaction, improve composition, and preserve clean boundaries with domain services and enterprise architecture standards.",
  },
];