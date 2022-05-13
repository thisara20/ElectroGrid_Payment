<%@page import="model.Pay"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
 
  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/pays.js"></script>

</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Payment Management V10.1</h1>

	<form id="formPay" name="formPay" method="post" action="pays.jsp">

		Payment Date <input id="payDate" name="payDate" type="text"
			class="form-control form-control-sm"> <br> Name: <input
			id="name" name="name" type="text"
			class="form-control form-control-sm"> <br> Email: <input
			id="email" name="email" type="text"
			class="form-control form-control-sm"> <br> Amount: <input
			id="amount" name="amount" type="text"
			class="form-control form-control-sm"> <br>Account No: <input
			id="accNo" name="accNo" type="text"
			class="form-control form-control-sm"> <br>CCV: <input
			id="ccv" name="ccv" type="text" class="form-control form-control-sm">
		<br>Card Expire Date: <input id="expireDate" name="expireDate"
			type="text" class="form-control form-control-sm"> <br> <input
			id="btnSave" name="btnSave" type="button" value="Save"
			class="btn btn-primary"> <input type="hidden"
			id="hidPayIDSave" name="hidPayIDSave" value="">
	</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Pay payObj = new Pay();
 out.print(payObj.readPay());
  
 %>
</div>
</div> </div> </div>
</body>
</html>