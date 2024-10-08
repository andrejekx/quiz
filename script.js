document.addEventListener('DOMContentLoaded', () => {
    // Baza danych w postaci tablicy w JavaScript
    const words = [
        { polish: "nazwa, nazwisko", english: "name (nejm)" },
        { polish: "bardzo", english: "very (weri)" },
        { polish: "do,ku,na,po,za,dla,przy,aby,żeby", english: "to (tu)" },
        { polish: "przez,poprzez", english: "through (fru)" },
        { polish: "i", english: "and (end)" },
        { polish: "tylko,właśnie", english: "just (dżast)" },
        { polish: "forma,tworzyć", english: "form (form)" },
        { polish: "w", english: "in (yn)" },
        { polish: "zdanie", english: "sentence (sentens)" },
        { polish: "it", english: "to (yt)" },
        { polish: "świetnie", english: "great (grejt)" },
        { polish: "myśleć,uważać", english: "think (fynk)" },
        { polish: "mówić,powiedzieć", english: "say (sej)" },
        { polish: "że,ten,tamten,to,który", english: "that (wet)" },
	{ polish: "pomoc,pomagać", english: "help (help" },
	{ polish: "niski,cichy,nisko,cicho,przygnębiony", english: "low (loł)" },
	{ polish: "linia,lina,kolejka,rząd", english: "line (lajn)" },
	{ polish: "dla,do,po", english: "for (for)" },
	{ polish: "różnić się", english: "differ (dyfer)" },
	{ polish: "na", english: "on (on)" },
	{ polish: "skręcić,zakręt,obrót", english: "turn (tern)" },
	{ polish: "przyczyna,powód,pot.ponieważ", english: "cause (koz)" },
	{ polish: "z", english: "with (łyf)" },
	{ polish: "dużo", english: "much (macz)" },
	{ polish: "kiedy,gdy,ponieważ,tak jak", english: "as (ez)" },
	{ polish: "znaczyć,skąpy,złośliwy,średni", english: "mean (min)" },
	{ polish: "przed", english: "before (bifor)" },
	{ polish: "jego", english: "his (hys)" },
	{ polish: "ruszać,ruch", english: "move (muw)" },
	{ polish: "oni", english: "they (wej)" },
	{ polish: "prawy,poprawny,dobry", english: "right (rajt)" },
	{ polish: "być", english: "be (bi)" },
	{ polish: "chłopiec", english: "boy (boj)" },
	{ polish: "przy,w,o,na", english: "at (et)" },
	{ polish: "stary", english: "old (old)" },
	{ polish: "jeden", english: "one (łan)" },
	{ polish: "także,za", english: "too (tu)" },
	{ polish: "mieć", english: "have (hew)" },
	{ polish: "ten sam,taki sam", english: "same (sejm)" },
	{ polish: "ten,ta", english: "this (dys)" },
	{ polish: "powiedzieć", english: "tell (tel)" },
	{ polish: "od,z", english: "from (from)" },
	{ polish: "albo", english: "or (or)" },
	{ polish: "komplet,grupa", english: "set (set)" },
	{ polish: "trzy", english: "three (fri)" },
	{ polish: "przez", english: "by (baj)" },
	{ polish: "chcieć", english: "want (łont)" },
	{ polish: "gorący", english: "hot (hot)" },
	{ polish: "powietrze", english: "air (er)" },
	{ polish: "słowo", english: "word (łerd)" },
	{ polish: "cóż,dobrze", english: "well (łel)" },
	{ polish: "ale", english: "but (bat)" },
	{ polish: "także", english: "also (olso)" },
	{ polish: "co", english: "what (łot)" },
	{ polish: "grać,gra", english: "play (plej)" },
	{ polish: "kilka,niektóre", english: "some (sam)" },
	{ polish: "małe", english: "small (smol" },
	{ polish: "konic, kończyć", english: "end (end)" },
	{ polish: "umieć,potrafić", english: "can (ken)" },
	{ polish: "na zewnątrz", english: "out (ałt)" },
	{ polish: "dom", english: "home (hołm)" },
	{ polish: "inne", english: "other (awer)" },
	{ polish: "czytać", english: "read (rid)" },
	{ polish: "byli,byłeś", english: "were (łer)" },
	{ polish: "dłoń", english: "hand (hend)" },
	{ polish: "wszystko", english: "all (ol)" },
	{ polish: "port", english: "port (port)" },
	{ polish: "tam", english: "there (wer)" },
	{ polish: "olbrzymi", english: "large (lardż)" },
	{ polish: "kiedy,gdy", english: "when (łen)" },
	{ polish: "literować,zaklęcie", english: "spell (spel)" },
	{ polish: "na górę", english: "up (ap)" },
	{ polish: "dodać", english: "add (ed)" },
	{ polish: "używać,użyć", english: "use (juz)" },
	{ polish: "nawet,równy", english: "even (iwen)" },
	{ polish: "twój", english: "your (jor)" },
	{ polish: "ziemia,lądować", english: "land (lend)" },
	{ polish: "jak", english: "how (hał)" },
	{ polish: "tutaj", english: "here (hir)" },
	{ polish: "powiedział", english: "said (sed)" },
	{ polish: "musieć", english: "must (mast)" },
	{ polish: "duży", english: "big (byg)" },
	{ polish: "każdy", english: "each (icz)" },
	{ polish: "wysoki,wysoko", english: "high (haj" },
	{ polish: "ona", english: "she (szi)" },
	{ polish: "taki", english: "such (sacz)" },

    ];

    // Funkcja do losowania unikalnych słów
    function getRandomWords(wordsArray, count) {
        const result = [];
        const availableIndexes = [...Array(wordsArray.length).keys()]; // Tworzymy tablicę indeksów

        for (let i = 0; i < count; i++) {
            // Losujemy indeks
            const randomIndex = Math.floor(Math.random() * availableIndexes.length);
            // Wybieramy słowo z tablicy na podstawie wylosowanego indeksu
            result.push(wordsArray[availableIndexes[randomIndex]]);
            // Usuwamy ten indeks, aby się nie powtórzył
            availableIndexes.splice(randomIndex, 1);
        }

        return result;
    }

    // Wyciągamy 10 losowych słów
    const randomWords = getRandomWords(words, 10);

    // Tworzymy listę słówek na podstawie losowej selekcji
    const wordList = document.querySelector('.word-list');
    randomWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('word');
        wordElement.setAttribute('data-translation', word.english);
        wordElement.textContent = word.polish;
        wordList.appendChild(wordElement);
    });
    // Funkcja do odświeżania strony po kliknięciu przycisku
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', () => {
        location.reload(); // Odśwież stronę
    });
});
