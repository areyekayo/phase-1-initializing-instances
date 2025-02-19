// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.#dessert = dessert;
        this.salad = salad;
        this.soup = soup;
        this.entree = entree
    }
}

let mondayBreakfast = new Breakfast("scrambled eggs", "black tea")
let mondayLunch = new Lunch("argulula, goat cheese and cranberries", "potato leek soup", "iced tea")
let mondayDinner = new Dinner("caesar salad", "chicken noodle soup", "steak", "fudge sundae")
