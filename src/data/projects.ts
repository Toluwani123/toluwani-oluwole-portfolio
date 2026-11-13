export type Category = "software" | "ai" | "hardware";
export interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  hotspots?: {
    label: string;
    owner: "I built this" | "Team built this";
    text: string;
    x: number;
    y: number;
  }[];
}
export interface Project {
  slug: string;
  title: string;
  short: string;
  aliases?: string[];
  categories: Category[];
  date?: string;
  status: "Completed";
  discipline: string;
  color: string;
  stack: string[];
  summary: string;
  role: string;
  problem: string;
  contribution: string[];
  flow: { label: string; mine?: boolean }[];
  flowText: string;
  decisions: { title: string; text: string }[];
  outcome: string;
  scope: string;
  repo?: string;
  demo?: string;
  photo?: Photo;
  audio?: { src: string; caption: string; transcript: string };
  video?: {
    src: string;
    poster?: string;
    caption: string;
    transcript: string;
    captions?: string;
  };
  capabilities?: string[];
}
export const projects: Project[] = [
  {
    slug: "recconnect",
    title: "RecConnect",
    short: "A consistent check-in, from interface to database.",
    categories: ["software"],
    date: "Jan–May 2026",
    status: "Completed",
    discipline: "Full-stack · Internal campus platform",
    color: "#E2EBE3",
    stack: ["React", "Node.js", "PostgreSQL", "Firebase Auth", "JWT"],
    summary:
      "An internal campus recreation platform connecting activity discovery, occupancy information and QR-based check-ins through authenticated, persistent sessions.",
    role: "Full-stack development · client, API and check-in workflows",
    problem:
      "Activity availability, authentication and check-in state need to agree. A check-in is useful only when the interface and the stored session tell the same story.",
    contribution: [
      "Designed the client/server architecture and built React activity and session interfaces.",
      "Implemented Node.js REST APIs backed by PostgreSQL, with Firebase Authentication and JWT access checks.",
      "Built QR-based check-in workflows and session persistence, supporting state updates for concurrent users.",
    ],
    flow: [
      { label: "Student interface", mine: true },
      { label: "Auth / JWT", mine: true },
      { label: "Check-in API", mine: true },
      { label: "Session storage", mine: true },
    ],
    flowText:
      "A student uses the React interface. Firebase authentication and JWT checks protect requests to the Node.js check-in API, which persists session data in PostgreSQL. This is a high-level flow, with no internal endpoints or student records.",
    decisions: [
      {
        title: "Treat the session as a system boundary",
        text: "The check-in flow combines QR input, protected requests and persistent session data. Keeping these responsibilities explicit makes it possible to reason about what the interface displays and what the backend stores.",
      },
      {
        title: "Protect the request, not just the page",
        text: "Protected routes and API access checks work together. Authentication belongs at the server boundary as well as in the browsing experience.",
      },
    ],
    outcome:
      "Completed the internal platform with activity browsing, authentication and QR check-in/session workflows. The architecture here explains the work without exposing campus records or internal implementation details.",
    scope:
      "Occupancy is presented as a platform feature. No sensor source, concurrency algorithm, user count or load benchmark is asserted.",
  },
  {
    slug: "sheet-music-to-sound-reader",
    title: "Sheet Music to Sound Reader",
    short: "From a photographed score to scheduled sound.",
    categories: ["hardware"],
    date: "Fall 2026",
    status: "Completed",
    discipline: "Capstone · Embedded audio",
    color: "#DFE7DF",
    stack: ["TI MSP432E401Y", "C", "UART", "MIDI", "SPI / DAC"],
    summary:
      "We built a system that turns photographed sheet music into audio. I built the embedded receiving and playback subsystem on the MSP432, from incoming MIDI data to DAC output.",
    role: "Embedded receiving, validation, parsing, scheduling, synthesis and DAC output",
    problem:
      "The recognition stage and the audio device operate at different boundaries. The embedded system must receive a complete file, validate it, interpret musical timing and deliver scheduled sound through real hardware.",
    contribution: [
      "I implemented the MSP432 receiving and validation path for MIDI transferred from the host over UART.",
      "I parsed MIDI note events and timing, scheduled playback, and built waveform synthesis for the DAC output path.",
      "I debugged noise in the amplifier/speaker chain using staged output checks, GPIO amplifier-enable sequencing and serial/breakpoint tracing.",
      "We integrated the host-to-device transfer and audio playback as a completed Fall 2026 capstone. The team owned image capture and optical music recognition.",
    ],
    flow: [
      { label: "Capture / OMR" },
      { label: "Host / MIDI" },
      { label: "Receive / validate", mine: true },
      { label: "Parse / schedule", mine: true },
      { label: "Synthesize / DAC", mine: true },
    ],
    flowText:
      "We capture and recognize sheet music, then the host sends MIDI to the MSP432. I built receiving and validation, MIDI parsing and scheduling, synthesis and DAC output. Image capture and recognition are team work outside my embedded subsystem.",
    decisions: [
      {
        title: "Receive and validate before playback",
        text: "File reception and musical timing are separate responsibilities. Length-aware transfer handling and MIDI structure validation protect playback from truncated or corrupted inputs. The diagram stays at block level because transport iterations differed.",
      },
      {
        title: "Debug the complete audio path",
        text: "Noise in the speaker did not automatically mean the synthesizer was wrong. Checking output at different points isolated amplifier-enable control; correcting its sequencing resolved the reported noise/static issue.",
      },
    ],
    outcome:
      "Completed in Fall 2026. Documented integration includes Raspberry Pi-to-MSP432 UART transfer and audio playback. Repeatable MIDI inputs covered normal playback, invalid input and payload boundaries; staged hardware checks isolated the amplifier issue.",
    scope:
      "The documented playback scope is monophonic MIDI. I do not claim the recognition stage, polyphony, an undocumented final packet format or a measured audio-quality benchmark.",
  },
  {
    slug: "ai-software-design-generator",
    title: "AI Software Design Generator",
    short: "Separate generation from the work of evaluating it.",
    categories: ["software", "ai"],
    date: "Dec 2025",
    status: "Completed",
    discipline: "AI workflows · Developer tools",
    color: "#E7E2F0",
    stack: ["Python", "AutoGen", "LLMs", "Structured artifacts"],
    summary:
      "A Python tool that turns natural-language software descriptions into structured design artifacts through planner, coder and evaluator responsibilities.",
    role: "Python workflow orchestration and structured artifact generation",
    problem:
      "A requirements description and a coherent technical design are different things. Generation benefits from an explicit planning stage and a separate review pass that can identify inconsistencies.",
    contribution: [
      "Built the natural-language-to-artifact generation workflow in Python.",
      "Organized AutoGen responsibilities around planner, coder and evaluator roles.",
      "Used evaluation and revision passes to identify design inconsistencies and refine structured output.",
    ],
    flow: [
      { label: "Requirements" },
      { label: "Planner", mine: true },
      { label: "Coder", mine: true },
      { label: "Evaluator", mine: true },
      { label: "Revision", mine: true },
    ],
    flowText:
      "Requirements enter a planner, the coder produces structured artifacts, and an evaluator reviews them. Evaluation informs revision. These are workflow responsibilities, not a claim that generated code is automatically correct or executable.",
    capabilities: [
      "Accept natural-language software requirements",
      "Generate UML-related design artifacts",
      "Produce structured code artifacts",
      "Evaluate design consistency",
      "Revise output through specialized agent roles",
    ],
    decisions: [
      {
        title: "Give review its own responsibility",
        text: "Planning, generating and evaluating are separate roles. This keeps the evaluation step explicit instead of treating the first output as the final design.",
      },
      {
        title: "Prefer structured artifacts",
        text: "The workflow targets design diagrams and structured code artifacts rather than only a prose response. Structure gives subsequent review something concrete to inspect.",
      },
    ],
    outcome:
      "Completed the multi-agent design-generation workflow. The capability list and diagram describe the implementation; no sample output, measured quality score or provider-specific claim is presented.",
    scope:
      "Generated artifacts still require engineering review. The documented record does not establish particular UML subtypes, executable-code guarantees or benchmark results.",
  },
  {
    slug: "stm32-wav-audio-player",
    title: "STM32 Touchscreen WAV Audio Player",
    short: "Keep audio moving while the interface stays responsive.",
    categories: ["hardware"],
    date: "Jan–May 2026",
    status: "Completed",
    discipline: "Real-time systems · Audio",
    color: "#E0E8EB",
    stack: ["STM32F429", "C / FreeRTOS", "TouchGFX", "FATFS", "DMA / DAC"],
    summary:
      "A touchscreen-controlled WAV player coordinating SD-card reads, interface tasks and continuous DAC delivery with FreeRTOS and DMA ping-pong buffering.",
    role: "RTOS tasks, storage integration and buffered audio delivery",
    problem:
      "Reading a file, updating a touchscreen and delivering audio samples place different demands on a microcontroller. Continuous playback needs a data path that leaves room for concurrent work.",
    contribution: [
      "Developed concurrent FreeRTOS tasks for WAV playback, storage interactions and the TouchGFX interface.",
      "Integrated SD-card access through FATFS and touchscreen file selection.",
      "Implemented DMA-driven DAC streaming with ping-pong buffering and debugged peripheral integration.",
    ],
    flow: [
      { label: "SD / FATFS", mine: true },
      { label: "Buffer A ↔ B", mine: true },
      { label: "DMA", mine: true },
      { label: "DAC / audio", mine: true },
    ],
    flowText:
      "FATFS reads WAV data from the SD card into alternating buffers. DMA feeds the DAC from one buffer while the other is replenished. Separate FreeRTOS tasks coordinate interface and storage work.",
    decisions: [
      {
        title: "Alternate the buffers",
        text: "One buffer supplies the DAC while the next is filled. DMA ping-pong buffering reduces CPU work for repeated sample delivery and supports concurrent UI and storage tasks.",
      },
      {
        title: "Separate timing responsibilities",
        text: "FreeRTOS tasks organize audio, touchscreen and file access. The buffering boundary keeps sample delivery distinct from user navigation.",
      },
    ],
    outcome:
      "Completed touchscreen file navigation and WAV playback with concurrent RTOS tasks and DMA-driven DAC output. The documented result reports uninterrupted audio; CPU work is described qualitatively.",
    scope:
      "No CPU percentage or controlled performance benchmark is asserted. The block diagram describes buffering responsibilities rather than an undocumented task schedule.",
  },
  {
    slug: "sprintbudget",
    title: "SprintBudget",
    aliases: ["SprintBudgetPro"],
    short: "Bring imports and spending data into one scoped view.",
    categories: ["software"],
    date: "Jul 2025",
    status: "Completed",
    discipline: "Full-stack · Personal finance",
    color: "#E3EEDC",
    stack: ["React.js", "Django (REST)", "PostgreSQL", "Plaid"],
    summary:
      "A budgeting application combining Plaid and CSV imports with transaction categorization, expense management and authenticated, user-scoped data.",
    role: "Full-stack finance workflows, API integration and data isolation",
    problem:
      "Transaction data arrives through different sources. A budgeting tool must normalize imports while keeping each user’s financial information within the right access boundary.",
    contribution: [
      "Designed transaction models and REST endpoints for financial-data workflows.",
      "Integrated Plaid and CSV imports, with validation across import sources.",
      "Built a React.js expense interface with rules-based categorization, bulk editing and authenticated data isolation.",
    ],
    flow: [
      { label: "Plaid / CSV" },
      { label: "Django API", mine: true },
      { label: "PostgreSQL", mine: true },
      { label: "React.js view", mine: true },
    ],
    flowText:
      "Plaid and CSV sources feed the Django REST API. Authenticated data is stored in PostgreSQL and presented in a React.js expense interface, with user-scoped access and categorization.",
    decisions: [
      {
        title: "Scope data at the API boundary",
        text: "Authentication and per-user access are part of transaction handling. The interface is backed by scoped API behavior rather than relying on client-side filtering for isolation.",
      },
      {
        title: "Make categorization editable",
        text: "Rules-based categorization and bulk editing let the application organize imports while supporting changes across transactions.",
      },
    ],
    outcome:
      "Completed the budgeting application with imports, transaction APIs, categorization and expense-management workflows. SprintBudgetPro is the same project under its earlier name.",
    scope:
      "No live-banking mode, financial recommendation or user metric is claimed.",
    demo: "https://sprintbudgetapp.onrender.com/",
  },
  {
    slug: "automated-laundry-sorter",
    title: "Automated Laundry Sorter",
    short: "Turn noisy sensor readings into an ordered physical action.",
    categories: ["hardware"],
    date: "Dec 2025",
    status: "Completed",
    discipline: "Robotics · Sensor integration",
    color: "#F0E4D8",
    stack: ["Raspberry Pi 4", "Python", "TCS3200 / DHT22", "PWM", "I2C LCD"],
    summary:
      "A sensor-driven sorting workflow combining calibrated readings, classification, a four-servo arm and status feedback through a modular Python state machine.",
    role: "End-to-end sorting software, sensing and actuator sequencing",
    problem:
      "A physical sorting sequence depends on both usable sensor readings and predictable movement. Inconsistent readings and out-of-order poses need deliberate handling.",
    contribution: [
      "Led software development for the sorting sequence and modular Python state machine.",
      "Integrated color/humidity sensing, calibration and retry/backoff handling.",
      "Implemented ordered four-servo poses, PWM motion, I2C LCD status and GPIO cleanup.",
    ],
    flow: [
      { label: "Sensor readings" },
      { label: "Calibration", mine: true },
      { label: "Classification", mine: true },
      { label: "Servo sequence", mine: true },
      { label: "LCD status", mine: true },
    ],
    flowText:
      "Color and humidity readings are calibrated and classified by Python software. The result drives an ordered four-servo sequence, with LCD status and cleanup/error handling. No undocumented state names are implied.",
    decisions: [
      {
        title: "Handle inconsistent inputs explicitly",
        text: "Calibration and retry/backoff logic sit ahead of classification. This makes unstable reads an explicit part of the workflow.",
      },
      {
        title: "Order the physical sequence",
        text: "Servo poses are sequenced rather than issued as unrelated movements. GPIO cleanup provides a defined shutdown path.",
      },
    ],
    outcome:
      "Completed the sensor-to-actuator sorting workflow, including calibration, retry handling, four-servo control and status display. The documentation establishes the build and control approach, without a measured sorting-accuracy claim.",
    scope:
      "No throughput, payload, accuracy or undocumented controller role is assigned. The diagram stays at the documented block level.",
  },
  {
    slug: "fpga-warehouse-rover",
    title: "FPGA Autonomous Warehouse Rover",
    short: "Digital control, from an IR command to a servo claw.",
    categories: ["hardware"],
    date: "May 2025",
    status: "Completed",
    discipline: "Digital design · Robotics",
    color: "#E0E6F0",
    stack: ["Verilog", "Basys-3 FPGA", "FSM", "PWM / H-bridge", "IR input"],
    summary:
      "An FPGA controller coordinating IR command decoding, motor actuation and a servo-driven retrieval mechanism through a Verilog finite-state machine.",
    role: "Verilog control logic and hardware integration",
    problem:
      "Navigation and object retrieval require motor and claw behavior to follow a predictable control sequence. Digital logic has to coordinate inputs and actuators as one system.",
    contribution: [
      "Designed the finite-state-machine control logic on the Basys-3 FPGA.",
      "Implemented IR command decoding and PWM-based motor/servo control.",
      "Integrated input, H-bridge motor behavior and the servo claw, with iterative hardware demonstrations.",
    ],
    flow: [
      { label: "IR / sensors" },
      { label: "Verilog FSM", mine: true },
      { label: "PWM control", mine: true },
      { label: "Motors / claw" },
    ],
    flowText:
      "IR commands and sensor inputs feed the Verilog finite-state controller. PWM control drives the H-bridge/motors and servo claw. These are functional blocks, not reconstructed state names.",
    decisions: [
      {
        title: "Coordinate through explicit control logic",
        text: "The finite-state-machine approach gives command handling and actuator sequencing a shared control structure.",
      },
      {
        title: "Integrate on the actual hardware",
        text: "Iterative demonstrations brought input decoding, motor behavior and retrieval together rather than evaluating each signal in isolation.",
      },
    ],
    outcome:
      "The rover completed its navigation and retrieval demo task. This is a bounded demonstration result, described without a success percentage or a general reliability claim.",
    scope:
      "No trial count, autonomous mapping capability or exact state diagram is inferred from the supplied material.",
  },
  {
    slug: "mangamorph-ai",
    title: "MangaMorph AI",
    short: "Extract Japanese text. Translate it into English.",
    categories: ["software", "ai"],
    date: "Jul 2025",
    status: "Completed",
    discipline: "AI application · OCR and translation",
    color: "#ECE1EA",
    stack: ["Python", "Django REST", "React", "OCR", "Machine translation"],
    summary:
      "A manga translation application that uses OCR to extract Japanese text from manga pages and translates the extracted text into English.",
    role: "Translation application, backend models and processing workflow",
    problem:
      "Text on a manga page starts as image content. Translation first requires extracting that Japanese text into a form a translation service can process.",
    contribution: [
      "Built backend structures for projects, chapters, pages and text blocks.",
      "Implemented the OCR extraction and Japanese-to-English translation workflow.",
      "Developed the React application and REST-facing data structures for the processing flow.",
    ],
    flow: [
      { label: "Manga page" },
      { label: "OCR extraction", mine: true },
      { label: "Japanese text" },
      { label: "Translation", mine: true },
      { label: "English text" },
    ],
    flowText:
      "A manga page passes through OCR to extract Japanese text. That extracted text is translated into English. The flow ends at translated text.",
    decisions: [
      {
        title: "Keep extraction and translation distinct",
        text: "OCR handles text extraction; translation operates on the extracted content. The project’s data model separates pages and text blocks within chapters and projects.",
      },
    ],
    outcome:
      "Completed the OCR-to-English translation application. Its scope is extraction and translation, with no translation-accuracy figure asserted.",
    scope:
      "This case study describes the extraction/translation pipeline and its application data model.",
    repo: "https://github.com/Toluwani123/MangaMorph",
  },
  {
    slug: "samthafs-construction",
    title: "Samthafs Construction",
    short: "A business website backed by structured content.",
    categories: ["software"],
    status: "Completed",
    discipline: "Business web application",
    color: "#E9E6DC",
    stack: ["Django REST", "React", "PostgreSQL"],
    summary:
      "A construction-company web application with a Django REST backend and React interface for project, service and inquiry content.",
    role: "Business website development",
    problem:
      "A company website needs a way to organize service information, completed work and incoming inquiries beyond static page copy.",
    contribution: [
      "The project combines a Django REST backend with a React interface.",
      "Its documented content workflows cover projects, services and inquiries.",
    ],
    flow: [
      { label: "Visitor" },
      { label: "React interface" },
      { label: "Django REST" },
      { label: "Content / inquiries" },
    ],
    flowText:
      "Visitors browse the React interface, which connects with a Django REST backend for project, service and inquiry content. This is a project architecture overview; individual subsystem ownership is not assigned.",
    decisions: [
      {
        title: "Separate content from presentation",
        text: "The existing project record describes a custom content backend paired with a responsive web interface. The two responsibilities meet through REST APIs.",
      },
    ],
    outcome:
      "Completed the business website project. The current website and the separately documented 2022 internship are described independently.",
    scope:
      "The supplied record does not establish the current website’s build date or its exact relationship to the internship deliverable. No such relationship is assumed.",
    repo: "https://github.com/Toluwani123/Samthafs-Construction",
    demo: "https://samthafsapp.onrender.com/",
  },
  {
    slug: "ratemyapartments",
    title: "RateMyApartments",
    short: "Housing reviews with a campus context.",
    categories: ["software"],
    status: "Completed",
    discipline: "Full-stack · Student housing",
    color: "#F0E3DE",
    stack: ["Django", "React", "PostgreSQL"],
    summary:
      "A campus-focused apartment review application for housing ratings, written reviews and filtered housing information.",
    role: "Campus housing web application",
    problem:
      "Students comparing apartments need both structured ratings and written experiences, with filters that help narrow housing information.",
    contribution: [
      "The application combines campus apartment ratings and comments with housing filters.",
      "The documented stack is Django, React and PostgreSQL.",
    ],
    flow: [
      { label: "Housing search" },
      { label: "Filters / React" },
      { label: "Django API" },
      { label: "Reviews / ratings" },
    ],
    flowText:
      "A student searches and filters housing information through a React interface. Django and PostgreSQL support apartment reviews and ratings. This high-level diagram does not assign undocumented subsystem ownership.",
    decisions: [
      {
        title: "Combine structured and written information",
        text: "Ratings provide a comparable signal while written reviews provide context. The project presents both within a campus-focused housing experience.",
      },
    ],
    outcome:
      "Completed the campus apartment review project described in the existing portfolio.",
    scope:
      "No project date, user study, review count or measured housing outcome is asserted.",
    repo: "https://github.com/Toluwani123/RateMyAparments",
    demo: "https://ratemyapartments-uwcj.onrender.com/",
  },
];
export const categoryLabels: Record<Category, string> = {
  software: "Software",
  ai: "AI",
  hardware: "Embedded & hardware",
};
