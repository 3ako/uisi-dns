<template>
<div class="menu">
    <img src="../assets/logo.png" alt="" width="500">
     <el-menu
        :router = 'true'
        default-active="2"

      >
            <el-menu-item index="/theory">Теория</el-menu-item>
            <el-menu-item index="/test">Контроль знаний</el-menu-item>
            <a href="https://vk.com/mslotvinsky" target="_blank"><el-menu-item index="">ВКонтакте автора</el-menu-item></a>
            <a href="https://github.com/3ako" target="_blank"><el-menu-item index="">GitHub автора</el-menu-item></a>
      </el-menu>
</div>
</template>

<style scoped> 
.menu {
    max-width: 500px;
    margin: auto;
    margin-top: 10%;
    text-align: center ;
}
a {
    text-decoration: none;
    border: none;
}
.el-menu {
    border-right: none;
}
.el-menu-item {
    display: block !important;
    border-bottom: 1px solid #ccc;
}
.menu img {
    max-width: 100%;
}
</style>