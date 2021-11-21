# Dokumentasjon

I denne oppgaven har vi videreutviklet vårt prosjekt 3 og satt opp en React Native client. Prosjektet er laget med hensyn til å følge de samme kravene fra prosjekt 3. Repo til prosjekt 3 er [her](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-26/webdev-project-3) hvis en ønsker å se på grunnlaget til dette prosjektet. Det er ikke nødvendig å lese og forstå prosjekt 3 for å gå gjennom prosjekt 4 da denne dokumentasjonen er uavhengig av tidligere prosjekt. Dette ikonet :construction: i dokumentasjonen viser en oppgradering fra prosjekt 3, enten som følge av tilbakemelding eller fordi vi mener det er en hensiktsmessig forbedring.

Vårt prosjekt er en PokeDex der du som bruker kan scrolle og lese om pokemon. Vi har en frontend med filter, sortering og søkefunksjonaliteter og en gjenbrukt backend fra tidligere prosjekt. I tillegg kan du lagre brukergenererte data. Nå skal vi gå gjennom vår prosjektstruktur, frontendkode, backend-løsningen, utviklingen generelt og andre forbedringer fra prosjekt 3.

### **Kjøring** - ENDRINGER??? :space_invader:

For å kjøre prosjektet laster en ned prosjektet, laster inn pakkene med npm install og kjører expo start i terminalen. Da vil en få opp identiske QR-koder i terminalen og nettleseren. Ved hjelp av appen Expo, som kan lastes ned fra AppStore/PlayStore, scanner man QR-koden. Da kommer man inn i miljøet for å teste ut vår PokeDex.

## Prosjektstruktur :space_invader:

Prosjektets relevante kode er listet nedenfor i en oversiktlig struktur. Vi vil nå gå gjennom hver del i større detalj.

    .
    ├── components
    │   └── filter.tsx
    ├── pages
    │   ├── Home.tsx
    │   └── Pokeinfo.tsx
    ├── services
    │   └── pokemon_api.tsx
    ├── App.tsx
    └── README.md

## React Native frontend

### **App.tsx**

I _App.tsx_ har vi importert _NavigationContainer_ og _createStackNavigator_ for å lage en løsning som gjør det enkelt å bytte mellom skjermer. I dette prosjektet så bytter man skjerm fra hjemmesiden til en spesifkk infoside for hver pokemon. Disse importerte verktøyene for React Native gir prosjektet vårt lik oppførsel som _HashRouter_, _Switch_ og _Route_ gjør i vanlig React fra prosjekt 3.

### **Pages**

I mappen _Pages_ finner vi _Home.tsx_ og _Pokeinfo.tsx_ som er koden for de ulike skjermene som _App.tsx_ bruker for å bytte mellom skjermer.
Det er i _Home.tsx_ appen bruker en useEffect for å hente riktig antall pokemon i henhold til filtreringer, sorteringer og søk. Alle disse brukervalgene finner en på hjemskjermen. Søkemetoden er lagt konstant øverst på skjermen slik som for vår web-løsning i prosjekt 3.

:construction: Ulikt fra prosjekt 3 så har vi for filtrering og sortering laget en egen knapp som utvides for å gi alle brukermulighetene. Da mobilskjemer er små blir det tungvint å vise alle brukervalgene for mobil øverst på siden. Vi synes at en clickable icon som gir flere filtrerings og sorteringsvalg er en klokere løsning da det ikke skremmer brukeren med alle mulighetene. Sortering er derimot satt fast på skjermen da vi synes dette er den viktigste filtreringsmetoden.

:construction: Vi har forbedret søkefunksjonen ... slik at filter og søk ikke overgår hverandre???? WIP må vi endre service apiet?? håkon?? :space_invader:

:construction: Vi har brukt scrolling for å dynamisk laste inn 20 nye pokemon. I prosjekt 3 brukte vi pagination da sider er enkelt å navigere i på nettsider. Vi mener at scrolling er en mer hensiktsmessig metode for mobilskjermer da scrolling er mer mobilvennlig enn å håndtere små sideknapper. Dessuten ga det oss mulighet til å lære og teste ut scrolling og ikke kun gjenbruke gamle løsninger.

