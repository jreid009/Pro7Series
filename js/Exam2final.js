function MenuChoice()
{
    if (document.getElementById("menu").value == "All Categories")
    {
        document.getElementById("showarea1").style.visibility = "visible";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "hidden";
        document.getElementById("showarea4").style.visibility = "hidden";
        document.getElementById("showarea5").style.visibility = "hidden";
    }
    else if  (document.getElementById("menu").value == "Create Category")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "visible";
        document.getElementById("showarea3").style.visibility = "hidden";
        document.getElementById("showarea4").style.visibility = "hidden";
        document.getElementById("showarea4").style.visibility = "hidden";
    }
     else if  (document.getElementById("menu").value == "Update Category")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "visible";
        document.getElementById("showarea4").style.visibility = "hidden";
        document.getElementById("showarea5").style.visibility = "hidden";
    }
    else if  (document.getElementById("menu").value == "Delete Category")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "hidden";
        document.getElementById("showarea4").style.visibility = "visible";
        document.getElementById("showarea5").style.visibility = "hidden";
    }
    else if  (document.getElementById("menu").value == "About Me")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "hidden";
        document.getElementById("showarea4").style.visibility = "hidden";
        document.getElementById("showarea5").style.visibility = "visible";
    }
    else 
    {
      document.getElementById("showarea1").style.visibility = "hidden";
      document.getElementById("showarea2").style.visibility = "hidden";
      document.getElementById("showarea3").style.visibility = "hidden";
      document.getElementById("showarea4").style.visibility = "hidden";
      document.getElementById("showarea5").style.visibility = "hidden";
    }
}
    
    

