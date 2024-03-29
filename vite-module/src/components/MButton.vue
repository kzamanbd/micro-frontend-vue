<script setup>
    const onClick = () => {
        console.log('Button clicked from module-02');
    };
</script>

<template>
    <button @click="onClick">Click me</button>
</template>
