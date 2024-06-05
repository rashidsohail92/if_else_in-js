var marks = +prompt("enter your marks")
if (marks > 100){
    alert(" Error! marks should be less than 100 ")
}
else if ( marks >=90 )
    {
        alert("marks" + marks + " grade a") 
    }
    else if ( marks >=80 )
        {
            alert("marks" + marks + "grade b")
        }
        else if ( marks >=70 )
            {
                alert("marks" + marks + "grade c")
            }
            else if ( marks >=60  )
                {
                    alert("marks" + marks + " grade d")
                }
                else if ( marks <=60  )
                    {
                        alert("marks" + marks + " fail")
                    }