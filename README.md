# Dokumentasjon

I denne oppgaven har vi videreutviklet vårt prosjekt 3 og satt opp en React Native client. Prosjektet er laget med hensyn til å følge de samme kravene fra prosjekt 3. Repo til prosjekt 3 er [her](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-26/webdev-project-3) hvis en ønsker å se på grunnlaget til dette prosjektet. Det er ikke nødvendig å lese og forstå prosjekt 3 for å gå gjennom prosjekt 4 da denne dokumentasjonen er uavhengig av tidligere prosjekt. Dette ikonet :construction: i dokumentasjonen viser en oppgradering/forbedring fra prosjekt 3, enten som følge av tilbakemelding eller fordi vi mener det er en hensiktsmessig forbedring. 

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
I likhet med prosjekt 3 har vi en Home page komponent, som bruker service-metoder for å hente
ned aktuelle data som skal displayes. Den fungerer likt som Home page komponenten i prosjekt 3, 
men bruker da React-native ekvivalente komponenter som View for å sette overordnet style, hvilket fungerer omtrent som en <div> i vanlig React, og FlatList som da er ansvarlig for å rendere selve dataene. Innenfor FlatList blir hvert element renderet som et TouchableOpacity element, som vil si at det kan interageres med fra touch.

### **Components**
Man kan argumentere for at hoved-komponentene våre ligger i pages mappen, fordi de er de
mest sentrale for react-native appen. De tar i bruk mange tredjeparts-komponenter, som kreves
for å "oversette" prosjekt 3 til React-native, som  tidligere nevnt i avsnittet om Pages. 
Vi har en komponent som heter Name, som tar i bruk react redux for å holde styr på navnet
man oppretter som bruker.

### **Redux**
Vi har en 

## Utvikling

## Forbedringer og endringer
Vi hadde pagination for prosjekt 3 da sider er enkelt å navigere i på nettsider. I denne utviklingen lagde vi scrolling basert på flere hensyn. For det første for å lære og teste ut scrolling, og for det andre fordi scrolling er mye mer mobilvennlig enn å håndtere små sideknapper. 

## Andre krav
