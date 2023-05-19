<template>
  <h1>Circuits</h1>
  <el-button
    type="primary"
    :icon="Plus"
    size="small"
    @click="circuitsStore.setAddCircuitDialogFormVisible(true)"
  >
    Create New Circuit
  </el-button>
  <CircuitsAdd />

  <el-card
    v-for="circuit in circuits"
    :key="circuit.id"
    class="box-card"
    shadow="hover"
  >
    <div class="text item">
      <span class="title">{{ circuit.name }}</span>
      <span class="content">{{ circuit.installationDate }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ circuit.isMain }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ circuit.createdAt }}</span>
      <span class="content">{{ circuit.updatedAt }}</span>
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
        @click="circuitsStore.deleteCircuit(circuit)"
      >
        Delete
      </el-button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
// Using what we have done in TheSites.vue, TheProfile.vue, and TheMeters.vue, implement the same logic for TheMeters.vue such that it calls fetchCircuits which is a async function in the meters pinia store and renders the meters data in a card using element-plus and typescript
import { ref } from 'vue';
import { useCircuitsStore } from '@/stores/circuits'
import { onMounted } from 'vue';
import type { Ref } from 'vue';
import type { Circuit } from '@/interfaces/Circuit.js'
import { Delete, Edit, Plus } from '@element-plus/icons-vue';
import CircuitsAdd from '@/components/Circuits/CircuitsAdd.vue'
import { watch } from 'vue';

const circuitsStore = useCircuitsStore()
const circuits: Ref<Circuit[]> = ref(circuitsStore.circuits)

onMounted(async () => {
  await circuitsStore.fetchCircuits()
})

watch(() => circuitsStore.circuits, () => {
  circuits.value = circuitsStore.circuits
})
</script>
