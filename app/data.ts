import { imageManifest } from "./imageManifest";

export const archiveName = "Black Excellence Archives";
export const archiveTagline = "Black Vision. Black Brilliance. Black Legacy.";
export const archiveSummary =
  "A curated archive honoring Black excellence across mathematics, science, literature, history, arts, and technology through portraits, concise context, and cinematic biographies.";

export type ImpactLink = {
  label: string;
  url: string;
};

export type CuratorLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "website";
  image: string;
};

export type Profile = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  birth: string;
  death?: string;
  role: string;
  knownFor: string;
  legacy: string;
  image: string;
  images: string[];
  links: ImpactLink[];
};

export type CuratorProfile = {
  name: string;
  title: string;
  image: string;
  bio: string[];
  links: CuratorLink[];
};

export type Subcategory = {
  name: string;
  slug: string;
};

export type ArchiveCategory = {
  name: string;
  slug: string;
  image: string;
  summary: string;
  subcategories: Subcategory[];
};

export const categories: ArchiveCategory[] = [
  {
    name: "Mathematics",
    slug: "mathematics",
    image: "/categories/mathematics.jpeg",
    summary:
      "Numbers become power in this collection of brilliant minds who calculated launches, opened classrooms, and turned abstract ideas into world-changing tools.",
    subcategories: [
      { name: "Algebra", slug: "algebra" },
      { name: "Calculus", slug: "calculus" },
      { name: "Statistics & Probability", slug: "statistics" },
      { name: "Applied Mathematics", slug: "applied-mathematics" },
    ],
  },
  {
    name: "Science",
    slug: "science",
    image: "/categories/sciences.jpg",
    summary:
      "From lifesaving medicine to environmental justice, these scientists confront the unknown and prove discovery can change survival, policy, and the future.",
    subcategories: [
      { name: "Biology", slug: "biology" },
      { name: "Chemistry", slug: "chemistry" },
      { name: "Physics", slug: "physics" },
      { name: "Environmental Science & Justice", slug: "environmental-science-justice" },
    ],
  },
  {
    name: "Literature",
    slug: "literature",
    image: "/categories/literature.jpeg",
    summary:
      "Writers, poets, essayists, and journalists take center stage in stories where language becomes memory, rebellion, imagination, and a map toward freedom.",
    subcategories: [
      { name: "Fiction", slug: "fiction" },
      { name: "Poetry", slug: "poetry" },
      { name: "Essays", slug: "essays" },
      { name: "Journalism", slug: "journalism" },
    ],
  },
  {
    name: "History",
    slug: "history",
    image: "/categories/history.jpeg",
    summary:
      "Movements rise, records are reclaimed, and legacies refuse to disappear in this collection of leaders and scholars who reshaped Black memory.",
    subcategories: [
      { name: "Civil Rights", slug: "civil-rights" },
      { name: "Political History", slug: "political-history" },
      { name: "Cultural History", slug: "cultural-history" },
      { name: "African Diaspora", slug: "african-diaspora" },
    ],
  },
  {
    name: "Arts",
    slug: "arts",
    image: "/categories/art.jpeg",
    summary:
      "Vision, sound, movement, and cinema collide as Black artists reimagine culture and leave performances, images, and films that refuse to fade.",
    subcategories: [
      { name: "Visual Arts", slug: "visual-arts" },
      { name: "Music", slug: "music" },
      { name: "Film", slug: "film" },
      { name: "Dance", slug: "dance" },
    ],
  },
  {
    name: "Technology",
    slug: "technology",
    image: "/categories/technology.jpeg",
    summary:
      "Code, machines, patents, and bold ideas drive this collection of innovators who built the tools behind safer streets, smarter systems, and future worlds.",
    subcategories: [
      { name: "Software Engineering", slug: "software-engineering" },
      { name: "Computer Science", slug: "computer-science" },
      { name: "Electrical Engineering", slug: "electrical-engineering" },
      { name: "Inventors", slug: "inventors" },
    ],
  },
];

export const curatorProfile: CuratorProfile = {
  name: "Cyristal N. Joseph",
  title: "The Curator",
  image: "/headshot.png",
  bio: [
    "Born and raised in New York City to Trinidadian parents, Cyristal N. Joseph was inspired by the power of culture, storytelling, and the lasting impact of Black history across generations. Those experiences became the foundation for Black Excellence Archives, a digital space dedicated to preserving and celebrating Black excellence in all its forms.",
    "Created to honor the innovators, visionaries, artists, scientists, writers, engineers, and historical figures whose contributions continue to shape the world, the platform highlights stories that are too often shortened, overlooked, or disconnected from the impact they have had on culture, education, technology, and society. It was designed to create a more immersive experience, one that feels cinematic, intentional, and lasting.",
    "More than a collection of biographies, Black Excellence Archives serves as a living digital tribute to legacy, innovation, creativity, and resilience. Through a modern archive experience inspired by storytelling and discovery, the platform exists to preserve the past, inspire the present, and celebrate the future of Black excellence.",
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/cyristalj/", icon: "linkedin", image: "/linkedin.jpg" },
    { label: "GitHub", url: "https://github.com/cyristal-gems", icon: "github", image: "/github.png" },
    { label: "Website", url: "https://cyrisjoseph.dev", icon: "website", image: "/website.jpg" },
  ],
};

