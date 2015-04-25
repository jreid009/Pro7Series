    function CategoryDescriptionUpdate()
    {
        var categoryDescriptionUpdate = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
        
        //Updates shipping address data for an order on the web page.
        var categoryid = document.getElementById("pooch").value;
        var categorydescription = document.getElementById("colew").value;
        
        //create the parameter string
        var newcategorydescriptionupdate = '{"CID":' + categoryid + ',"CDescription":"' + categorydescription +'"}';
        
        //Checking for operation return
        categoryDescriptionUpdate.onreadystatechange = function()
        {
            if (categoryDescriptionUpdate.readyState == 4 && categoryDescriptionUpdate.status == 200)
            {
                var result = JSON.parse(categoryDescriptionUpdate.responseText);
                OperationResult_2(result);
            }
        }
            
            // Start ajax request
            categoryDescriptionUpdate.open("POST", url, true);
            categoryDescriptionUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            categoryDescriptionUpdate.send(newcategorydescriptionupdate);
        }
        
        function OperationResult_2(output)
        {
            if (output == 1)
            {
                document.getElementById("chap").innerHTML = "Operation completed successfully!"
            }
            else if (output == 0)
            {
                document.getElementById("chap").innerHTML = "Operation failed with an unspecified error!"
            }
            else if (output == -2)
            {
                document.getElementById("chap").innerHTML = "Operation failed because the data string supplied could not be de-serialized into the service object!"
            }
            else 
            {
                document.getElementById("chap").innerHTML = "Operation failed because a record with the supplied Order ID could not be found!" 
            }
            
        }
        