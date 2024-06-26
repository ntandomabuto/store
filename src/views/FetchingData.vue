<template>
    <div>
        {{ $store.state.aboutMe }}
        <div v-for="project in projectData()" :key="project.name">
            <h1>{{ project.name }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        projectData(){
            this.$store.state.projects
        }
    },
    computed:{
        getAboutMe(){
            return this.$store.dispatch('getAboutMe')
        }
    },
    mounted(){
        this.getAboutMe
    }
}
</script>
<style>
    
</style>