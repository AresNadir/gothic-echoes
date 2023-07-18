<template>
  <base-container>
    <section>
      <base-card>
        <ul>test
          <li>
            Post from Cat {{ category }}
            Post from id {{ id }}
          </li>
        </ul>
      </base-card>
    </section>
  </base-container>
</template>

<script> 
export default {
  props: ['id','category'],
  data() {
    return {
      
    };
  },
  computed: {
  },
}
</script>
