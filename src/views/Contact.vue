<template>

<body>
  



<div class="navigation">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-s-12">
					<a href="About.vue" class="logo">Indoor Garden</a>
				</div>
				<div class="col-md-8 col-s-12 align-self-center">
					<nav class="right">
						<ul>
							<li><a href="index.html">HOME</a></li>
							<li><a href="shop.html">SHOP</a></li>
							<li><a href="#">CONTACT</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>


	
	<header>
		<h1>Contact us</h1>
	</header>
	
	<div class="container mt-5 forma">
        <div class="row">
            <div class="col-6 mx-auto">
                <h1 class="mb-5 text-center">Let us know</h1>
                <form action="kontakt.php" method="POST">
                    
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" class="form-control" id="name" autofocus>
                    </div>
                    
                    <div class="form-group">
                        <label for="surname">Surname</label>
                        <input type="text" name="surname" class="form-control" id="surname">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email">
                    </div>
                                        
					
					
					<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" id="switch" name="switch">
						<label class="custom-control-label" for="switch">I agree to recieve Indoor Garden newsletter</label>
					</div>				
 
                    <button type="submit" class="btn btn-success float-right mt-3" data-toggle="tooltip" data-placement="top" title="I will make a XML file">Submit</button>
					<button type="reset" class="btn btn-secondary float-right mt-3 mr-3" data-toggle="tooltip" data-placement="top" title="I will reset the form">Reset</button>
                </form>
 
            </div>
        </div>
        <div class="mb-5"></div>
    </div>
	
	
	
	<footer>
		<p>Copyright by Nina Gluhak</p>
		<p>All rights reserved</p>
	</footer>

</body>
</template>



<style>
h2, h3, h4, h5{
    color: #555;
}

p {
    color: #777;
}

.clear {
    clear: both;
}

.left {
    float: left;
}

.right {
    float: right;
}

.navigation {
    background-color: #000;
    padding: 10px 0;
}

.navigation a {
    color: #fff;
}

.navigation a:hover {
    text-decoration: none;
    color: #85a856;
}

.navigation a.logo {
    font-size: 30px;
    font-weight: 700;
}

.navigation nav ul {
    margin: 0;
    padding: 0;
}

.navigation nav ul li {
    display: inline;
}

.navigation nav ul li a {
    padding: 0 10px;
    text-transform: uppercase;
}

header {
    background-image: url('img/home2.jpg');
    background-position: bottom right;
    text-align: center;
    padding: 170px 0;
    color: #fff;
}

.center-text {
    text-align: center;
    padding: 120px 0;
}

.center-text .fas {
    font-size: 40px;
    margin-bottom: 20px;
    color: #85a856;
}

.center {
    text-align: center;
    padding: 30px 0;
}

.center h2 {
    font-size: 32px;
    font-weight: 700;
}

div img {
    max-width: 100%;
}

.green {
    padding: 120px 0;
    background-color: #85a856;
}

.green p, h2{
	color: #fff;
}

.slike{
	padding: 50px 0;
}


footer{
	background-color: #073322;
    padding: 10px 0;
	text-align: center;
}

footer p{
	color: #fff;
}

.forma h1{
	color: #555;
}






@media screen and (max-width: 767px) {
    .right {
        float: none;
    }

    .navigation nav ul {
        margin-top: 8px;
    }

    .navigation nav ul li {
        display: block;
        border-top: 1px solid #fff;
    }

    .navigation nav ul li a {
        padding: 8px 0;
        display: block;
    }
	.razmak{
		margin-bottom:50px;
	}
}



</style>