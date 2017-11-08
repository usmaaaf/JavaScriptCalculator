$(document).ready(function () {
    var inputs = [""];
    var totalString;
    var decimal = false;
    var operators1 = ['÷', '×', '-', '+'];
    var operators2 = ["."];
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    

    function getValue(input) {
        if(operators2.includes(inputs[inputs.length-1] === true && inputs === ".")) {
            console.log("no deca");
        } else if(inputs.length === 1 && operators1.includes(inputs) === false) {
            inputs.push(input);
        } else if(operators1.includes(inputs[inputs.length-1]) === false) {
            inputs.push(input);
        } else if(nums.includes(Number(input))) {
            inputs.push(input);
        }
        update();
    }

    function update() {
        totalString = inputs.join("");
        $("#result").html(totalString);
    }

    function getTotal() {
        totalString = inputs.join("");
        $("#result").html(eval(totalString));
    }

    $("button").click(function(){
        if ($(this).attr('value') == "clear")
        {
            console.log($(this).attr('value'));
            inputs = [" "];
            update();
        } else if ($(this).attr('value') == "back")
        {
            console.log($(this).attr('value'));
            inputs.pop();
            update();
        } else if ($(this).attr('value') == "equals")
        {
            console.log($(this).attr('value'));
            getTotal();
        } else {

            if(inputs[inputs.length-1].indexOf('÷', '×', '-', '+', '-1') === -1) {
                getValue($(this).attr('value'));
                console.log($(this).attr('value'));

            } else {
                getValue($(this).attr('value'));
                console.log($(this).attr('value'));
            }

        }

    });
})