const tools = [
    {
        id: 1,
        class: "mx-auto w-3/4 bg-gray-200 border rounded",
        h1Class: "text-xl py-4 px-3",
        val: 'Attendace tracker'
    },
    {
        id: 2,
        class: "mx-auto w-3/4 bg-gray-200 border rounded",
        h1Class: "text-xl py-4 px-3",
        val: 'Budget Tracker'
    },
];
const toolsModify = tools.map((item, index) => {
    console.log(index);
    return (<h1>{item.val}</h1>)

console.log(tools);
console.log(toolsModify);