


const kibriya = {

    id: 101,
    Name: 'Kibriya mama',
    money: 5000,
    treatDey: function (expence) {
      this.money = this.money - expence;
      console.log(this)
      return this.money;  
    }
};

const hero = {

    id: 102,
    Name: 'hero mama',
    money: 8000,

};




kibriya.treatDey(1000);

const heroTreatDey = kibriya.treatDey.bind(hero);
heroTreatDey(2000);
heroTreatDey(1000);
heroTreatDey(1000);






