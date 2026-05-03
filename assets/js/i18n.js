/* ============================================================
   La Petite — i18n (English + Greek)
   ============================================================
   Mark elements in HTML with:
     data-i18n="key"              → replaces text content
     data-i18n-html="key"         → replaces innerHTML (for inline tags)
     data-i18n-attr="placeholder:key, aria-label:other"
     data-i18n-year="key"         → replaces text content with {year} substitution
   Language is saved in localStorage as "la-petite-lang".
   API: window.LaPetite.t(key, vars), .setLang(lang), .getLang()
   ============================================================ */
(function () {
  const STORAGE_KEY = "la-petite-lang";
  const SUPPORTED = ["en", "el"];

  const I18N = {
    en: {
      /* ---- Document titles ---- */
      title_home:    "La Petite — Boutique Cakes & Sweet Treats",
      title_menu:    "Services — La Petite",
      title_about:   "About — La Petite",
      title_contact: "Contact — La Petite",

      /* ---- Nav ---- */
      nav_home:    "Home",
      nav_menu:    "Services",
      nav_about:   "About",
      nav_contact: "Contact",
      nav_cta:     "Get a Quote",
      nav_toggle_aria: "Toggle menu",
      lang_label:  "Language",

      /* ---- Footer ---- */
      footer_tagline:   "A tiny boutique sweet studio in Marathon, Greece. Cakes, biscuits, cupcakes and dessert tables — all made to order, all baked with love.",
      footer_visit:     "Visit",
      footer_appt:      "By appointment only",
      footer_loc:       "Marathon, Greece",
      footer_hours:     "Tue – Sat · 10am – 6pm",
      footer_stay:      "Stay sweet",
      footer_insta:     "@la_petitepatis on Instagram",
      footer_enquiry:   "Send a custom order enquiry",
      footer_rights:    "© {year} La Petite. All rights reserved.",
      footer_handmade:  "Handmade in small batches · Crafted with sugar & love",

      /* ---- Home ---- */
      home_eyebrow:     "Boutique sweet studio · Marathon, GR",
      home_title_1:     "Every cake,",
      home_title_2:     "a handmade story.",
      home_intro:       "La Petite is a one-baker studio in Marathon crafting bespoke cakes, hand-iced biscuits, cupcakes, sweets and dessert tables for birthdays, baptisms, weddings — and the perfectly ordinary Tuesdays in between.",
      home_btn_order:   "Get a quote",
      home_btn_menu:    "See what I make",
      home_stat1_label: "Made by hand",
      home_stat2_label: "Custom designs",
      home_stat3_label: "Sprinkle love",
      home_stat1_num:   "100%",
      home_stat2_num:   "1-of-1",
      home_stat3_num:   "∞",
      home_hero_alt:    "A custom cake by La Petite",

      home_featured_eyebrow: "Made to order",
      home_featured_title:   "What I make",
      home_featured_more:    "All services →",

      home_steps_title: "How ordering works",
      home_steps_intro: "Three sweet steps from idea to icing.",
      home_step1_title: "Tell me your idea",
      home_step1_text:  "Send a message with your date, theme and any inspiration pictures.",
      home_step2_title: "We design together",
      home_step2_text:  "I'll reply with sketches, flavour suggestions and a quote within 48 hours.",
      home_step3_title: "Bake & collect",
      home_step3_text:  "Your order is baked fresh and ready for collection in Marathon or local delivery.",

      home_gallery_eyebrow: "Past bakes",
      home_gallery_title:   "A little look at the kitchen",
      home_gallery_more:    "See more on Instagram →",

      home_banner_title: "Got a sweet idea?",
      home_banner_text:  "Birthday, baptism, baby shower or just because — I'd love to hear what you're dreaming up.",
      home_banner_btn:   "Start your order",

      /* ---- Services / Menu page ---- */
      menu_eyebrow: "Services",
      menu_title:   "Made for every celebration",
      menu_intro:   "Everything is made to order around your event, your colours and the people you love. Pricing depends on size, design complexity and delivery — get in touch for a personal quote within 48 hours.",
      menu_quote_btn: "Request a quote",
      menu_quote_short: "Get a quote",
      price_on_request: "Price on request",

      svc_cake_name:    "Cakes",
      svc_cake_tag:     "Bespoke birthday, baptism & celebration cakes",
      svc_cake_desc:    "Sculpted character cakes, themed designs, number cakes, baptism and wedding cakes — all custom-made around your celebration. Choose from a range of sponges, fillings and finishes.",

      svc_biscuit_name: "Biscuits",
      svc_biscuit_tag:  "Hand-iced cookies & themed biscuit sets",
      svc_biscuit_desc: "Royal-iced sugar biscuits in any shape, colour or design — perfect for party favours, wedding gifts or to match a cake. Sold by the set.",

      svc_cupcakes_name: "Cupcakes",
      svc_cupcakes_tag:  "Themed cupcakes for parties & gatherings",
      svc_cupcakes_desc: "Soft, fluffy cupcakes with buttercream swirls, fondant toppers or matching themes — wonderful on their own or alongside a cake.",

      svc_sweets_name:  "Sweets",
      svc_sweets_tag:   "Cake pops, mini desserts & sweet jars",
      svc_sweets_desc:  "Bite-sized sweet treats — cake pops, mini tarts, brownies and chocolate dips — perfect for adding variety to a celebration table.",

      svc_candy_name:   "Candy bar",
      svc_candy_tag:    "A full dessert table for your event",
      svc_candy_desc:   "Coordinated dessert tables for baptisms, weddings and parties — cake, cupcakes, biscuits, cake pops and sweets all themed together, set up at your venue.",

      menu_custom_title: "Don't see exactly what you need?",
      menu_custom_text:  "Every order is custom — themes, colours, flavours, all of it. Tell me your idea and I'll bring it to life.",
      menu_custom_btn:   "Tell me your idea",

      /* ---- About ---- */
      about_eyebrow: "About La Petite",
      about_title:   "A tiny studio in Marathon, with a whole lot of sprinkle.",
      about_p1:      "La Petite started in a home kitchen with one stand mixer, a well-loved piping bag and a stack of birthday orders for friends. Today it's still a one-baker boutique studio in Marathon, Greece — small on purpose, so every order gets the time and care it deserves.",
      about_p2:      "I bake in small batches with proper butter, real vanilla and seasonal fruit, then decorate by hand. Every piece is made to be the centrepiece of a small celebration — a little wonky on purpose, always full of personality.",
      about_greeting_html: "Hello,<br/>I'm the baker!",
      about_caption: "A real photo will live here soon.",

      value1_title: "Small batch",
      value1_text:  "I only take a handful of orders each week so every cake, biscuit and sweet is fresh, focused and a little bit special.",
      value2_title: "Real ingredients",
      value2_text:  "Proper butter, free-range eggs, real chocolate and seasonal fruit. No shortcuts, no pre-mixes.",
      value3_title: "Made for you",
      value3_text:  "Every order is custom designed around your celebration, your colours and your favourite flavours.",

      about_cta_title: "Let's bake something together",
      about_cta_text:  "Birthday, baptism, baby shower, wedding or just a Tuesday treat — I'd love to hear about it.",
      about_cta_btn:   "Send a message",

      /* ---- Contact ---- */
      contact_eyebrow: "Contact",
      contact_title:   "Let's talk sweet",
      contact_intro:   "Tell me a bit about your celebration and any theme, flavour or colour inspiration. I usually reply within 48 hours.",

      contact_quick_title: "Quick info",
      contact_quick_1: "📅 Please order at least 1 week ahead",
      contact_quick_2: "💬 Custom design, price on request",
      contact_quick_3: "🚗 Local delivery in & around Marathon",
      contact_quick_4: "✉️ Replies within 48h, Tue–Sat",

      contact_find_title: "Find me",
      contact_find_text:  "Based in Marathon, Greece. By appointment only — collection address shared once your order is confirmed.",

      form_name:        "Your name",
      form_email:       "Email",
      form_date:        "Event date",
      form_servings:    "Servings (approx.)",
      form_cake:        "Type or theme",
      form_cake_ph:     "e.g. baptism cake, Mickey Mouse, candy bar…",
      form_message:     "Tell me about your celebration",
      form_message_ph:  "Birthday for my 4-year-old who loves dinosaurs and the colour mint…",
      form_submit:      "Send my enquiry",
      form_sending:     "Sending…",
      form_foot:        "By sending this form you agree to be contacted about your enquiry. Your details are only used to reply to you — never shared.",

      form_err_fill:    "Please fill in your name, email and a short message (10+ characters).",
      form_err_email:   "That email address doesn't look quite right.",
      form_err_send:    "Sorry, something went wrong sending your message. Please try again or email {email} directly.",
      form_success_sent:"Thank you! Your enquiry is on its way — I'll reply within 48 hours.",
      form_success_mailto: "Opening your email app… if nothing happens, please email {email} directly.",
    },

    el: {
      title_home:    "La Petite — Μπουτίκ Τούρτες & Γλυκά",
      title_menu:    "Υπηρεσίες — La Petite",
      title_about:   "Σχετικά — La Petite",
      title_contact: "Επικοινωνία — La Petite",

      nav_home:    "Αρχική",
      nav_menu:    "Υπηρεσίες",
      nav_about:   "Σχετικά",
      nav_contact: "Επικοινωνία",
      nav_cta:     "Ζητήστε προσφορά",
      nav_toggle_aria: "Άνοιγμα μενού",
      lang_label:  "Γλώσσα",

      footer_tagline:   "Ένα μικρό μπουτίκ στούντιο γλυκών στον Μαραθώνα. Τούρτες, μπισκότα, cupcakes και candy bar — όλα κατά παραγγελία, όλα φτιαγμένα με αγάπη.",
      footer_visit:     "Επισκεφθείτε",
      footer_appt:      "Μόνο με ραντεβού",
      footer_loc:       "Μαραθώνας, Ελλάδα",
      footer_hours:     "Τρι – Σάβ · 10π.μ. – 6μ.μ.",
      footer_stay:      "Μείνετε γλυκοί",
      footer_insta:     "@la_petitepatis στο Instagram",
      footer_enquiry:   "Στείλτε ερώτημα παραγγελίας",
      footer_rights:    "© {year} La Petite. Με την επιφύλαξη παντός δικαιώματος.",
      footer_handmade:  "Φτιαγμένα στο χέρι σε μικρές παρτίδες · Με ζάχαρη και αγάπη",

      home_eyebrow:     "Μπουτίκ στούντιο γλυκών · Μαραθώνας",
      home_title_1:     "Κάθε τούρτα,",
      home_title_2:     "μια ιστορία φτιαγμένη στο χέρι",
      home_intro:       "Το La Petite είναι ένα μικρό στούντιο στον Μαραθώνα που φτιάχνει μοναδικές τούρτες, ζωγραφισμένα μπισκότα, cupcakes, γλυκά και candy bar για γενέθλια, βαφτίσεις, γάμους — και κάθε καθημερινή Τρίτη ανάμεσά τους.",
      home_btn_order:   "Ζητήστε προσφορά",
      home_btn_menu:    "Δείτε τι φτιάχνω",
      home_stat1_label: "Χειροποίητα",
      home_stat2_label: "Μοναδικά σχέδια",
      home_stat3_label: "Με αγάπη",
      home_stat1_num:   "100%",
      home_stat2_num:   "1-σε-1",
      home_stat3_num:   "∞",
      home_hero_alt:    "Μια χειροποίητη τούρτα από το La Petite",

      home_featured_eyebrow: "Κατά παραγγελία",
      home_featured_title:   "Τι φτιάχνω",
      home_featured_more:    "Όλες οι υπηρεσίες →",

      home_steps_title: "Πώς γίνεται η παραγγελία",
      home_steps_intro: "Τρία γλυκά βήματα από την ιδέα στο γλάσο.",
      home_step1_title: "Πείτε μου την ιδέα σας",
      home_step1_text:  "Στείλτε μήνυμα με την ημερομηνία, το θέμα και εικόνες έμπνευσης.",
      home_step2_title: "Σχεδιάζουμε μαζί",
      home_step2_text:  "Θα σας απαντήσω με σκίτσο, προτάσεις γεύσεων και προσφορά εντός 48 ωρών.",
      home_step3_title: "Ψήσιμο & παραλαβή",
      home_step3_text:  "Η παραγγελία σας ψήνεται φρέσκια, έτοιμη για παραλαβή στον Μαραθώνα ή τοπική παράδοση.",

      home_gallery_eyebrow: "Πρόσφατες δημιουργίες",
      home_gallery_title:   "Μια ματιά στην κουζίνα",
      home_gallery_more:    "Δείτε περισσότερα στο Instagram →",

      home_banner_title: "Έχετε μια γλυκιά ιδέα;",
      home_banner_text:  "Γενέθλια, βάφτιση, baby shower ή απλώς κάτι για μια Τρίτη — θα ήθελα να ακούσω.",
      home_banner_btn:   "Ξεκινήστε την παραγγελία",

      menu_eyebrow: "Υπηρεσίες",
      menu_title:   "Φτιαγμένα για κάθε γιορτή",
      menu_intro:   "Όλα φτιάχνονται κατά παραγγελία γύρω από την εκδήλωσή σας, τα χρώματα και τους ανθρώπους σας. Η τιμή εξαρτάται από το μέγεθος, την πολυπλοκότητα και την παράδοση — επικοινωνήστε για προσωπική προσφορά εντός 48 ωρών.",
      menu_quote_btn: "Ζητήστε προσφορά",
      menu_quote_short: "Προσφορά",
      price_on_request: "Τιμή κατόπιν αιτήματος",

      svc_cake_name:    "Τούρτες",
      svc_cake_tag:     "Μοναδικές τούρτες για γενέθλια, βαφτίσεις & γιορτές",
      svc_cake_desc:    "Πλασμένες τούρτες χαρακτήρων, θεματικά σχέδια, τούρτες αριθμοί, βαφτίσεις και γάμοι — όλες κατά παραγγελία γύρω από τη γιορτή σας. Επιλέξτε από διάφορα παντεσπάνια, γεμίσεις και τελειώματα.",

      svc_biscuit_name: "Μπισκότα",
      svc_biscuit_tag:  "Ζωγραφισμένα στο χέρι μπισκότα σε σετ",
      svc_biscuit_desc: "Μπισκότα ζάχαρης με royal icing σε όποιο σχήμα, χρώμα ή σχέδιο θέλετε — ιδανικά για μπομπονιέρες, δώρα γάμου ή να συνδυαστούν με τούρτα. Πωλούνται σε σετ.",

      svc_cupcakes_name: "Cupcakes",
      svc_cupcakes_tag:  "Θεματικά cupcakes για πάρτι & συγκεντρώσεις",
      svc_cupcakes_desc: "Απαλά, αφράτα cupcakes με κρέμα βουτύρου, φιγούρες fondant ή θέματα που ταιριάζουν — υπέροχα μόνα τους ή δίπλα σε τούρτα.",

      svc_sweets_name:  "Γλυκά",
      svc_sweets_tag:   "Cake pops, μίνι επιδόρπια & σετ γλυκών",
      svc_sweets_desc:  "Μπουκίτσες απολαυστικά γλυκά — cake pops, μίνι ταρτάκια, brownies και σοκολατάκια — ιδανικά για να προσθέσετε ποικιλία στο τραπέζι της γιορτής.",

      svc_candy_name:   "Candy bar",
      svc_candy_tag:    "Ένα ολόκληρο γλυκό τραπέζι για την εκδήλωσή σας",
      svc_candy_desc:   "Συνδυασμένα γλυκά τραπέζια για βαφτίσεις, γάμους και πάρτι — τούρτα, cupcakes, μπισκότα, cake pops και γλυκά σε κοινό θέμα, στημένα στον χώρο σας.",

      menu_custom_title: "Δεν βρίσκετε αυτό που χρειάζεστε;",
      menu_custom_text:  "Κάθε παραγγελία είναι προσωπική — θέματα, χρώματα, γεύσεις, όλα. Πείτε μου την ιδέα σας και θα την ζωντανέψω.",
      menu_custom_btn:   "Πείτε μου την ιδέα σας",

      about_eyebrow: "Σχετικά με το La Petite",
      about_title:   "Ένα μικρό στούντιο στον Μαραθώνα, με ένα σωρό από αγάπη.",
      about_p1:      "Το La Petite ξεκίνησε σε μια κουζίνα στο σπίτι με ένα μίξερ, μια αγαπημένη σακούλα ζαχαροπλαστικής και μια στοίβα παραγγελιών γενεθλίων για φίλους. Σήμερα παραμένει ένα μπουτίκ στούντιο ενός ατόμου στον Μαραθώνα — μικρό επίτηδες, ώστε κάθε παραγγελία να παίρνει τον χρόνο και τη φροντίδα που της αξίζει.",
      about_p2:      "Φτιάχνω σε μικρές παρτίδες με καλό βούτυρο, αληθινή βανίλια και φρούτα της εποχής, και μετά διακοσμώ στο χέρι. Κάθε δημιουργία είναι φτιαγμένη να γίνει το κέντρο μιας μικρής γιορτής — λίγο ατημέλητη επίτηδες, πάντα γεμάτη χαρακτήρα.",
      about_greeting_html: "Γεια σας,<br/>είμαι η ζαχαροπλάστρια!",
      about_caption: "Μια αληθινή φωτογραφία θα μπει εδώ σύντομα.",

      value1_title: "Μικρή παρτίδα",
      value1_text:  "Δέχομαι μόνο λίγες παραγγελίες την εβδομάδα ώστε κάθε τούρτα, μπισκότο και γλυκό να είναι φρέσκο, προσεγμένο και λίγο ξεχωριστό.",
      value2_title: "Αληθινά υλικά",
      value2_text:  "Καλό βούτυρο, αυγά ελευθέρας βοσκής, αληθινή σοκολάτα και φρούτα εποχής. Χωρίς συμβιβασμούς, χωρίς έτοιμα μείγματα.",
      value3_title: "Φτιαγμένα για εσάς",
      value3_text:  "Κάθε παραγγελία σχεδιάζεται γύρω από τη γιορτή σας, τα χρώματά σας και τις αγαπημένες σας γεύσεις.",

      about_cta_title: "Ας φτιάξουμε κάτι μαζί",
      about_cta_text:  "Γενέθλια, βάφτιση, baby shower, γάμος ή απλά κάτι για μια Τρίτη — θα ήθελα να ακούσω.",
      about_cta_btn:   "Στείλτε μήνυμα",

      contact_eyebrow: "Επικοινωνία",
      contact_title:   "Ας μιλήσουμε για γλυκά",
      contact_intro:   "Πείτε μου λίγα για τη γιορτή σας και για όποιο θέμα, γεύση ή χρώμα έχετε στο μυαλό σας. Συνήθως απαντώ εντός 48 ωρών.",

      contact_quick_title: "Γρήγορη ενημέρωση",
      contact_quick_1: "📅 Παραγγείλτε τουλάχιστον 1 εβδομάδα πριν",
      contact_quick_2: "💬 Προσωπικός σχεδιασμός, τιμή κατόπιν αιτήματος",
      contact_quick_3: "🚗 Τοπική παράδοση στον Μαραθώνα και γύρω",
      contact_quick_4: "✉️ Απαντήσεις εντός 48ω, Τρι–Σάβ",

      contact_find_title: "Βρείτε με",
      contact_find_text:  "Με έδρα τον Μαραθώνα. Μόνο με ραντεβού — η διεύθυνση παραλαβής δίνεται μόλις επιβεβαιωθεί η παραγγελία σας.",

      form_name:        "Το όνομά σας",
      form_email:       "Email",
      form_date:        "Ημερομηνία εκδήλωσης",
      form_servings:    "Μερίδες (περίπου)",
      form_cake:        "Είδος ή θέμα",
      form_cake_ph:     "π.χ. τούρτα βάφτισης, Mickey Mouse, candy bar…",
      form_message:     "Πείτε μου για τη γιορτή σας",
      form_message_ph:  "Γενέθλια για τον 4χρονο γιο μου που λατρεύει τους δεινόσαυρους και το χρώμα μέντα…",
      form_submit:      "Στείλτε το αίτημά μου",
      form_sending:     "Αποστολή…",
      form_foot:        "Με την αποστολή αυτής της φόρμας συμφωνείτε να επικοινωνήσουμε μαζί σας για το αίτημά σας. Τα στοιχεία σας χρησιμοποιούνται μόνο για να σας απαντήσουμε — δεν κοινοποιούνται.",

      form_err_fill:    "Παρακαλώ συμπληρώστε όνομα, email και ένα σύντομο μήνυμα (10+ χαρακτήρες).",
      form_err_email:   "Αυτή η διεύθυνση email δεν φαίνεται σωστή.",
      form_err_send:    "Συγγνώμη, κάτι πήγε στραβά κατά την αποστολή. Δοκιμάστε ξανά ή στείλτε email απευθείας στο {email}.",
      form_success_sent:"Ευχαριστώ! Το αίτημά σας στάλθηκε — θα απαντήσω εντός 48 ωρών.",
      form_success_mailto: "Ανοίγει η εφαρμογή email σας… αν δεν συμβεί τίποτα, στείλτε email απευθείας στο {email}.",
    },
  };

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* ignore */ }
    const browser = (navigator.language || "en").toLowerCase();
    if (browser.indexOf("el") === 0) return "el";
    return "en";
  }

  function format(str, vars) {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] != null ? String(vars[k]) : "{" + k + "}";
    });
  }

  function t(key, vars) {
    const dict = I18N[currentLang] || I18N.en;
    const fallback = I18N.en;
    const value = (key in dict) ? dict[key] : fallback[key];
    if (value == null) return key;
    return format(value, vars);
  }

  function applyTranslations(root) {
    const scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    scope.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach(function (pair) {
        const parts = pair.trim().split(":");
        if (parts.length !== 2) return;
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = titleEl.textContent;

    document.querySelectorAll("[data-i18n-year]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n-year"), { year: new Date().getFullYear() });
    });

    document.documentElement.setAttribute("lang", currentLang);
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    if (lang === currentLang) return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    applyTranslations();
    updateSwitchUI();
    document.dispatchEvent(new CustomEvent("lapetite:langchange", { detail: { lang: lang } }));
  }

  function updateSwitchUI() {
    document.querySelectorAll(".lang-switch button[data-lang]").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function wireSwitches() {
    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", t("lang_label"));
      group.querySelectorAll("button[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
      });
    });
    updateSwitchUI();
  }

  let currentLang = detectInitialLang();

  window.LaPetite = window.LaPetite || {};
  window.LaPetite.t = t;
  window.LaPetite.setLang = setLang;
  window.LaPetite.getLang = function () { return currentLang; };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyTranslations();
      wireSwitches();
    });
  } else {
    applyTranslations();
    wireSwitches();
  }
})();
