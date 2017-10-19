<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="seedApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="seedApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="seedApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="seedApp" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title data-ng-bind='$root.application + " - " + $root.pageTitle'></title>
    
    <style>[ng-cloak], [data-ng-cloak] { display: none; } /* to make sure nothing shows up until it should*/</style>
    <link rel="stylesheet" href="../cdn/normalize/4.1.1/normalize.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Archivo|Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" href="../cdn/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="components/modal/modal.css">
    <link rel="stylesheet" href="components/views/admin/admin.css">
    <link rel="stylesheet" href="components/views/main/main.css">
    <link rel="stylesheet" href="components/views/home/home.css">
    <link rel="stylesheet" href="app.css">
  	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
    <script src="../cdn/modernizr/2.8.1/modernizr.min.js"></script>
    <script src="../cdn/svg4everybody/2.0.0/svg4everybody.min.js"></script>
</head>
<body data-ng-cloak>
	<div data-ui-view></div>
	
	<!-- third-party javascript libraries *** should be from the aws.gcumedia.com/cdn *** -->
	<script src='../cdn/angular/1.5.8/angular.min.js'></script>
	<script src='../cdn/angular/1.5.8/angular-route.min.js'></script>
	<script src='../cdn/angular/1.5.8/angular-resource.min.js'></script>
	<script src='../cdn/angular/1.5.8/angular-animate.min.js'></script>
	<script src="../cdn/angular/1.5.8/angular-cookies.min.js"></script>
	<script src="../cdn/angular/1.5.8/angular-aria.min.js"></script>
	<script src="../cdn/ui-router/angular-ui-router.js"></script>
	<!-- <script src="../cdn/angular/analytics/1.1.7/angular-ga.min.js"></script> -->
	<script src='../cdn/bootstrap/2.1.3/ui-bootstrap-tpls-2.1.3.min.js'></script> 
	<script src='../cdn/gsap/1.18.0/TweenMax.min.js'></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
	<!-- file upload -->
	<script src='../cdn/ng-file-upload/12.2.13/ng-file-upload-shim.min.js'></script>
	<script src='../cdn/ng-file-upload/12.2.13/ng-file-upload.min.js'></script>
	


	<!-- app javascript -->
	<script src="app.js"></script>
	<script src="components/views/home/home.route.js"></script> <!-- Routes first -->
	<script src="components/views/home/temp-data/temp-data-router.js"></script>
	<script src="components/views/home/home.js"></script>

	<script src="components/views/main/main.route.js"></script> <!-- Routes first -->
	<script src="components/views/main/main.js"></script>

	<script src="components/views/admin/admin.route.js"></script> <!-- Routes first -->
	<script src="components/views/admin/admin.js"></script>

	<script src="components/views/login/login.route.js"></script> <!-- Routes first -->
	<script src="components/views/login/login.js"></script>
	
	<script src="components/views/register/register.route.js"></script> <!-- Routes first -->
	<script src="components/views/register/register.js"></script>
	
	<script src="components/modal/modal.js"></script>
	<script src="components/services/dataService.js"></script>
	<script src="components/services/datainterface.js"></script>
	<script src="components/services/flying-focus.js"></script>
	<script src="components/services/uniquefilter.js"></script>
	<script src="components/services/startFrom.js"></script>

	<script src="components/app-services/authentication.service.js"></script>
	<script src="components/app-services/user.service.js"></script>
	
	<script src="components/filters/interpolate.js"></script>
	<script src="components/directives/version/version.js"></script>
	<script src="components/animations/sample.js"></script>
	
</body>
</html>