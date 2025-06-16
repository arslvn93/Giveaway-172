const config = {
    giveaway: {
        name: "Toronto Blue Jays Tickets Giveaway", // Used for modal, etc.
        heroHeadline: "Win <span class='highlight'>Toronto Blue Jays Tickets</span> at the Canada Day Event!", // Supports HTML
        heroSubheadline: "Celebrate Canada Day with a chance to win tickets to a thrilling Jays game worth $100. Join us at our booth on July 1st!",
        promotionDates: "Promotion runs from June 18, 2025 until July 2, 2025.",
        endDate: "2025-07-02T23:59:59", // Format: YYYY-MM-DDTHH:MM:SS (for countdown)
        heroBackgroundImageUrl: "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
        heroCtaText: "Enter Now to Win!",
        entryFormCtaText: "Count Me In!",
        successModalHeaderText: "🎉 You're In! 🎉",
        successModalMainMessage: "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Good luck!",
        successModalEmailPrompt: "We'll announce the winner via email after July 2, 2025. Keep an eye on your inbox!",
    },
    prize: {
        name: "Toronto Blue Jays $100 Ticket Pack",
        value: "$100 Value",
        description: "Win tickets to experience the excitement of a live Blue Jays game this summer! The prize includes tickets worth $100 to enjoy a day full of baseball thrills with friends or family.",
        images: [
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80", alt: "Blue Jays Stadium View" },
            { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1949&q=80", alt: "Blue Jays Baseball Action" },
            { src: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80", alt: "Fans Cheering at Baseball Game" }
        ],
        includedItems: [
            { icon: "fas fa-ticket-alt", text: "Exclusive $100 ticket pack for a Blue Jays game" },
            { icon: "fas fa-users", text: "Perfect for friends, family, or a fun outing" },
            { icon: "fas fa-baseball-ball", text: "Experience the thrill of Major League Baseball live" },
            { icon: "fas fa-check-circle", text: "No purchase necessary to enter or win" },
            { icon: "fas fa-bolt", text: "Quick and easy entry on-site at Canada Day event!" }
        ],
        limitedTimeOfferText: "⚾ Limited Time Canada Day Giveaway!",
        ctaButtonText: "Count Me In!"
    },
    howToEnter: {
        steps: [
            { icon: "fas fa-map-marker-alt", title: "Visit Our Booth", description: "Join us at the Canada Day event on July 1st and find our booth to enter." },
            { icon: "fas fa-keyboard", title: "Fill the Form", description: "Complete our quick and fun survey at the booth for a chance to win." },
            { icon: "fas fa-calendar-check", title: "Wait for the Draw", description: "The winner will be announced on July 2nd—keep your fingers crossed!" }
        ],
        highlights: [
            { icon: "fas fa-baseball-ball", text: "Experience live baseball excitement" },
            { icon: "fas fa-gift", text: "Win tickets worth $100" },
            { icon: "fas fa-calendar-day", text: "Easy and fast entry at the event" }
        ]
    },
    entryForm: {
        subtitle: "Stop by our booth on July 1st to enter and win Blue Jays tickets!",
        entryCountText: "Join hundreds of baseball fans already entered!",
        socialSharePrompt: "Tell your friends about the giveaway and boost your chances:",
        sharePlatforms: {
            facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
            twitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets this Canada Day!")
        },
        termsText: "By entering, you agree to our <a href='https://www.mls.theskygroup.ca/privacy-policy' target='_blank'>Privacy Policy</a> and <a href='#' target='_blank'>Terms & Conditions</a>."
    },
    rules: {
        fairSelectionInfo: {
            title: "Fair & Square Selection",
            text: "Winner selection is random and unbiased, using certified random number generators to ensure fairness to all participants."
        },
        importantNotice: {
            title: "Winner Notification Reminder",
            text: "The winner will be notified by email after July 2, 2025. Please ensure your contact details are correct and check your email inbox and spam folder regularly."
        },
        faq: [
            { q: "Who can enter?", a: "Open to anyone who enjoys baseball and can attend the Canada Day event on July 1st to enter." },
            { q: "When does the giveaway end?", a: "The giveaway runs from June 18, 2025 to July 2, 2025 at 11:59 PM." },
            { q: "How is the winner chosen?", a: "One winner will be randomly selected from all eligible entries received at the event." },
            { q: "When will the winner be notified?", a: "The winner will be emailed by July 2, 2025 and must claim the prize promptly." },
            { q: "Can I enter more than once?", a: "Only one entry per person is allowed." },
            { q: "Is my info safe?", a: "We respect your privacy and only use your information for this giveaway in accordance with our Privacy Policy." }
        ],
        fullRulesPdfLink: "",
        tips: [
            "Visit our booth early on July 1st to secure your entry.",
            "Double-check your email address before submitting.",
            "Look out for the winner announcement email and add our contact to your address book."
        ]
    },
    footerContact: {
        organizerName: "The Sky Group",
        organizerLogoUrl: "https://www.mls.theskygroup.ca/wp-content/uploads/2021/08/SkyGroupLogo.png",
        email: "shar@theskygroup.ca",
        phone: "1 647 887 4996",
        address: "36 Distillery Lane Unit 500 Toronto M5A3C4",
        social: {
            facebook: "https://www.facebook.com/theskygroupre",
            instagram: "https://www.instagram.com/theskygroup_re"
        },
        copyrightOwner: "The Sky Group"
    },
    meta: {
        pageTitle: "Toronto Blue Jays Tickets Giveaway - Canada Day 2025",
        navBrandLogoText: "The Sky Group",
        privacyPolicyLink: "https://www.mls.theskygroup.ca/privacy-policy",
        termsLink: "#"
    },
    settings: {
        webhookUrl: "https://n8n.salesgenius.co/webhook/giveawayupdate",
        confettiColors: ['#004080', '#E31937', '#FFFFFF'],
        showCountdownInHero: true
    },
    deploymentInfo: {
        repoName: "Giveaway-172",
        repoUrl: "https://github.com/arslvn93/Giveaway-172",
        tag: "Toronto Blue Jays Canada Day Giveaway",
        netlifyUrl: "http://Giveaway-172.netlify.app",
        netlifyId: "1003243217"
    },
    modalQuestions: [
        {
            question: "Which type of local events do you enjoy attending most in Toronto?",
            options: ["Major league sports games", "Food and wine festivals", "Music concerts", "Art exhibitions"]
        },
        {
            question: "On a typical weekend, how do you prefer to spend your time?",
            options: ["Exploring new real estate developments or open houses", "Relaxing at home with friends and family", "Engaging in outdoor activities like hiking or biking", "Dining at trendy restaurants or cafes"]
        },
        {
            question: "How do you typically spend your vacations?",
            options: ["Traveling to international destinations", "Visiting local attractions around Toronto", "Taking staycations in luxury accommodations", "Going on road trips to explore new areas"]
        },
        {
            question: "How involved are you in community activities or neighborhood associations?",
            options: ["Very involved, I attend meetings and events regularly", "Somewhat involved, I participate occasionally", "Not very involved, but I’m interested in what's happening", "Not involved at all"]
        }
    ]
};