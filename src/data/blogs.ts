export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  paragraphs: string[];
}

export const blogsData: BlogPost[] = [
  {
    slug: "building-custom-home-toowoomba",
    title: "CUSTOM NEW HOME BUILDS IN TOOWOOMBA: WHAT TO EXPECT",
    tag: "New Builds",
    date: "Oct 12, 2026",
    image: "/assets/jsg/new-home-b_015.webp",
    paragraphs: [
      "Building a custom home is one of the most rewarding milestones in life. At JSG Constructions, we believe the experience should be as enjoyable and stress-free as the final result.",
      "From soil testing and site orientation across Toowoomba's undulating Darling Downs landscape to council approvals and architectural refinement, our team works with you at every milestone.",
      "We combine modern energy efficiency with timeless craftsmanship, ensuring your bespoke residence endures Queensland's distinct climate while celebrating your family's personal lifestyle."
    ]
  },
  {
    slug: "queenslander-cottage-renovations",
    title: "RENOVATING CLASSIC QUEENSLANDER COTTAGES WITH MODERN LUXURY",
    tag: "Renovations",
    date: "Sep 28, 2026",
    image: "/assets/jsg/home-renov_156.jpg",
    paragraphs: [
      "Preserving the historic charm of a character home while introducing modern open-plan luxury requires deep structural respect and seasoned builder expertise.",
      "In our award-winning 'Grace' Arthur project, we retained original VJ panelling, hardwood timber floors, and decorative fretwork while expanding the footprint into a light-filled entertainer's kitchen.",
      "Our bespoke approach ensures seamless transitions between heritage authenticity and state-of-the-art residential comfort."
    ]
  },
  {
    slug: "award-winning-bathroom-design",
    title: "AWARD-WINNING BATHROOM & INTERIOR ARCHITECTURE DESIGN",
    tag: "Awards & Design",
    date: "Aug 15, 2026",
    image: "/assets/jsg/new-home-b_016.jpg",
    paragraphs: [
      "Recognized by Master Builders Queensland for Best Residential Bathroom, the Jameela Ranch project reflects our meticulous attention to detail.",
      "From bespoke floating vanities and floor-to-ceiling porcelain slabs to concealed lighting and precision plumbing fixtures, luxury is defined by unseen craftsmanship.",
      "Kimberley and our design advisory team assist clients personally through showroom selections to guarantee harmonious materiality."
    ]
  },
  {
    slug: "architectural-home-extensions",
    title: "HOW ARCHITECTURAL EXTENSIONS ADD EXPONENTIAL PROPERTY VALUE",
    tag: "Extensions",
    date: "Jul 20, 2026",
    image: "/assets/jsg/home-exten_251.webp",
    paragraphs: [
      "When your family outgrows your current floor plan, moving isn't always the answer—especially in highly sought-after East Toowoomba and Rangeville neighborhoods.",
      "A thoughtfully engineered extension can transform a cramped 3-bedroom layout into an expansive 4 or 5-bedroom luxury estate with alfresco living.",
      "JSG Constructions specializes in structural extensions that integrate flawlessly with your existing roofline and architectural proportions."
    ]
  },
  {
    slug: "sustainable-building-practices",
    title: "SUSTAINABLE BUILDING PRACTICES IN THE DARLING DOWNS",
    tag: "Sustainability",
    date: "Jun 10, 2026",
    image: "/assets/jsg/home-renov_157.jpg",
    paragraphs: [
      "Our Master Builders award for Excellence in Sustainable Living highlights our dedication to future-proof, energy-resilient construction.",
      "By incorporating passive solar orientation, double-glazed thermal windows, and high-performance insulation, JSG homes dramatically reduce lifecycle cooling and heating costs.",
      "True luxury is comfortable in every season, effortlessly blending sustainability with high-end architectural appeal."
    ]
  },
  {
    slug: "master-builders-qld-standards",
    title: "WHY BUILDING WITH A MASTER BUILDER MATTERS",
    tag: "Industry Standards",
    date: "May 04, 2026",
    image: "/assets/jsg/home-exten_252.webp",
    paragraphs: [
      "As an accredited Master Builders Queensland member and Rising Star recipient, JSG Constructions adheres to rigorous quality benchmarks and transparent client communication.",
      "Director Josh Goodall remains actively on-site, supervising trades and ensuring structural integrity from foundation pour to final handover.",
      "With licensed builders you gain complete peace of mind, backed by QBCC home warranty insurance and honest, upfront fixed-price quoting."
    ]
  }
];
