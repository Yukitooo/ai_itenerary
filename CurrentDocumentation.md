# Current Project Documentation

## Project Summary

`ai-itenerary` is a `Next.js` App Router project for building a travel itinerary UI.
It currently focuses on frontend form input, shared state, and rendering static itinerary table data.

## Current Tech Stack

- Framework: `Next.js 16.1.4` (App Router)
- UI: `React 19.2.3`
- Language: `TypeScript`
- Styling: `Tailwind CSS v4` (via `@import "tailwindcss"` in `app/globals.css`)
- State Management: `Zustand`
- Linting: `ESLint` + `eslint-config-next`
- Package Manager: `npm` (based on `package-lock.json`)

## Scripts

Defined in `package.json`:

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Current App Structure

- `app/layout.tsx`: Root layout, global fonts, and navbar mount.
- `app/layouts/Navbar.tsx`: Top navigation (`/`, `/pages/generatePage`, `/history` link).
- `app/page.tsx`: Home route entry (currently minimal/incomplete render logic).
- `app/pages/generatePage/page.tsx`: Main generate itinerary page.
- `app/pages/generatePage/ItineraryForm.tsx`: Input form for country, number of days, and description.
- `app/pages/generatePage/Table.tsx`: Renders itinerary rows in a table.
- `app/statess/usePlannerState.ts`: Main Zustand store for form state.
- `app/statess/useToggleState.ts`: Zustand toggle store (`showTable`).
- `app/types/types.ts`: Shared TypeScript types for plan and itinerary models.
- `app/globals.css`: Global Tailwind and theme variables.

Note: There is also `app/states/planStore.tsx`, which appears to be older/experimental and is not the primary store used by the generate page.

## Current Data/State Flow

1. User enters values in `ItineraryForm`.
2. Form updates Zustand store via:
   - `setCountry`
   - `setDateRange`
   - `setPlanDescription`
3. `generatePage/page.tsx` reads values from `usePlannerState` and displays them.
4. Table currently uses hardcoded mock itinerary rows (no backend/API call yet).

## Current Types

Defined in `app/types/types.ts`:

```ts
export type Plan = {
  country: string;
  dateRange: number;
  planDescription: string;
};

export type ItineraryRow = {
  time: string;
  place: string;
  itineraryRowDescription: string;
};

export type ItineraryDay = {
  currentDay: string;
  itineraryRows: ItineraryRow[];
};

export type Itinerary = {
  itineraryName: string;
  itineraryDescription: string;
  itineraryList: ItineraryDay[];
};

export type Toggles = {
  showTable: boolean;
};
```

## Routing Notes

- Existing routes:
  - `/`
  - `/pages/generatePage`
- Navbar includes `/history`, but a matching route/page is not currently present in the files listed.

## Planned Future Stack (Roadmap)

You mentioned the following target setup:

- `PostgreSQL` for persistent data storage
- `GROQ API` for AI itinerary generation

Suggested architecture direction:

- Add API route handlers (or server actions) for itinerary generation and storage.
- Send user prompt data from `ItineraryForm` to backend.
- Use GROQ API response to build itinerary rows/days.
- Persist generated itineraries and user inputs in PostgreSQL.
- Add a real `/history` page backed by PostgreSQL records.

## Next Implementation Milestones

1. Add environment variable scaffolding (`.env.local`) for DB + GROQ keys.
2. Choose DB layer (`pg`, Prisma, or Drizzle).
3. Implement `POST /api/itinerary/generate` for GROQ call + response normalization.
4. Implement itinerary persistence tables and save flow.
5. Replace mock table data with generated data from API/database.
6. Implement `/history` page using stored itinerary records.
