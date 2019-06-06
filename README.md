# SimonJS

Das bereits bekannte Spiel Simon Game soll als PWA und mit Web
Components umgesetzt werden. Dabei soll es reichen, wenn die
Applikation aus einem „Screen“ besteht wie in der Abbildung ersichtlich.
Folgend der Ablauf:

Beim Laden der Applikation soll ein Startscreen geladen werden
ähnlich zur Abbildung und ein Button „Start Game“ soll ersichtlich
sein.

Nach Klick auf „Start Game“ soll das Spiel starten und beliebige
Kacheln in Serie animieren und die Benutzerin soll die Möglichkeit
besitzen die Kacheln entsprechend der Reihenfolge nachzuspielen.

Während des Spiels soll der „Start Game“ Button deaktiviert sein
Falls die Benutzerin einen Fehler macht, soll eine Anzeige
erscheinen mit der Aufschrift „Congratulations you did x turns!“
Der Button „Start Game“ soll wieder aktiviert sein und das Spiel
kann von neuem Begonnen werden
Folgendes soll zum Einsatz kommen:
Das Spiel soll vollständig offline verfügbar sein und über Service Worker und Cache verwaltet
sein
Das Spiel soll installierbar sein aus dem Web-Browser heraus, dazu muss ein Web-App
Manifest angelegt werden inkl. Icons
Die einzelnen Bestandteile des Spiels sollen als Web Components verfügbar sein, sowie es
Ihnen als sinnvoll vorkommt. Zumindest soll das Tag <simon-game> existieren.
