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
	
	<header >
		<h1>Shop at <strong style="color: white;">Indoor Garden</strong></h1>
	</header>


  <div class="tasks">
    <b-button @click="$router.push('/add')">Add new todo item</b-button>
    <b-table checkable :checked-rows.sync="checkedRows" :data="data" :row-class="(row) => checkedRows.includes(row) && 'is-completed'">
      
      <b-table-column v-slot="props">
        {{ props.row.common_name}}
      </b-table-column>

      <b-table-column v-slot="props">
        <b-button size="is-small" type="is-success is-light" @click="$router.push('/edit/' + props.row.scientific_name)">Add to basket</b-button>
      </b-table-column>

    </b-table>
    

    <b-modal :active="$route.name == 'AddTodo'" :on-cancel="handleCancel" aria-role="dialog" aria-modal>
       <template >
          <router-view @updated="handleUpdate"/>
        </template>
    </b-modal>
  </div>


	<footer>
		<p>Copyright by Nina Gluhak</p>
		<p>All rights reserved</p>
	</footer>

 </body> 

</template>






<script>

export default {
  name: 'Tasks',
  mounted (){
    fetch('http://localhost:8080/https://trefle.io/api/v1/plants?token=RFUVPiliIyGUqShN9e4veffcMROwrJH04nqr08bCgGM')
      .then((response) => response.json().data)
      .then((data) => {
        console.log(data)
        this.data = data
        this.checkedRows = data.filter(todo => todo.completed)
      })
  },
  methods:{
    handleCancel(){
      this.$router.push('/')
    },
    handleUpdate(todo){
      if (todo.common_name){
          this.data.find((t) => t.common_name == todo.common_name).scientific_name = todo.scientific_name
      } else{
        this.data.unshift({
        userId: 1,
        common_name: todo.common_name,
        scientific_name: todo.scientific_name,
        completed: false
        })
        this.$router.push('/')
      }

    }
  },
  
  data() {
            return {
                value: 1,
                checkedRows: [],
                data: [ ]
            }
        }
}
</script>








<style>
  .tasks{
    text-align: left;
  }

  .is-completed{
    text-decoration: line-through;
  }

  .is-completed [data-label = "Task name"]{
    opacity: 0.5;
  }





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
