(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{275:function(t,e,n){"use strict";n.r(e);var r={props:["target","targetLink"]},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4 float-left xs:hidden font-bold text-xl"},[n("nuxt-link",{attrs:{to:t.targetLink}},[n("i",{staticClass:"fa fa-angle-left"}),t._v("   Back to "+t._s(t.target)+"\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);n(47);var r="https://lapis.ultramarine-linux.org/pub/ultramarine",o={name:"DownloadSection",props:["editionName","screenshot","description","isoLink","deprecatedMajorVersion","deprecatedMinorVersion"],computed:{baseLink:function(){return this.deprecatedMajorVersion?"".concat(r,"/").concat(this.deprecatedMajorVersion,"/").concat(this.editionName,"/x86_64/iso"):"".concat(r,"/").concat("36","/").concat(this.editionName,"/x86_64/iso")},downloadLink:function(){return this.isoLink?this.isoLink:this.deprecatedMajorVersion&&this.deprecatedMinorVersion?"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat(this.deprecatedMajorVersion,"-").concat(this.deprecatedMinorVersion,".iso"):"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat("36","-").concat("1.1",".iso")},checksumLink:function(){return"".concat(this.baseLink,"/CHECKSUM")}}},l=n(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("nuxt-img",{staticClass:"h-auto pb-4 rounded-sm w-96",attrs:{src:t.screenshot,alt:"Ultramarine"+t.editionName+"Screenshot",quality:"10"}}),t._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("a",{staticClass:"px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50",attrs:{href:t.downloadLink}},[n("i",{staticClass:"fa fa-download"}),t._v("  \n      Download "+t._s(t.editionName)+" Edition\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col items-center gap-3 mt-2"},[n("a",{staticClass:"text-gray-400",attrs:{href:t.checksumLink}},[t._v("View Checksum")]),t._v(" "),t.deprecatedMajorVersion&&t.deprecatedMinorVersion?n("div",{},[n("div",{staticClass:"px-2 py-1 text-gray-700 italic dark:text-gray-200 font-medium rounded-lg"},[t._v("\n          Ultramarine Linux "+t._s(t.deprecatedMajorVersion)+"."+t._s(t.deprecatedMinorVersion)+"\n        ")])]):t._e()])]),t._v(" "),n("div",{staticClass:"pt-2"},[n("p",{staticClass:"max-w-md text-lg text-center"},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r=n(20),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"},[n("div",{staticClass:"flex flex-col min-h-screen p-2 md:px-12 text-gray-900 bg-gray-100 place-content-center md:items-center dark:bg-gray-900 dark:text-gray-100"},[n("BackMenu",{attrs:{targetLink:"/",target:"Home"}}),t._v(" "),n("h1",{staticClass:"text-4xl font-bold"},[t._v("Pick your flavor of Ultramarine")]),t._v(" "),n("h2",{staticClass:"pt-1 text-gray-400"},[t._v("Latest Release: 36 (Rhode Island)")]),t._v(" "),n("div",{},[n("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:flex-row"},[n("DownloadSection",{attrs:{editionName:"Flagship",screenshot:"ultramarine.png",description:"The flagship edition with the latest and greatest software and ourbest polish. Powered by Solus' Budgie Desktop. (Recommended)"}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"GNOME",screenshot:"GNOME.png",description:"GNOME is a simple, elegant, and intuitive desktop environment with a focus on productivity."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Pantheon",screenshot:"pantheon.png",description:"The default desktop of elementary OS focused on elegance and visual appeal."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Lapis",screenshot:"ultramarine.png",description:"The Flagship Edition, but immutable. Powered by OSTree.",isoLink:"https://lapis.ultramarine-linux.org/pub/ultramarine/36/Lapis/x86_64/iso/Ultramarine-36-20220519.0-Lapis-x86_64-ostree1.iso"}})],1)]),t._v(" "),n("h2",{staticClass:"text-2xl mt-20 font-semibold"},[t._v("Deprecated Builds")]),t._v(" "),n("h2",{staticClass:"pt-1 text-gray-400"},[t._v("These builds are provided as is and will not be actively maintained.")]),t._v(" "),n("div",{},[n("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-1 md:flex-row"},[n("DownloadSection",{attrs:{editionName:"Cutefish",screenshot:"cutefish.png",description:"Simplicity, beauty, and practicality, with a familiar look.",deprecatedMajorVersion:"36",deprecatedMinorVersion:"1.1"}})],1)]),t._v(" "),n("h2",{staticClass:"text-2xl font-semibold mt-20"},[t._v("Torrents")]),t._v(" "),t._m(0)],1),t._v(" "),n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",integrity:"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"pt-1 text-gray-400 pb-12"},[t._v("You can also download Ultramarine Builds using Torrent clients from FOSS Torrents which are available\n        "),n("a",{staticClass:"text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://fosstorrents.com/distributions/ultramarine-linux/"}},[t._v("\n            here\n          ")]),t._v(".\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BackMenu:n(275).default,DownloadSection:n(279).default})}}]);