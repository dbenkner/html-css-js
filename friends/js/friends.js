/**
 * Create a Friend class with the following properties
 * - name (string)
 * - email (string)
 * - phone (string)
 *
 * Create an collection of 3 to 5 friends with any values.
 *
 * Iterate through the collection and display each friend
 * in the console.
 */


class Friend {
    constructor(inName, inEmail, inPhone){
        this.name = inName;
        this.email = inEmail;
        this.phone = inPhone;
    }

    print() {
        console.log(`Name: ${this.name} Email: ${this.email} Phone: ${this.phone}`)
    }
}
const friends = [
    new Friend("Steve", "steve@gmail.com", "505-212-1999"),
    new Friend("Bill", "bill@mail.com", "502-921-1971"),
    new Friend("Mike", "mike@mail.com", "505-212-1955")
]
const info = () => {
    console.log("Loading friends list");
}

info();
for(let f of friends) {
    f.print();
}
