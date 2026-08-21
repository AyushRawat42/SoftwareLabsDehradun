export interface ProductAudience {
  id: string;
  title: string;
  description: string;
}

export interface ProductCapability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  body: string;
  points: { heading: string; text: string }[];
  outcomes: string[];
}

export interface ProductIntegration {
  name: string;
  detail: string;
}

export const product = {
  eyebrow: 'Flagship Product',
  name: 'Software Labs Higher Education ERP',
  tagline: 'Next-Generation, Cloud-Native Campus Management & Accreditation Platform',
  intro:
    'Software Labs ERP is a unified, cloud-based institutional operating system purpose-built for Indian colleges, autonomous institutes, and universities. Designed around the National Education Policy (NEP 2020) and NAAC Binary Accreditation framework, the platform eliminates fragmented legacy systems by connecting academics, finance, examinations, compliance, and communication into a single, high-performance ecosystem.',
  audiences: [
    {
      id: 'colleges',
      title: 'Colleges',
      description:
        'Affiliated and standalone colleges that need one system for admissions, attendance, fees, exams, and NAAC evidence instead of scattered spreadsheets and department tools.',
    },
    {
      id: 'autonomous',
      title: 'Autonomous Institutes',
      description:
        'Institutes running their own curriculum and evaluation, with NCrF major/minor tracks, CIE, and CO–PO attainment that must stay audit-ready throughout the year.',
    },
    {
      id: 'universities',
      title: 'Universities',
      description:
        'Multi-faculty universities that need campus-wide academic identity, ABC credit mobility, digital credentials, and a single financial and examination backbone.',
    },
  ] satisfies ProductAudience[],
  capabilities: [
    {
      id: 'nep',
      number: '01',
      title: 'Academic & NEP 2020 Compliance Engine',
      subtitle: 'Credits, identity, and outcome-based education in one academic core',
      body: 'The academic engine is built for Indian higher education as it operates after NEP 2020 — multidisciplinary programmes, credit mobility, and verified digital credentials — rather than as a bolt-on to a generic SIS.',
      points: [
        {
          heading: 'Multidisciplinary Credit Framework',
          text: 'Native support for the National Credit Framework (NCrF), managing Major/Minor degree tracks, Ability Enhancement (AEC), Skill Enhancement (SEC), and Value-Added (VAC) course baskets.',
        },
        {
          heading: 'National Academic Identity',
          text: 'Direct integration with 12-digit APAAR IDs, Academic Bank of Credits (ABC), and automated push of verified digital marksheets and degree certificates to DigiLocker / NAD.',
        },
        {
          heading: 'Outcome-Based Education (OBE)',
          text: 'Automated mapping of Course Outcomes (COs) to Program Outcomes (POs) with continuous attainment calculation.',
        },
      ],
      outcomes: [
        'Programme structures that match NCrF baskets without parallel Excel trackers',
        'Student academic identity aligned to APAAR, ABC, and NAD workflows',
        'Living CO–PO maps with attainment that updates as assessments close',
      ],
    },
    {
      id: 'naac',
      number: '02',
      title: 'NAAC Binary Accreditation & MBGL Hub',
      subtitle: 'Ten-attribute Binary evidence, with MBGL maturity tracked alongside',
      body: 'Accreditation work should be a by-product of daily operations, not a separate documentation project. The hub captures operational metrics continuously and prepares submission-ready files for national data platforms.',
      points: [
        {
          heading: 'NAAC Binary — 10 Key Attributes',
          text: 'Continuous aggregation of operational metrics across the revised 10 Key Attributes of Binary Accreditation (inputs, processes, and outcomes), generating pre-validated Data Capture Format (DCF) files ready for the One Nation One Data Platform.',
        },
        {
          heading: 'MBGL readiness',
          text: 'Maturity-Based Graded Levels (MBGL) sit beside Binary as the graded excellence path. The hub tracks evidence quality and coverage so institutes can see where they stand for both Binary accreditation and later MBGL progression — without treating them as a single conflated standard.',
        },
        {
          heading: 'Less last-minute compilation',
          text: 'Eliminates months of manual data compilation and documentation overhead during accreditation cycles.',
        },
      ],
      outcomes: [
        'Attribute-wise evidence trails that stay current through the year',
        'DCF-oriented exports instead of last-cycle spreadsheet reconstruction',
        'Clear separation of Binary (Accredited / Not Accredited) and MBGL maturity tracking',
      ],
    },
    {
      id: 'finance',
      number: '03',
      title: 'Zero-Leakage Financial Operations',
      subtitle: 'Fee rules, Indian payment rails, and books that stay in sync',
      body: 'Fee leakage usually comes from mismatched templates, unreconciled gateways, and accounts living in a different system. Finance in the ERP is designed around Indian institutional fee logic and the ledgers campuses already use.',
      points: [
        {
          heading: 'Dynamic Fee Management',
          text: 'Configurable fee templates tailored by program, admission batch, category, quota, and state domicile concessions.',
        },
        {
          heading: 'Instant Digital Reconciliation',
          text: 'Integrated with Indian payment rails (UPI, Netbanking, Cards) with automated receipt generation and payment tracking.',
        },
        {
          heading: 'Accounting Software Sync',
          text: 'Seamless bi-directional daybook synchronization with Tally Prime and Zoho Books.',
        },
      ],
      outcomes: [
        'One fee rule set per programme, batch, category, quota, and domicile',
        'Receipts issued as payments clear on UPI, netbanking, or cards',
        'Daybooks that stay aligned with Tally Prime and Zoho Books',
      ],
    },
    {
      id: 'lifecycle',
      number: '04',
      title: 'Examination, Attendance & Student Lifecycle',
      subtitle: 'From period attendance to hall tickets, seating, and CGPA',
      body: 'Examination and attendance are gated together so a student cannot sit an exam when mandated conditions are not met. Evaluation follows UGC patterns used across Indian HEIs.',
      points: [
        {
          heading: 'UGC 75% Attendance Guard',
          text: 'Period-wise mobile attendance combined with high-speed biometric/RFID integration, providing automated alerts when attendance drops below mandated thresholds.',
        },
        {
          heading: 'Examination Automation',
          text: 'Continuous Internal Evaluation (CIE), automated hall ticket generation with gatekeeping (attendance and fee clearance checks), randomized cross-branch seating plans, and UGC 10-point CGPA grading.',
        },
      ],
      outcomes: [
        'Shortage alerts before a student falls under the 75% UGC threshold',
        'Hall tickets issued only after attendance and fee clearance checks',
        'CIE, seating, and 10-point CGPA handled in one examination flow',
      ],
    },
    {
      id: 'comms',
      number: '05',
      title: 'WhatsApp-First Communication & Mobile Portals',
      subtitle: 'The channel families already use, plus role-specific apps',
      body: 'Campus communication fails when notices live only on a portal nobody opens. The ERP treats WhatsApp Business API as a first-class delivery channel, with web and mobile portals for every role.',
      points: [
        {
          heading: 'Role-specific access',
          text: 'Role-specific web dashboards and mobile applications for Students, Parents, Faculty, and Administrators.',
        },
        {
          heading: 'Official WhatsApp Business API',
          text: 'Official WhatsApp Business API integration for instant fee receipts, attendance shortage alerts, exam hall ticket links, and campus circulars.',
        },
      ],
      outcomes: [
        'Students, parents, faculty, and admins each get a portal built for their job',
        'Fee receipts and shortage alerts arrive on WhatsApp, not only email',
        'Hall ticket links and circulars delivered through the official Business API',
      ],
    },
  ] satisfies ProductCapability[],
  integrations: [
    { name: 'APAAR', detail: '12-digit academic identity' },
    { name: 'ABC', detail: 'Academic Bank of Credits' },
    { name: 'DigiLocker / NAD', detail: 'Verified marksheets and degrees' },
    { name: 'UPI, Netbanking, Cards', detail: 'Indian payment rails' },
    { name: 'Tally Prime', detail: 'Bi-directional daybook sync' },
    { name: 'Zoho Books', detail: 'Bi-directional daybook sync' },
    { name: 'WhatsApp Business API', detail: 'Receipts, alerts, circulars' },
  ] satisfies ProductIntegration[],
  deployment: {
    title: 'The Software Labs Deployment Advantage',
    items: [
      {
        heading: '30-Day Onboarding',
        text: 'Automated ETL data migration pipelines that transition historical records from existing software in weeks rather than months.',
      },
      {
        heading: 'Data Security & Governance',
        text: 'Hosted in Indian cloud regions (AWS Mumbai) with strict compliance with the Digital Personal Data Protection Act (DPDPA 2023) and encrypted audit logging.',
      },
    ],
  },
  onboardingSteps: [
    { title: 'Migrate', text: 'ETL pipelines pull historical student, fee, and academic records from the systems you already run.' },
    { title: 'Configure', text: 'Programmes, fee templates, NCrF baskets, roles, and examination rules are set to your statutes.' },
    { title: 'Train', text: 'Administrators, faculty, and accounts teams learn the portals they will use on day one.' },
    { title: 'Go live', text: 'Attendance, fees, WhatsApp alerts, and academic operations switch to the unified platform.' },
  ],
} as const;
