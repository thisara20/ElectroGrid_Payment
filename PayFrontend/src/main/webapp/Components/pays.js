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
// If valid------------------------
 $("#formPay").submit();
});
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
 $("#hidPayIDSave").val($(this).closest("tr").find('#hidPayIDUpdate').val());
 $("#payDate").val($(this).closest("tr").find('td:eq(0)').text());
 $("#name").val($(this).closest("tr").find('td:eq(1)').text());
 $("#email").val($(this).closest("tr").find('td:eq(2)').text());
 $("#amount").val($(this).closest("tr").find('td:eq(3)').text());
 $("#accNo").val($(this).closest("tr").find('td:eq(4)').text());
 $("#ccv").val($(this).closest("tr").find('td:eq(5)').text());
 $("#expiredate").val($(this).closest("tr").find('td:eq(6)').text());
});
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
 
// expiredate
if ($("#expireDate").val().trim() == "")
 {
 return "Insert Expire date.";
 }
return true;
}
