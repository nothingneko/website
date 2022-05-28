(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{269:function(t,e,n){"use strict";n.r(e);var r={methods:{setColorMode:function(t){this.$emit("set-color-mode",t)}}},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"\n    flex flex-col md:flex-row gap-4 md:gap-0\n    w-full\n    justify-between\n    px-6\n    py-4\n    text-gray-600\n    dark:text-gray-300\n    bg-gray-100\n    dark:bg-gray-900\n  "},[t._m(0),t._v(" "),n("div",{staticClass:"md:text-right text-left font-semibold",attrs:{id:"color-mode-toggle"}},[n("h2",[t._v("Theme:")]),t._v(" "),n("button",{staticClass:"pr-2 hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("system")}}},[t._v("\n      System\n    ")]),t._v(" "),n("button",{staticClass:"pr-2 hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("light")}}},[t._v("\n      Light\n    ")]),t._v(" "),n("button",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("dark")}}},[t._v("\n      Dark\n    ")])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"font-semibold tracking-wide"},[t._v("\n      Copyright © 2021 - 2022 Ultramarine Linux Team\n    ")]),t._v(" "),n("h2",[t._v("\n      Linux® is the registered trademark of Linus Torvalds in the U.S. and\n      other countries.\n    ")]),t._v(" "),n("h2",[t._v("\n      Fedora® and the Infinity design logo are trademarks of Red Hat, Inc. in\n      the U.S. and elsewhere.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(269).default})},270:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjI0IDIyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDA3OGY7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMntmaWxsOiNmZGZkZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJsYXllcjEiPjxnIGlkPSJzdXJmYWNlODU3NTMiPjxwYXRoIGlkPSJwYXRoMTk4NCIgY2xhc3M9ImNscy0xIiBkPSJNMTEyLDBBMTEyLDExMiwwLDEsMSwwLDExMiwxMTIsMTEyLDAsMCwxLDExMiwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+PHBhdGggaWQ9InBhdGgxOTg2IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yMDYuNDksMTQ3LjhjLTE2LjY3LTMuODQtMzMtOS41My00NC4xMy0xNkMxMzEuODUsMTE0LDEyMS4yOSw3NS4xNSw3OC4yNiw4OS42YzM0LDM5LjY1LTIzLDUyLTYxLjY0LDU1Ljc2YTEwMSwxMDEsMCwwLDAsMTg5Ljg3LDIuNDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L2c+PC9nPjwvc3ZnPg=="},271:function(t,e,n){"use strict";n.r(e);var r={name:"Navbar"},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex flex-row justify-between items-center w-full 2xl:px-72 xl:px-48 lg:px-40 md:px-20 px-4 pt-4 pb-2 text-gray-800 dark:text-gray-200 sticky top-0 z-50 bg-clip-padding bg-gray-100 bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-40 backdrop-filter backdrop-blur-xl",attrs:{id:"nav"}},[r("nuxt-link",{staticClass:" flex flex-row items-center font-bold hover:text-blue-600 dark:hover:text-blue-200",attrs:{to:"/"}},[r("img",{staticClass:"w-11 h-auto mr-2",attrs:{src:n(270),alt:"Logo"}}),t._v(" "),r("h1",{staticClass:"text-xl font-montserrat-bold"},[t._v("\n      Ultramarine\n    ")])]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links-right flex flex-row gap-4 justify-center align-middle items-center font-semibold"},[n("a",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"#about"}},[t._v("About")]),t._v(" "),n("a",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://wiki.ultramarine-linux.org"}},[t._v("Wiki")])])}],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);n(48);var r={name:"DownloadSection",props:["editionName","screenshot","description"],computed:{baseLink:function(){return"".concat("https://lapis.ultramarine-linux.org/pub/ultramarine","/").concat("36","/").concat(this.editionName,"/x86_64/iso")},downloadLink:function(){return"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat("36","-").concat("1.1",".iso")},checksumLink:function(){return"".concat(this.baseLink,"/CHECKSUM")}}},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("nuxt-img",{staticClass:"h-auto pb-4 rounded-sm w-96",attrs:{src:t.screenshot,alt:"Ultramarine"+t.editionName+"Screenshot",quality:"40"}}),t._v(" "),n("a",{staticClass:"flex flex-row rounded-lg",attrs:{href:t.downloadLink}},[n("div",{staticClass:"flex flex-col items-center"},[n("button",{staticClass:"px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"},[t._v("\n        Download "+t._s(t.editionName)+" Edition\n      ")]),t._v(" "),n("a",{staticClass:"mt-1 text-gray-400",attrs:{href:t.checksumLink}},[t._v("View Checksum")])])]),t._v(" "),n("div",{staticClass:"pt-2"},[n("p",{staticClass:"max-w-md text-lg text-justify"},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={methods:{setColorMode:function(t){this.$colorMode.preference=t}}},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"},[n("Navbar"),t._v(" "),n("div",{staticClass:"flex flex-col min-h-screen p-12 text-gray-900 bg-gray-100 place-content-center md:items-center dark:bg-gray-900 dark:text-gray-100"},[n("h1",{staticClass:"text-4xl"},[t._v("Pick your flavor of Ultramarine")]),t._v(" "),n("h2",{staticClass:"pt-1 text-gray-400"},[t._v("Latest Release: 36 (Rhode Island)")]),t._v(" "),n("div",{},[n("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:flex-row"},[n("DownloadSection",{attrs:{editionName:"Flagship",screenshot:"ultramarine.png",description:"The flagship edition with the latest and greatest software and ourbest polish. Powered by Solus' Budgie Desktop. (Recommended)"}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"GNOME",screenshot:"GNOME.png",description:"GNOME is a simple, elegant, and intuitive desktop environment with a focus on productivity."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Pantheon",screenshot:"pantheon.png",description:"The default desktop of elementary OS focused on elegance and visual appeal."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Cutefish",screenshot:"cutefish.png",description:"Simplicity, beauty, and practicality, with a familiar look. (In early development, only recommended for more advanced users)"}})],1)]),t._v(" "),n("h2",{staticClass:"text-3xl mt-20"},[t._v("Torrents")]),t._v(" "),t._m(0)]),t._v(" "),n("Footer",{staticClass:"bg-gray-200 dark:bg-gray-800",on:{"set-color-mode":t.setColorMode}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"pt-1 text-gray-400"},[t._v("You can also download Ultramarine Builds using Torrent clients from FOSS Torrents which are available\n        "),n("a",{staticClass:"text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://fosstorrents.com/distributions/ultramarine-linux/"}},[t._v("\n            here\n          ")]),t._v(".\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(271).default,DownloadSection:n(272).default,Footer:n(269).default})}}]);