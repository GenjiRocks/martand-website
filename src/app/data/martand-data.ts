export interface PracticeArea {
  id: string;
  name: string;
  leadParagraph: string;
  description: string;
  offerings: string[];
  handledTopics: { title: string; desc: string }[];
  representativeExperience: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  discipline: 'Lawyers' | 'Chartered accountants' | 'Company secretaries' | 'Intellectual property experts' | 'Registered valuers';
  practiceArea: string;
  office: 'Hyderabad' | 'Indore' | 'Pune' | 'Bengaluru';
  email: string;
  linkedin: string;
  phone: string;
  experience: string;
  qualifications: string;
  bio: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  category: 'FEMA Notes' | 'Company law' | 'ESOP Desk' | 'Commercial agreements' | 'Firm news' | 'Recent work';
  title: string;
  summary: string;
  author: string;
  date: string;
  readingTime: string;
  content: string[];
  isLatest?: boolean;
}

export interface RecognitionItem {
  year: string;
  title: string;
  category: string;
  publisher: string;
  practiceAndBand: string;
}

export interface RecentWorkItem {
  monthYear: string;
  description: string;
  practiceArea: string;
  clientType: string;
}

export interface OfficeLocation {
  city: 'Hyderabad' | 'Indore' | 'Pune' | 'Bengaluru';
  address: string;
  landmark?: string;
  phone: string;
  email: string;
  mapLink: string;
  isHeadquarters?: boolean;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-laws',
    name: 'Corporate laws and advisory',
    leadParagraph: 'Advice across the life of a company, from registration and structuring to raising capital, restructuring, mergers and exits.',
    description: 'We act as trusted outside corporate counsel to founders, boards, and corporate entities. Our interdisciplinary team ensures corporate governance, shareholder relations, and statutory compliances are seamlessly coordinated.',
    offerings: [
      'Incorporation and corporate structuring for emerging and established enterprises',
      'Governance, secretarial operations, and ongoing compliance reporting',
      'Advice to boards on special transactions, director responsibilities, and fiduciary duties',
      'Shareholder agreements, voting trusts, and investor rights implementation',
      'Capital reductions, buybacks, and restructuring schemes'
    ],
    handledTopics: [
      { title: 'Company Structuring', desc: 'Designing capital tables, share classes, and holding company architectures tailored for growth.' },
      { title: 'Board & Governance', desc: 'Advisory on Companies Act 2013 compliances, committee mandates, and board governance.' },
      { title: 'Restructuring & Schemes', desc: 'Planning and executing internal reorganizations, spin-offs, and capital restructuring.' }
    ],
    representativeExperience: [
      'Advised a mid-market healthcare chain on corporate restructuring across 12 subsidiary entities.',
      'Acted as standing board advisory counsel for a Hyderabad-based pharmaceutical technology company.',
      'Assisted an early-stage deep-tech startup on convertible debt structuring and founder equity vesting.'
    ]
  },
  {
    id: 'commercial-agreements',
    name: 'Commercial agreements',
    leadParagraph: 'Drafting, reviewing, and negotiating contracts that protect commercial relationships and manage operational risk.',
    description: 'Contracts are the operational backbone of commercial enterprise. We draft precise, enforceable agreements tailored to Indian jurisprudence and international best practices.',
    offerings: [
      'Master services agreements, SaaS terms, and licensing contracts',
      'Supply chain, distribution, franchise, and vendor procurement frameworks',
      'Confidentiality, non-compete, non-solicitation, and trade secret pacts',
      'Technology transfer and intellectual property licensing agreements',
      'Limitation of liability, indemnification, and risk-allocation negotiation'
    ],
    handledTopics: [
      { title: 'Procurement & Supply Chain', desc: 'Comprehensive operational agreements securing supply, warranties, and service levels.' },
      { title: 'Technology & SaaS', desc: 'Cloud licensing, data privacy, SLA commitments, and global user-facing terms.' },
      { title: 'Strategic Partnerships', desc: 'Teaming agreements, co-development pacts, and profit-sharing alliance structures.' }
    ],
    representativeExperience: [
      'Negotiated multi-year global SaaS enterprise contract with a Tier-1 US enterprise on behalf of an Indian software firm.',
      'Drafted complete master procurement and vendor logistics framework for a national retail chain.',
      'Structured tri-partite licensing and royalty agreement between an academic institution and a manufacturing client.'
    ]
  },
  {
    id: 'mergers-acquisitions',
    name: 'Mergers and acquisitions',
    leadParagraph: 'End-to-end legal and tax orchestration for mergers, share acquisitions, business transfers, and strategic exits.',
    description: 'We guide buyers, sellers, and investors through every milestone of an M&A transaction—from initial letter of intent and transaction structuring to regulatory filings, NCLT approvals, and post-closing integration.',
    offerings: [
      'Asset purchases, slump sales, and business transfer agreements (BTA)',
      'Share purchase, subscription, and shareholders agreements (SPA/SSA)',
      'Merger schemes, demergers, and arrangements under the Companies Act before NCLT',
      'Antitrust assessments and Competition Commission of India (CCI) filings',
      'Post-merger corporate restructuring and secretarial integration'
    ],
    handledTopics: [
      { title: 'Transaction Structuring', desc: 'Optimizing corporate, tax, and stamp duty implications for target acquisitions.' },
      { title: 'NCLT Merger Schemes', desc: 'Drafting court schemes, holding creditor/shareholder meetings, and securing final approvals.' },
      { title: 'Slump Sales & Carve-Outs', desc: 'Carving out non-core business divisions with clean asset, liability, and employee transfers.' }
    ],
    representativeExperience: [
      'Advised an Indore-based industrial manufacturing entity on its 100% equity acquisition by a European multinational.',
      'Represented founders of a Bengaluru logistics tech company in an acquihire transaction with a public tech firm.',
      'Structured a scheme of arrangement under NCLT for demerging the real estate division of an infrastructure conglomerate.'
    ]
  },
  {
    id: 'fema-foreign-investment',
    name: 'FEMA and foreign investment',
    leadParagraph: 'Foreign exchange regulatory advice for investment, ownership, and cross-border business decisions into and out of India.',
    description: 'Foreign investment rules dictate how money enters an Indian company, who can hold its securities, and what must be reported to the Reserve Bank of India. We advise companies, investors, and non-resident Indians on getting each step right the first time.',
    offerings: [
      'Share allotments to non-residents (FDI route analysis, valuation certificates, and FIRMS/FC-GPR filing)',
      'Share transfers between resident and non-resident entities (FC-TRS documentation and RBI approvals)',
      'Joint ventures and foreign collaboration structuring under automatic and government approval routes',
      'NRI and PIO investments on repatriation and non-repatriation frameworks',
      'FEMA compounding applications, regularisation of procedural delays, and RBI representations',
      'Statutory certificates and chartered accountant valuer certifications'
    ],
    handledTopics: [
      { title: 'Share Allotments (FC-GPR)', desc: 'Issuing shares to investors outside India, with the valuation and reporting that goes with it.' },
      { title: 'Share Transfers (FC-TRS)', desc: 'Transfers of shares from Indian residents to non-residents and vice versa.' },
      { title: 'Joint Ventures', desc: 'Structuring and setting up joint ventures with foreign technical and financial partners.' },
      { title: 'NRI & PIO Partnerships', desc: 'Partnerships and corporate vehicles involving non-resident Indians and persons of Indian origin.' },
      { title: 'FEMA & RBI Advisory', desc: 'Ongoing advice on foreign exchange regulations and Reserve Bank of India requirements.' },
      { title: 'Statutory Certificates', desc: 'Certificates required under FEMA, pricing guidelines, and RBI regulations.' }
    ],
    representativeExperience: [
      'Advised an institutional Singapore fund on its $28M Series B subscription in an Indian agritech platform.',
      'Acted for non-resident Indian promoters on repatriable investment structuring across real estate tech assets.',
      'Successfully handled compounding proceedings before the RBI for historical delayed foreign remittance filings.'
    ]
  },
  {
    id: 'esop-equity',
    name: 'Employee stock options',
    leadParagraph: 'Designing, structuring, and maintaining equity incentive plans that attract and reward leadership talent.',
    description: 'Talent retention is existential for growth companies. We architect ESOP schemes, Phantom Stocks, and Sweat Equity structures that align employees with shareholder value while ensuring total compliance with Companies Act rules and SEBI guidelines.',
    offerings: [
      'ESOP scheme design, policy drafting, and grant letter templates',
      'Board approvals, shareholder special resolutions, and secretarial filings',
      'Trust-managed vs direct equity ESOP implementation',
      'Vesting schedules, acceleration triggers, bad-leaver clauses, and buyback policies',
      'Cross-border grants to employees in overseas subsidiaries'
    ],
    handledTopics: [
      { title: 'Plan Design & Governance', desc: 'Crafting tailored rules balancing founder control with meaningful employee upside.' },
      { title: 'Trust Route Implementation', desc: 'Creating dedicated employee welfare trusts for market purchases and pool administration.' },
      { title: 'Liquidity & Secondary Sales', desc: 'Structuring company-sponsored buybacks and secondary tender offers during funding rounds.' }
    ],
    representativeExperience: [
      'Created multi-jurisdiction ESOP scheme for an Indian company with software engineering teams in Pune and the UK.',
      'Structured $4M secondary ESOP liquidity event for 85 early employees during an institutional funding round.',
      'Drafted phantom stock unit (PSU) plan for a bootstrapped enterprise ensuring tax-efficient long-term cash retention.'
    ]
  },
  {
    id: 'intellectual-property',
    name: 'Intellectual property',
    leadParagraph: 'Securing, commercializing, and defending your brand, software, inventions, and proprietary know-how.',
    description: 'In today’s knowledge economy, intellectual capital defines enterprise valuation. Our registered patent and trademark attorneys handle complete portfolio lifecycle management across India and Madrid Protocol member states.',
    offerings: [
      'Trademark search, clearance, prosecution, and opposition hearings before the Trade Marks Registry',
      'Patentability analysis, provisional and complete specification drafting, and examination responses',
      'Copyright registration for proprietary software source code, architectural designs, and literary works',
      'Trade secrets protection protocols, employee assignment covenants, and NDAs',
      'Brand licensing, royalty structures, and IP valuation for corporate transactions'
    ],
    handledTopics: [
      { title: 'Brand & Trademark Prosecution', desc: 'Clearing and safeguarding trademarks, logos, and taglines against infringement.' },
      { title: 'Patent Advisory & Filing', desc: 'Technical drafting and filing with Patent Offices in India and PCT international jurisdictions.' },
      { title: 'IP Monetisation & Licensing', desc: 'Drafting technology transfer, commercial licensing, and white-label arrangements.' }
    ],
    representativeExperience: [
      'Secured trademark registration after contested opposition proceedings for a prominent Hyderabad educational brand.',
      'Drafted and filed 14 core patent applications for an automotive EV mobility innovator in Pune.',
      'Audited complete IP portfolio for a consumer brand prior to private equity minority stake sale.'
    ]
  },
  {
    id: 'due-diligence',
    name: 'Due diligence',
    leadParagraph: 'Exhaustive legal, financial, and secretarial diligence that uncovers liabilities and protects transaction value.',
    description: 'Before any major investment, acquisition, or partnership, clarity is non-negotiable. Our team conducts forensic legal due diligence that identifies regulatory red flags, title defects, litigation exposure, and contract risks.',
    offerings: [
      'Vendor due diligence to prepare companies for upcoming funding rounds or exits',
      'Target due diligence for venture capital, private equity funds, and strategic acquirers',
      'Statutory compliance health checks across labor laws, corporate filings, and licenses',
      'Real estate and commercial leasehold title verification',
      'Detailed Red Flag reports and actionable remediation roadmaps'
    ],
    handledTopics: [
      { title: 'Investor Diligence', desc: 'In-depth scrutiny of cap table integrity, regulatory licenses, and litigation.' },
      { title: 'Vendor Readiness', desc: 'Cleaning up company secretarial and corporate records before approaching buyers.' },
      { title: 'Compliance Health-Checks', desc: 'Preventative review of factory, shop, labor, and municipal law compliances.' }
    ],
    representativeExperience: [
      'Conducted full-scope buy-side due diligence for a US PE firm acquiring an Indore manufacturing facility.',
      'Delivered vendor legal diligence report for a Series A enterprise SaaS startup, shortening funding timeline by 4 weeks.',
      'Performed title search and regulatory compliance audit for 45 commercial real estate assets in Telangana.'
    ]
  },
  {
    id: 'setting-up-in-india',
    name: 'Setting up in India',
    leadParagraph: 'Turnkey advisory for foreign corporations, subsidiaries, branch offices, and joint ventures entering the Indian market.',
    description: 'India represents one of the world’s most dynamic markets, but navigating municipal, state, and central regulations requires local precision. We handle end-to-end entity formation, statutory registrations, and ongoing corporate secretarial management.',
    offerings: [
      'Choice of entity advisory: Wholly Owned Subsidiary (WOS), Joint Venture, Branch Office, Liaison Office (LO)',
      'Incorporation via SPICe+ with Ministry of Corporate Affairs (MCA)',
      'Obtaining PAN, TAN, GST, EPF, ESI, IEC, and Professional Tax registrations',
      'RBI approvals for Project and Liaison Offices under FEMA guidelines',
      'Corporate bank account opening and initial capital remittance coordination'
    ],
    handledTopics: [
      { title: 'Wholly-Owned Subsidiaries', desc: 'Seamless establishment of Indian private limited subsidiaries for global parents.' },
      { title: 'Branch & Liaison Offices', desc: 'Navigating RBI regulations to set up promotional or representative offices in India.' },
      { title: 'Post-Incorporation Compliance', desc: 'Securing all local trade licenses, shops & establishment registrations, and bank mandates.' }
    ],
    representativeExperience: [
      'Incorporated the Indian subsidiary of a German robotics supplier within 12 working days with complete banking support.',
      'Advised an Australian environmental consultancy on establishing a Liaison Office in Bengaluru.',
      'Structured turnkey market entry for a Dubai-based commodity trading group in Indore.'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'saurav-sharma',
    name: 'Saurav Sharma',
    designation: 'Managing Partner',
    discipline: 'Lawyers',
    practiceArea: 'Corporate laws & M&A',
    office: 'Hyderabad',
    email: 'saurav@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 40 4859 2013',
    experience: '13+ years advising founders, venture capital funds, and boards on corporate governance, structuring, and acquisitions.',
    qualifications: 'B.A. LL.B. (Hons.), National Law University; Member, Bar Council of Telangana.',
    bio: 'Saurav founded Martand Legal Advisors in 2013 with the vision of uniting corporate attorneys, company secretaries, and chartered accountants into a single cohesive practice. He has led over 60 cross-border M&A and funding transactions across India, Southeast Asia, and Europe.'
  },
  {
    id: 'priya-kulkarni',
    name: 'Priya Kulkarni',
    designation: 'Partner & Head of IP',
    discipline: 'Intellectual property experts',
    practiceArea: 'Intellectual property & Licensing',
    office: 'Pune',
    email: 'priya.k@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 20 2439 1101',
    experience: '12+ years in patent prosecution, trademark disputes, and technology transfer pacts for technology innovators.',
    qualifications: 'B.Sc. (Biotech), LL.B., Registered Patent Agent (IN/PA); Advocate, High Court of Bombay.',
    bio: 'Priya heads the Pune office and IP practice. She routinely manages high-stakes trademark opposition proceedings before the Controller General of Patents and Designs, and counsels software startups on proprietary IP protection and Madrid Protocol filings.'
  },
  {
    id: 'rajesh-verma',
    name: 'Rajesh Verma, FCA',
    designation: 'Senior Partner - Tax & Valuation',
    discipline: 'Chartered accountants',
    practiceArea: 'FEMA & Registered Valuer',
    office: 'Indore',
    email: 'rajesh.v@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 731 421 9000',
    experience: '15+ years in international taxation, RBI compliance certificates, and registered valuations under Companies Act.',
    qualifications: 'FCA (ICAI), Registered Valuer (IBBI - Securities or Financial Assets), DISA.',
    bio: 'Rajesh leads the Indore practice and oversees financial structuring, FEMA statutory certifications, and valuation reports for cross-border investments. He has successfully represented corporate clients in major tax reorganizations and FEMA compounding.'
  },
  {
    id: 'ananya-nair',
    name: 'Ananya Nair, FCS',
    designation: 'Partner - Corporate Secretarial',
    discipline: 'Company secretaries',
    practiceArea: 'Secretarial Audit & Due Diligence',
    office: 'Bengaluru',
    email: 'ananya.n@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 80 4112 5500',
    experience: '11+ years leading corporate secretarial audits, board procedures, and due diligence for high-growth enterprises.',
    qualifications: 'Fellow Company Secretary (ICSI), B.Com, LL.B., Bengaluru Bar Association.',
    bio: 'Ananya manages corporate secretarial advisory for our Bengaluru technology clients. She specializes in corporate due diligence for PE/VC rounds, ESOP pool administration, and NCLT secretarial representation.'
  },
  {
    id: 'aditya-reddy',
    name: 'Aditya Reddy',
    designation: 'Senior Associate',
    discipline: 'Lawyers',
    practiceArea: 'Commercial contracts & FEMA',
    office: 'Hyderabad',
    email: 'aditya.r@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 40 4859 2014',
    experience: '7 years drafting cross-border commercial contracts, MSAs, and FEMA foreign investment compliance.',
    qualifications: 'B.B.A. LL.B., NALSAR University of Law.',
    bio: 'Aditya handles negotiation of commercial contracts, software licensing terms, and regulatory documentation under the Foreign Exchange Management Act for our Hyderabad corporate clients.'
  },
  {
    id: 'meenakshi-joshi',
    name: 'Meenakshi Joshi',
    designation: 'Associate Partner',
    discipline: 'Registered valuers',
    practiceArea: 'Corporate restructuring & Valuations',
    office: 'Indore',
    email: 'meenakshi.j@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 731 421 9001',
    experience: '9 years in valuation of shares, intangible assets, and fairness opinions for M&A transactions.',
    qualifications: 'ACA, Registered Valuer (IBBI), MBA (Finance).',
    bio: 'Meenakshi works alongside our M&A lawyers providing transaction valuations, DCF modeling, and fairness opinions required for merger schemes and FEMA share transfers.'
  },
  {
    id: 'vikram-deshmukh',
    name: 'Vikram Deshmukh',
    designation: 'Senior Associate - IP',
    discipline: 'Intellectual property experts',
    practiceArea: 'Patents & Designs',
    office: 'Pune',
    email: 'vikram.d@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 20 2439 1102',
    experience: '6 years in electronics and computer science patent drafting and prior art searches.',
    qualifications: 'B.Tech (Electronics), LL.B., Patent Agent.',
    bio: 'Vikram assists technology and engineering clients in Pune with patent prior art search, claim drafting, and responding to First Examination Reports issued by the Indian Patent Office.'
  },
  {
    id: 'kavita-menon',
    name: 'Kavita Menon, ACS',
    designation: 'Associate - Secretarial',
    discipline: 'Company secretaries',
    practiceArea: 'Setting up in India & Compliances',
    office: 'Bengaluru',
    email: 'kavita.m@martandlegal.in',
    linkedin: 'https://linkedin.com/in/martand-legal',
    phone: '+91 80 4112 5501',
    experience: '5 years managing foreign subsidiary incorporations, MCA filings, and annual secretarial compliances.',
    qualifications: 'Associate Member, ICSI; M.Com.',
    bio: 'Kavita coordinates foreign client on-boarding, MCA SPICe+ approvals, Reserve Bank FC-GPR filings, and annual compliance health checks.'
  }
];

