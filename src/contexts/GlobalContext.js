import { create } from "zustand";

export const auth = create((set) => ({
    user:null,
    is_auth:false,
    login: (user) => set((state) => ({user: user, is_auth:true}))
}))