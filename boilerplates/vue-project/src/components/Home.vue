<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onMounted,ref,nextTick } from 'vue';
const val = ref(1)
onMounted(async () =>{
    console.log({val:val.value})
    val.value++;
    await nextTick()
    console.log({val:val.value})
    
})
</script>

<style scoped>

</style>