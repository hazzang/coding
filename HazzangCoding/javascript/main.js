class Counter {
    constructor(runEveryFiveTimes) {
        this.Counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(){
        this.Counter++;
        console.log(this.Counter);
        if(this.Counter % 5 === 0){
            this.callback && this.callback(this.Counter);
        }
    }
}

function printSomething(num){
    console.log(`WoW ${num} sxy`);
}

function alertNum() {
    alert(`alert! ${num}`);
}

const coolCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
