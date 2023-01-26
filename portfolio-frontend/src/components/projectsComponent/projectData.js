import fakebook from "../../assets/img/FakebookSS.png"
import woodies from "../../assets/img/woodiesSS.png"
import designShop from "../../assets/img/TheDesignShopSS.png"
import calCalling from "../../assets/img/CalCallingSS.png"
import coffee from "../../assets/img/coffeeSS.png"
import weather from "../../assets/img/weatherSS.png"
import pokemon from "../../assets/img/pokemonSS.png"
import kino from "../../assets/img/kinoSS.png"
import portfolio from "../../assets/img/portfolioSS.png"
import woodiesCode1 from "../../assets/img/detail-img/woodiesCode1.png"
import woodiesCode2 from "../../assets/img/detail-img/woodiesCode2.png"
import woodiesDetail1 from "../../assets/img/detail-img/woodiesDetail1.png"
import woodiesDetail2 from "../../assets/img/detail-img/woodiesDetail2.png"
import pokemonDetail1 from "../../assets/img/detail-img/pokemonDetail1.png"
import pokemonDetail2 from "../../assets/img/detail-img/pokemonDetail2.png"
import pokemonCode1 from "../../assets/img/detail-img/pokemonCode1.png"
import pokemonCode2 from "../../assets/img/detail-img/pokemonCode2.png"
import fakebookDetail1 from "../../assets/img/detail-img/fakebookDetail1.png"
import fakebookDetail2 from "../../assets/img/detail-img/fakebookDetail2.png"
import fakebookCode1 from "../../assets/img/detail-img/fakebookCode1.png"
import fakebookCode2 from "../../assets/img/detail-img/fakebookCode2.png"
import tdsDetail1 from "../../assets/img/detail-img/tdsDetail1.png"
import tdsDetail2 from "../../assets/img/detail-img/tdsDetail2.png"
import tdsCode1 from "../../assets/img/detail-img/tdsCode1.png"
import tdsCode2 from "../../assets/img/detail-img/tdsCode2.png"
import calDetail1 from "../../assets/img/detail-img/calDetail1.png"
import calDetail2 from "../../assets/img/detail-img/calDetail2.png"
import calCode1 from "../../assets/img/detail-img/calCode1.png"
import calCode2 from "../../assets/img/detail-img/calCode2.png"
import coffeeDetail1 from "../../assets/img/detail-img/coffeeDetail1.png"
import coffeeDetail2 from "../../assets/img/detail-img/coffeeDetail2.png"
import coffeeCode1 from "../../assets/img/detail-img/coffeeCode1.png"
import coffeeCode2 from "../../assets/img/detail-img/coffeeCode2.png"
import weatherCode1 from "../../assets/img/detail-img/weatherCode1.png"
import weatherCode2 from "../../assets/img/detail-img/weatherCode2.png"
import weatherDetail1 from "../../assets/img/detail-img/weatherDetail1.png"
import weatherDetail2 from "../../assets/img/detail-img/weatherDetail2.png"
import portfolioEmail1 from "../../assets/img/detail-img/portfolioEmail1.png"
import portfolioCode1 from "../../assets/img/detail-img/portfolioCode1.png"
import portfolioCode2 from "../../assets/img/detail-img/portfolioCode2.png"
import portfolioCode3 from "../../assets/img/detail-img/portfolioCode3.png"
import portfolioDetail1 from "../../assets/img/detail-img/portfolioDetail1.png"
import portfolioDetail2 from "../../assets/img/detail-img/portfolioDetail2.png"
import kinoDetail1 from "../../assets/img/detail-img/kinoDetail1.png"
import kinoDetail2 from "../../assets/img/detail-img/kinoDetail2.png"
import kinoCode1 from "../../assets/img/detail-img/kinoCode1.png"
import kinoCode2 from "../../assets/img/detail-img/kinoCode2.png"

