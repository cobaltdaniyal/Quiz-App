function checking(){
    var score = 0
    var correctAns = 0
    var wrongAns = 0

    var q1_a1 = document.getElementById("q1-a1")
    var q1_a2 = document.getElementById("q1-a2")
    var q1_a3 = document.getElementById("q1-a3")
    var q1_a4 = document.getElementById("q1-a4")
    if (q1_a1.checked === true){
        score++
        correctAns++
        alert("Answer for Q1 is Correct !")

    }
    else{
        wrongAns++
        alert("WRONG! The answer for Q1 is Larry Page & ‎Sergey Brin !")
    }




    var q2_a1 = document.getElementById("q2-a1")
    var q2_a2 = document.getElementById("q2-a2")
    var q2_a3 = document.getElementById("q2-a3")
    var q2_a4 = document.getElementById("q2-a4")
    if (q2_a3.checked == true){
        score++
        correctAns++
        alert("Answer for Q2 is Correct !")

    }
    else{
        wrongAns++
        alert("WRONG! The answer for Q2 is Tim Cook !")
    }


    var q3_a1 = document.getElementById("q3-a1")
    var q3_a2 = document.getElementById("q3-a2")
    var q3_a3 = document.getElementById("q3-a3")
    var q3_a4 = document.getElementById("q3-a4")
    if (q3_a1.checked == true){
        score++
        correctAns++
        alert("Answer for Q3 is Correct !")

    }
    else{
        wrongAns++
        alert("WRONG! The answer for Q3 is Bugatti's La Voiture Noire !")
    }




    var q4_a1 = document.getElementById("q4-a1")
    var q4_a2 = document.getElementById("q4-a2")
    var q4_a3 = document.getElementById("q4-a3")
    var q4_a4 = document.getElementById("q4-a4")
    if (q4_a4.checked == true){
        score++
        correctAns++
        alert("Answer for Q4 is Correct !")

    }
    else{
        wrongAns++
        alert("WRONG! The answer for Q4 is Kaleemullah Khan !")
    }




    var q5_a1 = document.getElementById("q5-a1")
    var q5_a2 = document.getElementById("q5-a2")
    var q5_a3 = document.getElementById("q5-a3")
    var q5_a4 = document.getElementById("q5-a4")
    if (q5_a2.checked == true){
        score++
        correctAns++
        alert("Answer for Q5 is Correct !")

    }
    else{
        wrongAns++
        alert("WRONG! The answer for Q5 is Pacific Ocean !")
    }


    alert("You Scored : " + score)
    alert("Correct Answers are : " + correctAns)
    alert("Wrong Answers are : " + wrongAns)

}

function gettingname(){
    var nameOfStudent = document.getElementById("nameOfStudent")
    var p = document.createElement("p")
    var text = document.createTextNode(nameOfStudent.value)
    p.appendChild(text)
    var nameHere = document.getElementById("nameHere")
    nameHere.appendChild(p) 

    nameOfStudent = ""
}
 