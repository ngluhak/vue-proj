<template>
  <form>
      <b-input v-model="todo.title" placeholder="upisi ime todo itema"></b-input>
        
      <b-button v-if="$route.params.id" @click="addTodo" type="is-primary">Update todo</b-button>
    <b-button v-else @click="addTodo" type="is-primary">Novi todo</b-button>
  
  </form>
</template>

<script>
export default {
    data (){
        return{
            todo: {
                id: null,
                title: ''
            }
            
        }
    },
    methods: {
        addTodo() {
            this.$emit('updated', this.todo)
        }
    },
    mounted (){
        if(this.$route.params.id){
            fetch('https://jsonplaceholder.typicode.com/todos/' + this.$route.params.id)
                .then((response) => response.json())
                .then((data) => {
                    this.todo = data
                })
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   form{
       display:flex;
       margin: 0 auto;
       padding: 40px;
       max-width: 600px;
   }
   div{
       flex:1;
       margin-right: 20px;
   }
    button{
        margin-top: auto;
    }
</style>
