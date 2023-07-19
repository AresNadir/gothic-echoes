<template>
  <div>
    <h2>Subscribe to newsletter</h2>
    <form @submit.prevent="submitForm">
      <label for="email">Email</label>
      <input type="email">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log('form submited');
    }
  }
}
</script>