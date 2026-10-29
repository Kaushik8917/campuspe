export const NAV_LINKS = [
  { label: "Colleges", href: "/#colleges" },
  { label: "Employers", href: "/#employers" },
  { label: "Jobs", href: "/#jobs" },
  { label: "Blogs", href: "/blogs" },
];

export const STATS = [
  { value: "800+", label: "Students", icon: "users", tone: "blue" },
  { value: "130+", label: "colleges", icon: "landmark", tone: "purple" },
  { value: "100+", label: "jobs & internships", icon: "briefcase", tone: "orange" },
  { value: "100%", label: "Safe & Trusted", icon: "shield", tone: "green" },
];

// Drop exported logos into /public/partners and set `logo` to e.g. "/partners/ginserv.png".
export const PARTNERS = [
  { name: "GINSERV", sub: "Marketing Solutions", logo: null },
  { name: "STARTUP KARNATAKA", sub: "", logo: null },
  { name: "TalentSprint", sub: "", logo: null },
  { name: "Partner Four", sub: "", logo: null },
  { name: "Partner Five", sub: "", logo: null },
  { name: "Partner Six", sub: "", logo: null },
];

export const ROLE_CARDS = [
  {
    id: "college",
    title: "College",
    desc: "Explore colleges, courses, fees, placements & more",
    features: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"],
    badge: "Coming Soon",
    badgeTone: "soft",
    cta: "Join Waitlist",
    ctaIcon: "bell",
    action: "waitlist",
    icon: "landmark",
    art: "campus",
  },
  {
    id: "job",
    title: "I'm Looking for a Job",
    desc: "Upload your resume. We'll find jobs that fit you.",
    features: ["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"],
    badge: "Available Now",
    badgeTone: "live",
    cta: "Explore Jobs",
    ctaIcon: "arrow",
    action: "/#upload",
    icon: "cap",
    art: "resume",
    tick: "red",
  },
  {
    id: "hiring",
    title: "I'm Hiring",
    desc: "Connect with colleges and find candidates — from students to graduates.",
    features: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"],
    badge: "Coming Soon",
    badgeTone: "soft",
    cta: "Join Waitlist",
    ctaIcon: "bell",
    action: "waitlist",
    icon: "briefcase",
    art: "towers",
  },
];

export const FEED_TABS = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

export const FEED_ITEMS = [
  { id: 1, cat: "Colleges", title: "IIM Bangalore", tag: "Top College", tagTone: "purple", meta: [["book", "MBA"], ["pin", "Bengaluru"]], pay: "₹ 3L+", blurb: "India's premier management institute with global exposure...", cta: "View Details", logo: "iim" },
  { id: 2, cat: "Internships", title: "Product Intern", tag: "Internship", tagTone: "blue", meta: [["pin", "Bengaluru"], ["monitor", "Hybrid"]], pay: "₹ 35K/mo", blurb: "Work on real products, learn from top engineers and build...", cta: "Apply Now", logo: "google" },
  { id: 3, cat: "Freelance", title: "Marketing Gig", tag: "Freelance", tagTone: "green", meta: [["home", "Remote"], ["briefcase", "Freelance"]], pay: "₹ 10K - ₹ 25K", blurb: "Create content and help with social media campaigns for...", cta: "View Details", logo: "notion" },
  { id: 4, cat: "Jobs", title: "Backend Developer", tag: "Full-time", tagTone: "blue", meta: [["pin", "Hyderabad"], ["monitor", "On-site"]], pay: "₹ 8L - ₹ 12L", blurb: "Build scalable APIs and services for a fast-growing platform...", cta: "Apply Now", logo: "google" },
  { id: 5, cat: "Part-time", title: "Weekend Campus Ambassador", tag: "Part-time", tagTone: "green", meta: [["pin", "Pune"], ["briefcase", "Part-time"]], pay: "₹ 8K/mo", blurb: "Represent CampusPe on campus and help students discover...", cta: "View Details", logo: "notion" },
];

export const PIPELINE = [
  { title: "Resume analyzed", sub: "Ready in 4s", icon: "check", tone: "green", dot: true },
  { title: "Skills matched", sub: "Deep taxonomy", icon: "check", tone: "indigo" },
  { title: "Experience matched", sub: "Contextual seniority", icon: "check", tone: "violet" },
  { title: "1,000+ sources searched", sub: "Real-time aggregators", icon: "check", tone: "blue" },
];

