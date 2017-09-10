let fruits = ["Apple", "Banana", "Orange", "Mandarin"]

let answer = true

do
{
    for(let x of fruits) //of or in
        {
            alert(x)
        }

        let input = prompt("Please add another fruit:", "Type it here")
        fruits.push(input)

        let inputAnswer = prompt("Would you like to add another fruit?", "Yes or No")
        if (inputAnswer == "yes" || inputAnswer == "Yes" || inputAnswer == "YES")
            {
                answer = true;
            }
            else
                {
                    answer = false;
                }
}
while(answer ==true)

for(let x of fruits)
    {
        alert(x)
    }

alert("The program ends here.")