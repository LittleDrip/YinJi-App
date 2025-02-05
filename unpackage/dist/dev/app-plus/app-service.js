if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$a = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const uniIcons = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/HBuilderProjects/YinJi/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$9 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/HBuilderProjects/YinJi/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$8 = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), uniIcons);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const uniNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__scopeId", "data-v-26544265"], ["__file", "D:/HBuilderProjects/YinJi/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$7 = {
    __name: "index",
    setup(__props) {
      const tabbarHeight = vue.ref(0);
      const openWin = () => {
        const subNVue = uni.getSubNVueById("concat");
        subNVue.show("slide-in-left", 300, function() {
          formatAppLog("log", "at pages/watermark/index.vue:36", "subNVue 原生子窗体显示成功");
        });
      };
      vue.onMounted(() => {
        tabbarHeight.value = uni.getSystemInfoSync().windowBottom;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(uniNavBar, {
            fixed: true,
            border: false,
            "status-bar": "",
            title: "印迹",
            style: { "font-weight": "bold" }
          }),
          vue.createCommentVNode(' <view class=" status_bar">\r\n	</view> //状态栏 '),
          vue.createElementVNode("scroll-view", {
            "scroll-top": "0",
            "scroll-y": "true",
            class: "scroll-Y"
          }, [
            vue.createElementVNode("view", { class: "uni-bg-blue" }, " YinJi is great "),
            vue.createElementVNode("view", {
              id: "demo1",
              class: "scroll-view-item uni-bg-red"
            }, "A"),
            vue.createElementVNode("view", {
              id: "demo2",
              class: "scroll-view-item uni-bg-green"
            }, "B"),
            vue.createElementVNode("view", {
              id: "demo3",
              class: "scroll-view-item uni-bg-blue"
            }, "C")
          ]),
          vue.createElementVNode("button", {
            type: "primary",
            onClick: openWin
          }, "打开子窗体"),
          vue.createElementVNode("view", { class: "edgeInsetBottom" }),
          vue.createCommentVNode(" 绝对定位的视图需要考虑 tabBar 遮挡的问题，bottom 应该加上 tabBar 的高度 "),
          vue.createElementVNode("view", { class: "fixedView" })
        ]);
      };
    }
  };
  const PagesWatermarkIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "D:/HBuilderProjects/YinJi/pages/watermark/index.vue"]]);
  const _sfc_main$6 = {
    __name: "index",
    setup(__props) {
      const sections = vue.ref([
        {
          title: "富士胶韵",
          subtitle: "在时光长廊，留下复古影像。",
          type: "phone",
          images: [
            "https://haowallpaper.com/link/common/file/getCroppingImg/15565917146681664",
            "https://haowallpaper.com/link/common/file/getCroppingImg/5daf14db79a4176a7875155879eaf76d",
            "https://haowallpaper.com/link/common/file/getCroppingImg/c141f81b305795fd463216030ecd244d"
          ],
          watermark: {
            brandLogo: "/static/brands/Fujifilm_Color.png",
            camera: "Shot on X-T5",
            lens: "XF33mmF1.4R LM WR"
          }
        },
        {
          title: "徕镜传奇",
          subtitle: "于岁月长河，留下经典影像。",
          type: "pc",
          images: [
            "https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592",
            "https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592",
            "https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592"
          ],
          watermark: {
            brandLogo: "/static/brands/Leica_Color.png",
            camera: "Shot on M11",
            lens: "Summilux-M 35mm f/1.4"
          }
        }
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(uniNavBar, {
            fixed: true,
            border: false,
            "status-bar": "",
            title: "模版",
            style: { "font-weight": "bold" }
          }),
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(sections.value, (section, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "section",
                  key: index
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "section-title" },
                    vue.toDisplayString(section.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    { class: "section-subtitle" },
                    vue.toDisplayString(section.subtitle),
                    1
                    /* TEXT */
                  ),
                  section.type === "phone" ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                    key: 0,
                    "scroll-x": "true",
                    class: "image-scroll"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(section.images, (image, imgIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "photo-frame",
                          key: imgIndex
                        }, [
                          vue.createElementVNode("view", { class: "image-container" }, [
                            vue.createElementVNode("image", {
                              src: image,
                              class: "image-content"
                            }, null, 8, ["src"])
                          ]),
                          vue.createElementVNode("view", { class: "frame-footer" }, [
                            vue.createCommentVNode(' <text class="watermark-line">{{ section.watermark.brand }}</text> '),
                            vue.createElementVNode("image", {
                              src: section.watermark.brandLogo,
                              class: "watermark-brand-logo",
                              mode: "aspectFit"
                            }, null, 8, ["src"]),
                            vue.createElementVNode(
                              "text",
                              { class: "watermark-line" },
                              vue.toDisplayString(section.watermark.camera),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "watermark-line" },
                              vue.toDisplayString(section.watermark.lens),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : section.type === "pc" ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                    key: 1,
                    "scroll-x": "true",
                    class: "image-scroll pc-scroll"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(section.images, (image, imgIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "photo-frame",
                          key: imgIndex
                        }, [
                          vue.createElementVNode("view", { class: "image-container pc-container" }, [
                            vue.createElementVNode("image", {
                              src: image,
                              class: "image-content pc-content"
                            }, null, 8, ["src"])
                          ]),
                          vue.createElementVNode("view", { class: "frame-footer" }, [
                            vue.createCommentVNode(' <text class="watermark-line">{{ section.watermark.brand }}</text>\r\n							  '),
                            vue.createElementVNode("image", {
                              src: section.watermark.brandLogo,
                              class: "watermark-brand-logo",
                              mode: "aspectFit"
                            }, null, 8, ["src"]),
                            vue.createElementVNode(
                              "text",
                              { class: "watermark-line" },
                              vue.toDisplayString(section.watermark.camera),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "watermark-line" },
                              vue.toDisplayString(section.watermark.lens),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "edgeInsetBottom" }),
          vue.createElementVNode("view", { class: "fixedView" })
        ]);
      };
    }
  };
  const PagesTemplateIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/HBuilderProjects/YinJi/pages/template/index.vue"]]);
  const _sfc_main$5 = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(uniNavBar, {
            fixed: true,
            shadow: "",
            "status-bar": "",
            "left-icon": "left",
            "left-text": "返回",
            title: "自定义导航栏",
            onClickLeft: _ctx.back
          }, null, 8, ["onClickLeft"]),
          vue.createElementVNode("view", { class: "" })
        ]);
      };
    }
  };
  const PagesSponsorIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/HBuilderProjects/YinJi/pages/sponsor/index.vue"]]);
  const _sfc_main$4 = {
    __name: "custom-navbar",
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const statusBarHeight = vue.ref(0);
      vue.onMounted(() => {
        uni.getSystemInfo({
          success: (res) => {
            statusBarHeight.value = res.statusBarHeight;
          }
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "custom-navbar",
            style: vue.normalizeStyle({ paddingTop: statusBarHeight.value + "px" })
          },
          [
            vue.createElementVNode("view", { class: "navbar-content" }, [
              vue.createElementVNode(
                "text",
                { class: "navbar-title" },
                vue.toDisplayString(__props.title),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const CustomNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-94e9cc56"], ["__file", "D:/HBuilderProjects/YinJi/components/custom-navbar/custom-navbar.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(CustomNavbar, { title: "个人信息" }),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createCommentVNode(" 个人信息内容 "),
            vue.createElementVNode("view", { class: "container" }, " 13123123 "),
            vue.createElementVNode("view", { class: "container" }, " 13123123 "),
            vue.createElementVNode("view", { class: "container" }, " 13123123 ")
          ])
        ]);
      };
    }
  };
  const PagesProfileIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/HBuilderProjects/YinJi/pages/profile/index.vue"]]);
  const _sfc_main$2 = {
    __name: "test",
    setup(__props) {
      const city = vue.ref("北京");
      const back = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      const test = () => {
        uni.showActionSheet({
          itemList: ["A", "B", "C"],
          success: function(res) {
            formatAppLog("log", "at pages/test/test.vue:100", "选中了第" + (res.tapIndex + 1) + "个按钮");
          },
          fail: function(res) {
            formatAppLog("log", "at pages/test/test.vue:103", res.errMsg);
          }
        });
      };
      const confirm = () => {
        uni.showToast({
          title: "搜索"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_card = vue.resolveComponent("uni-card");
        const _component_uni_section = vue.resolveComponent("uni-section");
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(uniNavBar, {
            fixed: true,
            shadow: "",
            "status-bar": "",
            "left-icon": "left",
            "left-text": "返回",
            title: "自定义导航栏",
            onClickLeft: back
          }),
          vue.createVNode(_component_uni_card, {
            "is-full": "",
            isShadow: false
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("button", { onClick: test }, "23")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "基本用法",
            subTitle: "使用 title 属性设置导航栏标题",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, { title: "标题" })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "开启阴影",
            subTitle: "使用 shadow 属性启用阴影",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, {
                  shadow: "",
                  "left-icon": "left",
                  title: "开启阴影",
                  onClickLeft: back
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "开启暗黑模式",
            subTitle: "使用 dark 属性设置暗黑模式",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, {
                  shadow: "",
                  "left-icon": "left",
                  dark: "",
                  title: "暗黑模式",
                  onClickLeft: back
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "带返回箭头+右侧图标",
            subTitle: "使用 left-icon/right-icon 设置左右图标",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, {
                  shadow: "",
                  "left-icon": "left",
                  "right-icon": "cart",
                  title: "标题"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "左侧文字+右侧文字",
            subTitle: "使用 left-text/right-text 设置左右文字",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, {
                  shadow: "",
                  "left-icon": "left",
                  leftText: "返回",
                  rightText: "设置",
                  title: "标题"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "自定义颜色",
            subTitle: "使用 color/background-color 属性设置前景背景色",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createElementVNode("view", { class: "box-bg" }, [
                  vue.createVNode(uniNavBar, {
                    dark: "",
                    color: "#999",
                    backgroundColor: "#f5f5f5",
                    shadow: "",
                    "left-icon": "left",
                    leftText: "返回",
                    rightText: "设置",
                    title: "自定义颜色"
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "自定义高度",
            subTitle: "使用 height 修改组件高度",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createElementVNode("view", { class: "box-bg" }, [
                  vue.createVNode(uniNavBar, {
                    height: "65px",
                    dark: "",
                    shadow: "",
                    "left-icon": "left",
                    leftText: "返回",
                    rightText: "设置",
                    title: "自定义高度"
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_section, {
            title: "自定义内容",
            subTitle: "使用 left/right/default 插槽自定义内容",
            type: "line",
            style: { "margin-bottom": "3px" }
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "box-bg" }, [
                vue.createVNode(uniNavBar, null, {
                  left: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "city" }, [
                      vue.createElementVNode("view", null, [
                        vue.createElementVNode(
                          "text",
                          { class: "uni-nav-bar-text" },
                          vue.toDisplayString(city.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createVNode(uniIcons, {
                        type: "arrow-down",
                        size: "18"
                      }),
                      vue.createVNode(uniIcons, {
                        type: "arrow-left",
                        size: "30"
                      })
                    ])
                  ]),
                  right: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "city" }, " 搜索 ")
                  ]),
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "input-view" }, [
                      vue.createVNode(uniIcons, {
                        t: "input-uni-icon",
                        type: "search",
                        size: "18",
                        color: "#999"
                      }),
                      vue.createElementVNode(
                        "input",
                        {
                          "confirm-type": "search",
                          class: "nav-bar-input",
                          type: "text",
                          placeholder: "输入搜索关键词",
                          onConfirm: confirm
                        },
                        null,
                        32
                        /* NEED_HYDRATION */
                      )
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/HBuilderProjects/YinJi/pages/test/test.vue"]]);
  const _imports_0 = "/static/logo.png";
  const _sfc_main$1 = {
    __name: "image-detail",
    setup(__props) {
      const isShow = vue.ref(false);
      vue.onMounted(() => {
        setTimeout(() => {
          isShow.value = true;
        }, 100);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-container" }, [
          vue.createElementVNode(
            "image",
            {
              src: _imports_0,
              class: vue.normalizeClass(["detail-image", { "image-show": isShow.value }])
            },
            null,
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["detail-text", { "text-show": isShow.value }])
            },
            "123",
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const PagesWatermarkImageDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/HBuilderProjects/YinJi/pages/watermark/image-detail.vue"]]);
  __definePage("pages/watermark/index", PagesWatermarkIndex);
  __definePage("pages/template/index", PagesTemplateIndex);
  __definePage("pages/sponsor/index", PagesSponsorIndex);
  __definePage("pages/profile/index", PagesProfileIndex);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/watermark/image-detail", PagesWatermarkImageDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/HBuilderProjects/YinJi/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
