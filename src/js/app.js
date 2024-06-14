const MyNameApp = {
    data() {
      return {
        name: "",
        age:"",
        xp:"",
        work:"",
        input_name:"",
        input_age:"",
        input_xp:"",
        input_work:""
      }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input_name)
            this.name = this.input_name;
            this.age = this.input_age;
            this.xp = this.input_xp;
            this.work = this.input_work;
        }
    }
  }
  
  Vue.createApp(MyNameApp).mount("#app");
  