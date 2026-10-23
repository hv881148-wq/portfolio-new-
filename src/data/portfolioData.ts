/**
 * Centralized Portfolio Data & Configuration
 * Source of truth: Harshit Verma ATS Resume (/public/assets/aistudio/Harshit_Verma_Resume_ATS_1ec9a430.pdf)
 * Strictly factual: No invented employment history, dates, or credentials.
 */

export type Language = 'en' | 'hi';

export interface ProjectItem {
  id: string;
  title: { en: string; hi: string };
  status: { en: string; hi: string };
  categoryKey: 'all' | 'analytics' | 'finance' | 'bi';
  category: { en: string; hi: string };
  technologies: string[];
  summary: { en: string; hi: string };
  deliverables: { en: string[]; hi: string[] };
  methodology: { en: string; hi: string };
  impact: { en: string; hi: string };
  hasLiveDemo: boolean;
  demoUrl?: string;
  hasSourceRepo: boolean;
  repoUrl?: string;
}

export interface SkillCategory {
  name: { en: string; hi: string };
  icon: string;
  items: {
    name: string;
    description: { en: string; hi: string };
    levelTag?: { en: string; hi: string };
  }[];
}

export interface JourneyItem {
  id: string;
  role: { en: string; hi: string };
  organization: { en: string; hi: string };
  location: { en: string; hi: string };
  period: { en: string; hi: string };
  type: 'education' | 'experience';
  score?: string;
  description: { en: string; hi: string };
  keyHighlights: { en: string[]; hi: string[] };
}

export interface CertificationItem {
  id: string;
  title: { en: string; hi: string };
  issuer: { en: string; hi: string };
  date: { en: string; hi: string };
  type: { en: string; hi: string };
  description: { en: string; hi: string };
  skillsLearned: string[];
  credentialStatus: { en: string; hi: string };
}

export interface AchievementItem {
  id: string;
  title: { en: string; hi: string };
  organization: { en: string; hi: string };
  year: string;
  description: { en: string; hi: string };
  category: { en: string; hi: string };
}

