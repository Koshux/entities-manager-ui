import { ref } from 'vue'
import { defineStore } from 'pinia'
import { watch } from 'vue'
import {
  ArrowLeftBold,
  ArrowRightBold,
} from '@element-plus/icons-vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapse = ref(false)
  const isCollapseIcon = ref(ArrowLeftBold)

  watch(isCollapse, newState => {
    if (newState) {
      isCollapseIcon.value = ArrowRightBold
    } else {
      isCollapseIcon.value = ArrowLeftBold
    }
  })

  const toggleSidebar = (): void => {
    isCollapse.value = !isCollapse.value
  }

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  return {
    isCollapse,
    isCollapseIcon,
    handleClose,
    handleOpen,
    toggleSidebar
  }
})
