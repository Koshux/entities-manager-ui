<template>
  <el-card
    class="box-card"
    shadow="hover"
  >
    <div class="text item">
      <span class="title">{{ customerProfile?.name }}</span>
      <span class="content">{{ customerProfile?.email }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ customerProfile?.vatNumber }}</span>
    </div>
    <div class="text item">
      <span class="title">{{ customerProfile?.createdAt }}</span>
      <span class="content">{{ customerProfile?.updatedAt }}</span>
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
// Implement the same logic as TheSites.vue but instead load the profile data from the profile pinia store
import { ref } from 'vue';
import type { Customer } from '@/interfaces/Customer'
import { useProfileStore } from '@/stores/profile'
import { onMounted } from 'vue';
import type { Ref } from 'vue';

const profileStore = useProfileStore()

// Create a ref to the profile data in the store using typescript
const customerProfile: Ref<Customer | null> = ref(profileStore.customerProfile)

// Call the fetchProfile action from the profile pinia store
onMounted(async () => {
  await profileStore.fetchProfile()
})

</script>
