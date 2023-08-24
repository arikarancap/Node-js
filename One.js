class myClass {
    constructor(name) {
        this.name = name;
    }
    myFunc() {
        console.log("this is from class",this.name);
    }
}
module.exports.myClass = myClass;