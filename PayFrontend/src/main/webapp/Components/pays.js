$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
    $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
 
// Form validation-------------------
var status = validatePayForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
 
// if hidPayIDSave value is null set as POST else set as PUT
 var type = ($("#hidPayIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "PaysAPI",
 type : type,
 data : $("#formPay").serialize(),
 dataType : "text",
 complete : function(response, status)
  {
 onPaySaveComplete(response.responseText, status);
  }
 }); 

});

//function  onItemSaveComplete ,after completing save request
function onPaySaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 
 if (resultSet.status.trim() == "success") //if the json status is success
 {
	//success alert
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 
 //load data in json to html
 $("#divItemsGrid").html(resultSet.data);
 
  //if json status error
 } else if (resultSet.status.trim() == "error") 
 {
	//show error
 $("#alertError").text(resultSet.data);  
 $("#alertError").show();
 }
    
 } else if (status == "error")
 {
	//error while saving
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
	//unknown error
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 }
 //reset the pay form
$("#hidItemIDSave").val("");
 $("#formItem")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	//get payID from itemid attribute in pdate btn
 $("#hidPayIDSave").val($(this).data('payid')); 
 
  //get data from table data element 
 $("#payDate").val($(this).closest("tr").find('td:eq(0)').text());
 $("#name").val($(this).closest("tr").find('td:eq(1)').text());
 $("#email").val($(this).closest("tr").find('td:eq(2)').text());
 $("#amount").val($(this).closest("tr").find('td:eq(3)').text());
 $("#accNo").val($(this).closest("tr").find('td:eq(4)').text());
 $("#ccv").val($(this).closest("tr").find('td:eq(5)').text());
 $("#expireDate").val($(this).closest("tr").find('td:eq(6)').text());
});

//delete
$(document).on("click", ".btnRemove", function(event)
{ 
	//ajax  
 $.ajax(
 {
 url : "PaysAPI",
 type : "DELETE",
 data : "payID=" + $(this).data("payid"),
 dataType : "text",
 complete : function(response, status)
 {
 onPayDeleteComplete(response.responseText, status);
 }
 });
});

// onItemDeleteComplete; after completing delete request
	
function onPayDeleteComplete(response, status)
{
if (status == "success")
 {  
	//if response successfull
 var resultSet = JSON.parse(response);
 
          //if json status is successful
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully payment deleted.");
 $("#alertSuccess").show();
 $("#divPaysGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}
	
// CLIENT-MODEL================================================================
function validatePayForm()
{
// padate
if ($("#payDate").val().trim() == "")
 {
 return "Insert payment date.";
 }
// NAME
if ($("#name").val().trim() == "")
 {
 return "Insert Name.";
 } 
 
 // Email
if ($("#email").val().trim() == "")
 {
 return "Insert Email.";
 } 
 
 
 // Amount-------------------------------
if ($("#amount").val().trim() == "")
 {
 return "Insert amount.";
 }
// is numerical value
var tmpAmount = $("#amount").val().trim();

if (!$.isNumeric(tmpAmount))
 {
 return "Insert a numerical value for Amount.";
 }
// convert to decimal price
 $("#amount").val(parseFloat(tmpAmount).toFixed(2));
 
// Accountnumber------------------------
if ($("#accNo").val().trim() == "")
 {
 return "Insert Account Number.";
 }
 
 // expiredate
if ($("#expireDate").val().trim() == "")
 {
 return "Insert Expire date.";
 }
 
 // CCV------------------------------
if ($("#ccv").val().trim() == "")
 {
 return "Insert ccv.";
 }
// is numerical value
var tmpCcv = $("#ccv").val().trim();
if (!$.isNumeric(tmpCcv ))
 {
 return "Insert a numerical value for Amount.";
 }
// convert to decimal price
 $("#ccv").val(parseInteger(tmpCcv));
 
 
 
return true;
}
