import { MenuBuburTim, TypeMenuBuburTim } from "@/types"
import { MENU_AYAM, MENU_BAYAM, MENU_BIT_ROOT, MENU_HATI, MENU_KACANG_HIJAU, MENU_KACANG_MERAH, MENU_KAKAP, MENU_LABU, MENU_LELE, MENU_PATIN, MENU_SALMON, MENU_SAPI, MENU_SEREALIA, MENU_TUNA, MENU_WORTEL } from "./ingredients"

export const TYPE_MENU_BUBUR_TIM: Array<TypeMenuBuburTim> = [
    {
        prefix: 'W',
        name: 'High Fat / Weighhealthy',
        price: 4500,
        desc: '+ Lemak & Asam Amino', //TBD, need confirm
    },
    {
        prefix: 'F',
        name: 'Inulin / Fittummy',
        price: 4000,
    },
    {
        prefix: 'L',
        name: 'Vit B / Levapetite',
        price: 4000,
    },
    {
        prefix: 'D',
        name: 'EPA DHA / Brainby',
        price: 4000,
    },
]

export const LIST_MENU_BUBUR_TIM: Array<MenuBuburTim> = [
    {
        code: 'W1',
        ingredients: [
            MENU_LABU,
            MENU_AYAM,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'W2',
        ingredients: [
            MENU_BIT_ROOT,
            MENU_SAPI,
            MENU_KACANG_MERAH,
        ],
    },
    {
        code: 'W3',
        ingredients: [
            MENU_KACANG_HIJAU,
            MENU_SALMON,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'W4',
        ingredients: [
            MENU_BAYAM,
            MENU_AYAM,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'W5',
        ingredients: [
            MENU_LABU,
            MENU_TUNA,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'W6',
        ingredients: [
            MENU_WORTEL,
            MENU_SAPI,
            MENU_KACANG_MERAH,
        ],
    },
    {
        code: 'W7',
        ingredients: [
            MENU_BAYAM,
            MENU_PATIN,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F1',
        ingredients: [
            MENU_KACANG_HIJAU,
            MENU_SALMON,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F2',
        ingredients: [
            MENU_BAYAM,
            MENU_AYAM,
            MENU_SEREALIA
        ],
    },
    {
        code: 'F3',
        ingredients: [
            MENU_WORTEL,
            MENU_SAPI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F4',
        ingredients: [
            MENU_BAYAM,
            MENU_PATIN,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F5',
        ingredients: [
            MENU_KACANG_HIJAU,
            MENU_SAPI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F6',
        ingredients: [
            MENU_BAYAM,
            MENU_TUNA,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'F7',
        ingredients: [
            MENU_WORTEL,
            MENU_AYAM,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'L1',
        ingredients: [
            MENU_KACANG_HIJAU,
            MENU_SAPI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'L2',
        ingredients: [
            MENU_WORTEL,
            MENU_TUNA,
            MENU_KACANG_HIJAU,
        ],
    },
    {
        code: 'L3',
        ingredients: [
            MENU_LABU,
            MENU_AYAM,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'L4',
        ingredients: [
            MENU_KACANG_HIJAU,
            MENU_SALMON,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'L5',
        ingredients: [
            MENU_WORTEL,
            MENU_PATIN,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'L7',
        ingredients: [
            MENU_LABU,
            MENU_SAPI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D1',
        ingredients: [
            MENU_WORTEL,
            MENU_HATI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D2',
        ingredients: [
            MENU_BAYAM,
            MENU_SALMON,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D3',
        ingredients: [
            MENU_LABU,
            MENU_TUNA,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D4',
        ingredients: [
            MENU_LABU,
            MENU_SAPI,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D5',
        ingredients: [
            MENU_BIT_ROOT,
            MENU_LELE,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D6',
        ingredients: [
            MENU_BAYAM,
            MENU_KAKAP,
            MENU_SEREALIA,
        ],
    },
    {
        code: 'D7',
        ingredients: [
            MENU_BIT_ROOT,
            MENU_SALMON,
            MENU_SEREALIA,
        ],
    },
]


