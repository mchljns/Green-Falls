export type Service = {
  slug: string;
  short: string;
  label: string;
  title: string;
  intro: string;
  seoTitle: string;
  description: string;
  details: { heading: string; paragraphs: string[] }[];
  related: { href: string; label: string }[];
  artifact: "website" | "email" | "ai" | "plan";
  symptoms: string[];
  examines: string[];
  includes: string[];
  leaves: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    "slug": "website-creation-seo-aeo",
    "short": "Websites and search",
    "label": "Websites and search",
    "title": "Website design and local SEO for Maine businesses.",
    "intro": "We build and improve small business websites so customers can find your services, understand the work you do and get in touch. Based in Maine, we work with independent businesses across the Northeast.",
    "artifact": "website",
    "symptoms": [
      "Your website no longer reflects the quality of the business.",
      "Customers regularly call to ask questions the site should answer.",
      "People nearby struggle to find you online, or contact you for work you don’t offer.",
      "Simple website changes are difficult or take too long."
    ],
    "examines": [
      "What people need before they call, visit or buy",
      "How people search locally and whether your listings are accurate",
      "The order of the pages, the wording and the next step for a visitor",
      "Speed, mobile use, accessibility and the information search tools need behind the scenes"
    ],
    "includes": [
      "A clear plan for the site and its pages",
      "Writing and editing",
      "Mobile-friendly design and development",
      "Help getting found in local searches (SEO)",
      "Service pages that answer common customer questions",
      "Reports and a list of improvements in order of importance"
    ],
    "leaves": [
      "A tested website and access to manage it",
      "Pages built around real customer questions",
      "A site your business can update",
      "A handoff with update instructions"
    ],
    "faqs": [
      {
        "q": "Do we need to know which website system we want?",
        "a": "No. We start with what the website needs to do, who needs to update it and how often it’ll change. Then we choose the simplest system that fits."
      },
      {
        "q": "Can you improve an existing website?",
        "a": "Yes. Sometimes clearer pages, better wording or a focused rebuild will improve calls, bookings or sales without replacing everything."
      },
      {
        "q": "What does AEO mean for a small business?",
        "a": "AEO stands for answer engine optimization. It means organizing your website’s answers so search engines and AI tools can understand them. It isn’t a shortcut or a promise that an AI tool will mention your business."
      },
      {
        "q": "How much does a small business website cost?",
        "a": "We quote the agreed work rather than use one price for every site. The main factors are the number of distinct page layouts, writing and photography, booking or store connections, and what needs to move from an existing site. Share your website, goals and budget range so we can recommend a realistic scope. Hosting, software and ongoing support should be identified separately in the proposal."
      },
      {
        "q": "Does a new website include SEO?",
        "a": "Our website projects include the search setup agreed in the proposal: page titles, descriptions, crawlable pages, useful service content and checks for mobile use. Local listing work, ongoing content and monitoring may need a separate scope. We explain what’s included before you commit."
      },
      {
        "q": "Can a redesign affect our existing Google rankings?",
        "a": "Yes. Changing page addresses, removing useful content or blocking search engines can affect visibility. We review the current pages and available search data, plan redirects where needed and check the important URLs after launch. No redesign can guarantee unchanged rankings."
      }
    ],
    "seoTitle": "Maine Website Design & Local SEO",
    "description": "Website design, redesign and local SEO for Maine small businesses. Get clear service pages, mobile-friendly layouts and a tested path to an inquiry.",
    "details": [
      {
        "heading": "A redesign should protect what already works.",
        "paragraphs": [
          "Before replacing a site, we review its pages, search traffic and customer actions. A page that already brings useful inquiries may need a clearer layout, not a new address. When URLs need to change, the launch plan should include redirects and checks for broken links.",
          "We look at the pages customers land on, not just the homepage. Each service page should explain the work, where you offer it, what affects the price and how to take the next step."
        ]
      },
      {
        "heading": "Local SEO starts with accurate answers.",
        "paragraphs": [
          "We review how your services and service area appear on the site and in your Google Business Profile. The work can include page titles, descriptions, internal links, business details and checks that Google can reach the pages.",
          "We agree on the measures before making changes: relevant search visits, calls, completed forms or bookings. Better rankings alone don’t tell you whether the site is bringing the right work."
        ]
      }
    ],
    "related": [
      {
        "href": "/who-we-help/contractors",
        "label": "Website design for Maine contractors"
      },
      {
        "href": "/insights/website-redesign-quote-checklist",
        "label": "What should a website redesign quote include?"
      },
      {
        "href": "/insights/website-does-not-match-your-work",
        "label": "Why your website might not be getting inquiries"
      }
    ]
  },
  {
    "slug": "email-lifecycle-retention",
    "short": "Email marketing",
    "label": "Customer email",
    "title": "Email marketing that gives customers a reason to come back.",
    "intro": "We plan, write, design and build email campaigns and automated follow-up for small businesses. Our hands-on experience includes Klaviyo, HubSpot and Customer.io, with projects across Maine and the Northeast.",
    "artifact": "email",
    "symptoms": [
      "Most email is promotional and sent at the last minute.",
      "New customers hear little after their first visit or purchase.",
      "Important reminders and follow-up depend on someone remembering.",
      "You have a customer list but no clear follow-up plan."
    ],
    "examines": [
      "What happens from first interest to repeat business",
      "Where a useful message could answer a question or prompt a return",
      "Whether people chose to hear from you and whether your emails reach their inboxes",
      "The tools you have, the time available and who will keep the work running"
    ],
    "includes": [
      "A review of your current customer emails",
      "A plan for what to send and when",
      "Email writing, design and production",
      "Automatic welcome, reminder and follow-up emails",
      "Testing and simple reporting",
      "Ongoing help with regular emails"
    ],
    "leaves": [
      "A clear customer email plan",
      "Automatic follow-up at important moments",
      "Reusable templates and simple instructions",
      "Reports on engagement, conversions and delivery"
    ],
    "faqs": [
      {
        "q": "Can you work with our current email system?",
        "a": "Yes, when it can support the agreed work. Our hands-on experience includes Klaviyo, HubSpot and Customer.io. We review your current platform and data before recommending a switch or promising a particular integration."
      },
      {
        "q": "Do you only work on automatic emails?",
        "a": "No. Automatic follow-up and regular emails should work together. The right mix depends on how your customers buy, visit and return."
      },
      {
        "q": "What if our list is small?",
        "a": "A small list can be a good place to start. We can begin with a welcome email or follow-up for one customer group. We work with people who asked to receive your marketing. The amount of work should fit the size of your list and how often customers buy or visit."
      },
      {
        "q": "Can you build or improve our Klaviyo flows?",
        "a": "Yes. We can review the triggers, audiences, messages and stop conditions, then write, design, build and test the agreed flows. Welcome, abandoned-checkout, post-purchase and win-back emails are common options. We choose based on your customer journey and available data."
      },
      {
        "q": "Can you write and design the emails too?",
        "a": "Yes. A project can cover planning, copy, design, platform setup and testing, or just the parts you need. You supply accurate product or service details and approve the messages before they send."
      },
      {
        "q": "How much does email marketing support cost?",
        "a": "The scope depends on campaign frequency, the number of messages and customer groups, and whether the platform needs setup or repairs. We quote a defined project or an ongoing schedule after reviewing your account. Email-platform subscriptions are separate unless your proposal says otherwise."
      }
    ],
    "seoTitle": "Email Marketing & Klaviyo Help in Maine",
    "description": "Email marketing for Maine shops and small businesses: Klaviyo flows, campaigns, writing, design and testing. Build a useful plan for repeat customers.",
    "details": [
      {
        "heading": "Klaviyo flows, campaigns and a plan for both.",
        "paragraphs": [
          "A campaign is a scheduled message, such as a new arrival or an event announcement. A flow sends when a customer takes an action, such as subscribing or buying. We plan both around what the customer needs to know next.",
          "Projects can include welcome series, abandoned-checkout emails, post-purchase guidance and win-back campaigns. We check which customer and order details your platform can reliably use before choosing a sequence."
        ]
      },
      {
        "heading": "Know what the emails are contributing.",
        "paragraphs": [
          "We review clicks, replies, orders, bookings and unsubscribes according to the purpose of each message. A retailer may need purchase reporting; a service business may care more about replies and appointments.",
          "Revenue reports depend on the store, email platform and tracking being connected. We explain the attribution settings and gaps so an email dashboard isn’t mistaken for proof that every reported sale happened because of that email."
        ]
      }
    ],
    "related": [
      {
        "href": "/who-we-help/retailers",
        "label": "Email marketing for independent retailers"
      },
      {
        "href": "/insights/email-automations-small-business",
        "label": "Which automated emails should you set up first?"
      },
      {
        "href": "/insights/follow-up-after-quote-request",
        "label": "Plan follow-up after a quote request"
      }
    ]
  },
  {
    "slug": "ai-implementation",
    "short": "Practical AI",
    "label": "Practical AI",
    "title": "AI consulting for small businesses in Maine.",
    "intro": "We help small businesses put AI to work on a specific task, such as drafting customer replies or organizing incoming requests. We set up the workflow, test it with your business information and show your team how to use it.",
    "artifact": "ai",
    "symptoms": [
      "Everyone is testing different tools with no shared process.",
      "The same marketing or administrative work gets recreated each week.",
      "Important knowledge lives in one person’s head or scattered documents.",
      "Checking and fixing AI’s answers takes as long as doing the task yourself."
    ],
    "examines": [
      "Repeated work that follows a clear pattern",
      "The information the AI would need to use",
      "What could go wrong, including accuracy and privacy",
      "Where a person should review, decide or communicate"
    ],
    "includes": [
      "A list of tasks worth improving",
      "Recommendations based on time saved, setup effort and what could go wrong",
      "Instructions and the business information the AI needs",
      "A working setup for one agreed task",
      "A person’s review and checks for mistakes",
      "Written instructions and training"
    ],
    "leaves": [
      "A working workflow for the agreed task",
      "Clear information and review points",
      "Instructions your business can maintain",
      "A record of test cases and known limits"
    ],
    "faqs": [
      {
        "q": "Do we need to buy a new AI tool?",
        "a": "Not necessarily. First we define the task and the result you need. Then we use the smallest dependable set of tools that can support it."
      },
      {
        "q": "Will AI replace someone’s job?",
        "a": "The work is designed to remove repeated steps and make good judgment easier to apply. We keep the human checks that protect customers, quality and reputation."
      },
      {
        "q": "Can you guarantee that AI will be accurate?",
        "a": "No responsible provider can make that promise. We build in reliable source information, review steps and a clear plan for cases the system can’t handle."
      },
      {
        "q": "What’s the difference between AI and automation?",
        "a": "A simple automation follows a rule, such as sending a confirmation when a form arrives. AI can work with less predictable information, such as drafting a reply from a written request, but its output needs checking. We choose the approach based on the task."
      },
      {
        "q": "What does an AI setup project cost?",
        "a": "Cost depends on the task, the condition of your information, the systems involved and the testing and training needed. We start with one agreed workflow and quote it before building. We also identify recurring tool fees and who will maintain the setup."
      },
      {
        "q": "Will you train us to use it?",
        "a": "Yes. Training and written instructions are part of the agreed setup. We cover how to check the output, correct source information, handle exceptions and stop the workflow when it isn’t working as expected."
      }
    ],
    "seoTitle": "Small Business AI Consulting in Maine",
    "description": "Practical AI consulting for Maine small businesses. Choose a repeated task, build and test the workflow, and train your team to check the results.",
    "details": [
      {
        "heading": "Start with a task you can describe.",
        "paragraphs": [
          "Useful starting points include drafting replies from an approved service guide, sorting inquiries for a person to review, or turning meeting notes into a draft task list. We compare the setup effort with the time you spend on the task today.",
          "Some work only needs a form, a saved reply or a simple automation. If that solves the problem, adding AI would create more work to maintain."
        ]
      },
      {
        "heading": "Decide what information the tool can use.",
        "paragraphs": [
          "We identify the business information the task needs, who keeps it current and which decisions stay with a person. Tool access, customer information and review steps are part of the project plan.",
          "Before launch, we test missing details, conflicting instructions and requests the workflow shouldn’t handle. Your handoff includes the working setup, instructions, known limits and a way to continue the task manually."
        ]
      }
    ],
    "related": [
      {
        "href": "/insights/practical-ai-small-business",
        "label": "How to use AI to draft customer replies"
      },
      {
        "href": "/services/marketing-consultation",
        "label": "Get help deciding whether the project is worth doing"
      }
    ]
  },
  {
    "slug": "marketing-consultation",
    "short": "Marketing consultation",
    "label": "Marketing direction",
    "title": "Marketing advice for small businesses in Maine.",
    "intro": "Not sure whether to fix the website, send more email or spend on advertising? We review what you have, where customers get stuck and what your budget can support. You receive a 90-day plan with specific next steps.",
    "artifact": "plan",
    "symptoms": [
      "Every marketing option feels important and nothing has a clear owner.",
      "You’re about to spend on a website, tool or agency and need an independent view.",
      "You’re doing a lot of marketing but don’t know what to tackle first.",
      "You need marketing advice but aren’t ready to hire someone full time."
    ],
    "examines": [
      "Business goals, customer behavior and the limits on time or budget",
      "What is already working and what keeps getting in the way",
      "Current providers, tools, budget and in-house capacity",
      "The few decisions most likely to create progress"
    ],
    "includes": [
      "A focused review or working session",
      "A review of how customers find, choose and return",
      "Recommendations on priorities and spending",
      "A 90-day action plan",
      "Help choosing providers or tools",
      "Regular reviews of progress and decisions"
    ],
    "leaves": [
      "A smaller list of priorities",
      "Clear rationale for what comes first",
      "Owners, timing and measures",
      "Confidence about what can wait"
    ],
    "faqs": [
      {
        "q": "Is consultation only advice?",
        "a": "It can be a focused plan, ongoing guidance or the start of hands-on work. Recommendations should lead to a clear decision or a real change in the business."
      },
      {
        "q": "Can you review an agency or provider proposal?",
        "a": "Yes. We can help explain the work included, assumptions and choices and whether the proposed work matches the actual business need."
      },
      {
        "q": "Do we need a large marketing budget?",
        "a": "No, but the business should be ready to act on the recommendations. Clear priorities are especially useful when time and budget are limited."
      },
      {
        "q": "Should we fix our website or start advertising?",
        "a": "First check whether the site explains the service, works on a phone and reliably delivers inquiries. Then look at whether enough suitable customers are finding it. If the customer path is broken, fix that before paying to send more people through it."
      },
      {
        "q": "Can we start with a one-time review?",
        "a": "Yes. A focused review can help with a specific decision, such as a website rebuild or email program. Ongoing guidance and implementation are separate choices. We agree on the questions, materials and deliverable before starting."
      },
      {
        "q": "How do you price marketing consultation?",
        "a": "We scope the review around the decision you need to make, the systems involved and how much research is needed. The proposal states the work, cost and what you’ll receive. You don’t need to commit to a retainer to discuss a focused project."
      }
    ],
    "seoTitle": "Maine Small Business Marketing Consultant",
    "description": "A Maine marketing consultant for small businesses. Review your website, email and spending, then get a 90-day plan with priorities and clear next steps.",
    "details": [
      {
        "heading": "Work out why marketing isn’t turning into inquiries.",
        "paragraphs": [
          "We separate the problems: are the right people finding you, can they understand the offer, does the form work, and does someone follow up? Those questions lead to different projects. More traffic won’t fix an inquiry that never reaches your inbox.",
          "We review available search, website and customer records alongside the way your business actually operates. If the tracking is incomplete, the first recommendation may be to repair it before drawing conclusions about spending."
        ]
      },
      {
        "heading": "Get a second opinion before committing.",
        "paragraphs": [
          "Bring a website proposal, a new software subscription or a list of marketing ideas. We’ll help you compare what’s included, what depends on your team and what it will take to keep the work running.",
          "The plan identifies what to do first, who owns each action and how to judge progress. You can use it with your own team or another provider; hands-on work with Green Falls can be scoped separately."
        ]
      }
    ],
    "related": [
      {
        "href": "/insights/website-redesign-quote-checklist",
        "label": "Compare website redesign proposals"
      },
      {
        "href": "/insights/website-does-not-match-your-work",
        "label": "Check whether your website is helping customers"
      },
      {
        "href": "/approach",
        "label": "What happens when you hire Green Falls"
      }
    ]
  }
];

