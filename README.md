# CFBL Brand Family — Shopify 2.0 Theme

A custom Shopify 2.0 theme for **balancedlivingde.com** supporting three connected but distinct brand experiences under one roof.

## Brand Contexts

| Brand | Class | Audience | Primary Color | Background |
|---|---|---|---|---|
| Center for Balanced Living | `.brand-cfbl` | Clients, families | Deep Navy `#2B5275` | Sand `#EED9C5` |
| CFBL Institute | `.brand-institute` | Licensed clinicians | Forest `#3D5A52` | Cream `#EAE2D0` |
| MUSA | `.brand-musa` | Readers, book buyers | Oxblood `#6E1F23` | Bone `#F1E8D8` |

Brand context is driven by a page metafield `brand.context` (values: `cfbl`, `institute`, `musa`). The layout file reads this and applies the appropriate body class.

## File Structure

```
shopify-theme/
├── assets/
│   ├── base.css            # Global CSS variables, resets, utilities
│   ├── components.css      # Header, buttons, cards, forms, footer
│   └── sections.css        # Section-level layout and background variants
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid        # Main layout — brand class, stylesheets, nav
├── locales/
│   └── en.default.json
├── sections/               # 19 reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-brand.liquid
│   ├── pathway-cards.liquid
│   ├── service-cards.liquid
│   ├── split-content.liquid
│   ├── featured-training.liquid
│   ├── featured-essay.liquid
│   ├── book-feature.liquid
│   ├── team-grid.liquid
│   ├── testimonial-quote.liquid
│   ├── newsletter-signup.liquid
│   ├── contact-cta.liquid
│   ├── faq-accordion.liquid
│   ├── resource-grid.liquid
│   ├── event-list.liquid
│   ├── editorial-archive.liquid
│   ├── brand-intro.liquid
│   └── three-branch-overview.liquid
├── snippets/               # 10 reusable snippets
│   ├── brand-vars.liquid
│   ├── button-primary.liquid
│   ├── button-secondary.liquid
│   ├── card-service.liquid
│   ├── card-training.liquid
│   ├── card-essay.liquid
│   ├── card-book.liquid
│   ├── breadcrumb.liquid
│   ├── seo-schema.liquid
│   └── form-field.liquid
└── templates/              # 17 JSON templates
    ├── index.json
    ├── page.json
    ├── page.cfbl.json
    ├── page.institute.json
    ├── page.musa.json
    ├── page.service.json
    ├── page.evaluation.json
    ├── page.training.json
    ├── page.book.json
    ├── page.speaking.json
    ├── page.contact.json
    ├── blog.essays.json
    ├── article.essay.json
    ├── collection.trainings.json
    ├── product.training.json
    ├── product.book.json
    └── product.digital-resource.json
```

## How Brand Context Works

1. Set a metafield on each page/product: `brand.context = "cfbl"` (or `"institute"` or `"musa"`)
2. `layout/theme.liquid` reads the metafield and adds `class="brand-cfbl"` (etc.) to `<body>`
3. All CSS variables in `assets/base.css` are scoped to these classes — sections re-skin automatically
4. For mixed-brand sections (e.g. an Institute preview block on the CFBL homepage), wrap in `<div class="brand-institute">` and use `{% render 'brand-vars', brand: 'institute' %}`

## Shopify Setup Notes

- Install the three CSS files in the order: `base.css` → `components.css` → `sections.css`
- Create three Shopify link lists: `main-menu`, `cfbl-footer`, `institute-footer`, `musa-footer`
- Add the `brand.context` metafield to Pages, Products, Blog Posts via Shopify Admin → Settings → Custom data
- The header section uses `linklists["main-menu"]` — populate it with the five nav items (For Clients, For Professionals, MUSA, About, Contact) with appropriate children
- For the CFBL logo, upload to Shopify Files and reference in Header section settings

## Design System Reference

The full design system — brand guidelines, color palettes, typography, and HTML/React UI kit prototypes — lives in `project/` at the root of this repository.

- `project/README.md` — Complete brand guidelines
- `project/colors_and_type.css` — All CSS variables (source of truth)
- `project/ui_kits/cfbl/` — CFBL HTML prototype
- `project/ui_kits/institute/` — Institute HTML prototype
- `project/ui_kits/musa/` — MUSA HTML prototype
