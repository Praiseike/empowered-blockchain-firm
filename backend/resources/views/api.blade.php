<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>API Docs</title>
	<link rel="stylesheet" href="">
</head>
<style>
    body{
        background-color: white;
        color: #515151;
        margin: 0;
        font-family: sans-serif;
    }
    h1,h2{
        font-size: 23px;
        font-weight: 400;
        
    }
    .header{
    	background-color: #919191;
    	padding: 20px;
    	color: white;
    }
    .route{
    	font-size: 25px;
    	width: auto;
    	background-color: #f3f3f3;
    	padding-left: 20px;
    	padding-right: 20px;
    	padding-top: 10px;
    	padding-bottom: 10px;
 
    }
 	.route-div{
 		margin-top:20px;
 		margin-bottom: 40px;
 	}
    main{
        width: 80%;
        margin: auto;
        padding: 20px;
        padding-top: 80px;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        height:120vh;
    }
    .description{
    	margin-left: 20px !important;
    }
    .description h2{

    }
    .method{
    	background-color: #e3e3e3;
    	font-size: 20px;
    	padding:0px 5px 0px 5px;
    }
</style>
<body>
    <main class="container">
        <h1 > API Documentation</h1>
        <hr/>
        <div class="route-div">
	        <h4 class="header">Login Route</h4>
	        <code class="route">
	        	<span class="method">POST</span> /api/login
	        </code> 
	        <div class="description">
	        	<h3>Request</h3>
	        	Receives a post request containing the user details eg<br>
	        	<code>
	        		{
	        			email: "username@example.com",
	        			password: "password",
	        		}
	        	</code>
	        </div>       	

	        <div class="description">
	        	<h3>Response</h3>
	        	Returns json response with user details and auth token<br>
	        	<code>
		        	{
		                status: 'success',
		                user : [...userData],
		                token : '1|j3iorKHfjkHLyLUYEffJJ!LJ!(pnudnoeiuiybt',
		                token_type : 'Bearer'
					}
	        	</code>
	        </div>
	    </div>
	    <div class="route-div">
	        <h4 class="header">Register Route</h4>
		        <code class="route">
		        	<span class="method">POST</span> /api/register
		        </code> 
		        <div class="description">
		        	<h3>Request</h3>
		        	Receives a post request containing the user details eg<br>
		        	<code>
		        		{
		        			username: 'username',
		        			email: "username@example.com",
		        			password: "password",
		        			password_confirmation: "password",
		        		}
		        	</code>
		        </div>       	

		        <div class="description">
		        	<h3>Response</h3>
		        	Returns json response with user details and auth token<br>
		        	<code>
			        	{
			                status: 'success',
			                user : [...userData],
			                token : '1|j3iorKHfjkHLyLUYEffJJ!LJ!(pnudnoeiuiybt',
			                token_type : 'Bearer'
						}
		        	</code>
		        </div>
		
	    </div>
    </main>
	
</body>
</html>

