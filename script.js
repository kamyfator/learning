var doge;

class zwierzątko
{
    constructor(imię, dźwięk)
    {
        this.imię = imię;
        this.dźwięk = dźwięk;
    }
    dajGłos()
    {
        document.getElementById("tutaj").innerHTML = this.dźwięk;
    }
}

function funkcja()
{
    doge = new zwierzątko("doge", "wow");
}