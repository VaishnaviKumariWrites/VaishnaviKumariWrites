/* =========================================================
   Vaishnavi's assistant: local, keyword-based portfolio chatbot.
   No AI service, no network requests, nothing sent anywhere.

   To add or change an answer, edit KB below:
     keys:   words/phrases that trigger it (lower-case, whole words;
             end with * for a prefix match, e.g. 'optimi*')
     answer: text; [label](url) becomes a link
     chips:  optional follow-up suggestions
   Contact policy: email and LinkedIn only. Never add a phone number.
   Current job: keep it general (no company name, no internal details).
   Booking: settings in booking-config.js. Until its endpoint is set, the live site says
             "online booking is coming soon"; previews run a demo with sample times.
   ========================================================= */
(function () {
  const EMAIL = 'vaishnavi.kumari1921@gmail.com';
  const LINKEDIN = 'https://www.linkedin.com/in/vaishnavi-kumari-752a5a1b9';
  const CONTACT = `Email: [${EMAIL}](mailto:${EMAIL})\nLinkedIn: [linkedin.com/in/vaishnavi-kumari](${LINKEDIN})`;

  const KB = [
    /* ---------- Conversation ---------- */
    { id: 'greeting', keys: ['hello', 'hi', 'hii', 'hey', 'hola', 'namaste', 'good morning', 'good afternoon', 'good evening', 'yo'],
      answer: 'Hii! I can tell you about Vaishnavi’s work in content, SEO and marketing, her results, the teams she’s led, or how to reach her. What would you like to know?',
      chips: ['Who is Vaishnavi?', 'Experience', 'Results', 'How to contact'] },
    { id: 'thanks', keys: ['thanks', 'thank you', 'thx', 'great', 'awesome', 'cool', 'helpful', 'nice'],
      answer: 'Happy to help! Anything else? Experience, writing samples, or how to get in touch?' },
    { id: 'bye', keys: ['bye', 'goodbye', 'see you', 'cya'],
      answer: `Thanks for stopping by. If you’d like to talk to Vaishnavi directly:\n${CONTACT}` },

    /* ---------- Contact (phone intentionally excluded) ---------- */
    { id: 'phone', weight: 3, keys: ['phone', 'mobile', 'cell', 'whatsapp', 'call her', 'contact number', 'phone number', 'number', 'telephone', 'ring'],
      answer: `Vaishnavi doesn’t share a phone number publicly. The best ways to reach her are:\n${CONTACT}\n\nIf a call makes sense, you can set one up over email or LinkedIn.` },
    { id: 'contact', weight: 2, keys: ['contact', 'reach', 'email', 'mail', 'linkedin', 'get in touch', 'connect', 'message her', 'dm', 'talk to', 'ping'],
      answer: `You can reach Vaishnavi here:\n${CONTACT}\n\nShe’s happy to hear about content and SEO roles, projects, consulting, or a draft that needs a sharp pair of eyes.` },
    { id: 'hire', weight: 2, keys: ['hire', 'hiring', 'job', 'opportunity', 'opportunities', 'available', 'open to', 'recruit', 'recruiter', 'position', 'role for', 'collaborate', 'collaboration', 'collab', 'freelance', 'work with her', 'work together'],
      answer: `For content, SEO or marketing roles, freelance projects, or consulting, the best first step is a short note with what you have in mind:\n${CONTACT}`,
      chips: ['Experience', 'Results', '1:1 sessions'] },
    { id: 'consulting', weight: 3, keys: ['consult', 'consultant', 'consulting', 'advise', 'advisor', 'advisory', 'audit', 'seo audit', 'content audit', 'my website', 'my site', 'my blog', 'our blog', 'help us', 'my company', 'startup', 'founder', 'strategy call', 'content strategy for'],
      answer: `Vaishnavi helps founders and teams with content and SEO: auditing what ranks and what doesn’t, building a topical plan, setting tone and briefs, and setting up a content team and review workflow.\n\nTo discuss your site or project:\n${CONTACT}`,
      chips: ['1:1 sessions', 'How she works', 'Results'] },
    { id: 'sessions', weight: 2, keys: ['session', 'sessions', '1:1', 'one on one', 'mentor', 'mentorship', 'mentoring', 'guidance', 'career advice', 'review my draft', 'edit my draft', 'red pen', 'feedback on my', 'break into', 'topmate'],
      answer: `She offers four kinds of 1:1 sessions:\n• SEO content audit: go through your Search Console data and leave with a prioritised refresh list.\n• Break into content writing: portfolio, first samples, pitching, and moving from writer to strategist.\n• Red-pen my draft: send one article, get line edits, a better headline and notes on intent and structure.\n• Build your first content team: who to hire first, how to brief, and what to measure.\n\nOnline booking is coming soon. For now, email or message her to set one up:\n${CONTACT}` },
    { id: 'pricing', weight: 2, keys: ['price', 'pricing', 'rate', 'rates', 'cost', 'fee', 'fees', 'charge', 'charges', 'budget', 'how much', 'paid', 'free session'],
      answer: `It depends on the scope of the work. Send Vaishnavi a short note about what you need and she’ll get back with details:\n${CONTACT}` },
    { id: 'resume', keys: ['resume', 'cv', 'curriculum vitae', 'portfolio pdf', 'biodata'],
      answer: `Her résumé is available on request. Email [${EMAIL}](mailto:${EMAIL}) or message her on [LinkedIn](${LINKEDIN}).` },
    { id: 'location', keys: ['where is she', 'where does she live', 'where is vaishnavi', 'location', 'based', 'city', 'ahmedabad', 'india', 'timezone', 'time zone', 'relocate', 'remote', 'us clients', 'international'],
      answer: 'Vaishnavi is based in Ahmedabad, India (IST, UTC+5:30), and works with teams remotely, including clients outside India. For questions about time zones or relocation, ask her directly by email or LinkedIn.' },

    /* ---------- About ---------- */
    { id: 'about', weight: 2, keys: ['who is', 'who is vaishnavi', 'about her', 'about vaishnavi', 'introduce', 'introduction', 'yourself', 'about you', 'bio', 'background', 'summary', 'what does she do', 'who are you'],
      answer: 'Vaishnavi Kumari is a senior writer, editor and SEO strategist with 4+ years in content and organic growth. She decides what gets written, where it lives and how it should sound, then makes sure it keeps pulling readers long after it’s published.\n\nShe started as a news anchor and reporter, has led content, SEO and marketing teams, runs her own blog and manages blogs for others. Also: one of the youngest contestants on Kaun Banega Crorepati Season 14, and a confirmed momo enthusiast.',
      chips: ['Experience', 'Results', 'Skills', 'KBC'] },
    { id: 'current', weight: 3, keys: ['current', 'currently', 'now', 'do now', 'doing now', 'working now', 'right now', 'present', 'today', 'where does she work', 'which company', 'employer', 'current role', 'current job'],
      answer: 'Right now Vaishnavi is a Senior Technical Writer & Editor at an AI-powered web and mobile app development company. She writes and optimises service pages and blogs, shapes content strategy for new services, and has hired and trained a team of 6–7 writers with a review workflow every piece goes through.',
      chips: ['Experience', 'Team leadership', 'Skills'] },
    { id: 'experience', weight: 2, keys: ['experience', 'her experience', 'work experience', 'her career', 'career', 'work history', 'worked', 'companies', 'previous', 'past roles', 'journey', 'timeline', 'years of experience'],
      answer: 'Her path, latest first:\n• Now: Senior Technical Writer & Editor at an AI web and app development company\n• Azine Technologies: Senior Content Writer & Editor (Oct 2024 – Mar 2026)\n• Bosscoder Academy: Marketing Specialist, Organic & SEO (Jun – Sep 2024)\n• Oliveboard: Content Writer (Nov 2022 – May 2024)\n• Unchaai: Content Manager, part-time (Dec 2021 – Mar 2022)\n• Testbook: Content Writer Intern (Jul 2021 – Feb 2022)\n• Before that: news anchor, reporter and documentary scriptwriter\n\nAsk about any of them for details.',
      chips: ['Azine', 'Oliveboard', 'Bosscoder', 'Newsroom'] },
    { id: 'azine', weight: 3, keys: ['azine', 'azine technologies', 'magazine', 'tech magazine', 'million impressions', 'niche'],
      answer: 'At Azine Technologies (Oct 2024 – Mar 2026), Vaishnavi wrote long-form for magazine-style tech sites on technology trends, US industry leaders and global markets. She repositioned a site’s niche, then built the keyword, internal-linking and optimisation system that made it climb: 1M+ impressions in a month, 50%+ traffic growth within a month, and 95% of her articles in Google’s top 3. She also ran a content-led PR campaign against fake news about the site.',
      chips: ['Writing samples', 'Results'] },
    { id: 'bosscoder', weight: 3, keys: ['bosscoder', 'bosscoder academy', 'coding', 'edtech marketing', 'social media', 'reel', 'instagram', 'followers'],
      answer: 'At Bosscoder Academy (Jun – Sep 2024), she built the SEO strategy from scratch, optimised every page for targeting and crawlability, and ran organic campaigns across web and social. Results: organic traffic up 103%, LinkedIn and Instagram followers up 63% in 3 months, and one reel that crossed a million views.',
      chips: ['Results', 'Skills'] },
    { id: 'oliveboard', weight: 3, keys: ['oliveboard', 'exam', 'exams', 'government exam', 'ssc', 'upsc', 'banking', 'exam prep', 'education content'],
      answer: 'At Oliveboard (Nov 2022 – May 2024), she wrote SEO-driven educational content for one of India’s leading exam-prep platforms, ranking for competitive SSC, UPSC and banking keywords. Results: 1M+ impressions a month in the SSC and UPSC categories, web traffic up 95%, leads up 70%, and 90% of articles in Google’s top 5.',
      chips: ['Results', 'Experience'] },
    { id: 'testbook', weight: 3, keys: ['testbook', 'intern', 'internship', '150 articles', 'first job'],
      answer: 'At Testbook (Jul 2021 – Feb 2022), her first content role, she wrote 150 SEO-optimised educational articles in a single month, with 80% of them ranking in Google’s top 5.',
      chips: ['Experience', 'Results'] },
    { id: 'unchaai', weight: 3, keys: ['unchaai', 'video', 'video team', 'content manager'],
      answer: 'At Unchaai (Dec 2021 – Mar 2022, part-time), Vaishnavi managed a team of video content creators end to end, handled the social channels, and ran branding and growth strategy. It was her first time leading a team.',
      chips: ['Team leadership', 'Experience'] },
    { id: 'newsroom', keys: ['news', 'newsroom', 'anchor', 'reporter', 'reporting', 'journalism', 'journalist', 'amar ujala', 'documentary', 'voice over', 'voiceover', 'tv', 'on air'],
      answer: 'Before content marketing, Vaishnavi was a news presenter at local media houses, a reporter at Amar Ujala covering Women & Child Development, and a scriptwriter and voice-over artist for documentaries and short films. The newsroom habit stuck: find the story fast and say it plainly.',
      chips: ['Education', 'KBC'] },
    { id: 'kbc', keys: ['kbc', 'kaun banega crorepati', 'crorepati', 'hot seat', 'quiz', 'amitabh', 'tv show'],
      answer: 'Yes, that Hot Seat! Vaishnavi was one of the youngest contestants on Kaun Banega Crorepati Season 14 and played all the way to the ₹12,50,000 question with the whole country watching. After that, client deadlines feel very manageable.',
      chips: ['Who is Vaishnavi?', 'Fun facts'] },

    /* ---------- Results & skills ---------- */
    { id: 'results', weight: 2, keys: ['results', 'her results', 'achievements', 'achievement', 'numbers', 'metrics', 'impact', 'stats', 'traffic', 'impressions', 'rankings', 'ranked', 'growth', 'proof', 'success'],
      answer: 'A few highlights:\n• 95%+ of articles in Google’s top 3 (Azine)\n• 1M+ impressions in a single month, at both Azine and Oliveboard\n• Traffic up 50%+ within a month after a niche change (Azine)\n• Organic traffic up 103% and followers up 63% in 3 months (Bosscoder)\n• Web traffic up 95% and leads up 70% (Oliveboard)\n• 150 articles in a month, 80% in the top 5 (Testbook)\n• Hired and trained a team of 6–7 writers',
      chips: ['Writing samples', 'Skills', 'How she works'] },
    { id: 'skills', weight: 2, keys: ['skills', 'her skills', 'skill', 'expertise', 'strengths', 'good at', 'specialise', 'specialize', 'speciality', 'what can she do', 'services'],
      answer: 'Her core skills:\n• Writing & editing: long-form, editorial, technical writing, service pages, e-books, web stories, ghostwriting\n• SEO: keyword research, on-page, topical authority, internal linking, content audits and refreshes\n• Strategy: content calendars, briefs, tone of voice, editorial standards\n• Marketing: organic social, campaigns, PR counter-narratives\n• Leadership: hiring, training and reviewing writers\n• Design sense: UX copy and Figma basics, with a sharp eye for icons and layout',
      chips: ['Tools', 'Team leadership', 'Reviewing & UI eye'] },
    { id: 'seo', weight: 2, keys: ['seo', 'search engine', 'google ranking', 'rank', 'serp', 'keyword', 'keywords', 'on-page', 'on page', 'internal linking', 'topical', 'organic', 'search console', 'gsc'],
      answer: 'SEO is the backbone of her work. She starts from search intent rather than volume, builds topical maps and keyword clusters, handles on-page and internal linking, and treats publishing as half-time: refreshes, internal links and pruning are where traffic compounds. That approach got 95%+ of her articles into Google’s top 3 at Azine.',
      chips: ['Results', 'How she works', 'Tools'] },
    { id: 'tools', weight: 2, keys: ['tools', 'tool', 'software', 'ahrefs', 'semrush', 'analytics', 'google analytics', 'wordpress', 'moengage', 'canva', 'figma', 'asana', 'chatgpt', 'adsense', 'trends', 'stack'],
      answer: 'Tools she uses: Ahrefs, SEMrush, Google Search Console, Google Analytics, Google Trends, WordPress, MoEngage, Google AdSense, Asana, Canva, Figma and ChatGPT.',
      chips: ['Skills', 'SEO'] },
    { id: 'team', weight: 2, keys: ['team', 'lead', 'leader', 'leadership', 'manage', 'manager', 'managing', 'hire writers', 'train', 'training', 'mentor writers', 'review workflow', 'team leadership'],
      answer: 'Vaishnavi has hired and trained a team of 6–7 writers, from freshers to seniors, and set up the review workflow every piece passes through for SEO, quality and tone. Earlier she led a team of video creators at Unchaai. Her style: briefs so clear nobody needs to ping at 11 p.m., and edits that explain the why so each draft beats the last.',
      chips: ['How she works', 'Experience'] },
    { id: 'review', weight: 2, keys: ['review', 'reviewer', 'reviewing', 'editor', 'editing', 'proofread', 'proofreading', 'ui', 'ux', 'icons', 'icon', 'design', 'designer', 'layout', 'documentation', 'docs', 'detail', 'eye for detail', 'reviewing & ui eye'],
      answer: 'She’s the person you want on final review. Beyond SEO, tone and clarity, she catches the wrong icon, a feature that adds nothing, a layout that confuses, or a mistake in the documentation, before anything ships. She understands design basics and works in Figma, so she can talk to designers in their language.',
      chips: ['Skills', 'How she works'] },
    { id: 'process', weight: 2, keys: ['how she works', 'how does she work', 'process', 'approach', 'method', 'workflow', 'steps', 'way of working'],
      answer: 'Her process has four steps:\n1. Audit: what’s ranking, what isn’t and why, from Search Console and Ahrefs data.\n2. Strategy: topical map, priorities and a tone guide, agreed before anyone writes.\n3. Execution: briefs, writing, editing and on-page SEO, plus a UX pass before anything goes live.\n4. Reporting: what moved, what didn’t, and what comes next. No vanity metrics.',
      chips: ['Results', 'Her opinions'] },
    { id: 'opinions', keys: ['opinion', 'opinions', 'hot take', 'hot takes', 'philosophy', 'believe', 'beliefs', 'tone', 'voice', 'her opinions'],
      answer: 'A few things she’ll argue about over momos:\n• A keyword is a person with a problem. The brief should say what was keeping them up at night.\n• Tone is a decision, not a vibe. A UPSC aspirant at 1 a.m. and a CISO between meetings should never get the same sentence.\n• Hitting publish is half-time. Content you never revisit quietly slides down page one.\n• If you can’t say it in 20 seconds on air, you don’t get it yet.',
      chips: ['How she works', 'Newsroom'] },
    { id: 'industries', keys: ['industries', 'industry', 'niche', 'niches', 'domains', 'sectors', 'edtech', 'technology', 'tech', 'cybersecurity', 'finance', 'saas'],
      answer: 'She has written for edtech, technology, cybersecurity, government-exam prep, and banking and finance, plus technical service pages for an AI web and app development company.',
      chips: ['Writing samples', 'Experience'] },

    /* ---------- Writing ---------- */
    { id: 'samples', weight: 2, keys: ['samples', 'sample', 'writing samples', 'portfolio', 'articles', 'article', 'published', 'pieces', 'read her', 'work samples', 'examples', 'idmerit', 'ces', 'wearables', 'pdf'],
      answer: 'Some of her published work:\n• [IDMERIT data breach claim debunked](IDMERIT_data_breach.pdf): investigative piece and PR counter-narrative, 50K+ readers\n• [8 wearables that stole the spotlight at CES 2026](CES_2026_wearables.pdf): long-form tech roundup\n• [Top performing articles, with traffic data](top_performing_articles.pdf)\n\nYou’ll also find them in the [Work section](#work) of this page.',
      chips: ['Results', 'Blog'] },
    { id: 'blog', keys: ['blog', 'blogs', 'blogging', 'her blog', 'own blog', 'manages blogs', 'blog sites'],
      answer: 'Alongside her full-time role, Vaishnavi runs her own successful blog and manages blog sites for clients: planning what to publish, writing and editing, on-page SEO, and keeping the sites healthy. If you need someone to run yours, reach out:\n' + CONTACT,
      chips: ['Writing samples', 'How to contact'] },

    /* ---------- Personal ---------- */
    { id: 'education', keys: ['education', 'degree', 'college', 'university', 'study', 'studied', 'qualification', 'masters', 'graduate', 'graduation'],
      answer: 'Vaishnavi holds an MA and a BA (Hons.) in Journalism & Mass Communication from Shri Guru Ram Rai University.',
      chips: ['Newsroom', 'Experience'] },
    { id: 'languages', keys: ['language', 'languages', 'hindi', 'english', 'maithili', 'speak', 'bilingual', 'write in hindi'],
      answer: 'She speaks English, Hindi and Maithili. For writing in Hindi or bilingual projects, it’s best to ask her directly about your specific needs.' },
    { id: 'momo', weight: 2, keys: ['momo', 'momos', 'food', 'favourite food', 'favorite food', 'dumpling', 'dumplings', 'eat', 'snack'],
      answer: 'Momos are a core skill. Article ranked? Momos. Article didn’t rank? Also momos. That’s why the site’s icon is a momo basket.',
      chips: ['Fun facts', 'Who is Vaishnavi?'] },
    { id: 'chess', keys: ['chess', 'hobby', 'hobbies', 'free time', 'interests', 'reels', 'fun facts', 'fun', 'personal'],
      answer: 'A few fun facts:\n• She plays a quick game of chess before the day starts, and another five minutes before a big client call.\n• She was on the KBC Hot Seat.\n• Reels at night count as research. (Hooks and trends, obviously.)\n• Momos, always.',
      chips: ['KBC', 'Momos'] },
    { id: 'serious', keys: ['serious', 'professional', 'reliable', 'deadline', 'deadlines', 'trust', 'stickers'],
      answer: 'Don’t let the stickers fool you. At work she’s more serious than chill: clear briefs, deadlines met, and numbers reported straight, including the ones that didn’t move.',
      chips: ['How she works', 'Results'] }
  ];

  const START_CHIPS_BASE = ['Who is Vaishnavi?', 'Experience', 'Results', '1:1 sessions', 'How to contact'];
  const FALLBACK = {
    answer: 'I don’t have a reliable answer to that one. I’m set up to answer questions about Vaishnavi’s work in content, SEO and marketing, her experience, results, writing, and how to reach her. For anything else, she’s happy to help directly:\n' + CONTACT,
    chips: ['Experience', 'Skills', 'Results', 'How to contact']
  };

  /* ---------- Matching ---------- */
  const norm = s => ' ' + s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+#&:.\-\s]/g, ' ').replace(/\s+/g, ' ') + ' ';
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const compiled = KB.map(e => ({ ...e, res: e.keys.map(k => k.endsWith('*')
    ? new RegExp('(^|[^a-z0-9])' + esc(k.slice(0, -1)), 'i')
    : new RegExp('(^|[^a-z0-9])' + esc(k) + '($|[^a-z0-9])', 'i')) }));

  function answer(q) {
    const text = norm(q);
    let best = null;
    compiled.forEach(e => {
      let score = 0;
      e.res.forEach((re, i) => { if (re.test(text)) score += (e.keys[i].includes(' ') ? 2 : 1); });
      if (!score) return;
      score *= (e.weight || 1);
      if (!best || score > best.score) best = { score, e };
    });
    return best ? best.e : FALLBACK;
  }

  /* ---------- UI ---------- */
  const chat = document.getElementById('chat');
  const toggle = document.getElementById('chatToggle');
  const close = document.getElementById('chatClose');
  const log = document.getElementById('chatLog');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  if (!chat) return;

  // Render text safely; only the bot's own [label](url) syntax becomes links.
  function renderRich(el, text) {
    const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
    let last = 0, m;
    while ((m = re.exec(text))) {
      el.appendChild(document.createTextNode(text.slice(last, m.index)));
      const a = document.createElement('a');
      a.textContent = m[1];
      a.href = m[2];
      if (/^https?:/.test(m[2]) || /\.pdf$/i.test(m[2])) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      if (m[2].charAt(0) === '#') a.addEventListener('click', () => { if (innerWidth <= 480) shut(); });
      el.appendChild(a);
      last = re.lastIndex;
    }
    el.appendChild(document.createTextNode(text.slice(last)));
  }

  function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    if (who === 'bot') renderRich(d, text); else d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function addChips(list) {
    if (!list || !list.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'chips';
    list.forEach(label => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = label;
      b.addEventListener('click', () => { wrap.remove(); ask(label); });
      wrap.appendChild(b);
    });
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  const CHIP_ALIASES = {
    'who is vaishnavi?': 'who is vaishnavi', 'how to contact': 'contact', 'writing samples': 'writing samples',
    'team leadership': 'team leadership', 'reviewing & ui eye': 'reviewing & ui eye', 'how she works': 'how she works',
    'her opinions': 'her opinions', 'fun facts': 'fun facts', '1:1 sessions': '1:1 sessions', 'momos': 'momos', 'kbc': 'kbc'
  };

  // Show a "typing" bubble for about a second before each answer
  const TYPING_MS = 900;
  let busy = false;
  function showTyping() {
    const d = document.createElement('div');
    d.className = 'msg bot typing';
    d.setAttribute('aria-label', 'Assistant is typing');
    d.innerHTML = '<span class="typing-label">Typing</span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  /* =========================================================
     Booking mode
     Settings live in booking-config.js (backend URL and the public Turnstile site key).
     While a booking is in progress the text box is locked; the visitor can only use the
     booking controls or "Cancel booking".
     ========================================================= */
  const CFG = window.VK_BOOKING || {};
  const BOOKING = { endpoint: CFG.endpoint || '', turnstileSiteKey: CFG.turnstileSiteKey || '', lengths: [15, 30], holdMinutes: 15 };
  // On the real site, booking only switches on once the backend URL is set. In previews it runs as a demo.
  const LIVE_HOST = /(^|\.)vaishnavikumari\.com$|\.github\.io$/i.test(location.hostname);
  const BOOKING_ON = !!BOOKING.endpoint || !LIVE_HOST;
  const demo = !BOOKING.endpoint;
  const SOON = 'Online booking is coming soon. For now, the quickest way to set up a call is to email or message her with a line on what you’d like to discuss:\n' + CONTACT;

  const BOOK_RE = /\b(book|booking|schedule|scheduling|set up a (call|meeting)|arrange a (call|meeting)|appointment|meeting|slot|slots|availability|available times?|calendar)\b/i;
  function isBookingIntent(q) {
    const t = q.toLowerCase();
    if (/\b(phone|number|whatsapp|mobile)\b/.test(t)) return false;   // phone questions keep their own answer
    return t.trim() === 'book a call' || BOOK_RE.test(t) || /\b(call|chat) with (her|vaishnavi)\b/.test(t);
  }

  function ask(q) {
    if (busy || booking) return;
    if (isBookingIntent(q)) {
      add(q, 'user');
      if (BOOKING_ON) { startBooking(); return; }
      busy = true;
      const t = showTyping();
      setTimeout(() => { t.remove(); add(SOON, 'bot'); addChips(['1:1 sessions', 'Who is Vaishnavi?']); busy = false; }, TYPING_MS);
      return;
    }
    busy = true;
    add(q, 'user');
    let e = answer(CHIP_ALIASES[q.toLowerCase()] || q);
    if (e.id === 'sessions' && BOOKING_ON) e = { answer: e.answer.replace(/Online booking is coming soon\.[\s\S]*$/, 'You can book a call right here in this chat.'), chips: ['Book a call', 'How she works'] };
    const t = showTyping();
    setTimeout(() => {
      t.remove();
      add(e.answer, 'bot');
      addChips(e.chips);
      busy = false;
    }, TYPING_MS);
  }

  let booking = null;
  // Time zones: slots are exact moments (UTC), so they land on Vaishnavi's calendar correctly whatever zone
  // the visitor views them in. The visitor's zone is detected, and they can switch it.
  const HOME_TZ = 'Asia/Kolkata';
  const zoneOk = z => { try { new Intl.DateTimeFormat('en', { timeZone: z }); return true; } catch (e) { return false; } };
  const MY_TZ = (() => { const z = Intl.DateTimeFormat().resolvedOptions().timeZone; return !z || !zoneOk(z) || z === 'Asia/Calcutta' ? HOME_TZ : z; })();
  let tz = MY_TZ;
  const fmtDay = d => d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', timeZone: tz });
  const fmtTime = d => d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', timeZone: tz });
  const fmtLong = (d, z) => d.toLocaleString(undefined, { weekday: 'long', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: z });
  const dayKey = d => new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  const zoneLabel = z => z === HOME_TZ ? 'IST' : z.replace(/_/g, ' ');
  function allZones() {
    let list = [];
    try { list = Intl.supportedValuesOf('timeZone'); } catch (e) {}
    if (!list.length) list = ['UTC', 'Europe/London', 'Europe/Berlin', 'Europe/Paris', 'America/New_York', 'America/Chicago', 'America/Denver',
      'America/Los_Angeles', 'America/Toronto', 'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Singapore', 'Asia/Tokyo',
      'Asia/Shanghai', 'Australia/Sydney', 'Africa/Johannesburg', 'Pacific/Auckland'];
    return list;
  }
  function untilText(d) {
    const m = Math.max(0, Math.round((d - Date.now()) / 60000)), dd = Math.floor(m / 1440), hh = Math.floor((m % 1440) / 60), mm = m % 60;
    const part = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
    return dd ? part(dd, 'day') + (hh ? ', ' + part(hh, 'hour') : '') : hh ? part(hh, 'hour') + (mm ? ', ' + part(mm, 'minute') : '') : part(mm, 'minute');
  }
  const h = (tag, attrs, html) => { const e = document.createElement(tag); Object.assign(e, attrs || {}); if (html != null) e.innerHTML = html; return e; };
  const safe = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Cancel bar shown above the input while booking
  const cancelBar = h('div', { className: 'bk-bar', hidden: true },
    '<span>Booking a call</span><button type="button" class="bk-cancel">Cancel booking</button>');
  form.parentNode.insertBefore(cancelBar, form);
  cancelBar.querySelector('.bk-cancel').addEventListener('click', () => endBooking('cancel'));
  const sendBtn = form.querySelector('button[type="submit"]');
  const defaultPlaceholder = input.placeholder;

  function lock(on) {
    input.disabled = on; if (sendBtn) sendBtn.disabled = on;
    input.placeholder = on ? 'Booking in progress. Cancel to chat again.' : defaultPlaceholder;
    cancelBar.hidden = !on;
  }

  function botTyping(then) {
    const t = showTyping();
    setTimeout(() => { t.remove(); then(); }, TYPING_MS);
  }

  function card(html) {
    // retire the previous step's controls
    log.querySelectorAll('.bk.live').forEach(c => { c.classList.remove('live'); c.querySelectorAll('button, input, select, textarea').forEach(x => x.disabled = true); });
    const c = h('div', { className: 'msg bot bk live' }, html);
    log.appendChild(c); log.scrollTop = log.scrollHeight;
    return c;
  }

  function startBooking() {
    // Soft limit: one booking request per browser per day (the real limits are enforced by the booking server)
    let last = 0; try { last = Number(localStorage.getItem('vk-book-req') || 0); } catch (e) {}
    if (!demo && Date.now() - last < 86400000) {
      botTyping(() => add('You already requested a call from this browser today. Check your inbox for the confirmation link, or reach Vaishnavi directly:\n' + CONTACT, 'bot'));
      return;
    }
    booking = { minutes: 30, slots: [], day: null, slot: null, name: '', email: '', profile: '', topic: '' };
    lock(true);
    botTyping(() => {
      add('Happy to set that up! A quick heads-up first:\n' +
        '• One booking request per email address every 24 hours, so please type your email carefully.\n' +
        '• You’ll get a confirmation link by email. Open it and press Confirm within ' + BOOKING.holdMinutes + ' minutes, or the slot is released.\n' +
        '• Please add your LinkedIn profile or website, and a line on what you’d like to discuss.\n' +
        '• Temporary email addresses aren’t accepted.\n\nNow pick a time that suits you.' +
        (demo ? '\n(Preview mode: these are sample times and nothing is booked.)' : ''), 'bot');
      loadSlots();
    });
  }

  function endBooking(reason) {
    if (!booking) return;
    log.querySelectorAll('.bk.live').forEach(c => { c.classList.remove('live'); c.querySelectorAll('button, input, select, textarea').forEach(x => x.disabled = true); });
    booking = null;
    lock(false);
    if (reason === 'cancel') {
      add('Booking cancelled. Ask me anything else.', 'bot');
      addChips(['Book a call', 'Experience', 'How to contact']);
    }
    input.focus();
  }

  // ----- Slots -----
  // Preview-only sample times that follow the real rules (IST): Mon-Fri 9:30 PM to 2:00 AM, Sat 10:00 AM to 10:00 PM,
  // every 30 minutes, at least 3 hours ahead, up to 15 days out (some slots randomly "taken").
  const DEMO_WINDOWS = [{ days: [1, 2, 3, 4, 5], s: 21.5, e: 26 }, { days: [6], s: 10, e: 22 }];
  function demoSlots(minutes) {
    const out = [], IST = 330, now = Date.now(), base = new Date(now + IST * 60000);
    for (let i = -1; i <= 16; i++) {
      const day = Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate() + i);
      const dow = new Date(day).getUTCDay();
      DEMO_WINDOWS.forEach(w => {
        if (w.days.indexOf(dow) < 0) return;
        const ws = day + w.s * 3600e3 - IST * 60000, we = day + w.e * 3600e3 - IST * 60000;
        for (let t = ws; t + minutes * 60000 <= we; t += 30 * 60000) {
          if (t < now + 3 * 3600e3 || t > now + 15 * 86400e3) continue;
          if ((t / 1800000 + i) % 5 === 0) continue;
          out.push(new Date(t));
        }
      });
    }
    return out;
  }

  // keepDay: stay on the chosen day after switching between 15 and 30 minutes, if it still has times
  function loadSlots(keepDay) {
    const done = list => {
      if (!booking) return;
      booking.slots = list.map(x => new Date(x)).filter(d => !isNaN(d)).sort((a, b) => a - b);
      if (!booking.slots.length) {
        add('There are no open slots in the next 15 days. Please email Vaishnavi directly:\n' + CONTACT, 'bot');
        return endBooking();
      }
      if (!(keepDay && booking.slots.some(s => dayKey(s) === booking.day))) booking.day = dayKey(booking.slots[0]);
      renderSlots();
    };
    if (demo) return done(demoSlots(booking.minutes));
    fetch(BOOKING.endpoint + '?action=slots&minutes=' + booking.minutes)
      .then(r => r.json())
      .then(j => done((j && j.slots) || []))
      .catch(() => { add('I couldn’t reach the calendar right now. Please try again later, or email Vaishnavi:\n' + CONTACT, 'bot'); endBooking(); });
  }

  function renderSlots() {
    const days = [];
    booking.slots.forEach(s => { const k = dayKey(s); if (!days.some(d => d.k === k)) days.push({ k, d: s }); });
    const times = booking.slots.filter(s => dayKey(s) === booking.day);
    const c = card(
      '<div class="bk-tz"><label class="bk-l" for="bkTz">Show times in</label><select class="bk-in" id="bkTz">' +
        '<option value="' + safe(MY_TZ) + '"' + (tz === MY_TZ ? ' selected' : '') + '>Your time (' + safe(zoneLabel(MY_TZ)) + ')</option>' +
        (MY_TZ !== HOME_TZ ? '<option value="' + HOME_TZ + '"' + (tz === HOME_TZ ? ' selected' : '') + '>Vaishnavi’s time (IST)</option>' : '') +
        '<optgroup label="Other time zones">' + allZones().filter(z => z !== MY_TZ && z !== HOME_TZ)
          .map(z => '<option value="' + safe(z) + '"' + (tz === z ? ' selected' : '') + '>' + safe(z.replace(/_/g, ' ')) + '</option>').join('') + '</optgroup>' +
      '</select></div>' +
      '<div class="bk-row" role="group" aria-label="Call length">' + BOOKING.lengths.map(m => '<button type="button" class="bk-chip" data-m="' + m + '" aria-pressed="' + (booking.minutes === m) + '">' + m + ' min</button>').join('') + '</div>' +
      '<div class="bk-row bk-days" role="group" aria-label="Day">' + days.map(d => '<button type="button" class="bk-chip" data-day="' + d.k + '" aria-pressed="' + (d.k === booking.day) + '">' + fmtDay(d.d) + '</button>').join('') + '</div>' +
      '<div class="bk-grid" role="group" aria-label="Time">' + times.map(t => '<button type="button" class="bk-chip" data-t="' + t.getTime() + '" aria-pressed="' + (booking.slot && booking.slot.getTime() === t.getTime()) + '">' + fmtTime(t) + '</button>').join('') + '</div>' +
      '<div class="bk-actions"><button type="button" class="bk-primary" data-next ' + (booking.slot ? '' : 'disabled') + '>Continue</button></div>');
    c.querySelector('#bkTz').onchange = e => {
      if (!zoneOk(e.target.value)) return;
      tz = e.target.value;
      booking.day = dayKey(booking.slot || booking.slots[0]);   // keep the same chosen moment; re-group the days in the new zone
      c.remove(); renderSlots();
    };
    c.querySelectorAll('[data-day]').forEach(b => b.onclick = () => { booking.day = b.dataset.day; booking.slot = null; c.remove(); renderSlots(); });
    c.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { booking.slot = new Date(+b.dataset.t); c.remove(); renderSlots(); });
    c.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
      if (booking.minutes === +b.dataset.m) return;
      booking.minutes = +b.dataset.m; booking.slot = null; c.remove(); loadSlots(true);   // 30-minute calls fit fewer gaps
    });
    c.querySelector('[data-next]').onclick = () => botTyping(renderCheck);
  }

  // ----- "Is this right?" check -----
  function renderCheck() {
    if (!booking || !booking.slot) return;
    const s = booking.slot;
    const c = card(
      '<p class="bk-q">Just checking, is this the time you want?</p>' +
      '<p class="bk-when"><b>' + safe(fmtLong(s, tz)) + '</b><br><small>' + (tz === MY_TZ ? 'your time' : 'time in') + ' · ' + safe(zoneLabel(tz)) + '</small></p>' +
      (tz !== HOME_TZ ? '<p class="bk-q bk-sub">For Vaishnavi that’s ' + safe(fmtLong(s, HOME_TZ)) + ' IST.</p>' : '') +
      '<p class="bk-q bk-sub">' + booking.minutes + ' minutes · starts in ' + untilText(s) + '</p>' +
      '<div class="bk-actions"><button type="button" class="bk-ghost" data-back>Pick another time</button><button type="button" class="bk-primary" data-yes>Yes, continue</button></div>');
    c.querySelector('[data-back]').onclick = () => { c.remove(); renderSlots(); };
    c.querySelector('[data-yes]').onclick = () => {
      add(fmtDay(s) + ', ' + fmtTime(s) + ' (' + zoneLabel(tz) + ') · ' + booking.minutes + ' min', 'user');
      botTyping(renderDetails);
    };
  }

  // ----- Details -----
  let tsLoaded = false;
  function renderDetails() {
    if (!booking) return;
    const c = card(
      '<p class="bk-q">Great. Where should the invite go?</p>' +
      '<label class="bk-l" for="bkName">Your name</label><input class="bk-in" id="bkName" autocomplete="name" maxlength="80" value="' + safe(booking.name) + '">' +
      '<label class="bk-l" for="bkEmail">Email</label><input class="bk-in" id="bkEmail" type="email" autocomplete="email" maxlength="120" value="' + safe(booking.email) + '">' +
      '<label class="bk-l" for="bkProfile">LinkedIn profile or website</label><input class="bk-in" id="bkProfile" type="url" inputmode="url" autocomplete="url" maxlength="200" placeholder="linkedin.com/in/your-name" value="' + safe(booking.profile) + '">' +
      '<label class="bk-l" for="bkTopic">What would you like to discuss?</label><textarea class="bk-in" id="bkTopic" rows="2" maxlength="300" placeholder="e.g. an SEO audit for our SaaS blog">' + safe(booking.topic) + '</textarea>' +
      '<input class="bk-hp" id="bkWebsite" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      (BOOKING.turnstileSiteKey ? '<div class="bk-ts" id="bkTs"></div><p class="bk-note">Protected by Cloudflare · <a href="https://www.cloudflare.com/turnstile-privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy</a></p>' : '') +
      '<p class="bk-err" role="alert"></p>' +
      '<div class="bk-actions"><button type="button" class="bk-ghost" data-back>Back</button><button type="button" class="bk-primary" data-send>Send confirmation</button></div>');
    if (BOOKING.turnstileSiteKey) mountTurnstile(c.querySelector('#bkTs'));
    c.querySelector('[data-back]').onclick = () => { c.remove(); renderSlots(); };
    c.querySelector('[data-send]').onclick = () => submit(c);
    c.querySelectorAll('.bk-in').forEach(x => x.addEventListener('input', () => { c.querySelector('.bk-err').textContent = ''; }));
    c.querySelector('#bkName').focus();
  }

  // Cloudflare's human check. Each form gets a fresh widget (tokens are single-use).
  let tsTarget = null, tsWidget = null;
  function mountTurnstile(el) {
    tsTarget = el;
    const render = () => {
      if (!window.turnstile || !tsTarget || !document.body.contains(tsTarget)) return;
      if (tsWidget !== null) { try { window.turnstile.remove(tsWidget); } catch (e) {} }
      // 'interaction-only': the check runs in the background and the box only appears if Cloudflare needs a click
      tsWidget = window.turnstile.render(tsTarget, { sitekey: BOOKING.turnstileSiteKey, size: 'flexible', appearance: 'interaction-only' });
    };
    if (window.turnstile) return render();
    if (tsLoaded) return;
    tsLoaded = true;
    const s = h('script', { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true, defer: true });
    s.onload = render; document.head.appendChild(s);
  }

  function submit(c) {
    const err = c.querySelector('.bk-err');
    booking.name = c.querySelector('#bkName').value.trim();
    booking.email = c.querySelector('#bkEmail').value.trim();
    booking.topic = c.querySelector('#bkTopic').value.trim();
    booking.profile = c.querySelector('#bkProfile').value.trim();
    if (c.querySelector('#bkWebsite').value) return;                       // honeypot: bots fill hidden fields
    if (!booking.name) { err.textContent = 'Please enter your name.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(booking.email)) { err.textContent = 'Please enter a valid email so the invite can reach you.'; return; }
    if (!/^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+(\/\S*)?$/i.test(booking.profile)) { err.textContent = 'Please add your LinkedIn profile or website link, so Vaishnavi knows who she’s meeting.'; return; }
    if (/(^|\/\/|\.)linkedin\.com\/?$/i.test(booking.profile)) { err.textContent = 'Please use the link to your own LinkedIn profile (linkedin.com/in/…).'; return; }
    if (booking.topic.length < 5) { err.textContent = 'Please add a line on what you’d like to discuss, so she can come prepared.'; return; }
    if (BOOKING.turnstileSiteKey) {
      const getTok = () => (window.turnstile && tsWidget !== null ? window.turnstile.getResponse(tsWidget) : '') || '';
      if (!getTok()) {
        if (c.dataset.waiting) return;
        c.dataset.waiting = '1'; err.textContent = 'One moment, finishing a quick security check…';
        const t0 = Date.now(), iv = setInterval(() => {
          if (getTok()) { clearInterval(iv); delete c.dataset.waiting; err.textContent = ''; submit(c); }
          else if (Date.now() - t0 > 8000) { clearInterval(iv); delete c.dataset.waiting; err.textContent = 'Please complete the quick human check above, then send again.'; }
        }, 250);
        return;
      }
    }
    const token = BOOKING.turnstileSiteKey && window.turnstile && tsWidget !== null ? window.turnstile.getResponse(tsWidget) : '';
    err.textContent = '';
    c.querySelectorAll('button').forEach(b => b.disabled = true);
    add(booking.name + ' · ' + booking.email, 'user');

    const payload = { action: 'request', start: booking.slot.toISOString(), minutes: booking.minutes,
      name: booking.name, email: booking.email, profile: booking.profile, topic: booking.topic, tz, token };
    const send = demo
      ? Promise.resolve({ ok: true })
      : fetch(BOOKING.endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }).then(r => r.json());

    const t = showTyping();
    Promise.all([send, new Promise(r => setTimeout(r, TYPING_MS))])
      .then(([res]) => {
        t.remove();
        if (!booking) return;
        if (!res || !res.ok) {
          const msg = (res && res.message) || 'That slot was just taken or something went wrong. Please pick another time.';
          // Limit reached or blocked: stop here, no more time pickers
          if ((res && (res.code === 'limit' || res.code === 'blocked')) || /already (requested|have a call)|lots of requests|isn.t available for this email/i.test(msg)) {
            try { localStorage.setItem('vk-book-req', String(Date.now())); } catch (e) {}
            add(msg + '\n\nYou can still reach Vaishnavi directly:\n' + CONTACT, 'bot');
            return endBooking();
          }
          // Fake or unusable email: say clearly that the booking stopped, then let them switch to a real address
          if (/temporary inbox|disposable|can.t receive email/i.test(msg)) {
            const why = /can.t receive email/i.test(msg)
              ? 'the domain of ' + booking.email + ' can’t receive email, so the invite would never arrive. Please check it for typos.'
              : booking.email + ' looks like a temporary email address, and calls can only be booked with a real one.';
            add('Booking not completed: ' + why + '\n\nIf you’d like to book, enter your real work or personal email below.', 'bot');
            if (!/can.t receive email/i.test(msg)) booking.email = '';
            return renderDetails();
          }
          // Something in the form needs fixing: back to the form, keep what they typed
          if ((res && res.code === 'input') || /email|linkedin|website|name|discuss|human check/i.test(msg)) {
            add(msg, 'bot');
            return renderDetails();
          }
          add(msg, 'bot');
          booking.slot = null; booking.slots = []; return loadSlots();
        }
        if (!demo) { try { localStorage.setItem('vk-book-req', String(Date.now())); } catch (e) {} }
        renderCheckInbox();
      })
      .catch(() => { t.remove(); add('I couldn’t reach the booking service. Please try again later, or email Vaishnavi:\n' + CONTACT, 'bot'); endBooking(); });
  }

  // ----- Confirmation -----
  function renderCheckInbox() {
    const when = fmtDay(booking.slot) + ' at ' + fmtTime(booking.slot);
    const c = card(
      '<p class="bk-q"><b>Almost done.</b> I sent a confirmation link to <b>' + safe(booking.email) + '</b>. ' +
      'Open it and press Confirm within ' + BOOKING.holdMinutes + ' minutes to lock in your ' + booking.minutes + '-minute call on ' + when + '. ' +
      'Until then the slot is held for you.</p>' +
      '<p class="bk-q">Not in your inbox after a minute? Please check your Spam or Promotions folder, and mark it “Not spam” so the calendar invite reaches you too.</p>' +
      (demo ? '<div class="bk-mail"><small>Preview: this is what arrives in their inbox</small>Please confirm our call on ' + when + '.<br><button type="button" class="bk-link" data-confirm>Confirm my call</button></div>'
            : '<div class="bk-actions"><button type="button" class="bk-primary" data-done>Done</button></div>'));
    const fin = c.querySelector('[data-confirm]');
    if (fin) fin.onclick = () => { add('Pressed Confirm', 'user'); botTyping(renderBooked); };
    const done = c.querySelector('[data-done]');
    if (done) done.onclick = () => {
      endBooking();
      add('Once you confirm, a calendar invite with a Google Meet link will arrive by email. Anything else I can help with?', 'bot');
      addChips(['Experience', 'Results', 'How she works']);
    };
  }

  function renderBooked() {
    if (!booking) return;
    card('<p class="bk-q bk-ok"><b>You’re booked!</b></p><p class="bk-q">' + fmtDay(booking.slot) + ', ' + fmtTime(booking.slot) +
      ' (' + safe(zoneLabel(tz)) + ') · ' + booking.minutes + ' min with Vaishnavi Kumari. A calendar invite with a Google Meet link is on its way to ' +
      safe(booking.email) + ', and Vaishnavi has been notified.' + (demo ? '<br><small>(Preview: nothing was actually booked.)</small>' : '') + '</p>');
    endBooking();
    add('Anything else you’d like to know about Vaishnavi?', 'bot');
    addChips(['Experience', 'Results', 'How she works']);
  }

  let greeted = false;
  function open() {
    chat.classList.add('open');
    chat.setAttribute('aria-hidden', 'false');
    toggle.hidden = true;
    toggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('chat-open');
    if (!greeted) {
      greeted = true;
      add('Hii! I’m Vaishnavi’s assistant. Ask me about her work in content, SEO and marketing, her results, or how to reach her' + (BOOKING_ON ? ', or book a call with her.' : '.'), 'bot');
      addChips((BOOKING_ON ? ['Book a call'] : []).concat(START_CHIPS_BASE));
    }
    setTimeout(() => input.focus(), 50);
  }
  function shut() {
    chat.classList.remove('open');
    chat.setAttribute('aria-hidden', 'true');
    toggle.hidden = false;
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('chat-open');
    toggle.focus();
  }

  /* ---------- Resizable panel (desktop): drag the top-left corner; double-click it to reset ---------- */
  const grip = document.createElement('div');
  grip.className = 'chat-resize'; grip.title = 'Drag to resize, double-click to reset';
  grip.setAttribute('aria-hidden', 'true');
  chat.appendChild(grip);
  const SIZE_KEY = 'vk-chat-size';
  const fit = (w, h) => [Math.max(300, Math.min(innerWidth - 40, w)), Math.max(360, Math.min(innerHeight - 40, h))];
  function applySize(w, h) { [w, h] = fit(w, h); chat.style.width = w + 'px'; chat.style.height = h + 'px'; }
  try { const z = JSON.parse(localStorage.getItem(SIZE_KEY) || 'null'); if (z && innerWidth > 480) applySize(z.w, z.h); } catch (e) {}
  grip.addEventListener('pointerdown', e => {
    e.preventDefault();
    const r = chat.getBoundingClientRect(), sx = e.clientX, sy = e.clientY;
    chat.classList.add('resizing');
    grip.setPointerCapture(e.pointerId);
    const move = ev => applySize(r.width + (sx - ev.clientX), r.height + (sy - ev.clientY));
    const stop = () => {
      chat.classList.remove('resizing');
      grip.removeEventListener('pointermove', move); grip.removeEventListener('pointerup', stop);
      try { const b = chat.getBoundingClientRect(); localStorage.setItem(SIZE_KEY, JSON.stringify({ w: b.width, h: b.height })); } catch (err) {}
    };
    grip.addEventListener('pointermove', move); grip.addEventListener('pointerup', stop);
  });
  grip.addEventListener('dblclick', () => { chat.style.width = ''; chat.style.height = ''; try { localStorage.removeItem(SIZE_KEY); } catch (e) {} });

  // "Book a call" buttons on the page (data-book-call): open the assistant straight into the booking flow.
  // Until booking is switched on they keep their normal link (scroll to Contact).
  document.querySelectorAll('[data-book-call]').forEach(a => {
    if (!BOOKING_ON) return;
    if (a.dataset.bookLabel) a.textContent = a.dataset.bookLabel;
    a.addEventListener('click', e => {
      e.preventDefault();
      const nav = document.querySelector('.nav.open'); if (nav) { nav.classList.remove('open'); const b = document.getElementById('burger'); if (b) b.setAttribute('aria-expanded', 'false'); }
      open();
      if (!booking) ask('Book a call');
    });
  });

  toggle.addEventListener('click', open);
  close.addEventListener('click', shut);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && chat.classList.contains('open')) shut(); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    input.value = '';
    ask(q);
  });

  // For quick testing in the browser console: vkAsk("what's her phone number")
  window.vkAsk = q => isBookingIntent(q) ? 'booking' : (answer(CHIP_ALIASES[q.toLowerCase()] || q).id || 'fallback');
})();