:construction: Vi har endret metoden for å klikke inn på en pokemon for å lese og gi tilbakemeldinger. I prosjekt 3 hadde vi en "Les mer"-knapp. I prosjekt 4 har vi fjernet "Les mer"-knappen og heller gjort hele pokemon-objektet clickable ved hjelp av _TouchableOpacity_. Dette er mer mobilvennlig da det gir større flater å klikke på samt at det er intuitivt å klikke på pokemonobjektene når vi har satt de inn i en oransj ramme.

I _Pokeinfo.tsx_ er det laget en standard informasjonsside om den valgte pokemon. Her hentes data fra vårt pokemon api _fetchSinglePokemon_ for å vise ulik informasjon. Det er også mulig å gi en tilbakemelding på pokemonen i form av stjerner og tekst. Tidligere reviews er også synlig på skjermen for valgte pokemon.

:construction: I prosjekt 3 var dataene om pokemon ikke satt opp i en tydelig tabell. Dette tenkte vi å løse med CSS-grid layout i prosjekt 4. Da oppdaget vi at React Native ikke støtter grid layout. Løsningen ble derfor å bruke flexbox, men å lage to ulike _Text_-komponenter og sette de ved siden av hverandre for å gi en mer oversiktlig og romslig "tabell".

:construction: I prosjekt 3 kunne en se reviews-overskriften selv om det ikke var noen reviews om Pokemonen. Det er nå fikset slik at overskriften dukker kun opp hvis det eksisterer en review for pokemonen.

### **Components**

I denne mappa ligger det React-komponenter som blir brukt på hjemmesiden og den utvidede informasjonssiden om Pokemon. Da [MaterialUI](https://mui.com/) ikke er kompatibelt med React Native har vi søkt og brukt andre pakker for å lage komponenter, spesielt [reactnative.dev](https://reactnative.dev/) har mange komponenter som vi har brukt i utvklingen.

_Filter.tsx_ brukes til å filtere pokemon på hjemskjermen.
I likhet med prosjekt 3 har vi en Home page komponent, som bruker service-metoder for å hente
ned aktuelle data som skal displayes. Den fungerer likt som Home page komponenten i prosjekt 3,
men bruker da React-native ekvivalente komponenter som View for å sette overordnet style, hvilket fungerer omtrent som en <div> i vanlig React, og FlatList som da er ansvarlig for å rendere selve dataene. Innenfor FlatList blir hvert element renderet som et TouchableOpacity element, som vil si at det kan interageres med fra touch.

### **Redux**

Vi bruker Redux til å lagre globale dataen navnet til brukeren. I _name.tsx_ som ble brukt ved å gi tilbakemeldinger om Pokemon.

### **Services**

I denne mappa ligger _pokemon_api.tsx_. Her har vi definert ulike graphQL queries samt funksjoner som kjører queries mot serveren. Sistnevnte eksporteres ut av modulen slik at de blir enkelt tilgjengelige for komponentene som har behov for dem. Vi har mulighet til å hente alle pokemon, en spesifikk pokemon, filtrere pokemon på type og legge til en tilbakemelding om pokemon.

## Backend

Som nevnt tidligere er backendløsningen vår den samma som fra prosjekt 3.

### Server

Vi kjører en enkel apollo server der vi definerer dataene våre. Vi bruker apollo server siden det gjør det enkelt å lage graphQL endpoints. Vi har en del graphQL kall som er knyttet til samme datatype, slik som alle queries som er relatert til type Pokemon. Derfor er det fordelaktig å definere alle queries og mutasjoner knyttet til samhandling mellom graphQL og MongoDB i samme resolver. Alle typene og mutasjonene er også ganske like. Det er i tillegg ikke så mange typer og mutasjoner slik at vi synes det er hensiktsmessig å samle dette i en graphQL streng.

### Database

Databasen er en enkel _MongoDB_ instans som kjører lokalt i VM-en. Den har to kolleksjoner, _clusters_ og _reviews_. Clusters ble med _MongoImport_ og _compass_ populert med en liste over alle 151 pokemon med masse attributter som en kolleksjon. Det er clusters som queries bruker når vi kjører graphQL fra apollo serveren. Kolleksjonen som heter reviews inneholder tilbakemeldinger av pokemon. Vi valgte denne løsningen fordi apollo med graphQL og en instans av MongoDB samhandler veldig bra, og en kan bruke lett forståelige metoder fra _mongoose_ i mapping fra graphQL til Mongo.

## Tester

## Utvikling