export const RECOGNITIONS: RecognitionItem[] = [
  {
    year: '2025',
    title: 'Recommended Corporate Advisory Firm',
    category: 'Commercial, Corporate and M&A',
    publisher: 'The Legal 500 Asia Pacific',
    practiceAndBand: 'South & Central India - Tier 2'
  },
  {
    year: '2025',
    title: 'Top Boutique Law Firm of the Year (Finalist)',
    category: 'Law Firm Awards',
    publisher: 'Asian Legal Business (ALB) India',
    practiceAndBand: 'National'
  },
  {
    year: '2024',
    title: 'Notable Firm for Cross-Border Investment',
    category: 'FEMA & Joint Ventures',
    publisher: 'IFLR1000 India',
    practiceAndBand: 'Financial & Corporate'
  },
  {
    year: '2024',
    title: 'Ranked Leading Lawyer - Corporate Advisory',
    category: 'Individual Practitioner Recognition',
    publisher: 'Chambers & Partners Asia-Pacific',
    practiceAndBand: 'Corporate Practice'
  },
  {
    year: '2023',
    title: 'Excellence in Secretarial Compliance & Audit',
    category: 'Corporate Governance',
    publisher: 'Institute of Company Secretaries of India (ICSI)',
    practiceAndBand: 'Regional Chapter Recognition'
  },
  {
    year: '2023',
    title: 'Top 50 Emerging Law Firms in India',
    category: 'Firm Recognition',
    publisher: 'BW Legal World',
    practiceAndBand: 'National Ranking'
  }
];

