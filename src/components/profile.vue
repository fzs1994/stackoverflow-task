<template>
  <div class="Profile container">
  	<h1>User Profile</h1>

    <div class="profile">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-card" align="center">
            <img :src="userDetails.profile_image" :alt="userDetails.user_id" class="img-fluid">

            <span class="reputation">{{userDetails.reputation}}</span>

            <div class="badges">
              <span v-for="(badge, name, index) in userDetails.badge_counts">
                {{name}} : {{badge}}
              </span>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card">
            <h2>{{userDetails.display_name}}</h2>  

            <span v-if="userDetails.location">Location : {{userDetails.location}}</span>

            <span v-if="userDetails.website_url && userDetails.website_url !== ''" >Website: <a :href="userDetails.website_url">{{userDetails.website_url}}</a></span>
            
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <h2>Top Tags: </h2>

            <div class="badges">
              <span v-for="tag in userTags">
                {{tag.name}} : {{tag.count}}
              </span>  
            </div>
            
          </div>  
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <h2>Top Questions: </h2>

            <QuestionsList :items="topQuestionsList"></QuestionsList>
            
          </div>  
        </div>
        
      </div>


    </div>

  </div>
</template>

<script>
import axios from 'axios'
import QuestionsList from './questionList'
export default {
  name: 'Profile',
  data () {
    return {
      id: null,
      userDetails: {},
      userTags: [],
      topQuestionsList: []
    }
  },
  components: {
    QuestionsList
  },
  methods: {
  	
  },
  mounted () {
  	this.id = this.$route.params.id

    axios.get('https://api.stackexchange.com/2.2/users/'+this.id+'?order=desc&sort=reputation&site=stackoverflow')
    .then( (response) => {
      console.log(response.data.items[0]);
      this.userDetails = response.data.items[0]
    })
    .catch( (error) => {
      console.log(error);
    });

    axios.get('https://api.stackexchange.com/2.2/users/'+this.id+'/tags?order=desc&sort=popular&site=stackoverflow')
    .then( (response) => {
        console.log(response);
        this.userTags = response.data.items
    })
    .catch((error) => {
        console.log(error);
    });

    axios.get('https://api.stackexchange.com/2.2/users/'+this.id+'/questions?order=desc&sort=activity&site=stackoverflow')
    .then( (response) => {
        console.log(response);
        this.topQuestionsList = response.data.items
    })
    .catch((error) => {
        console.log(error);
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-shadow: 0px 0px 15px #DADADA;
  padding: 10px 20px;
  margin: 15px;
  background-color: #FFF;
  border-radius: 5px;
}

.profile-card{
  box-shadow: 0px 0px 15px #DADADA;
  padding: 10px 20px;
  margin: 15px;
  background-color: #FFF;
  border-radius: 5px;
}

.img-fluid{
  width: 100%;
}

.reputation{
  font-weight: bold;
}

.badges span{
  display: inline-block;
  background-color: #AAA;
  color: #FFF;
  margin: 2px 2px;
  padding: 2px 5px;
  border-radius: 3px;
  text-transform: capitalize;
}
</style>
