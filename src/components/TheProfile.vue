<template>
  <el-card
    class="box-card"
    shadow="hover"
  >
    <el-form
      :model="form"
      label-width="120px"
    >
      <el-form-item label="Customer name">
        <el-input v-model="form.name" clearable />
      </el-form-item>

      <el-form-item label="Email">
        <el-input v-model="form.email" clearable />
      </el-form-item>

      <el-form-item label="VAT Number">
        <el-input v-model="form.vatNumber" clearable />
      </el-form-item>

      <el-form-item label="Created at">
        <el-input v-model="form.createdAt" disabled clearable />
      </el-form-item>

      <el-form-item label="Updated at">
        <el-input v-model="form.updatedAt" disabled clearable />
      </el-form-item>
    </el-form>

    <div class="text item">
      <el-button
        type="primary"
        :icon="Check"
        size="small"
        @click="updateProfile"
      >
        Save
      </el-button>
      <el-button
        type="danger"
        :icon="Delete"
        size="small"
        disabled
      >
        Delete
      </el-button>
    </div>
  </el-card>


</template>

<script setup lang="ts">
// Implement the same logic as TheSites.vue but instead load the profile data from the profile pinia store
import { computed, reactive, ref } from 'vue'
import { onMounted } from 'vue'

import type { ComputedRef } from 'vue'
import type { Ref } from 'vue'
import type { Customer } from '@/interfaces/Customer'

import { useProfileStore } from '@/stores/profile'
import { DateTime } from 'luxon'
import { watch } from 'vue'
import { Check, Delete } from '@element-plus/icons-vue'

const profileStore = useProfileStore()

const form = reactive({
  name: '',
  email: '',
  vatNumber: '',
  createdAt: '',
  updatedAt: ''
})

const customerProfile: Ref<Customer | null> = ref(profileStore.customerProfile)

const createdAt: ComputedRef<string> = computed(() => {
  return DateTime.fromISO(customerProfile.value?.created_at ?? '')
    .toLocaleString(DateTime.DATETIME_MED)
})

const updatedAt: ComputedRef<string> = computed(() => {
  return DateTime.fromISO(customerProfile.value?.updated_at ?? '')
    .toLocaleString(DateTime.DATETIME_MED)
})

const name: ComputedRef<string> = computed(() => {
  return customerProfile.value?.name ?? ''
})

const email: ComputedRef<string> = computed(() => {
  return customerProfile.value?.email ?? ''
})

const vatNumber: ComputedRef<string> = computed(() => {
  return customerProfile.value?.vat_number ?? ''
})

const updateProfile = async (): Promise<void> => {
  const sanitisedFormData = {
    name: form.name,
    email: form.email,
    vatNumber: form.vatNumber
  }

  const sanitisedCustomerProfile = {
    name: customerProfile.value?.name ?? '',
    email: customerProfile.value?.email ?? '',
    vatNumber: customerProfile.value?.vat_number ?? ''
  }

  if (JSON.stringify(sanitisedFormData) !== JSON.stringify(sanitisedCustomerProfile)) {
    await profileStore.updateProfile({
      id: customerProfile.value?.id ?? 1,
      name: form.name,
      email: form.email,
      vatNumber: form.vatNumber
    })

    customerProfile.value = profileStore.customerProfile
  }
}

watch(customerProfile, () => {
  form.name = name.value
  form.email = email.value
  form.vatNumber = vatNumber.value
  form.createdAt = createdAt.value
  form.updatedAt = updatedAt.value
})

onMounted(async () => {
  // This will be the selected customer ID from the dropdown of customers
  // loaded from /profile. Eventually, it can be the ID of the logged in user.
  const mockedId = 1
  await profileStore.fetchProfile(mockedId)
  customerProfile.value = profileStore.customerProfile
})
</script>
