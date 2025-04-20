"use strict";
function hi(log) {
    switch (log.type) {
        case "hello":
            // log is Hello
            console.log("Hello", log.name);
            break;
        case "hello1":
            // log is Hello1
            console.log("Hello1", log.mess);
            break;
        case "hello2":
            // log is Hello2
            console.log("Hello2", log.good);
            break;
        default:
            throw new Error("Unknown log type");
    }
}
hi({
    type: "hello2",
    good: true,
});
