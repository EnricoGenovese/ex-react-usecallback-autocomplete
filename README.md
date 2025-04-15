Premessa: 
Stai sviluppando un campo di ricerca intelligente simile a quello di Amazon. Quando l'utente digita, una tendina di suggerimenti mostra i prodotti corrispondenti alla ricerca. Per evitare richieste API eccessive, devi ottimizzare la ricerca con il debounce.

Milestone 1: Creare un campo di ricerca e mostrare la lista dei suggerimenti
Crea un campo di input (<input type="text">) in cui l’utente può digitare.

Effettua una chiamata API a: 
https://boolean-spec-frontend.vercel.app/freetestapi/products?search=[query]

La query deve essere sostituita con il testo digitato.
Mostra i risultati API sotto l'input in una tendina di suggerimenti.

Se l'utente cancella il testo, la tendina scompare.


Obiettivo: Mostrare suggerimenti dinamici in base alla ricerca dell'utente.