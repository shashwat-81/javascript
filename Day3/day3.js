function checkPalindrome(){
    let input= document.getElementById("input1").value;
    let reversedInput = input.split('').reverse().join('');
    if(input ===""){
        alert("Enter a valid input");
    }
    if(input === reversedInput){
        document.getElementById("result").innerHTML = "The input is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "The input is not a palindrome.";
    }

}