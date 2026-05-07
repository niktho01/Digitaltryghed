

function resetState() {}

const scenes = {
    // --- KAPITEL 1: ANKOMST & DEADLINE ---
    'start_morning': {
        title: "Kl. 08:30: Kampen mod Uret ⏰",
        text: "Det er fredag d. 8. maj, kl. 08:30. Du ankommer til akademiet med bankende hjerte. Jeres MMD semesterprojekt skal afleveres kl. 12:00 præcis! Din makker Peter sveder allerede over jeres Figma-fil. Du åbner din bærbare for at uploade de sidste tekster, men skolens netværk er nede.",
        image: "images/tid.jpg",
        choices: [
            { text: "IBA's Wi-Fi med kode virker ikke. Forbind til gæstenetværket 'IBA_Free_Wifi' for at komme på i en fart!", nextScene: 'scene_bad_wifi' },
            { text: "Brug dit eget mobile hotspot. Det er sikrere end åbne netværk, når der er krise.", nextScene: 'scene_peter_panic' }
        ]
    },

    // --- KAPITEL 2A (HVIS ÅBENT NETVÆRK) ---
    'scene_bad_wifi': {
        title: "Kl. 09:15: Filerne forsvinder 😱",
        text: "Du kom hurtigt på det åbne gæstenetværk. Men netop som du uploader dokumenterne, fryser din browser. En popup advarer om en ubeskyttet forbindelse, og pludselig kan du se musen bevæge sig af sig selv. Nogen på netværket forsøger at overtage din computer!",
        image: "images/hacked.jpg",
        choices: [
            { text: "Riv internetforbindelsen, sluk Wi-Fi, og tag en lokal backup på et USB-stik!", nextScene: 'scene_usb_panic' },
            { text: "Ignorer det og klik 'Fortsæt'. Hvis du bare skynder dig at uploade, kan de ikke nå at gøre skade.", nextScene: 'ending_hacked' }
        ]
    },
    'ending_hacked': {
        title: "Slutning: Opgaven Slettet! 💀",
        text: "Kæmpe fejl. Ved at ignorere advarslen gav du hackeren fuld adgang. Inden du nåede at uploade, blev hele din harddisk slettet. I dumper semesteret.",
        image: "images/idumper.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

    // --- KAPITEL 2B (HVIS MOBILT HOTSPOT) ---
    'scene_peter_panic': {
        title: "Kl. 09:15: Peters Panik 📧",
        text: "Du er kommet sikkert på dit hotspot. Men Peter udbryder: 'Åh nej! Jeg har lige fået en mail fra IT-support. Mit login lukkes ned OM 10 MINUTTER pga. inaktivitet, hvis jeg ikke verificerer det på linket her! Vi kan ikke aflevere, hvis mit login forsvinder!'",
        image: "images/mail.jpg",
        choices: [
            { text: "'Klik på linket og log ind! Vi har ikke tid til IT-problemer lige før en aflevering!'", nextScene: 'scene_ransomware' },
            { text: "'Vent, Peter! Lad os lige tjekke om det her overhovedet er fra IT.'", nextScene: 'scene_check_sender' }
        ]
    },
    'scene_ransomware': {
        title: "Kl. 10:00: Ransomware Angreb! 🦠",
        text: "Peter klikkede. Skærmen går i sort, og et rødt blinkende vindue toner frem. 'DINE FILER ER KRYPTERET. OVERFØR BITCOIN'. Alt jeres arbejde fra de sidste 3 uger er låst som gidsel!",
        image: "images/hacked.jpg",
        choices: [
            { text: "Kobl maskinen fra nettet og løb ned til IT-afdelingen. Projektet er tabt, men skolen skal reddes.", nextScene: 'ending_missed_deadline' },
            { text: "Prøv at overføre penge til dem i håb om at de låser op inden kl. 12.", nextScene: 'ending_scammed' }
        ]
    },
    'ending_missed_deadline': {
        title: "Slutning: Helt, men dumpet 📉",
        text: "I reddede skolens system fra at blive inficeret ved at koble fra nettet i tide. IT-afdelingen takker jer, men jeres filer er væk, og deadline er overskredet.",
        image: "images/notintime.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },
    'ending_scammed': {
        title: "Slutning: Dobbelt Tab 💸",
        text: "I betalte hackeren, men som forventet skete der ingenting. De låste ikke filerne op. Nu har I både mistet jeres penge og jeres eksamensprojekt.",
        image: "images/moneyhack.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

    // --- KAPITEL 3 (BACKUP SCENE EFTER HACK FORSØG) ---
    'scene_usb_panic': {
        title: "Kl. 10:00: En 'Heldig' Redning? 💾",
        text: "Du afbrød nettet og reddede maskinen! Men du er rystet. Peter rækker dig en ekstern harddisk, han fandt på gangen i morges. 'Brug det her til at tage en lokal backup, for en sikkerheds skyld!'",
        image: "images/USB.jpg",
        choices: [
            { text: "Sæt harddisken til computeren. Hellere en ekstra backup før aflevering.", nextScene: 'ending_badusb' },
            { text: "Nej tak! Man sætter ALDRIG ukendte USB-stik eller harddiske i sin pc. Jeg lægger det op på mit eget sikre drev i stedet.", nextScene: 'scene_tailgate' }
        ]
    },
    'ending_badusb': {
        title: "Slutning: BadUSB Katastrofen 🔌",
        text: "Så snart USB-stikket kom i, brændte din computers bundkort sammen. Det var et ondsindet 'Killer-USB', der sender strømstød gennem maskinen. Opgaven er tabt for evigt.",
        image: "images/corrupted-data-usb.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

    // --- KAPITEL 2.5: PHISHING TJEK (UDVIDELSE AF SOCIAL ENGINEERING) ---
    'scene_check_sender': {
        title: "Kl. 09:20: Tjek Afsenderen 🔍",
        text: "Peter er ved at klikke. Du kigger hurtigt over hans skulder på afsenderens mailadresse. Den ser lidt mærkelig ud: 'LNVK@iba-official.dk'. Er det den rigtige?",
        image: "images/mailfake.png",
        choices: [
            { text: "Ja, det lyder officielt nok. Klik på linket så vi kan komme videre!", nextScene: 'scene_ransomware' },
            { text: "Nej, det er fup! Skolens IT bruger altid '@iba.dk'. Slet mailen med det samme.", nextScene: 'scene_tailgate' }
        ]
    },

    // --- KAPITEL 3.5: FYSISK SIKKERHED (TAILGATING) ---
    'scene_tailgate': {
        title: "Kl. 10:45: En ukendt person 👤",
        text: "Du er på vej ind i den aflåste studiezone. En person med en kaffekop i hånden skynder sig hen mod døren og spørger: 'Hov, kan du ikke lige holde døren? Jeg har glemt mit adgangskort!'",
        image: "images/mandmedkaffe.jpg",
        choices: [
            { text: "Hold døren for ham. Det er almindelig høflighed mellem studerende.", nextScene: 'ending_physical_sabotage' },
            { text: "Bed ham venligt om at bruge sit eget kort. Du kender ham ikke, og sikkerheden kommer først.", nextScene: 'scene_lunch_relief' }
        ]
    },
    'ending_physical_sabotage': {
        title: "Slutning: Den 'Høflige' Fejl 🤡",
        text: "Det var en fejl at holde døren. Den fremmede var ikke studerende, men en udefrakommende der udnyttede din høflighed (Tailgating). Han har nu fri adgang til jeres computere i lokalet.",
        image: "images/datatyv.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

    // --- KAPITEL 4 (SIDSTE ETAPE - FYSISK SIKKERHED) ---
    'scene_lunch_relief': {
        title: "Kl. 11:30: Den Sidste Finish 🍔",
        text: "Puha! I har undgået alle katastrofer. Projektet er nu 99% færdigt, og der er en halv time til deadline. I aftaler at fejre det med at hente kaffe i kantinen, inden I trykker 'Aflevér'. Din computer står åben i studiezonen.",
        image: "images/lockpc.jpg",
        choices: [
            { text: "Lås skærmen (Win+L / Mac-lås). Man skal altid sikre sin maskine, selvom man kun er væk i 5 min.", nextScene: 'ending_success' },
            { text: "Lad den stå åben. Kantinen er kun lige nede af gangen, og det tager for lang tid at logge ind igen.", nextScene: 'ending_sabotage' }
        ]
    },
    'ending_sabotage': {
        title: "Slutning: Fjendens Værk 🤡",
        text: "Da I kom tilbage med kaffen, var Figma-fanen lukket, og hele jeres redegørelse var slettet af en 'sjov' forbipasserende. Klokken slår 12:00... I nåede det ikke.",
        image: "images/datatyv.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

    // --- OVERALL SUCCESS ---
    'ending_success': {
        title: "Kl. 12:00: Afleveret i Tide! 🏆",
        text: "Klokken slår 12:00, og I har trykket 'Aflevér' på Canvas! Du navigerede igennem falske netværk, stoppede Peters phishing-forsøg, undgik mystiske USB-stik og huskede fysisk sikkerhed. I er digitalt trygge!",
        image: "images/celebrate.jpg",
        choices: [ { text: "Spil igen ➔", nextScene: 'start_morning' } ]
    }
};

// DOM Elements
let overlay, closeBtn, choicesContainer, sceneText, sceneImageContainer;

document.addEventListener('DOMContentLoaded', () => {
    overlay = document.getElementById('game-overlay');
    closeBtn = document.getElementById('close-game');
    choicesContainer = document.getElementById('choices-container');
    sceneText = document.getElementById('scene-text');
    sceneImageContainer = document.getElementById('scene-image');

    const startBtns = document.querySelectorAll('.nav-cta, .hero-card .btn-main, .hero-v3 .btn-main');
    const guideBtn = document.querySelector('.btn-link');
    const guideModal = document.getElementById('guide-modal');
    const closeGuideBtn = document.getElementById('close-guide');
    const startFromGuideBtn = document.getElementById('start-from-guide');

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Luk menu når man klikker på et link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    startBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (overlay) {
                e.preventDefault();
                overlay.classList.remove('hidden');
                renderScene('start_morning');
            }
        });
    });

    if (guideBtn && guideModal) {
        guideBtn.addEventListener('click', (e) => {
            e.preventDefault();
            guideModal.classList.remove('hidden');
        });
    }

    if (closeGuideBtn) {
        closeGuideBtn.addEventListener('click', () => {
            guideModal.classList.add('hidden');
        });
    }

    if (startFromGuideBtn) {
        startFromGuideBtn.addEventListener('click', () => {
            guideModal.classList.add('hidden');
            overlay.classList.remove('hidden');
            renderScene('start_morning');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.add('hidden');
        });
    }

    // Tjek om vi skal starte spillet automatisk (f.eks. ved redirect fra kontakt-side)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('start') === 'true' && overlay) {
        overlay.classList.remove('hidden');
        renderScene('start_morning');
    }
});

function renderScene(sceneKey) {
    let scene = scenes[sceneKey];

    if (scene.image) {
        sceneImageContainer.innerHTML = `<img src="${scene.image}" alt="Scenarie Billede">`;
        sceneImageContainer.style.display = 'flex';
    } else {
        sceneImageContainer.style.display = 'none';
    }

    sceneText.innerHTML = `<h1>${scene.title}</h1><div>${scene.text}</div>`;
    
    choicesContainer.innerHTML = '';
    
    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'btn-choice';
        btn.textContent = choice.text;
        
        btn.addEventListener('click', () => {
            renderScene(choice.nextScene);
        });
        
        choicesContainer.appendChild(btn);
    });
}
