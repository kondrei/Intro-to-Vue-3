app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name" >Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating" >Rating:</label>
    <select id="rating" v-model="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <p v-if="error">complete all fields</p>
    <input type="checkbox" id="reccomend" v-model="reccomend" />
    <label for="reccomend">Did you reccomend this product</label>
    <input class="button" type="submit" value="Submit">
  </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            error: false,
            reccomend: false
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                this.error = true
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                reccomend: this.reccomend
            }
            this.$emit('review-submited', productReview)
            this.name = ''
            this.review = ''
            this.rating = ''
            this.reccomend = false

        }
    }
})