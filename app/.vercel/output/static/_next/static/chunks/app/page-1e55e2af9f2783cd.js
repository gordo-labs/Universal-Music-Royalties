(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{84268:function(e,t,n){Promise.resolve().then(n.bind(n,22759))},22759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var s=n(20984),a=n(7182),r=n.n(a),i=n(30208),l=e=>{let{id:t,children:n}=e;return(0,s.jsx)("section",{id:t,className:r()("w-full md:w-auto md:grid grid-flow-row grid-cols-1 gap-6 auto-rows-auto gap-y-10","md:grid-cols-12 md:gap-10'","lg:grid-cols-12 lg:gap-10'","xl:grid-cols-12","z-10"),children:n})},o=e=>{let{}=e;return(0,i.useEffect)(()=>{},[]),(0,s.jsx)("w3m-button",{})},d=n(8088),c=n(8838),p=()=>((0,c.useChainId)(),(0,s.jsxs)("header",{className:"relative shadow mt-3 col-start-1 col-end-13 flex justify-between items-center border-2 bg-white border-rose-300 backdrop-blur-sm rounded-lg p-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 relative",children:[(0,s.jsx)(d.default,{src:"/logo.svg",alt:"Logo",width:40,height:50,className:"md:inline-block"}),(0,s.jsxs)("div",{className:"md:flex w-full items-center mb-1",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold text-[#2b2b2b] tracking-[5px]",children:"SONGS"}),(0,s.jsx)("p",{className:"text-sm text-rose-800 pl-3 mt-1",children:"Alpha v0.1"})]})]}),(0,s.jsx)(o,{})]})),u=e=>{let{stepNumber:t,title:n,details:a,isActive:i}=e;return(0,s.jsxs)("li",{className:r()("flex space-x-2.5 rtl:space-x-reverse",i?"text-rose-600 border-rose-600":"text-gray-500 border-gray-500"),children:[(0,s.jsx)("span",{className:r()("flex items-center mt-1 justify-center w-8 h-8 border rounded-full shrink-0",i?"border-rose-600":"border-gray-500"),children:t+1}),(0,s.jsxs)("span",{children:[(0,s.jsx)("h3",{className:"font-medium leading-tight ".concat(i?"text-rose-600":"text-gray-500"),children:n}),(0,s.jsx)("p",{className:"text-sm",children:a})]})]})},y=e=>{let{steps:t,currentStep:n}=e;return(0,s.jsx)("ol",{className:"p-2 space-y-4 sm:flex flex-col",children:t.map(e=>(0,s.jsx)(u,{stepNumber:e.stepNumber,title:e.title,details:e.details,isActive:n>=e.stepNumber},e.stepNumber))})},m=n(40761),x=n(63818),b=n(43742),h=n(52006),f=e=>{let{isOpen:t,onClose:n,children:a}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ",children:(0,s.jsxs)("div",{className:"bg-white p-5  border-2 bg-white/50 border-rose-300 backdrop-blur-sm rounded-lg",children:[(0,s.jsx)("button",{onClick:n,children:"Close"}),a]})}):null};let g=n(79242).env.NE;(0,b.gL)("https://eth-mainnet.alchemyapi.io/v2/".concat(g));var j=()=>{(0,m.o)();let[e,t]=(0,i.useState)(!1),[n,a]=(0,i.useState)([]),{setStep:r}=(0,x.usePageContext)();return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{className:"w-full flex flex-col gap-3 border-2 bg-white/50 border-rose-300 backdrop-blur-sm rounded-lg p-5 mb-28",children:(0,s.jsx)(h.Z,{})}),(0,s.jsxs)(f,{isOpen:e,onClose:()=>t(!1),children:[(0,s.jsx)("h2",{children:"Select Your NFT"}),n.map((e,n)=>{var a;return(0,s.jsxs)("div",{onClick:()=>t(!1),children:[(0,s.jsx)("img",{src:null===(a=e.media[0])||void 0===a?void 0:a.gateway,alt:e.title,style:{width:"100px",height:"100px"}}),(0,s.jsx)("p",{children:e.title})]},n)})]})]})},w=n(2043),v=n(62671),N=n(63423),T=n(39717),R=JSON.parse('[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AccessControlBadConfirmation","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"isrc","type":"string"},{"indexed":false,"internalType":"string","name":"metadataURI","type":"string"}],"name":"ISRCRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"isrc","type":"string"}],"name":"NFTISRCSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRevenue","type":"uint256"}],"name":"RevenueAllocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"indexed":false,"internalType":"struct UMDP.RoyaltyInfo[]","name":"royalties","type":"tuple[]"}],"name":"RoyaltiesSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RoyaltiesWithdrawn","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ISRC_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"totalRevenue","type":"uint256"}],"name":"allocateRevenue","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"isrc","type":"string"}],"name":"getISRCMetadataURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRoyalties","outputs":[{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"internalType":"struct UMDP.RoyaltyInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"grantISRCManagerRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"callerConfirmation","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"revokeISRCManagerRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"royalties","outputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"isrc","type":"string"}],"name":"setNFTISRC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"share","type":"uint256"}],"internalType":"struct UMDP.RoyaltyInfo[]","name":"_royalties","type":"tuple[]"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),C=n(2081);let k={abi:R,address:C.UMDP},S={abi:T,address:C.MusicERC721Factory};var M=n(1877),I=n(17174),O=n(45166),A=n(68894),E=n(94831),L=()=>{(0,c.useChainId)();let e=(0,m.o)(),{}=(0,c.useChainId)(),{selectedNft:t,setStep:n,setSelectedNft:a}=(0,x.usePageContext)(),r=(0,I.useAccount)(),[l,o]=(0,i.useState)([{recipient:r.address,share:100}]),{data:d,isPending:p,writeContract:u,error:y,isSuccess:b}=(0,O.useWriteContract)({}),{isLoading:h,isSuccess:f}=(0,A.useWaitForTransactionReceipt)({hash:d}),{data:g,error:j,isLoading:C}=(0,E.useReadContract)({...S,functionName:"getDeployedContractsByOwner",args:[r.address]});(0,i.useEffect)(()=>{console.log("CONTRACTS DEPLOYED => ",g),g&&t&&a({address:g[0],tokenId:t.tokenId})},[g]);let k=(e,t,n)=>{o(l.map((s,a)=>a===e?{...s,[t]:n}:s))},L=e=>{o(l.filter((t,n)=>n!==e))},U=()=>{o([])},D=async n=>{if(n.preventDefault(),l.reduce((e,t)=>{let{share:n}=t;return e+n},0)>100){alert("Total share percentage cannot exceed 100.");return}if(!t||0===l.length){alert("no data");return}let s=[t.address,BigInt(t.tokenId),l.map(e=>({recipient:e.recipient,share:100*e.share}))];console.log(s),u({abi:R,address:e.UMDP,functionName:"setRoyalties",args:s})},{logs:B,isLoading:P,error:F}=function(e){let{address:t="0x0",eventName:n="Transfer",abi:s=[],args:a}=e,[r,l]=(0,i.useState)(null),[o,d]=(0,i.useState)(!1),[c,p]=(0,i.useState)(null),u=(0,v.useClient)({config:N.vc});return(0,i.useEffect)(()=>{(async()=>{if(d(!0),!t||!n){console.warn("No address");return}try{console.log("logs",{address:t,abi:s,eventName:n,args:a});let e=await (0,w.m)(u,{address:t,abi:s,eventName:n});console.log("LOGS RESULT",e),l(e)}catch(e){console.log("LOGS ERROR",e),p(e)}finally{d(!1)}})()},[t,n,s]),{logs:r,isLoading:o,error:c}}({address:e.MusicERC721Factory,eventName:"MusicERC721Deployed",abi:T});return(0,i.useEffect)(()=>{f&&n(2)},[f]),(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:D,className:"w-full flex flex-col border-2 p-5 bg-white/50 border-rose-300 backdrop-blur-sm rounded-xl space-y",children:[(0,s.jsx)("h2",{className:"mb-1 text-2xl text-rose-700",children:"Track Participants"}),(0,s.jsx)("p",{className:"mb-6 text-md text-rose-900 w-2/3",children:"Set the track shares participants, each participant will be able to redeem its part of the track generated revenue."}),"Links:",(0,s.jsx)("a",{href:"https://testnets.opensea.io/es/assets/sepolia/".concat(t.address),className:"mb-6 text-md text-rose-900 w-2/3",children:"Open Sea"}),(0,s.jsxs)("section",{className:"bg-rose-200 border border-rose-500 p-5 gap-2 flex flex-col rounded-md mb-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2  rounded-lg",children:[(0,s.jsx)("span",{className:"w-full text-gray-900 text-sm font-medium",children:"Participant"}),(0,s.jsx)("span",{className:"w-1/4 text-gray-900 text-sm",children:"Royalty share %"}),(0,s.jsx)("span",{className:"w-12 text-gray-900 text-sm"})]}),l.map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-1 gap-2 items-center",children:[(0,s.jsx)("input",{type:"text",value:e.recipient,onChange:e=>k(t,"recipient",e.target.value),placeholder:"Recipient Address",className:"bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded focus:ring-rose-500 focus:border-rose-500 block  p-2.5",required:!0}),(0,s.jsx)("input",{type:"number",value:e.share,onChange:e=>k(t,"share",e.target.value),placeholder:"Share",className:"bg-gray-50 border w-1/4 border-gray-300 text-gray-900 text-sm rounded focus:ring-rose-500 focus:border-rose-500 block p-2.5",required:!0,max:"100"}),(0,s.jsx)("button",{type:"button",onClick:()=>L(t),className:"w-8 p-2.5 border-2 rounded flex justify-center items-center border-rose-300 text-red-500 hover:text-red-700",children:"X"})]},t)),(0,s.jsxs)("div",{className:"flex gap-2 justify-between",children:[(0,s.jsx)(M.Button,{size:"small",type:"button",onClick:()=>{o([...l,{recipient:"",share:0}])},children:"Add Participant"}),l.length>0&&(0,s.jsx)(M.Button,{size:"small",type:"button",onClick:()=>U,children:"Reset all"})]})]}),(0,s.jsx)(M.Button,{type:"submit",children:p?"Confirming...":"Submit Royalties Distribution"})]}),h&&(0,s.jsxs)(M.Body3,{children:[(0,s.jsx)(M.Loading,{size:20,color:"rgb(244 63 94)"})," Waiting for confirmation..."]}),f&&(0,s.jsx)("div",{children:"Transaction confirmed."}),y&&(0,s.jsxs)("div",{children:["Error: ",y.shortMessage||y.message]})]})},U=n(82413),D=e=>{let{}=e,{selectedNft:t,setStep:n}=(0,x.usePageContext)();(0,I.useAccount)();let{data:a,error:r,isLoading:l}=(0,E.useReadContract)({...k,functionName:"getRoyalties",args:[t.address,t.tokenId]});return(0,s.jsx)(i.Fragment,{children:(0,s.jsxs)("form",{className:"col-start-1 col-end-13 w-full flex flex-col border-2 bg-white/50 border-rose-300 backdrop-blur-sm rounded-lg p-5 space-y",children:[(0,s.jsx)("section",{className:"mb-6",children:l?(0,s.jsx)("div",{children:"Loading royalty data..."}):r?(0,s.jsxs)("div",{children:["Error fetching royalty data: ",r.message]}):a?(0,s.jsxs)("div",{className:"w-full flex flex-col bg-white/50backdrop-blur-sm rounded-xl space-y",children:[(0,s.jsx)(M.BodyHeadline,{color:"rose-600",className:"mb-6",children:"Track Distribution:"}),(0,s.jsxs)("section",{className:"bg-rose-200 border border-gray-300 p-5 gap-2 flex flex-col rounded",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center gap-4  rounded-lg",children:[(0,s.jsx)("span",{className:"text-gray-900 text-sm font-medium",children:"Participant"}),(0,s.jsx)("span",{className:"text-gray-900 text-sm",children:"Royalty Share"})]}),Object.values(a).map((e,t)=>(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("div",{className:"flex w-full justify-between items-center gap-4 p-2 bg-gray-50 rounded border-rose-300 border",children:(0,s.jsx)("span",{className:"text-gray-900 text-sm font-medium",children:e.recipient})}),(0,s.jsx)("div",{className:"flex w-40 justify-between items-center gap-4 p-2 bg-gray-50 rounded border-rose-300 border",children:(0,s.jsx)("span",{className:"text-gray-900 text-sm",children:"".concat((0,U.b)(e.share,2),"%")})},t)]},t))]})]}):(0,s.jsx)("div",{children:"No royalties information available for this NFT."})}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(M.Button,{disabled:!0,size:"small",type:"button",children:"Copyright review"}),(0,s.jsx)(M.Button,{size:"small",type:"button",disabled:!0,children:"Release it"}),(0,s.jsx)(M.Button,{size:"small",type:"button",disabled:!0,children:"Sell it"})]})]})})},B=JSON.parse('{"C":"0xCC5Bc84C3FDbcF262AaDD9F76652D6784293dD9e"}');function P(){(0,E.useReadContract)({abi:R,address:B.C,functionName:"getISRCMetadataURI"});let{writeContract:e}=(0,O.useWriteContract)(),{currentStep:t,trackFile:n,trackCover:a,setStep:r}=(0,x.usePageContext)(),[o,d]=(0,i.useState)(""),[u,m]=(0,i.useState)(""),{chainId:b}=(0,c.useChainId)();return(0,i.useEffect)(()=>{if(a){let e=URL.createObjectURL(a);return d(e),()=>URL.revokeObjectURL(e)}},[a]),(0,i.useEffect)(()=>{if(n){let e=URL.createObjectURL(n);return m(e),()=>URL.revokeObjectURL(e)}},[n]),(0,s.jsx)("main",{className:"flex w-screen justify-center text-black",children:(0,s.jsx)("div",{className:"max-w-6xl w-full",children:(0,s.jsxs)(l,{children:[(0,s.jsx)(p,{}),0===t&&(0,s.jsxs)("div",{className:"col-start-1 col-end-13 flex flex-col w-full p-5 md:p-0 pt-10 text-rose-800 px-10",children:[(0,s.jsx)(M.Headline1,{color:"rose-700",children:"Wrapped Song"}),(0,s.jsx)(M.Body3,{color:"rose-500",className:"md:mb-2 md:w-2/3",children:"A wrapped song is a novel way to distribute your music in which you are the sole owner of the track, you set all the rules, while having the possibility to interact and publish on the same platforms as always."})]}),1===t&&(0,s.jsxs)("div",{className:"col-start-1 col-end-13 flex flex-col w-full p-5 md:p-0 pt-10 text-rose-800",children:[(0,s.jsx)(M.Headline3,{color:"rose-700",children:"Set Royalties distribution"}),(0,s.jsx)(M.Body3,{color:"rose-500",className:"mb-2 md:w-2/3",children:"Now that you've created your basic song metadata, let's identify the participants in the song. Whether you're a solo artist or part of a group with many members, simply allocate the participation in the song by assigning percentages to each."})]}),2===t&&(0,s.jsxs)("div",{className:"col-start-1 col-end-13 flex flex-col w-full v text-rose-800",children:[(0,s.jsx)(M.Headline3,{color:"rose-700",children:"Release your song"}),(0,s.jsx)(M.Body3,{color:"rose-500",className:"mb-2 md:w-2/3",children:"Now that you've created your basic song metadata, let's identify the participants in the song. Whether you're a solo artist or part of a group with many members, simply allocate the participation in the song by assigning percentages to each."})]}),(0,s.jsxs)("div",{className:"col-start-1 col-end-10 mb-28 md:p-0 p-5",children:[(0,s.jsx)("div",{className:"flex gap-2 mb-5 justify-between md:p-0",children:1===t&&(0,s.jsx)(M.Body3,{onClick:()=>r(0),className:" cursor-pointer",children:"⬅️ Back"})}),0===t&&(0,s.jsx)(j,{}),1===t&&(0,s.jsx)(L,{}),2===t&&(0,s.jsx)(D,{}),2===t&&(0,s.jsx)(M.Button,{className:"mt-5",onClick:()=>r(0),children:"Create a new track"})]}),(0,s.jsxs)("section",{className:"col-start-10 col-end-13 pt-5 md:flex flex-col hidden",children:[(0,s.jsx)(y,{steps:[{stepNumber:0,title:"Wrapped Song",details:"A special Music NFT"},{stepNumber:1,title:"Song Royalties distribution",details:"Add the song participants"},{stepNumber:2,title:"Prepare Release",details:"Pre-release review"}],currentStep:t}),a&&(0,s.jsx)("img",{className:"rounded-xl mt-10",src:o}),n&&(0,s.jsx)("audio",{className:"rounded-xl mt-5 w-full",controls:!0,src:u})]})]})})})}}},function(e){e.O(0,[466,507,124,424,231,253,325,824,115,69,744],function(){return e(e.s=84268)}),_N_E=e.O()}]);