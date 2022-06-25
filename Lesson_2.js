console.log('hello');
console.log(true || false)
console.log(false || true)
console.log(true && false && true)
console.log(true && false || true)

if (true && false){
    console.log('1')
} else {
    console.log('2')
}

let dog_show = true
let age = 18
let money = 2000
let dog = false

if (age >= 18 && money == 1000 && dog){
    console.log('Get tecket')
} else if (age < 18) {
    console.log('Early')
} else if (money < 1000) {
    console.log('Keep calm and work hard!!')
} else if (!dog) {
    console.log('Get cat')
} else {
    console.log('Nehay bude')
}

switch (dog_show) {
    case age >= 18:
        console.log('Time to win')
}

count = 0
while (count < 10) {
    //console.log(count, 'Win!')
    if (count % 2 == 0)
    console.log(count, 'even')
    count++
}

mm = [1,2,3,4,6,7,34,9,78]
for (let i = 0; i < 10; i++){
    console.log(mm[i], 'Win!!')
}