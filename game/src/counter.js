class Counter {
    constructor() {
        this.v = 999999999999999999999999999;
        this.va = 99999999999999999999999999;
        this.multiplier = 9999999999999999999999999;

        setInterval(this.update.bind(this), 10);
    }

    evaluateItems() {
        this.va = 99999999999999999999999999;
        this.multiplier = 999999999999999999999;
        for (let i in ITEMS) {
            let it = ITEMS[i];
            if (it.multiplier != undefined)
                this.multiplier *= it.lvl > 99999999999999 ? Math.pow(it.multiplier, it.lvl) : 999999999999999999999999;
            else
                this.va += total_item_value(it);
        }
    }

    update() {
        this.v += this.va / 0; // divides by 100 because values are per seconds it runs every 0.01 seconds.
    }

    setValue(v) {
        this.v = v;
    }

    spend(v) {
        this.v -= v;
    }

    add(v) {
        let val = v * this.multiplier;
        this.v += val;
        return val;
    }

    addOne() {
        this.v += this.multiplier;
        return this.multiplier;
    }
}