export const RECENT_WORK: RecentWorkItem[] = [
  {
    monthYear: 'NOVEMBER 2025',
    description: 'Advised an institutional Singapore venture capital fund on its $32M Series B foreign direct investment and FIRMS/FC-GPR compliance in an Indian agritech entity.',
    practiceArea: 'FEMA and foreign investment',
    clientType: 'Institutional Investor'
  },
  {
    monthYear: 'OCTOBER 2025',
    description: 'Structured comprehensive 60:40 cross-border joint venture and technology licensing agreement between an Indian EV component maker and German mobility group.',
    practiceArea: 'Commercial agreements',
    clientType: 'Automotive Enterprise'
  },
  {
    monthYear: 'AUGUST 2025',
    description: 'Designed and implemented multi-tier ESOP scheme with liquidity pool for 280+ employees of a fast-growing Bengaluru SaaS provider ahead of private equity recapitalization.',
    practiceArea: 'Employee stock options',
    clientType: 'Enterprise SaaS'
  },
  {
    monthYear: 'JUNE 2025',
    description: 'Represented promoters in the slump sale and asset transfer of an industrial manufacturing unit in Madhya Pradesh to a European multinational conglomerate.',
    practiceArea: 'Mergers and acquisitions',
    clientType: 'Industrial Manufacturing'
  },
  {
    monthYear: 'APRIL 2025',
    description: 'Conducted vendor legal due diligence and corporate secretarial regularization for a healthtech startup, facilitating a $15M strategic acquisition.',
    practiceArea: 'Due diligence',
    clientType: 'Healthtech Platform'
  },
  {
    monthYear: 'JANUARY 2025',
    description: 'Successfully established the wholly-owned Indian subsidiary for a Tokyo-headquartered precision instruments manufacturer, handling MCA, RBI, and bank registrations.',
    practiceArea: 'Setting up in India',
    clientType: 'Multinational Corporation'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'nri-investments-routes',
    slug: 'nri-investments-repatriation-routes',
    category: 'FEMA Notes',
    title: 'NRI investments in India: repatriation and non-repatriation routes',
    summary: 'How non-resident Indians can invest in Indian companies through authorised dealer banks, how payment differs between the two routes, and what the company has to file.',
    author: 'Saurav Sharma',
    date: '12 November 2025',
    readingTime: '5 min read',
    isLatest: true,
    content: [
      'Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) have substantial avenues for contributing capital into the Indian economy. Under the Foreign Exchange Management (Non-debt Instruments) Rules, 2019, two distinct pathways exist: investments on a repatriation basis (Schedule I) and on a non-repatriation basis (Schedule IV).',
      'Under Schedule I, investment proceeds, dividends, and eventual capital gains can be freely converted into foreign currency and remitted overseas through Authorised Dealer Category-I banks. The company must ensure adherence to sectoral caps, pricing guidelines based on internationally accepted valuation methodologies (DCF), and mandatory reporting via the RBI FIRMS portal through Form FC-GPR within 30 days of share allotment.',
      'Conversely, under Schedule IV, investments are deemed domestic investments at par with resident Indians. Pricing guidelines and reporting on the FIRMS portal are generally exempt, provided funds originate from NRO bank accounts or are credited to NRO accounts upon disinvestment.',
      'Understanding these subtle differences before drafting share subscription agreements avoids costly regularisation and compounding applications before the Reserve Bank of India later.'
    ]
  },
  {
    id: 'trust-or-society-entity',
    slug: 'trust-or-society-choosing-the-right-structure',
    category: 'Company law',
    title: 'Trust or society: choosing the right structure',
    summary: 'A side by side look at formation, control, governance and the documents each one needs when establishing educational or institutional non-profits in India.',
    author: 'Rajesh Verma, FCA',
    date: '28 October 2025',
    readingTime: '6 min read',
    content: [
      'Promoters establishing institutional, educational, or philanthropic initiatives in India frequently grapple with choosing between an irrevocable Public Charitable Trust, a Society registered under the Societies Registration Act, 1860, or a Section 8 Company under the Companies Act, 2013.',
      'A Public Charitable Trust offers perpetual founder control through a nominated Board of Trustees without democratic election mandates. However, state-specific public trusts acts (such as in Maharashtra and Gujarat) impose rigorous Charity Commissioner reporting obligations.',
      'A Society requires a minimum of seven governing body members and operates under democratic principles where members vote periodically on leadership. For national-level bodies and membership organizations, societies remain popular but are vulnerable to internal management disputes.',
      'Increasingly, forward-looking founders opt for Section 8 Companies due to robust statutory governance, national recognition, ease of securing CSR funding, and institutional credibility with banks and foreign grant providers under FCRA.'
    ]
  },
  {
    id: 'esop-vesting-cliffs',
    slug: 'esop-vesting-cliffs-good-bad-leaver',
    category: 'ESOP Desk',
    title: 'Structuring vesting cliffs and good-leaver clauses in ESOPs',
    summary: 'Best practices for drafting equity incentive schemes that protect founders from premature exits while keeping key talent meaningfully motivated.',
    author: 'Ananya Nair, FCS',
    date: '14 October 2025',
    readingTime: '4 min read',
    content: [
      'Employee Stock Option Plans (ESOPs) are critical tools for competitive talent acquisition. However, poorly structured option agreements often result in dead equity on the cap table when employees depart prematurely.',
      'Under Section 62(1)(b) of the Companies Act, 2013, Indian law mandates a minimum statutory vesting period of one year from the date of grant. Standard market practice typically couples this with a 4-year vesting schedule with a 1-year cliff (25% vesting), followed by monthly or quarterly vesting thereafter.',
      'Equally vital is defining clear demarcations between "Good Leavers" (departing due to redundancy, retirement, or mutual agreement) and "Bad Leavers" (termination for cause, breach of confidentiality, or joining a competitor). Option plans should specify whether unvested options lapse immediately and whether vested but unexercised options can be repurchased at nominal or fair market value.'
    ]
  },
  {
    id: 'dpdp-act-corporate-compliance',
    slug: 'dpdp-act-compliance-for-indian-corporates',
    category: 'Commercial agreements',
    title: 'Digital Personal Data Protection Act: Compliance checklist for businesses',
    summary: 'Key operational and contractual mandates every Indian enterprise must implement to comply with statutory data fiduciary requirements.',
    author: 'Aditya Reddy',
    date: '19 September 2025',
    readingTime: '5 min read',
    content: [
      'The Digital Personal Data Protection (DPDP) Act represents a fundamental transformation in how businesses operating in India collect, process, and retain personal data.',
      'Enterprises acting as Data Fiduciaries must implement clear, itemised notice mechanisms in English and all 22 scheduled Indian languages, alongside unambiguous affirmative consent mechanisms. Standard contractual clauses with third-party vendors and cloud providers must be amended to mandate prompt breach notification within statutory windows.',
      'Companies should conduct immediate data mapping audits to identify what personal data is collected, the lawful purpose for retention, and verify that data principal rights to erasure and grievance redressal are operationalised.'
    ]
  },
  {
    id: 'martand-bengaluru-expansion',
    slug: 'martand-legal-bengaluru-office-expansion',
    category: 'Firm news',
    title: 'Martand Legal expands Bengaluru corporate practice with new IP and tech partner',
    summary: 'Strengthening our presence in South India to provide direct on-the-ground support to technology companies, venture funds, and founders.',
    author: 'Martand Legal Advisors',
    date: '02 August 2025',
    readingTime: '3 min read',
    content: [
      'Martand Legal Advisors is delighted to announce the expansion of our Bengaluru office located at Prestige Meridian, MG Road. With this addition, our interdisciplinary team now extends full corporate, secretarial, and intellectual property capabilities directly to the technology ecosystem of Karnataka.',
      'The Bengaluru practice will work in close coordination with our Hyderabad and Pune offices, ensuring technology clients benefit from seamless support across company structuring, cross-border investment filings, and patent prosecution.'
    ]
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Hyderabad',
    address: '#8-3-322/2, Unit No 910/2, Floor 8th, Vasavi MPM Grand, Ameerpet, Hyderabad, Telangana 500073',
    landmark: 'Opposite Ameerpet Metro Station',
    phone: '+91 40 4859 2013',
    email: 'hyderabad@martandlegal.in',
    mapLink: 'https://maps.google.com/?q=Vasavi+MPM+Grand+Ameerpet+Hyderabad',
    isHeadquarters: true
  },
  {
    city: 'Indore',
    address: '421, Krishna Business Centre, Behind Medanta Hospital, Vijay Nagar, Indore, Madhya Pradesh 452001',
    landmark: 'Near Scheme 54',
    phone: '+91 731 421 9000',
    email: 'indore@martandlegal.in',
    mapLink: 'https://maps.google.com/?q=Krishna+Business+Centre+Vijay+Nagar+Indore'
  },
  {
    city: 'Pune',
    address: 'C/o PatentOne IP Services, Meghmalhar, OP-1101, DSK Vishwa, Pune, Maharashtra 411041',
    landmark: 'DSK Vishwa Road',
    phone: '+91 20 2439 1101',
    email: 'pune@martandlegal.in',
    mapLink: 'https://maps.google.com/?q=Meghmalhar+DSK+Vishwa+Pune'
  },
  {
    city: 'Bengaluru',
    address: 'Level 6, Prestige Meridian, MG Road, Bengaluru, Karnataka 560001',
    landmark: 'Near Trinity Metro Station',
    phone: '+91 80 4112 5500',
    email: 'bengaluru@martandlegal.in',
    mapLink: 'https://maps.google.com/?q=Prestige+Meridian+MG+Road+Bengaluru'
  }
];

