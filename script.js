function add()
{
    let a = (document.getElementById("num1").value);
    let b = (document.getElementById("num2").value);

    if(a===""||b==="")
    {
        document.getElementById("result").innerText="Please enter both numbers";
        return;
    }

    let result = Number(a)+Number(b);

    document.getElementById("result").innerText = result;

     document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function subtract()
{
    let a = (document.getElementById("num1").value);
    let b = (document.getElementById("num2").value);

      if(a===""||b==="")
    {
        document.getElementById("result").innerText="Please enter both numbers";
        return;
    }

    let result = Number(a)-Number(b);

    document.getElementById("result").innerText = result;

     document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function multiply()
{
    let a = (document.getElementById("num1").value);
    let b = (document.getElementById("num2").value);

      if(a===""||b==="")
    {
        document.getElementById("result").innerText="Please enter both numbers";
        return;
    }

    let result = Number(a)*Number(b);

    document.getElementById("result").innerText = result;

     document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function divide()
{
    let a = (document.getElementById("num1").value);
    let b = (document.getElementById("num2").value);

      if(a===""||b==="")
    {
        document.getElementById("result").innerText="Please enter both numbers";
        return;
    }

    let result = Number(a)/Number(b);

    document.getElementById("result").innerText = result;

     document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function square()
{
    let a = Number(document.getElementById("num1").value);
    

    let result = a*a;

    document.getElementById("result").innerText = result;

     document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function cube()
{
    let a = Number(document.getElementById("num1").value);
    

    let result = a*a*a;

    document.getElementById("result").innerText = result;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

