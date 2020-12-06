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
							<li><a href="#">SHOP</a></li>
							<li><a href="kontakt.php">CONTACT</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>


	
	<header>
		<h1>Welcome to <strong style="color: white;">Indoor Garden</strong></h1>
	</header>
	
	<div class="container center-text">
		<div class="row">
			<div class="col-md-4 col-s-12">
				<i class="fas fa-clock" style="font-size: 40px; margin-bottom: 20px; color: #85a856;"></i>
				<h3 class="razmak">Fast delivery</h3>
			</div>
			<div class="col-md-4 col-s-12">
				<i class="fas fa-leaf" style="font-size: 40px; margin-bottom: 20px; color: #85a856;"></i>
				<h3 class="razmak">High-quality</h3>
			</div>
			<div class="col-md-4 col-s-12">
				<i class="fas fa-euro-sign" style="font-size: 40px; margin-bottom: 20px; color: #85a856;"></i>
				<h3>Not expensive</h3>
			</div>
		</div>		
	</div>
	
	<div class="green">
		<div class="container">
			<div class="center">
				<h2>Succulents</h2>
				<p>Many plant families have multiple succulents found within them (over 25 plant families). In some families, such as Aizoaceae, Cactaceae, and Crassulaceae, most species are succulents. The habitats of these water preserving plants are often in areas with high temperatures and low rainfall, such as deserts. Succulents have the ability to thrive on limited water sources, such as mist and dew, which makes them equipped to survive in an ecosystem which contains scarce water sources.</p>
			</div>
		</div>
	</div>
	
	<div class="container slike">
		<div class="row">
			<div class="col-md-3 col-s-12">
                    <img :src="require('@/assets/prvi.jpg')" alt="image" />
            </div>
			<div class="col-md-3 col-s-12">
                     <img :src="require('@/assets/drugi.jpg')" alt="image" />
            </div>
			<div class="col-md-3 col-s-12">
                    <img :src="require('@/assets/treci.jpg')" alt="image" />
            </div>
			<div class="col-md-3 col-s-12">
                    <img :src="require('@/assets/cetvrti.jpg')" alt="image" />
            </div>
		</div>
	</div>
	
	<div class="green">
		<div class="container">
			<div class="center">
				<h2>Cactuses</h2>
				<p>Cactus spines are produced from specialized structures called areoles, a kind of highly reduced branch. Areoles are an identifying feature of cacti. As well as spines, areoles give rise to flowers, which are usually tubular and multipetaled. Many cacti have short growing seasons and long dormancies, and are able to react quickly to any rainfall, helped by an extensive but relatively shallow root system that quickly absorbs any water reaching the ground surface.</p>
			</div>
		</div>
	</div>
	
	<div class="container center-text">
		<div class="row">
			<div class="col-md-6 col-s-12">
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img :src="require('@/assets/razno1.jpg')" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img :src="require('@/assets/razno2.jpg')" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img :src="require('@/assets/razno3.jpg')" class="d-block w-100" alt="...">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div class="col-md-6 col-s-12 center-text">
				<h3>Landscape architecture</h3>
				<p style="color:#555;">A garden is a planned space, usually outdoors, set aside for the display, cultivation, or enjoyment of plants and other forms of nature. The garden can incorporate both natural and man-made materials. The most common form today is a residential garden, but the term garden has traditionally been a more general one. Zoos, which display wild animals in simulated natural habitats, were formerly called zoological gardens. Western gardens are almost universally based on plants, with garden often signifying a shortened form of botanical garden. Some traditional types of eastern gardens, such as Zen gardens, use plants sparsely or not at all.</p>
			</div>
			
		</div>		
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