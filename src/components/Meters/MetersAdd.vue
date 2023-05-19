<template>
  <el-dialog
    v-model="metersStore.addMeterDialogFormVisible"
    title="Create Meter"
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
        label="Parent Site"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.siteId"
          placeholder="Select site"
        >
          <el-option
            v-for="site in sitesStore.sites"
            :key="site.id"
            :label="site.name"
            :value="site.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="Serial Number"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="form.serialNumber"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Installation Date"
        :label-width="formLabelWidth"
      >
        <el-date-picker
          v-model="form.installationDate"
          type="datetime"
          placeholder="Pick a date and time"
          style="width: 100%"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="circuitsStore.setAddCircuitDialogFormVisible(false)">Cancel</el-button>
        <el-button type="primary" @click="handleCreate">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useCircuitsStore } from '@/stores/circuits'
import { useMetersStore } from '@/stores/meters'
import { DateTime } from 'luxon';
import type { Meter } from '@/interfaces/Meter';
import { useSitesStore } from '@/stores/sites'

const circuitsStore = useCircuitsStore()
const sitesStore = useSitesStore()
const metersStore = useMetersStore()
const formLabelWidth = '140px'

const form = reactive<Meter>({
  installationDate: DateTime.now(),
  name: '',
  serialNumber: '',
  siteId: null
})

const handleCreate = async () => {
  await metersStore.createMeter(form)
  metersStore.setAddMeterDialogFormVisible(false)
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
