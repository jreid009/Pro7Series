function GetAllCategories() {
    
}

    var GetAllCategories=new XMLHttpRequest();  //Create AJAX request object
    
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    //url+=document.getElementById("showarea1").value;
    //Checks that the object has returned data
    getAllCategories.onreadystatechange = function()
    {
        if (getAllCategories.readyState == 4 && getAllCategories.status == 200)
        {
            var output = JSON.parse(getAllCategories.responseText);
            GenerateOutput(output);
        }
    }
    //Initiate the server request
    getAllCategories.open("GET",url,true);
    getAllCategories.send();
    
}

function GenerateOutput(output)
{
    var Count  = 0;
    var displaytext = "";
    
    //Loop to extract data from the response object
    for (Count = 0;Count < output.GetAllCategoriesResult.length; Count++)
    {
         displaytext += "<table>" +"<tr><th>CID: </th><td>" + output.GetAllCategoriesResult[Count].categoryid + "</td></tr>" +
         "<tr><th>CName: </th><td>"+ output.GetAllCategoriesResult[Count].categoryNname + "</td></td>" +
         "<tr><th>CDescription: </th><td>"+ output.GetAllCategoriesResult[Count].categorydescription +"</td></tr>" +"</table>" + "<br>";
        
    }
    
    document.getElementById("dac").innerHTML = displaytext;
}