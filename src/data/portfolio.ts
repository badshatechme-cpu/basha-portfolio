export const caseStudies = [
 {
  slug: "cqrs-cdc-read-optimization-digital-banking",
  title: "CQRS and CDC-Based Read Optimization for Digital Banking",
  summary:
    "Designed a CQRS-based architecture to separate read and write workloads, improve dashboard responsiveness, and reduce dependency on core transactional systems using Oracle GoldenGate and a read-optimized model.",
  tags: ["CQRS", "Oracle GoldenGate", "CDC", "Digital Banking"],

  businessContext:
    "Digital banking channels required fast and scalable access to customer data for dashboards, account summaries, and real-time experiences. Traditional synchronous integration with core systems introduced latency and scalability limitations, especially for read-heavy use cases.",

  overview:
    "Designed a CQRS-based architecture for digital banking workloads to separate read and write concerns, improve dashboard responsiveness, and reduce dependency on core transactional systems. The solution used Oracle GoldenGate for change data capture and a read-optimized store to support faster customer-facing experiences while preserving the integrity of the write path.",

  challenge:
    "The platform was handling both read and write workloads through tightly coupled enterprise paths. This resulted in high latency for read-heavy journeys, unnecessary load on core systems, limited scalability for customer-facing APIs, and dependency on upstream system performance.",

  approach:
    "A CQRS-based model was introduced to separate write operations from read operations. Writes continued through the enterprise transaction path, while data changes were captured using Oracle GoldenGate and replicated into a read-optimized store. Customer-facing APIs consumed this read model for faster and scalable data access.",

  keyDecisions:
    "Separated read and write responsibilities instead of optimizing a single path. Chose CDC-based replication over synchronous duplication to reduce coupling. Accepted eventual consistency for suitable use cases. Preserved the transactional system of record as the source of truth. Optimized the read model specifically for channel consumption patterns.",

  tradeoffs:
    "Introduced eventual consistency between write and read models. Added dependency on replication health and latency. Required careful identification of use cases where near-real-time consistency was acceptable. Increased operational complexity in maintaining the read model.",

  outcome:
    "Improved responsiveness for read-heavy journeys, reduced load on transactional systems, and enabled scalable digital channel experiences. Established a foundation for future read optimization and independent evolution of customer-facing APIs.",
},
  {
    slug: "microservices-modernization-digital-banking",
    title: "Microservices Modernization for Digital Banking",
    summary:
      "Designed and guided modernization of enterprise banking services using microservices, API-led integration, and scalable platform patterns.",
    tags: ["Microservices", "Spring Boot", "APIs", "Banking"],
    overview:
      "This initiative focused on modernizing enterprise banking capabilities through a scalable microservices architecture. The objective was to improve agility, scalability, integration flexibility, and long-term maintainability across digital banking services.",
    challenge:
      "The architecture needed to support growing digital demand, reduce dependency on tightly coupled systems, and create a more modular and resilient service landscape.",
    approach:
      "The solution adopted domain-oriented microservices, API-led integration, reusable platform capabilities, and structured governance to improve consistency and engineering speed.",
    outcome:
      "The modernization approach strengthened scalability, improved service decomposition, and created a stronger architecture foundation for future digital transformation initiatives.",
  },
  {
    slug: "centralized-configuration-distributed-services",
    title: "Centralized Configuration for Distributed Services",
    summary:
      "Established a centralized configuration approach to improve consistency, governance, deployment reliability, and operational control across services.",
    tags: ["Config Server", "Governance", "DevOps", "Architecture"],
    overview:
      "This initiative defined a centralized configuration strategy for distributed services to reduce drift, improve manageability, and support stronger governance across environments.",
    challenge:
      "Managing service-level configurations independently created inconsistency, operational overhead, and risk across multiple environments and teams.",
    approach:
      "A centralized configuration model was introduced to standardize configuration management, align release practices, and support better control over environment-specific settings.",
    outcome:
      "The result was improved consistency, better operational governance, and a cleaner foundation for scalable service management.",
  },
  {
    slug: "bff-dashboard-personalization-architecture",
    title: "BFF and Dashboard Personalization Architecture",
    summary:
      "Defined an architecture approach for customer-facing digital channels using orchestration, BFF patterns, and personalized data aggregation.",
    tags: ["BFF", "GraphQL", "Mobile Banking", "UX Architecture"],
    overview:
      "This case study focused on designing an architecture approach for customer-facing dashboard experiences using a backend-for-frontend model and personalized data orchestration.",
    challenge:
      "The dashboard experience required aggregation of multiple backend capabilities while keeping performance, flexibility, and customer experience as top priorities.",
    approach:
      "The architecture introduced a BFF-oriented model to tailor responses for digital channels, simplify frontend interactions, and support a more optimized user experience.",
    outcome:
      "This created a cleaner channel architecture, improved flexibility for personalization, and laid the groundwork for more efficient dashboard evolution.",
  },
];