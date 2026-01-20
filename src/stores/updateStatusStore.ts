import { create } from 'zustand'

interface UpdateStatusState {
  isUpdating: boolean // 是否正在更新（数据库或前端）
  setIsUpdating: (updating: boolean) => void
}

export const useUpdateStatusStore = create<UpdateStatusState>((set) => ({
  isUpdating: false,
  setIsUpdating: (updating) => set({ isUpdating: updating })
}))
