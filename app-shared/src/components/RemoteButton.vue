<script setup>
    import { ref } from 'vue';
    const counter = ref(0);
    const onClick = () => {
        counter.value++;
        console.log('Button clicked from module-01');
    };
</script>

<template>
    <button @click="onClick">Remote Button Clicked {{ counter }} times</button>
</template>
