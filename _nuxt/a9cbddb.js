(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{279:function(e,t,n){"use strict";n.r(t);n(47);var r="https://lapis.ultramarine-linux.org/pub/ultramarine",o={name:"DownloadSection",props:["editionName","screenshot","description","isoLink","deprecatedMajorVersion","deprecatedMinorVersion"],computed:{baseLink:function(){return this.deprecatedMajorVersion?"".concat(r,"/").concat(this.deprecatedMajorVersion,"/").concat(this.editionName,"/x86_64/iso"):"".concat(r,"/").concat("36","/").concat(this.editionName,"/x86_64/iso")},downloadLink:function(){return this.isoLink?this.isoLink:this.deprecatedMajorVersion&&this.deprecatedMinorVersion?"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat(this.deprecatedMajorVersion,"-").concat(this.deprecatedMinorVersion,".iso"):"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat("36","-").concat("1.1",".iso")},checksumLink:function(){return"".concat(this.baseLink,"/CHECKSUM")}}},c=n(20),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center"},[n("nuxt-img",{staticClass:"h-auto pb-4 rounded-sm w-96",attrs:{src:e.screenshot,alt:"Ultramarine"+e.editionName+"Screenshot",quality:"10"}}),e._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("a",{staticClass:"px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50",attrs:{href:e.downloadLink}},[n("i",{staticClass:"fa fa-download"}),e._v("  \n      Download "+e._s(e.editionName)+" Edition\n    ")]),e._v(" "),n("div",{staticClass:"flex flex-col items-center gap-3 mt-2"},[n("a",{staticClass:"text-gray-400",attrs:{href:e.checksumLink}},[e._v("View Checksum")]),e._v(" "),e.deprecatedMajorVersion&&e.deprecatedMinorVersion?n("div",{},[n("div",{staticClass:"px-2 py-1 text-gray-700 italic dark:text-gray-200 font-medium rounded-lg"},[e._v("\n          Ultramarine Linux "+e._s(e.deprecatedMajorVersion)+"."+e._s(e.deprecatedMinorVersion)+"\n        ")])]):e._e()])]),e._v(" "),n("div",{staticClass:"pt-2"},[n("p",{staticClass:"max-w-md text-lg text-center"},[e._v("\n      "+e._s(e.description)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);