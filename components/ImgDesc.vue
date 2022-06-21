<template>
  <div>
    <p>{{ desc }}</p>
    <img class="image" :src="require(`@/static/images/${src}`)">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ImgDesc extends Vue {
  @Prop({ required: true }) readonly src!: string;
  @Prop({ required: true }) readonly desc!: string;
}
</script>

<style scoped>
img.image {
  max-width: 600px;
}
</style>
