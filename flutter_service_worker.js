'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "5cc18d7176b194047e011a124a8dd400",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "bfbc37e434089f763fa5fb2a3135e2af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8448c26742c728317162b47157e36a7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd620d21f243bec9a720bc98b1bc6490",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "516a89cc764fe55c22fa8ea312edbcbf",
".git/logs/refs/heads/main": "3e87d6d86f6c000a8f30542c0ba949be",
".git/logs/refs/remotes/origin/HEAD": "49a7d7c0671cce1230af2394167a1f87",
".git/logs/refs/remotes/origin/main": "04ff18c611e6d18c44ed07d9a7c9d6e4",
".git/objects/03/6bdef6e04aba1ad996acc3a1c706c868eeaf00": "53831e9be89e30fdfe8f7c398670f9bf",
".git/objects/03/8d718da6a1ebbc6a7780a96ed75a70cc2ad6e2": "dca3b18ba5315cef2e7d076d50fe45fe",
".git/objects/06/2d0cac149ca20d81a68db458e559bed7488611": "a3a6a5fca454ef385878e01b7fc1bcf5",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/e26f66a207220b80c2c17f31cb56a79072a2b6": "576e40581238d5f7d5b66c57607592f1",
".git/objects/0e/2ca2c2a90d1543fee0a0d1dba643f6d99c2524": "41bfff7f3f6d34f96d88cf4c045d12a6",
".git/objects/11/ce118473ee49abfcdfb28e8ef24794b6eeb237": "c5bf7ebe59a300ffa556c0aca0126200",
".git/objects/12/bfb9155de3f76e99dd3b992325533aec2943e4": "7ff21c62545786ba846d3b5ee1b904d0",
".git/objects/15/2f40a8d531a152a21e45e2c70f525da7f8100a": "5d6970fe70b88d7f35c2c29160a4ad41",
".git/objects/16/cfbc6777f884da6d476cde585b7602bedde0ff": "eeb2c7c35dfd87ebcb9b360fc53f69e3",
".git/objects/16/ff6c6218fcf4101970eec9ad7f59a8eaecb3ab": "7cb2640b250f0a4665aeedd159c6b43b",
".git/objects/18/8b897889f586f0acc42f8575f311703ce65803": "cf249e49d5a41b6a40e3ebd8a6e95ece",
".git/objects/1e/5e6337369934ecdcd19587585d2fac70ade651": "267037284110208ce02673a920c58fd9",
".git/objects/22/7dbfd08a554405b8846151c62e4f67e9221672": "9b361427f9c41fbed2fc624c36546448",
".git/objects/22/a4968d9de9953af643577633cb91a1b4cae41f": "eddee500c5caf37ae9ee7d3d44afee0b",
".git/objects/28/02d3fa35c506a19e42c72891f569478c498e4a": "d4db8574ac0c7709877c27395b5dc442",
".git/objects/2b/6b7b4711e6f65c43c7a03bad20d62325eb996b": "27a7977f0e0ff1499ad5cd7471cdbb06",
".git/objects/31/868baa410401be241f1c3934adb7b96c4ba038": "e3ee2406d1c76933553ebe54d76257e8",
".git/objects/39/3e2db4beea9e5f1bb611cc7965f5b4976caca8": "9e2b086b194ea68a154809b3f0b5baae",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/00a7e9cce2e491894c3bff329d96d12c692345": "2cfb0930d6fd0818c811871b98f2aa98",
".git/objects/3d/c3447203ec66ba36754cf1b153aa4947a247df": "d3a7bb741ae875bd3f861c6447480f0c",
".git/objects/3e/02ef8f5190067ceae3f49f7e14ab50ce77257f": "b3a680d9d67882f5d582711431f12149",
".git/objects/3e/6216f96f303455c861e18bd5752c74dfd454f6": "943d4afa93a138887f0e29508bc65863",
".git/objects/3e/b0e15b9a9d3f31d2be0295f2767b705d82fa6b": "8895552f396c42f221cfe09697df9d17",
".git/objects/41/21a2ee7b29f2ef27bc9b5e33bdb82b5aed5c7b": "aacd55c4105ee66186c1eac986e4ac21",
".git/objects/44/deabf9d1bc98595ffc36663676c4543a7f6be4": "b8efba9bab1e796cb4918b5b4c7c7dd6",
".git/objects/46/cf9a6e6cf84876d2b26478b4670a49db050ccf": "987076c32ba66b3b5303d718fe0dd06b",
".git/objects/4a/9c33b9879ae5cc22693729ecff55c254246978": "abfef24273febc5889b01107b81efb2b",
".git/objects/4c/49bd78f1d08f2bc09fa0bd8191ed38b7dce5e3": "21e9d110354a2e6060ba2f39426fc77d",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/69122ded175defcb242d15362ac19c70ee48b4": "ba7222517fdc1ff12e8eafcf3ef718b8",
".git/objects/52/bfe28d75c28ff872269a1cfc229126854dc06e": "66e600194b81d23baaaf1258cf137298",
".git/objects/53/890830f8c371415e5bd038381e423670184125": "0fa3a4649b6e90dc8cf9fa0358082017",
".git/objects/53/e1b5895a89467af086df8455d3d90134114d1d": "6e03cfab7ecddb625108728eabaffcd1",
".git/objects/57/2dd303fb5a312c2530bf6e2e464e999f63426e": "a256dead1354bfbad5974af989bd2bce",
".git/objects/5a/d244b47375d2fb7871b46ab6ea14bf9313bbe8": "672e0333de438411759d05a81b4b5a5e",
".git/objects/5f/86b23394ad97b26ad99de10a8bd4593cf6ea75": "fe42f821b4458d68a53774add22a053f",
".git/objects/65/0ae1dcbde6bd052a5a2126b608afac5e59661f": "994a102e4be798d46bb787a7ea8b63cd",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/779965f19534e12a3436d5099961a3e49035d5": "40d9b78a946831d596ff4b16ac8139c7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/bcd349bcd0e2f0596688e180be9865f2889470": "e42b6f9e9dd23212bc966a62b14d3990",
".git/objects/72/9be9c6576c7313e071734ca131252e82fe5813": "ced6f4ec2ababc91356ab41b6e4809c2",
".git/objects/76/942bf1d4596a33bb474456b82cc8e931bebf6f": "d0b9373bfb5d2a795d58e0159a41c846",
".git/objects/77/da7f80a3fdb1b6e41116edeaaed6304946afee": "f0554b2ed4aa67174ccb8257704c51b0",
".git/objects/79/33d3ab70612dedf9a9940e38d35e6aaf2b1ece": "51d5ad0c3522aadbeb542c30be16e307",
".git/objects/79/ce4aa478269dc43901f6e16f4c3a27aeb54fef": "f7929251bef8d118a9c74e1b1ad86ae9",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/4ff72a92df59e6a176513862d836f3c8ec3bf5": "669528523eab396780a8e0e47e1f2ea8",
".git/objects/83/bb515d0bd44b73f458de0d9b2236ce3bf66bbf": "617a7f216ace14b127e5de0353db9869",
".git/objects/85/5d8e28481250aa2fd3666d2495570ff6791bca": "89242527a9837b838ffb70675fc31052",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/9adc1ae10ec78425ea9b5268cf71667459f4b0": "56240cbbbddcc1a21c849a97621c139f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e03deed37d1653b4e146c65dc1a30713fed209": "d6cdc3ed6b821c7f0b126e7823106881",
".git/objects/8a/a4d5daa6f509ac0b01ccd0edf9eed7f4490e15": "7ffa5bded6624ee14eaa6cb5eb0fa2f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/f9a2f2c0f952d2c994639dc36346594368e103": "520f5dc47e030154b8988b3f8f40973d",
".git/objects/9a/9b88ff6313b5718c6996eba5eaa00e5d1b804c": "c0baa98551933720760714974c1d5a3d",
".git/objects/a3/62c9a2f68a309b9dd93d06a91785461932828b": "8cd8eb838c2d1037ba1c70753745533a",
".git/objects/a6/6b5b6a9dee48f8cc7a634e444d64db4acc4e80": "d476401582b3c31db2dc054ea825fa25",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/18bf7e783c038eeec239e86f9925289337f6b3": "719ea36e0ae9d36b73be4cda4809edf3",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/599eb1fff8d6333d8245f13444a51815de9f90": "f8b59dfed03d9d96554998eb1a71b251",
".git/objects/b4/45f88fc46f8bd14a28edf85921afe5c48606c1": "8d2a5a082262ef0a5810123e4cbf46be",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/a320f548a91d6f07f580a6c4dffdc78cc7f100": "bc6c6678b776b25b99c8505f2e3abd29",
".git/objects/c1/eae041d6ed202d248f9e64a73775a5cd1337ed": "319b67d3af1e52cc4202d06d59b3a840",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/fcccf1eb33284d01829bf91462fd18504d5cb5": "f27cdf1b01082eb98f9ada7e8ee96bee",
".git/objects/cb/a0c44c994e7ff29bbbee6f5fed70a0f7d555d9": "4f1d2428df6ea7d754904f9d59976810",
".git/objects/cc/1c00bdb844d6c3b5d0e1cc62c4c65baaa62b61": "1de9e4a11585ef70946ff1260e99c1ef",
".git/objects/cc/961a9548c2d8694ffc176f2ed9e1535c976031": "ba4ad651217d894af11c3f8558451a70",
".git/objects/cd/6bc9b3510ee4104153a0c9a57bb5f98b5d374c": "2ded524ae24ae119d81cf5a75a3baacd",
".git/objects/cf/e58261c6cc2246930bfd46a7221c82530dd885": "3c354b466b337b669dd59840dc056cf0",
".git/objects/d0/6a8b62af0149a43719fbf1ce9819b7c9770e94": "54642809ace2843143a65a296a26bea8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/77683f26718d93795a382d226a69136517147f": "5c5180e89ecd071136cc928a3301b495",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3d7cf7a16f6d9eb453b4cc30dce200bd612ff4": "f2d180d2173bfad7673644b6b36bf5e7",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/96cd05fc22dc151a4ccc7ba199fd1a9654d632": "8ac11030f24a6f37519a97dda7ccb2ff",
".git/objects/db/7e169b0b16c1e689723265ee6c34a092fa9b20": "4f4d4cb6e5a96635de7c50a1e9151707",
".git/objects/db/c1bb53c3440bfd5dc6e324d68bd94cccc67f49": "5997567e2fca24c17f9782c8c4edf9ad",
".git/objects/e5/bf1f6870005520cca81262d115e3b4309e9f1b": "4741b9620f53d305a53acc8fc052ff4b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/cc666282f48dc0480accef5b071c6ba3162d2d": "c0b990992b66167df723c416ef403350",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a306d11a231eae3bb2ed658b99d6b007af284b": "cb17f85962f6edd8c3f0e81d5fabae96",
".git/objects/ee/a354b38fe05775c6a2ae4d8f8b163c32550437": "0b535fdcd376a3e587c81a05d94d68a5",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fa/53673d4a8096e84c8778236fa6e366e701784d": "3d488f75dcbea3e3e7ee74132cf2df2d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/6db569c31c21aab2c02f75cfcd5a5ddfa3a389": "32586e5476b586bd1915997dd8b35646",
".git/objects/ff/5a9250fa3ed5998b002f9222bfc508e0cb2904": "d1f2a9beaafc8c2b4e95cf32564b4378",
".git/ORIG_HEAD": "71681eef0b958fe6f56e79a5fdc6083d",
".git/refs/heads/main": "76fc0858bfa52cc97c3714d302ec8060",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "76fc0858bfa52cc97c3714d302ec8060",
"assets/AssetManifest.bin": "c0cdbfc55b8fb9c0d37e3f8645df7367",
"assets/AssetManifest.bin.json": "9dc247515a11c2c5cb9d094f5f5e4201",
"assets/assets/GoogleDotsLoading.json": "b90bcb6ceb76c0b8d884749a00dc68e4",
"assets/assets/HeartBeatMedical.json": "06f92d273eccc3938c448f4faaf4f981",
"assets/assets/Loader.json": "652db5b690da79f6e6a42ddecdfc33ed",
"assets/assets/loading.json": "93cc8a057a539413f28b64337958aff1",
"assets/FontManifest.json": "9acccae002c9e45aa3e9ef78ebfe66ef",
"assets/fonts/Anton.ttf": "737b8ee4fe5943038ed2f99cdc408acd",
"assets/fonts/MaterialIcons-Regular.otf": "13d513a5a0e740416c0846df2ac97047",
"assets/fonts/Saira.ttf": "6a51bbaba1ad80637c8c3245d2b596db",
"assets/fonts/Sora.ttf": "457ec8aa0c5f1e074d19e55183f245fe",
"assets/NOTICES": "29e1c84105039b861779be1028d11639",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "acbfa8358d2645c218f2ac384bf31b9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a8e0b158d228280baef82ec4edd031d8",
"/": "a8e0b158d228280baef82ec4edd031d8",
"main.dart.js": "6d14d79b1aaf9e5625f9d8bec772eb33",
"manifest.json": "2c23ee416d26ad977f90a3efdbe0fad2",
"test": "87eb71f88fa36dfca970433faaf80e45",
"version.json": "f51e37bab904d727ad07169bb79bc088"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
