<template>
  <div>
    <h1>{{ result.name }}</h1>
    <p> Scored{{ result.marks }} and stood {{ result.postion}} in {{ result.class }} class.</p>
    <p>Remarks:{{ result.remarks }}</p>
  </div>
</template>

<script>
import ResultService from '@/services/ResultService.js'
export default {
  props:['id'],
  data() {
    return {
      result: null
    }
  },
  created() {
     ResultService.getResult (this.id)
    .then(response => {
      this.result = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>