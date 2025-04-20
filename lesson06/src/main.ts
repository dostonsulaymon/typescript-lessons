interface Hello {
    type: "hello";
    name: string;
}

interface Hello1 {
    type: "hello1";
    mess: number;
}

interface Hello2 {
    type: "hello2";
    good: boolean;
}

type Log = Hello | Hello1 | Hello2;

function hi(log: Log) {
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
})
