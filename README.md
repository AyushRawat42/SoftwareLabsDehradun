# Software Labs Dehradun

Marketing brochure for **Software Labs Dehradun**: the Higher Education ERP for Indian colleges, autonomous institutes, and universities, plus custom websites and operational systems.

Built with React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, and Lucide icons. All copy lives in the React components and `src/data/` files. There is no CMS or application backend.

## Product

Software Labs Higher Education ERP is a cloud-native campus platform designed around NEP 2020 and NAAC Binary Accreditation: academics and credits, accreditation evidence, fees and Indian payment rails, examinations and attendance, and WhatsApp-first communication.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

The app serves at `http://localhost:3000`.

```bash
npm run build    # production bundle in dist/
npm run preview  # preview the production build
npm run lint     # TypeScript check
```

## Contact form

The enquiry form posts to [FormSubmit](https://formsubmit.co/) and delivers mail to the address in `src/data/site.ts`. The first submission to a new inbox may require a one-time confirmation email from FormSubmit.

## Contact details

Edit `src/data/site.ts` to change public email, phone, and WhatsApp. Leave `phoneDisplay`, `phoneTel`, and `whatsappDigits` empty to hide those channels.

## Project layout

- `src/App.tsx` — section order
- `src/data/product.ts` — ERP copy
- `src/data/site.ts` — studio contact and enquiry types
- `src/components/` — page sections
