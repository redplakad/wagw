(function(_0x22376c,_0x203f17){const _0x33e829=_0x22376c();function _0x160159(_0x5d1a52,_0x20c1a1){return _0x52b0(_0x20c1a1-0x2b9,_0x5d1a52);}while(!![]){try{const _0x3f1b5f=-parseInt(_0x160159(0x489,0x4a1))/0x1*(-parseInt(_0x160159(0x4b7,0x4a2))/0x2)+-parseInt(_0x160159(0x498,0x4a3))/0x3*(-parseInt(_0x160159(0x4b7,0x4a4))/0x4)+parseInt(_0x160159(0x4a3,0x4a5))/0x5*(-parseInt(_0x160159(0x499,0x4a6))/0x6)+-parseInt(_0x160159(0x4b1,0x4a7))/0x7*(-parseInt(_0x160159(0x496,0x4a8))/0x8)+parseInt(_0x160159(0x4a3,0x4a9))/0x9*(parseInt(_0x160159(0x494,0x4aa))/0xa)+parseInt(_0x160159(0x4a8,0x4ab))/0xb+parseInt(_0x160159(0x4bc,0x4ac))/0xc*(-parseInt(_0x160159(0x4b7,0x4ad))/0xd);if(_0x3f1b5f===_0x203f17)break;else _0x33e829['push'](_0x33e829['shift']());}catch(_0x48c7aa){_0x33e829['push'](_0x33e829['shift']());}}}(_0x481a,0xc4466));const {parseIncomingMessage,formatReceipt,prepareMediaMessage}=require('../lib/helper');function _0x259399(_0x6ba77e,_0x2d280f){return _0x52b0(_0x2d280f-0x214,_0x6ba77e);}function _0x52b0(_0x5b8cb6,_0x455bf0){const _0x481a4e=_0x481a();return _0x52b0=function(_0x52b0d5,_0x49f034){_0x52b0d5=_0x52b0d5-0x1e8;let _0x4b6745=_0x481a4e[_0x52b0d5];return _0x4b6745;},_0x52b0(_0x5b8cb6,_0x455bf0);}require(_0x259399(0x404,0x409))['config']();const axios=require(_0x259399(0x404,0x40a)),{isExistsEqualCommand,isExistsContainCommand,getUrlWebhook}=require(_0x259399(0x41b,0x40b)),IncomingMessage=async(_0x462427,_0xa419dd)=>{function _0x5cf667(_0x40788a,_0x45c0ce){return _0x259399(_0x40788a,_0x45c0ce- -0x3cb);}try{let _0xdffa0a=![];if(!_0x462427[_0x5cf667(0x3c,0x41)])return;_0x462427=_0x462427[_0x5cf667(0x41,0x41)][0x0];const _0x227efa=_0x462427?.[_0x5cf667(0x55,0x42)]||'';if(_0x462427['key'][_0x5cf667(0x30,0x43)]===!![])return;if(_0x462427[_0x5cf667(0x2c,0x44)]['remoteJid']==='status@broadcast')return;const _0x10620e=_0x462427[_0x5cf667(0x44,0x44)][_0x5cf667(0x2e,0x45)]&&formatReceipt(_0x462427[_0x5cf667(0x40,0x44)][_0x5cf667(0x48,0x45)]),{command:_0xae71e7,bufferImage:_0x5ef2db,from:_0xc93692}=await parseIncomingMessage(_0x462427);let _0x1a8321,_0x37de17;const _0x4a455c=_0xa419dd[_0x5cf667(0x3b,0x46)]['id'][_0x5cf667(0x54,0x47)](':')[0x0],_0xe4fa8e=await isExistsEqualCommand(_0xae71e7,_0x4a455c);_0xe4fa8e[_0x5cf667(0x53,0x48)]>0x0?_0x37de17=_0xe4fa8e:_0x37de17=await isExistsContainCommand(_0xae71e7,_0x4a455c);if(_0x37de17[_0x5cf667(0x48,0x48)]===0x0){const _0x1ff0e6=await getUrlWebhook(_0x4a455c);if(_0x1ff0e6==null)return;const _0x181367=await sendWebhook({'command':_0xae71e7,'bufferImage':_0x5ef2db,'from':_0xc93692,'url':_0x1ff0e6,'participant':_0x10620e});if(_0x181367===![])return;if(_0x181367===undefined)return;if(typeof _0x181367!=_0x5cf667(0x52,0x49))return;_0xdffa0a=_0x181367?.['quoted']?!![]:![],_0x1a8321=JSON[_0x5cf667(0x34,0x4a)](_0x181367);}else{replyorno=_0x37de17[0x0][_0x5cf667(0x56,0x4b)]=='All'?!![]:_0x37de17[0x0][_0x5cf667(0x59,0x4b)]==_0x5cf667(0x41,0x4c)&&_0x462427[_0x5cf667(0x4c,0x44)]['remoteJid'][_0x5cf667(0x4d,0x4d)](_0x5cf667(0x54,0x4e))?!![]:_0x37de17[0x0][_0x5cf667(0x53,0x4b)]==_0x5cf667(0x65,0x4f)&&!_0x462427['key']['remoteJid']['includes'](_0x5cf667(0x43,0x4e))?!![]:![];if(replyorno===![])return;_0xdffa0a=_0x37de17[0x0]['is_quoted']?!![]:![],typeof _0x37de17[0x0][_0x5cf667(0x38,0x50)]===_0x5cf667(0x51,0x49)?_0x1a8321=JSON[_0x5cf667(0x5e,0x4a)](_0x37de17[0x0]['reply']):_0x1a8321=_0x37de17[0x0][_0x5cf667(0x46,0x50)];}_0x1a8321=_0x1a8321['replace'](/{name}/g,_0x227efa),_0x1a8321=JSON['parse'](_0x1a8321);if('type'in _0x1a8321){let _0x26f33d=_0xa419dd[_0x5cf667(0x45,0x46)]['id'][_0x5cf667(0x50,0x51)](/:\d+/,'');if(_0x1a8321[_0x5cf667(0x42,0x52)]==_0x5cf667(0x42,0x53))return await _0xa419dd[_0x5cf667(0x5e,0x54)](_0x462427[_0x5cf667(0x55,0x44)][_0x5cf667(0x4e,0x55)],{'audio':{'url':_0x1a8321[_0x5cf667(0x3d,0x56)]},'ptt':!![],'mimetype':_0x5cf667(0x54,0x57)});const _0x1bd4dc=await prepareMediaMessage(_0xa419dd,{'caption':_0x1a8321[_0x5cf667(0x67,0x58)]?_0x1a8321['caption']:'','fileName':_0x1a8321[_0x5cf667(0x55,0x59)],'media':_0x1a8321[_0x5cf667(0x4c,0x56)],'mediatype':_0x1a8321['type']!=='video'&&_0x1a8321[_0x5cf667(0x50,0x52)]!=='image'?_0x5cf667(0x57,0x5a):_0x1a8321[_0x5cf667(0x5a,0x52)]}),_0xf7824f={..._0x1bd4dc[_0x5cf667(0x62,0x5b)]};return await _0xa419dd[_0x5cf667(0x52,0x54)](_0x462427[_0x5cf667(0x5c,0x44)]['remoteJid'],{'forward':{'key':{'remoteJid':_0x26f33d,'fromMe':!![]},'message':_0xf7824f}},{'quoted':_0xdffa0a?_0x462427:null});}else await _0xa419dd[_0x5cf667(0x51,0x54)](_0x462427[_0x5cf667(0x47,0x44)][_0x5cf667(0x53,0x55)],_0x1a8321,{'quoted':_0xdffa0a?_0x462427:null})[_0x5cf667(0x50,0x5c)](_0x2d3495=>{function _0x3e5219(_0x4d8f64,_0x1615cf){return _0x5cf667(_0x1615cf,_0x4d8f64-0xcd);}console[_0x3e5219(0x12a,0x111)](_0x2d3495);});return!![];}catch(_0x1775ee){console['log'](_0x1775ee);}};function _0x481a(){const _0x5a6ec1=['length','object','stringify','reply_when','Group','includes','@g.us','Personal','reply','replace','type','audio','sendMessage','remoteJid','url','audio/mpeg','caption','filename','document','message','catch','log','application/json;\x20charset=utf-8','data','error\x20send\x20webhook','exports','27HJJWPL','70460viyJlF','169761uroWke','4mBgzgU','5NtMZuZ','6343314DlTbaN','119HbKLPT','644776PQtvDf','1656279UmLMOP','70AvGSIt','16302429ovkCsX','1644vQEQFM','311909bsCjrf','dotenv','axios','../database/model','messages','pushName','fromMe','key','participant','user','split'];_0x481a=function(){return _0x5a6ec1;};return _0x481a();}async function sendWebhook({command:_0x1baba1,bufferImage:_0x24758f,from:_0x47484a,url:_0x6f1495,participant:_0x29e49c}){function _0x4419c2(_0x3d7135,_0x25a98f){return _0x259399(_0x3d7135,_0x25a98f-0x8);}try{const _0x1299e={'message':_0x1baba1,'bufferImage':_0x24758f==undefined?null:_0x24758f,'from':_0x47484a,'participant':_0x29e49c},_0x4d2cdb={'Content-Type':_0x4419c2(0x41d,0x431)},_0x185284=await axios['post'](_0x6f1495,_0x1299e,_0x4d2cdb)[_0x4419c2(0x424,0x42f)](()=>{return![];});return _0x185284[_0x4419c2(0x41d,0x432)];}catch(_0x5537c6){return console[_0x4419c2(0x442,0x430)](_0x4419c2(0x444,0x433),_0x5537c6),![];}}module[_0x259399(0x41a,0x42c)]={'IncomingMessage':IncomingMessage};