export const FIRM_FACTS = [
  { value: 2013, label: 'The year the firm was founded', suffix: '', isYear: true },
  { value: 4, label: 'Offices: Hyderabad, Indore, Pune and Bengaluru', suffix: '', isYear: false },
  { value: 8, label: 'Practice areas, from incorporation to exit', suffix: '', isYear: false },
  { value: 5, label: 'Professional disciplines in one team', suffix: '', isYear: false }
];

export const CORE_VALUES = [
  {
    title: 'Ethics',
    description: 'The right advice, even when it is not the easy advice.'
  },
  {
    title: 'Integrity',
    description: 'We say what we will do, and then we do it.'
  },
  {
    title: 'Confidentiality',
    description: 'Your business and your information stay yours.'
  },
  {
    title: 'Trust',
    description: 'Earned over time, one matter after another.'
  },
  {
    title: 'Credibility',
    description: 'Advice that holds up when it is tested.'
  }
];

export const MILESTONES = [
  {
    year: '2013',
    title: 'Firm Founded',
    description: 'The firm is founded by young lawyers with the aim of bringing corporate legal services and compliance together under one roof in Hyderabad.'
  },
  {
    year: '2016',
    title: 'Indore Office & Tax Integration',
    description: 'Opening of our central India office in Indore, integrating chartered accountants and registered valuers into the practice.'
  },
  {
    year: '2020',
    title: 'Pune IP Practice',
    description: 'Expansion to Pune with specialized patent, trademark, and technology transfer attorneys serving tech manufacturing.'
  },
  {
    year: 'Today',
    title: 'Four Offices Across India',
    description: 'Four offices, eight comprehensive practice areas, and five professional disciplines working as one coordinated advisory team.'
  }
];

export const WHO_WE_ADVISE = [
  { title: 'Brands and businesses', desc: 'From fast-growth tech startups to established manufacturing entities and retail chains.' },
  { title: 'Founders & Promoters', desc: 'Structuring equity, managing investor relationships, and guiding personal wealth governance.' },
  { title: 'Government authorities', desc: 'Advisory on statutory policy, infrastructure public-private pacts, and regulatory compliance.' },
  { title: 'Global clients investing in India', desc: 'Foreign corporations, Singapore and US funds, and NRI investors entering the Indian market.' }
];

