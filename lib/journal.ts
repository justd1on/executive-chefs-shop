export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
  relatedProducts: string[];
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-a-chefs-knife",
    title: "How to Choose the Right Chef's Knife",
    description:
      "Blade length, shape, balance, and upkeep: a practical guide to choosing a chef's knife that fits the way you actually cook.",
    excerpt:
      "Blade length, shape, and balance: what actually matters when you pick the knife you'll use every day.",
    image: "/img/products/executive-chef-collection/d6712fbb-e04b-41da-8b81-c23b368ef878.png",
    imageAlt: "Chef knives with blue resin handles laid out on a rustic wooden table",
    datePublished: "2026-11-15",
    readMinutes: 3,
    sections: [
      {
        heading: "What size chef's knife should you buy?",
        paragraphs: [
          "For most home cooks, an 8-inch chef's knife is the best all-around size. It's long enough to slice through a large onion or a roast in one stroke, but short enough to stay easy to control on an average cutting board.",
          "A 6-inch knife can feel more comfortable if you have smaller hands or a small board, and it's handy for quick weeknight prep. A 10-inch blade gives you more reach for big-batch cooking and large cuts of meat, but it takes more practice and more counter space. If you're unsure, start with 8 inches. The Artisan Damascus-Pattern Chef Knife, for example, has an 8-inch (20.3 cm) blade.",
        ],
      },
      {
        heading: "Which blade shape fits the way you cook?",
        paragraphs: [
          "Choose a Western-style chef's knife if you like to rock the blade as you chop, and a santoku or nakiri if you mostly cut straight down and push forward.",
          "A classic chef's knife has a curved belly that rolls smoothly on the board, which makes it great for mincing herbs and garlic. A santoku has a flatter edge and a rounded tip, built for clean up-and-down chopping and thin slices. A nakiri has a straight, rectangular blade designed for vegetables. Wide cleaver-style blades, like The Signature Dual-Purpose Cleaver, add another trick: the blade doubles as a scoop to carry food from the board to the pan.",
          "If you cook a bit of everything, a set that includes more than one profile, such as the Precision Culinary Master Set, lets you use the right shape for each job.",
        ],
      },
      {
        heading: "How should a chef's knife feel in your hand?",
        paragraphs: [
          "A good chef's knife feels balanced near the point where the blade meets the handle, so it doesn't pull your wrist toward the tip or the end of the handle.",
          "Most cooks hold a chef's knife with a pinch grip: thumb and index finger pinching the blade just in front of the handle, with the other fingers wrapped around the handle. A bolster, the thick collar between blade and handle, gives your fingers a comfortable resting point. Weight is personal. A heavier knife lets the blade do more of the work on dense vegetables, while a lighter one feels quicker for fine prep. If you can, hold a knife before you buy it, or check the return policy so you can try it at home.",
        ],
      },
      {
        heading: "Do the blade's finish and pattern matter?",
        paragraphs: [
          "A blade's finish mostly affects its looks and how easily food releases; sharpness depends on the edge itself and on how well you maintain it.",
          "Damascus-pattern and hammered finishes are popular because they look striking. Hammered dimples can also help thin slices of potato or cucumber release from the blade instead of sticking. Neither finish makes a dull knife sharp, though. What you'll notice day to day is a thin, well-kept edge, a comfortable handle, and a blade that's easy to clean.",
        ],
      },
      {
        heading: "Should you buy a knife set or a single knife?",
        paragraphs: [
          "Buy a single chef's knife if you want to start small, and a set if you're replacing a drawer full of dull, mismatched knives.",
          "One good chef's knife will handle most of what you cook, and you can add a paring knife or a slicer later. A set makes sense when you want everything to match and cover every job at once. The Executive Chef Collection, for example, pairs broad chef's blades for chopping with slimmer knives for slicing and detail work and a cleaver-style blade for heavier prep, and every Ridge Cutlery knife set ships with a free 4-in-1 Pro Sharpener.",
        ],
      },
      {
        heading: "How do you keep a new chef's knife sharp?",
        paragraphs: [
          "Hone it often, sharpen it occasionally, and always cut on a wood or plastic board.",
          "Honing realigns an edge that has rolled slightly out of line with use, and a few light strokes on a tool like the Pro-Grade Honing Steel before you cook keep the knife cutting cleanly. When honing no longer brings the edge back, it's time to sharpen, which removes a little metal to create a fresh edge; a guided tool such as the 4-in-1 Pro Sharpener makes that simple. Wash your knife by hand, dry it right away, and keep it out of the dishwasher, where heat and rattling can damage both the edge and the handle.",
        ],
      },
    ],
    relatedProducts: [
      "damascus-pattern-chef-knife",
      "executive-chef-collection",
      "signature-dual-purpose-cleaver",
      "pro-grade-honing-steel",
    ],
  },
  {
    slug: "damascus-pattern-vs-damascus-steel",
    title: "Damascus Pattern vs. Damascus Steel: What's the Difference?",
    description:
      "What “Damascus steel” and “Damascus-pattern” really mean, how to tell them apart, and whether the pattern changes how a knife cuts.",
    excerpt:
      "What the wavy pattern on a blade really tells you, and why it's about the look, not the cut.",
    image: "/img/products/damascus-pattern-chef-knife/ad8bad33-521c-438e-b6ef-4ed8bf1b86c9.webp",
    imageAlt: "Damascus-pattern knives with light wood handles on a kitchen table with fresh vegetables",
    datePublished: "2026-11-15",
    readMinutes: 3,
    sections: [
      {
        heading: "What is Damascus steel?",
        paragraphs: [
          "Today, “Damascus steel” usually means pattern-welded steel: layers of two or more different steels joined together at high heat, folded or stacked, and then etched so the layers show up as a wavy pattern.",
          "The name comes from historical blades traded through Damascus, Syria, centuries ago. Those were made from a crucible steel often called wootz, and the exact method behind their famous watery pattern was eventually lost. Modern makers revived the look with pattern welding, which produces a similar effect by a different route. When you see “Damascus” on a knife today, it almost always refers to this layered construction.",
        ],
      },
      {
        heading: "What does “Damascus-pattern” mean?",
        paragraphs: [
          "A Damascus-pattern blade has the look of Damascus steel, but the term itself doesn't promise a layered, pattern-welded construction.",
          "Some blades get their pattern from true layered cladding, while others get it from etching or another surface treatment that creates the same visual effect. Because the methods differ, honest sellers describe exactly what they're offering. At Ridge Cutlery, we use the term “Damascus-pattern” to describe the look of a blade, and we don't market our knives as traditional folded Damascus steel.",
        ],
      },
      {
        heading: "Does Damascus steel cut better than regular steel?",
        paragraphs: [
          "No. The pattern by itself doesn't make a knife sharper or stronger; edge geometry, heat treatment, and maintenance decide how well a knife cuts.",
          "In many modern Damascus knives, the patterned layers are a decorative jacket wrapped around a single core steel, and that core forms the actual cutting edge. That means two knives with very different patterns can cut almost identically, while two knives with similar patterns can feel completely different. Judge a knife by how thin and keen its edge is, how it feels in your hand, and how easy it is to keep sharp.",
        ],
      },
      {
        heading: "How can you tell the difference?",
        paragraphs: [
          "Check the details: a layered blade usually shows its pattern continuing onto the edge bevel and fine layer lines along the spine, while a surface pattern tends to stay on the flat of the blade.",
          "A pattern that repeats in a perfectly regular, printed-looking way is another hint that it was applied to the surface. Price is a clue, too, since true pattern-welded steel takes more material and more work to make. The most reliable source is the seller: a clear product description should tell you how the blade is made.",
        ],
      },
      {
        heading: "How do you care for a Damascus-pattern knife?",
        paragraphs: [
          "Care for it like any quality kitchen knife: wash it by hand, dry it right away, and store it so the edge never knocks against other tools.",
          "Avoid the dishwasher, and don't leave acidic foods such as citrus, tomatoes, or onions sitting on the blade for long, since they can dull the finish over time. Hone the edge regularly and sharpen it with a guided tool when honing no longer helps. A knife block, magnetic strip, or blade guard keeps both the edge and the pattern looking their best.",
        ],
      },
      {
        heading: "Which one should you buy?",
        paragraphs: [
          "Choose a Damascus-pattern knife if you want the distinctive look at a friendlier price, and pay more for true pattern-welded Damascus only if the layered construction itself matters to you.",
          "For most home cooks, comfort, balance, and an edge that's easy to maintain matter far more than how a pattern was made. The Artisan Damascus-Pattern Chef Knife pairs a hammered, Damascus-pattern blade with a light wood handle and an 8-inch length for everyday work. If you'd rather match a whole drawer, The Executive Chef Collection and the Precision Culinary Master Set bring a Damascus-pattern finish to a complete set.",
        ],
      },
    ],
    relatedProducts: [
      "damascus-pattern-chef-knife",
      "executive-chef-collection",
      "precision-culinary-master-set",
    ],
  },
  {
    slug: "how-to-care-for-a-bbq-knife",
    title: "How to Keep a BBQ Knife Sharp and Ready",
    description:
      "How to hone, sharpen, clean, and store a BBQ knife so it's ready for brisket, ribs, and whole birds every time you fire up the grill.",
    excerpt:
      "A simple routine to keep your pitmaster knife sharp through every brisket, rack of ribs, and cookout.",
    image: "/img/products/artisan-pitmaster-knife/a0137f67-c677-4402-9c73-8ff7f0cd2c1a.webp",
    imageAlt: "Curved pitmaster boning knives on a wooden cutting board",
    datePublished: "2026-11-15",
    readMinutes: 3,
    sections: [
      {
        heading: "What makes a good BBQ knife?",
        paragraphs: [
          "A good BBQ knife has a sharp, curved blade for trimming and a handle that stays secure even when your hands are greasy.",
          "Most pitmasters lean on two kinds of blades: a boning knife for trimming fat, removing silverskin, and working around bones, and a long slicer for serving finished brisket. A curved boning profile follows the shape of the meat, so you lose less of it to the trim pile. Grip matters as much as the edge. The Artisan Pitmaster Knife, for example, has a finger hole through the blade for a secure pinch grip and a riveted wood handle.",
        ],
      },
      {
        heading: "How often should you sharpen a BBQ knife?",
        paragraphs: [
          "Hone it before every cook, and sharpen it whenever honing no longer brings back a clean, easy cut.",
          "How often that happens depends on how much you cook and what you cut. A knife that only trims a brisket on weekends might go months between sharpenings, while one used for whole birds and frequent trimming will need it sooner. Watch for the signs: the blade slides over fat instead of biting into it, you have to saw through skin, or a slice of tomato squashes before it separates. That's when a guided tool like the 4-in-1 Pro Sharpener will restore a fresh edge in a few passes.",
        ],
      },
      {
        heading: "How do you hone a knife correctly?",
        paragraphs: [
          "Hold the honing steel vertically with its tip on a cutting board, then draw the blade down and across it at a shallow, consistent angle, alternating sides for five to ten light strokes.",
          "Aim for roughly 15 to 20 degrees, about the angle of the blade's existing bevel, and use only light pressure; honing is about straightening the edge, not grinding it away. Start with the heel of the blade near the top of the steel and finish with the tip near the bottom, so the whole edge gets the same treatment. A long rod like the Pro-Grade Honing Steel gives you room to cover the full length of the blade in each stroke.",
        ],
      },
      {
        heading: "How should you clean a BBQ knife after a cook?",
        paragraphs: [
          "Wash it by hand in warm, soapy water as soon as you're done, then dry it completely before you put it away.",
          "Fat and meat juices dry onto the blade quickly, and a knife left in the sink is a hazard to whoever reaches in next. Skip the dishwasher: the heat, harsh detergent, and rattling against other dishes can dull the edge and damage a wood handle. Wipe the blade from the spine toward the edge, never along the edge itself. If your knife has a wood handle, a few drops of food-safe mineral oil every so often keep it from drying out.",
        ],
      },
      {
        heading: "How do you store and carry a BBQ knife?",
        paragraphs: [
          "Keep the edge covered and separated from other tools, whether the knife lives on your kitchen counter or travels to a cookout.",
          "At home, a knife block or magnetic strip keeps the edge from banging against other utensils. On the road, use a blade guard, a sheath, or a knife roll, and never toss an uncovered knife into a cooler, a grill bag, or a toolbox. A covered edge stays sharp longer and keeps your hands safe when you reach in.",
        ],
      },
      {
        heading: "What cutting surface is best for BBQ prep?",
        paragraphs: [
          "Cut on a wood or plastic cutting board; glass, stone, ceramic, and metal surfaces dull an edge fast.",
          "A large board with a juice groove keeps brisket and ribs from sliding around and catches the drippings. Avoid trimming directly on sheet pans or serving platters, since metal and ceramic will roll the edge after just a few cuts. Bring a board along to the smoker or the campsite, and your knife will be just as sharp at the end of the cook as it was at the start.",
        ],
      },
    ],
    relatedProducts: ["artisan-pitmaster-knife", "4-in-1-pro-sharpener", "pro-grade-honing-steel"],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
