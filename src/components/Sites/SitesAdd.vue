<template>
  <el-dialog
    v-model="sitesStore.addSiteDialogFormVisible"
    title="Create Site"
    close-on-click-modal="false"
  >
    <el-form :model="form">
      <el-form-item
        label="Name"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Customer link"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.customerId"
          placeholder="Select customer"
        >
          <el-option
            v-for="site in profileStore.customers"
            :key="site.id"
            :label="site.name"
            :value="site.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="Coordinates"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.coordinates"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Address"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.address"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Post Code"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.postCode"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="sitesStore.setAddSiteDialogFormVisible(false)">Cancel</el-button>
        <el-button type="primary" @click="handleCreate">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useSitesStore } from '@/stores/sites'

import type { Site } from '@/interfaces/Site'
import { useProfileStore } from '@/stores/profile'

const sitesStore = useSitesStore()
const profileStore = useProfileStore()

const formLabelWidth = '140px'

const form = reactive<Site>({
  name: '',
  coordinates: '',
  address: '',
  postCode: '',
  customerId: null
})

const handleCreate = async () => {
  await sitesStore.createSite(form)
  sitesStore.setAddSiteDialogFormVisible(false)
}
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
