<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Dashboard</RouterLink>
      </li>
      <li>
        <RouterLink to="/customers">Customers</RouterLink>
      </li>
      <li>
        <RouterLink to="/sites">Sites</RouterLink>
      </li>
      <li>
        <RouterLink to="/meters">Meters</RouterLink>
      </li>
      <li>
        <RouterLink to="/circuits">Circuits</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{}>()
</script>
