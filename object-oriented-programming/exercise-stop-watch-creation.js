function StopWatch() {
    let startTime = 0;
    let stopTime = 0;
    let duration = 0;
    this.start = function () {
        if (startTime) throw new Error("Cannot start again");
        startTime = new Date().getTime();
    };
    this.stop = function () {
        if (!startTime) throw new Error("Cannot stop again");
        stopTime = new Date().getTime();
        duration += stopTime - startTime;
        startTime = 0;
        stopTime = 0;
    };
    this.reset = function () {
        startTime = 0;
        stopTime = 0;
        duration = 0;
    };

    Object.defineProperty(this, "startTime", {
        get: function () {
            return startTime;
        },
    });
    Object.defineProperty(this, "stopTime", {
        get: function () {
            return stopTime;
        },
    });

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
    });
}

let stopWatch = new StopWatch();
