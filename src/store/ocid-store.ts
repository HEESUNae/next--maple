import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface OcidState {
    ocid: string;
    setOcid: (ocid: string) => void;
}

export const ocidStore = create(
    persist<OcidState>(
        (set, get)=> ({
        ocid: '',
        setOcid: (ocid:string) => set(() => ({ocid})),
    }),
        {
            name: 'user-ocid',
            storage: createJSONStorage(() => sessionStorage),
        }
    ),
);
