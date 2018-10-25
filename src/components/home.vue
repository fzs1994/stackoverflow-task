<template>
  <div class="Home">
    <div class="container">
      <h2>Top Qestions</h2>
      
      <QuestionsList :items="questionsList"></QuestionsList>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import QuestionsList from './questionList'
export default {
  name: 'Home',
  data () {
    return {
      questionsList: []
    }
  },
  components: {
    QuestionsList
  },
  methods: {
  	
  },
  
  mounted () {
  	axios.get('https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow')
    .then( (response) => {
      console.log('Data: ', response.data.items)
      this.questionsList = response.data.items
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
