const millisecond = 1;
const second = 1000 * millisecond;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 24 * day;

class TimeTickerCallback{
    constructor(duration){
        this.duration= duration;
        this.listeners = [];
        this.intervalId = setInterval(() => {
            this.listeners.filter(x => x).forEach(l => l())
        }, this.duration);
    }

    listen(callback) {
        const id = this.listeners.length;
        this.listeners.push(callback);
        return id;
    }

    stopListening(id) {
        this.listeners = [...this.listeners.slice(0, id), ...this.listeners.slice(id+1)];
    }

    destroy() {
        clearInterval(this.intervalId);
    }
}

class TimeTickerList{
    constructor(duration){
        this.duration= duration;
        this.ticks = [];
        this.intervalId = setInterval(() => {
            this.ticks.push(Date.now())
        }, this.duration);
    }

    destroy() {
        clearInterval(this.intervalId);
    }
}

module.exports = {
    millisecond,
    second,
    minute,
    hour,
    day,
    week,
    TimeTickerCallback,
    TimeTickerList
}
