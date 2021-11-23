class Human {
    name
    gender
    weight
    constructor(name , gender , weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale() {
        return this.gender === 'male' ? true : false;
    }
    setGender(gender) {
        this.gender = gender;
    }
    checkApple(Apple) {
        return !Apple.isEmpty() ? true : false;
    }
    eat(Apple) {
        if (this.checkApple(Apple)) {
            Apple.decrease()
            this.weight += 1;
            this.say('Táo hơi xanh')
        } else {
            this.say('Hết oy !!! Thêm 1 quả nữa đi mừ :<');
        }

    }
    say(String) {
        console.log(String);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    } 
}
