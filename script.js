const makeSkill = (name, level) => ({ name, level });

const skillCatalog = {
  Coding: {
    description: 'Writing reliable software for automation, analysis, products, and simulations.',
    acquire: 'Start with Python fundamentals, solve 50+ practical problems, then build domain projects (embedded control, trading model, or medical analytics).'
  },
  MATLAB: {
    description: 'Numerical computing and control/signal modeling environment used across EE and biomedical domains.',
    acquire: 'Take one signals/controls class using MATLAB, recreate textbook labs, then publish one end-to-end simulation project.'
  },
  Excel: {
    description: 'Core business modeling and analysis tool for finance, operations, and technical decision making.',
    acquire: 'Master formulas, pivots, XLOOKUP, and scenario modeling; complete 3 valuation/budget case studies.'
  },
  'Circuit Design': {
    description: 'Designing analog/digital circuits with performance, reliability, and cost constraints.',
    acquire: 'Study circuits/electronics, use LTspice, then build and debug 3 PCB prototypes with measurable specs.'
  },
  'Data Analysis': {
    description: 'Turning raw data into insights using statistics, dashboards, and experimentation.',
    acquire: 'Learn SQL + Python pandas + visualization, then complete projects with KPI tracking and executive summaries.'
  },
  'Control Systems': {
    description: 'Designing feedback systems for stability, precision, and robust performance.',
    acquire: 'Cover transfer functions/state-space, implement PID/LQR in simulation, then deploy on a hardware prototype.'
  },
  'Financial Modeling': {
    description: 'Building decision models for valuation, forecasting, and risk.',
    acquire: 'Practice 3-statement models, DCFs, sensitivities, and present assumptions clearly in investment memos.'
  },
  'Regulatory Affairs': {
    description: 'Understanding how products meet legal/safety standards (FDA, ISO, power/aviation compliance).',
    acquire: 'Study relevant frameworks, map design controls to documentation, and contribute to one compliance-ready project dossier.'
  },
  Communication: {
    description: 'Explaining complex technical/business ideas clearly to varied stakeholders.',
    acquire: 'Practice structured writing and weekly presentations; summarize one technical topic for both expert and non-expert audiences.'
  },
  Leadership: {
    description: 'Coordinating teams, prioritizing tradeoffs, and executing under uncertainty.',
    acquire: 'Lead one capstone/team project, use sprint planning, and run postmortems for measurable process improvements.'
  }
};

function createCareer(id, label, blurb, type, skills, tech, applications, roadmap, credentials, projects, dayToDay, addOns, entrepreneurship) {
  return { id, label, blurb, type, skills, tech, applications, roadmap, credentials, projects, dayToDay, addOns, entrepreneurship };
}

function placeNodes(careers) {
  const scatterSlots = [
    [16, 18], [31, 13], [46, 17], [63, 12], [79, 19],
    [88, 32], [83, 48], [90, 63], [76, 74], [60, 81],
    [44, 78], [28, 83], [14, 73], [10, 58], [12, 42],
    [20, 31], [36, 27], [54, 28], [69, 35], [73, 52],
    [60, 66], [42, 63], [28, 57], [24, 43]
  ];

  if (careers.length <= scatterSlots.length) {
    careers.forEach((c, index) => {
      const slot = scatterSlots[index % scatterSlots.length];
      c.x = slot[0];
      c.y = slot[1];
    });
    return careers;
  }

  careers.forEach((career, index) => {
    const ring = Math.floor(index / 18);
    const indexInRing = index % 18;
    const angle = (2 * Math.PI * indexInRing) / 18 + (ring * 0.33);
    const rx = 22 + ring * 9;
    const ry = 17 + ring * 7;
    const jitter = ((index % 3) - 1) * 1.8;
    career.x = Math.max(6, Math.min(94, 50 + (rx + jitter) * Math.cos(angle)));
    career.y = Math.max(8, Math.min(92, 49 + (ry + jitter) * Math.sin(angle)));
  });
  return careers;
}

function buildLinks(centerId, careers, relatedLinks = []) {
  const links = [];
  careers.forEach((c) => links.push([centerId, c.id]));

  for (let i = 0; i < careers.length; i += 1) {
    const a = careers[i].id;
    const b = careers[(i + 1) % careers.length].id;
    const c = careers[(i + 4) % careers.length].id;
    links.push([a, b]);
    links.push([a, c, 'cross']);
  }

  relatedLinks.forEach((pair) => {
    const [from, to] = pair;
    links.push([from, to, 'cross']);
  });

  return links;
}

