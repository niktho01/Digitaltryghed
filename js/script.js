// Digital Tryghed - Et samlet, handlingsdrevet narrativ

function resetState() {}

const scenes = {
    // --- KAPITEL 1: ANKOMST & DEADLINE ---
    'start_morning': {
        title: "Kl. 08:30: Kampen mod Uret ⏰",
        text: "Det er fredag d. 8. maj, kl. 08:30. Du ankommer til akademiet med bankende hjerte. Jeres MMD semesterprojekt skal afleveres kl. 12:00 præcis! Din makker Mette sveder allerede over jeres Figma-fil. Du åbner din bærbare for at uploade de sidste tekster, men skolens netværk er nede.",
        image: "images/tid.jpg",
        choices: [
            { text: "Eduroam virker ikke. Forbind til gæstenetværket 'Academy_Free_Wifi' for at komme på i en fart!", nextScene: 'scene_bad_wifi' },
            { text: "Brug dit eget mobile hotspot. Det er sikrere end åbne netværk, når der er krise.", nextScene: 'scene_mette_panic' }
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
        image: "images/hacked.jpg",
        choices: [ { text: "Prøv forfra ➔", nextScene: 'start_morning' } ]
    },

   
}
