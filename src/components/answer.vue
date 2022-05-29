<template>
  <el-card class="box-card">
    <template #header>
        <h2>{{title}}</h2>
    </template>
    <el-radio-group v-model="select" @change="$emit('answer',sendAnswer())">
    <div class="block">
        <div  v-for='item in answers'>
            <el-radio  :label="item" size="large">{{item}}</el-radio>
        </div>
    </div>

    </el-radio-group>
  </el-card>
</template>

<script lang="ts">
export default {
    emits: ['answer'],
    props: ['title','answers','correct'],
    data(){return{
        select: null
    }},methods: {
        sendAnswer(){
            console.log(this.correct,this.select,(this.correct == this.select))
            return (this.correct == this.select)
        }
    }
}
</script>