export const COLLEGE_CARDS = [
  { n: "01", kicker: "VERIFIED PROFILE", title: "Build your college profile", body: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.", chips: [{ icon: "badge", text: "NAAC A++ Ready", tone: "lime" }, { text: "98% Match", tone: "outline", small: true }] },
  { n: "02", kicker: "DIRECT ENROLL", title: "Students discover and connect", body: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.", chips: [{ icon: "chat", text: "Direct Enquiries", tone: "blue" }, { dot: "green", text: "WHATSAPP / CHAT", tone: "plain" }], note: "Avg. response: <15 min" },
  { n: "03", kicker: "CAMPUS RECRUITING", title: "Recruiters discover your College", body: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.", chips: [{ icon: "building", text: "500+ Hiring Partners", tone: "violet" }, { icon: "scale", text: "Connect Directly", tone: "indigo" }] },
  { n: "04", kicker: "LIVE HUD", title: "Track placements in real time", body: "Track students, interviews, offers and placements from one centralized dashboard.", chips: [{ dot: "red", text: "LIVE PLACEMENTS", tone: "red" }, { text: "Students · Interviews · Offers", tone: "solid" }] },
];

export const EMPLOYER_CARDS = [
  { n: "01", title: "Post a role in minutes", body: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.", chips: [{ icon: "zap", text: "5 Min Deployment", tone: "green" }, { text: "500+ Campus Network", tone: "gray" }] },
  { n: "02", title: "Receive a matched shortlist", body: "Get candidates matched to your role by skills, experience, location and hiring requirements.", chips: [{ icon: "target", text: "Zero CV Clutter", tone: "violet" }, { text: "Tier 1–Tier 3 Parity", tone: "gray" }] },
  { n: "03", title: "Connect with candidates directly", body: "Message, schedule interviews, and move candidates through your pipeline — all in one place.", chips: [{ icon: "chat", text: "In-App Scheduling", tone: "blue" }, { text: "1-Click Video / Chat", tone: "gray" }] },
  { n: "04", title: "Reduce your time-to-hire", body: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.", chips: [{ text: "<2 DAYS", tone: "solid" }, { text: "57% Faster Hiring", tone: "green" }] },
];

export const FOOTER_COLS = [
  { title: "For Students", links: [["Explore Colleges", "/#colleges"], ["Find Opportunities", "/#jobs"], ["Internships", "/internships"], ["Full-time Jobs", "/jobs"], ["Part-time & Gig", "/part-time-gig"], ["Application Tracker", "/application-tracker"]] },
  { title: "For Colleges", links: [["List Your College", "/list-your-college"], ["Admissions", "/admissions"], ["Fee Collection", "/fee-collection"], ["Placements", "/placements"]] },
  { title: "For Employers", links: [["Post a Job", "/post-a-job"], ["Find Talent", "/find-talent"], ["Campus Hiring", "/campus-hiring"]] },
  { title: "Company", links: [["About Us", "/about-us"], ["Contact Us", "/contact-us"], ["Blogs", "/blogs"], ["Careers", "/careers"]] },
  { title: "Legal & Policies", links: [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Refund & Cancellation Policy", "/refund-and-cancellation-policy"], ["Cookie Policy", "/cookie-policy"], ["Grievance Redressal", "/grievance-redressal"], ["Job & Internship Disclaimer", "/job-and-internship-disclaimer"]] },
];

// Every internal route that is not the home page. Used by app/[slug]/page.js.
export const EXTRA_ROUTES = [
  ...new Set([
    "blogs", "login", "signup", "policies", "internships", "jobs", "part-time-gig", "application-tracker",
    "list-your-college", "admissions", "fee-collection", "placements", "post-a-job", "find-talent",
    "campus-hiring", "about-us", "contact-us", "careers", "privacy-policy", "terms-and-conditions",
    "refund-and-cancellation-policy", "cookie-policy", "grievance-redressal", "job-and-internship-disclaimer",
    "contact-support", "schedule-a-call", "explore-colleges", "find-opportunities", "feed", "college-details", "apply",
  ]),
];

export const SLIDE_LABELS = ["Home", "Post a Job", "Discover", "My Application", "College"];
