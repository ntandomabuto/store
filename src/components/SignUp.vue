<template>
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <h1>Sign Up Form Whippy</h1>
            <!-- Using v-model to save data in properties -->
            <label>Email:</label>
            <input type="email" required v-model="email">
            <label>Password:</label>
            <input type="password" required v-model="password">
            <label>Role:</label>
            <!-- Select box -->
            <select v-model="role">
                <!-- default option  -->
                <option value="developer">Web developer</option>
                <option value="designer">Web designer</option>
                <option value="">Select a role</option>
            </select>
            <label>Languages:</label>
            <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage()">
            <button type="submit">submit</button>
            <div v-for="lang,index in Languages" :key="index+1">
                <p id="para" @click='deleteLang(lang)'>
                {{ index+1 }}:{{ lang }}</p>
            </div>
            <div class="terms">
                <!-- isn't it insane?, you can use on checkbox and when clicked, it can register a boolean value as true-->
                <input type="checkbox" required v-model="terms">
                <label> Accept Terms and Conditions</label>
            </div>
            <h4>People wanted in your team:</h4>
            <div>
                <input type="checkbox" value="Shawn" v-model="names">
                <label>Sean</label>
            </div>
            <div>
                <input type="checkbox" value="Sihlandlo" v-model="names">
                <label>Nathan</label>
            </div>
            <div>
                <input type="checkbox" value="Taahir" v-model="names">
                <label>Bruce</label>
            </div>
            <div>
                <p>Email:{{  email }}</p>
                <p>Password:{{ password }}</p>
                <p>role:{{ role }}</p>
                <p>Terms:{{ terms }}</p>
                <p>People:{{ names }}</p>
                <p>Current Language:{{ currentLanguage }}</p>
                <p>Languages:{{ languages }}</p>
            </div>
        </form>
        <!-- showing stored information in data function -->
        <div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            // if you want default value to be checked then change boolean to true
            terms: false,
            name:[],
            currentLanguage:'',
            Languages: ['something','nothing'],
        }
    },
    methods: {
        keyfinder(event){
            console.log(event);
        },
        deleteLang(lang){
            this.languages = this.languages.filter(item=> item !=lang)
        },
        formSubmit(){
            console.log('The page has refreshed');
            this.email = '',
            this.password = '',
            this.terms = '',
            this.currentLanguage = '',
            this.role = ''
        },computed:{
            addLanguage(){
            if (!this.languages.includes(this.currentLanguage)) {
                this.languages.push(this.currentLanguage)
            }}
        }
    },
    computed: {
    }
}
</script>
<style scoped>
    #parent{
        display: flex;
    }
    form{
        width: 20cap;
        padding: 5cap;
        text-align: center;
        margin-left: 25%;
        background-color: #092C4E;
        margin-left: auto;
        margin-right: auto;
    }
    input, select{
        background-color: #0B4580;
        border: 1px whitesmoke solid;
        border-radius: 5px;
        width: 250px;
        padding-bottom: 5px;
    }
    label{
       padding-top:5px ;
        width: 250px;
        text-align: left;
        font-size: small;
    }
    .terms{
       display: flex;
       width: 400px;
    }
    input[type='checkbox']{
        height: 16px;
        width: 16px;
        position: relative;
        top: 2px;
    }
    #para{
        width: 200px;
        height: 10px;
        box-sizing: content-box;
        border: white dashed 5px;
        margin: 0px;
        padding: 10px 10px 15px 5px;
        cursor: pointer;
    }
    #para:hover{
        background-color: aliceblue;
    }
</style>









