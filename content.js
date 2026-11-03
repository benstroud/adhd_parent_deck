// Deck content — edit slide text here. Plain language, labels not blurbs.
// Each slide: id, kicker, title, body[] (short lines), optional quote + cite.
// cite.talk: "2012 lecture" (SCAGc-rkIfo) or "2022 webinar" (52wQuMSUAkY)

const DECK = {
  meta: {
    title: "Raising a Child with ADHD",
    subtitle: "Four expert talks, distilled for our family",
    sources: [
      { label: "2012 lecture — Essential Ideas for Parents (2:51:44)", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo" },
      { label: "2022 webinar — 6 Principles for Raising a Child with ADHD (1:02:36)", url: "https://www.youtube.com/watch?v=52wQuMSUAkY" },
      { label: "Joel Nigg, Ph.D. — How Environment & Lifestyle Impact ADHD, ADDitude webinar 2017 (55:19)", url: "https://www.youtube.com/watch?v=mdG_UQ0C9eI" },
      { label: "Nicole Schatz, Ph.D. — Behavioral Parent Training for ADHD, ADDitude webinar 2025 (1:01:33)", url: "https://www.youtube.com/watch?v=DvGmcYGgiGo" }
    ]
  },

  slides: [
    {
      id: "title",
      kicker: "A family reference deck",
      title: "Raising a Child with ADHD",
      body: [
        "Four expert talks, condensed into what matters for our family",
        "Barkley 2012 lecture: 30 essential ideas for parents",
        "Barkley 2022 webinar: 6 principles for raising a child",
        "Nigg (2017) on environment & lifestyle; Schatz (2025) on behavioral parent training"
      ],
      quote: "Your job is as a shepherd who engages in all of these major responsibilities to raise the healthiest sheep you can get.",
      cite: { talk: "2022 webinar", ts: "30:11", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=1811" }
    },
    {
      id: "sources",
      kicker: "Where this comes from",
      title: "Two talks, one message",
      body: [
        "Barkley has 44+ years of research and clinical practice with ADHD families",
        "Both talks say the same things — the 2022 webinar is the distilled version",
        "Every claim here is quoted with a timestamp; full transcripts in this repo",
        "Nothing in these slides is our opinion — it is all from the talks"
      ],
      quote: "About 2 thirds of ADHD children will be fully diagnosable as ADHD young adults.",
      cite: { talk: "2022 webinar", ts: "7:09", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=429" }
    },
    {
      id: "developmental",
      kicker: "Idea 1 — know the disorder",
      title: "ADHD is a developmental disability",
      body: [
        "Two psychological traits are not developing on time — it is a delay, not a difference in kind",
        "Quantitative difference: degree of delay, not a different kind of person",
        "Delay does not mean lag — this is a chronic lag, not a temporary stage",
        "The traits reach maturity in the early 30s — and level off behind the general population"
      ],
      quote: "ADHD is different from normal in a quantitative way, not a qualitative way. ... Delay does not mean lag. It doesn't mean temporary.",
      cite: { talk: "2012 lecture", ts: "2:04 / 3:20", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=124" }
    },
    {
      id: "whats-delayed",
      kicker: "Idea 2 — two delayed traits",
      title: "What is actually delayed",
      body: [
        "First: inhibition — appears in preschool years, first sign is often hyperactivity",
        "Then: persistence toward a goal — the 'attention deficit' is really a failure to sustain action",
        "It is a self-regulation disorder, not an attention disorder",
        "Emotion is part of it: quickness to anger, low frustration tolerance, easy excitability"
      ],
      quote: "The first deficit to appear is inhibition... ADHD is a failure to direct behavior forward in time.",
      cite: { talk: "2012 lecture", ts: "5:10", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=310" }
    },
    {
      id: "thirty-percent",
      kicker: "The rule that changes expectations",
      title: "The 30% rule: executive age",
      body: [
        "Your child's executive age is on average about 30% behind their real age",
        "A 10-year-old is like a 7-year-old in self-control — but not in what they know",
        "Reading and math can be at grade level; organizing, persisting, time, emotion are not",
        "Expectations must match executive age, not calendar age"
      ],
      quote: "Your child's executive age on average is about 30% behind... they're like a seven-year-old when it comes to self-control.",
      cite: { talk: "2022 webinar", ts: "56:09", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=3369" }
    },
    {
      id: "emotion",
      kicker: "The missing symptom",
      title: "Emotional impulsiveness is core",
      body: [
        "ADHD children are 11 times more likely to develop oppositional defiant disorder within 2 years",
        "Emotion was part of ADHD in the literature from 1798 until 1976 — the DSM wrongly cut it out",
        "50–70% of ADHD children are rejected by close friendships by second grade",
        "The best predictor of peer rejection: emotional impulsiveness, not distractibility"
      ],
      quote: "Friends forgive you your distractibility... They will not forgive your anger, your hostility.",
      cite: { talk: "2012 lecture", ts: "13:14", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=794" }
    },
    {
      id: "videogames",
      kicker: "Why 'can't focus' is wrong",
      title: "Why video games grip them, homework doesn't",
      body: [
        "Video games deliver external, continuous, 100% consequences for every action",
        "Homework delivers nothing — consequences are delayed, and delay is exactly the problem",
        "ADHD is not a problem of perception or filtering; it is a problem of responding to distractions",
        "Structure the environment to make consequences immediate and visible"
      ],
      quote: "Because the video game provides external, continuous, 100% consequences for interacting with it, and the homework does nothing.",
      cite: { talk: "2012 lecture", ts: "33:43", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=2023" }
    },
    {
      id: "screens",
      kicker: "What doesn't cause ADHD",
      title: "Screens don't cause ADHD — it's the other way around",
      body: [
        "People with ADHD watch TV more, play video games more, use the internet more",
        "That does not mean these things caused their ADHD",
        "ADHD leads you to select those activities — they offer the immediate consequences ADHD needs",
        "TV and video games are not causing short attention spans"
      ],
      quote: "That doesn't mean these things caused their ADHD. It's the other way around. ADHD leads you to select these as leisure activities.",
      cite: { talk: "2012 lecture", ts: "1:09:36", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=4176" }
    },
    {
      id: "principle1",
      kicker: "Principle 1 of 6",
      title: "Understand the real disorder",
      body: [
        "It's not about attention — it's about attention to the future",
        "The brain's executive system gives us foresight: stop, look ahead, adjust",
        "ADHD disrupts that capacity to govern behavior relative to the future",
        "Calling it an attention disorder trivializes it — it is a disorder of self-regulation"
      ],
      quote: "Better that you call it an attention to the future disorder.",
      cite: { talk: "2022 webinar", ts: "10:45", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=645" }
    },
    {
      id: "principle2",
      kicker: "Principle 2 of 6",
      title: "Parents are shepherds, not engineers",
      body: [
        "You are not going to engineer ADHD out of your child",
        "You are a shepherd to a disabled youngster — you don't design the sheep",
        "Your job: safety, nutrition, protection, and choosing the pasture",
        "Love the child you have, not the child you wanted"
      ],
      quote: "You are not going to engineer ADHD out of your child. You are a shepherd to a disabled youngster.",
      cite: { talk: "2022 webinar", ts: "23:58", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=1438" }
    },
    {
      id: "principle3",
      kicker: "Principle 3 of 6",
      title: "Four keys to success",
      body: [
        "1 — Proper diagnosis and treatment",
        "2 — Recognize talents and aptitudes, even non-traditional ones",
        "3 — Develop them: practice, resources, community (Michael Phelps' mother found the swim coach)",
        "4 — 100% unconditional support and compassion — be the safety net"
      ],
      quote: "Diagnosis and treatment, recognizing talents and aptitudes, developing them further, finding resources, and then the unconditional support and compassion of our loved ones.",
      cite: { talk: "2022 webinar", ts: "37:52", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=2272" }
    },
    {
      id: "principle4",
      kicker: "Principle 4 of 6",
      title: "Time escapes them — make it real",
      body: [
        "No internal clock, no sense of time passing — this persists into adulthood",
        "Time must be made physical and real in the visual field",
        "Use clocks, timers, countdowns, visual schedules — externalize time",
        "Teach waiting explicitly; break tasks into timed chunks"
      ],
      quote: "Your child has no sense of time thanks to the disruption in the timing circuits... Externalize time.",
      cite: { talk: "2022 webinar", ts: "38:29 / 45:13", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=2309" }
    },
    {
      id: "principle5",
      kicker: "Principle 5 of 6",
      title: "Working memory isn't working",
      body: [
        "Working memory = holding in mind what you're doing while you do it",
        "This is why they forget the goal and get captured by the next distraction",
        "They can't re-engage the interrupted task — the goal is gone",
        "Externalize memory: notes, lists, routines, cues at the point of performance"
      ],
      quote: "Working memory is where we remember what we're doing. It is remembering so as to do.",
      cite: { talk: "2012 lecture", ts: "9:20", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=560" }
    },
    {
      id: "principle6",
      kicker: "Principle 6 of 6",
      title: "Practice forgiveness",
      body: [
        "Forgive yourself — you will make mistakes; ADHD children know how to push your buttons",
        "Forgive your child — resentment is one step from abuse; they are not misbehaving on purpose",
        "Forgive your partner, and forgive the public — they don't understand the disorder",
        "Rituals that work: write down the day's problems and burn them; watch your child sleep"
      ],
      quote: "Practice forgiveness. You have been blessed with a disabled child.",
      cite: { talk: "2022 webinar", ts: "50:24", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=3024" }
    },
    {
      id: "treatments-work",
      kicker: "What works",
      title: "Treatments that work",
      body: [
        "Medication: 400+ placebo-controlled studies; 55–92% respond, averaging ~75%",
        "That is twice the placebo rate — a real effect, not suggestibility",
        "In 55–65% of children, medication normalizes executive function while active",
        "Behavioral treatment, accommodations, and parent training support it"
      ],
      quote: "The rate of responders to the active medication is between 55% and 92%, averaging about 75%. So, it's twice the placebo rate.",
      cite: { talk: "2012 lecture", ts: "2:51:08", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=10268" }
    },
    {
      id: "treatments-dont",
      kicker: "What doesn't work",
      title: "Treatments that don't work",
      body: [
        "Elimination diets: benefit about 1 in 20, mainly children under 5",
        "Supplements — fish oil, mega vitamins, antioxidants: nothing shown to work; the best fish-oil trial reported sobering negative results",
        "Sensory integration training: resoundingly disproved",
        "Play therapy and clinic-based social skills training don't treat ADHD"
      ],
      quote: "Taking something out of the diet benefits about one out of every 20 ADHD children.",
      cite: { talk: "2012 lecture", ts: "2:27:51", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=8871" }
    },
    {
      id: "nigg-env",
      kicker: "Environment & lifestyle (Joel Nigg, 2017)",
      title: "Genes aren't destiny",
      body: [
        "Genes create a tendency, not a fate — the environment shapes or activates that tendency",
        "Epigenetic marks turn genes up or down (like a radio volume dial), and they can be changed",
        "Exercise, sleep, diet, stress, and even pollutants all shift these marks",
        "Same genes + different environment → different outcomes: that is the hope"
      ],
      quote: "Genes themselves can probably not be changed easily, but these epigenetic connectors can be affected both positively and negatively.",
      cite: { talk: "Nigg webinar", ts: "40:06", url: "https://www.youtube.com/watch?v=mdG_UQ0C9eI&t=2406" }
    },
    {
      id: "nigg-lifestyle",
      kicker: "What we can control",
      title: "The lifestyle levers that help",
      body: [
        "Exercise: the single most well-established lever — regular aerobic exercise changes the brain",
        "Sleep: a big, often-missed factor for learning and attention — protect bedtime",
        "Diet: omega-3 and a healthy diet help; minimize junk food and excess caffeine in kids",
        "Consider testing for iron, zinc, and lead — common correctable deficiencies"
      ],
      quote: "If I could pick only one, I'd probably say exercise. ... Frequent, regular aerobic exercise seems to be the most well-established benefit.",
      cite: { talk: "Nigg webinar", ts: "40:44", url: "https://www.youtube.com/watch?v=mdG_UQ0C9eI&t=2444" }
    },
    {
      id: "bpt-firstline",
      kicker: "Behavioral parent training (Schatz, 2025)",
      title: "BPT is the first-line non-drug treatment",
      body: [
        "Large body of carefully controlled research showing real improvement",
        "First-line for young children with ADHD; for school-age kids, alone or with medication",
        "Improves the child's behavior, the parent-child relationship, and parent stress",
        "Teaches skills to practice at home — this is what actually changes daily life"
      ],
      quote: "When I say evidence-based, I mean that there has been a large body of very carefully controlled research that indicates that we see improvements.",
      cite: { talk: "BPT webinar", ts: "4:06", url: "https://www.youtube.com/watch?v=DvGmcYGgiGo&t=246" }
    },
    {
      id: "bpt-abc",
      kicker: "How it works",
      title: "BPT in practice: the ABCs and praise",
      body: [
        "A-B-C model: Antecedent → Behavior → Consequence; children learn through consequences",
        "Use a 3:1 ratio — three affirmations for every command, question, or reprimand",
        "Make praise specific and sincere ('good job sharing with your sister'), not sarcastic",
        "Ignore minor misbehavior; break big tasks into small steps; use time-out when escalated"
      ],
      quote: "Something we commonly recommend is a 3:1 ratio of praise to commands, questions, or reprimands.",
      cite: { talk: "BPT webinar", ts: "16:57", url: "https://www.youtube.com/watch?v=DvGmcYGgiGo&t=1017" }
    },
    {
      id: "lifecourse",
      kicker: "The long view",
      title: "What predicts outcomes",
      body: [
        "2/3 of ADHD children are fully diagnosable as young adults; only ~15% truly outgrow it",
        "Emotional impulsiveness — not inattention — predicts job dismissals, road rage, marital problems",
        "The single best predictor of marital problems: emotion, not distractibility",
        "Plan for a persistent condition — and for strengths that exist alongside it"
      ],
      quote: "The single best predictor of marital problems in the adult with ADHD is not distractibility. It is emotion.",
      cite: { talk: "2012 lecture", ts: "15:08", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=908" }
    },
    {
      id: "bipolar",
      kicker: "A common confusion",
      title: "ADHD and bipolar: a one-way street",
      body: [
        "ADHD children carry no elevated risk for bipolar disorder — risk is 2–4%, the population rate",
        "The real direction: childhood-onset bipolar carries an 80–97% chance of ADHD with it",
        "But if bipolar runs in the family, the risk goes up eight times — know your family history",
        "Most ADHD children are never at risk for bipolar"
      ],
      quote: "ADHD children carry no elevated risk for bipolar disorder... if there is bipolar disorder in the family, the risk goes up eight times.",
      cite: { talk: "2012 lecture", ts: "2:47:52", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=10072" }
    },
    {
      id: "parent-adhd",
      kicker: "Look in the mirror",
      title: "25–35% of parents have ADHD too",
      body: [
        "ADHD is highly heritable — if your child has it, check yourself",
        "Untreated parent ADHD means more impulsive parenting, more discipline, less monitoring",
        "That raises the child's risk for oppositional disorder",
        "Treating the parent's ADHD is part of treating the child's"
      ],
      quote: "25 to 35% of the parents of ADHD children are ADHD themselves. ... The parent's ADHD needs to be detected and managed.",
      cite: { talk: "2012 lecture", ts: "2:32:03", url: "https://www.youtube.com/watch?v=SCAGc-rkIfo&t=9123" }
    },
    {
      id: "takeaways",
      kicker: "For us",
      title: "What we'll do differently",
      body: [
        "EDIT THIS SLIDE — our own notes go here (see content.js)",
        "Example: match expectations to executive age, not calendar age",
        "Example: make time visible — timers and visual schedules",
        "Example: catch and reward effort, not just outcomes"
      ],
      placeholder: true
    },
    {
      id: "resources",
      kicker: "Next steps",
      title: "Resources & further reading",
      body: [
        "CHADD — chadd.org: fact sheets and parent support",
        "ADDitude Magazine — additudemag.com: webinars, guides, community",
        "Books: '12 Principles for Raising a Child with ADHD' and 'Taking Charge of ADHD' by Russell Barkley",
        "Full transcripts of both talks live in this repo — reread any section by timestamp"
      ],
      quote: "You get to raise these disabled children and hopefully improve their welfare and their outcome... Love the one you're with.",
      cite: { talk: "2022 webinar", ts: "25:00", url: "https://www.youtube.com/watch?v=52wQuMSUAkY&t=1500" }
    }
  ]
};

if (typeof module !== "undefined") module.exports = { DECK };
