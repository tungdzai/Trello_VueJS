<template>
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot :url="url">Click Me</slot>
</a>
</template>
<script>
export default{
    name:'NavigationLink'
}
</script>