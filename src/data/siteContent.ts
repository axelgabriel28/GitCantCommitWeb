export type DocumentItem = { title: string; description: string; format: string; href: string; index: string; action: string }
export type TeamMember = { name: string; role: string; link: string }
const projectLinks = {
  project: 'https://gitcantcommitnasa-web-1qpt.vercel.app/',
  demonstration: 'https://canva.link/gitcantcommit-moonward-demonstration',
}

export const siteContent = {
  links: projectLinks,
  project: {
    name: 'Moonward',
    challenge: 'NASA Space Apps Challenge 2026',
    tagline: 'Plan the Moon by light, time, and horizon.',
    intro: 'Moonward is an interactive lunar planning experience that helps people compare where and when a mission could operate near the Moon\'s south pole.',
    meta: 'Browser experience / Built with Godot',
  },
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'The Challenge', href: '#challenge' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Game Modes', href: '#game-modes' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Credits', href: '#credits' },
  ],
  challenge: {
    kicker: 'The challenge',
    title: 'A small change can rewrite the plan.',
    body: 'Missions to the Moon\'s south pole face an unusual planning problem. The terrain is rugged, sunlight can change dramatically across short distances, and direct-to-Earth communication depends on where Earth appears in the sky at a given time.',
    detail: 'The data exists in powerful technical tools such as JPL Horizons, NASA Moon Trek, and LROC QuickMap. But comparing several site-and-date scenarios quickly can be difficult, especially for educators, students, and members of the public.',
    stat: { value: '2–4', label: 'candidate plans in one workspace', note: 'Compare site, time, illumination, horizon events, and source information.' },
  },
  solution: {
    kicker: 'Our solution',
    title: 'Make the cause of a change visible.',
    body: 'Moonward turns a complex planning question into a focused comparison experience. Choose a site. Change the landing time. See how the Sun and Earth move against the local horizon. Then make a clear, evidence-based plan — including what the available data cannot yet prove.',
    demoLabel: 'Moonward browser experience',
    demoNote: 'Open the project or watch the demonstration.',
  },
  howItWorks: [
    { label: '01', title: 'Choose a mission objective', body: 'Start with a practical question: can the plan provide a continuous sunlight interval, create a nominal Earth-visibility opportunity, or simply help inspect the available evidence?' },
    { label: '02', title: 'Compare site and time', body: 'Pin two to four candidate plans and compare their location, UTC start, duration, illumination state, horizon events, and source information in one workspace.' },
    { label: '03', title: 'Read the horizon', body: 'Use Horizon Lens to see the Sun and Earth as directions above the local lunar skyline. Connect measured geometry to terrain that may obstruct the sky.' },
    { label: '04', title: 'Test a schedule change', body: 'Change the landing date, time, or site and inspect what changed. Keep the original plan visible so a new scenario can be evaluated rather than guessed at.' },
    { label: '05', title: 'Save the reasoning', body: 'Review the inputs, modeled results, uncertainty, and data sources in an immutable evidence brief.' },
  ],
  gameModes: [
    { label: 'Navigator', image: '/modes/navigator-v1.png', body: 'The primary comparison board. Explore site-and-date candidates, scrub their forecast, inspect the horizon, and save a reasoned brief without needing to complete a mission first.' },
    { label: 'Quick Expeditions', image: '/modes/quick-expeditions-v1.png', body: 'Short interactive scenarios that turn the same planning decisions into playable lessons. Compare alternatives, schedule activities, submit a plan, and receive a debrief.' },
    { label: 'Horizon Lens', image: '/modes/horizon-lens-v1.png', body: 'A visual explanation layer for Sun and Earth events. It shows azimuth, elevation, skyline direction, and the relationship between the selected record and the optional 3D lunar surface inspection.' },
    { label: 'Free Explore', image: '/modes/free-explore-v1.png', body: 'An optional way to inspect registered lunar surface contexts and experience the scale of the environment without changing the scientific assessment origin.' },
  ],
  missions: [
    { title: 'Science Outpost', subtitle: 'Catch the Light', body: 'Compare site and touchdown-time options for a continuous sunlight objective. Learn how a small change in location or time can affect the length and continuity of an illuminated interval.', image: '/missions/01-catch-the-light.png', imageAlt: 'Catch the Light mission in Moonward' },
    { title: 'Sunset Operations', subtitle: 'After the Sun', body: 'Plan a six-hour activity window that crosses a change in lunar light conditions. Recognize the transition and explain why the available geometry is not enough to certify electrical endurance.', image: '/missions/02-after-the-sun.png', imageAlt: 'After the Sun mission in Moonward' },
    { title: 'Earth Link', subtitle: 'Hello, Earth?', body: 'Search for a nominal continuous Earth-centre-visible opportunity inside a mission plan. Separate geometric visibility from the engineering evidence needed to prove a communications link.', image: '/missions/03-hello-earth.png', imageAlt: 'Hello, Earth? mission in Moonward' },
  ],
  evidence: {
    kicker: 'Read the model carefully',
    title: 'A result is not a guarantee.',
    canShow: ['Relative Sun and Earth positions above the local horizon', 'Full, partial, or blocked sunlight states in the modeled interval', 'Nominal Earth-centre visibility opportunities', 'Differences between candidate sites and landing times', 'Horizon events and schedule changes within the available data window'],
    cannotClaim: 'Moonward does not certify landing safety, battery survival, solar-array output, thermal performance, or radio reception. Earth visibility is a geometric observation, not a communications link budget.',
  },
  documents: [
    { index: '01', title: 'Play the experience', description: 'Open the browser build and try Navigator, Quick Expeditions, Horizon Lens, and Free Explore.', format: 'Website', href: projectLinks.project, action: 'Play Moonward' },
    { index: '02', title: 'Project brief', description: 'Product goals, challenge alignment, game structure, and MVP scope behind the experience.', format: 'Documentation', href: '?document=project-brief', action: 'Read the brief' },
    { index: '03', title: 'Science and validation', description: 'Sun and Earth positions, local skylines, terrain, intervals, and known limitations.', format: 'Documentation', href: '?document=science-and-validation', action: 'View validation' },
    { index: '04', title: 'Game design', description: 'The player loop, mission objectives, comparison board, evidence briefs, and learning expeditions.', format: 'Documentation', href: '?document=game-design', action: 'Read game design' },
    { index: '05', title: 'Data sources and credits', description: 'Data provenance, software credits, supporting references, and validation notes.', format: 'Documentation', href: '?document=data-sources-and-credits', action: 'View credits' },
    { index: '06', title: 'Walkthrough', description: 'Follow the intended player journey and demonstration script.', format: 'Documentation', href: '?document=walkthrough', action: 'Read walkthrough' },
  ] satisfies DocumentItem[],
  credits: {
    teamName: 'Moonward',
    note: 'An educational lunar planning experience for NASA Space Apps Challenge 2026.',
    data: 'JPL Horizons-derived Sun and Earth ephemeris data; lunar topography and terrain information informed by NASA LOLA data; local skyline and horizon calculations for curated lunar sites.',
    technology: 'Godot 4 and Web Compatibility export for the browser experience.',
    links: [
      { label: 'Project website', href: projectLinks.project },
      { label: 'Project demonstration', href: projectLinks.demonstration },
      { label: 'Science and validation', href: '?document=science-and-validation' },
      { label: 'NASA Space Apps', href: '#' },
    ],
  },
  footer: {
    note: 'Built with bundled data, documented assumptions, and respect for the difference between modeled geometry and mission evidence.',
  },
}