const eeCareers = placeNodes([
  createCareer('chip-design', 'Chip Design Engineer', 'VLSI, architecture, timing closure', '', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'hard'), makeSkill('MATLAB', 'medium'), makeSkill('Communication', 'easy')], ['Verilog/SystemVerilog', 'Cadence', 'Static timing tools', 'Python automation'], ['AI chips', 'Consumer electronics', 'Automotive ECUs', 'Edge compute'], ['EE/CE core + digital design', 'Computer architecture + VLSI electives', 'FPGA tapeout-style project', 'Semiconductor internship'], ['IEEE SSCS training', 'ASIC verification coursework', 'Timing-closure labs'], ['Build a pipelined CPU on FPGA', 'Create verification testbench suite', 'Power/performance optimization report'], ['Write RTL and tests', 'Debug simulations', 'Review synthesis reports', 'Coordinate with verification/layout'], 'Add computer engineering and OS/compiler knowledge for co-design roles.', 'Strong potential for fabless startups and custom accelerator IP ventures.'),
  createCareer('embedded', 'Embedded Systems Engineer', 'Firmware + hardware integration', '', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'medium'), makeSkill('Communication', 'easy')], ['C/C++', 'Microcontrollers', 'RTOS', 'Oscilloscopes/logic analyzers'], ['IoT devices', 'Automotive modules', 'Industrial sensors', 'Consumer wearables'], ['Embedded course sequence', 'Real-time systems', 'Interface protocols (SPI/I2C/CAN)', 'Device-focused internship'], ['Embedded Linux certificate', 'ARM architecture training'], ['Build telemetry firmware stack', 'Design and test sensor board', 'Power optimization benchmark'], ['Implement drivers', 'Trace hardware bugs', 'Validate timing and memory', 'Write production docs'], 'Pair with computer engineering for low-level architecture depth.', 'Excellent route into product startups and industrial IoT companies.'),
  createCareer('power-grid', 'Power Systems Engineer', 'Grid planning and protection', '', [makeSkill('MATLAB', 'medium'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')], ['ETAP', 'SCADA', 'PSCAD', 'Excel'], ['Utility operations', 'Renewables integration', 'Microgrids', 'EV charging infra'], ['Power systems + protection', 'Energy economics', 'Interconnection studies', 'Utility/co-op internship'], ['FE/PE pathway', 'NERC familiarity'], ['Protection coordination study', 'Microgrid optimization simulation', 'Outage risk model'], ['Run load-flow studies', 'Coordinate outages', 'Model fault scenarios', 'Present reliability plans'], 'Finance/policy coursework improves project-finance and regulatory decisions.', 'Strong for consulting firms and software-first grid optimization startups.'),
  createCareer('rf', 'RF/Microwave Engineer', 'Wireless front-end and antenna systems', '', [makeSkill('Circuit Design', 'hard'), makeSkill('MATLAB', 'medium'), makeSkill('Data Analysis', 'medium')], ['HFSS', 'ADS', 'VNA/spectrum analyzers', 'Python'], ['5G/6G radios', 'Satellite links', 'Radar systems', 'Defense comms'], ['EM + RF sequence', 'Antenna design labs', 'Signal integrity projects', 'Telecom/aerospace internship'], ['RF certification tracks', 'Antenna measurement lab'], ['Design patch antenna', 'Measure S-parameters', 'Build low-noise RF chain'], ['Tune filters/matching', 'Analyze RF test data', 'Validate link budgets', 'Document compliance'], 'Math + physics electives significantly help in high-frequency design.', 'Niche but high-value path for telecom, aerospace, and advanced sensing startups.'),
  createCareer('controls', 'Control Systems Engineer', 'Feedback systems for machines', '', [makeSkill('Control Systems', 'hard'), makeSkill('Coding', 'hard'), makeSkill('MATLAB', 'medium')], ['Simulink', 'Python', 'PLC tooling', 'State-estimation libraries'], ['Robotics', 'Aerospace control', 'Industrial automation', 'Autonomous systems'], ['Controls theory', 'State-space methods', 'Embedded implementation', 'Automation internship'], ['ISA/automation certs', 'Robotics controls training'], ['Implement LQR/PID on robot', 'Sensor fusion estimator', 'Closed-loop performance report'], ['Model plant dynamics', 'Tune controllers', 'Deploy to hardware', 'Troubleshoot instability'], 'Mechanical engineering collaboration boosts system-level intuition.', 'High startup upside in autonomy and process automation platforms.'),
  createCareer('robotics', 'Robotics Engineer', 'Autonomy + mechatronics stack', '', [makeSkill('Coding', 'hard'), makeSkill('Control Systems', 'hard'), makeSkill('Leadership', 'medium')], ['ROS2', 'C++', 'Computer vision', 'Embedded boards'], ['Warehouse robotics', 'Agritech robots', 'Medical robotics', 'Inspection drones'], ['Robotics + controls + vision', 'Hardware-software capstone', 'Safety and reliability testing', 'Robotics internship'], ['ROS developer cert', 'Functional safety basics'], ['Autonomous navigation demo', 'Manipulator control project', 'Sensor calibration pipeline'], ['Integrate perception/planning', 'Run field tests', 'Track failure modes', 'Collaborate across disciplines'], 'Computer engineering + mechanical depth creates full-stack robotics capability.', 'Large opportunity in vertical automation startups.'),
  createCareer('avionics', 'Avionics Engineer', 'Aerospace electronics and telemetry', '', [makeSkill('Coding', 'hard'), makeSkill('Control Systems', 'hard'), makeSkill('Regulatory Affairs', 'medium')], ['DO-178 workflows', 'Embedded C', 'Sensor fusion', 'Simulation tools'], ['Aircraft systems', 'Spacecraft payloads', 'UAV navigation', 'Flight instrumentation'], ['Controls + embedded', 'Aerospace standards', 'Hardware-in-loop testing', 'Aerospace internship'], ['Aviation safety training', 'Mission assurance modules'], ['Flight data logger design', 'Fault-tolerant bus interface', 'Sensor redundancy analysis'], ['Analyze flight logs', 'Validate fail-safe behaviors', 'Review certification artifacts', 'Coordinate integration tests'], 'Aerospace + computer engineering combination is highly valuable.', 'Emerging opportunities in new-space avionics startups.'),
  createCareer('automotive', 'Automotive Electronics Engineer', 'ECUs, EV systems, motorsports telemetry', '', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'medium'), makeSkill('Data Analysis', 'medium')], ['CAN tools', 'MATLAB/Simulink', 'HIL rigs', 'Embedded C'], ['EV powertrain control', 'Motorsports telemetry', 'ADAS', 'Battery management'], ['Automotive embedded systems', 'Control + diagnostics', 'Vehicle network protocols', 'OEM or racing internship'], ['ISO 26262 awareness', 'Automotive SPICE basics'], ['Build CAN diagnostics dashboard', 'Telemetry analytics pipeline', 'Battery state estimator'], ['Implement ECU logic', 'Analyze lap/vehicle data', 'Run HIL tests', 'Close performance loops'], 'Computer engineering and data science improve real-time telemetry and optimization.', 'Motorsports analytics and EV subsystem startups are promising.'),
  createCareer('renewables', 'Renewable Energy Engineer', 'Solar/wind integration and storage', '', [makeSkill('Data Analysis', 'medium'), makeSkill('MATLAB', 'medium'), makeSkill('Communication', 'easy')], ['Power system simulators', 'Python', 'SCADA', 'Forecasting dashboards'], ['Grid decarbonization', 'Utility-scale solar', 'Battery storage', 'Demand response'], ['Power + energy markets', 'Forecasting methods', 'Interconnection workflows', 'Renewables internship'], ['Grid operator courses', 'Energy market training'], ['Solar yield model', 'Storage dispatch optimizer', 'Demand forecast dashboard'], ['Build generation forecasts', 'Assess grid impacts', 'Recommend dispatch strategies', 'Support permitting/compliance'], 'Finance and policy minors help with project viability and regulation.', 'Great market for climate-tech startups and grid software products.'),
  createCareer('signal-proc', 'Signal Processing Engineer', 'DSP and applied machine intelligence', '', [makeSkill('Coding', 'hard'), makeSkill('MATLAB', 'medium'), makeSkill('Data Analysis', 'hard')], ['Python', 'NumPy/SciPy', 'DSP libraries', 'PyTorch'], ['Radar analytics', 'Audio systems', 'Medical signals', 'Wireless demodulation'], ['Probability + DSP sequence', 'ML electives', 'Applied signal project', 'Research lab/internship'], ['DSP specialization', 'ML deployment training'], ['Speech enhancement model', 'Radar target tracker', 'Noise-robust filter bank'], ['Design and test filters', 'Benchmark models', 'Deploy inference pipelines', 'Communicate performance tradeoffs'], 'Statistics/ML depth broadens roles into AI-heavy teams.', 'Strong software product opportunities in analytics and diagnostics.'),
  createCareer('fpga', 'FPGA Engineer', 'Rapid hardware prototyping', '', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'hard'), makeSkill('Communication', 'easy')], ['VHDL/Verilog', 'Vivado/Quartus', 'High-speed I/O', 'Python automation'], ['Low-latency trading', 'Defense systems', 'Prototyping ASICs', 'Signal pipelines'], ['Digital design sequence', 'Hardware verification', 'Interface protocol mastery', 'FPGA-focused internship'], ['FPGA vendor training', 'Timing closure workshops'], ['PCIe data-path accelerator', 'Real-time DSP core', 'High-throughput test suite'], ['Build RTL blocks', 'Run place-and-route', 'Verify throughput/latency', 'Integrate with software teams'], 'Computer engineering enables stronger software-hardware partitioning.', 'Popular path for niche acceleration and embedded platform startups.'),
  createCareer('photonics', 'Photonics Engineer', 'Optoelectronic and optical comms systems', 'outer', [makeSkill('Circuit Design', 'hard'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')], ['Optical simulation tools', 'Lab instrumentation', 'Python', 'Signal analyzers'], ['LiDAR systems', 'Fiber communications', 'Imaging devices', 'Sensing hardware'], ['EM/optics electives', 'Lab photonics work', 'Signal processing overlap', 'Optics internship'], ['Photonics society training', 'Optical safety practices'], ['Optical link budget model', 'Sensor signal chain prototype', 'Calibration workflow'], ['Measure optical paths', 'Characterize noise', 'Tune interfaces', 'Report experimental findings'], 'Physics and computer engineering both expand design flexibility.', 'Emerging market in sensing and autonomous optics startups.'),
  createCareer('process', 'Semiconductor Process Engineer', 'Fabrication process optimization', 'outer', [makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy'), makeSkill('Coding', 'medium')], ['Process control software', 'Statistical quality tools', 'Python', 'SPC dashboards'], ['Wafer fabrication', 'Yield improvement', 'Reliability engineering', 'Advanced packaging'], ['Materials + manufacturing fundamentals', 'Statistical process control', 'Cleanroom exposure', 'Fab internship'], ['Six Sigma', 'Yield engineering training'], ['Yield-loss root-cause analysis', 'Process window optimization', 'Defect classification model'], ['Analyze fab metrics', 'Run DOE experiments', 'Improve yield', 'Coordinate manufacturing teams'], 'Industrial engineering and data science complement this track.', 'Strong value creation via yield-optimization consulting and fab tooling startups.'),
  createCareer('automation', 'Industrial Automation Engineer', 'PLC/SCADA and smart manufacturing', 'outer', [makeSkill('Coding', 'medium'), makeSkill('Control Systems', 'hard'), makeSkill('Leadership', 'medium')], ['PLC suites', 'SCADA', 'Industrial networks', 'Python'], ['Factory automation', 'Process industries', 'Quality systems', 'Warehouse orchestration'], ['Automation coursework', 'PLC labs', 'Industrial safety modules', 'Manufacturing internship'], ['ISA certifications', 'Safety standards training'], ['Automated line simulation', 'SCADA dashboard project', 'Predictive maintenance model'], ['Design control logic', 'Commission systems', 'Diagnose downtime', 'Lead continuous improvement'], 'Mechanical + business ops skills are powerful add-ons.', 'High potential for automation integrator businesses and vertical SaaS.'),
  createCareer('comp-eng', 'Computer Engineer', 'Hardware-software co-design bridge', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'hard'), makeSkill('Leadership', 'medium')], ['Embedded Linux', 'Computer architecture', 'Firmware', 'Digital design tools'], ['Edge AI devices', 'Consumer electronics', 'Automotive compute', 'Robotics compute stack'], ['ECE core + OS/architecture', 'Embedded and networking', 'Cross-stack capstone', 'Systems internship'], ['Cloud/embedded cert tracks', 'Security basics'], ['Edge AI device prototype', 'RTOS scheduling benchmark', 'Hardware-acceleration demo'], ['Partition workloads', 'Profile bottlenecks', 'Optimize interfaces', 'Coordinate HW/SW teams'], 'Natural bridge role across EE, CS, robotics, and product management.', 'Outstanding startup role for full-stack hardware products.'),
  createCareer('tech-pm-ee', 'Technical Product Manager (EE)', 'Translate engineering into product strategy', 'outer', [makeSkill('Communication', 'easy'), makeSkill('Leadership', 'medium'), makeSkill('Coding', 'medium')], ['Roadmapping tools', 'Analytics dashboards', 'Prototype tools', 'Data SQL'], ['Hardware products', 'Industrial platforms', 'Robotics products', 'Energy platforms'], ['EE foundation + product coursework', 'Customer discovery practice', 'Data-driven prioritization', 'PM internship'], ['Product certs', 'Agile/Scrum training'], ['PRD for connected device', 'KPI dashboard for product usage', 'Feature-prioritization model'], ['Define specs', 'Align teams', 'Track roadmap metrics', 'Balance tradeoffs'], 'Business and UX skills create stronger product outcomes.', 'Great launchpad for founder/operator paths.'),
  createCareer('research-ee', 'Research Engineer (EE/CE)', 'Advanced R&D in emerging systems', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy')], ['Python', 'Simulation stacks', 'Lab tools', 'Technical writing tooling'], ['Advanced semiconductors', 'Autonomy', 'Telecom research', 'Biomedical instrumentation'], ['Deep technical electives', 'Research methods', 'Publishable project', 'R&D internship/lab role'], ['Research writing workshops', 'Conference participation'], ['Replicate a research paper', 'Open-source reproducible experiments', 'Benchmark novel architecture'], ['Design experiments', 'Interpret results', 'Document methods', 'Present to stakeholders'], 'Math/statistics and computer engineering elevate impact.', 'Can spin out IP-backed deep-tech startups.'),
  createCareer('motorsport-controls', 'Motorsport Controls Engineer', 'Race telemetry + lap-time optimization', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Control Systems', 'hard'), makeSkill('Data Analysis', 'medium')], ['CAN bus tools', 'MATLAB', 'Python telemetry', 'Embedded C'], ['Formula racing teams', 'Performance engineering', 'Vehicle dynamics analytics', 'EV race systems'], ['Controls + dynamics specialization', 'Vehicle systems projects', 'Race-data analysis internships', 'Track-side testing'], ['Motorsport telemetry workshops', 'CAN diagnostics training'], ['Lap-time optimizer', 'Powertrain controls dashboard', 'Suspension data fusion model'], ['Analyze telemetry in real time', 'Tune controllers', 'Support test sessions', 'Report setup-performance tradeoffs'], 'Mechanical + computer engineering combo is highly valuable in racing contexts.', 'High potential in motorsport analytics and high-performance vehicle startups.'),
]);

const financeCareers = placeNodes([
  createCareer('fin-analyst', 'Financial Analyst', 'Corporate modeling and planning', '', [makeSkill('Excel', 'easy'), makeSkill('Financial Modeling', 'hard'), makeSkill('Communication', 'easy'), makeSkill('Data Analysis', 'medium')], ['Excel', 'Power BI', 'SQL', 'PowerPoint'], ['FP&A', 'Budgeting', 'M&A support', 'Performance reporting'], ['Accounting + valuation foundation', 'Case competitions', 'Forecasting models', 'Corporate finance internship'], ['CFA/FP&A modules', 'Advanced Excel'], ['Three-statement model', 'Scenario engine', 'Board-ready KPI deck'], ['Run forecasts', 'Analyze variance', 'Build business cases', 'Support leaders in planning'], 'Add operations and data engineering for stronger business impact.', 'Pathway to consulting boutique or fractional-CFO startup.'),
  createCareer('ib', 'Investment Banker', 'Capital raising and deals', '', [makeSkill('Excel', 'easy'), makeSkill('Financial Modeling', 'hard'), makeSkill('Communication', 'easy')], ['Excel', 'Pitchbook tools', 'Market data terminals', 'Presentation workflows'], ['M&A', 'IPO readiness', 'Debt financing', 'Restructuring'], ['Corporate finance core', 'Valuation/deal modeling', 'Networking + interview prep', 'IB internship'], ['CFA level prep', 'Modeling bootcamps'], ['LBO model', 'Comparable comps dashboard', 'Deal memo samples'], ['Build deal books', 'Manage due diligence', 'Coordinate legal/clients', 'Work across tight timelines'], 'Law/accounting exposure strengthens transaction execution.', 'Can evolve to boutique advisory or deal-focused entrepreneurship.'),
  createCareer('wealth', 'Wealth Manager', 'Client portfolio strategy', '', [makeSkill('Communication', 'easy'), makeSkill('Excel', 'easy'), makeSkill('Financial Modeling', 'medium')], ['CRM systems', 'Portfolio tools', 'Excel', 'Client analytics'], ['Private banking', 'Family offices', 'Retirement planning', 'Estate strategy'], ['Licensing path', 'Investment products', 'Client communication training', 'Advisory apprenticeship'], ['Series licenses', 'CFP/CFA routes'], ['Risk-profile engine', 'Retirement model', 'Client reporting dashboard'], ['Meet clients', 'Rebalance assets', 'Explain risk', 'Coordinate tax/legal advisors'], 'Psychology and communication matter as much as technical finance.', 'Direct route to independent advisory firm creation.'),
  createCareer('quant', 'Quant Analyst', 'Math + coding for market models', '', [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Financial Modeling', 'medium')], ['Python', 'C++', 'R', 'Backtesting platforms'], ['Algo trading', 'Risk engines', 'Derivative pricing', 'Execution analytics'], ['Probability/stats', 'Numerical methods', 'ML + optimization', 'Quant research internship'], ['CQF-style prep', 'Advanced probability coursework'], ['Backtest platform', 'Factor model', 'Execution slippage analyzer'], ['Build alpha/risk models', 'Clean data pipelines', 'Test strategies', 'Report performance'], 'Strong CS/math background is essential for top quant roles.', 'Natural fit for fintech analytics ventures.'),
  createCareer('risk', 'Risk Manager', 'Enterprise and market risk governance', '', [makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy'), makeSkill('Leadership', 'medium')], ['Risk platforms', 'SQL', 'Excel', 'Dashboard tools'], ['Credit risk', 'Market risk', 'Operational risk', 'Compliance reporting'], ['Stats + risk frameworks', 'Financial regulation', 'Stress testing methods', 'Bank/fin-risk internship'], ['FRM pathway', 'Basel risk training'], ['Stress test model', 'Portfolio VaR dashboard', 'Operational risk tracker'], ['Monitor limits', 'Run scenarios', 'Create risk reports', 'Advise leadership decisions'], 'Policy and legal understanding improves risk governance quality.', 'Can branch into regtech and risk-tech startup opportunities.'),
  createCareer('fintech-pm', 'FinTech Product Manager', 'Build digital financial products', '', [makeSkill('Coding', 'medium'), makeSkill('Leadership', 'medium'), makeSkill('Communication', 'easy')], ['Product analytics', 'SQL', 'API tooling', 'Roadmap software'], ['Payments', 'Lending apps', 'Wealth tech', 'Insurtech'], ['Finance + product fundamentals', 'Customer discovery', 'Experiment design', 'Fintech product internship'], ['Agile certs', 'Product analytics training'], ['Onboarding funnel optimizer', 'Feature A/B test plan', 'Fraud KPI dashboard'], ['Prioritize roadmap', 'Align engineering/compliance', 'Track growth metrics', 'Run product reviews'], 'Computer engineering/CS improves execution with technical teams.', 'Excellent founder path in vertical fintech products.'),
  createCareer('corp-strategy', 'Corporate Strategy Manager', 'Growth, market entry, and portfolio decisions', '', [makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy'), makeSkill('Leadership', 'medium')], ['BI dashboards', 'Market intelligence tools', 'Excel', 'Presentation tools'], ['Business expansion', 'M&A strategy', 'Portfolio optimization', 'Competitive strategy'], ['Business economics + strategy', 'Case interviews', 'Corporate projects', 'Strategy internship'], ['Strategy frameworks training', 'Financial analysis cert'], ['Market-entry model', 'Adjacency expansion thesis', 'Synergy scorecard'], ['Assess markets', 'Model outcomes', 'Recommend strategic actions', 'Partner with BU leaders'], 'Operations and technical literacy increase strategic credibility.', 'Can lead to venture studio or strategic advisory startup routes.'),
  createCareer('product-marketing', 'Product Marketing Manager', 'Positioning, demand, and revenue strategy', '', [makeSkill('Communication', 'easy'), makeSkill('Data Analysis', 'medium'), makeSkill('Leadership', 'medium')], ['GA4', 'CRM analytics', 'A/B testing', 'BI dashboards'], ['SaaS growth', 'Go-to-market strategy', 'Lifecycle campaigns', 'Pricing tests'], ['Marketing analytics', 'Consumer psychology', 'Sales alignment', 'Growth internship'], ['Digital marketing certs', 'Analytics cert tracks'], ['GTM launch plan', 'CAC/LTV model', 'Messaging performance dashboard'], ['Define messaging', 'Coordinate launches', 'Measure conversion', 'Iterate channel strategy'], 'Design and behavioral economics improve messaging quality.', 'Common path to growth agency or startup CMO trajectory.'),
  createCareer('ops-manager', 'Operations Manager', 'Execution, process, and scale', '', [makeSkill('Leadership', 'medium'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')], ['ERP', 'Process mapping tools', 'Excel', 'KPI dashboards'], ['Supply chain ops', 'Service ops', 'Factory ops', 'RevOps'], ['Operations + analytics courses', 'Lean methods', 'Cross-functional projects', 'Operations internship'], ['Lean Six Sigma', 'PMP basics'], ['Process bottleneck analysis', 'SLA dashboard', 'Capacity planning model'], ['Manage workflows', 'Reduce cycle time', 'Coordinate teams', 'Standardize quality'], 'Industrial engineering and coding automation are powerful multipliers.', 'Operational consulting and process automation startups are viable.'),
  createCareer('consultant', 'Management Consultant', 'Solve high-impact business problems', '', [makeSkill('Communication', 'easy'), makeSkill('Data Analysis', 'medium'), makeSkill('Leadership', 'medium')], ['Excel', 'Slide workflows', 'Market data tools', 'Data storytelling'], ['Transformation projects', 'Cost optimization', 'Growth strategy', 'Org design'], ['Business fundamentals', 'Case interview prep', 'Client communication', 'Consulting internship'], ['Consulting toolkit workshops', 'Financial modeling refreshers'], ['Casebook with 10 solved cases', 'Operational improvement thesis', 'Pricing strategy model'], ['Frame client problems', 'Build analyses', 'Present recommendations', 'Support implementation'], 'Domain depth (engineering/healthcare/finance) creates differentiation.', 'Strong springboard to independent advisory practice.'),
  createCareer('vc', 'Venture Capital Analyst', 'Evaluate startups and markets', 'outer', [makeSkill('Financial Modeling', 'medium'), makeSkill('Communication', 'easy'), makeSkill('Data Analysis', 'medium')], ['Deal flow CRM', 'Market research tools', 'Excel', 'SQL'], ['Early-stage investing', 'Sector theses', 'Portfolio support', 'Venture scouting'], ['Startup finance', 'Technology literacy', 'Market sizing methods', 'VC fellowship/internship'], ['Startup finance programs', 'Term sheet literacy'], ['Investment memo set', 'Sector landscape map', 'Founder KPI dashboard'], ['Source companies', 'Conduct diligence', 'Build investment theses', 'Support portfolio founders'], 'Technical majors (EE/CE/biomed/CS) are very useful for deep diligence.', 'Can evolve into angel syndicates or micro-funds.'),
  createCareer('pe', 'Private Equity Associate', 'Acquire and grow businesses', 'outer', [makeSkill('Financial Modeling', 'hard'), makeSkill('Leadership', 'medium'), makeSkill('Communication', 'easy')], ['LBO models', 'Data rooms', 'Market terminals', 'Operational KPI tools'], ['Buyouts', 'Portfolio operations', 'Add-on acquisitions', 'Value creation plans'], ['Banking/consulting feeder role', 'Advanced LBO training', 'Operational diligence methods', 'PE internship/analyst pathway'], ['LBO certification workshops', 'Due diligence training'], ['LBO model pack', 'Post-acquisition value plan', 'Debt covenant monitor'], ['Analyze targets', 'Coordinate diligence', 'Build IC materials', 'Track portfolio performance'], 'Operations and engineering literacy improve value-creation plans.', 'Long-term path into entrepreneurship through acquisition.'),
  createCareer('supply-fin', 'Supply Chain Finance Lead', 'Working capital and logistics economics', 'outer', [makeSkill('Excel', 'easy'), makeSkill('Data Analysis', 'medium'), makeSkill('Leadership', 'medium')], ['ERP analytics', 'BI dashboards', 'Forecasting tools', 'SQL'], ['Inventory optimization', 'Procurement strategy', 'Cash conversion', 'Global operations'], ['Supply chain + finance blend', 'Forecasting methods', 'ERP systems', 'Operations internship'], ['APICS/CSCP', 'Finance analytics certs'], ['Inventory-to-cash dashboard', 'Supplier risk scorecard', 'Working-capital model'], ['Forecast demand', 'Optimize inventory/cash', 'Coordinate procurement/finance', 'Mitigate supplier risk'], 'Industrial engineering and analytics coding are major advantages.', 'Opportunities in supply chain analytics SaaS and consulting.'),
  createCareer('biz-intel', 'Business Intelligence Analyst', 'Data platforms for decision teams', 'outer', [makeSkill('Coding', 'medium'), makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy')], ['SQL', 'Python', 'Power BI/Tableau', 'ETL tools'], ['Revenue analytics', 'Operations intelligence', 'Marketing attribution', 'Executive reporting'], ['SQL + statistics foundation', 'Dashboard design', 'Data engineering basics', 'BI internship'], ['Cloud BI certificates', 'Data warehousing fundamentals'], ['Executive KPI cockpit', 'Cohort analysis pipeline', 'Forecast monitoring dashboard'], ['Build dashboards', 'Clean/transform data', 'Define metrics', 'Support strategic reviews'], 'CS and product knowledge make BI work more impactful.', 'Frequent launchpad for analytics consultancies and SaaS tools.'),
  createCareer('sales-eng', 'Sales Engineer (Tech)', 'Technical pre-sales and solution design', 'outer', [makeSkill('Communication', 'easy'), makeSkill('Coding', 'medium'), makeSkill('Leadership', 'medium')], ['CRM', 'Demo environments', 'API tools', 'Solution architecture docs'], ['Enterprise software', 'Industrial systems', 'Fintech platforms', 'Cloud products'], ['Technical domain depth', 'Sales process training', 'Customer discovery practice', 'Pre-sales internship'], ['Vendor solution certs', 'Demo storytelling workshops'], ['Live demo script kit', 'ROI calculator', 'POC success checklist'], ['Run demos', 'Translate requirements', 'Design solutions', 'Support account strategy'], 'Engineering background + business communication is ideal.', 'Can transition into revenue-focused startup leadership roles.'),
  createCareer('startup-op', 'Startup Operator / Founder', 'Build and scale new ventures', 'outer', [makeSkill('Leadership', 'medium'), makeSkill('Communication', 'easy'), makeSkill('Coding', 'medium'), makeSkill('Financial Modeling', 'medium')], ['No-code/prototyping tools', 'Analytics stack', 'CRM', 'Cloud basics'], ['SaaS startups', 'Marketplace ventures', 'Deep-tech commercialization', 'Agency-to-product paths'], ['Build domain expertise', 'Launch MVP quickly', 'Customer interviews', 'Iterative go-to-market experiments'], ['Incubator/accelerator programs', 'Startup finance literacy'], ['MVP with growth funnel', 'Pricing experiments', 'Monthly metrics and runway model'], ['Validate problem-solution fit', 'Acquire first users', 'Iterate product', 'Manage runway/team'], 'Any major can contribute—pair domain depth with rapid execution and sales.', 'Highest entrepreneurship upside; highest uncertainty.'),
  createCareer('revops-lead', 'Revenue Operations Lead', 'Connect sales, marketing, and finance systems', 'outer', [makeSkill('Data Analysis', 'medium'), makeSkill('Leadership', 'medium'), makeSkill('Communication', 'easy')], ['CRM', 'BI dashboards', 'SQL', 'Automation tools'], ['SaaS revenue growth', 'Pipeline forecasting', 'Go-to-market analytics', 'Pricing operations'], ['Business analytics + ops', 'Sales funnel math', 'Automation workflows', 'RevOps internship'], ['Revenue operations certifications', 'CRM admin training'], ['Pipeline conversion model', 'Forecast accuracy tracker', 'Sales efficiency dashboard'], ['Standardize funnel definitions', 'Improve forecast quality', 'Align GTM teams', 'Automate reporting'], 'Statistics and lightweight coding drastically improve RevOps effectiveness.', 'Strong path into GTM analytics consulting and growth operations startups.'),
]);

const biomedicalCareers = placeNodes([
  createCareer('biomed-device', 'Biomedical Device Engineer', 'Medical electronics and systems design', '', [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'medium'), makeSkill('Regulatory Affairs', 'medium')], ['Firmware', 'Sensor tools', 'MATLAB', 'Verification documentation'], ['Wearables', 'Implants', 'Diagnostics hardware', 'Remote monitoring'], ['Biomedical core + electronics', 'Design controls', 'Verification/validation', 'Med-device internship'], ['ISO 13485 awareness', 'Risk management (ISO 14971)'], ['Device prototype + test protocol', 'Clinical signal quality benchmark', 'Traceability matrix sample'], ['Design subsystems', 'Run validation tests', 'Document risk controls', 'Coordinate with clinicians'], 'Computer engineering adds stronger embedded and system architecture depth.', 'High startup potential in digital health and point-of-care devices.'),
  createCareer('clinical-eng', 'Clinical Engineer', 'Hospital technology operations', '', [makeSkill('Communication', 'easy'), makeSkill('Regulatory Affairs', 'medium'), makeSkill('Data Analysis', 'medium')], ['Hospital IT systems', 'Device maintenance tools', 'Asset analytics', 'Compliance workflows'], ['Hospital operations', 'Medical equipment safety', 'Procurement optimization', 'Clinical support'], ['Biomedical + healthcare systems', 'Hospital workflow understanding', 'Equipment standards', 'Clinical engineering internship'], ['CBET pathway', 'Healthcare compliance training'], ['Asset uptime dashboard', 'Preventive maintenance scheduler', 'Clinical incident root-cause report'], ['Manage equipment lifecycle', 'Support clinicians', 'Audit safety practices', 'Optimize maintenance'], 'Operations management and health informatics improve progression.', 'Opportunities in healthcare operations consulting and managed services.'),
  createCareer('bioinformatics', 'Bioinformatics Scientist', 'Computation for genomics and omics', '', [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy')], ['Python/R', 'Genomics pipelines', 'Cloud compute', 'ML tooling'], ['Precision medicine', 'Drug target discovery', 'Clinical analytics', 'Population genomics'], ['Algorithms + genomics coursework', 'Statistics depth', 'Pipeline projects', 'Research internship'], ['Cloud data certs', 'Genomics analytics workshops'], ['Variant analysis workflow', 'Gene expression dashboard', 'Reproducible pipeline repo'], ['Build analysis pipelines', 'Interpret biomarkers', 'Validate findings', 'Communicate to clinical teams'], 'CS + statistics are essential add-ons for top bioinformatics roles.', 'Strong startup pathways in diagnostics and AI-driven drug discovery.'),
  createCareer('biostat', 'Biostatistician', 'Clinical trial and health data modeling', '', [makeSkill('Data Analysis', 'hard'), makeSkill('Coding', 'medium'), makeSkill('Communication', 'easy')], ['R', 'SAS', 'Python', 'Clinical trial data platforms'], ['Trial design', 'Epidemiology analytics', 'Public health studies', 'Real-world evidence'], ['Biostatistics + epidemiology', 'Clinical trial methods', 'Reproducible reporting', 'Research internship'], ['Biostat coursework certificates', 'GCP training'], ['Survival analysis project', 'Adaptive trial simulation', 'Clinical dashboard for endpoints'], ['Define statistical plans', 'Run analyses', 'Validate assumptions', 'Report to stakeholders'], 'Public health coursework and domain specialization improve impact.', 'Niche consulting and health analytics ventures are possible.'),
  createCareer('pharma-sci', 'Pharmaceutical Scientist', 'Formulation and therapeutic development', '', [makeSkill('Data Analysis', 'medium'), makeSkill('Regulatory Affairs', 'medium'), makeSkill('Communication', 'easy')], ['Lab systems', 'QC tools', 'R', 'Manufacturing software'], ['Drug development', 'Formulation science', 'Quality systems', 'Clinical supply'], ['Pharmacology + chemistry depth', 'Formulation labs', 'GMP understanding', 'Pharma internship'], ['GMP/GxP training', 'Regulatory writing courses'], ['Stability study design', 'Formulation optimization project', 'Quality trend analysis'], ['Design experiments', 'Analyze batch outcomes', 'Coordinate QA/QC', 'Prepare documentation'], 'Chemical engineering and data science improve scale and optimization.', 'Viable path to CMO startups and specialty therapeutics ventures.'),
  createCareer('reg-affairs', 'Regulatory Affairs Specialist', 'Navigate approvals and compliance', '', [makeSkill('Regulatory Affairs', 'hard'), makeSkill('Communication', 'easy'), makeSkill('Leadership', 'medium')], ['Submission workflows', 'Quality management systems', 'Traceability tools', 'Clinical documentation'], ['FDA submissions', 'CE marking', 'Post-market surveillance', 'Design controls'], ['Regulatory pathway education', 'Medical writing', 'Risk management frameworks', 'Regulatory internship'], ['RAC pathway', 'ISO/FDA coursework'], ['Mock 510(k) dossier', 'Risk management file', 'Post-market surveillance plan'], ['Prepare submissions', 'Coordinate cross-functional evidence', 'Interpret guidance updates', 'Advise product teams'], 'Technical degree + writing excellence is a high-value combination.', 'Regulatory advisory practices are a strong entrepreneurial route.'),
  createCareer('imaging', 'Medical Imaging Engineer', 'Imaging systems and reconstruction', '', [makeSkill('Coding', 'hard'), makeSkill('MATLAB', 'medium'), makeSkill('Data Analysis', 'hard')], ['Image processing stacks', 'Python', 'MATLAB', 'GPU tools'], ['MRI/CT workflows', 'Ultrasound systems', 'AI imaging diagnostics', 'Radiology support'], ['Signals + imaging courses', 'Optimization methods', 'Clinical context', 'Imaging internship'], ['Imaging software trainings', 'Clinical imaging safety modules'], ['Reconstruction algorithm benchmark', 'Segmentation model with validation', 'Imaging quality QA toolkit'], ['Improve image pipelines', 'Evaluate diagnostic quality', 'Optimize compute performance', 'Collaborate with radiology teams'], 'Computer engineering and ML depth are excellent add-ons.', 'Strong opportunity in imaging AI startups and specialized software.'),
  createCareer('rehab', 'Rehabilitation Engineer', 'Assistive and adaptive technology design', '', [makeSkill('Communication', 'easy'), makeSkill('Coding', 'medium'), makeSkill('Circuit Design', 'medium')], ['Embedded platforms', 'CAD tools', 'Biomechanics software', 'Clinical testing tools'], ['Assistive devices', 'Mobility systems', 'Therapy technology', 'Accessibility products'], ['Biomechanics + design', 'Human factors', 'Prototype testing', 'Rehab lab internship'], ['Assistive tech training', 'Human-subjects protocol familiarity'], ['Adaptive controller prototype', 'User-centered testing report', 'Wearable assistive module'], ['Interview users', 'Prototype rapidly', 'Validate usability', 'Coordinate clinician feedback'], 'Mechanical design + UX research greatly improves outcomes.', 'Excellent niche for mission-driven product startups.'),
  createCareer('tissue', 'Tissue Engineering Specialist', 'Biomaterials and regenerative systems', 'outer', [makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy'), makeSkill('Regulatory Affairs', 'medium')], ['Lab bioprocess systems', 'Imaging tools', 'Statistical software', 'Documentation systems'], ['Regenerative medicine', 'Scaffold design', 'Biomaterials R&D', 'Translational biotech'], ['Cell biology + biomaterials', 'Bioprocess design', 'Experimental design', 'Biotech internship'], ['Bioprocess quality training', 'Translational medicine modules'], ['Biomaterial scaffold experiment', 'Cell viability analytics', 'Scale-up feasibility report'], ['Design lab studies', 'Analyze biological outcomes', 'Document protocols', 'Coordinate translational milestones'], 'Chemistry and process engineering add major value.', 'Potential path to biotech spinouts with defensible IP.'),
  createCareer('cra', 'Clinical Research Associate', 'Clinical trial operations and quality', 'outer', [makeSkill('Communication', 'easy'), makeSkill('Regulatory Affairs', 'medium'), makeSkill('Leadership', 'medium')], ['EDC systems', 'Protocol tracking tools', 'Audit workflows', 'Data query platforms'], ['Trial operations', 'Site monitoring', 'Protocol adherence', 'Drug/device studies'], ['Clinical research training', 'GCP mastery', 'Protocol literacy', 'CRA internship'], ['GCP certification', 'Clinical operations programs'], ['Site monitoring checklist', 'Protocol deviation dashboard', 'Enrollment performance tracker'], ['Monitor trial sites', 'Resolve data queries', 'Track timelines', 'Ensure protocol compliance'], 'Project management and analytics skills improve trial execution.', 'Can lead into clinical ops consulting ventures.'),
  createCareer('health-data', 'Healthcare Data Scientist', 'Analytics and ML for care systems', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Communication', 'easy')], ['Python', 'SQL', 'ML tools', 'Healthcare data platforms'], ['Readmission prediction', 'Workflow optimization', 'Population health', 'Clinical decision support'], ['Statistics + ML', 'Healthcare data standards', 'Ethics/privacy', 'Health analytics internship'], ['Cloud data certs', 'Healthcare interoperability basics'], ['Readmission model with fairness checks', 'Hospital throughput dashboard', 'Clinical NLP prototype'], ['Build predictive models', 'Validate bias/performance', 'Partner with clinicians', 'Deploy decision tools'], 'Computer engineering/CS depth improves production deployment.', 'High potential in health AI startups and analytics products.'),
  createCareer('prosthetics', 'Prosthetics Engineer', 'Advanced assistive biomechanics', 'outer', [makeSkill('Circuit Design', 'medium'), makeSkill('Coding', 'medium'), makeSkill('Communication', 'easy')], ['Embedded control', 'CAD', 'Biomechanics tools', 'Sensor integration'], ['Smart prosthetics', 'Human-machine interfaces', 'Rehab tech', 'Adaptive wearables'], ['Biomechanics + electronics', 'Human factors', 'Rapid prototyping', 'Clinical collaboration internship'], ['Rehab device standards', 'Usability engineering training'], ['Sensorized prosthetic prototype', 'Gait analysis dashboard', 'User comfort iteration report'], ['Build assistive prototypes', 'Run user tests', 'Tune control behavior', 'Document reliability'], 'Mechanical engineering and clinical partnerships are key add-ons.', 'Niche yet meaningful startup opportunities exist in assistive technology.'),
  createCareer('neuro', 'Neuroengineering Specialist', 'Brain-interface and neural systems', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Regulatory Affairs', 'medium')], ['Signal processing stacks', 'Neural data tools', 'Python/MATLAB', 'Embedded systems'], ['BCI systems', 'Neural diagnostics', 'Cognitive interfaces', 'Neurotherapeutics'], ['Neuroscience + signals', 'Machine learning', 'Neural hardware exposure', 'Research lab track'], ['Neural engineering workshops', 'Human-subject ethics training'], ['EEG decoding model', 'Closed-loop neural interface demo', 'Artifact-removal benchmark'], ['Process neural signals', 'Build models', 'Test interfaces', 'Coordinate ethics/compliance'], 'EE/computer engineering and neuroscience together create strong fit.', 'Emerging frontier for deep-tech startups and translational neurotech.'),
  createCareer('med-robotics', 'Medical Robotics Engineer', 'Robotics for surgery and care', 'outer', [makeSkill('Coding', 'hard'), makeSkill('Control Systems', 'hard'), makeSkill('Regulatory Affairs', 'medium')], ['ROS2', 'Control libraries', 'Embedded hardware', 'Safety documentation'], ['Surgical robotics', 'Rehab robotics', 'Automation in hospitals', 'Image-guided intervention'], ['Robotics + controls', 'Medical device standards', 'Clinical workflow immersion', 'Med robotics internship'], ['Safety and quality systems training', 'Robotics certifications'], ['Image-guided robot prototype', 'Safety envelope controller', 'Clinical-use simulation suite'], ['Integrate sensing/control', 'Validate safety constraints', 'Run simulated procedures', 'Coordinate clinicians and QA'], 'Computer engineering and human factors are key differentiators.', 'Strong medtech startup path with defensible technology.'),
  createCareer('digital-health-pm', 'Digital Health Product Manager', 'Product leadership for healthcare software', 'outer', [makeSkill('Leadership', 'medium'), makeSkill('Communication', 'easy'), makeSkill('Coding', 'medium')], ['Product analytics', 'EHR integrations', 'Roadmap tools', 'Cloud data services'], ['Patient engagement apps', 'Remote monitoring', 'Clinical workflows', 'Care operations software'], ['Biomedical/health domain + product skills', 'User research', 'Regulatory basics', 'Digital health internship'], ['Product certs', 'Healthcare interoperability courses'], ['MVP care-coordination app', 'Retention dashboard', 'Clinical outcomes tracking plan'], ['Prioritize roadmap', 'Balance clinical/user needs', 'Align engineering/compliance', 'Track outcomes metrics'], 'Business + UX + informatics significantly improve product outcomes.', 'Great founder path in telehealth and care-coordination products.'),
  createCareer('biomed-vc', 'Biomed Venture Analyst', 'Invest in therapeutics and devices', 'outer', [makeSkill('Financial Modeling', 'medium'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')], ['Market intelligence tools', 'Excel', 'Clinical trial databases', 'Deal CRM'], ['Biotech investing', 'Health VC', 'R&D portfolio strategy', 'Venture building'], ['Biology + finance blend', 'Clinical trial interpretation', 'Valuation methods', 'VC fellowship'], ['Healthcare finance courses', 'Investment memo workshops'], ['Therapeutic landscape map', 'Clinical-risk valuation model', 'Investment memo set'], ['Evaluate science and teams', 'Build market theses', 'Assess risk-adjusted upside', 'Support portfolio companies'], 'Finance plus technical biomedical literacy is highly valuable.', 'Can evolve into healthcare-focused funds or venture studios.'),
  createCareer('sports-biomech', 'Sports Biomechanics Engineer', 'Human performance and injury analytics', 'outer', [makeSkill('Data Analysis', 'hard'), makeSkill('Coding', 'medium'), makeSkill('Communication', 'easy')], ['Motion capture tools', 'Python/R', 'Wearable sensors', 'Visualization dashboards'], ['Athlete performance labs', 'Injury prevention programs', 'Rehab analytics', 'Sports tech products'], ['Biomechanics + statistics', 'Sensor analytics projects', 'Human performance internships', 'Applied lab studies'], ['Biomechanics certification tracks', 'Human-subjects protocol training'], ['Gait and jump mechanics dashboard', 'Injury risk classifier', 'Wearable sensor data pipeline'], ['Collect movement data', 'Build athlete models', 'Collaborate with coaches/clinicians', 'Translate findings to interventions'], 'Mechanical/biomedical + data science skills are ideal for this lane.', 'Strong startup paths in sports health and wearable performance tech.'),
]);

function buildDomain(title, subtitle, center, careers, relatedLinks = []) {
  return { title, subtitle, center, nodes: careers, links: buildLinks(center.id, careers, relatedLinks) };
}


function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function buildPopular2026Domain() {
  const categoryDefinitions = [
    { key: 'engineering', label: 'Engineering', skills: ['Coding', 'Circuit Design', 'Data Analysis'], tech: ['CAD', 'Python', 'Simulation tools'], careers: ['AI Hardware Engineer', 'Renewable Energy Engineer', 'Robotics Systems Engineer', 'Civil Infrastructure Engineer', 'Aerospace Systems Engineer', 'Automotive EV Engineer', 'Manufacturing Engineer', 'Industrial Automation Engineer'] },
    { key: 'comp-sci', label: 'Computer Science', skills: ['Coding', 'Data Analysis', 'Leadership'], tech: ['Python', 'Cloud', 'SQL'], careers: ['Machine Learning Engineer', 'Data Engineer', 'Cybersecurity Analyst', 'Cloud Architect', 'Software Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Blockchain Developer', 'AR/VR Engineer'] },
    { key: 'business', label: 'Business & Finance', skills: ['Financial Modeling', 'Communication', 'Leadership'], tech: ['Excel', 'BI dashboards', 'CRM'], careers: ['Product Manager', 'Investment Analyst', 'Business Operations Manager', 'Management Consultant', 'Marketing Strategist', 'Financial Planner', 'Revenue Operations Lead', 'Supply Chain Strategist'] },
    { key: 'science', label: 'Science & Research', skills: ['Data Analysis', 'Communication', 'Coding'], tech: ['Lab tools', 'Python', 'Statistical software'], careers: ['Biotech Research Scientist', 'Climate Scientist', 'Materials Scientist', 'Computational Chemist', 'Neuroscience Researcher', 'Geospatial Analyst', 'Astrophysics Data Scientist', 'Food Science Specialist'] },
    { key: 'healthcare', label: 'Healthcare', skills: ['Communication', 'Regulatory Affairs', 'Data Analysis'], tech: ['EHR systems', 'Imaging tools', 'Clinical data platforms'], careers: ['Nurse Practitioner', 'Physician Assistant', 'Clinical Data Manager', 'Healthcare Administrator', 'Medical Device Engineer', 'Telemedicine Product Lead', 'Genetic Counselor', 'Public Health Analyst'] },
    { key: 'education', label: 'Teaching & Education', skills: ['Communication', 'Leadership', 'Data Analysis'], tech: ['LMS platforms', 'Content tools', 'Analytics dashboards'], careers: ['STEM Teacher', 'Instructional Designer', 'Education Technology Specialist', 'Curriculum Architect', 'Academic Advisor', 'School Data Coordinator', 'Career Counselor'] },
    { key: 'government', label: 'Government & Politics', skills: ['Communication', 'Leadership', 'Data Analysis'], tech: ['Policy databases', 'GIS', 'Research tools'], careers: ['Policy Analyst', 'Urban Planner', 'Legislative Aide', 'Diplomatic Officer', 'Intelligence Analyst', 'Campaign Data Strategist', 'Public Affairs Specialist'] },
    { key: 'legal', label: 'Legal & Policy', skills: ['Communication', 'Leadership', 'Regulatory Affairs'], tech: ['Legal research tools', 'Document systems', 'Analytics'], careers: ['Corporate Attorney', 'IP Lawyer', 'Compliance Officer', 'Regulatory Counsel', 'Privacy Specialist', 'Labor Relations Advisor'] },
    { key: 'creative', label: 'Creative & Media', skills: ['Communication', 'Leadership', 'Coding'], tech: ['Design tools', 'Analytics', 'Content platforms'], careers: ['UX Designer', 'Technical Writer', 'Digital Producer', 'Game Designer', 'Brand Strategist', 'Motion Graphics Artist', 'Creative Technologist'] },
    { key: 'trades', label: 'Skilled Trades & Ops', skills: ['Leadership', 'Communication', 'Data Analysis'], tech: ['Field diagnostics', 'ERP', 'Automation tools'], careers: ['Electrician', 'HVAC Technician', 'Solar Installer', 'Construction Manager', 'Logistics Coordinator', 'Field Service Engineer', 'Quality Assurance Specialist'] }
  ];

  const categoryNodes = [];
  const careerNodes = [];
  const links = [];
  const centerId = 'popular-2026-core';

  categoryDefinitions.forEach((cat, catIndex) => {
    const categoryId = `cat-${cat.key}`;
    categoryNodes.push(createCareer(
      categoryId,
      cat.label,
      `${cat.careers.length} high-demand 2026 careers`,
      'outer',
      cat.skills.map((k) => makeSkill(k, k === 'Communication' ? 'easy' : k === 'Leadership' ? 'medium' : 'hard')),
      cat.tech,
      ['Category overview', 'Cross-major opportunities', 'Job market demand'],
      ['Build foundations', 'Develop portfolio', 'Gain internship/apprenticeship', 'Specialize by sector'],
      ['Role-specific certifications', 'Portfolio evidence', 'Professional networking'],
      ['One capstone in this category', 'One collaborative project', 'One practical industry case study'],
      ['Research openings', 'Build capabilities', 'Apply and iterate', 'Develop specialization depth'],
      'Combine this category with a secondary major/minor for higher resilience.',
      'Many careers here support startup or independent-practice pathways.'
    ));
    links.push([centerId, categoryId]);

    cat.careers.forEach((careerName) => {
      const id = `c26-${slugify(careerName)}`;
      careerNodes.push(createCareer(
        id,
        careerName,
        `${cat.label} pathway`,
        '',
        [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')],
        cat.tech,
        ['High-growth hiring market', 'Cross-functional collaboration', 'Global applicability'],
        ['Degree or training route', 'Hands-on projects', 'Internship/apprenticeship', 'Interview readiness'],
        ['Certifications where relevant', 'Evidence of outcomes', 'Professional references'],
        ['Portfolio project 1', 'Portfolio project 2', 'Measured impact summary'],
        ['Execution and problem solving', 'Stakeholder communication', 'Continuous learning and adaptation'],
        `Primary track: ${cat.label}. Helpful add-ons: analytics, communication, leadership, and domain tools.`,
        'Entrepreneurship potential varies by niche but generally strong with execution and market insight.'
      ));
      links.push([categoryId, id]);
      if (catIndex > 0) links.push([id, `cat-${categoryDefinitions[catIndex - 1].key}`, 'cross']);
    });
  });

  placeNodes(categoryNodes);
  placeNodes(careerNodes);

  const allNodes = [...categoryNodes, ...careerNodes];
  return {
    title: 'Top Careers in 2026 (Grouped by Category)',
    subtitle: '75 popular careers mapped across science, engineering, business, computing, policy, education, and more.',
    center: {
      id: centerId,
      x: 50,
      y: 49,
      label: 'Top Careers 2026',
      blurb: 'Category-first career map',
      skills: [makeSkill('Communication', 'easy'), makeSkill('Data Analysis', 'medium'), makeSkill('Coding', 'hard')],
      tech: ['Research tools', 'Analytics', 'Portfolio platforms'],
      applications: ['Career exploration', 'Major planning', 'Skill pathway mapping', 'Cross-domain planning'],
      roadmap: ['Pick 1-2 categories', 'Build skills + projects', 'Validate with internships', 'Refine toward target role'],
      credentials: ['Role-relevant credentials', 'Portfolio proof', 'Mentorship and networking'],
      projects: ['Category capstone', 'Team project', 'Applied real-world case'],
      dayToDay: ['Compare options', 'Prioritize skills', 'Execute learning plan', 'Track progress and outcomes'],
      addOns: 'Mix majors strategically (e.g., engineering + business, science + policy, CS + healthcare).',
      entrepreneurship: 'Multiple routes to startup, advisory, agency, or independent practice models.'
    },
    nodes: allNodes,
    links
  };
}

const relatedLinksByDomain = {
  ee: [
    ['chip-design', 'fpga'], ['chip-design', 'comp-eng'], ['embedded', 'comp-eng'], ['embedded', 'automotive'],
    ['power-grid', 'renewables'], ['controls', 'robotics'], ['avionics', 'rf'], ['robotics', 'automation'],
    ['signal-proc', 'rf'], ['tech-pm-ee', 'comp-eng'], ['research-ee', 'photonics'], ['automotive', 'controls'], ['motorsport-controls', 'automotive'], ['motorsport-controls', 'controls']
  ],
  finance: [
    ['fin-analyst', 'corp-strategy'], ['ib', 'pe'], ['wealth', 'vc'], ['quant', 'biz-intel'],
    ['risk', 'supply-fin'], ['fintech-pm', 'sales-eng'], ['consultant', 'corp-strategy'],
    ['startup-op', 'vc'], ['product-marketing', 'startup-op'], ['ops-manager', 'supply-fin'], ['biz-intel', 'fintech-pm'], ['revops-lead', 'product-marketing'], ['revops-lead', 'ops-manager']
  ],
  biomedical: [
    ['biomed-device', 'med-robotics'], ['biomed-device', 'clinical-eng'], ['bioinformatics', 'health-data'],
    ['biostat', 'cra'], ['pharma-sci', 'reg-affairs'], ['imaging', 'neuro'], ['rehab', 'prosthetics'],
    ['clinical-eng', 'digital-health-pm'], ['health-data', 'digital-health-pm'], ['biomed-vc', 'reg-affairs'], ['sports-biomech', 'rehab'], ['sports-biomech', 'health-data']
  ]
};

const averageSalaryById = {
  'ee-core': '$118,000', 'chip-design': '$165,000', embedded: '$128,000', 'power-grid': '$122,000', rf: '$135,000',
  controls: '$130,000', robotics: '$138,000', avionics: '$136,000', automotive: '$129,000', renewables: '$124,000',
  'signal-proc': '$140,000', fpga: '$152,000', photonics: '$141,000', process: '$133,000', automation: '$121,000',
  'comp-eng': '$149,000', 'tech-pm-ee': '$155,000', 'research-ee': '$143,000', 'motorsport-controls': '$132,000',
  'fin-core': '$121,000', 'fin-analyst': '$96,000', ib: '$175,000', wealth: '$110,000', quant: '$185,000', risk: '$128,000',
  'fintech-pm': '$162,000', 'corp-strategy': '$154,000', 'product-marketing': '$136,000', 'ops-manager': '$124,000',
  consultant: '$148,000', vc: '$142,000', pe: '$189,000', 'supply-fin': '$120,000', 'biz-intel': '$127,000',
  'sales-eng': '$145,000', 'startup-op': '$0-$500,000+', 'revops-lead': '$134,000',
  'bio-core': '$112,000', 'biomed-device': '$124,000', 'clinical-eng': '$101,000', bioinformatics: '$136,000',
  biostat: '$118,000', 'pharma-sci': '$126,000', 'reg-affairs': '$116,000', imaging: '$132,000', rehab: '$108,000',
  tissue: '$119,000', cra: '$97,000', 'health-data': '$142,000', prosthetics: '$111,000', neuro: '$145,000',
  'med-robotics': '$149,000', 'digital-health-pm': '$158,000', 'biomed-vc': '$151,000', 'sports-biomech': '$109,000'
};

const entrepreneurshipScoreById = {
  'ee-core': 86, 'chip-design': 84, embedded: 83, 'power-grid': 78, rf: 74, controls: 85, robotics: 90, avionics: 76,
  automotive: 82, renewables: 88, 'signal-proc': 81, fpga: 79, photonics: 77, process: 71, automation: 84,
  'comp-eng': 89, 'tech-pm-ee': 87, 'research-ee': 80, 'motorsport-controls': 83,
  'fin-core': 88, 'fin-analyst': 72, ib: 69, wealth: 80, quant: 85, risk: 73, 'fintech-pm': 93, 'corp-strategy': 79,
  'product-marketing': 86, 'ops-manager': 78, consultant: 82, vc: 90, pe: 76, 'supply-fin': 74, 'biz-intel': 84,
  'sales-eng': 87, 'startup-op': 97, 'revops-lead': 85,
  'bio-core': 84, 'biomed-device': 92, 'clinical-eng': 70, bioinformatics: 86, biostat: 74, 'pharma-sci': 80,
  'reg-affairs': 77, imaging: 85, rehab: 83, tissue: 79, cra: 62, 'health-data': 89, prosthetics: 88, neuro: 91,
  'med-robotics': 94, 'digital-health-pm': 90, 'biomed-vc': 88, 'sports-biomech': 84
};

const domains = {
  ee: buildDomain(
    'Electrical & Computer Engineering Constellation',
    '18+ technical pathways including motorsports, semiconductors, automation, and product leadership.',
    {
      id: 'ee-core', x: 50, y: 49, label: 'EE + CompE Core', blurb: 'Hardware, software, systems integration',
      skills: [makeSkill('Coding', 'hard'), makeSkill('Circuit Design', 'hard'), makeSkill('Control Systems', 'hard'), makeSkill('Communication', 'easy')],
      tech: ['Python', 'MATLAB', 'Embedded C/C++', 'Lab instrumentation', 'Simulation workflows'],
      applications: ['Chips', 'Energy', 'Aerospace', 'Automation', 'Medical devices'],
      roadmap: ['Core EE+CE fundamentals', 'Two domain specializations', 'Cross-functional capstone', 'Industry internship + portfolio'],
      credentials: ['FE/PE (if power)', 'Vendor tool certs', 'Safety/regulatory exposure'],
      projects: ['Cross-domain systems project', 'End-to-end design + test repo', 'Technical writeups/presentations'],
      dayToDay: ['Architect systems', 'Validate performance', 'Collaborate across HW/SW/business', 'Iterate based on constraints'],
      addOns: 'Computer engineering, CS, business, and policy each unlock additional career lanes.',
      entrepreneurship: 'High startup potential across chips, robotics, power software, and connected-device platforms.'
    },
    eeCareers,
    relatedLinksByDomain.ee
  ),
  finance: buildDomain(
    'Finance + Business Career Constellation',
    '18+ pathways from quantitative finance to strategy, operations, venture, and founder tracks.',
    {
      id: 'fin-core', x: 50, y: 49, label: 'Finance + Business Core', blurb: 'Capital, strategy, and execution',
      skills: [makeSkill('Excel', 'easy'), makeSkill('Financial Modeling', 'hard'), makeSkill('Data Analysis', 'medium'), makeSkill('Communication', 'easy')],
      tech: ['Excel', 'SQL', 'BI dashboards', 'Python'],
      applications: ['Corporate growth', 'Investing', 'Operations', 'FinTech', 'Consulting'],
      roadmap: ['Finance/accounting base', 'Analytics and decision-making', 'Domain specialization', 'Internships + portfolio'],
      credentials: ['CFA/FRM/CFP tracks', 'Data analytics certs', 'Project and leadership programs'],
      projects: ['Valuation portfolio', 'KPI dashboard pack', 'Strategic recommendation memos'],
      dayToDay: ['Analyze opportunities', 'Prioritize tradeoffs', 'Coordinate stakeholders', 'Drive measurable outcomes'],
      addOns: 'Pair with engineering/CS for technical sectors; pair with operations/design for GTM and growth.',
      entrepreneurship: 'Strong paths to advisory firms, analytics products, fintech ventures, and acquisition entrepreneurship.'
    },
    financeCareers,
    relatedLinksByDomain.finance
  ),
  biomedical: buildDomain(
    'Biomedical Engineering Constellation',
    '18+ pathways across devices, clinical operations, data science, pharma, neurotech, and digital health.',
    {
      id: 'bio-core', x: 50, y: 49, label: 'Biomedical Core', blurb: 'Health systems, devices, and translational science',
      skills: [makeSkill('Coding', 'hard'), makeSkill('Data Analysis', 'hard'), makeSkill('Regulatory Affairs', 'medium'), makeSkill('Communication', 'easy')],
      tech: ['Python/R', 'Clinical data systems', 'Signal processing', 'Device documentation'],
      applications: ['Diagnostics', 'Medical devices', 'Clinical research', 'Digital health', 'Healthcare AI'],
      roadmap: ['Biomedical fundamentals', 'Technical specialization', 'Clinical/regulatory fluency', 'Research/internships + portfolio'],
      credentials: ['GCP/quality training', 'Regulatory pathway familiarity', 'Clinical documentation skills'],
      projects: ['Clinical analytics + prototype project', 'Validation protocol + report', 'User-centered health product concept'],
      dayToDay: ['Build and validate solutions', 'Coordinate with clinicians/researchers', 'Track quality and outcomes', 'Translate science into products'],
      addOns: 'EE/computer engineering boosts device paths; business/finance boosts commercialization.',
      entrepreneurship: 'Exceptional potential in med-device, digital therapeutics, and health analytics startups.'
    },
    biomedicalCareers,
    relatedLinksByDomain.biomedical
  ),
  popular2026: buildPopular2026Domain()
};

const stage = document.getElementById('mindmapStage');
const nodeLayer = document.getElementById('nodeLayer');
const connectionLayer = document.getElementById('connectionLayer');
const domainSelect = document.getElementById('domainSelect');
const layoutRoot = document.getElementById('layoutRoot');
const panelToggle = document.getElementById('panelToggle');

const panelTitle = document.getElementById('panelTitle');
const panelSubtitle = document.getElementById('panelSubtitle');
const skillTags = document.getElementById('skillTags');
const skillDetail = document.getElementById('skillDetail');
const applicationList = document.getElementById('applicationList');
const techTags = document.getElementById('techTags');
const roadmapList = document.getElementById('roadmapList');
const credentialList = document.getElementById('credentialList');
const projectList = document.getElementById('projectList');
const workList = document.getElementById('workList');
const addOns = document.getElementById('addOns');
const entrepreneurship = document.getElementById('entrepreneurship');
const avgSalary = document.getElementById('avgSalary');
const entrepreneurshipBar = document.getElementById('entrepreneurshipBar');

let activeDomain = 'ee';
let nodesById = {};
let activeNodeId = null;
let lineRegistry = {};

function openPanel() {
  layoutRoot.classList.add('panel-open');
  layoutRoot.classList.remove('panel-closed');
  panelToggle.textContent = 'Hide details';
  panelToggle.setAttribute('aria-expanded', 'true');
}

function renderDomain(domainKey) {
  activeDomain = domainKey;
  const data = domains[domainKey];
  nodeLayer.innerHTML = '';
  connectionLayer.innerHTML = '';
  nodesById = {};

  const allNodes = [data.center, ...data.nodes];
  allNodes.forEach((node, index) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `node ${index === 0 ? 'center' : ''} ${node.type === 'outer' ? 'outer' : ''}`.trim();
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;
    el.innerHTML = `<span class="node-dot"></span><strong>${node.label}</strong><span>${node.blurb}</span>`;

    el.addEventListener('mouseenter', () => {
      updatePanel(node);
      highlightConnections(node.id);
    });
    el.addEventListener('mouseleave', () => {
      if (activeNodeId) highlightConnections(activeNodeId);
    });
    el.addEventListener('click', () => {
      document.querySelectorAll('.node').forEach((n) => n.classList.remove('active'));
      el.classList.add('active');
      activeNodeId = node.id;
      openPanel();
      updatePanel(node);
      highlightConnections(node.id);
      requestAnimationFrame(() => drawConnections(data.links));
    });

    nodesById[node.id] = { ...node, el };
    nodeLayer.appendChild(el);
  });

  requestAnimationFrame(() => {
    drawConnections(data.links);
    updatePanel(data.center);
    activeNodeId = data.center.id;
    nodesById[data.center.id]?.el.classList.add('active');
    highlightConnections(activeNodeId);
  });
}

function drawConnections(links) {
  connectionLayer.innerHTML = '';
  lineRegistry = {};
  const stageRect = stage.getBoundingClientRect();
  const centerId = domains[activeDomain].center.id;

  links.forEach(([fromId, toId, type]) => {
    const from = nodesById[fromId];
    const to = nodesById[toId];
    if (!from || !to) return;

    const a = from.el.getBoundingClientRect();
    const b = to.el.getBoundingClientRect();

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', a.left + a.width / 2 - stageRect.left);
    line.setAttribute('y1', a.top + a.height / 2 - stageRect.top);
    line.setAttribute('x2', b.left + b.width / 2 - stageRect.left);
    line.setAttribute('y2', b.top + b.height / 2 - stageRect.top);
    line.dataset.from = fromId;
    line.dataset.to = toId;
    if (fromId === centerId || toId === centerId) line.classList.add('center-link');
    if (type === 'cross') line.classList.add('cross-link');
    connectionLayer.appendChild(line);

    if (!lineRegistry[fromId]) lineRegistry[fromId] = [];
    if (!lineRegistry[toId]) lineRegistry[toId] = [];
    lineRegistry[fromId].push(line);
    lineRegistry[toId].push(line);
  });

  if (activeNodeId) highlightConnections(activeNodeId);
}

function highlightConnections(nodeId) {
  connectionLayer.querySelectorAll('line').forEach((line) => line.classList.remove('active'));
  (lineRegistry[nodeId] || []).forEach((line) => line.classList.add('active'));
}

function getTechLevel(tech) {
  const t = tech.toLowerCase();
  if (t.includes('c++') || t.includes('python') || t.includes('verilog') || t.includes('firmware') || t.includes('ml') || t.includes('signal')) return 'hard';
  if (t.includes('excel') || t.includes('crm') || t.includes('dashboard') || t.includes('roadmap') || t.includes('documentation')) return 'easy';
  return 'medium';
}

function renderList(listEl, items) {
  listEl.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function updatePanel(node) {
  panelTitle.textContent = node.label;
  panelSubtitle.textContent = node.blurb;

  skillTags.innerHTML = '';
  node.skills.forEach((skill) => {
    const tag = document.createElement('button');
    tag.type = 'button';
    tag.className = `tag ${skill.level}`;
    tag.textContent = skill.name;
    tag.addEventListener('click', () => {
      const info = skillCatalog[skill.name] || {
        description: 'Transferable skill used across multiple technical and business pathways.',
        acquire: 'Build this through deliberate projects, internships, guided coursework, and reflective iteration.'
      };
      skillDetail.textContent = `${skill.name}: ${info.description} | How to acquire: ${info.acquire}`;
    });
    skillTags.appendChild(tag);
  });

  const firstSkill = node.skills[0]?.name;
  if (firstSkill) {
    const info = skillCatalog[firstSkill] || { description: 'Core career skill.', acquire: 'Build through projects and internships.' };
    skillDetail.textContent = `${firstSkill}: ${info.description} | How to acquire: ${info.acquire}`;
  }

  techTags.innerHTML = '';
  node.tech.forEach((tech) => {
    const tag = document.createElement('span');
    tag.className = `tag ${getTechLevel(tech)}`;
    tag.textContent = tech;
    techTags.appendChild(tag);
  });

  renderList(applicationList, node.applications);
  renderList(roadmapList, node.roadmap);
  renderList(credentialList, node.credentials);
  renderList(projectList, node.projects);
  renderList(workList, node.dayToDay);
  addOns.textContent = node.addOns;
  entrepreneurship.textContent = node.entrepreneurship;
  const salaryFallback = node.id.startsWith('c26-') ? '$95,000 (varies by role/region)' : node.id.startsWith('cat-') ? '$110,000 (category average estimate)' : 'Salary varies by region, sector, and seniority';
  avgSalary.textContent = averageSalaryById[node.id] || salaryFallback;
  const score = entrepreneurshipScoreById[node.id] ?? 70;
  entrepreneurshipBar.style.width = `${Math.max(0, Math.min(100, score))}%`;
}


panelToggle.addEventListener('click', () => {
  const isOpen = layoutRoot.classList.contains('panel-open');
  layoutRoot.classList.toggle('panel-open', !isOpen);
  layoutRoot.classList.toggle('panel-closed', isOpen);
  panelToggle.textContent = isOpen ? 'Show details' : 'Hide details';
  panelToggle.setAttribute('aria-expanded', String(!isOpen));
  requestAnimationFrame(() => drawConnections(domains[activeDomain].links));
});

domainSelect.addEventListener('change', (event) => {
  renderDomain(event.target.value);
});

window.addEventListener('resize', () => {
  drawConnections(domains[activeDomain].links);
});

renderDomain(activeDomain);
