const makeSkill = (name, level) => ({ name, level });

const domains = {
  ee: {
    center: {
      id: 'ee-core',
      label: 'Electrical Engineering',
      blurb: 'Systems, hardware, software, and controls',
      x: 49,
      y: 42,
      skills: [makeSkill('Coding', 'hard'), makeSkill('Math Modeling', 'hard'), makeSkill('Lab Skills', 'medium')],
      tech: ['MATLAB', 'Python', 'LTspice', 'Oscilloscope', 'C/C++'],
      applications: ['Consumer hardware', 'Energy systems', 'Telecom', 'Automation'],
      roadmap: ['BS in EE/CE', 'Circuits + Signals + Controls', '2 hardware projects + 1 software project', 'Internship in hardware/system teams'],
      dayToDay: ['Design blocks and test benches', 'Debug measurements', 'Write documentation', 'Collaborate with mechanical/software teams'],
      addOns: 'Pair with CS for embedded/AI, with business for product/operations, or with policy for grid and energy regulation.',
      entrepreneurship: 'Strong startup routes: IoT products, sensing platforms, power optimization, robotics tooling.'
    },
    nodes: [
      {
        id: 'chips', x: 22, y: 21, label: 'Chips / VLSI', blurb: 'Silicon architecture and verification',
        skills: [makeSkill('HDL Coding', 'hard'), makeSkill('Digital Logic', 'hard'), makeSkill('Verification', 'hard'), makeSkill('Team Process', 'easy')],
        tech: ['Verilog/SystemVerilog', 'UVM', 'Cadence/Synopsys', 'Timing Analysis'],
        applications: ['AI accelerators', 'Phone SoCs', 'Automotive chips', 'Edge compute devices'],
        roadmap: ['Digital design coursework', 'Computer architecture', 'FPGA capstone', 'Intern with ASIC/FPGA team'],
        dayToDay: ['Write RTL', 'Run simulation regressions', 'Fix timing/power constraints', 'Review tape-out checklists'],
        addOns: 'CS or computer architecture background helps for microarchitecture and compiler-hardware co-design.',
        entrepreneurship: 'Fabless startup path: specialized inference chips, sensor SoCs, and custom edge boards.'
      },
      {
        id: 'aerospace', x: 50, y: 16, label: 'Aerospace EE', blurb: 'Avionics, controls, and telemetry',
        skills: [makeSkill('Control Theory', 'hard'), makeSkill('MATLAB/R', 'medium'), makeSkill('Safety Mindset', 'medium')],
        tech: ['Simulink', 'C/C++', 'Sensor Fusion', 'CAN/UART'],
        applications: ['Flight control', 'Drones', 'Spacecraft avionics', 'Navigation systems'],
        roadmap: ['Controls + dynamics', 'Signal estimation', 'Embedded systems', 'Flight software internship'],
        dayToDay: ['Tune controllers', 'Analyze logs', 'Integrate sensors', 'Test on hardware-in-loop rigs'],
        addOns: 'Mechanical/aero minor strengthens dynamics and systems-level design.',
        entrepreneurship: 'Drone autonomy and aerospace telemetry startups are high-growth niches.'
      },
      {
        id: 'power', x: 75, y: 22, label: 'Power Systems', blurb: 'Grid, renewables, and protection',
        skills: [makeSkill('Power Electronics', 'hard'), makeSkill('Excel', 'easy'), makeSkill('Risk Analysis', 'medium')],
        tech: ['ETAP', 'SCADA', 'PSCAD', 'MATLAB'],
        applications: ['Microgrids', 'EV charging', 'Renewable integration', 'Utility reliability'],
        roadmap: ['Power systems sequence', 'Protection relays lab', 'Energy economics intro', 'Utility internship'],
        dayToDay: ['Load flow studies', 'Protection coordination', 'Outage planning', 'Interconnection analysis'],
        addOns: 'Finance/policy coursework is valuable for regulated markets and project economics.',
        entrepreneurship: 'Strong consulting and software opportunities in grid analytics and DER orchestration.'
      },
      {
        id: 'robotics', x: 30, y: 61, label: 'Robotics', blurb: 'Controls + embedded + mechatronics',
        skills: [makeSkill('Embedded Coding', 'hard'), makeSkill('Prototyping', 'medium'), makeSkill('Communication', 'easy')],
        tech: ['ROS2', 'Microcontrollers', 'CAD', 'Computer Vision'],
        applications: ['Manufacturing robots', 'Warehouse automation', 'Field robotics', 'Medical robotics'],
        roadmap: ['Controls + mechatronics', 'Real-time systems', 'Robotics capstone', 'Autonomy internship'],
        dayToDay: ['Build control loops', 'Integrate actuators/sensors', 'Run hardware tests', 'Improve reliability'],
        addOns: 'Mechanical + CS skills improve full-stack robot design.',
        entrepreneurship: 'Excellent path for vertical automation startups and robotics-as-a-service.'
      },
      {
        id: 'signals', x: 61, y: 60, label: 'Signal Processing', blurb: 'DSP, communications, and data',
        skills: [makeSkill('Mathematics', 'hard'), makeSkill('Python', 'hard'), makeSkill('Presentation', 'easy')],
        tech: ['DSP', 'NumPy/SciPy', 'RF tools', 'PyTorch'],
        applications: ['Wireless comms', 'Audio processing', 'Radar', 'Medical signal analysis'],
        roadmap: ['Probability + random processes', 'DSP course', 'Comms systems', 'Research/internship'],
        dayToDay: ['Design filters/models', 'Analyze noisy data', 'Evaluate model performance', 'Deploy inference code'],
        addOns: 'Statistics/ML coursework broadens options into AI-heavy industries.',
        entrepreneurship: 'Great for software products around analytics, diagnostics, and telecom optimization.'
      },
      {
        id: 'eefin', x: 82, y: 58, label: 'EE × Finance', blurb: 'Technical investing and valuation', type: 'outer',
        skills: [makeSkill('Excel', 'easy'), makeSkill('Modeling', 'medium'), makeSkill('Technical Diligence', 'hard')],
        tech: ['Excel', 'Python', 'Market terminals', 'Energy models'],
        applications: ['Infra investing', 'Semiconductor equity research', 'Climate project finance'],
        roadmap: ['Corporate finance basics', 'Valuation', 'Energy/tech electives', 'Investment internship'],
        dayToDay: ['Build models', 'Write investment memos', 'Track KPIs', 'Review technical assumptions'],
        addOns: 'Add accounting and markets coursework; CFA prep helps for analyst routes.',
        entrepreneurship: 'Advisory, niche funds, and technical due-diligence boutiques are common startup paths.'
      },
      {
        id: 'eebio', x: 15, y: 58, label: 'EE × Biomedical', blurb: 'Devices, sensors, and diagnostics', type: 'outer',
        skills: [makeSkill('Signal Analysis', 'hard'), makeSkill('Regulatory Awareness', 'medium'), makeSkill('Cross-team Work', 'easy')],
        tech: ['Bioinstrumentation', 'Firmware', 'MATLAB', 'Clinical data tools'],
        applications: ['Wearables', 'Implant monitoring', 'Point-of-care diagnostics', 'Hospital systems'],
        roadmap: ['Bio-signals + instrumentation', 'Physiology basics', 'Design controls/regulatory intro', 'Medtech internship'],
        dayToDay: ['Collect sensor data', 'Validate clinical metrics', 'Document risks', 'Iterate prototype hardware'],
        addOns: 'Biology/clinical coursework improves translation from prototype to patient-safe product.',
        entrepreneurship: 'Very strong in digital health and regulated med-device startups.'
      }
    ],
    links: [
      ['ee-core', 'chips'], ['ee-core', 'aerospace'], ['ee-core', 'power'], ['ee-core', 'robotics'], ['ee-core', 'signals'],
      ['chips', 'signals'], ['aerospace', 'robotics'], ['power', 'eefin', 'cross'], ['robotics', 'eebio', 'cross'], ['signals', 'eebio']
    ]
  },
  finance: {
    center: {
      id: 'fin-core', label: 'Finance', blurb: 'Capital, markets, and business decisions', x: 49, y: 42,
      skills: [makeSkill('Excel', 'easy'), makeSkill('Analytical Thinking', 'medium'), makeSkill('Communication', 'easy')],
      tech: ['Excel', 'SQL', 'Power BI', 'Python'],
      applications: ['Corporate planning', 'Investing', 'Risk management', 'Growth strategy'],
      roadmap: ['Finance + accounting base', 'Valuation + statistics', 'Case competitions', 'Internship in banking/corp fin/asset mgmt'],
      dayToDay: ['Build reports/models', 'Present recommendations', 'Monitor KPIs', 'Support strategic decisions'],
      addOns: 'Data science for quant/analytics and engineering knowledge for technical sectors.',
      entrepreneurship: 'Paths include advisory firms, fintech products, niche agencies, and investment research shops.'
    },
    nodes: [
      {
        id: 'wealth', x: 23, y: 22, label: 'Wealth Management', blurb: 'Client strategy and portfolios',
        skills: [makeSkill('Relationship Building', 'easy'), makeSkill('Portfolio Theory', 'medium'), makeSkill('Compliance', 'medium')],
        tech: ['CRM tools', 'Portfolio software', 'Excel'],
        applications: ['Family offices', 'Private banking', 'Retirement planning'],
        roadmap: ['Licensing path', 'Portfolio management basics', 'Client communication training', 'Advisor apprenticeship'],
        dayToDay: ['Meet clients', 'Rebalance portfolios', 'Explain risk/returns', 'Coordinate tax/legal partners'],
        addOns: 'Psychology and communications help for trust-building and retention.',
        entrepreneurship: 'Independent advisory practice is a direct entrepreneurial route.'
      },
      {
        id: 'analyst', x: 50, y: 16, label: 'Financial Analyst', blurb: 'Forecasting and valuation',
        skills: [makeSkill('Excel', 'easy'), makeSkill('Accounting', 'hard'), makeSkill('Storytelling', 'medium')],
        tech: ['Excel', 'PowerPoint', 'ERP tools', 'SQL'],
        applications: ['Budget planning', 'M&A support', 'Performance reporting'],
        roadmap: ['Accounting sequence', 'Financial statement analysis', 'Forecasting projects', 'Corporate internship'],
        dayToDay: ['Create forecasts', 'Variance analysis', 'Scenario planning', 'Executive brief preparation'],
        addOns: 'Operations knowledge improves forecasting quality for product-heavy businesses.',
        entrepreneurship: 'Can branch into fractional-CFO and strategy consulting offerings.'
      },
      {
        id: 'quant', x: 75, y: 22, label: 'Quant', blurb: 'Math + code for markets',
        skills: [makeSkill('Coding', 'hard'), makeSkill('Statistics', 'hard'), makeSkill('Research', 'medium')],
        tech: ['Python', 'R', 'C++', 'Backtesting frameworks'],
        applications: ['Algo trading', 'Risk models', 'Derivative pricing'],
        roadmap: ['Probability/stats', 'Numerical methods', 'ML electives', 'Quant internship/research'],
        dayToDay: ['Model alpha/risk', 'Backtest strategies', 'Clean market data', 'Iterate execution systems'],
        addOns: 'CS/Math major or minor usually needed for top-tier quant roles.',
        entrepreneurship: 'Best for analytics products, data tools, and systematic strategy firms.'
      },
      {
        id: 'marketing-manager', x: 33, y: 61, label: 'Marketing Manager', blurb: 'Growth and campaign economics',
        skills: [makeSkill('Campaign Analytics', 'medium'), makeSkill('Leadership', 'medium'), makeSkill('Creativity', 'easy')],
        tech: ['GA4', 'CRM analytics', 'A/B testing', 'Attribution platforms'],
        applications: ['Customer growth', 'Product positioning', 'Revenue operations'],
        roadmap: ['Marketing analytics', 'Consumer behavior', 'Growth experiments', 'Brand or growth internship'],
        dayToDay: ['Set campaign strategy', 'Track funnel metrics', 'Coordinate creative teams', 'Optimize CAC/LTV'],
        addOns: 'Design and psychology help for product messaging and behavior insights.',
        entrepreneurship: 'High potential for growth agencies and product-led startup leadership.'
      },
      {
        id: 'fintech', x: 61, y: 60, label: 'FinTech Builder', blurb: 'Finance × engineering', type: 'outer',
        skills: [makeSkill('API Thinking', 'hard'), makeSkill('Product Design', 'medium'), makeSkill('Operations', 'easy')],
        tech: ['Cloud stack', 'Python', 'Data pipelines', 'Payments APIs'],
        applications: ['Payments', 'Lending automation', 'Personal finance', 'Insurtech'],
        roadmap: ['Product management basics', 'Software lifecycle', 'Regulatory concepts', 'Fintech internship/project'],
        dayToDay: ['Define features', 'Prioritize roadmap', 'Analyze cohorts', 'Coordinate engineering/compliance'],
        addOns: 'CS and legal/regulatory literacy significantly de-risk execution.',
        entrepreneurship: 'Very strong startup landscape with clear paths to MVP and SaaS scale.'
      },
      {
        id: 'fin-ee', x: 15, y: 58, label: 'Finance × EE', blurb: 'Industrial and energy economics', type: 'outer',
        skills: [makeSkill('Tech Diligence', 'hard'), makeSkill('Excel', 'easy'), makeSkill('Systems Insight', 'medium')],
        tech: ['Financial models', 'Energy simulators', 'Python'],
        applications: ['Energy investing', 'Hardware strategy', 'Infrastructure valuation'],
        roadmap: ['Energy markets', 'Corporate valuation', 'Power systems overview', 'Infra/energy internship'],
        dayToDay: ['Model project returns', 'Assess engineering risk', 'Create investor updates', 'Track policy impacts'],
        addOns: 'EE courses add major edge in project-finance and technical underwriting.',
        entrepreneurship: 'Strong in technical advisory and climate-finance platforms.'
      }
    ],
    links: [
      ['fin-core', 'wealth'], ['fin-core', 'analyst'], ['fin-core', 'quant'], ['fin-core', 'marketing-manager'],
      ['fin-core', 'fintech'], ['fin-core', 'fin-ee', 'cross'], ['analyst', 'quant'], ['marketing-manager', 'wealth'], ['quant', 'fintech', 'cross']
    ]
  },
  biomedical: {
    center: {
      id: 'bio-core', label: 'Biomedical Engineering', blurb: 'Health technology and life science systems', x: 49, y: 42,
      skills: [makeSkill('Biology Foundations', 'hard'), makeSkill('Research Methods', 'medium'), makeSkill('Teamwork', 'easy')],
      tech: ['R/Python', 'Lab systems', 'Clinical data tools', 'Imaging workflow'],
      applications: ['Diagnostics', 'Therapeutics', 'Patient monitoring', 'Clinical operations'],
      roadmap: ['Biology + physiology base', 'Statistics + instrumentation', 'Clinical/regulatory exposure', 'Research or medtech internship'],
      dayToDay: ['Run studies', 'Analyze outcomes', 'Coordinate with clinicians', 'Document protocols and safety'],
      addOns: 'EE for device-heavy paths, CS for bioinformatics, finance for biotech investing.',
      entrepreneurship: 'Excellent for med-device, digital health, and translational biotech ventures.'
    },
    nodes: [
      {
        id: 'rd', x: 24, y: 22, label: 'R&D', blurb: 'Discovery and prototyping',
        skills: [makeSkill('Experimental Design', 'hard'), makeSkill('Data Analysis', 'medium'), makeSkill('Collaboration', 'easy')],
        tech: ['LIMS', 'Python', 'Imaging systems', 'Assay tooling'],
        applications: ['New therapies', 'Bioinstrumentation', 'Clinical innovation'],
        roadmap: ['Research methods', 'Biostatistics', 'Capstone/research thesis', 'Lab internship'],
        dayToDay: ['Run experiments', 'Troubleshoot protocols', 'Interpret data', 'Present findings'],
        addOns: 'Chemistry and data-science depth can accelerate both discovery and translational work.',
        entrepreneurship: 'Foundational for IP-backed biotech and medtech spinouts.'
      },
      {
        id: 'medicine', x: 50, y: 16, label: 'Medicine', blurb: 'Clinical diagnosis and care pathways',
        skills: [makeSkill('Diagnostics', 'hard'), makeSkill('Communication', 'easy'), makeSkill('Evidence Review', 'medium')],
        tech: ['EHR tools', 'Imaging systems', 'Telemedicine platforms'],
        applications: ['Patient care', 'Clinical leadership', 'Digital clinics'],
        roadmap: ['Pre-med sequence', 'Clinical exposure', 'Licensing pathway', 'Residency/fellowship specialization'],
        dayToDay: ['Assess patients', 'Interpret tests', 'Create treatment plans', 'Coordinate multidisciplinary teams'],
        addOns: 'Business and informatics support leadership in health system innovation.',
        entrepreneurship: 'Healthcare delivery startups and workflow tools are strong options.'
      },
      {
        id: 'pharma', x: 75, y: 22, label: 'Pharmaceutics', blurb: 'Drug formulation and regulation',
        skills: [makeSkill('Regulatory Affairs', 'hard'), makeSkill('Process Discipline', 'medium'), makeSkill('Documentation', 'easy')],
        tech: ['GMP systems', 'QC analytics', 'R', 'Manufacturing software'],
        applications: ['Formulation', 'Manufacturing quality', 'Clinical supply'],
        roadmap: ['Pharmacology + chemistry', 'GMP/quality systems', 'Regulatory frameworks', 'Pharma internship'],
        dayToDay: ['Monitor batch quality', 'Track deviations', 'Prepare filings', 'Coordinate manufacturing and QA'],
        addOns: 'Chemical engineering and data analytics improve scale-up and quality optimization.',
        entrepreneurship: 'CMO services and targeted therapeutic platforms are viable startup routes.'
      },
      {
        id: 'bio-data', x: 35, y: 61, label: 'Bioinformatics', blurb: 'Biology × computation',
        skills: [makeSkill('Coding', 'hard'), makeSkill('Statistics', 'hard'), makeSkill('Scientific Writing', 'medium')],
        tech: ['Python/R', 'Genomics pipelines', 'Cloud compute', 'ML libraries'],
        applications: ['Precision medicine', 'Genomic analytics', 'Clinical AI support'],
        roadmap: ['Algorithms + statistics', 'Genomics/omics courses', 'Pipeline projects', 'Research lab or biotech internship'],
        dayToDay: ['Build analysis pipelines', 'Validate models', 'Interpret biomarkers', 'Communicate to clinical teams'],
        addOns: 'CS depth is often essential; medicine context helps with deployment relevance.',
        entrepreneurship: 'Excellent for diagnostics SaaS and AI-enabled therapeutic discovery.'
      },
      {
        id: 'bio-finance', x: 61, y: 60, label: 'Biomed × Finance', blurb: 'Healthcare investing', type: 'outer',
        skills: [makeSkill('Clinical Literacy', 'hard'), makeSkill('Valuation', 'medium'), makeSkill('Excel', 'easy')],
        tech: ['Biotech dashboards', 'Excel', 'Market intelligence'],
        applications: ['Biotech equity research', 'Health VC', 'R&D portfolio strategy'],
        roadmap: ['Healthcare economics', 'Valuation', 'Clinical trial interpretation', 'Investment internship'],
        dayToDay: ['Review trial data', 'Model market size', 'Assess risk-adjusted return', 'Draft investment memos'],
        addOns: 'Strong biology/medicine fluency is a major differentiator in investment decisions.',
        entrepreneurship: 'Niche healthcare advisory and venture studio models are common.'
      },
      {
        id: 'bio-ee', x: 15, y: 58, label: 'Biomed × EE', blurb: 'Medical devices and sensing', type: 'outer',
        skills: [makeSkill('Embedded Systems', 'hard'), makeSkill('Clinical Validation', 'medium'), makeSkill('Prototyping', 'easy')],
        tech: ['Firmware', 'Signal processing', 'Sensor systems', 'Regulatory docs'],
        applications: ['Wearables', 'Assistive devices', 'Remote monitoring'],
        roadmap: ['Embedded systems', 'Biosignals', 'Design controls', 'Med-device internship'],
        dayToDay: ['Prototype electronics', 'Test with clinicians', 'Validate performance', 'Prepare regulatory evidence'],
        addOns: 'EE + physiology combo gives strong edge for product-market fit in med-device.',
        entrepreneurship: 'Highly viable path for device startups with clear clinical pain points.'
      }
    ],
    links: [
      ['bio-core', 'rd'], ['bio-core', 'medicine'], ['bio-core', 'pharma'], ['bio-core', 'bio-data'],
      ['bio-core', 'bio-finance', 'cross'], ['bio-core', 'bio-ee', 'cross'], ['rd', 'bio-data'], ['medicine', 'pharma'], ['bio-data', 'bio-ee']
    ]
  }
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
const applicationList = document.getElementById('applicationList');
const techTags = document.getElementById('techTags');
const roadmapList = document.getElementById('roadmapList');
const workList = document.getElementById('workList');
const addOns = document.getElementById('addOns');
const entrepreneurship = document.getElementById('entrepreneurship');

let activeDomain = 'ee';
let nodesById = {};

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
    el.innerHTML = `<strong>${node.label}</strong><span>${node.blurb}</span>`;

    el.addEventListener('mouseenter', () => updatePanel(node));
    el.addEventListener('click', () => {
      document.querySelectorAll('.node').forEach((n) => n.classList.remove('active'));
      el.classList.add('active');
      updatePanel(node);
    });

    nodesById[node.id] = { ...node, el };
    nodeLayer.appendChild(el);
  });

  requestAnimationFrame(() => {
    drawConnections(data.links);
    updatePanel(data.center);
    nodesById[data.center.id]?.el.classList.add('active');
  });
}

function drawConnections(links) {
  connectionLayer.innerHTML = '';
  const stageRect = stage.getBoundingClientRect();

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
    if (type === 'cross') line.classList.add('cross-link');
    connectionLayer.appendChild(line);
  });
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
    const tag = document.createElement('span');
    tag.className = `tag ${skill.level}`;
    tag.textContent = skill.name;
    skillTags.appendChild(tag);
  });

  techTags.innerHTML = '';
  node.tech.forEach((tech) => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = tech;
    techTags.appendChild(tag);
  });

  renderList(applicationList, node.applications);
  renderList(roadmapList, node.roadmap);
  renderList(workList, node.dayToDay);

  addOns.textContent = node.addOns;
  entrepreneurship.textContent = node.entrepreneurship;
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
