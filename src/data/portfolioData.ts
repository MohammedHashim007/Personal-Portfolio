export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  challenges: string;
  results: string[];
  metrics: string;
  github: string;
  demo: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; level: number; icon: string }[];
}
export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mohammed Hashim",
    logo: "MOHAMMED.HASHIM",
    title: "Business Intelligence & Data Analyst",
    subtitle: "Architecting Enterprise Data Pipelines & Predictive AI Solutions",
    bio: "Passionate BI Specialist & Machine Learning Engineer with Hands on experience in converting complex unstructured data into high-value business insights, predictive automated pipelines, and executive dashboards.",
    location: "Dubai/UAE",
    email: "mohammedhashim68199@gmail.com",
    phone: "+971 564745749",
    github: "https://github.com/MohammedHashim007",
    linkedin: "https://www.linkedin.com/in/mohammedhashim03/",
    resumeUrl: "Hashim resume.pdf"
  },
  skills: [
    {
      category: "Data Analytics & BI",
      items: [
        { name: "Power BI", level: 95, icon: "BarChart3" },
        { name: "SQL (PostgreSQL/T-SQL)", level: 92, icon: "Database" },
        { name: "Excel / Power Query", level: 90, icon: "FileSpreadsheet" }
      ]
    },
    {
      category: "Data Engineering & Cloud",
      items: [
        { name: "Python", level: 90, icon: "Code2" },
        { name: "PySpark", level: 82, icon: "Zap" },
        { name: "AWS (S3/Redshift)", level: 85, icon: "Cloud" },
        { name: "MongoDB", level: 78, icon: "Server" }
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Pandas & NumPy", level: 92, icon: "Binary" },
        { name: "Scikit-Learn", level: 85, icon: "Brain" },
        { name: "Generative AI / LLMs", level: 80, icon: "Cpu" },
        { name: "Git / CI/CD", level: 88, icon: "GitBranch" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "readmission-pred",
      title: "Hospital Readmission Prediction AI",
      category: "Machine Learning & Healthcare",
      description: "Predictive clinical pipeline forecasting 30-day patient readmissions using XGBoost and LightGBM.",
      problem: "Healthcare system suffered $4.2M annual penalties due to unpredicted 30-day readmission spikes.",
      solution: "Engineered an end-to-end Machine Learning pipeline processing 100,000+ EHR records with Predictive analysis in Machine learning.",
      techStack: ["Python", "Numpy", "Pandas", "Scikit-Learn", "Power BI", "SQL", "HTML", "CSS", "JavaScript"],
      challenges: "Prepared and analyzed 100,000+ patient records, applying data cleaning, feature engineering, and preprocessing techniques to build reliable readmission prediction models.",
      results: [
        "Reduced 30-day readmissions by 18% in initial 6 months.",
        "Achieved 0.89 ROC-AUC score across validation cohorts.",
        "Saved an estimated $1.1M in Medicare regulatory fines."
      ],
      metrics: "18% Readmission Reduction",
      github: "https://github.com/MohammedHashim007/hospital-readmission-prediction",
      demo: "https://personal-portfolio-beta-murex.vercel.app/#projects",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "it-expenditure",
      title: "Enterprise IT Expenditure Analysis ",
      category: "Business Intelligence & Data Analysis",
      description: "Real-time cost intelligence platform optimizing global IT infrastructure and SaaS spend.",
      problem: "Multinational firm lacked unified visibility into $45M IT spend scattered across 14 global subsidiaries.",
      solution: "Built an interactive Power BI dashboard with KPI cards, monthly trends, business-area analysis, cost-element breakdowns, and country-level variance analysis.",
      techStack: ["Power BI", "DAX", "SQL", "Python", "KPIs", "Power Query"],
      challenges: "Creating meaningful KPIs and variance calculations while making the dashboard easy to filter and analyze.",
      results: [
        "Analyzed 555.7M in total actual expenditure.",
        "Tracked 344.7M in plan vs actual variance.",
        "Created 10+ KPIs and visuals for expenditure analysis."
      ],
      metrics: "$3.3M Cost Savings Identified",
      github: "https://github.com/MohammedHashim007/IT-Expenditure-Analysis-Dashboard",
      demo: "https://demo.finops-analytics.io",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "customer-churn",
      title: "Customer Churn Engine",
      category: "Predictive Analytics",
      description: "Machine learning application for predicting customer churn and identifying customers at risk of leaving.",
      problem: "Telecom operator faced 4.2% monthly subscriber churn without early warning indicators.",
      solution: "Performed data analysis and preprocessing, trained a machine learning classification model, and deployed the prediction model through a Streamlit application.",
      techStack: ["Python", " NumPy ", "Pandas", "Scikit-Learn", "SQL", "FastAPI"],
      challenges: "Handling categorical data, selecting relevant features, and improving model prediction performance.",
      results: [
        "Increased targeted retention offer acceptance from 12%.",
        "Decreased overall monthly subscriber churn by 1.2%.",
        "Generated $850K annualized retained ARR."
      ],
      metrics: "12% Offer Acceptance Rate",
      github: "https://github.com/alexthorne/telecom-churn-predictor",
      demo: "https://customer-churn-prediction-o47ba74f7dwwms5yz97mvu.streamlit.app/",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200"
    }
  ] as Project[],
  experiences: [
    {
      company: "VCodez",
      role: "Data Scientist trainee",
      period: "2025",
      location: "Chennai, India",
      achievements: [
        "Developed and evaluated machine learning models using Python and Scikit-learn, achieving up to 85%+ model accuracy through data preprocessing, feature engineering, and model tuning..",
        "Built interactive Power BI dashboards with 10+ KPIs and business metrics, using Power Query, DAX, and data modeling to provide clear insights into trends and performance.",
        "Performed data analysis using SQL, Python, and Excel, transforming raw datasets into meaningful insights and supporting data-driven decision-making and reducing manual analysis time by approximately 20%."
      ]
    },

    /*
    {
      company: "Global Data Dynamics",
      role: "Data Analyst & Analytics Engineer",
      period: "2021 - 2023",
      location: "Boston, MA",
      achievements: [
        "Built automated python data cleansing and validation suites capturing 99.4% data anomaly rates before DB ingestion.",
        "Designed star-schema data models in PostgreSQL for real-time financial transaction tracking.",
        "Mentored 4 junior analysts on advanced DAX calculations and statistical modeling techniques."
      ]
    }
    */
  ] as Experience[],
  education: [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "MIET Engineering College, India",
      period: "2021 - 2025",
      honors: "Graduate with 8.00 CGPA | First Class"
    }
  ],

  
  certifications: [
    /*
    { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "2023" },
    { title: "AWS Certified Data Analytics - Specialty", issuer: "Amazon Web Services", date: "2023" },
    { title: "Databricks Certified Associate Developer for Apache Spark", issuer: "Databricks", date: "2022" }*/
  ]as Certification[] // <-- Add explicit type casting here
  
};
