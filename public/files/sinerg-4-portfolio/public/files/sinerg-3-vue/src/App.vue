<template>
  
  <h1>Список задач</h1>

  <div class="container">
    <div class="add-task">
      <input type="text" placeholder="Введи задачу" class="in" v-model="taskName" v-on:keyup.enter="addTask">
      <button class="btn btn-add" @click="addTask">Добавить</button>
    </div>

    <div class="content">
      <div class="task" v-for="(task, index) in filteredList" :key="index" @click="toggleCompletion(task)" :class="{ completed: task.completed }">
        <span class="checkmark" v-if="task.completed">✔️</span>
        <p class="text_task" :class="{ completed: task.completed }">{{ task.text }}</p>
        <button class="btn btn-delete" @click.stop="deleteTask(index)">Удалить</button>
      </div>
    </div>

    <div class="footer">
      <hr>

      <button class="btn btn-sort" @click="sort">Сортировать</button>
      <button class="btn btn-delete-all" @click="deleteAll">Удалить все</button>
      <p class="counter">Активных задач: {{ activeTaskCount }}</p>
    </div>

  </div>

</template>

<script>

export default {
  data() {
    return {
      taskName: '',
      list: [],
      filter: 'all'
    };
  },

  methods: {
    addTask() {
      if (this.taskName.trim()) {
        this.list.push({ text: this.taskName, completed: false });
        this.taskName = '';
      }
    },

    // выполнена/не выполнена задача
    toggleCompletion(task) {
      task.completed = !task.completed;
    },

    // сортировка
    sort() {
      this.list.sort(function(a, b) {
        return a.text.localeCompare(b.text);
      });
    },

    // удаление определеннного элемента
    deleteTask(index) {
      this.list.splice(index, 1);
    },

    // удалить все элементы
    deleteAll() {
      this.list = [];
    }
  },

  // фильтрация
  computed: {
    filteredList() {
      return this.list.filter(task => {
        if (this.filter === 'completed') return task.completed;
        if (this.filter === 'active') return !task.completed;
        return true;
      });
    },

    // счетчик
    activeTaskCount() {
      return this.list.filter(task => !task.completed).length;
    }
  }
};

</script>

<style scoped>

</style>
