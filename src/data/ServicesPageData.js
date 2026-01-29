const services = [
  {
    id: 1,
    title: "Smart Airport systems",
    subtitle: "Our Smart airport systems utilize advanced technologies",
    heroImage: "/ServicesPageImage/service1.png",
    content: {
      paragraphs: [
        "Our Smart airport systems utilize advanced technologies like IoT, AI, and biometric recognition to enhance operational efficiency and improve the passenger experience. They streamline processes such as check-in and security through automation and personalized mobile applications while utilizing predictive analytics to optimize resource allocation. Sustainability initiatives, including energy management and waste reduction, are integrated to minimize environmental impact. Collaboration among stakeholders and the introduction of contactless solutions further drive innovation, though challenges remain in data privacy, integration costs, and staff training.",
      
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature2.png"],
      subparagraphs: [
        "Our system aim to create a more seamless, secure, and efficient travel experience."
      ]
    },
  },

  {
    id: 2,
    title: "smart sea port systems",
    subtitle: "Expert guidance for digital transformation",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.Strategic consulting for scalable systems.",
        "Architecture planning and optimization.",
        "Enterprise-grade solutions.",
        "Performance-driven technology choices.",
        "Long-term IT vision alignment."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Cloud migration strategies.",
        "System modernization.",
        "Technical audits.",
        "Risk assessment.",
        "Digital roadmaps."
      ]
    },
    sidebar: {
      servicesList: [
        "IT Strategy",
        "Cloud Consulting",
        "System Architecture",
        "Digital Roadmaps",
        "Risk Analysis"
      ]
    }
  },

  {
    id: 3,
    title: "Web Development",
    subtitle: "Modern, scalable, and high-performance websites",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Responsive UI development.",
        "SEO-friendly architecture.",
        "Performance optimization.",
        "Secure frontend solutions.",
        "Scalable backend systems."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "React & Next.js",
        "API integrations",
        "Headless CMS",
        "Accessibility compliance",
        "Code maintainability"
      ]
    },
    sidebar: {
      servicesList: [
        "Frontend Development",
        "Backend Development",
        "API Design",
        "CMS Integration",
        "SEO Optimization"
      ]
    }
  },

  {
    id: 4,
    title: "Mobile App Development",
    subtitle: "High-quality apps for iOS and Android",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Cross-platform solutions.",
        "Native performance.",
        "User-centric design.",
        "Secure mobile architecture.",
        "App store deployment."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "React Native",
        "Flutter",
        "Swift & Kotlin",
        "App maintenance",
        "Push notifications"
      ]
    },
    sidebar: {
      servicesList: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "UI/UX Design",
        "App Maintenance"
      ]
    }
  },

  {
    id: 5,
    title: "Cloud Solutions",
    subtitle: "Reliable and scalable cloud infrastructure",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Cloud-native architecture.",
        "High availability systems.",
        "Secure deployments.",
        "Cost optimization.",
        "Disaster recovery."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "AWS",
        "Azure",
        "Google Cloud",
        "DevOps pipelines",
        "Monitoring & logging"
      ]
    },
    sidebar: {
      servicesList: [
        "Cloud Migration",
        "DevOps",
        "Infrastructure as Code",
        "Monitoring",
        "Security"
      ]
    }
  },

  {
    id: 6,
    title: "Cybersecurity Services",
    subtitle: "Protecting systems and sensitive data",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Threat detection.",
        "Security audits.",
        "Compliance solutions.",
        "Incident response.",
        "Risk mitigation."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Penetration testing",
        "Security monitoring",
        "Data encryption",
        "Access control",
        "Compliance standards"
      ]
    },
    sidebar: {
      servicesList: [
        "Security Audits",
        "Threat Monitoring",
        "Compliance",
        "Incident Response",
        "Risk Management"
      ]
    }
  },

  {
    id: 7,
    title: "IT Infrastructure",
    subtitle: "Robust and future-proof IT foundations",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Network architecture.",
        "Hardware optimization.",
        "System scalability.",
        "Infrastructure monitoring.",
        "Business continuity."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Server management",
        "Network security",
        "Load balancing",
        "Storage solutions",
        "Backup systems"
      ]
    },
    sidebar: {
      servicesList: [
        "Network Design",
        "Server Management",
        "Monitoring",
        "Disaster Recovery",
        "Scalability Planning"
      ]
    }
  },

  {
    id: 8,
    title: "Data & Analytics",
    subtitle: "Turning data into actionable insights",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Data-driven decision making.",
        "Business intelligence tools.",
        "Analytics dashboards.",
        "Predictive modeling.",
        "Data visualization."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Data pipelines",
        "ETL processes",
        "Reporting systems",
        "Machine learning",
        "KPI tracking"
      ]
    },
    sidebar: {
      servicesList: [
        "Data Analytics",
        "Business Intelligence",
        "Reporting",
        "Machine Learning",
        "Data Visualization"
      ]
    }
  },

  {
    id: 9,
    title: "Software Products",
    subtitle: "We focus on the best practices IT solutions and services",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Lorem ipsum is simply free text used by copytyping refreshing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis aute irure dolor in reprehenderit in voluptate.",
        "Excepteur sint occaecat cupidatat non proident.",
        "Sed ut perspiciatis unde omnis iste natus error."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.",
        "Ut enim ad minima veniam quis nostrum exercitationem.",
        "Nemo enim ipsam voluptatem quia voluptas sit.",
        "Temporibus autem quibusdam et aut officiis.",
        "Itaque earum rerum hic tenetur a sapiente."
      ]
    },
    sidebar: {
      servicesList: [
        "Project & Strategy",
        "Technology Consulting",
        "Software Development",
        "Software Production",
        "Cybersecurity & IT",
        "IT Infrastructure"
      ]
    }
  },


  {
    id: 10,
    title: "Software Products",
    subtitle: "We focus on the best practices IT solutions and services",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Lorem ipsum is simply free text used by copytyping refreshing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis aute irure dolor in reprehenderit in voluptate.",
        "Excepteur sint occaecat cupidatat non proident.",
        "Sed ut perspiciatis unde omnis iste natus error."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.",
        "Ut enim ad minima veniam quis nostrum exercitationem.",
        "Nemo enim ipsam voluptatem quia voluptas sit.",
        "Temporibus autem quibusdam et aut officiis.",
        "Itaque earum rerum hic tenetur a sapiente."
      ]
    },
    sidebar: {
      servicesList: [
        "Project & Strategy",
        "Technology Consulting",
        "Software Development",
        "Software Production",
        "Cybersecurity & IT",
        "IT Infrastructure"
      ]
    }
  },


  {
    id: 11,
    title: "Software Products",
    subtitle: "We focus on the best practices IT solutions and services",
    heroImage: "/ServicesPageImage/service.png",
    content: {
      paragraphs: [
        "Lorem ipsum is simply free text used by copytyping refreshing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis aute irure dolor in reprehenderit in voluptate.",
        "Excepteur sint occaecat cupidatat non proident.",
        "Sed ut perspiciatis unde omnis iste natus error."
      ],
      gallery: ["/ServicesPageImage/feature1.png", "/ServicesPageImage/feature.png"],
      subparagraphs: [
        "Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.Neque porro est qui dolorem ipsum quia quaed inventore.",
        "Ut enim ad minima veniam quis nostrum exercitationem.",
        "Nemo enim ipsam voluptatem quia voluptas sit.",
        "Temporibus autem quibusdam et aut officiis.",
        "Itaque earum rerum hic tenetur a sapiente."
      ]
    },
    sidebar: {
      servicesList: [
        "Project & Strategy",
        "Technology Consulting",
        "Software Development",
        "Software Production",
        "Cybersecurity & IT",
        "IT Infrastructure"
      ]
    }
  },

  
];

export default services;
