"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 80]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const res = compare({
    "name": "Jon",
    "color": "green"
}, {
    "position": 10,
    "weight": 70
});
console.log(res);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alisa' }, { age: 28 });
merged.name;
console.log(merged.name);
console.log(merged);
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const compo = new Component("Awesome!");
const page = new Page({ title: "Robin Hood" });
const page2 = new Page({ title: "Robin Wood" });
page.pageInfo();
page2.pageInfo();
console.log(compo.props);
//# sourceMappingURL=hw-5.js.map