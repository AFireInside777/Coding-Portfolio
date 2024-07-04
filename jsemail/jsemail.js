function copyEmail() {
   
    const resetDivs = () =>
    {
        document.getElementById("javacopy").innerHTML = "jswilliams232@gmail.com"
        document.getElementById("javainstruct").innerHTML = "(Click to copy)" 
    }

    var copyText = document.getElementById("javacopy").innerText;
    console.log(copyText)
   
    navigator.clipboard.writeText(copyText);

    document.getElementById("javacopy").innerHTML = "Email has been copied!"
    document.getElementById("javainstruct").innerHTML = " "
  
    const myTimeout = setTimeout(resetDivs, 1300)
    // Alert the copied text
    //alert("Copied the text: " + copyText);
  }