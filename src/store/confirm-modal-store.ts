import {create} from "zustand";

type ComfirmModalStatus = {
    open: boolean;
    content?: string;
}

interface ConfirmModalState{
    modal: ComfirmModalStatus;
    setModal: (modal:ComfirmModalStatus) => void;
}

export const confirmModalStore = create<ConfirmModalState>((set) => ({
    modal: {open: false, content: '', },
    setModal: (modal:ComfirmModalStatus) => set((state:any) => ({modal:{...state.modal, ...modal}}))
}))