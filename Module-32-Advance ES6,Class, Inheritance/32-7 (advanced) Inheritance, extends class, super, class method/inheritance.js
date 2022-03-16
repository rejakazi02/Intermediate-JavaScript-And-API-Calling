

class TeamMember {
    name;
    designatin = "support web Dev";
    address = "Bd";

    // CONOSTRUCTOR CREAT HERE

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    // THIS IS FUNCTION START HERE

    startSession() {
        console.log(this.name, "start a support session");
    }
}

class StudentCare extends TeamMember {
    buildRoutine(student) {
        console.log(this.name, "Built a routine for", student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, "Release App version", version);
    }
}

// Support CLASS CALL HERE

const aamir = new Support("Ammir", "Dubai", 11);
const salman = new Support("Salman", "Bd");

const alia = new StudentCare("alia vat", "Mumbai");

const ash = new NeptuneDev("Ash", "Mumbai", "Android Studio");

console.log(ash);

ash.releaseApp("1.4.5");






