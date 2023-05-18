<template>
  <el-dialog
    v-model="circuitsStore.addCircuitDialogFormVisible"
    title="Create Circuit"
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
        label="Parent Meter"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.meterId"
          placeholder="Select meter"
        >
          <el-option
            v-for="meter in metersStore.meters"
            :key="meter.id"
            :label="meter.name"
            :value="meter.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="Parent Circuit"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="form.circuitId"
          placeholder="Select meter"
        >
          <el-option
            v-for="circuit in circuitsStore.circuits"
            :key="circuit.id"
            :label="circuit.name"
            :value="circuit.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="Is main"
        :label-width="formLabelWidth"
      >
        <el-checkbox
          v-model="form.isMain"
          size="large"
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
        <el-button type="primary" @click="circuitsStore.createCircuit(form)">
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
import type { Circuit } from '@/interfaces/Circuit'
import { DateTime } from 'luxon';

const circuitsStore = useCircuitsStore()
const metersStore = useMetersStore()
const formLabelWidth = '140px'

const form = reactive<Circuit>({
  circuitId: null,
  installationDate: DateTime.now(),
  isMain: false,
  meterId: 0,
  name: ''
})
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
