(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{305:function(e,t,a){"use strict";t.a={data:function(){return{tokenDetails:[{name:"SimpleERC20",customizeDecimals:!1,standard:!0,detailed:!0,capped:!0,mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!1,price:0},{name:"StandardERC20",customizeDecimals:!0,standard:!0,detailed:!0,capped:!0,mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.15},{name:"CommonERC20",customizeDecimals:!0,standard:!0,detailed:!0,capped:!0,mintable:!0,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,price:.55},{name:"PowerfulERC20",customizeDecimals:!0,standard:!0,detailed:!0,capped:!0,mintable:!0,burnable:!0,erc1363:!0,tokenRecover:!0,removeCopyright:!0,price:.95}]}}}},333:function(e,t,a){"use strict";a.r(t);var i={name:"PricingTable",mixins:[a(305).a]},n=a(40),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pricing-table"},[a("b-row",e._l(e.tokenDetails,(function(t){return a("b-col",{attrs:{lg:"3"}},[a("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[a("b-card-title",{staticClass:"pt-5 font-weight-light text-center"},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),a("p",{staticClass:"card-price text-center"},[e._v("\n                    "+e._s(t.price)+" "),a("small",{staticClass:"term"},[e._v("ETH")])]),e._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC20 Compliant "),a("ui--checkmark",{attrs:{value:t.standard}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Detailed "),a("ui--checkmark",{attrs:{value:t.detailed}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Capped Supply "),a("ui--checkmark",{attrs:{value:t.capped}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Customize Decimals "),a("ui--checkmark",{attrs:{value:t.customizeDecimals}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Mintable "),a("ui--checkmark",{attrs:{value:t.mintable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Burnable "),a("ui--checkmark",{attrs:{value:t.burnable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC1363 "),a("ui--checkmark",{attrs:{value:t.erc1363}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Token Recover "),a("ui--checkmark",{attrs:{value:t.tokenRecover}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Remove Copyright "),a("ui--checkmark",{attrs:{value:t.removeCopyright}})],1),e._v(" "),a("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"create-token/",query:{tokenType:t.name}}}},[e._v("\n                        Create\n                    ")])],1)],1)],1)})),1),e._v(" "),a("b-row",[a("b-col",{attrs:{lg:"6","offset-lg":"3"}},[a("p",{staticClass:"text-center text-light"},[e._v("\n                * GAS fee will be added to final amount\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);