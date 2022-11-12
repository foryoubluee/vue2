<template>
  <div class="w-full flex flex-col items-center">
    <img :src="image" alt="propose flow" />
    <h1 class="w-full text-center font-serif text-5xl">
      <i>{{ id }}</i>
    </h1>
    <div class="text-center font-JP space-y-5 mt-6 mb-7">
      <span v-for="p in paragraph" class="text-lg font-semibold">
        <p>{{ p }}</p>
      </span>
      <p class="font-light">
        {{ longParagraph }}
      </p>
    </div>
    <ListButton />
  </div>
</template>

<script>
import ListButton from './ListButton.vue'

export default {
  name: 'Flow',
  props: ['image', 'id', 'paragraph', 'longParagraph'],
  components: { ListButton }
}
</script>
