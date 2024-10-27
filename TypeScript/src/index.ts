type Hero = {
    name: string,
    nickname: string
}

function printHero(hero : Hero) : void {
    console.log(hero);
}

printHero({
    name: "Bruce Wayner",
    nickname: "Batman"
})