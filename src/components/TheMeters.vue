<template>
  <h1>Meters</h1>

  <!-- Render a grid container to house the create new meter button and cards of the loaded meters ref using element-plus -->
  <div class="grid-container">
    <!-- Separate  the button and cards by grid rows -->
    <div class="grid-row">
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="small"
      >
        Create New Meter
      </el-button>
    </div>

    <div class="grid-row">
      <!-- For all the meters loaded from the meters pinia store, for each meter, render a card with a title, content and operations using element-plus -->
      <el-card
        v-for="meter in meters"
        :key="meter.id"
        class="box-card"
        shadow="hover"
      >
        <div class="text item">
          <span class="title">{{ meter.name }}</span>
          <span class="content">{{ meter.serialNumber }}</span>
        </div>
        <div class="text item">
          <span class="title">{{ meter.createdAt }}</span>
          <span class="content">{{ meter.updatedAt }}</span>
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Meter } from '@/interfaces/Meter'
import { useMetersStore } from '@/stores/meters'
import { onMounted } from 'vue'
import type { Ref } from 'vue'

const metersStore = useMetersStore()

const meters: Ref<Meter[]> = ref(metersStore.meters)

onMounted(async () => {
  await metersStore.fetchMeters()
})

</script>
