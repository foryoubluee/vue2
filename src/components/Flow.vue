<template>
  <div class="w-full flex flex-col justify-between items-center">
    <div class="w-full flex flex-col items-center">
      <img :src="image" alt="propose flow" />
      <h1 class="w-full text-center font-serif text-5xl mt-4">
        <i>{{ id }}</i>
      </h1>
      <div class="font-JP space-y-5 mt-4 mb-7">
        <span v-for="p in paragraph" class="text-center text-base font-semibold">
          <p>{{ p }}</p>
        </span>
        <p class="font-light text-left text-sm">
          {{ longParagraph }}
        </p>
      </div>
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
