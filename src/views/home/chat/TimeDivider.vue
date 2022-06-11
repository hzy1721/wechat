<script setup lang="ts">
import { moreReadableTime } from "@/assets/ts/time";

const props = defineProps<{
  time: Date
}>();
</script>

<template>
  <div class="time-divider">
    {{ moreReadableTime(time) }}
  </div>
</template>

<style lang="scss">
.time-divider {
  text-align: center;
  color: #A6A6A6;
  margin: 20px 0;
}
</style>