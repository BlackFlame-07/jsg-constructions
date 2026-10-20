export interface Property {
  slug: string;
  title: string;
  price: string;
  address: string;
  beds: string;
  baths: string;
  sqft: string;
  description: string;
  image: string;
  gallery: string[];
}

export const propertiesData: Property[] = [
  {
    slug: "jameela-ranch",
    title: "JAMEELA RANCH PROJECT",
    price: "MASTER BUILDERS AWARD WINNER",
    address: "Darling Downs, Toowoomba QLD",
    beds: "5",
    baths: "4",
    sqft: "5,400",
    description: "Winner of Best Residential Bathroom by Master Builders Queensland. A bespoke modern rural estate combining natural timber, stone finishes, and floor-to-ceiling panoramic valley views.",
    image: "/assets/jsg/new-home-b_015.webp",
    gallery: [
      "/assets/jsg/new-home-b_015.webp",
      "/assets/jsg/home-renov_156.jpg",
      "/assets/jsg/new-home-b_135.jpg",
      "/assets/jsg/home-renov_157.jpg"
    ]
  },
  {
    slug: "hentschel-project",
    title: "THE HENTSCHEL RESIDENCE",
    price: "INDIVIDUAL HOME $651K - $750K",
    address: "Rangeville, Toowoomba QLD",
    beds: "4",
    baths: "3",
    sqft: "4,200",
    description: "Award-winning custom build recognized for architectural craftsmanship, custom cabinetry, and energy-efficient climate design tailored to Toowoomba's seasons.",
    image: "/assets/jsg/new-home-b_016.jpg",
    gallery: [
      "/assets/jsg/new-home-b_016.jpg",
      "/assets/jsg/home-exten_251.webp",
      "/assets/jsg/home-renov_156.jpg"
    ]
  },
  {
    slug: "deuchar-views",
    title: "DEUCHAR VIEWS ESTATE",
    price: "SUSTAINABLE LIVING EXCELLENCE",
    address: "Deuchar, Darling Downs QLD",
    beds: "5",
    baths: "4",
    sqft: "6,100",
    description: "Master Builders award winner for Excellence in Sustainable Living. Designed with high thermal efficiency, solar integration, and expansive indoor-outdoor entertaining zones.",
    image: "/assets/jsg/home-exten_251.webp",
    gallery: [
      "/assets/jsg/home-exten_251.webp",
      "/assets/jsg/new-home-b_015.webp",
      "/assets/jsg/home-exten_252.webp"
    ]
  },
  {
    slug: "grace-arthur",
    title: "THE GRACE ARTHUR COTTAGE",
    price: "RENOVATION $200K - $400K",
    address: "East Toowoomba, QLD",
    beds: "4",
    baths: "2",
    sqft: "3,200",
    description: "A breathtaking full transformation of an authentic Queenslander workers cottage, preserving original timber fretwork while delivering an open-concept luxury entertainer's kitchen.",
    image: "/assets/jsg/home-renov_156.jpg",
    gallery: [
      "/assets/jsg/home-renov_156.jpg",
      "/assets/jsg/home-renov_157.jpg",
      "/assets/jsg/home-exten_252.webp"
    ]
  },
  {
    slug: "finnie-lodge",
    title: "FINNIE LODGE LUXURY BUILD",
    price: "CUSTOM RESIDENCE",
    address: "Finnie, Toowoomba Region QLD",
    beds: "5",
    baths: "3",
    sqft: "4,800",
    description: "A private country lodge featuring exposed raked ceilings, custom stonework, and expansive verandahs crafted to celebrate Queensland's outdoor lifestyle.",
    image: "/assets/jsg/home-exten_252.webp",
    gallery: [
      "/assets/jsg/home-exten_252.webp",
      "/assets/jsg/new-home-b_016.jpg",
      "/assets/jsg/home-renov_157.jpg"
    ]
  },
  {
    slug: "inadale-queenslander",
    title: "INADALE HERITAGE RESTORATION",
    price: "BESPOKE EXTENSION",
    address: "East Toowoomba, QLD 4350",
    beds: "4",
    baths: "3",
    sqft: "3,800",
    description: "Seamlessly expanding a classic 3-bedroom home into a spacious 4-bedroom, 3-bathroom family sanctuary with matching architectural heritage profiles.",
    image: "/assets/jsg/home-renov_157.jpg",
    gallery: [
      "/assets/jsg/home-renov_157.jpg",
      "/assets/jsg/home-renov_156.jpg",
      "/assets/jsg/new-home-b_015.webp"
    ]
  }
];
