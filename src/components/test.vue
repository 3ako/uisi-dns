<template>
<div class="theory">
  <el-card class="box-card" shadow="Never">
    <template #header>
      <div class="card-header">
        <h2>Тест на знание базовой теории</h2>
         <router-link to='/'><el-button type="info"><el-icon><ArrowLeftBold /></el-icon>Вернуться в меню</el-button></router-link>
      </div>
    </template>
    <div v-for="item in answers" style="margin-top:10px">
    <Answer  @answer="(data)=>setAnswer(data,item.title)" :title="item.title" :answers="item.answers" :correct="item.correct"> </Answer>

    </div>
    <el-button style="margin-top:10px;" @click="result()" type='success'>Закончить тест</el-button>
  </el-card>
</div>
  <el-dialog v-model="dialogTableVisible" title="Результаты теста">
        <el-alert :closable="false"  v-for="(item,i) in results" :title="i" :type="(item?'success':'error')" show-icon />
  </el-dialog>
</template>
<script setup>
import Answer from './answer.vue';
const answers = [
    {
        title: 'Что такое DNS?',
        answers : ['Система доменных имен','Система беспроводной передачи данных','Система сбора статистики'],
        correct: 'Система доменных имен'
    },{
        title: 'Что в себе хранят DNS сервера?',
        answers : ['Статистику посещения сайтов','Данные о доменах','Ничего не хранят'],
        correct: 'Данные о доменах'
    },{
        title: 'Что такое NS запись?',
        answers : ['Адрес DNS-сервера, который отвечает за содержимое других ресурсных записей.','Адрес почтового сервера','Любая текстовая запись','Адрес веб-ресурса'],
        correct: 'Адрес DNS-сервера, который отвечает за содержимое других ресурсных записей.'
    },{
        title: 'Что такое DNS-сервер?',
        answers : ['Сервер, хранящий HTML','Сервер, хранящий данных пользователей','"Книга контактов" с ip адресами вместо номеров'],
        correct: '"Книга контактов" с ip адресами вместо номеров'
    },{
        title: 'Что хранят "Файлы зон" DNS? ',
        answers : ['Глобальное время жизни (TTL)','Запись Start of Authority (SOA)','Одна или несколько записей ресурсов','Все ответы верны'],
        correct: 'Все ответы верны'
    }
]

</script>
<script>
export default {
    data(){return{
        results: {},
        dialogTableVisible: false
    }},
    methods: {
        setAnswer (data,title){
            console.log('+',data,title)
            this.results[title] = data
        },result(){
            this.dialogTableVisible = true
        }
    }
}
</script>
<style scoped>
.theory {
    width: 1000px;
    max-width: 100%;
    margin: auto;
}
a:-webkit-any-link  {
    text-decoration: none !important;
}
</style>