const getAssetUrl = (assetPath: string) => {
  const base = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${cleanBase}${cleanPath}`;
};

export const portfolioConfig = {
  // Identity
  fullName: "Harshit Verma",
  preferredName: "Harshit",
  monogram: "HV", // Configurable monogram: default "HV" from uploaded resume
  monogramAlt: "AR", // Alternate option supported
  
  // Availability status (configurable)
  openToOpportunities: true,
  
  // Resume assets
  resumePdfUrl: getAssetUrl("assets/aistudio/Harshit_Verma_Resume_ATS_1ec9a430.pdf"),
  resumeFileName: "Harshit_Verma_Resume_ATS.pdf",
  
  // Verified contact information
  email: "hv881148@gmail.com",
  phone: "+91 8707093720",
  phoneRaw: "8707093720",
  location: {
    en: "Kanpur, Uttar Pradesh, India",
    hi: "कानपुर, उत्तर प्रदेश, भारत"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/harshit-verma-b33a3535a",
    linkedinDisplay: "linkedin.com/in/harshit-verma-b33a3535a",
    github: "https://github.com/harshitverma", // Configurable
    whatsapp: "https://wa.me/918707093720",
  },

  // Titles & Headings
  title: {
    en: "Business Analytics & Finance Professional",
    hi: "बिजनेस एनालिटिक्स एवं फाइनेंस प्रोफेशनल"
  },
  headline: {
    en: "Transforming financial data into actionable business intelligence.",
    hi: "वित्तीय डेटा को व्यावहारिक व्यावसायिक निर्णयों में बदलना।"
  },
  shortIntro: {
    en: "Second-year BBA Finance student at Allenhouse Business School with specialized focus on business analysis, data-driven decision-making, financial modeling, and process improvement using Excel, Power BI, SQL, Python, and Tableau.",
    hi: "एलेनहाउस बिजनेस स्कूल में बीबीए फाइनेंस के छात्र, जो एक्सेल, पावर बीआई, एसक्यूएल, पायथन और झांकी (टेब्लो) के माध्यम से बिजनेस एनालिसिस, डेटा-आधारित निर्णय और प्रक्रिया सुधार में विशेषज्ञता प्राप्त कर रहे हैं।"
  },

  // About Section Detailed Content
  about: {
    narrative: {
      en: [
        "I am a business and technology student currently pursuing my BBA in Finance (Second Year) at Allenhouse Business School, Kanpur. My professional drive lies at the intersection of quantitative finance, computational data analysis, and managerial decision systems.",
        "Rather than treating numbers as static balance sheets, I approach business data as an operational narrative. Using Microsoft Excel, Power BI, SQL, Python, and Tableau, I work to unpack variance, detect margin compression, evaluate customer purchasing behavior, and build transparent analytical workflows.",
        "Recognizing that modern enterprise finance requires technological fluency, I have actively expanded into applied AI workflows and sustainable business methodologies through IBM SkillsBuild credentials and national capital markets competitions like NISM's National Financial Literacy Quiz."
      ],
      hi: [
        "मैं एलेनहाउस बिजनेस स्कूल, कानपुर में बीबीए फाइनेंस (द्वितीय वर्ष) का छात्र हूँ। मेरी व्यावसायिक रुचि वित्तीय प्रबंधन, परिमाणात्मक डेटा विश्लेषण और प्रबंधकीय निर्णय प्रणालियों के संगम पर केंद्रित है।",
        "डेटा को केवल बैलेंस शीट की संख्या मानने के बजाय, मैं इसे एक व्यावसायिक कहानी के रूप में देखता हूँ। माइक्रोसॉफ्ट एक्सेल, पावर बीआई, एसक्यूएल, पायथन और टेब्लो का उपयोग करके मैं बजट भिन्नता, लाभ मार्जिन, ग्राहक व्यवहार और पारदर्शी रिपोर्टिंग सिस्टम का विश्लेषण करता हूँ।",
        "आधुनिक उद्यमों में तकनीक की अनिवार्यता को समझते हुए, मैंने आईबीएम स्किल्सबिल्ड से एआई अनुप्रयोगों और सतत प्रौद्योगिकियों में प्रमाणन प्राप्त किया है तथा एनआईएसएम (NISM) की राष्ट्रीय वित्तीय साक्षरता प्रतियोगिता में सक्रिय भागीदारी की है।"
      ]
    },
    corePillars: [
      {
        title: { en: "Data-Driven Decision Making", hi: "डेटा-आधारित निर्णय निर्माण" },
        desc: { 
          en: "Synthesizing raw transactional datasets into clear visual summaries and executive recommendations.", 
          hi: "कच्चे डेटा को स्पष्ट विज़ुअल रिपोर्ट और रणनीतिक व्यावसायिक सुझावों में रूपांतरित करना।" 
        }
      },
      {
        title: { en: "Financial & Variance Analysis", hi: "वित्तीय एवं भिन्नता विश्लेषण" },
        desc: { 
          en: "Tracking budget-to-actual divergences, analyzing expense ratios, and uncovering cost-containment opportunities.", 
          hi: "बजट बनाम वास्तविक खर्चों का तुलनात्मक अध्ययन, लागत संरचना और बचत के अवसरों की पहचान।" 
        }
      },
      {
        title: { en: "Modern BI & AI Tools", hi: "आधुनिक बीआई एवं एआई टूल्स" },
        desc: { 
          en: "Leveraging Power BI dashboards, SQL relational querying, and AI productivity platforms to accelerate research.", 
          hi: "पावर बीआई डैशबोर्ड्स, एसक्यूएल डेटाबेस क्वेरी और एआई टूल्स से शोध व विश्लेषण को तेज करना।" 
        }
      }
    ]
  },

  // Career & Academic Timeline
  journey: [
    {
      id: "j-1",
      role: { 
        en: "BBA in Finance (Second Year)", 
        hi: "बीबीए फाइनेंस (द्वितीय वर्ष)" 
      },
      organization: { 
        en: "Allenhouse Business School", 
        hi: "एलेनहाउस बिजनेस स्कूल" 
      },
      location: { 
        en: "Kanpur, Uttar Pradesh", 
        hi: "कानपुर, उत्तर प्रदेश" 
      },
      period: { 
        en: "2024 — Expected 2028", 
        hi: "2024 — संभावित 2028" 
      },
      type: "education",
      score: "Graduating 2028",
      description: {
        en: "Undergraduate curriculum covering corporate finance, financial accounting, business statistics, organizational analysis, and data-driven management.",
        hi: "कॉरपोरेट फाइनेंस, वित्तीय लेखांकन, व्यावसायिक सांख्यिकी, संगठनात्मक विश्लेषण और डेटा प्रबंधन का स्नातक पाठ्यक्रम।"
      },
      keyHighlights: {
        en: [
          "Specialization in business analysis, data-driven strategy, and process optimization.",
          "Practical modeling in Excel, financial statement interpretation, and variance tracking.",
          "Participated in National Financial Literacy Quiz 2026 (NISM College Round)."
        ],
        hi: [
          "बिजनेस एनालिसिस, डेटा-आधारित रणनीति और प्रक्रिया सुधार में विशेषज्ञता।",
          "एक्सेल में व्यावहारिक वित्तीय मॉडलिंग, वित्तीय विवरणों का विश्लेषण और भिन्नता ट्रैकिंग।",
          "राष्ट्रीय वित्तीय साक्षरता प्रश्नोत्तरी 2026 (एनआईएसएम कॉलेज राउंड) में प्रतिभागिता।"
        ]
      }
    },
    {
      id: "j-2",
      role: { 
        en: "Senior Secondary Education (Class XII)", 
        hi: "इंटरमीडिएट (कक्षा 12)" 
      },
      organization: { 
        en: "KR Education Center", 
        hi: "केआर एजुकेशन सेंटर" 
      },
      location: { 
        en: "Kanpur, Uttar Pradesh", 
        hi: "कानपुर, उत्तर प्रदेश" 
      },
      period: { 
        en: "2023 — 2025", 
        hi: "2023 — 2025" 
      },
      type: "education",
      score: "74%",
      description: {
        en: "Completed senior secondary school certificate with rigorous coursework in business, mathematics, and analytical concepts.",
        hi: "व्यावसायिक, गणितीय और विश्लेषणात्मक विषयों में उत्कृष्ट अंकों के साथ इंटरमीडिएट परीक्षा उत्तीर्ण।"
      },
      keyHighlights: {
        en: [
          "Graduated with 74% aggregate score.",
          "Built solid foundation in analytical reasoning and quantitative metrics."
        ],
        hi: [
          "74% प्राप्तांक के साथ उत्तीर्ण।",
          "विश्लेषणात्मक तर्क और परिमाणात्मक समझ की मजबूत नींव स्थापित की।"
        ]
      }
    },
    {
      id: "j-3",
      role: { 
        en: "Secondary School Certificate (Class X)", 
        hi: "हाईस्कूल (कक्षा 10)" 
      },
      organization: { 
        en: "KR Education Center", 
        hi: "केआर एजुकेशन सेंटर" 
      },
      location: { 
        en: "Kanpur, Uttar Pradesh", 
        hi: "कानपुर, उत्तर प्रदेश" 
      },
      period: { 
        en: "2021 — 2023", 
        hi: "2021 — 2023" 
      },
      type: "education",
      score: "79%",
      description: {
        en: "Secondary educational certification establishing strong fundamentals in mathematics, computer applications, and languages.",
        hi: "गणित, कंप्यूटर अनुप्रयोग और मुख्य विषयों में सुदृढ़ शैक्षणिक आधार के साथ हाईस्कूल उत्तीर्ण।"
      },
      keyHighlights: {
        en: [
          "Secured 79% aggregate marks.",
          "Demonstrated active involvement in school academic and co-curricular programs."
        ],
        hi: [
          "79% अंकों के साथ उत्तीर्ण।",
          "शैक्षणिक व सह-पाठ्यचर्या गतिविधियों में निरंतर सक्रियता।"
        ]
      }
    }
  ] as JourneyItem[],

  // Technical & Analytical Skills
  skillCategories: [
    {
      name: { en: "Data & Analytics", hi: "डेटा एवं एनालिटिक्स" },
      icon: "BarChart3",
      items: [
        { 
          name: "Microsoft Excel", 
          description: { 
            en: "PivotTables, complex lookups (XLOOKUP/INDEX-MATCH), summary metrics, data cleaning & scenario modeling.", 
            hi: "पिवट टेबल, एडवांस्ड लुकअप्स, डेटा क्लीनिंग, समरी मेट्रिक्स और सिनेरियो मॉडलिंग।" 
          } 
        },
        { 
          name: "Power BI", 
          description: { 
            en: "Interactive business dashboards, data model relationships, KPI cards, DAX expressions.", 
            hi: "इंटरैक्टिव डैशबोर्ड्स, डेटा मॉडल रिलेशनशिप्स, केपीआई कार्ड्स और डीएएक्स।" 
          } 
        },
        { 
          name: "SQL", 
          description: { 
            en: "Relational database queries, multi-table JOINs, conditional aggregations (GROUP BY, HAVING), segmentation.", 
            hi: "रिलेशनल डेटाबेस क्वेरी, जॉइन्स, एग्रीगेशन और कस्टमर सेगमेंटेशन।" 
          } 
        },
        { 
          name: "Python", 
          description: { 
            en: "Foundational programming for data processing, pandas, statistical analysis, and scripting.", 
            hi: "डेटा प्रोसेसिंग, पांडास, सांख्यिकीय विश्लेषण और ऑटोमेशन स्क्रिप्ट्स।" 
          } 
        },
        { 
          name: "Tableau", 
          description: { 
            en: "Visual analytics, interactive dashboards, dimensional breakdowns, trend mapping.", 
            hi: "विज़ुअल एनालिटिक्स, ट्रेंड मैपिंग और इंटरैक्टिव बिजनेस विज़ुअलाइज़ेशन।" 
          } 
        }
      ]
    },
    {
      name: { en: "Business & Finance", hi: "बिजनेस एवं फाइनेंस" },
      icon: "PieChart",
      items: [
        { 
          name: "Financial Analysis", 
          description: { 
            en: "Profitability review, revenue & cost breakdown, margin sensitivity, financial ratios.", 
            hi: "लाभप्रदता समीक्षा, राजस्व एवं लागत विश्लेषण, मार्जिन और वित्तीय अनुपात।" 
          } 
        },
        { 
          name: "Business Research", 
          description: { 
            en: "Secondary market research, competitor benchmarking, industry trend analysis, executive synthesis.", 
            hi: "मार्केट रिसर्च, प्रतियोगी विश्लेषण, उद्योग ट्रेंड्स और प्रबंधकीय निष्कर्ष।" 
          } 
        },
        { 
          name: "Budget Variance Analysis", 
          description: { 
            en: "Tracking projected vs. actual expenditures, monthly variances, cost-saving recommendations.", 
            hi: "प्रक्षेपित बनाम वास्तविक व्यय का तुलनात्मक अध्ययन एवं लागत नियंत्रण उपाय।" 
          } 
        },
        { 
          name: "Process Improvement", 
          description: { 
            en: "Workflow streamlining, operational bottleneck identification, KPI reporting automation.", 
            hi: "कार्यप्रवाह को सुव्यवस्थित करना, परिचालन बाधाओं की पहचान और केपीआई रिपोर्टिंग।" 
          } 
        }
      ]
    },
    {
      name: { en: "Productivity & Modern Tools", hi: "उत्पादकता एवं आधुनिक टूल्स" },
      icon: "Cpu",
      items: [
        { 
          name: "Microsoft PowerPoint", 
          description: { 
            en: "Executive presentations, business pitch decks, structured data storytelling.", 
            hi: "प्रबंधकीय प्रस्तुतियां, बिजनेस प्रेजेंटेशन और डेटा स्टोरीटेलिंग।" 
          } 
        },
        { 
          name: "AI Productivity Tools", 
          description: { 
            en: "Prompt engineering for data synthesis, workflow automation, and research acceleration.", 
            hi: "डेटा संश्लेषण, वर्कफ़्लो ऑटोमेशन और त्वरित शोध के लिए एआई टूल्स का उपयोग।" 
          } 
        },
        { 
          name: "Spreadsheet Modeling", 
          description: { 
            en: "Structured workbook architecture, dynamic inputs, error validation, audit trails.", 
            hi: "संरचित वर्कबुक आर्किटेक्चर, डायनेमिक इनपुट्स और ऑडिट ट्रेल्स।" 
          } 
        }
      ]
    }
  ] as SkillCategory[],

  // Portfolio Projects strictly verified from resume
  projects: [
    {
      id: "retail-performance",
      title: {
        en: "Retail Business Performance & Profitability Analysis",
        hi: "खुदरा व्यापार प्रदर्शन एवं लाभप्रदता विश्लेषण"
      },
      status: {
        en: "In Progress",
        hi: "प्रगति पर"
      },
      categoryKey: "analytics",
      category: {
        en: "Business & Retail Analytics",
        hi: "व्यवसाय एवं खुदरा विश्लेषण"
      },
      technologies: ["Microsoft Excel", "PivotTables", "Data Cleaning", "Profitability Modeling", "Synthetic Order Data"],
      summary: {
        en: "Comprehensive analysis of synthetic retail order data to compare sales revenue, operational costs, gross/net profits, product categories, geographic territories, and customer segments.",
        hi: "बिक्री राजस्व, परिचालन लागत, सकल/शुद्ध लाभ, उत्पाद श्रेणियों, भौगोलिक क्षेत्रों और ग्राहक समूहों का तुलनात्मक विश्लेषण करने हेतु सिंथेटिक रिटेल डेटा का विस्तृत अध्ययन।"
      },
      deliverables: {
        en: [
          "Dynamic Excel PivotTable models slicing performance across product lines and regions.",
          "Comparative gross margin and net contribution margin matrices.",
          "Evidence-based business recommendations for inventory prioritization and pricing.",
          "Visual performance dashboard with monthly trendlines and cost breakdowns."
        ],
        hi: [
          "उत्पाद श्रेणियों और क्षेत्रों में प्रदर्शन को दर्शाने वाले डायनेमिक एक्सेल पिवट मॉडल।",
          "तुलनात्मक ग्रॉस मार्जिन और कॉन्ट्रिब्यूशन मार्जिन विश्लेषण।",
          "इन्वेंट्री प्रबंधन और मूल्य निर्धारण के लिए प्रमाण-आधारित व्यावसायिक सिफारिशें।",
          "मासिक ट्रेंडलाइंस और लागत विवरण का विज़ुअल परफॉरमेंस डैशबोर्ड।"
        ]
      },
      methodology: {
        en: "Dataset ingestion and normalization → Categorization by order velocity and margin tiers → Multi-variable PivotTable analysis → Formulating data-backed managerial insights.",
        hi: "डेटासेट नॉर्मलाइजेशन → ऑर्डर वेलोसिटी और मार्जिन टियर वर्गीकरण → मल्टी-वैरिएबल पिवट टेबल विश्लेषण → डेटा-समर्थित प्रबंधकीय सुझाव।"
      },
      impact: {
        en: "Identifies unprofitable SKUs and pinpoints top 20% revenue-generating customer clusters.",
        hi: "अलाभकारी उत्पादों की पहचान तथा 20% शीर्ष राजस्व उत्पन्न करने वाले ग्राहक समूहों का निर्धारण।"
      },
      hasLiveDemo: false,
      hasSourceRepo: false
    },
    {
      id: "budget-variance",
      title: {
        en: "Financial Planning & Budget Variance Analysis",
        hi: "वित्तीय योजना एवं बजट भिन्नता विश्लेषण"
      },
      status: {
        en: "Planned",
        hi: "नियोजित"
      },
      categoryKey: "finance",
      category: {
        en: "Financial Planning & Modeling",
        hi: "वित्तीय योजना एवं मॉडलिंग"
      },
      technologies: ["Microsoft Excel", "Financial Modeling", "Variance Analysis", "Budget Forecasting", "Cost Optimization"],
      summary: {
        en: "Planned analytical financial model comparing budgeted projections against actual realized expenditures, computing variance deltas, monitoring monthly expenditure curves, and pinpointing cost-reduction opportunities.",
        hi: "बजट अनुमानों और वास्तविक खर्चों का तुलनात्मक अध्ययन करने वाला मॉडल, जो मासिक व्यय प्रवृत्तियों को ट्रैक करता है और संभावित लागत-बचत उपायों की पहचान करता है।"
      },
      deliverables: {
        en: [
          "Budget vs. actual variance matrix with automated color-graded divergence triggers.",
          "Monthly departmental expense tracking and run-rate forecasts.",
          "Detailed cost-saving action register with projected quarterly impact.",
          "Executive variance briefing sheet for decision-makers."
        ],
        hi: [
          "बजट बनाम वास्तविक खर्चों का स्वचालित भिन्नता मैट्रिक्स।",
          "मासिक विभागीय खर्च ट्रैकिंग और रन-रेट अनुमान।",
          "त्रैमासिक वित्तीय प्रभाव के साथ लागत-बचत कार्ययोजना रजिस्टर।",
          "निर्णयकर्ताओं के लिए एग्जीक्यूटिव वेरियंस ब्रीफिंग शीट।"
        ]
      },
      methodology: {
        en: "Defining departmental cost centers → Establishing baseline budget forecasts → Computing dollar and percentage variance → Outlining corrective cost levers.",
        hi: "विभागीय लागत केंद्रों का निर्धारण → आधारभूत बजट पूर्वानुमान → प्रतिशत व संख्यात्मक विचलन की गणना → सुधारात्मक उपाय।"
      },
      impact: {
        en: "Equips management with actionable visibility over budget overruns and operational leakages.",
        hi: "बजट उल्लंघन और अनावश्यक खर्चों पर प्रबंधन को तुरंत कार्रवाई योग्य दृश्यता प्रदान करता है।"
      },
      hasLiveDemo: false,
      hasSourceRepo: false
    },
    {
      id: "customer-retention",
      title: {
        en: "Customer Retention & Segmentation Analysis",
        hi: "ग्राहक प्रतिधारण एवं सेगमेंटेशन विश्लेषण"
      },
      status: {
        en: "Planned",
        hi: "नियोजित"
      },
      categoryKey: "bi",
      category: {
        en: "SQL & Power BI Dashboards",
        hi: "एसक्यूएल एवं पावर बीआई"
      },
      technologies: ["SQL", "Power BI", "Customer Segmentation", "Cohort Analysis", "Data Modeling"],
      summary: {
        en: "Planned customer-segmentation study to explore repeat-purchase patterns, churn risk factors, and customer lifetime engagement trends using SQL data queries and an interactive Power BI dashboard.",
        hi: "पुनः खरीदारी के पैटर्न, ग्राहक मंथन (चर्न) के जोखिम और ग्राहक जीवनकाल मूल्य का विश्लेषण करने हेतु एसक्यूएल क्वेरी और पावर बीआई डैशबोर्ड का नियोजित अध्ययन।"
      },
      deliverables: {
        en: [
          "Structured SQL queries categorizing users by recency, frequency, and monetary (RFM) thresholds.",
          "Interactive Power BI dashboard with cross-filtering by customer tier and tenure.",
          "Cohort retention curves visualizing user drop-off across successive order cycles.",
          "Actionable retention strategies for high-churn customer segments."
        ],
        hi: [
          "नवीनता, आवृत्ति और मौद्रिक (RFM) सीमाओं द्वारा उपयोगकर्ताओं को वर्गीकृत करने वाली एसक्यूएल क्वेरी।",
          "ग्राहक स्तर और कार्यकाल द्वारा क्रॉस-फ़िल्टरिंग के साथ इंटरैक्टिव पावर बीआई डैशबोर्ड।",
          "क्रमिक ऑर्डर चक्रों में उपयोगकर्ता ड्रॉप-ऑफ को दर्शाने वाले कोहोर्ट रिटेंशन कर्व्स।",
          "उच्च जोखिम वाले ग्राहक वर्गों के लिए व्यावहारिक प्रतिधारण रणनीतियाँ।"
        ]
      },
      methodology: {
        en: "SQL aggregation queries for customer purchase intervals → Star-schema data modeling in Power BI → DAX retention measures → Interactive executive dashboard.",
        hi: "खरीद अंतराल के लिए एसक्यूएल एग्रीगेशन → पावर बीआई में स्टार-स्कीमा डेटा मॉडलिंग → डीएएक्स रिटेंशन मेट्रिक्स → इंटरैक्टिव डैशबोर्ड।"
      },
      impact: {
        en: "Reveals high-value repeat customer cohorts to optimize customer acquisition and retention spend.",
        hi: "ग्राहक अधिग्रहण और प्रतिधारण बजट को अनुकूलित करने के लिए उच्च मूल्य वाले ग्राहकों की पहचान।"
      },
      hasLiveDemo: false,
      hasSourceRepo: false
    }
  ] as ProjectItem[],

  // Verified Certifications
  certifications: [
    {
      id: "cert-1",
      title: {
        en: "AI Fundamentals: Foundations for Understanding AI",
        hi: "एआई फंडामेंटल्स: फाउंडेशन फॉर अंडरस्टैंडिंग एआई"
      },
      issuer: {
        en: "IBM SkillsBuild",
        hi: "आईबीएम स्किल्सबिल्ड"
      },
      date: {
        en: "May 2026",
        hi: "मई 2026"
      },
      type: {
        en: "Professional Credential",
        hi: "व्यावसायिक प्रमाण-पत्र"
      },
      description: {
        en: "Foundational certification verifying conceptual understanding of artificial intelligence, machine learning architectures, neural networks, ethics in AI, and enterprise data workflows.",
        hi: "आर्टिफिशियल इंटेलिजेंस, मशीन लर्निंग सिद्धांतों, न्यूरल नेटवर्क, एआई नैतिकता और उद्यम डेटा वर्कफ़्लो की बुनियादी समझ को प्रमाणित करने वाला क्रेडेंशियल।"
      },
      skillsLearned: ["AI Concepts", "Machine Learning Foundations", "Ethics in AI", "Data Workflows"],
      credentialStatus: {
        en: "Verified Credential",
        hi: "सत्यापित क्रेडेंशियल"
      }
    },
    {
      id: "cert-2",
      title: {
        en: "Fundamentals of Sustainability and Technology",
        hi: "फंडामेंटल्स ऑफ सस्टेनेबिलिटी एंड टेक्नोलॉजी"
      },
      issuer: {
        en: "IBM SkillsBuild",
        hi: "आईबीएम स्किल्सबिल्ड"
      },
      date: {
        en: "December 2025",
        hi: "दिसंबर 2025"
      },
      type: {
        en: "Specialized Credential",
        hi: "विशिष्ट क्रेडेंशियल"
      },
      description: {
        en: "Explored corporate sustainability standards, green computing strategies, environmental footprint reduction, and the role of digital transformation in ESG governance.",
        hi: "कॉरपोरेट सस्टेनेबिलिटी मानकों, ग्रीन कंप्यूटिंग रणनीतियों, पर्यावरण पदचिह्न न्यूनीकरण और ईएसजी शासन में तकनीक की भूमिका का अध्ययन।"
      },
      skillsLearned: ["Corporate Sustainability", "ESG Reporting", "Green Computing", "Technology in Governance"],
      credentialStatus: {
        en: "Verified Credential",
        hi: "सत्यापित क्रेडेंशियल"
      }
    },
    {
      id: "cert-3",
      title: {
        en: "National Financial Literacy Quiz 2026",
        hi: "नेशनल फाइनेंशियल लिटरेसी क्विज 2026"
      },
      issuer: {
        en: "National Institute of Securities Markets (NISM)",
        hi: "नेशनल इंस्टीट्यूट ऑफ सिक्योरिटीज मार्केट्स (एनआईएसएम)"
      },
      date: {
        en: "2026",
        hi: "2026"
      },
      type: {
        en: "Certificate of Participation — College Round",
        hi: "प्रतिभागिता प्रमाण-पत्र — कॉलेज राउंड"
      },
      description: {
        en: "Participated in the competitive College Round evaluating financial market acumen, investment instruments, regulatory principles, securities trading mechanics, and risk management.",
        hi: "वित्तीय बाजार की समझ, निवेश साधनों, विनियामक सिद्धांतों, प्रतिभूति व्यापार और जोखिम प्रबंधन का मूल्यांकन करने वाले प्रतिस्पर्धी कॉलेज राउंड में प्रतिभागिता।"
      },
      skillsLearned: ["Capital Markets", "Financial Instruments", "Risk Evaluation", "Securities Regulations"],
      credentialStatus: {
        en: "Verified Participation",
        hi: "सत्यापित प्रतिभागिता"
      }
    }
  ] as CertificationItem[],

  // Achievements & Milestones
  achievements: [
    {
      id: "ach-1",
      title: {
        en: "NISM National Financial Literacy Quiz Recognition",
        hi: "एनआईएसएम राष्ट्रीय वित्तीय साक्षरता क्विज में प्रतिभागिता"
      },
      organization: {
        en: "National Institute of Securities Markets (NISM)",
        hi: "नेशनल इंस्टीट्यूट ऑफ सिक्योरिटीज मार्केट्स (NISM)"
      },
      year: "2026",
      category: { en: "Competition & Finance", hi: "प्रतियोगिता एवं वित्त" },
      description: {
        en: "Awarded Certificate of Participation in the College Round of the National Financial Literacy Quiz 2026, demonstrating financial market comprehension and capital market literacy.",
        hi: "राष्ट्रीय वित्तीय साक्षरता प्रश्नोत्तरी 2026 के कॉलेज राउंड में प्रतिभागिता प्रमाण-पत्र प्राप्त किया, जो वित्तीय और पूंजी बाजार की मजबूत समझ प्रदर्शित करता है।"
      }
    },
    {
      id: "ach-2",
      title: {
        en: "IBM SkillsBuild AI & Sustainability Double Credential",
        hi: "आईबीएम स्किल्सबिल्ड एआई एवं सस्टेनेबिलिटी दोहरा प्रमाणन"
      },
      organization: {
        en: "IBM SkillsBuild",
        hi: "आईबीएम स्किल्सबिल्ड"
      },
      year: "2025 — 2026",
      category: { en: "Professional Certification", hi: "व्यावसायिक प्रमाणन" },
      description: {
        en: "Successfully completed dual foundational specializations in Artificial Intelligence architecture and Enterprise Sustainability/Technology under IBM's global workforce training initiative.",
        hi: "आईबीएम के वैश्विक प्रशिक्षण कार्यक्रम के तहत आर्टिफिशियल इंटेलिजेंस और सतत व्यावसायिक प्रौद्योगिकी में दोहरी विशेषज्ञता सफलतापूर्वक पूर्ण की।"
      }
    },
    {
      id: "ach-3",
      title: {
        en: "Consistent Academic Excellence (79% Class X & 74% Class XII)",
        hi: "निरंतर शैक्षणिक प्रदर्शन (79% कक्षा 10 एवं 74% कक्षा 12)"
      },
      organization: {
        en: "KR Education Center",
        hi: "केआर एजुकेशन सेंटर"
      },
      year: "2023 & 2025",
      category: { en: "Academics", hi: "शैक्षणिक" },
      description: {
        en: "Maintained strong academic standing across foundational education, demonstrating discipline in mathematical and analytical coursework before advancing to BBA Finance.",
        hi: "बीबीए फाइनेंस में प्रवेश से पूर्व गणितीय और विश्लेषणात्मक विषयों में उत्कृष्ट प्रदर्शन के साथ उच्चतर माध्यमिक शिक्षा पूर्ण की।"
      }
    }
  ] as AchievementItem[],

  // Career Interests strictly from resume
  careerInterests: [
    { en: "Business Analysis", hi: "बिजनेस एनालिसिस" },
    { en: "Data-Driven Decision-Making", hi: "डेटा-आधारित निर्णय निर्माण" },
    { en: "Financial Analysis", hi: "वित्तीय विश्लेषण" },
    { en: "Business Research", hi: "व्यावसायिक शोध" }
  ]
};
