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
        <el-input v-model="form.name" :disabled="!isEditable" clearable />
      </el-form-item>

      <el-form-item label="Email">
        <el-input v-model="form.email" :disabled="!isEditable" clearable />
      </el-form-item>

      <el-form-item label="VAT Number">
        <el-input v-model="form.vatNumber" :disabled="!isEditable" clearable />
      </el-form-item>

      <el-form-item label="Created at">
        <el-input v-model="form.createdAt" :disabled="!isEditable" clearable />
      </el-form-item>

      <el-form-item label="Updated at">
        <el-input v-model="form.updatedAt" :disabled="!isEditable" clearable />
      </el-form-item>
    </el-form>

    <div class="text item">
      <el-button
        type="primary"
        :icon="editButtonIcon"
        size="small"
        @click="toggleEditable"
      >
        {{ isEditable ? 'Save' : 'Edit' }}
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
import { Check, Delete, Edit } from '@element-plus/icons-vue'
import type { DefineComponent } from 'vue'

const profileStore = useProfileStore()

const isEditable = ref(false)
const form = reactive({
  name: '',
  email: '',
  vatNumber: '',
  createdAt: '',
  updatedAt: ''
})

// Create a ref to the profile data in the store using typescript
const customerProfile: Ref<Customer | null> = ref(profileStore.customerProfile)

const createdAt: ComputedRef<DateTime> = computed(() => {
  return DateTime.fromISO(customerProfile.value?.created_at).toLocaleString(DateTime.DATETIME_MED)
})

const updatedAt: ComputedRef<DateTime> = computed(() => {
  return DateTime.fromISO(customerProfile.value?.updated_at).toLocaleString(DateTime.DATETIME_MED)
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

const editButtonIcon: ComputedRef<DefineComponent> = computed(() => {
  return isEditable.value ? Check : Edit
})

// Create a function that will compare the form data with the profile data in the store and update the profile data in the store if the form data is different from the profile data in the store
const updateProfile = async (): Promise<void> => {
  const sanitisedFormData = {
    name: form.name,
    email: form.email,
    vatNumber: form.vatNumber,
    createdAt: new Date(form.createdAt).toISOString(),
    updatedAt: new Date(form.updatedAt).toISOString()
  }

  console.log('update profile:', DateTime.fromISO(new Date(form.createdAt)).to)
  console.log('update profile:', JSON.parse(JSON.stringify(sanitisedFormData)))
  console.log('update profile:', JSON.parse(JSON.stringify(customerProfile.value)))
  if (JSON.stringify(sanitisedFormData) !== JSON.stringify(customerProfile.value)) {
    await profileStore.updateProfile({
      id: customerProfile.value?.id ?? 1,
      name: form.name,
      email: form.email,
      vat_number: form.vatNumber,
      created_at: form.createdAt,
      updated_at: form.updatedAt
    })
  }
}

const toggleEditable = (): void => {
  isEditable.value = !isEditable.value

  if (isEditable.value) {
    updateProfile()
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
