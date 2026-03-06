# Chilli Pepper Pte Ltd — Website Build Plan

> **Briefing document for developer (Claude in Cursor)**
> Company: Chilli Pepper Pte Ltd
> Type: Mining exploration consultancy, project generation & due diligence
> HQ: 151 Chin Swee Rd, #02-24 Manhattan House, Singapore 169876
> Target audience: Mining companies, investors, project vendors, JV partners
> Commodity focus: Broad — all commodities (base metals, precious metals, battery/critical minerals, bulk)
> Team size: 2–5 people (lean, senior, hands-on)
> Regional focus: Global — no specific regional bias

---

## 1. Design Direction & Visual Identity

### Style Reference: LSVP.com (Primary)
The website should mirror the **Lightspeed Venture Partners (lsvp.com)** aesthetic:

- **Full-viewport hero** with large, bold typographic statement (not an image carousel)
- **Dark, cinematic colour palette** — deep blacks/charcoals with sharp accent colour (use a warm red/chilli pepper red `#C41E3A` or similar as the signature accent, tying to the brand name)
- **Editorial, magazine-quality layout** — generous whitespace, oversized typography, asymmetric grids
- **Smooth scroll-triggered animations** — elements fade/slide in as user scrolls; parallax on hero
- **Sticky navigation** — minimal top nav that collapses/transforms on scroll
- **Full-bleed image sections** that break up text blocks (geological imagery, drill rigs, landscapes)
- **Typography**: A distinctive display serif or slab for headings (e.g., Playfair Display, DM Serif Display, or Freight Big) paired with a clean sans-serif body (e.g., DM Sans, Outfit, Satoshi). NOT Inter/Roboto/Arial.
- **Logo scroll bar** (like LSVP's partner logos) — show partner/client logos in a horizontal auto-scroll
- **Card-based team/project sections** with hover reveals

### Content & Tone Reference: Aspero-Watt, FrontierX, Kenorland, Australis
- Professional but not corporate-stiff
- Emphasis on **conviction, depth, and technical credibility**
- Mining/geological language used naturally (not dumbed down)
- Short, punchy copy blocks — let the design breathe

### Colour Palette
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0A` | Page background |
| `--bg-secondary` | `#141414` | Card/section backgrounds |
| `--text-primary` | `#F5F5F5` | Headings, body text |
| `--text-muted` | `#8A8A8A` | Captions, secondary text |
| `--accent` | `#C41E3A` | CTAs, highlights, hover states (chilli red) |
| `--accent-warm` | `#E85D3A` | Gradient partner to accent |
| `--surface` | `#1E1E1E` | Elevated panels |

---

## 2. Site Architecture & Pages

### Page Structure (Single-page with anchor sections OR multi-page — recommend multi-page for SEO)

```
/                    → Home (hero + overview)
/about               → About / Philosophy
/services            → Services (what we do)
/projects            → Track Record / Selected Projects
/team                → Team
/contact             → Contact
```

### 2.1 HOME PAGE (`/`)

**Hero Section**
- Full-viewport dark background
- Large typographic statement, LSVP-style, e.g.:

  > **CONVICTION**
  > **GROWS THE DEEPER**
  > **YOU DIG**

  or

  > **WHERE OTHERS SEE ROCK,**
  > **WE SEE OPPORTUNITY**

- Subtle animated background — could be a slow-panning geological texture, topographic contour lines animated in SVG, or a particle/grain effect
- Single CTA button: "Explore Our Work" or "Get In Touch"

**Philosophy Strip** (like LSVP's depth manifesto)
- 2–3 short paragraphs explaining the Chilli Pepper approach
- Key messaging:
  - Singapore-based, globally focused
  - Specialist in project evaluation, due diligence, and project generation
  - Technical rigour combined with commercial pragmatism
  - Aligned interests — we invest alongside our recommendations

**Services Preview** (3–4 cards)
- Icon + title + one-liner per service
- Links to `/services` page
- Cards: Project Generation | Due Diligence & Appraisal | Technical Review | Strategic Advisory

**Selected Projects / Track Record** (scrolling cards, LSVP company-card style)
- Show 4–6 project cards with:
  - Project name (can be generic/anonymised)
  - Commodity icon
  - Region tag
  - Brief outcome line
- Link to `/projects`

**Client/Partner Logo Bar**
- Auto-scrolling horizontal marquee (like LSVP)
- Placeholder logos for now; replace with real ones later

**Latest News / Insights** (optional — 2–3 cards)
- Title + date + excerpt
- Link to full article or external publication

**CTA Footer Block**
- "Have a project? Let's talk." with contact form or link to `/contact`

---

### 2.2 ABOUT PAGE (`/about`)

**Hero**: Shorter hero with page title "About Chilli Pepper" over a geological/landscape image

**Our Story**
- Founded in Singapore — a strategic hub connecting capital markets with resource-rich jurisdictions worldwide
- Lean team of senior geoscientists and mining professionals (2–5 people) with decades of combined experience
- Background spanning major miners, junior explorers, and investment advisory
- Commodity-agnostic — we evaluate projects across all commodities (gold, copper, lithium, nickel, rare earths, bulk commodities, and more)
- Deep global networks spanning every major mining jurisdiction

**Our Philosophy** (inspired by LSVP's "depth" manifesto and FrontierX's values)
- **Rigour** — Systematic, data-driven evaluation frameworks
- **Alignment** — We succeed when our clients succeed
- **Independence** — Unbiased technical opinions, no conflicts
- **Access** — Extensive network of geoscientists, labs, and operators across key jurisdictions

**Key Stats Strip** (animated counters on scroll)
- `XX+` Projects evaluated
- `XX+` Years combined experience
- `XX` Jurisdictions covered
- `$XXM+` Transaction value advised on

---

### 2.3 SERVICES PAGE (`/services`)

Four service pillars, each with:
- Icon/illustration
- Title
- 3–4 paragraph description
- Bullet list of sub-services

**1. Project Generation**
- Systematic targeting and land positioning
- Data compilation, GIS, and prospectivity analysis
- Alliance/JV structuring
- Staking and tenure management

**2. Due Diligence & Technical Appraisal**
- Independent technical reviews (JORC, NI 43-101, SAMREC compliant)
- Geological model and resource estimate review
- Site visits and operational assessments
- Risk identification and mitigation frameworks

**3. Exploration Management**
- Program design and budgeting
- Drilling supervision and QA/QC
- Data management and reporting
- Regulatory compliance

**4. Strategic & Corporate Advisory**
- Project acquisition and divestiture support
- Valuation and transaction advisory
- Investor materials and technical presentations
- Board-level geological advisory

---

### 2.4 PROJECTS / TRACK RECORD PAGE (`/projects`)

**Layout**: Grid of project cards (like LSVP's companies page or Kenorland's project overview)

Each card:
- Hero thumbnail (map or geological image)
- Project name
- Location / Jurisdiction
- Commodity tags (Au, Cu, Li, etc.)
- Stage tag (Grassroots | Advanced Exploration | Feasibility | Production)
- 2–3 sentence description
- Hover state: slight zoom/colour overlay

**Filter bar** at top: filter by commodity, region, stage (optional, nice-to-have)

Use **placeholder/generic projects** for now (reflecting broad commodity and global scope):
1. Gold project — West Africa
2. Copper-gold porphyry — Southeast Asia
3. Lithium pegmatite — Australia
4. Nickel laterite — Indonesia / Philippines
5. Rare earths — Scandinavia
6. Iron ore — South America
7. Polymetallic VMS — Central Asia
8. Copper — Central Africa

---

### 2.5 TEAM PAGE (`/team`)

**Layout**: Grid of headshot cards (like LSVP team page or FrontierX)

Each card:
- Professional headshot (use placeholder image)
- Name
- Title / Role
- LinkedIn icon link
- Click/hover to expand: short bio (3–4 sentences)

**Placeholder team members** (replace with real — team is 2–5 people):
- Founder / Managing Director — geology background, 15+ years across multiple commodities
- Principal Geologist / Technical Director — exploration targeting, resource evaluation
- Associate / Analyst — data, GIS, project support

Note: With a small team, keep this section compact. Consider a single row of 2–3 cards rather than a full grid. Quality over quantity — emphasise the depth of each person's experience.

---

### 2.6 CONTACT PAGE (`/contact`)

- **Left side**: Contact form (Name, Email, Company, Subject dropdown [General Inquiry / Project Submission / Partnership / Other], Message, Submit button)
- **Right side**: Company details
  - Address: 151 Chin Swee Rd, #02-24 Manhattan House, Singapore 169876
  - Email: info@chillipepperpte.com (placeholder)
  - Phone: +65 XXXX XXXX (placeholder)
- **Embedded map** (Google Maps or Mapbox showing Singapore office location)
- Optional: "Submit a Project" section/form for vendors to send project summaries

---

## 3. Technical Specification

### Recommended Stack
| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG for SEO, React ecosystem, easy deployment |
| Styling | **Tailwind CSS** | Utility-first, rapid iteration, consistent design tokens |
| Animations | **Framer Motion** | Scroll-triggered animations, page transitions, hover effects |
| CMS (optional) | **MDX files** or **Contentlayer** | For blog/news posts; no external CMS dependency |
| Forms | **React Hook Form + Resend** or **Formspree** | Contact form handling |
| Deployment | **Vercel** | Zero-config for Next.js, global CDN, free tier available |
| Images | **Next/Image** + **Unsplash/Pexels** placeholders | Optimised loading, geological stock imagery |
| Icons | **Lucide React** | Lightweight, consistent icon set |
| Fonts | **Google Fonts** (DM Serif Display + DM Sans) or **Fontsource** | Self-hosted for performance |

### Alternative (Simpler) Stack
If a lighter build is preferred:
- **Astro** with **Tailwind** (static site, minimal JS, great for content sites)
- **Plain HTML/CSS/JS** with a build tool like Vite (simplest possible)

### Key Technical Notes
- **Mobile-first responsive** — must look excellent on mobile
- **Dark theme by default** (no light/dark toggle needed)
- **Performance**: Target Lighthouse score >90 on all metrics
- **SEO**: Meta tags, Open Graph, structured data (LocalBusiness schema)
- **Accessibility**: Semantic HTML, proper heading hierarchy, focus states, alt text
- **Favicon**: Chilli pepper icon in brand red

---

## 4. Component Breakdown

### Global Components
- `<Navbar />` — sticky, transparent on hero, solid on scroll; logo left, links right, CTA button
- `<Footer />` — dark, company info, quick links, social icons (LinkedIn), copyright
- `<PageHero />` — reusable hero with title, subtitle, optional background image/effect
- `<SectionHeading />` — consistent section titles with optional eyebrow text
- `<CTABlock />` — full-width call-to-action banner

### Home-Specific Components
- `<HeroAnimation />` — SVG topographic contour animation or grain texture effect
- `<LogoMarquee />` — auto-scrolling client/partner logos (CSS-only marquee)
- `<ServiceCard />` — icon + title + description with hover lift effect
- `<ProjectCard />` — thumbnail + overlay with project details
- `<StatCounter />` — animated number counter triggered on scroll intersection

### Reusable Components
- `<TeamCard />` — headshot + name + role with expandable bio
- `<ContactForm />` — validated form with success/error states
- `<FilterBar />` — optional tag-based filter for projects page
- `<NewsCard />` — date + title + excerpt card

---

## 5. Content & Copy Guidelines

### Voice & Tone
- **Authoritative but approachable** — we know our stuff but aren't arrogant
- **Technical where appropriate** — use correct geological/mining terminology
- **Concise** — short paragraphs, no fluff. Let the design carry the weight.
- **Active voice** — "We evaluate" not "evaluations are conducted"
- **Globally minded, commodity-agnostic** — reference Singapore base, emphasise ability to work across all commodities and jurisdictions. Position the small team size as a strength: senior professionals, no layers, direct access to decision-makers
- **Lean and nimble** — frame the boutique size as an advantage over large consultancies (faster, more aligned, no juniors doing the real work)

### Placeholder Copy (for initial build)
Use the section descriptions above as placeholder content. Mark all placeholder text with a comment or wrapper like `{/* PLACEHOLDER — replace with final copy */}` so it's easy to find and swap.

### Image Assets Needed
- **Hero backgrounds**: 2–3 high-quality geological/landscape images (open pit mine, drill core, mountain terrain, geological map)
- **Team headshots**: Professional photos or placeholder silhouettes
- **Project thumbnails**: Maps, satellite imagery, geological cross-sections
- **Icons**: Simple line icons for each service pillar
- Source from **Unsplash** or **Pexels** using search terms: "mining exploration", "geological survey", "drill core", "open pit mine", "mineral exploration landscape", "topographic map"

---

## 6. Animations & Interactions

### Scroll Animations (Framer Motion / CSS)
- Hero text: staggered fade-up on load (each word/line with 100ms delay)
- Section headings: fade-up when entering viewport
- Service/project cards: staggered fade-up-and-in from bottom
- Stat counters: animate from 0 to target number over 1.5s
- Logo marquee: infinite horizontal scroll (CSS `@keyframes`)

### Hover Effects
- Nav links: underline slide-in from left
- CTA buttons: background colour shift with slight scale
- Project cards: image zoom + dark overlay + text reveal
- Team cards: subtle lift + shadow increase

### Page Transitions (optional, nice-to-have)
- Fade or slide transition between pages using Framer Motion `AnimatePresence`

---

## 7. SEO & Metadata

### Per-Page Meta
```
Home:        "Chilli Pepper | Mining Exploration Consultancy | Singapore"
About:       "About Us | Chilli Pepper Pte Ltd"
Services:    "Services | Project Generation, Due Diligence & Advisory"
Projects:    "Track Record | Selected Projects | Chilli Pepper"
Team:        "Our Team | Chilli Pepper Pte Ltd"
Contact:     "Contact | Chilli Pepper Pte Ltd"
```

### Structured Data
- `LocalBusiness` schema with Singapore address
- `Organization` schema with logo, social links

### Open Graph
- OG image: branded card with logo + tagline (1200x630px)
- OG description: "Singapore-based mining exploration consultancy specialising in project generation, due diligence, and technical appraisal."

---

## 8. Deployment & Domain

- **Domain**: Register `chillipepperpte.com` or `chillipeppersg.com` or similar
- **Hosting**: Vercel (recommended for Next.js) or Netlify
- **SSL**: Automatic via Vercel/Netlify
- **Analytics**: Add Google Analytics 4 or Plausible (privacy-friendly)
- **Email**: Set up `info@chillipepperpte.com` via Google Workspace or similar

---

## 9. Build Phases

### Phase 1: Foundation (Priority)
- [ ] Project setup (Next.js + Tailwind + Framer Motion)
- [ ] Global layout: Navbar, Footer, dark theme, typography
- [ ] Home page: Hero, philosophy section, services preview, CTA
- [ ] Contact page with working form
- [ ] Mobile responsive

### Phase 2: Content Pages
- [ ] About page with philosophy and stats
- [ ] Services page with four pillars
- [ ] Team page with card grid
- [ ] Projects page with card grid

### Phase 3: Polish
- [ ] Scroll animations and hover effects
- [ ] Logo marquee
- [ ] Page transitions
- [ ] SEO metadata and structured data
- [ ] Performance optimisation (image compression, lazy loading)
- [ ] Lighthouse audit and fixes

### Phase 4: Launch
- [ ] Final content and image replacement
- [ ] Domain connection
- [ ] Analytics setup
- [ ] Form backend connection
- [ ] Go live

---

## 10. Prompt for Claude in Cursor

When handing this plan to Claude in Cursor, use a prompt like:

> **"Build a multi-page website for Chilli Pepper Pte Ltd, a Singapore-based mining exploration and due diligence consultancy. Follow the attached plan document exactly. Use Next.js 14 (App Router), Tailwind CSS, and Framer Motion. The design should mirror the dark, editorial, typographic-heavy aesthetic of lsvp.com — full-viewport hero sections, scroll-triggered animations, generous whitespace, and bold typography. The accent colour is chilli red (#C41E3A). Start with Phase 1: project setup, global layout (Navbar, Footer), and the Home page. Use placeholder content as described in the plan. Read the frontend-design skill at /mnt/skills/public/frontend-design/SKILL.md before starting."**

For each subsequent phase, prompt:
> **"Continue building the Chilli Pepper website. Now implement Phase 2: About, Services, Team, and Projects pages per the plan document."**

---

## Appendix: Reference Sites Summary

| Site | What to take from it |
|---|---|
| **lsvp.com** | Overall layout, dark theme, typographic hero, scroll animations, logo marquee, card grids, editorial feel |
| **aspero-watt.com** | Mining consultancy content structure, services framing, clean professional tone |
| **frontier-exploration.com** | Value props layout (Partnership First, Disciplined, Agile etc.), team section, FAQ style |
| **kenorlandminerals.com** | Project overview grid, corporate presentation link, news section |
| **mineralexploration.com.au** | Service categories (Discovery, Corporate, Investment, Education), "Bridging potential and value" positioning |
| **yetiventures.co** | Exploration tech messaging, bold section headings, contact/lead gen form |