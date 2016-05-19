// var numbers = [1, 2, 3, 4, 5];
// var sum = [];

// function forEach(array, action) {
// 	for (var i = 0; i < array.length; i++) {
// 		action(array[i]);
// 	}
// }

// forEach(numbers, function(num) {
// 	sum.push(num*2);
// });

// console.log(sum);

// forEach(["Tejas", "abid", "terry"], alert);

// function greaterThan(n) {
// 	return function(m) { 
// 		return m > n; 
// 	};
// }

// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// console.log(greaterThan(10)(11));

// function noisy(f) {
// 	return function(arg) {
// 		console.log("calling with", arg);
// 		var val = f(arg);
// 		console.log("called with", arg, " - got", val);
// 		return val;
// 	}
// }

// noisy(Boolean)(0);

function unless(test, then) {
	if (!test) then();
}
function repeat(times, body) {
	for (var i = 0; i < times; i++) {
		body(i);
	}
}

repeat(5, function(n) {
	unless(n % 2, function(){
		console.log(n, "is even");
	});
});