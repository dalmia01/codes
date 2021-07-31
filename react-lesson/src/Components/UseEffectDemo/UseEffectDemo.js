import { useEffect, useState } from "react";

const MyApi = {
    count: 0,
    subscribe(cb) {
        this.intervalID = setInterval(() => {
            cb(this.count++);
        }, 1000);
    },
    unsubscribe() {
        clearInterval(this.intervalID);
        this.count = 0;
    },
};

export const UseEffectDemo = () => {
    let [counter, setCounter] = useState(0);
    let [dateTime, setDateTime] = useState(new Date().toTimeString());

    useEffect(() => {
        MyApi.subscribe((counter) => {
            setCounter(counter);
            setDateTime(new Date().toTimeString());
        }, 1000);

        return () => {
            MyApi.unsubscribe();
            setCounter(0);
        };
    }, []);

    return (
        <>
            <div>Counter : {counter} </div>
            <p>Date : {dateTime}</p>
        </>
    );
};
