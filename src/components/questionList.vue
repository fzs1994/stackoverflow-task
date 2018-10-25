<template>
  <div class="QuestionsList">
	<div class="card" v-for="(item, index) in items">
	  <div class="row">
	    <div class="col-md-3">
	      <div class="row">
	        <div class="col-md-4" align="center">
	          {{item.score}}
	          <br>
	          votes
	        </div>

	        <div class="col-md-4" align="center">
	          {{item.view_count}}
	          <br>
	          views
	        </div>

	        <div class="col-md-4" align="center">
	          {{item.answer_count}}
	          <br>
	          answers
	        </div>
	      </div>
	    </div>
	    <div class="col-md-9">

	      <div class="bounty">
	        <span>Bounty: <span style="color: #00FF00">{{item.bounty_amount}}</span></span>
	      </div>

	      <h3>{{item.title}}</h3>     

	      <div class="tags">
	        <span v-for="tag in item.tags">
	          {{tag}}
	        </span>
	      </div>

	      <div class="other-details">
	        <span>Modified at: {{item.last_edit_date | momentDate}}</span> by: <a :href="'/profile/' + item.owner.user_id">{{item.owner.display_name}}</a>
	      </div>
	    </div>
	  </div>
	    
	</div> 
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'QuestionsList',
  props: ['items'],
  data () {
    return {
      name: ''
    }
  },
  component: {
  },
  methods: {
  	
  },
  filters: {
    momentDate(value) {
      return moment(value).format('DD MM YYYY')
    }
  },
  mounted () {
  	
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

.tags span {
  background-color: #AAA;
  color: #FFF;
  margin: 0 2px;
  padding: 2px 5px;
  border-radius: 3px;
}
</style>
