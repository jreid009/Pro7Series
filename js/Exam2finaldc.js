    function DeleteCategory()
    {
        var deleteCategory = new XMLHttpRequest();//Create AJAX request object
        //Create URL and Query string
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory/categoryID/";
        url += document.getElementById("gettem").value
        
        //Collect Category data from web page.
        //var deleteCategory = document.getElementById("categoryid").value;
        
        //create the parameter string
    //var newdeletedCategory = '{"CategoryID_1":"' + categoryid_1 +'"}';
        
        //Checking for operation return
         deleteCategory.onreadystatechange = function()
        {
            if (deleteCategory.readyState == 4 && deleteCategory.status == 200)
            {
                var output = JSON.parse(deleteCategory.responseText);
                OperationResult(output);
            }
        }
            
            // Start ajax request
            deleteCategory.open("GET", url, true);
            deleteCategory.send();
        }
        
        function OperationResult_3(result)
        {
            if (result.DeleteCategoryResult.WasSuccessful == 1)
            {
                document.getElementById("flips").innerHTML = "Operation completed successfully!"
            }
            else if (result.DeleteCustomerCategoryResult.WasSuccessful == 0)
            {
                document.getElementById("flips").innerHTML = "Operation failed!" + "<br>" + result.Exception;
            }
        }
            
        