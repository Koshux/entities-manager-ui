<template>
  <h1>Meters</h1>
  <div class="grid-container">
    <div class="grid-row">
      <el-button
        type="primary"
        :icon="Plus"
        size="small"
        @click="metersStore.setAddMeterDialogFormVisible(true)"
      >
        Create New Meter
      </el-button>
      <MetersAdd />
    </div>

    <div class="grid-row">
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
            :icon="Edit"
            size="small"
            disabled
          >
            Edit
          </el-button>
          <el-button
            type="danger"
            :icon="Delete"
            size="small"
          >
            Delete
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Meter } from '@/interfaces/Meter'
import { useMetersStore } from '@/stores/meters'
import { onMounted } from 'vue'
import type { Ref } from 'vue'
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import MetersAdd from '@/components/Meters/MetersAdd.vue'

const metersStore = useMetersStore()

const meters: Ref<Meter[]> = ref(metersStore.meters)

onMounted(async () => {
  await metersStore.fetchMeters()
})

</script>
