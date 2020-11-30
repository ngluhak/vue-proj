<template>
  <div class="tasks">
    <b-button @click="$router.push('/add')">Add new todo item</b-button>
    <b-table checkable :checked-rows.sync="checkedRows" :data="data" :row-class="(row) => checkedRows.includes(row) && 'is-completed'">
      
      <b-table-column v-slot="props">
        {{ props.row.title}}
      </b-table-column>

      <b-table-column v-slot="props">
        <b-button size="is-small" type="is-primary is-light" @click="$router.push('/edit/' + props.row.id)">Edit</b-button>
      </b-table-column>

    </b-table>
    

    <b-modal :active="$route.name == 'AddTodo'" :on-cancel="handleCancel" aria-role="dialog" aria-modal>
       <template >
          <router-view @updated="handleUpdate"/>
        </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Tasks',
  mounted (){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        this.data = data
        this.checkedRows = data.filter(todo => todo.completed)
      })
  },
  methods:{
    handleCancel(){
      this.$router.push('/')
    },
    handleUpdate(todo){
      if (todo.id){
          this.data.find((t) => t.id == todo.id).title = todo.title
      } else{
        this.data.unshift({
        userId: 1,
        id: this.data.length + 1,
        title: todo.title,
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
</style>
