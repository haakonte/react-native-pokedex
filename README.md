# Dokumentasjon

I denne oppgaven har vi videreutviklet vårt prosjekt 3 og satt opp en React Native client. Prosjektet er laget med hensyn til å følge de samme kravene fra prosjekt 3. Repo til prosjekt 3 er [her](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-26/webdev-project-3) hvis en ønsker å se på grunnlaget til dette prosjektet. Det er ikke nødvendig å lese og forstå prosjekt 3 for å gå gjennom prosjekt 4 da denne dokumentasjonen er uavhengig av tidligere prosjekt. 

Vår prosjekt er en PokeDex der du som bruker kan scrolle og lese om pokemon. Vi har en frontend med filter, sortering og søkefunksjonaliteter og en gjenbrukt backend fra tidligere prosjekt. I tillegg kan du lagre brukergenererte data. Nå skal vi gå gjennom vår prosjektstruktur, frontendkode, Backend løsningen, utviklingen generelt, forbedringer fra prosjekt 3 og andre kravspesifikasjoner. 

### **Kjøring** - ENDRINGER???
For å kjøre prosjektet laster en ned prosjektet, laster inn pakkene med npm install og kjører expo start i terminalen. Da vil en få opp identiske QR-koder i terminalen og nettleseren. Ved hjelp av appen ExpoClient, som kan lastes ned fra AppStore/PlayStore, scanner man QR-koden. Da kommer man inn i miljøet for å teste ut vår PokeDex. 
## Prosjektstruktur
Prosjektets relevante kode er listet nedenfor i en oversiktlig struktur.


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

### **Pages**

### **Components**

### **Redux**

## Utvikling

## Forbedringer og endringer
Vi hadde pagination for prosjekt 3 da sider er enkelt å navigere i på nettsider. I denne utviklingen lagde vi scrolling basert på flere hensyn. For det første for å lære og teste ut scrolling, og for det andre fordi scrolling er mye mer mobilvennlig enn å håndtere små sideknapper. 

## Andre krav
