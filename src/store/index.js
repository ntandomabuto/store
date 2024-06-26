import { createStore } from 'vuex'

export default createStore({
  state: {
    education:null,
    aboutMe:null,
    workExp:null,
    projects:null,
    testimonials:null,
    skills:null
  },//where we will store our data//work arlike a vr
  getters: {
    // filterData(){
    //   return Array.filter()
    // }
  },//normally be using filter, will be sorting
  mutations: {
    // updateData(state,payload){
    //   state.data = payload
    // }
    setAboutMe(state,hehe){
      state.aboutMe = hehe
    },
    setEducation(state,hehe){
      state.education = hehe
    },
    setWorkExp(state,hehe){
      state.workExp = hehe
    },
    setTestimonials(state,hehe){
      state.testimonials = hehe
    },
    setSkills(state,hehe){
      state.skills = hehe
    },
    setProjects(state,hehe){
      state.projects = hehe
    }

  },// what we use to change or update the state
  //commiting a mutation
  actions: {
    // fetchData(commit){
    //   commit
    // }
    // async getAboutMe(context){
    //   let fetchedInfo = await fetch('https://ntandomabuto.github.io/first-api/data/data.json');
    //   let {aboutMe} = await fetchedInfo.json();
    //   console.log('scc');
    //   context.commit('setAboutMe',aboutMe)
    // }
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://ntandomabuto.github.io/first-api/data/data.json');
      let data= await fetchedInfo.json();
      let {aboutMe,projects,education,skills,workExp,testimonials} = data
      console.log(data);
      commit('setAboutMe',aboutMe)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setProjects',projects)
      commit('setWorkExp',workExp)
      commit('setTestimonials',testimonials)
    //   console.log('scc');
    //   context.commit('setAboutMe',aboutMe)
     }
  },//run all async code/ if you can fetch
  //dispatching
  modules: {
  },//used if u want to seperate code and make it readable
  
})