export const projects = [
    {
        "img": fakebook,
        "name": "Fakebook",
        "stack": [
            "#mongodb",
            "#express",
            "#react",
            "#nodejs"
        ],
        "imageGrid": [
            fakebookCode1,
            fakebookDetail1,
            fakebookDetail2,
            fakebookCode2
        ],
        "links": {
            "liveSite": "https://fakebook-frontend-emily.up.railway.app/",
            "repo": "https://github.com/emily-s-codes/fakebook.git",
        },
        "description": {
            "de": "Für dieses offene Projekt konzipierten wir eine App, mit der wir effektiv in MongoDB gespeicherte Daten hinzufügen, bearbeiten und löschen können. Meine Idee war es, ein modernisiertes Rolodex zu implementieren. Ich verwendete JSON-Generator.com, um fake-data zu erstellen und fügte sie der Datenbank hinzu, indem ich sowohl Thunder Client als auch mein eigenes Front-End verwendete.",
            "en": "For this open-ended project we conceptualized an app for which we could effectively add, edit and delete data stored in MongoDB. My idea was to implement a modernized Rolodex. I used JSON-Generator.com to create fake data and added it to the database using both Thunder Client and my own Front-End."
        },
        "V2": {
            "de": [
                "Pagination-Komponente fertigstellen und die in die mobile-Große miteinbinden", "ein cooles Design finden und umsetzen", "eine schönere Desktop-Version formatieren", "Log-In Funktionalität implementieren"
            ],
            "en": [
                "finish pagination component and display in mobile size", "find and implement a cool design", "format a nicer desktop version", "implement log-in functionality"
            ]
        }
    },
    {
        "img": woodies,
        "name": "Woodies",
        "stack": [
            "#react",
            "#css"
        ],
        "imageGrid": [
            woodiesCode1,
            woodiesDetail1,
            woodiesDetail2,
            woodiesCode2],
        "links": {
            "liveSite": "woodies-emily.netlify.app",
            "repo": "https://github.com/emily-s-codes/woodies.git",
        },
        "description": {
            "de": "Dieses Projekt begann als eine HTML/CSS-Bootcamp-Aufgabe mit einem vorgegebenen Design. Ich habe mich entschieden, es zu einem React-Projekt zu erweitern. Das Design ist für Desktop-Anwendungen; ich habe das auch responsive gemacht. ✌🏻",
            "en": "This project began as a bootcamp assignment using only HTML and CSS. I chose to extend it into a React project using the given desktop-first design and made it responsive. ✌🏻"
        },
        "V2": {
            "de": ["funktionierendes Bildkarussell auf der Review Seite", "einzelne Seiten für jede Kategorie", "Newsletter-Abonnement-Funktionalität", "funktionierende Seiten und Links für alle Einträge im Footer"],
            "en": [
                "a functioning carousel for the review page", "individual category pages", "newsletter subscription functionality", "functioning pages and links for all footer listings"
            ]
        }
    },
    {
        "img": designShop,
        "name": "The Design Shop",
        "stack": [
            "#javascript",
            "#html",
            "#css"
        ],
        "imageGrid": [
            tdsCode1,
            tdsDetail1,
            tdsDetail2,
            tdsCode2
        ],
        "links": {
            "liveSite": "https://emily-s-codes.github.io/the_design_shop/",
            "repo": "https://github.com/emily-s-codes/the_design_shop.git",
        },
        "description": {
            "de": "Dieses Projekt wurde uns zugewiesen, um unser Verständnis für die Verwendung von CSS-Grid zu vertiefen. Ich liebe die klaren Linien und das einfache Designs. Darüber hinaus habe ich dies zum Anlass genommen, um zu lernen, wie man ein Burger-Menü einrichtet.",
            "en": "This project was assigned to deepen our understanding of how to use CSS-Grid. I love the clean lines and simplicity of the design. I used this as an opportunity to learn how to implement a burger-menu."
        },
        "V2": {
            "de": [
                "Sortierfunktion implementieren", "für jedes Produkt eine Detail-Seite erstellen, anstatt direkt auf eine externe Website zu verlinken"
            ],
            "en": [
                "implement sort functionality", "make a detail page for each product rather than linking directly to an external site"
            ]
        }
    },
    {
        "img": calCalling,
        "name": "California Calling",
        "stack": [
            "#javascript",
            "#html",
            "#SASS/SCSS"
        ],
        "imageGrid": [
            calDetail1,
            calCode1,
            calCode2,
            calDetail2
        ],
        "links": {
            "liveSite": "https://emily-s-codes.github.io/california-calling/",
            "repo": "https://github.com/emily-s-codes/california-calling.git",
        },
        "description": {
            "de": "Die Herausforderungen bei diesem Projekt bestanden darin: einige einfache Animationen einzubauen; besser zu verstehen, wie man ein Design von einer Figma-Vorlage implementiert; und kreative Entscheidungen zu treffen, wie man das Design für mobile Geräte verkleinern kann.",
            "en": "The challenges for this project were to include some simple animations, to better understand how to implement a design created in Figma, and to make creative choices about how to scale the design down for mobile."
        },
        "V2": {
            "de": [
                "derzeit nicht in Planung"
            ],
            "en": [
                "not currently planned"
            ]
        }
    },
    {
        "img": coffee,
        "name": "The Coffee Connoisseur",
        "stack": [
            "#html",
            "#SASS/SCSS",
            "#bootstrap"
        ],
        "imageGrid": [
            coffeeCode1,
            coffeeDetail1,
            coffeeDetail2,
            coffeeCode2
        ],
        "links": {
            "liveSite": "https://emily-s-codes.github.io/bootstrap_intro/",
            "repo": "https://github.com/emily-s-codes/bootstrap_intro.git",
        },
        "description": {
            "de": "Für diese offene Aufgabe sollten wir eine Landing Page für ein fiktives Unternehmen mit Bootstrap erstellen. Meine Liebe zu allem, was mit Kaffee zu tun hat (und meine Selbsterkenntnis, dass ich ein Snob bin), inspirierte mich zu diesem Entwurf.",
            "en": "For this open assignment we were instructed to create a landing page for a company of our own invention, using Bootstrap. My love of all things coffee (and my self-awareness of my snobbery) inspired this design."
        },
        "V2": {
            "de": [
                "eine Detailseite für jede Kategorie erstellen", "mehrere Produkte für jede Kategorie auflisten", "Warenkorb implementieren", "Login-Funktionalität implementieren", "Responsive Design optimieren"
            ],
            "en": [
                "make a detail page for each category", "list several products for each category, also with their own pages", "implement a shopping cart", "implement log-in functionality", "tweak responsive design"
            ]
        }
    },
    {
        "img": weather,
        "name": "Weather-API-App",
        "stack": [
            "#react",
            "#css"
        ],
        "imageGrid": [
            weatherDetail1,
            weatherCode1,
            weatherCode2,
            weatherDetail2
        ],
        "links": {
            "liveSite": "https://weatherapireact.up.railway.app/",
            "repo": "https://github.com/emily-s-codes/weather_api_react",
        },
        "description": {
            "de": "Für dieses Projekt habe ich die Open Weather Map API verwendet. Es war eine große Herausforderung, die Zeit für die gewählte Stadt korrekt zu formatieren — d.h., nicht auf der Grundlage der IP-Adresse des Website-Besuchers! Ich habe die Funktionalität hinzugefügt, die Einheiten zu ändern und einen Link zu GoogleMaps erstellt, damit man sehen kann, wo genau diese Daten gemessen wurden.",
            "en": "For this project I used the Open Weather Map API. Formatting the time correctly for the city chosen rather than based on the IP address of the website visitor was a big challenge! I added the functionality to change units as well as a link to GoogleMaps so that you can see where exactly this data was measured."
        },
        "V2": {
            "de": [
                "ein cooles Design finden und umsetzen", "eine Visualisierung von Sonnenaufgang und Sonnenuntergang erstellen"
            ],
            "en": [
                "find and implement a cool design", "build a sunrise-sunset visualization"
            ]
        }
    },
    {
        "img": pokemon,
        "name": "Pokemon",
        "stack": [
            "#GroupProject",
            "#react",
            "#css"
        ],
        "imageGrid": [
            pokemonDetail1,
            pokemonCode1,
            pokemonDetail2,
            pokemonCode2
        ],
        "links": {
            "liveSite": "https://pokemon-emily-production.up.railway.app",
            "repo": "https://github.com/emily-s-codes/pokemon-emily",
        },
        "description": {
            "de": "Wir hatten drei Tage Zeit und ein Team von vier Entwicklern, um diese Pokemon-App zu erschaffen. Ich habe die Detailseite programmiert und eine Lösung für den dunklen Modus gefunden, indem ich den State von der SearchBar.js in die App.js verschoben habe. Meine Änderungen sind nun überall im Code zu finden, da ich auch nach unserer Präsentation noch etwas nachgebessert habe.",
            "en": "We were given three days and a team of four developers to create this Pokemon App. I coded the Detail Page and provided a much-needed fix for the dark mode functionality by moving the state from the SearchBar.js to App.js. This project now has my edits all over the code, as I continued tweaking things after we were 'done.'"
        },
        "V2": {
            "de": [
                "Sortierfunktion für Dropdown-Listen auf der Detailseite", "beim Laden der Daten, 'pending' anzeigen"
            ],
            "en": [
                "sort functionality for drop-down lists on detail page", "display 'pending' while data loads"
            ]
        }
    },
    {
        "img": kino,
        "name": "Korner Kino",
        "stack": [
            "#express",
            "#react",
            "#nodejs",
            "#nodemailer"
        ],
        "imageGrid": [
            kinoCode1,
            kinoDetail1,
            kinoDetail2,
            kinoCode2],
        "links": {
            "liveSite": "https://cinema-frontend.up.railway.app",
            "repo": "https://github.com/emily-s-codes/cinema.git",
        },
        "description": {
            "de": "Der größte Teil dieses Projekts ist die Back-End-Funktionalität. Die ursprüngliche Aufgabe bestand darin, einen Sitzplatz mit einem Klick zu reservieren. Ich habe es so erweitert, dass der Kunde die Sitzplatzauswahl (nur im Front-End) bearbeiten kann, bevor er den Kauf abschließt (d. h. im Back-End speichert).",
            "en": "The bulk of this project is the back-end functionality. The original assignment was to reserve a seat with one click. I extended it such that the customer can edit the seat selection (front-end only) before finalizing a purchase (i.e. saving to the back-end)."
        },
        "V2": {
            "de": [
                "Reservierungskalender implementieren", "Admin Log-in einbauen", "Kunden Log-in einbauen", "Seite und Funktionalität zur Verwaltung einer bestehenden Reservierung erstellen", "cooles Design finden und umsetzen", "Fehlerbehebung auf der Admin-Seite: 'available seats' und 'income' funktionieren nicht zuverlässig", "Ladezeit nach 'Confirm' minimieren", "CRUD-Methoden im Bakend in async/await Format aktualisieren"
            ],
            "en": [
                "implement a reservation calendar", "admin log-in", "customer log-in", "create page and functionality to manage an existing reservation", "find and implement a cool design", "fix bugs on the admin page: available seats and total income are unreliable", "reduce the wait time after clicking 'confirm'", "update CRUD methods in backend in async/await format"
            ]
        }
    },
    {
        "img": portfolio,
        "name": "Portfolio",
        "stack": [
            "#express",
            "#react",
            "#nodejs",
            "#nodemailer"
        ],
        "imageGrid": [
            portfolioDetail2,
            portfolioCode1,
            portfolioCode2,
            portfolioDetail1,
            portfolioEmail1,
            portfolioCode3
        ],
        "links": {
            "liveSite": "https://emily-portfolio.up.railway.app/",
            "repo": "https://github.com/emily-s-codes/portfolio-en-de.git",
        },
        "description": {
            "de": "Für mein Portfolio habe ich ein von unserem Kurs bereitgestelltes Desktop-Design verwendet und es erweitert, um es responsive zu machen, und es mit React, Express und Node neu aufgebaut. Ich fügte Funktionalität wie das Burger-Menü und den 'nach-oben-scrollen' Pfeil hinzu.",
            "en": "For my portfolio I used a desktop-design provided by our course and expanded it to make it responsive and rebuilt it using React, Express and Node. I added features like the Burger Menu and the return-to-top arrow."
        },
        "V2": {
            "de": [
                "E-Mail-Funktionalität aus dem Betatest (Nodemailer) in den funktionalen E-Mail-Versand", "CV-Download (in der aktuell angezeigten Sprache) auf Klick", "Burger-Menü Links von der Detail-Seite korrigieren"
            ],
            "en": [
                "move email functionality out of beta testing with nodemailer and into functional emailing", "CV download on click, in language currently shown", "fix so that the links from the detail page lead to the homepage"
            ]
        }
    }
]