const directImpactLinks: Record<string, ImpactLink[]> = {
  "dudley-weldon-woodard": [{ label: "Dudley Weldon Woodard - MacTutor History of Mathematics", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Woodard/" }],
  "clarence-f-stephens": [{ label: "Clarence F. Stephens - MacTutor History of Mathematics", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stephens/" }],
  "etta-zuber-falconer": [{ label: "Etta Zuber Falconer - Britannica", url: "https://www.britannica.com/biography/Etta-Zuber-Falconer" }],
  "kelly-miller": [{ label: "Kelly Miller - Britannica", url: "https://www.britannica.com/biography/Kelly-Miller" }],
  "william-w-s-claytor": [{ label: "William Schieffelin Claytor - MacTutor History of Mathematics", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Claytor/" }],
  "gladys-west": [{ label: "Gladys West - Britannica", url: "https://www.britannica.com/biography/Gladys-West" }],
  "christine-darden": [{ label: "Christine Darden - NASA", url: "https://www.nasa.gov/people/christine-darden/" }],
  "annie-easley": [{ label: "Annie Easley - NASA", url: "https://www.nasa.gov/people/annie-easley/" }],
  "david-blackwell": [{ label: "David Blackwell - MacTutor History of Mathematics", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Blackwell/" }],
  "albert-t-bharucha-reid": [{ label: "Albert T. Bharucha-Reid - MacTutor History of Mathematics", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Bharucha-Reid/" }],
  "talithia-williams": [{ label: "Talithia Williams - Harvey Mudd College", url: "https://www.hmc.edu/mathematics/faculty-staff/williams/" }],
  "edray-herber-goins": [{ label: "Edray Herber Goins - Pomona College", url: "https://www.pomona.edu/directory/people/edray-goins" }],
  "katherine-johnson": [{ label: "Katherine Johnson - NASA", url: "https://www.nasa.gov/people/katherine-johnson/" }],
  "dorothy-vaughan": [{ label: "Dorothy Vaughan - NASA", url: "https://www.nasa.gov/people/dorothy-vaughan/" }],
  "evelyn-boyd-granville": [{ label: "Evelyn Boyd Granville - Smith College Finding Aids", url: "https://findingaids.smith.edu/repositories/2/resources/1213" }],
  "arlie-petters": [{ label: "Arlie Petters - Duke Scholars", url: "https://scholars.duke.edu/person/arp" }],
  "charles-drew": [{ label: "Charles Drew - Britannica", url: "https://www.britannica.com/biography/Charles-Richard-Drew" }],
  "ernest-everett-just": [{ label: "Ernest Everett Just - Britannica", url: "https://www.britannica.com/biography/Ernest-Everett-Just" }],
  "jane-cooke-wright": [{ label: "Jane Cooke Wright - National Women's History Museum", url: "https://www.womenshistory.org/education-resources/biographies/jane-cooke-wright" }],
  "alexa-canady": [{ label: "Alexa Canady - National Women's History Museum", url: "https://www.womenshistory.org/education-resources/biographies/alexa-canady" }],
  "percy-julian": [{ label: "Percy Julian - Britannica", url: "https://www.britannica.com/biography/Percy-Julian" }],
  "alice-ball": [{ label: "Alice Ball - Britannica", url: "https://www.britannica.com/biography/Alice-Ball" }],
  "saint-elmo-brady": [{ label: "Saint Elmo Brady - University of Illinois", url: "https://chemistry.illinois.edu/spotlight/alumni/brady-st-elmo-1884-1966" }],
  "lloyd-noel-ferguson": [{ label: "Lloyd Noel Ferguson - Cal State LA", url: "https://www.calstatela.edu/dept/chem/about-lloyd-n-ferguson" }],
  "shirley-ann-jackson": [{ label: "Shirley Ann Jackson - Rensselaer Polytechnic Institute", url: "https://president.rpi.edu/about/president-shirley-ann-jackson" }],
  "ronald-mcnair": [{ label: "Ronald McNair - NASA", url: "https://www.nasa.gov/former-astronaut-ronald-e-mcnair/" }],
  "sylvester-james-gates": [{ label: "Sylvester James Gates - University of Maryland Physics", url: "https://umdphysics.umd.edu/people/faculty/current/item/320-gates.html" }],
  "herman-branson": [{ label: "Herman Branson - University at Buffalo", url: "https://www.math.buffalo.edu/mad/physics/branson_herman.html" }],
  "wangari-maathai": [{ label: "Wangari Maathai - Britannica", url: "https://www.britannica.com/biography/Wangari-Maathai" }],
  "robert-d-bullard": [{ label: "Robert D. Bullard - Britannica", url: "https://www.britannica.com/place/Robert-D-Bullard" }],
  "hazel-m-johnson": [{ label: "Hazel M. Johnson - Chicago Public Library", url: "https://www.chipublib.org/fa-people-for-community-recovery-archives/" }],
  "van-jones": [{ label: "Van Jones - UCLA", url: "https://www.ioes.ucla.edu/person/van-jones/" }],
  "toni-morrison": [{ label: "Toni Morrison - Britannica", url: "https://www.britannica.com/biography/Toni-Morrison" }],
  "octavia-butler": [{ label: "Octavia Butler - Huntington Library", url: "https://www.huntington.org/octavia-e-butler" }],
  "zora-neale-hurston": [{ label: "Zora Neale Hurston - Britannica", url: "https://www.britannica.com/biography/Zora-Neale-Hurston" }],
  "colson-whitehead": [{ label: "Colson Whitehead - Britannica", url: "https://www.britannica.com/biography/Colson-Whitehead" }],
  "langston-hughes": [{ label: "Langston Hughes - Poetry Foundation", url: "https://www.poetryfoundation.org/poets/langston-hughes" }],
  "maya-angelou": [{ label: "Maya Angelou - Poetry Foundation", url: "https://www.poetryfoundation.org/poets/maya-angelou" }],
  "gwendolyn-brooks": [{ label: "Gwendolyn Brooks - Poetry Foundation", url: "https://www.poetryfoundation.org/poets/gwendolyn-brooks" }],
  "amanda-gorman": [{ label: "Amanda Gorman - Poetry Foundation", url: "https://www.poetryfoundation.org/poets/amanda-gorman" }],
  "james-baldwin": [{ label: "James Baldwin - Britannica", url: "https://www.britannica.com/biography/James-Baldwin" }],
  "ta-nehisi-coates": [{ label: "Ta-Nehisi Coates - MacArthur Foundation", url: "https://www.macfound.org/fellows/class-of-2015/ta-nehisi-coates" }],
  "ralph-ellison": [{ label: "Ralph Ellison - Britannica", url: "https://www.britannica.com/biography/Ralph-Ellison" }],
  "bell-hooks": [{ label: "bell hooks - Britannica", url: "https://www.britannica.com/biography/bell-hooks" }],
  "ida-b-wells": [{ label: "Ida B. Wells - National Women's History Museum", url: "https://www.womenshistory.org/education-resources/biographies/ida-b-wells-barnett" }],
  "nikole-hannah-jones": [{ label: "Nikole Hannah-Jones - Britannica", url: "https://www.britannica.com/biography/Nikole-Hannah-Jones" }],
  "charlayne-hunter-gault": [{ label: "Charlayne Hunter-Gault - Britannica", url: "https://www.britannica.com/biography/Charlayne-Hunter-Gault" }],
  "jelani-cobb": [{ label: "Jelani Cobb - Columbia Journalism School", url: "https://journalism.columbia.edu/faculty/jelani-cobb" }],
  "martin-luther-king-jr": [{ label: "Martin Luther King Jr. - King Institute", url: "https://kinginstitute.stanford.edu/king-papers/about-papers/martin-luther-king-jr" }],
  "malcolm-x": [{ label: "Malcolm X - Britannica", url: "https://www.britannica.com/biography/Malcolm-X" }],
  "claudette-colvin": [{ label: "Claudette Colvin - Britannica", url: "https://www.britannica.com/biography/Claudette-Colvin" }],
  "fannie-lou-hamer": [{ label: "Fannie Lou Hamer - National Women's History Museum", url: "https://www.womenshistory.org/education-resources/biographies/fannie-lou-hamer" }],
  "shirley-chisholm": [{ label: "Shirley Chisholm - U.S. House History", url: "https://history.house.gov/People/Detail/10918" }],
  "barbara-jordan": [{ label: "Barbara Jordan - U.S. House History", url: "https://history.house.gov/People/Detail/16019" }],
  "thurgood-marshall": [{ label: "Thurgood Marshall - Britannica", url: "https://www.britannica.com/biography/Thurgood-Marshall" }],
  "john-lewis": [{ label: "John Lewis - U.S. House History", url: "https://history.house.gov/People/Listing/L/LEWIS,-John-R--(L000287)/" }],
  "carter-g-woodson": [{ label: "Carter G. Woodson - Britannica", url: "https://www.britannica.com/biography/Carter-G-Woodson" }],
  "henry-louis-gates-jr": [{ label: "Henry Louis Gates Jr. - Harvard University", url: "https://aaas.fas.harvard.edu/people/henry-louis-gates-jr" }],
  "nell-irvin-painter": [{ label: "Nell Irvin Painter - Princeton University", url: "https://history.princeton.edu/people/nell-irvin-painter" }],
  "darlene-clark-hine": [{ label: "Darlene Clark Hine - Michigan State University", url: "https://history.msu.edu/people/faculty/darlene-clark-hine/" }],
  "w-e-b-du-bois": [{ label: "W. E. B. Du Bois - NAACP", url: "https://naacp.org/find-resources/history-explained/civil-rights-leaders/web-du-bois" }],
  "marcus-garvey": [{ label: "Marcus Garvey - Britannica", url: "https://www.britannica.com/biography/Marcus-Garvey" }],
  "frantz-fanon": [{ label: "Frantz Fanon - Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/frantz-fanon/" }],
  "chinua-achebe": [{ label: "Chinua Achebe - Britannica", url: "https://www.britannica.com/biography/Chinua-Achebe" }],
  "kehinde-wiley": [{ label: "Kehinde Wiley - Britannica", url: "https://www.britannica.com/biography/Kehinde-Wiley" }],
  "kara-walker": [{ label: "Kara Walker - Britannica", url: "https://www.britannica.com/biography/Kara-Walker" }],
  "jean-michel-basquiat": [{ label: "Jean-Michel Basquiat - Britannica", url: "https://www.britannica.com/biography/Jean-Michel-Basquiat" }],
  "faith-ringgold": [{ label: "Faith Ringgold - Britannica", url: "https://www.britannica.com/biography/Faith-Ringgold" }],
  "nina-simone": [{ label: "Nina Simone - Britannica", url: "https://www.britannica.com/biography/Nina-Simone" }],
  "louis-armstrong": [{ label: "Louis Armstrong - Britannica", url: "https://www.britannica.com/biography/Louis-Armstrong" }],
  "aretha-franklin": [{ label: "Aretha Franklin - Britannica", url: "https://www.britannica.com/biography/Aretha-Franklin" }],
  "kendrick-lamar": [{ label: "Kendrick Lamar - Britannica", url: "https://www.britannica.com/biography/Kendrick-Lamar" }],
  "spike-lee": [{ label: "Spike Lee - Britannica", url: "https://www.britannica.com/biography/Spike-Lee" }],
  "ava-duvernay": [{ label: "Ava DuVernay - Britannica", url: "https://www.britannica.com/biography/Ava-DuVernay" }],
  "jordan-peele": [{ label: "Jordan Peele - Britannica", url: "https://www.britannica.com/biography/Jordan-Peele" }],
  "ryan-coogler": [{ label: "Ryan Coogler - Britannica", url: "https://www.britannica.com/biography/Ryan-Coogler" }],
  "alvin-ailey": [{ label: "Alvin Ailey - Britannica", url: "https://www.britannica.com/biography/Alvin-Ailey" }],
  "katherine-dunham": [{ label: "Katherine Dunham - Library of Congress", url: "https://www.loc.gov/item/ihas.200003840/" }],
  "misty-copeland": [{ label: "Misty Copeland - Britannica", url: "https://www.britannica.com/biography/Misty-Copeland" }],
  "debbie-allen": [{ label: "Debbie Allen - Howard University", url: "https://magazine.howard.edu/stories/debbie-allen-maven-of-the-arts" }],
  "roy-l-clay-sr": [{ label: "Roy L. Clay Sr. - Computer History Museum", url: "https://computerhistory.org/profile/roy-l-clay-sr/" }],
  "clarence-ellis": [{ label: "Clarence Ellis - University of Colorado Boulder", url: "https://www.colorado.edu/engineering/clarence-ellis" }],
  "kimberly-bryant": [{ label: "Kimberly Bryant - Smithsonian Magazine", url: "https://www.smithsonianmag.com/innovation/answer-tech-worlds-diversity-problem-180953046/" }],
  "jerry-lawson": [{ label: "Jerry Lawson - The Strong National Museum of Play", url: "https://www.museumofplay.org/blog/gerald-jerry-lawson-video-game-pioneer/" }],
  "timnit-gebru": [{ label: "Timnit Gebru - Stanford University", url: "https://hai.stanford.edu/news/timnit-gebru-ethical-ai-requires-institutional-and-structural-change" }],
  "rediet-abebe": [{ label: "Rediet Abebe - UC Berkeley", url: "https://www2.eecs.berkeley.edu/Faculty/Homepages/rabebe.html" }],
  "ayanna-howard": [{ label: "Ayanna Howard - The Ohio State University", url: "https://engineering.osu.edu/office-dean/about-dean-ayanna-howard" }],
  "philip-emeagwali": [{ label: "Philip Emeagwali - University at Buffalo", url: "https://wwwmath.nsm.buffalo.edu/mad/computer-science/emeagwali_philip.html" }],
  "granville-t-woods": [{ label: "Granville T. Woods - Lemelson", url: "https://lemelson.mit.edu/resources/granville-woods" }],
  "elijah-mccoy": [{ label: "Elijah McCoy - Britannica", url: "https://www.britannica.com/biography/Elijah-McCoy" }],
  "lewis-latimer": [{ label: "Lewis Latimer - National Inventors Hall of Fame", url: "https://www.invent.org/inductees/lewis-latimer" }],
  "mary-jackson": [{ label: "Mary Jackson - NASA", url: "https://www.nasa.gov/people/mary-w-jackson-biography/" }],
  "garrett-morgan": [{ label: "Garrett Morgan - National Inventors Hall of Fame", url: "https://www.invent.org/inductees/garrett-morgan" }],
  "madam-c-j-walker": [{ label: "Madam C. J. Walker - Britannica", url: "https://www.britannica.com/biography/Madam-C-J-Walker" }],
  "valerie-thomas": [{ label: "Valerie Thomas - NASA Landsat Science", url: "https://landsat.gsfc.nasa.gov/article/a-face-behind-landsat-images-meet-dr-valerie-l-thomas/" }],
  "patricia-bath": [{ label: "Patricia Bath - Britannica", url: "https://www.britannica.com/biography/Patricia-Bath" }],
};

const makeLinks = (id: string, name: string): ImpactLink[] =>
  directImpactLinks[id] ?? [{ label: `${name} - Britannica`, url: `https://www.britannica.com/biography/${name.replaceAll(" ", "-")}` }];

const imageKey = (image: string) => image.replace(/-[12]\.[^.]+$/, "");

export const profilePreview = (profile: Profile) => {
  const role = profile.role.replace(/^(an?|the)\s+/i, "");

  return `${role.charAt(0).toUpperCase()}${role.slice(1)}.`;
};

const p = (
  id: string,
  name: string,
  category: string,
  subcategory: string,
  birth: string,
  death: string | undefined,
  role: string,
  knownFor: string,
  legacy: string,
  image: string,
): Profile => ({
  id,
  name,
  category,
  subcategory,
  birth,
  death,
  role,
  knownFor,
  legacy,
  image,
  images: imageManifest[imageKey(image)] ?? [image],
  links: makeLinks(id, name),
});

export const profiles: Profile[] = [
  p("dudley-weldon-woodard", "Dudley Weldon Woodard", "mathematics", "algebra", "October 3, 1881", "July 15, 1965", "a mathematician and professor", "becoming one of the first African Americans to earn a Ph.D. in mathematics and strengthening Howard University's graduate mathematics program", "institution building, doctoral mentorship, and early Black leadership in advanced mathematics", "/images/mathematics/algebra/woodard-1.jpg"),
  p("clarence-f-stephens", "Clarence F. Stephens", "mathematics", "algebra", "July 24, 1917", "March 5, 2018", "a mathematician and educator", "developing inclusive mathematics teaching models and helping Morgan State build a nationally respected mathematics department", "access, excellence, and student-centered mathematical training", "/images/mathematics/algebra/stephens-1.png"),
  p("etta-zuber-falconer", "Etta Zuber Falconer", "mathematics", "algebra", "November 21, 1933", "September 19, 2002", "a mathematician and academic leader", "expanding mathematics and science pathways for Black women at Spelman College", "mentorship, doctoral preparation, and equity in STEM education", "/images/mathematics/algebra/falconer-1.jpg"),
  p("kelly-miller", "Kelly Miller", "mathematics", "algebra", "July 18, 1863", "December 29, 1939", "a mathematician, sociologist, and educator", "becoming the first Black graduate student in mathematics at Johns Hopkins University and later serving as a major Howard University scholar", "interdisciplinary scholarship, public argument, and educational advancement", "/images/mathematics/algebra/miller-1.jpeg"),
  p("william-w-s-claytor", "William Schieffelin Claytor", "mathematics", "calculus", "January 4, 1908", "July 14, 1967", "a mathematician specializing in topology", "publishing influential topology research and becoming the third African American to earn a mathematics Ph.D.", "research brilliance sustained despite exclusion from many academic spaces", "/images/mathematics/calculus/claytor-1.jpeg"),
  p("gladys-west", "Gladys West", "mathematics", "calculus", "October 27, 1930", "January 17, 2026", "a mathematician and satellite geodesist", "creating mathematical models of Earth's shape that helped make modern GPS possible", "hidden technical labor, precision modeling, and navigation technology", "/images/mathematics/calculus/west-1.jpg"),
  p("christine-darden", "Christine Darden", "mathematics", "calculus", "September 10, 1942", undefined, "a mathematician and aerospace engineer", "advancing sonic boom research at NASA and helping transform supersonic flight analysis", "aerospace research, leadership, and the legacy of Black women at NASA", "/images/mathematics/calculus/darden-1.jpg"),
  p("annie-easley", "Annie Easley", "mathematics", "calculus", "April 23, 1933", "June 25, 2011", "a mathematician and computer scientist", "writing code for NASA energy systems and the Centaur upper-stage rocket program", "programming, alternative energy research, and quiet institutional courage", "/images/mathematics/calculus/easley-1.jpeg"),
  p("david-blackwell", "David Blackwell", "mathematics", "statistics", "April 24, 1919", "July 8, 2010", "a statistician, mathematician, and game theorist", "making foundational contributions to probability, statistics, dynamic programming, and Blackwell games", "deep theory, broad application, and historic membership in elite mathematical institutions", "/images/mathematics/statistics & probability/blackwell-1.jpg"),
  p("albert-t-bharucha-reid", "Albert T. Bharucha-Reid", "mathematics", "statistics", "November 13, 1927", "February 26, 1985", "a mathematician and probabilist", "writing major works on random equations, Markov processes, and probabilistic methods", "probability theory, mathematical biology, and a global research life", "/images/mathematics/statistics & probability/reid-1.jpeg"),
  p("talithia-williams", "Talithia Williams", "mathematics", "statistics", "Birth date not publicly listed", undefined, "a statistician, author, and professor", "bringing statistics to wide audiences through research, teaching, TED talks, and public media", "data literacy, mathematical storytelling, and pathways for women in quantitative fields", "/images/mathematics/statistics & probability/williams-1.png"),
  p("edray-herber-goins", "Edray Herber Goins", "mathematics", "statistics", "June 29, 1972", undefined, "a mathematician", "researching number theory and algebraic geometry while building community for underrepresented mathematicians", "mathematical research, mentoring, and institutional belonging", "/images/mathematics/statistics & probability/goins-1.jpeg"),
  p("katherine-johnson", "Katherine Johnson", "mathematics", "applied-mathematics", "August 26, 1918", "February 24, 2020", "a mathematician and NASA research mathematician", "calculating trajectories that supported Mercury, Apollo, and space shuttle missions", "orbital mechanics, accuracy under pressure, and recognition for Black women in space history", "/images/mathematics/applied mathematics/k-johnson-1.webp"),
  p("dorothy-vaughan", "Dorothy Vaughan", "mathematics", "applied-mathematics", "September 20, 1910", "November 10, 2008", "a mathematician and NASA supervisor", "leading the West Area Computing unit and adapting early to FORTRAN programming", "technical leadership, team care, and the transition from human computing to digital computing", "/images/mathematics/applied mathematics/vaughan-1.jpg"),
  p("evelyn-boyd-granville", "Evelyn Boyd Granville", "mathematics", "applied-mathematics", "May 1, 1924", "June 27, 2023", "a mathematician and computer scientist", "becoming one of the first Black women to earn a mathematics Ph.D. and working on space-era computing projects", "doctoral excellence, applied computation, and educational service", "/images/mathematics/applied mathematics/granville-1.jpg"),
  p("arlie-petters", "Arlie Petters", "mathematics", "applied-mathematics", "February 8, 1964", undefined, "a mathematical physicist", "developing mathematical theories of gravitational lensing and serving in academic leadership", "cosmology, geometry, and global scientific leadership", "/images/mathematics/applied mathematics/petters-1.jpg"),
  p("charles-drew", "Charles Drew", "science", "biology", "June 3, 1904", "April 1, 1950", "a surgeon and medical researcher", "improving blood plasma storage and organizing large-scale blood banking practices", "medical systems, wartime care, and life-saving research", "/images/sciences/biology/drew-1.jpg"),
  p("ernest-everett-just", "Ernest Everett Just", "science", "biology", "August 14, 1883", "October 27, 1941", "a biologist and marine embryologist", "advancing cell biology through careful study of fertilization and early development", "experimental precision, independent thought, and Black scientific achievement", "/images/sciences/biology/just-1.jpg"),
  p("jane-cooke-wright", "Jane Cooke Wright", "science", "biology", "November 20, 1919", "February 19, 2013", "an oncologist and cancer researcher", "pioneering chemotherapy methods and helping make cancer treatment more evidence-based", "clinical research, patient care, and leadership in oncology", "/images/sciences/biology/wright-1.png"),
  p("alexa-canady", "Alexa Canady", "science", "biology", "November 7, 1950", undefined, "a pediatric neurosurgeon", "becoming the first Black woman neurosurgeon in the United States", "surgical excellence, pediatric care, and representation in medicine", "/images/sciences/biology/canady-1.jpeg"),
  p("percy-julian", "Percy Julian", "science", "chemistry", "April 11, 1899", "April 19, 1975", "a research chemist and entrepreneur", "synthesizing medicinal compounds from plants and helping build the steroid drug industry", "industrial chemistry, invention, and business leadership", "/images/sciences/chemistry/julian-1.jpeg"),
  p("alice-ball", "Alice Ball", "science", "chemistry", "July 24, 1892", "December 31, 1916", "a chemist", "developing an injectable chaulmoogra oil treatment for Hansen's disease", "scientific originality and belated recognition for a short but powerful career", "/images/sciences/chemistry/ball-1.jpg"),
  p("saint-elmo-brady", "Saint Elmo Brady", "science", "chemistry", "December 22, 1884", "December 26, 1966", "a chemist and professor", "becoming the first African American to earn a Ph.D. in chemistry in the United States", "HBCU science education, doctoral training, and chemistry institution building", "/images/sciences/chemistry/brady-1.jpeg"),
  p("lloyd-noel-ferguson", "Lloyd Noel Ferguson", "science", "chemistry", "February 9, 1918", "November 30, 2011", "a chemist and educator", "researching organic chemistry and creating programs that expanded Black participation in chemistry", "chemical research, professional networks, and mentorship", "/images/sciences/chemistry/ferguson-1.jpg"),
  p("shirley-ann-jackson", "Shirley Ann Jackson", "science", "physics", "August 5, 1946", undefined, "a physicist and university leader", "conducting theoretical physics research and becoming the first Black woman to earn a doctorate from MIT", "scientific leadership, public service, and institutional transformation", "/images/sciences/physics/s-jackson-1.jpg"),
  p("ronald-mcnair", "Ronald McNair", "science", "physics", "October 21, 1950", "January 28, 1986", "a physicist and astronaut", "studying laser physics and flying aboard the Space Shuttle Challenger", "scientific courage, space exploration, and educational inspiration", "/images/sciences/physics/mcnair-1.jpg"),
  p("sylvester-james-gates", "Sylvester James Gates", "science", "physics", "December 15, 1950", undefined, "a theoretical physicist", "advancing supersymmetry, supergravity, and public understanding of physics", "mathematical physics, national science advising, and public education", "/images/sciences/physics/gates-1.jpeg"),
  p("herman-branson", "Herman Branson", "science", "physics", "August 14, 1914", "June 7, 1995", "a physicist and academic administrator", "contributing to protein structure research and leading major historically Black institutions", "biophysics, university leadership, and educational access", "/images/sciences/physics/branson-1.jpg"),
  p("wangari-maathai", "Wangari Maathai", "science", "environmental-science-justice", "April 1, 1940", "September 25, 2011", "an environmentalist, biologist, and political activist", "founding the Green Belt Movement and becoming the first African woman to win the Nobel Peace Prize", "environmental restoration, democracy, and women's organizing", "/images/sciences/environmental science & justice/maathai-1.webp"),
  p("robert-d-bullard", "Robert D. Bullard", "science", "environmental-science-justice", "December 21, 1946", undefined, "a sociologist and environmental justice scholar", "documenting environmental racism and shaping the modern environmental justice movement", "community research, policy influence, and environmental equity", "/images/sciences/environmental science & justice/bullard-1.jpg"),
  p("hazel-m-johnson", "Hazel M. Johnson", "science", "environmental-science-justice", "January 25, 1935", "January 12, 2011", "an environmental justice organizer", "founding People for Community Recovery and fighting toxic exposure in Chicago's Altgeld Gardens", "grassroots environmental justice, tenant advocacy, and public health", "/images/sciences/environmental science & justice/h-johnson-1.webp"),
  p("van-jones", "Van Jones", "science", "environmental-science-justice", "September 20, 1968", undefined, "an environmental advocate, lawyer, and public policy organizer", "linking green jobs, civil rights, and criminal justice reform in national policy conversations", "climate justice, coalition building, and civic media", "/images/sciences/environmental science & justice/jones-1.jpg"),
  p("toni-morrison", "Toni Morrison", "literature", "fiction", "February 18, 1931", "August 5, 2019", "a novelist, editor, and professor", "writing landmark novels including Beloved and becoming the first Black woman to win the Nobel Prize in Literature", "language, memory, Black interior life, and literary canon making", "/images/literature/fiction/morrison-1.jpg"),
  p("octavia-butler", "Octavia Butler", "literature", "fiction", "June 22, 1947", "February 24, 2006", "a speculative fiction writer", "reshaping science fiction through works that examined power, survival, race, gender, and change", "Afrofuturist imagination, genre transformation, and visionary storytelling", "/images/literature/fiction/butler-1.jpeg"),
  p("zora-neale-hurston", "Zora Neale Hurston", "literature", "fiction", "January 7, 1891", "January 28, 1960", "a novelist, folklorist, and anthropologist", "writing Their Eyes Were Watching God and preserving Black Southern folklore", "vernacular brilliance, cultural fieldwork, and literary recovery", "/images/literature/fiction/hurston-1.jpeg"),
  p("colson-whitehead", "Colson Whitehead", "literature", "fiction", "November 6, 1969", undefined, "a novelist and essayist", "winning Pulitzer Prizes for The Underground Railroad and The Nickel Boys", "historical imagination, formal experimentation, and contemporary Black fiction", "/images/literature/fiction/whitehead-1.jpg"),
  p("langston-hughes", "Langston Hughes", "literature", "poetry", "February 1, 1901", "May 22, 1967", "a poet, novelist, playwright, and columnist", "becoming a central voice of the Harlem Renaissance and bringing blues and jazz rhythms into poetry", "vernacular art, racial pride, and literary movement building", "/images/literature/poetry/hughes-1.jpg"),
  p("maya-angelou", "Maya Angelou", "literature", "poetry", "April 4, 1928", "May 28, 2014", "a poet, memoirist, performer, and civil rights worker", "writing I Know Why the Caged Bird Sings and delivering poetry that reached global audiences", "autobiography, performance, resilience, and public witness", "/images/literature/poetry/angelou-1.jpg"),
  p("gwendolyn-brooks", "Gwendolyn Brooks", "literature", "poetry", "June 7, 1917", "December 3, 2000", "a poet and teacher", "becoming the first Black writer to win the Pulitzer Prize", "Chicago poetics, community portraiture, and literary mentorship", "/images/literature/poetry/brooks-1.jpg"),
  p("amanda-gorman", "Amanda Gorman", "literature", "poetry", "March 7, 1998", undefined, "a poet and activist", "becoming the youngest inaugural poet in United States history", "youth voice, civic poetry, and public imagination", "/images/literature/poetry/gorman-1.jpeg"),
  p("james-baldwin", "James Baldwin", "literature", "essays", "August 2, 1924", "December 1, 1987", "an essayist, novelist, and critic", "writing essays and novels that examined race, sexuality, nationhood, and moral responsibility", "witness, critique, and fearless public language", "/images/literature/essays/baldwin-1.jpg"),
  p("ta-nehisi-coates", "Ta-Nehisi Coates", "literature", "essays", "September 30, 1975", undefined, "an essayist, journalist, and author", "writing Between the World and Me and influential essays on race, history, and reparations", "historical argument, intimate address, and contemporary political writing", "/images/literature/essays/coates-1.webp"),
  p("ralph-ellison", "Ralph Ellison", "literature", "essays", "March 1, 1913", "April 16, 1994", "a novelist, essayist, and critic", "writing Invisible Man and essays on American identity, music, and democracy", "modernist fiction, cultural criticism, and the politics of visibility", "/images/literature/essays/ellison-1.webp"),
  p("bell-hooks", "bell hooks", "literature", "essays", "September 25, 1952", "December 15, 2021", "an author, theorist, and cultural critic", "writing across feminism, race, love, education, and liberation", "accessible theory, Black feminist thought, and transformative teaching", "/images/literature/essays/hooks-1.jpeg"),
  p("ida-b-wells", "Ida B. Wells", "literature", "journalism", "July 16, 1862", "March 25, 1931", "a journalist, editor, and anti-lynching activist", "using investigative journalism to expose lynching and challenge white supremacist violence", "press freedom, data-backed advocacy, and civil rights organizing", "/images/literature/journalism/wells-1.webp"),
  p("nikole-hannah-jones", "Nikole Hannah-Jones", "literature", "journalism", "April 9, 1976", undefined, "a journalist and professor", "creating major reporting on school segregation and leading The 1619 Project", "investigative reporting, historical reframing, and public debate", "/images/literature/journalism/jones-1.jpg"),
  p("charlayne-hunter-gault", "Charlayne Hunter-Gault", "literature", "journalism", "February 27, 1942", undefined, "a journalist, author, and civil rights pioneer", "integrating the University of Georgia and reporting internationally across print and broadcast journalism", "journalistic range, civil rights history, and global storytelling", "/images/literature/journalism/gault-1.jpg"),
  p("jelani-cobb", "Jelani Cobb", "literature", "journalism", "August 21, 1969", undefined, "a journalist, historian, and educator", "writing incisively on race, democracy, politics, and culture for major publications", "historical context, civic analysis, and journalism education", "/images/literature/journalism/cobb-1.jpeg"),
  p("martin-luther-king-jr", "Martin Luther King Jr.", "history", "civil-rights", "January 15, 1929", "April 4, 1968", "a minister and civil rights leader", "leading nonviolent campaigns that helped transform United States civil rights law", "moral leadership, mass organizing, and democratic witness", "/images/history/civil rights/king-1.webp"),
  p("malcolm-x", "Malcolm X", "history", "civil-rights", "May 19, 1925", "February 21, 1965", "a civil rights leader and public intellectual", "articulating Black self-determination, human rights, and global anti-racist struggle", "political evolution, sharp critique, and liberation thought", "/images/history/civil rights/x-1.webp"),
  p("claudette-colvin", "Claudette Colvin", "history", "civil-rights", "September 5, 1939", "January 13, 2026", "a civil rights pioneer", "refusing bus segregation in Montgomery before Rosa Parks and serving as a plaintiff in Browder v. Gayle", "youth courage, legal change, and recovered civil rights memory", "/images/history/civil rights/colvin-1.jpg"),
  p("fannie-lou-hamer", "Fannie Lou Hamer", "history", "civil-rights", "October 6, 1917", "March 14, 1977", "a voting rights organizer and political leader", "cofounding the Mississippi Freedom Democratic Party and demanding full voting rights", "grassroots democracy, testimony, and rural Black organizing", "/images/history/civil rights/hamer-1.webp"),
  p("shirley-chisholm", "Shirley Chisholm", "history", "political-history", "November 30, 1924", "January 1, 2005", "a politician, educator, and author", "becoming the first Black woman elected to Congress and the first Black woman to seek a major-party presidential nomination", "independent politics, coalition building, and representation", "/images/history/politics/chisholm-1.jpeg"),
  p("barbara-jordan", "Barbara Jordan", "history", "political-history", "February 21, 1936", "January 17, 1996", "a lawyer, legislator, and educator", "serving as a powerful constitutional voice in Congress and at national political conventions", "public ethics, oratory, and constitutional democracy", "/images/history/politics/b-jordan-1.webp"),
  p("thurgood-marshall", "Thurgood Marshall", "history", "political-history", "July 2, 1908", "January 24, 1993", "a lawyer and Supreme Court justice", "arguing Brown v. Board of Education and becoming the first Black justice on the United States Supreme Court", "legal strategy, equal protection, and civil rights jurisprudence", "/images/history/politics/marshall-1.jpeg"),
  p("john-lewis", "John Lewis", "history", "political-history", "February 21, 1940", "July 17, 2020", "a civil rights organizer and member of Congress", "leading student nonviolent organizing and carrying movement commitments into public office", "nonviolent protest, voting rights, and principled public service", "/images/history/politics/lewis-1.webp"),
  p("carter-g-woodson", "Carter G. Woodson", "history", "cultural-history", "December 19, 1875", "April 3, 1950", "a historian, author, and institution builder", "founding Negro History Week and building the Association for the Study of African American Life and History", "Black historical scholarship, archival recovery, and public education", "/images/history/culture/woodson-1.jpg"),
  p("henry-louis-gates-jr", "Henry Louis Gates Jr.", "history", "cultural-history", "September 16, 1950", undefined, "a literary scholar, historian, and filmmaker", "expanding African American studies through books, documentary work, and public humanities projects", "genealogy, literary recovery, and popular historical education", "/images/history/culture/gates-1.jpg"),
  p("nell-irvin-painter", "Nell Irvin Painter", "history", "cultural-history", "August 2, 1942", undefined, "a historian, author, and artist", "writing major works on African American history, race, gender, and the history of whiteness", "historical interpretation, visual practice, and scholarly independence", "/images/history/culture/painter-1.webp"),
  p("darlene-clark-hine", "Darlene Clark Hine", "history", "cultural-history", "February 7, 1947", undefined, "a historian and professor", "building the field of Black women's history and coediting major reference works", "archival method, Black women's history, and scholarly infrastructure", "/images/history/culture/hine-1.jpg"),
  p("w-e-b-du-bois", "W. E. B. Du Bois", "history", "african-diaspora", "February 23, 1868", "August 27, 1963", "a sociologist, historian, editor, and Pan-Africanist", "writing The Souls of Black Folk and helping found major civil rights and Pan-African institutions", "diaspora thought, sociology, and global Black freedom movements", "/images/history/african diaspora/dubois-1.webp"),
  p("marcus-garvey", "Marcus Garvey", "history", "african-diaspora", "August 17, 1887", "June 10, 1940", "a Pan-African organizer, publisher, and entrepreneur", "leading the Universal Negro Improvement Association and building a mass movement for Black pride and self-determination", "diaspora organizing, economic nationalism, and symbolic power", "/images/history/african diaspora/garvey-1.jpg"),
  p("frantz-fanon", "Frantz Fanon", "history", "african-diaspora", "July 20, 1925", "December 6, 1961", "a psychiatrist, philosopher, and anti-colonial theorist", "writing on colonial violence, liberation, race, and psychological struggle", "decolonial thought, revolutionary theory, and political psychology", "/images/history/african diaspora/fanon-1.jpeg"),
  p("chinua-achebe", "Chinua Achebe", "history", "african-diaspora", "November 16, 1930", "March 21, 2013", "a novelist, poet, professor, and critic", "writing Things Fall Apart and reshaping global understanding of African literature", "postcolonial storytelling, language politics, and literary authority", "/images/history/african diaspora/achebe-1.webp"),
  p("kehinde-wiley", "Kehinde Wiley", "arts", "visual-arts", "February 28, 1977", undefined, "a painter and visual artist", "placing Black subjects inside grand portrait traditions and painting Barack Obama's official presidential portrait", "portraiture, visibility, and art historical revision", "/images/art/visual/wiley-1.jpg"),
  p("kara-walker", "Kara Walker", "arts", "visual-arts", "November 26, 1969", undefined, "a visual artist", "using silhouettes, installations, and public works to confront race, gender, violence, and historical memory", "visual provocation, historical critique, and formal invention", "/images/art/visual/walker-1.jpg"),
  p("jean-michel-basquiat", "Jean-Michel Basquiat", "arts", "visual-arts", "December 22, 1960", "August 12, 1988", "a painter and cultural figure", "merging text, image, anatomy, jazz, and street culture into a powerful visual language", "neo-expressionism, Black iconography, and downtown art history", "/images/art/visual/basquiat-1.jpeg"),
  p("faith-ringgold", "Faith Ringgold", "arts", "visual-arts", "October 8, 1930", "April 13, 2024", "an artist, author, and educator", "creating story quilts and visual narratives centered on race, gender, family, and liberation", "fiber art, narrative painting, and community memory", "/images/art/visual/ringgold-1.jpeg"),
  p("nina-simone", "Nina Simone", "arts", "music", "February 21, 1933", "April 21, 2003", "a singer, pianist, composer, and activist", "blending classical technique, jazz, blues, and protest music into a singular sound", "musical resistance, emotional range, and civil rights art", "/images/art/music/simone-1.jpeg"),
  p("louis-armstrong", "Louis Armstrong", "arts", "music", "August 4, 1901", "July 6, 1971", "a trumpeter, singer, and bandleader", "transforming jazz through improvisation, vocal style, and global performance", "musical innovation, popular culture, and jazz diplomacy", "/images/art/music/armstrong-1.jpeg"),
  p("aretha-franklin", "Aretha Franklin", "arts", "music", "March 25, 1942", "August 16, 2018", "a singer, pianist, and songwriter", "earning the title Queen of Soul through gospel-rooted voice, musicianship, and cultural force", "soul music, expressive power, and freedom movement soundtracks", "/images/art/music/franklin-1.jpg"),
  p("kendrick-lamar", "Kendrick Lamar", "arts", "music", "June 17, 1987", undefined, "a rapper, songwriter, and performer", "bringing literary ambition, social critique, and musical experimentation into mainstream hip-hop", "lyricism, concept albums, and contemporary Black storytelling", "/images/art/music/lamar-1.jpeg"),
  p("spike-lee", "Spike Lee", "arts", "film", "March 20, 1957", undefined, "a filmmaker, writer, actor, and professor", "building a body of films that confront race, neighborhood, politics, music, and American history", "independent film, visual style, and cultural critique", "/images/art/film/lee-1.webp"),
  p("ava-duvernay", "Ava DuVernay", "arts", "film", "August 24, 1972", undefined, "a filmmaker, producer, and distributor", "directing Selma, 13th, and When They See Us while expanding opportunities for inclusive filmmaking", "historical drama, documentary power, and media equity", "/images/art/film/duvernay-1.jpg"),
  p("jordan-peele", "Jordan Peele", "arts", "film", "February 21, 1979", undefined, "a filmmaker, actor, and comedian", "reshaping horror and social satire through films such as Get Out, Us, and Nope", "genre transformation, suspense, and cultural analysis", "/images/art/film/peele-1.webp"),
  p("ryan-coogler", "Ryan Coogler", "arts", "film", "May 23, 1986", undefined, "a filmmaker, screenwriter, and producer", "directing Fruitvale Station, Creed, and Black Panther with emotional force and popular reach", "cinematic world building, character drama, and blockbuster representation", "/images/art/film/coogler-1.jpg"),
  p("alvin-ailey", "Alvin Ailey", "arts", "dance", "January 5, 1931", "December 1, 1989", "a dancer, choreographer, and company founder", "founding Alvin Ailey American Dance Theater and creating works such as Revelations", "modern dance, Black sacred traditions, and global performance", "/images/art/dance/ailey-1.webp"),
  p("katherine-dunham", "Katherine Dunham", "arts", "dance", "June 22, 1909", "May 21, 2006", "a dancer, choreographer, anthropologist, and educator", "developing the Dunham Technique and connecting dance to African diasporic cultural study", "movement research, anthropology, and performance pedagogy", "/images/art/dance/dunham-1.jpeg"),
  p("misty-copeland", "Misty Copeland", "arts", "dance", "September 10, 1982", undefined, "a ballet dancer and author", "becoming the first Black woman principal dancer at American Ballet Theatre", "classical ballet, representation, and public mentorship", "/images/art/dance/copeland-1.jpg"),
  p("debbie-allen", "Debbie Allen", "arts", "dance", "January 16, 1950", undefined, "a dancer, choreographer, actor, director, and producer", "shaping television, stage, and dance education through a wide creative career", "performance leadership, choreography, and arts training", "/images/art/dance/allen-1.jpeg"),
  p("roy-l-clay-sr", "Roy L. Clay Sr.", "technology", "software-engineering", "August 22, 1929", "September 22, 2024", "a computer scientist, engineer, and entrepreneur", "leading Hewlett-Packard's early computer division and founding ROD-L Electronics", "Silicon Valley history, hardware testing, and Black technical leadership", "/images/technology/software engineering/clay-1.jpeg"),
  p("clarence-ellis", "Clarence Ellis", "technology", "software-engineering", "May 11, 1943", "May 17, 2014", "a computer scientist", "pioneering collaborative computing and becoming the first Black person to earn a Ph.D. in computer science", "groupware, distributed systems, and computing access", "/images/technology/software engineering/ellis-1.jpeg"),
  p("kimberly-bryant", "Kimberly Bryant", "technology", "software-engineering", "January 14, 1967", undefined, "an electrical engineer and technology founder", "founding Black Girls CODE to expand technology education for Black girls", "STEM access, youth education, and tech community building", "/images/technology/software engineering/bryant-1.jpeg"),
  p("jerry-lawson", "Jerry Lawson", "technology", "software-engineering", "December 1, 1940", "April 9, 2011", "an electronic engineer and video game pioneer", "helping develop the Fairchild Channel F and commercial cartridge-based video game systems", "game hardware, consumer technology, and early Silicon Valley innovation", "/images/technology/software engineering/lawson-1.jpg"),
  p("timnit-gebru", "Timnit Gebru", "technology", "computer-science", "1982/1983", undefined, "a computer scientist and AI ethics researcher", "cofounding Black in AI and advancing research on algorithmic bias and accountability", "ethical AI, community building, and responsible technology", "/images/technology/computer science/gebru-1.jpg"),
  p("rediet-abebe", "Rediet Abebe", "technology", "computer-science", "1991", undefined, "a computer scientist and algorithms researcher", "cofounding Mechanism Design for Social Good and studying algorithms, inequality, and public impact", "algorithmic fairness, social good, and global computing research", "/images/technology/computer science/abebe-1.jpeg"),
  p("ayanna-howard", "Ayanna Howard", "technology", "computer-science", "January 24, 1972", undefined, "a roboticist, engineer, and educator", "advancing human-centered robotics, assistive technology, and AI systems", "robotics, accessibility, and engineering leadership", "/images/technology/computer science/howard-1.jpeg"),
  p("philip-emeagwali", "Philip Emeagwali", "technology", "computer-science", "August 23, 1954", undefined, "a computer scientist", "working in high-performance computing and parallel processing for complex scientific problems", "supercomputing, numerical modeling, and African technology narratives", "/images/technology/computer science/emeagwali-1.jpeg"),
  p("granville-t-woods", "Granville T. Woods", "technology", "electrical-engineering", "April 23, 1856", "January 30, 1910", "an inventor and electrical engineer", "earning dozens of patents for railway, telegraph, and electrical systems", "transportation technology, electrical invention, and patent history", "/images/technology/electrical engineering/woods-1.jpg"),
  p("elijah-mccoy", "Elijah McCoy", "technology", "electrical-engineering", "May 2, 1844", "October 10, 1929", "an engineer and inventor", "developing automatic lubrication devices that improved steam engine efficiency", "mechanical invention, rail technology, and industrial reliability", "/images/technology/electrical engineering/mccoy-1.jpg"),
  p("lewis-latimer", "Lewis Latimer", "technology", "electrical-engineering", "September 4, 1848", "December 11, 1928", "an inventor, draftsman, and electrical pioneer", "improving carbon filaments and contributing to telephone and electric lighting systems", "patent drafting, lighting technology, and engineering craft", "/images/technology/electrical engineering/latimer-1.jpeg"),
  p("mary-jackson", "Mary Jackson", "technology", "electrical-engineering", "April 9, 1921", "February 11, 2005", "an aerospace engineer and mathematician", "becoming NASA's first Black woman engineer and advocating for women in technical careers", "aerospace engineering, workplace equity, and applied research", "/images/technology/electrical engineering/m-jackson-1.jpg"),
  p("garrett-morgan", "Garrett Morgan", "technology", "inventors", "March 4, 1877", "July 27, 1963", "an inventor, publisher, and entrepreneur", "developing safety inventions including a traffic signal and a protective breathing hood", "public safety, practical invention, and Black entrepreneurship", "/images/technology/inventors/morgan-1.webp"),
  p("madam-c-j-walker", "Madam C. J. Walker", "technology", "inventors", "December 23, 1867", "May 25, 1919", "an entrepreneur, inventor, and philanthropist", "building a Black hair-care company and one of the most important Black business networks of her era", "beauty innovation, economic independence, and philanthropy", "/images/technology/inventors/walker-1.jpg"),
  p("valerie-thomas", "Valerie Thomas", "technology", "inventors", "February 8, 1943", undefined, "a scientist and inventor", "patenting an illusion transmitter and contributing to NASA image-processing work", "optical technology, satellite data, and invention at NASA", "/images/technology/inventors/thomas-1.jpg"),
  p("patricia-bath", "Patricia Bath", "technology", "inventors", "November 4, 1942", "May 30, 2019", "an ophthalmologist, inventor, and surgeon", "inventing the Laserphaco Probe and advocating for community-centered eye care", "medical invention, blindness prevention, and health equity", "/images/technology/inventors/bath-1.jpeg"),
];

export const categoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);

export const subcategoryBySlug = (categorySlug: string, subcategorySlug: string) =>
  categoryBySlug(categorySlug)?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);

export const profilesFor = (categorySlug: string, subcategorySlug: string) =>
  profiles.filter((profile) => profile.category === categorySlug && profile.subcategory === subcategorySlug);

export const profileById = (id: string) => profiles.find((profile) => profile.id === id);

export const featuredProfile = (categorySlug: string, subcategorySlug: string) =>
  profilesFor(categorySlug, subcategorySlug)[0];

export const lifespan = (profile: Profile) => `${profile.birth} -${profile.death ? ` ${profile.death}` : ""}`;

export const profileLifespan = (profile: Profile) => `(${lifespan(profile)})`;

type PronounSet = {
  subject: "he" | "she";
  subjectCap: "He" | "She";
  object: "him" | "her";
  possessive: "his" | "her";
  possessiveCap: "His" | "Her";
  reflexive: "himself" | "herself";
};

const sheHerProfileIds = new Set([
  "alexa-canady",
  "alice-ball",
  "amanda-gorman",
  "annie-easley",
  "aretha-franklin",
  "ava-duvernay",
  "ayanna-howard",
  "barbara-jordan",
  "bell-hooks",
  "charlayne-hunter-gault",
  "christine-darden",
  "claudette-colvin",
  "darlene-clark-hine",
  "debbie-allen",
  "dorothy-vaughan",
  "etta-zuber-falconer",
  "evelyn-boyd-granville",
  "faith-ringgold",
  "fannie-lou-hamer",
  "gladys-west",
  "gwendolyn-brooks",
  "hazel-m-johnson",
  "ida-b-wells",
  "jane-cooke-wright",
  "kara-walker",
  "katherine-dunham",
  "katherine-johnson",
  "kimberly-bryant",
  "madam-c-j-walker",
  "maya-angelou",
  "mary-jackson",
  "misty-copeland",
  "nell-irvin-painter",
  "nikole-hannah-jones",
  "nina-simone",
  "octavia-butler",
  "patricia-bath",
  "rediet-abebe",
  "shirley-ann-jackson",
  "shirley-chisholm",
  "talithia-williams",
  "timnit-gebru",
  "toni-morrison",
  "valerie-thomas",
  "wangari-maathai",
  "zora-neale-hurston",
]);

const pronounsFor = (profile: Profile): PronounSet =>
  sheHerProfileIds.has(profile.id)
    ? {
        subject: "she",
        subjectCap: "She",
        object: "her",
        possessive: "her",
        possessiveCap: "Her",
        reflexive: "herself",
      }
    : {
        subject: "he",
        subjectCap: "He",
        object: "him",
        possessive: "his",
        possessiveCap: "His",
        reflexive: "himself",
      };

export const lastName = (name: string) => {
  const lastNameOverrides: Record<string, string> = {
    "W. E. B. Du Bois": "Du Bois",
    "bell hooks": "hooks",
  };

  if (lastNameOverrides[name]) {
    return lastNameOverrides[name];
  }

  const compact = name.replace(" Jr.", "").replace(" Sr.", "");
  const parts = compact.split(" ");
  return parts[parts.length - 1];
};

const possessiveName = (name: string) => (name.endsWith("s") ? `${name}'` : `${name}'s`);

const fieldLanguage: Record<string, string> = {
  "african-diaspora": "African diasporic thought",
  "applied-mathematics": "applied mathematics",
  "civil-rights": "civil rights",
  "computer-science": "computer science",
  "cultural-history": "cultural history",
  "electrical-engineering": "electrical engineering",
  "environmental-science-justice": "environmental science and justice",
  "political-history": "political history",
  "software-engineering": "software engineering",
  "visual-arts": "visual art",
  algebra: "advanced mathematics",
  biology: "biology",
  calculus: "mathematical science",
  chemistry: "chemistry",
  dance: "dance",
  essays: "essay and cultural criticism",
  fiction: "fiction and literary imagination",
  film: "film",
  inventors: "invention and public problem-solving",
  journalism: "journalism",
  music: "music",
  physics: "physics",
  poetry: "poetry",
  statistics: "statistics and probability",
};

const categoryLanguage: Record<string, string> = {
  arts: "the arts",
  history: "history",
  literature: "literature",
  mathematics: "mathematics",
  science: "science",
  technology: "technology",
};

const variantIndex = (profile: Profile, offset: number, count: number) => {
  const total = Array.from(profile.id).reduce((sum, char) => sum + char.charCodeAt(0), offset);

  return total % count;
};

const birthContext = (profile: Profile, pronouns: PronounSet) => {
  if (profile.birth === "Birth date not publicly listed") {
    const unknownBirthTemplates = [
      `${pronouns.possessiveCap} birth date is not publicly listed in the sources most often cited about ${pronouns.object}, but the documented record shows a career built through sustained study, public work, and professional discipline.`,
      `Although the public record does not foreground ${pronouns.possessive} birth date, it does make clear that ${lastName(profile.name)} entered ${pronouns.possessive} field with intellectual seriousness and a commitment to work that could be evaluated by its lasting consequences.`,
      `The available record does not center ${pronouns.possessive} date of birth. It does, however, preserve the shape of ${pronouns.possessive} contribution: a career defined by rigor, purpose, and participation in a larger history of Black achievement.`,
    ];

    return unknownBirthTemplates[variantIndex(profile, 7, unknownBirthTemplates.length)];
  }

  const backgroundTemplates = [
    `Born on ${profile.birth}, ${lastName(profile.name)} developed ${pronouns.possessive} work within institutions and social conditions that did not distribute opportunity evenly. That context matters because it places ${pronouns.possessive} achievement inside a history of study, exclusion, and determined professional formation.`,
    `Born on ${profile.birth}, ${lastName(profile.name)} came of age in a period when Black talent often had to move through narrow academic, cultural, or professional pathways. ${pronouns.possessiveCap} career shows how preparation and persistence could become a form of historical intervention.`,
    `Born on ${profile.birth}, ${lastName(profile.name)} entered ${pronouns.possessive} field through a world shaped by unequal access to training, recognition, and institutional authority. ${pronouns.possessiveCap} path is best understood as both individual accomplishment and evidence of broader structural resistance.`,
    `Born on ${profile.birth}, ${lastName(profile.name)} built ${pronouns.possessive} public life across conditions that made recognition neither automatic nor secure. ${pronouns.possessiveCap} education, craft, and ambition became part of the foundation for work that later carried historical weight.`,
  ];

  return backgroundTemplates[variantIndex(profile, 11, backgroundTemplates.length)];
};

export const buildBio = (profile: Profile) => {
  const verb = profile.death ? "was" : "is";
  const field = fieldLanguage[profile.subcategory] ?? subcategoryBySlug(profile.category, profile.subcategory)?.name.toLowerCase() ?? profile.subcategory;
  const broaderField = categoryLanguage[profile.category] ?? categoryBySlug(profile.category)?.name.toLowerCase() ?? profile.category;
  const domain = field === broaderField ? field : `${field} within ${broaderField}`;
  const last = lastName(profile.name);
  const lastPossessive = possessiveName(last);
  const pronouns = pronounsFor(profile);
  const openingTemplates = [
    `${profile.name} ${verb} ${profile.role} whose career holds a significant place in ${domain}. ${pronouns.possessiveCap} importance rests not only in personal achievement, but in the way ${pronouns.subject} expanded the historical record of Black expertise.`,
    `${profile.name} ${verb} ${profile.role} whose work belongs to the serious study of ${domain}. ${pronouns.subjectCap} stands as a figure whose career helps explain how Black intellectual, creative, and technical labor shaped major public fields.`,
    `${profile.name} ${verb} ${profile.role} whose legacy is best understood through discipline, historical context, and measurable influence in ${domain}. ${pronouns.possessiveCap} career made visible a form of excellence that institutions have not always preserved with care.`,
    `${profile.name} ${verb} ${profile.role} whose life offers an important case study in Black achievement within ${domain}. ${pronouns.possessiveCap} work matters because it joined expertise to consequence, leaving a record that still rewards close attention.`,
  ];
  const contributionTemplates = [
    `${lastPossessive} central contribution was ${profile.knownFor}. In historical terms, that work shows how specialized knowledge can move from an individual career into the methods, institutions, and public narratives of a field.`,
    `The clearest evidence of ${lastPossessive} influence is ${profile.knownFor}. Rather than treating that accomplishment as a single milestone, it is more accurate to read it as part of a broader professional record shaped by skill, judgment, and sustained labor.`,
    `${pronouns.possessiveCap} major contribution can be traced to ${profile.knownFor}. The achievement matters because it connected technical or creative practice to a larger set of questions about access, authority, representation, and historical memory.`,
    `${lastPossessive} work became especially consequential through ${profile.knownFor}. That contribution required more than talent; it depended on disciplined method, command of the field, and the capacity to make knowledge useful beyond one moment.`,
  ];
  const impactTemplates = [
    `The historical importance of ${lastPossessive} life can be seen in ${profile.legacy}. That impact continues to challenge narrow accounts of who produces knowledge, culture, technology, policy, and public change.`,
    `${last} still matters because ${pronouns.subject} helped alter the intellectual and cultural horizon of ${broaderField}. ${pronouns.possessiveCap} legacy is tied to ${profile.legacy}, a contribution that remains useful for students, scholars, practitioners, and communities.`,
    `The impact of ${pronouns.possessive} career is not measured only by recognition, but by the work ${pronouns.subject} made possible for others. Through ${profile.legacy}, ${last} helped make the field more legible, more demanding, and more complete.`,
    `${pronouns.possessiveCap} historical importance lives in the connection between excellence and access. ${last} showed that ${profile.legacy} could become a professional standard, a public memory, and a source of future study.`,
  ];
  const legacyTemplates = [
    `${lastPossessive} legacy endures in classrooms, archives, professional lineages, public memory, and the continued study of Black excellence. ${pronouns.possessiveCap} story asks to be understood with the same depth and seriousness given to any figure who changed a field.`,
    `Today, ${last} remains historically relevant because ${pronouns.possessive} work continues to teach readers, researchers, artists, engineers, organizers, and students how achievement is produced under pressure. The record attached to ${pronouns.possessive} name deserves context rather than abbreviation.`,
    `${lastPossessive} influence continues wherever people examine the field with a wider account of who built it. ${pronouns.possessiveCap} legacy is not simply inspirational; it is evidence that Black achievement has been central to the making of modern knowledge and culture.`,
    `What endures is the clarity of ${lastPossessive} contribution and the seriousness of the path ${pronouns.subject} carved. ${pronouns.possessiveCap} name belongs in a durable historical record, where recognition is joined to evidence, context, and continuing relevance.`,
  ];

  return [
    openingTemplates[variantIndex(profile, 3, openingTemplates.length)],
    birthContext(profile, pronouns),
    contributionTemplates[variantIndex(profile, 17, contributionTemplates.length)],
    impactTemplates[variantIndex(profile, 23, impactTemplates.length)],
    legacyTemplates[variantIndex(profile, 31, legacyTemplates.length)],
  ];
};
