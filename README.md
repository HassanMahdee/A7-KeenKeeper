KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a friendship-tracking web app that helps you stay connected with the people who matter. Log calls, texts, and video chats, visualize your interaction history, and get insights into your relationship health.

Live Demo: https://keenkeeper013.netlify.app

FEATURES

- Timeline Logging – From any friend's detail page, click Call, Text, or Video to instantly add an entry to your global timeline. Each entry shows the friend's name, interaction type, and timestamp.
- Friendship Analytics – A pie chart (Recharts) shows your interaction breakdown (calls / texts / video calls) so you know which channels you use most.
- Filter & Sort Timeline – Filter by interaction type (Call/Text/Video), search for a friend by name, and sort entries by newest or oldest first.

Additional features: responsive design (mobile/tablet/desktop), localStorage persistence, toast notifications, 404 page, loading animation for friend data.

TECHNOLOGIES USED

Next.js 16 (App Router) - React framework with server components + routing
React - UI components & hooks (Context, useState, useEffect)
Tailwind CSS + daisyUI - Styling, theming, and pre-built UI components
Recharts - Pie chart for analytics page
react-toastify - Toast notifications for user actions
LocalStorage - Persist timeline entries across page reloads

SPECIAL ADDITIONS

1. Home page – Browse all friends in a responsive grid. Click any friend card to view their details.
2. Friend details – See stats, relationship goal, and the Quick Check-In card. Click Call, Text, or Video – a toast confirms the entry and it's saved to your timeline.
3. Timeline page – View all logged interactions. Use the dropdown filter (All / Audio Call / Text / Video Call), search by friend name, and toggle sort order (newest/oldest first).
4. Stats page – View a pie chart showing how many calls, texts, and video calls you've logged.

All timeline entries survive page refreshes thanks to localStorage.

Made with coffee and React · KeenKeeper 2026