export const insights = [
  {
    "slug": "email-automations-small-business",
    "topic": "Email marketing",
    "title": "Which automated emails should a small business set up first?",
    "seoTitle": "Email Automations to Set Up First",
    "description": "Choose your first email automation by customer need: a welcome, checkout reminder or post-purchase message. Includes setup and measurement checks.",
    "dek": "Choose a useful customer moment before building a long sequence.",
    "read": "5 min read",
    "intro": "Start with the customer moment you’re currently missing. If people join your list and hear nothing, build a welcome email. If shoppers begin checkout but don’t finish, review checkout follow-up. If buyers need help using what they bought, start after the purchase. You don’t need every flow before the first one can be useful.",
    "sections": [
      {
        "h": "Welcome people who asked to hear from you.",
        "p": "A welcome message should deliver whatever the signup promised and help the subscriber take one sensible next step. For a shop, that might be choosing a product or finding repairs and classes. Keep existing customers in mind: they may be joining the newsletter after buying, so a first-purchase pitch won’t always fit.",
        "example": "An instrument shop’s signup promises news about lessons and events. The welcome email explains where to find the calendar and how to ask about lessons. It doesn’t immediately send a discount for a product the subscriber may not need.",
        "check": "Sign up through each form. Confirm the promised message arrives once, the links work and replies reach someone."
      },
      {
        "h": "Use checkout reminders when the data supports them.",
        "p": "An online store may benefit from a reminder when someone starts checkout but doesn’t buy. Confirm that the platform records the event correctly, the person can receive the message and a completed purchase stops the reminder. Read the checkout itself first: an email can’t fix unclear shipping costs or a broken payment step.",
        "example": "A shopper completes an order after the first reminder. The remaining checkout messages should stop, even if they were already scheduled.",
        "check": "Test an unfinished checkout and a completed purchase. Check the actual product, price, link and stop condition in the message."
      },
      {
        "h": "Make post-purchase email useful before asking for another order.",
        "p": "Think about what the customer needs after delivery: care instructions, setup help or a way to ask a question. Match timing to when the item is likely to arrive, using the data your store actually has. A refill reminder only makes sense for something people replace regularly. Avoid assuming every purchase leads to another one next week.",
        "example": "A furniture customer may value care instructions. A guitar-string buyer may eventually need replacements. Those are different reasons to email and shouldn’t use the same schedule.",
        "check": "List the questions people ask after buying. Pick one the first message can answer well."
      },
      {
        "h": "Keep campaigns and automated messages from colliding.",
        "p": "A subscriber may qualify for several emails on the same day. Review welcome messages, store notifications, campaigns and follow-up together. Decide which messages take priority and which can wait. In Klaviyo, these automated sequences are called flows; their entry rules and filters matter as much as the design.",
        "example": "Someone who just bought shouldn’t receive a campaign implying they still haven’t placed an order. A customer with an unresolved issue may need a reply from a person before another promotion.",
        "check": "Walk through one new subscriber and one repeat buyer. Write down every message each could receive during the next week."
      },
      {
        "h": "Judge the result against the purpose of the email.",
        "p": "For a welcome email, look at whether people use the promised resource or take the next step. For a purchase sequence, review orders alongside unsubscribes and customer questions. Platform-attributed revenue can help with comparisons, but it doesn’t prove that every credited order was caused by the email. Keep the attribution settings consistent when comparing periods.",
        "example": "A care email may reduce repeated questions without producing many immediate orders. A checkout reminder has a different job and should be assessed differently.",
        "check": "Write one success measure for the flow and review it after enough people have gone through it to reveal a pattern."
      }
    ],
    "close": "Write a short brief before building: who qualifies, what starts the email, what the customer needs, what stops it and how you’ll judge the result. Then launch one tested sequence and improve it from what customers actually do.",
    "related": [
      {
        "href": "/services/email-lifecycle-retention",
        "label": "Get help writing, designing and building customer emails"
      },
      {
        "href": "/who-we-help/retailers",
        "label": "Email marketing for independent shops"
      }
    ],
    "sources": [
      {
        "href": "https://help.klaviyo.com/hc/en-us/articles/115002774932",
        "label": "Klaviyo: getting started with flows"
      }
    ],
    "published": "2026-10-02",
    "updated": "2026-10-02"
  },
  {
    "slug": "website-redesign-quote-checklist",
    "topic": "Website planning",
    "title": "What should a small business website redesign quote include?",
    "seoTitle": "Website Redesign Quote Checklist",
    "description": "Compare website redesign proposals: pages, copy, SEO migration, forms, ownership, hosting and support. Know what affects the cost.",
    "dek": "Compare the work, the ongoing costs and what you’ll own before choosing a provider.",
    "read": "5 min read",
    "intro": "Two website quotes can describe very different projects. One may include writing, moving existing pages and testing inquiry delivery; another may cover the design and build only. Before comparing totals, ask each provider to describe the same pages, features and handoff. Here’s what to look for.",
    "sections": [
      {
        "h": "Pages and features should be named.",
        "p": "Ask for a page list and the purpose of each page. A five-page site with a booking integration is different from five pages of text and photos. The quote should distinguish standard layouts from custom features, explain which forms or tools are included and say who supplies the business information.",
        "example": "“Contact form” could mean a short inquiry or a detailed estimate request with photos. The quote should say what customers enter, where the submission goes and what they see after sending it.",
        "check": "Write down the three most important things a customer must be able to do. Find each one in the proposed scope."
      },
      {
        "h": "Writing, images and revisions affect the cost.",
        "p": "Confirm who writes the copy, selects images and moves existing content. Ask how many design options and revision rounds are included, when you’ll review them and what counts as extra work. A lower quote may expect you to arrive with approved copy and correctly sized photos. That can be reasonable, but it needs to be clear.",
        "example": "A service business may need different explanations for repair, replacement and new installations. Counting those as three pages doesn’t explain who will write them or verify the details.",
        "check": "For each page, assign someone to supply the facts, write the text and approve the result."
      },
      {
        "h": "A redesign needs a plan for existing search traffic.",
        "p": "If the site already gets useful visits from Google, ask which pages bring them and what will happen to those page addresses. The launch plan should cover redirects for changed URLs, internal links, titles, descriptions and checks that the new site can be indexed. Ask what will be monitored after launch rather than accepting a promise to preserve every ranking.",
        "example": "If an old repair page has links from other websites, removing it without a suitable replacement can send visitors to an error page. Decide where those visitors should go before launch.",
        "check": "Request a list of changed or removed URLs and their intended destinations."
      },
      {
        "h": "Separate launch costs from ongoing costs.",
        "p": "Ask for hosting, domain registration, software subscriptions, maintenance and content updates to be identified. Find out what happens if you end the support agreement. A low upfront price with a long monthly commitment can be a different purchase from a fixed project followed by optional support. Compare the total over the same period.",
        "example": "A booking tool may charge its own monthly fee even when adding it to the website is included. That fee belongs in your operating budget.",
        "check": "Ask for the project fee and expected recurring charges in separate lines, including any minimum commitment."
      },
      {
        "h": "Confirm ownership, access and launch checks.",
        "p": "The proposal should explain who owns the domain, accounts, content and project files, and how you’ll make routine changes. Ask which phones and browsers will be checked, how form delivery will be confirmed and what support covers after launch. You should know who approves publication and how a problem will be reported.",
        "example": "Seeing a success message after a form submission isn’t the whole test. Someone should also confirm that the request reaches the right inbox.",
        "check": "Request the handoff list: accounts, files, update instructions and the person responsible for each ongoing task."
      }
    ],
    "close": "The most useful quote is one you can explain back: what will be built, what you need to provide, when you’ll review it, what you’ll pay and what happens after launch. If a major item is missing, ask for it in writing before choosing a provider.",
    "related": [
      {
        "href": "/services/website-creation-seo-aeo",
        "label": "Discuss a website design or redesign project"
      },
      {
        "href": "/services/marketing-consultation",
        "label": "Get a second opinion on a marketing proposal"
      }
    ],
    "sources": [],
    "published": "2026-10-02",
    "updated": "2026-10-02"
  },
  {
    "slug": "follow-up-after-quote-request",
    "topic": "Customer follow-up",
    "title": "What should happen after someone requests a quote?",
    "dek": "A practical way to confirm receipt, collect missing details and keep the next step clear.",
    "read": "4 min read",
    "intro": "A quote form is the beginning of a conversation. Once a request arrives, someone needs to read it, decide whether the job fits and tell the customer what happens next. Before adding more advertising, follow one inquiry through that process.",
    "sections": [
      {
        "h": "Give every inquiry an owner.",
        "p": "Choose who checks the inbox and who covers it when that person is away. Keep a simple record of the request, the person handling it and the next action. A shared inbox helps only if someone is responsible for responding.",
        "example": "An inquiry arrives while the owner is on a job. The person covering the inbox checks the service and town, then flags the request for an estimate call.",
        "check": "Send a labeled test through your form. Check the destination inbox and record who would pick it up."
      },
      {
        "h": "Confirm receipt without promising availability.",
        "p": "A short acknowledgment can tell a customer that the request arrived and how you normally reply. Only give a response window you can consistently meet. An automated message should not say the project is accepted or that an appointment is booked.",
        "example": "“Thanks for getting in touch. We’ve received your request and will review the details before replying by email. If you have photos to add, you can reply to this message.” Use that wording only if someone monitors replies.",
        "check": "Read the acknowledgment as a homeowner. Is it clear whether a person has reviewed the request yet?"
      },
      {
        "h": "Ask for the information needed for the next decision.",
        "p": "If you need a town, photos or a description before deciding whether to visit, ask for those details together. Explain what they help you assess. Avoid asking customers to choose technical specifications before you’ve discussed the work.",
        "example": "A deck repair inquiry may need photos and a description of the problem before a site visit can be discussed. The photos don’t replace an on-site assessment.",
        "check": "Review recent inquiries and identify the details you most often have to ask for."
      },
      {
        "h": "Agree on follow-up and stop when it no longer helps.",
        "p": "If someone says they aren’t ready, ask whether they’d like you to check back and when. If you automate reminders, make sure a reply, booking, declined quote or request to stop removes that person from the sequence. Don’t continue sending reminders just because a timer is running.",
        "example": "A customer expects to decide after getting another assessment. You offer to check back next month rather than adding them to a weekly reminder sequence.",
        "check": "Write down the events that should stop follow-up, then test each one before turning automation on."
      },
      {
        "h": "Measure the steps separately.",
        "p": "Count received inquiries, suitable projects, estimates issued and work booked separately. A form submission is not a sale. Keep the traffic source when it’s available and note when it’s unknown. Reporting becomes useful when both the website tracking and the follow-up records are dependable.",
        "example": "Several inquiries may arrive from one campaign while only a few match your service area. That calls for a different change than a campaign that brings suitable projects but receives no replies from your team.",
        "check": "Review the previous month’s requests and mark where each conversation stopped."
      }
    ],
    "close": "Start by fixing one handoff: receipt, first reply, missing details or the agreed follow-up. Once that step works consistently, decide whether automation would save time.",
    "published": "2026-09-16",
    "updated": "2026-10-02",
    "sources": [],
    "seoTitle": "How to Follow Up After a Quote Request",
    "description": "A practical quote follow-up process for small businesses: acknowledge the request, assign a reply, ask for missing details and track what happens next.",
    "related": [
      {
        "href": "/who-we-help/contractors",
        "label": "Website and inquiry help for contractors"
      },
      {
        "href": "/services/email-lifecycle-retention",
        "label": "Email follow-up setup"
      }
    ]
  },
  {
    "slug": "website-does-not-match-your-work",
    "topic": "Website + search",
    "title": "Why isn’t your website getting inquiries?",
    "dek": "Check your services, customer information and inquiry form on a phone.",
    "read": "4 min read",
    "intro": "If your website gets visits but few inquiries, start with the path a customer takes. Can they tell what you do, whether you serve them and how to get a reply? If hardly anyone reaches the site, the first problem may be visibility. Use this review to separate the two before spending on a redesign or more advertising.",
    "sections": [
      {
        "h": "Are suitable customers reaching the right pages?",
        "p": "Use Google Search Console to review the searches and pages bringing visitors from Google. Use your website analytics to see where visits begin and whether people reach the contact step. A search about a service you don’t offer is different from a local customer looking for a quote. With very little traffic, a few visits aren’t enough to judge the form or design.",
        "example": "A repair page may attract people looking for do-it-yourself instructions. If the page also offers a repair service, make the service area and inquiry option clear without removing useful information.",
        "check": "Choose one important service page. Compare its search queries, visits and recorded inquiries over the same period."
      },
      {
        "h": "Can a new visitor identify the service?",
        "p": "Read the first heading and paragraph without relying on the logo or photograph. They should identify what the business offers. Then check whether a visitor can find the service area or location before completing a form.",
        "example": "For a deck contractor, “Built around your life” leaves the service unstated. “Deck repair and replacement” gives the visitor a starting point. The supporting sentence can explain the kinds of problems the company handles.",
        "check": "Ask someone unfamiliar with the business to tell you what it does and where it works after reading the first screen."
      },
      {
        "h": "Can they make an informed inquiry?",
        "p": "A service page should answer the questions that determine whether someone should contact you. Use recent customer calls and emails to identify those questions. Separate information you can publish from details that require an assessment.",
        "example": "A repair shop can explain which instruments it accepts, how to describe a problem and what happens after an inquiry. It doesn’t need to guess a repair price before seeing the instrument.",
        "check": "Read the last ten inquiries. Which questions could the page answer, and which details should the form collect?"
      },
      {
        "h": "Does the inquiry actually arrive?",
        "p": "Complete the form on a phone using a clearly labeled test. Confirm the required fields, error messages and success message, then confirm receipt in the destination inbox. A success screen alone doesn’t tell you that the right person received the inquiry.",
        "example": "If a contractor only needs a town and a description to begin, a long questionnaire about materials, dimensions and budgets may ask too much before the homeowner knows what needs replacing.",
        "check": "Record where the test arrived, who owns the reply and whether any information was missing. Don’t enter sensitive customer data into a test."
      },
      {
        "h": "Choose the first fix from the evidence",
        "p": "Fix broken actions and inaccurate business information first. Next, address missing service details and confusing instructions. Once the customer path works, assess the photography, hierarchy and visual consistency against the quality of the business.",
        "example": "If service-page visits are increasing while relevant inquiries stay flat, inspect the offer and form before buying more traffic. If the inquiries arrive but remain unanswered, the next fix is the response process.",
        "check": "Record a baseline and the date of each meaningful change. Compare similar periods, accounting for seasonality and changes in traffic sources."
      }
    ],
    "close": "Your first project brief can be one paragraph: the customer task, where it breaks down, the information missing and how you’ll verify the fix. That gives a designer or developer something specific to solve.",
    "published": "2026-08-18",
    "updated": "2026-10-02",
    "sources": [],
    "seoTitle": "Why Your Website Isn’t Getting Inquiries",
    "description": "Check why your small business website isn’t generating inquiries: service information, mobile usability, form delivery and what happens after a visit.",
    "related": [
      {
        "href": "/services/website-creation-seo-aeo",
        "label": "Website design and local SEO"
      },
      {
        "href": "/insights/follow-up-after-quote-request",
        "label": "What happens after a quote request?"
      }
    ]
  },
  {
    "slug": "practical-ai-small-business",
    "topic": "Practical AI",
    "title": "How to use AI to help draft customer replies",
    "dek": "Set clear limits, test sample inquiries and check each reply before sending.",
    "read": "4 min read",
    "intro": "If you often reply to new inquiries asking for a town, project details or photos, AI may help you write a first draft. Here’s how to set it up so someone checks each reply before it’s sent.",
    "sections": [
      {
        "h": "Choose exactly what AI should do",
        "p": "Start with a new inquiry and ask for a draft requesting any missing details. Assign a person to check and send it. The draft must not promise availability, quote prices or assume the business serves a town.",
        "example": "“Draft a reply asking for the missing project information, using only the approved service guide. Flag anything the guide doesn’t cover for a person.”",
        "check": "Could a colleague understand what AI is allowed to do from this description? If not, narrow the task."
      },
      {
        "h": "Keep the business information up to date",
        "p": "Collect the service list, confirmed coverage, inquiry requirements and examples of approved replies. Name the person responsible for updating each source. Don’t give the workflow more customer information than the task requires.",
        "example": "If coverage changes, the approved service guide is updated once. A draft that can’t verify coverage should ask for review instead of guessing.",
        "check": "For every claim in a draft, can the reviewer find its supporting information?"
      },
      {
        "h": "Try requests that could cause mistakes",
        "p": "Use made-up test inquiries first: one complete request, one missing a town, one for an unsupported service, one with contradictory details and one asking the system to ignore its instructions. Include a case that needs immediate human attention. Record the expected response before running the tests.",
        "example": "An inquiry about unstable stairs should go straight to a person. It should not automatically promise a visit or advise the customer to inspect the structure.",
        "check": "Record made-up claims, missed information and the corrections needed before sending. A reply that reads well can still be wrong."
      },
      {
        "h": "Check whether it saves time",
        "p": "Compare the current process with drafting, reviewing and correcting the AI output. Use the same kinds of inquiries for both. If the review takes as long as writing from scratch, fix the sources or reduce the task before expanding the workflow.",
        "example": "For each test, record how long a reply takes to write yourself and how long the AI draft takes to check and correct. Agree on acceptable results before using real inquiries.",
        "check": "Who stops the workflow if a source is outdated or drafts become unreliable? Keep a manual route available."
      }
    ],
    "close": "A useful first project should come with the working setup, approved business information, test examples and instructions for checking replies and handling mistakes. Assign someone to keep it current.",
    "published": "2026-08-18",
    "updated": "2026-10-02",
    "sources": [],
    "seoTitle": "Using AI to Draft Customer Replies",
    "description": "A practical first AI project for a small business: draft customer replies using approved information, test difficult inquiries and review before sending.",
    "related": [
      {
        "href": "/services/ai-implementation",
        "label": "Small business AI consulting and setup"
      },
      {
        "href": "/services/marketing-consultation",
        "label": "Help choosing your next marketing project"
      }
    ]
  }
];
