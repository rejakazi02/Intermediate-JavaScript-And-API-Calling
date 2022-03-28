 const student = {

    id: 101,
    money: 5000,
    name: 'Raja Mama',
    mejorSubject: 'Mathematics',
    issRich: false,
    subject: ['english', 'economics', 'math 101', 'Calculas'],

    bestFriend: {
        name: 'kundu',
        mejorSubject: 'Mathematics',
    },

    takeExam: function(){
        console.log(this.bestFriend.name, "taking exma");
    },

    treatDey: function(expance) {
        this.money = this.money - expance;
        return this.money;
    }
 }

 student.takeExam();

 const CurrentBlance = student.treatDey(900);
console.log('Current Blance :', CurrentBlance);