$("#btnmath1").click(function () {
    
    var num1 = Number($("#input1").val());
    var num2 = Number($("#input2").val());
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());

    if (num1 != 0 && num2 != 0 && num3 != 0 && num4 != 0 && num5 != 0) {
        var sum = num1 + num2 + num3 + num4 + num5
        var product = num1 * num2 * num3 * num4 * num5
        var average = sum / 5;
        var smallest = Math.min(num1, num2, num3, num4, num5)
        var largest = Math.max(num1, num2, num3, num4, num5)

        $("#sum").text("The sum is " + sum);
        $("#product").text("The product is " + product);
        $("#average").text("The average is " + average);
        $("#smallest").text("The smallest number is" + smallest);
        $("#largest").text("The largest number is " + largest);
    } else {
        $("#sum").text("Please enter all the values!!");
    }
});


var isPalindrome = function (string) {
    if (string != 0) {
        if (string == string.split('').reverse().join('')) {
            $("#reverse").text(string + ' is a palindrome.')
        }
        else {
            $("#reverse").text(string + ' is not a palindrome.');
        }
    }
    else {
        $("#reverse").text("Please enter a word!!");
    }
}
    $("#btnmath2").click(function () {
        isPalindrome($("#input6").val());
        return false;
    })



function fact(num) {
    if (num != 0) {
        if (num < 0)
            return "Undefined";
        var fact = 1;
        for (var i = num; i > 1; i--)
            fact *= i;
        $("#factor").text("The factorial of " + num + " is " + fact + ".");
        return fact;
    }else {
    $("#factor").text("Please enter a number!!");
}
}

$("#btnmath3").click(function () {
    fact($("#input7").val());
})


$("#btnmath4").click(function () {
    var digit1 = Number($("#fbnum1").val());
    var digit2 = Number($("#fbnum2").val());

    if (digit1 != 0 && digit2 != 0) {
        var numbers = [];
        for (var loop = 1; loop <= 100; loop++) {
            if (loop % digit1 == 0 && loop % digit2 == 0) {
                numbers.push("FizzBuzz")
            } else if (loop % digit1 == 0) {
                numbers.push("Fizz")
            } else if (loop % digit2 == 0) {
                numbers.push("Buzz")
            } else {
                numbers.push(loop);
            }
        };
        var output = numbers.join(', ');
        $("#fbout").text(output);
    } else {
        $("#fbout").text("Please enter a number!!");
    }
});


$("#pre1").hide();
$("#btnmath9").click(function () {
    $("#pre1").toggle();
})

$("#pre2").hide();
$("#btnmath10").click(function () {
    $("#pre2").toggle();
})

$("#pre3").hide();
$("#btnmath11").click(function () {
    $("#pre3").toggle();
})

$("#pre4").hide();
$("#btnmath12").click(function () {
    $("#pre4").toggle();
})