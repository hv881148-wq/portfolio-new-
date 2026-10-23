# Harshit Verma — Personal Portfolio Website (Multi-Page)

A responsive multi-page personal portfolio website for **Harshit Verma**, a multidisciplinary business analytics and finance professional specializing in financial modeling, Excel, Power BI, SQL, Python, and Tableau.

Strictly sourced from the official ATS Resume with zero invented history, dates, or credentials.

---

## Multi-Page Architecture & Routes

The portfolio is structured into dedicated, shareable pages via `react-router-dom`:

| Route | Page | Description |
| :--- | :--- | :--- |
| **`/`** | **Home** | Monogram intro, editorial split hero, 4-column KPI strip, spotlights, and quick contact banner. |
| **`/about`** | **About & Journey** | Editorial narrative, core analytical pillars, and vertical timeline (Allenhouse BBA & KR Education Center). |
| **`/skills`** | **Skills & Tools** | Filterable competency directory (Data & Analytics, Business & Finance, Productivity & Modern Tools). |
| **`/projects`** | **Projects Gallery** | Case studies with category filters (Retail Analytics, Budget Variance, Customer Retention) and methodology inspection. |
| **`/credentials`** | **Education & Certs** | Verified academic qualifications, IBM SkillsBuild credentials, and NISM National Financial Literacy Quiz recognition. |
| **`/contact`** | **Direct Contact** | Form-free direct contact cards (email, phone, LinkedIn, WhatsApp) with 1-click clipboard copy. |
| **`/resume`** | **ATS Resume Viewer** | Dedicated PDF viewer embedding the official ATS resume with direct download action and document metadata. |

---

## Technology Stack

- **Framework**: React 19 + React Router v7 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 with White, Blue, Black, and Green palette tokens:
  - **White**: Crisp light canvas (`#FFFFFF`) and high-contrast dark text
  - **Blue**: Primary interactive & branding color (Electric/Cobalt Blue `#2563EB` / `#3B82F6`)
  - **Black**: Deep dark canvas (`#080C14`), dark surfaces (`#0F172A`), and high-contrast light text
  - **Green**: Verification, status, and growth highlights (Emerald Green `#059669` / `#10B981`)
- **Typography**: Outfit (Headings), Plus Jakarta Sans (Body), Playfair Display (Editorial accents), JetBrains Mono (Data/tabular figures)
- **Icons**: Lucide React
- **Motion**: CSS transitions & compositor properties respecting `prefers-reduced-motion`

---

## Key Features

1. **Monogram Intro Animation**:
   - Monogram ("HV") with fine champagne-gold line on charcoal.
   - Accessible, skippable, and automatically remembers session status.

2. **Floating Capsule Multi-Page Navigation**:
   - Active route highlighting with subtle gold indicator.
   - Real-time bilingual switch: English (`EN`) and Hindi (`हिंदी`) with natural translations across all pages.
   - Dark/Light theme toggle with `localStorage` persistence (default is Dark mode).
   - Mobile slide-down navigation drawer.

3. **Authentic ATS Resume Integration**:
   - Dedicated `/resume` page embedding `/public/assets/aistudio/Harshit_Verma_Resume_ATS_1ec9a430.pdf`.
   - Also available as a quick modal overlay from any page.
   - Native PDF download with formatted filename `Harshit_Verma_Resume_ATS.pdf`.

4. **Projects with Detailed Methodology**:
   - Category filtering across retail analytics, budget variance modeling, and SQL/Power BI retention.
   - Modal deep-dive into datasets, analytical procedures, deliverables, and managerial impact.

5. **Form-Free Direct Contact**:
   - One-click copy for email (`hv881148@gmail.com`) and phone (`+91 8707093720`).
   - Direct calling, WhatsApp chat, and LinkedIn connection.

---

## Configuration & Customization

All portfolio content is centralized in **`src/data/portfolioData.ts`**:
- **Personal details**: Update name, monogram, availability flag, location, email, and phone.
- **Translations**: Easily modify English and Hindi texts in one place.
- **Projects & Skills**: Add or modify case studies and tools with typed interfaces.

---

## Running the Application

```bash
# Install dependencies
npm install

# Run local development server (port 3000)
npm run dev

# Build for production
npm run build

# Run TypeScript lint verification
npm run lint
```
