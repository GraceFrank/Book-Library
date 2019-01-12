const queue = [
    ['dara', 1],
    ['grace', 2],
    ['vicky', 3],
    ['twin', 2],
    ['stella', 1]
];


queue.sort(function (a, b) {
    return a[1] - b[1];
});


console.log(queue);

