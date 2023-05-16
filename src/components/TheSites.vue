<template>
  <h1>Sites</h1>
  <el-button
    type="primary"
    icon="el-icon-plus"
    size="small"
  >
    Create New Site
  </el-button>

  <!-- For all the sites loaded from the sites pinia store, for each site, render a card with a title, content and operations using element-plus -->
  <el-card
    v-for="site in sites"
    :key="site.id"
    class="box-card"
    shadow="hover"
  >
    <div class="text item">
      <span class="title">{{ site.name }}</span>
      <span class="content">{{ site.address }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ site.coordinates }}</span>
      <span class="content">{{ site.postCode }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ site.createdAt }}</span>
      <span class="content">{{ site.updatedAt }}</span>
    </div>
    <div class="text item">
      <el-button
        type="primary"
        icon="el-icon-edit"
        size="small"
      >
        Edit
      </el-button>
      <el-button
        type="danger"
        icon="el-icon-delete"
        size="small"
      >
        Delete
      </el-button>
    </div>
  </el-card>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Site } from '@/interfaces/Site'
import { useSitesStore } from '@/stores/sites'
import { onMounted } from 'vue';
import type { Ref } from 'vue';

const sitesStore = useSitesStore()

// Create a ref to the sites data in the store using typescript
const sites: Ref<Site[]> = ref(sitesStore.sites)

onMounted(async () => {
  await sitesStore.fetchSites()
})
</script>
