// Practice: Doctors
// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const newDoctor = (name, specialty, address) => ({
    "name": name,
    "specialty": specialty,
    "address": address
})

const dave = newDoctor("Dave", "Oncology", "123 Sesame Street")

console.log(dave)
console.log(dave.name)
console.log(dave.specialty)
console.log(dave.address)


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const pet = (name, breed) => ({
    "name": name,
    "breed": breed
})

const scruffyPuppy = pet("Scruffy Puppy", "Fictional")
const clifford = pet("Clifford", "Big Red")
const scooby = pet("Scooby Dooby Doo", "Munchies")

const BowWowKennels = [scruffyPuppy, clifford, scruffyPuppy]

console.log(BowWowKennels)