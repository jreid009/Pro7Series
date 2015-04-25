    function CreateCategory()
    {
        var createCategory = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/createCategory";
        
        //Collect Customer data from web page.
        var categoryname = document.getElementById("creacat").value;
        var categorydescription = document.getElementById("catdes").value;
       
        
        //create the parameter string
        var newcategory = '{"CName":"' + categoryname + '","CDescription":"' + categorydescription +'"}';
        
        //Checking for operation return
        createCategory.onreadystatechange = function()
        {
            if (createCategory.readyState == 4 && createCategory.status == 200)
            {
                var result = JSON.parse(createCategory.responseText);
                OperationResult(result);
            }
        }
            
            // Start ajax request
            createCategory.open("POST", url, true);
            createCategory.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            createCategory.send(newcategory);
        }
        
        function OperationResult(output)
        {
            if (output.WasSuccessful == 1)
            {
                document.getElementById("thor").innerHTML = "Operation completed succesully!"
            }
            else
            {
                document.getElementById("thor").innerHTML = "Operation failed!" + "<br>" + output.Exception;
            }
            
        }
