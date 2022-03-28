



const kibriya = {

    id: 101,
    Name: 'Kibriya mama',
    money: 5000,
    treatDey: function (expence, boksis, tax) {
        this.money = this.money - expence - boksis - tax;
        console.log(this)
        return this.money;
    }
};

const hero = {

    id: 102,
    Name: 'hero mama',
    money: 8000,

};

// Using bind Method 

kibriya.treatDey(1000, 100, 50);

const heroTreatDey = kibriya.treatDey.bind(hero);
heroTreatDey(2000, 200, 100);

// Using Call method

kibriya.treatDey.call(kibriya, 500, 100, 50);
kibriya.treatDey.call(hero, 500, 100, 50);

// Using Apply Method 

kibriya.treatDey.apply(kibriya, [1000, 200, 100]);
kibriya.treatDey.apply(hero, [1000, 200, 100]);




