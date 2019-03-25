/**
 * 1. console.log({variable})
 * 将变量以对象的形式打印出来
 */
console.line("1. console.log({variable})");
let slogan = "Debug with Console";
console.log("slogan:", slogan);
console.log({ slogan });

/**
 * 2. console.table(variable)
 * 对比数组元素某一属性值的区别时很有用
 */
console.line("2. console.table(variable)");
let table = [
    {
        _id: "5c88ed74a38a7ec916778702",
        releaseStage: "development",
        firstSeen: "2019-03-13T11:45:56.481Z",
        status: "open",
        notifierVersion: "1.7.2",
        name: "TypeError",
        type: "uncaught",
        message: "Uncaught TypeError: t.apply is not a function",
        url: "http://192.168.59.100:8000/#&gid=1&pid=2",
        severity: "error",
        lastSeen: "2019-03-13T12:46:35.047Z",
        numberOfOccurence: 5,
        numberOfUser: 1
    },
    {
        _id: "5c88f007a38a7ec9167788d0",
        releaseStage: "development",
        firstSeen: "2019-03-13T11:56:55.505Z",
        status: "ongoing",
        notifierVersion: "1.7.2",
        name: "TypeError",
        type: "uncaught",
        message: "Uncaught TypeError: t.apply is not a function",
        url: "http://127.0.0.1:8083/#&gid=1&pid=2",
        severity: "error",
        lastSeen: "2019-03-13T12:12:10.062Z",
        numberOfOccurence: 11,
        numberOfUser: 1
    },
    {
        _id: "5c88ee95a38a7ec9167787be",
        releaseStage: "development",
        firstSeen: "2019-03-13T11:50:45.743Z",
        status: "closed",
        notifierVersion: "1.7.2",
        name: "TypeError",
        type: "uncaught",
        message: "Uncaught TypeError: t.apply is not a function",
        url: "http://127.0.0.1:8083/#&gid=1&pid=2",
        severity: "error",
        lastSeen: "2019-03-13T11:55:11.840Z",
        numberOfOccurence: 4,
        numberOfUser: 1
    },
    {
        _id: "5c88ea7ca38a7ec91677851d",
        releaseStage: "development",
        firstSeen: "2019-03-13T11:33:16.491Z",
        status: "ignored",
        notifierVersion: "1.7.0",
        name: "uncaught error",
        type: "uncaught",
        message: "Script error.",
        url: "http://127.0.0.1:8083/#&gid=1&pid=1",
        severity: "error",
        lastSeen: "2019-03-13T11:54:27.938Z",
        numberOfOccurence: 14,
        numberOfUser: 1
    },
    {
        _id: "5c88edeaa38a7ec91677874f",
        releaseStage: "development",
        firstSeen: "2019-03-13T11:47:54.699Z",
        status: "open",
        notifierVersion: "1.7.2",
        name: "TypeError",
        type: "uncaught",
        message: "Uncaught TypeError: t.apply is not a function",
        url: "http://127.0.0.1:8083/#&gid=1&pid=2",
        severity: "error",
        lastSeen: "2019-03-13T11:48:19.250Z",
        numberOfOccurence: 2,
        numberOfUser: 1
    }
];
console.log(table);
console.table(table);

/**
 * 3. 自定义console函数
 */
console.line("3. 自定义console函数");
console.todo = function(msg) {
    console.log(
        "%c %s %s",
        "color: yellow; background-color: black;",
        "[TODO]:",
        msg
    );
};

console.important = function(msg, obj) {
    console.log(
        "%c %s %s %o",
        "color: brown; font-weight: bold; text-decoration: underline;",
        "[Important]:",
        msg,
        obj
    );
};

console.rainbow = function() {
    console.log(
        "%c Rainbowww!",
        "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
    );
};

console.todo("此处需要测试");
console.important("查看slogan的值", { slogan });
console.rainbow();

/**
 * 4. console.assert()
 * 利用console.assert()在某些条件下输出信息，而不是if-else语句
 */
console.line("4. console.assert()");
let shallDisplay = false;
console.assert(shallDisplay, "在出错情况下没有弹出提示。");
