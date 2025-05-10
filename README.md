# 🧾 SoftSell - Marketing Landing Page

A responsive, single-page marketing website for the fictional software resale startup **SoftSell**, created as part of the Credex Web Development Internship Assignment.

---

## ✨ Features Implemented

### 🔹 UI Sections
- **Hero Section** – Catchy headline, subheading, CTA button, and theme toggle
- **How It Works** – 3-step visual guide: Upload → Valuation → Get Paid
- **Why Choose Us** – 3 benefit tiles with icons and animated cards
- **Testimonials** – 2 dummy customer reviews with roles & companies
- **Contact Form** – Name, email, company, license type (dropdown), and message with frontend validation

### 💡 Enhancements
- **Global Light/Dark Theme Toggle** using Context API + CSS variables
- **Framer Motion Animations** – Smooth slide-ins and hover effects
- **AI-Powered Chat Widget** (OpenAI API / Mocked):
  - Floating customer support bot
  - Handles common prompts like "How do I sell my license?"
  - Clean chat UX and fallback support

---

## 🖌️ Design Choices

- **Tailored with React + CSS Modules**
- **Theme-ready styles** using `data-theme` and CSS variables
- **Responsive Layout** with Flexbox for mobile and desktop
- **Framer Motion** animations for visual polish
- **React Icons** for clean, consistent visuals
- **SEO tags** added via `index.html`
- **Favicon & logo placeholder** in `public/`

---

## 🕒 Time Spent

| Task                             | Time |
|----------------------------------|------|
| Project setup & theming system   | 1.5h |
| Hero + Theme Toggle              | 1h   |
| How It Works + Animation         | 1.5h |
| Why Choose Us + Animation        | 1h   |
| Testimonials Section             | 0.5h |
| Contact Form with validation     | 1h   |
| Chat Widget (OpenAI Integration) | 2h   |
| SEO + Polish + Deployment        | 0.5h |
| **Total**                        | ~9h  |

---

## 🚀 How to Run

```bash
git clone https://github.com/anishasingh30/SoftSell.git
cd softsell-assignment
npm install
npm run dev
