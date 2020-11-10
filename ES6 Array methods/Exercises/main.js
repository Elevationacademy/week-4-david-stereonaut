//1
const companyNamesEmails = users.map(u => { return { email: u.email, companyName: u.company.name}})
console.log(companyNamesEmails)
//2-3
const fiveInZip = users.filter(u => u.address.zipcode[0] == 5).map(u => u.id)
console.log(fiveInZip)
//4
const firstLetterC = users.map(u => u.name).filter(u => u[0] == "C")
console.log(firstLetterC)
//5
console.log(users.every(u => u.address.city == "South Christy"))
//6
console.log(users.find(u => u.address.suite == "Apt. 950").company.name)
//7
const whereAreTheyNow = function(user){
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
}
users.forEach(whereAreTheyNow)
