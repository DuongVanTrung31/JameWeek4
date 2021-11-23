class Apple {
    weight
    constructor(weight) {
        if(weight > 0) {
            this.weight = weight;
        } else {
            console.log('Nhập lại khối lượng quả táo');
            this.weight = 0;
        }
    }
    getWeight() {
        return this.weight;
    }
    decrease() {
        if(!this.isEmpty()){
        this.weight--;
        }
    }   
    isEmpty() {
        return this.getWeight() <= 0 ? true : false;
    }
}