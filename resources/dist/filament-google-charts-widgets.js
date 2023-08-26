var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/safevalues/environment/dev.js
var require_dev = __commonJS({
  "node_modules/safevalues/environment/dev.js"() {
    "use strict";
  }
});

// node_modules/safevalues/internals/secrets.js
var require_secrets = __commonJS({
  "node_modules/safevalues/internals/secrets.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ensureTokenIsValid = exports.secretToken = void 0;
    require_dev();
    exports.secretToken = {};
    function ensureTokenIsValid(token) {
      if (false) {
        if (token !== exports.secretToken) {
          throw new Error("Bad secret");
        }
      }
    }
    exports.ensureTokenIsValid = ensureTokenIsValid;
  }
});

// node_modules/safevalues/internals/trusted_types.js
var require_trusted_types = __commonJS({
  "node_modules/safevalues/internals/trusted_types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TEST_ONLY = exports.getTrustedTypesPolicy = exports.getTrustedTypes = void 0;
    var trustedTypesPolicyName = "google#safe";
    function trustedTypes() {
      if (typeof window !== "undefined") {
        return window.trustedTypes;
      }
      return void 0;
    }
    function getTrustedTypes() {
      var _a;
      return trustedTypesPolicyName !== "" ? (_a = trustedTypes()) !== null && _a !== void 0 ? _a : null : null;
    }
    exports.getTrustedTypes = getTrustedTypes;
    var trustedTypesPolicy;
    function getTrustedTypesPolicy() {
      var _a, _b;
      if (trustedTypesPolicy === void 0) {
        try {
          trustedTypesPolicy = (_b = (_a = getTrustedTypes()) === null || _a === void 0 ? void 0 : _a.createPolicy(trustedTypesPolicyName, {
            createHTML: function(s5) {
              return s5;
            },
            createScript: function(s5) {
              return s5;
            },
            createScriptURL: function(s5) {
              return s5;
            }
          })) !== null && _b !== void 0 ? _b : null;
        } catch (_c) {
          trustedTypesPolicy = null;
        }
      }
      return trustedTypesPolicy;
    }
    exports.getTrustedTypesPolicy = getTrustedTypesPolicy;
    exports.TEST_ONLY = {
      resetDefaults: function() {
        trustedTypesPolicy = void 0;
        trustedTypesPolicyName = "google#safe";
      },
      setTrustedTypesPolicyName: function(name) {
        trustedTypesPolicyName = name;
      }
    };
  }
});

// node_modules/safevalues/internals/resource_url_impl.js
var require_resource_url_impl = __commonJS({
  "node_modules/safevalues/internals/resource_url_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapResourceUrl = exports.isResourceUrl = exports.createResourceUrl = exports.TrustedResourceUrl = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var trusted_types_1 = require_trusted_types();
    var ResourceUrlImpl = function() {
      function ResourceUrlImpl2(url, token) {
        (0, secrets_1.ensureTokenIsValid)(token);
        this.privateDoNotAccessOrElseWrappedResourceUrl = url;
      }
      ResourceUrlImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedResourceUrl.toString();
      };
      return ResourceUrlImpl2;
    }();
    var GlobalTrustedScriptURL = typeof window !== void 0 ? window.TrustedScriptURL : void 0;
    exports.TrustedResourceUrl = GlobalTrustedScriptURL !== null && GlobalTrustedScriptURL !== void 0 ? GlobalTrustedScriptURL : ResourceUrlImpl;
    function createResourceUrl(url) {
      var _a;
      var noinlineUrl = url;
      var trustedScriptURL = (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createScriptURL(noinlineUrl);
      return trustedScriptURL !== null && trustedScriptURL !== void 0 ? trustedScriptURL : new ResourceUrlImpl(noinlineUrl, secrets_1.secretToken);
    }
    exports.createResourceUrl = createResourceUrl;
    function isResourceUrl(value) {
      var _a;
      return ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScriptURL(value)) || value instanceof ResourceUrlImpl;
    }
    exports.isResourceUrl = isResourceUrl;
    function unwrapResourceUrl(value) {
      var _a;
      if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScriptURL(value)) {
        return value;
      } else if (value instanceof ResourceUrlImpl) {
        return value.privateDoNotAccessOrElseWrappedResourceUrl;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping TrustedResourceUrl";
        }
        throw new Error(message);
      }
    }
    exports.unwrapResourceUrl = unwrapResourceUrl;
  }
});

// node_modules/safevalues/internals/script_impl.js
var require_script_impl = __commonJS({
  "node_modules/safevalues/internals/script_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapScript = exports.isScript = exports.EMPTY_SCRIPT = exports.createScript = exports.SafeScript = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var trusted_types_1 = require_trusted_types();
    var ScriptImpl = function() {
      function ScriptImpl2(script, token) {
        (0, secrets_1.ensureTokenIsValid)(token);
        this.privateDoNotAccessOrElseWrappedScript = script;
      }
      ScriptImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedScript.toString();
      };
      return ScriptImpl2;
    }();
    function createScriptInternal(script, trusted) {
      return trusted !== null && trusted !== void 0 ? trusted : new ScriptImpl(script, secrets_1.secretToken);
    }
    var GlobalTrustedScript = typeof window !== void 0 ? window.TrustedScript : void 0;
    exports.SafeScript = GlobalTrustedScript !== null && GlobalTrustedScript !== void 0 ? GlobalTrustedScript : ScriptImpl;
    function createScript(script) {
      var _a;
      var noinlineScript = script;
      return createScriptInternal(noinlineScript, (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createScript(noinlineScript));
    }
    exports.createScript = createScript;
    exports.EMPTY_SCRIPT = /* @__PURE__ */ function() {
      var _a;
      return createScriptInternal("", (_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.emptyScript);
    }();
    function isScript(value) {
      var _a;
      return ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScript(value)) || value instanceof ScriptImpl;
    }
    exports.isScript = isScript;
    function unwrapScript(value) {
      var _a;
      if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isScript(value)) {
        return value;
      } else if (value instanceof ScriptImpl) {
        return value.privateDoNotAccessOrElseWrappedScript;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping SafeScript";
        }
        throw new Error(message);
      }
    }
    exports.unwrapScript = unwrapScript;
  }
});

// node_modules/safevalues/internals/string_literal.js
var require_string_literal = __commonJS({
  "node_modules/safevalues/internals/string_literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertIsTemplateObject = void 0;
    function assertIsTemplateObject(templateObj, hasExprs, errorMsg) {
      if (!Array.isArray(templateObj) || !Array.isArray(templateObj.raw) || !hasExprs && templateObj.length !== 1) {
        throw new TypeError(errorMsg);
      }
    }
    exports.assertIsTemplateObject = assertIsTemplateObject;
  }
});

// node_modules/safevalues/builders/resource_url_builders.js
var require_resource_url_builders = __commonJS({
  "node_modules/safevalues/builders/resource_url_builders.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectUrlFromScript = exports.replaceFragment = exports.appendParams = exports.trustedResourceUrl = void 0;
    require_dev();
    var resource_url_impl_1 = require_resource_url_impl();
    var script_impl_1 = require_script_impl();
    var string_literal_1 = require_string_literal();
    function trustedResourceUrl2(templateObj) {
      var rest = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }
      if (false) {
        (0, string_literal_1.assertIsTemplateObject)(templateObj, true, "trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
      }
      if (rest.length === 0) {
        return (0, resource_url_impl_1.createResourceUrl)(templateObj[0]);
      }
      var base = templateObj[0].toLowerCase();
      if (false) {
        if (/^data:/.test(base)) {
          throw new Error("Data URLs cannot have expressions in the template literal input.");
        }
        if (!hasValidOrigin(base) && !isValidPathStart(base) && !isValidAboutUrl(base)) {
          throw new Error("Trying to interpolate expressions in an unsupported url format.");
        }
      }
      var urlParts = [templateObj[0]];
      for (var i4 = 0; i4 < rest.length; i4++) {
        urlParts.push(encodeURIComponent(rest[i4]));
        urlParts.push(templateObj[i4 + 1]);
      }
      return (0, resource_url_impl_1.createResourceUrl)(urlParts.join(""));
    }
    exports.trustedResourceUrl = trustedResourceUrl2;
    function appendParams2(trustedUrl, params) {
      var url = (0, resource_url_impl_1.unwrapResourceUrl)(trustedUrl).toString();
      if (/#/.test(url)) {
        var message = "";
        if (false) {
          message = "Found a hash in url (".concat(url, "), appending not supported");
        }
        throw new Error(message);
      }
      var separator = /\?/.test(url) ? "&" : "?";
      params.forEach(function(value, key) {
        var values = value instanceof Array ? value : [value];
        for (var i4 = 0; i4 < values.length; i4++) {
          var v2 = values[i4];
          if (v2 === null || v2 === void 0) {
            continue;
          }
          url += separator + encodeURIComponent(key) + "=" + encodeURIComponent(String(v2));
          separator = "&";
        }
      });
      return (0, resource_url_impl_1.createResourceUrl)(url);
    }
    exports.appendParams = appendParams2;
    var BEFORE_FRAGMENT_REGEXP = /[^#]*/;
    function replaceFragment2(trustedUrl, fragment) {
      var urlString = (0, resource_url_impl_1.unwrapResourceUrl)(trustedUrl).toString();
      return (0, resource_url_impl_1.createResourceUrl)(BEFORE_FRAGMENT_REGEXP.exec(urlString)[0] + "#" + fragment);
    }
    exports.replaceFragment = replaceFragment2;
    function objectUrlFromScript2(safeScript) {
      var scriptContent = (0, script_impl_1.unwrapScript)(safeScript).toString();
      var blob = new Blob([scriptContent], { type: "text/javascript" });
      return (0, resource_url_impl_1.createResourceUrl)(URL.createObjectURL(blob));
    }
    exports.objectUrlFromScript = objectUrlFromScript2;
  }
});

// node_modules/safevalues/internals/attribute_impl.js
var require_attribute_impl = __commonJS({
  "node_modules/safevalues/internals/attribute_impl.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d3, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
          d4.__proto__ = b3;
        } || function(d4, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d4[p2] = b3[p2];
        };
        return extendStatics(d3, b2);
      };
      return function(d3, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d3, b2);
        function __() {
          this.constructor = d3;
        }
        d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapAttributePrefix = exports.createAttributePrefix = exports.SafeAttributePrefix = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var SafeAttributePrefix = function() {
      function SafeAttributePrefix2() {
      }
      return SafeAttributePrefix2;
    }();
    exports.SafeAttributePrefix = SafeAttributePrefix;
    var AttributePrefixImpl = function(_super) {
      __extends(AttributePrefixImpl2, _super);
      function AttributePrefixImpl2(attrPrefix, token) {
        var _this = _super.call(this) || this;
        (0, secrets_1.ensureTokenIsValid)(token);
        _this.privateDoNotAccessOrElseWrappedAttrPrefix = attrPrefix;
        return _this;
      }
      AttributePrefixImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedAttrPrefix;
      };
      return AttributePrefixImpl2;
    }(SafeAttributePrefix);
    function createAttributePrefix(attrPrefix) {
      return new AttributePrefixImpl(attrPrefix, secrets_1.secretToken);
    }
    exports.createAttributePrefix = createAttributePrefix;
    function unwrapAttributePrefix(value) {
      if (value instanceof AttributePrefixImpl) {
        return value.privateDoNotAccessOrElseWrappedAttrPrefix;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping SafeAttributePrefix";
        }
        throw new Error(message);
      }
    }
    exports.unwrapAttributePrefix = unwrapAttributePrefix;
  }
});

// node_modules/safevalues/internals/html_impl.js
var require_html_impl = __commonJS({
  "node_modules/safevalues/internals/html_impl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapHtml = exports.isHtml = exports.EMPTY_HTML = exports.createHtml = exports.SafeHtml = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var trusted_types_1 = require_trusted_types();
    var HtmlImpl = function() {
      function HtmlImpl2(html, token) {
        (0, secrets_1.ensureTokenIsValid)(token);
        this.privateDoNotAccessOrElseWrappedHtml = html;
      }
      HtmlImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedHtml.toString();
      };
      return HtmlImpl2;
    }();
    function createHtmlInternal(html, trusted) {
      return trusted !== null && trusted !== void 0 ? trusted : new HtmlImpl(html, secrets_1.secretToken);
    }
    var GlobalTrustedHTML = typeof window !== void 0 ? window.TrustedHTML : void 0;
    exports.SafeHtml = GlobalTrustedHTML !== null && GlobalTrustedHTML !== void 0 ? GlobalTrustedHTML : HtmlImpl;
    function createHtml(html) {
      var _a;
      var noinlineHtml = html;
      return createHtmlInternal(noinlineHtml, (_a = (0, trusted_types_1.getTrustedTypesPolicy)()) === null || _a === void 0 ? void 0 : _a.createHTML(noinlineHtml));
    }
    exports.createHtml = createHtml;
    exports.EMPTY_HTML = /* @__PURE__ */ function() {
      var _a;
      return createHtmlInternal("", (_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.emptyHTML);
    }();
    function isHtml(value) {
      var _a;
      return ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isHTML(value)) || value instanceof HtmlImpl;
    }
    exports.isHtml = isHtml;
    function unwrapHtml(value) {
      var _a;
      if ((_a = (0, trusted_types_1.getTrustedTypes)()) === null || _a === void 0 ? void 0 : _a.isHTML(value)) {
        return value;
      } else if (value instanceof HtmlImpl) {
        return value.privateDoNotAccessOrElseWrappedHtml;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping SafeHtml";
        }
        throw new Error(message);
      }
    }
    exports.unwrapHtml = unwrapHtml;
  }
});

// node_modules/safevalues/internals/style_impl.js
var require_style_impl = __commonJS({
  "node_modules/safevalues/internals/style_impl.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d3, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
          d4.__proto__ = b3;
        } || function(d4, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d4[p2] = b3[p2];
        };
        return extendStatics(d3, b2);
      };
      return function(d3, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d3, b2);
        function __() {
          this.constructor = d3;
        }
        d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapStyle = exports.isStyle = exports.createStyle = exports.SafeStyle = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var SafeStyle = function() {
      function SafeStyle2() {
      }
      return SafeStyle2;
    }();
    exports.SafeStyle = SafeStyle;
    var StyleImpl = function(_super) {
      __extends(StyleImpl2, _super);
      function StyleImpl2(style, token) {
        var _this = _super.call(this) || this;
        (0, secrets_1.ensureTokenIsValid)(token);
        _this.privateDoNotAccessOrElseWrappedStyle = style;
        return _this;
      }
      StyleImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedStyle;
      };
      return StyleImpl2;
    }(SafeStyle);
    function createStyle(style) {
      return new StyleImpl(style, secrets_1.secretToken);
    }
    exports.createStyle = createStyle;
    function isStyle(value) {
      return value instanceof StyleImpl;
    }
    exports.isStyle = isStyle;
    function unwrapStyle(value) {
      if (value instanceof StyleImpl) {
        return value.privateDoNotAccessOrElseWrappedStyle;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping SafeStyle";
        }
        throw new Error(message);
      }
    }
    exports.unwrapStyle = unwrapStyle;
  }
});

// node_modules/safevalues/internals/style_sheet_impl.js
var require_style_sheet_impl = __commonJS({
  "node_modules/safevalues/internals/style_sheet_impl.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d3, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
          d4.__proto__ = b3;
        } || function(d4, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d4[p2] = b3[p2];
        };
        return extendStatics(d3, b2);
      };
      return function(d3, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d3, b2);
        function __() {
          this.constructor = d3;
        }
        d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unwrapStyleSheet = exports.isStyleSheet = exports.createStyleSheet = exports.SafeStyleSheet = void 0;
    require_dev();
    var secrets_1 = require_secrets();
    var SafeStyleSheet = function() {
      function SafeStyleSheet2() {
      }
      return SafeStyleSheet2;
    }();
    exports.SafeStyleSheet = SafeStyleSheet;
    var StyleSheetImpl = function(_super) {
      __extends(StyleSheetImpl2, _super);
      function StyleSheetImpl2(styleSheet, token) {
        var _this = _super.call(this) || this;
        (0, secrets_1.ensureTokenIsValid)(token);
        _this.privateDoNotAccessOrElseWrappedStyleSheet = styleSheet;
        return _this;
      }
      StyleSheetImpl2.prototype.toString = function() {
        return this.privateDoNotAccessOrElseWrappedStyleSheet;
      };
      return StyleSheetImpl2;
    }(SafeStyleSheet);
    function createStyleSheet(styleSheet) {
      return new StyleSheetImpl(styleSheet, secrets_1.secretToken);
    }
    exports.createStyleSheet = createStyleSheet;
    function isStyleSheet(value) {
      return value instanceof StyleSheetImpl;
    }
    exports.isStyleSheet = isStyleSheet;
    function unwrapStyleSheet(value) {
      if (value instanceof StyleSheetImpl) {
        return value.privateDoNotAccessOrElseWrappedStyleSheet;
      } else {
        var message = "";
        if (false) {
          message = "Unexpected type when unwrapping SafeStyleSheet";
        }
        throw new Error(message);
      }
    }
    exports.unwrapStyleSheet = unwrapStyleSheet;
  }
});

// node_modules/safevalues/builders/url_sanitizer.js
var require_url_sanitizer = __commonJS({
  "node_modules/safevalues/builders/url_sanitizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.restrictivelySanitizeUrl = exports.unwrapUrlOrSanitize = exports.sanitizeJavascriptUrl = exports.extractScheme = void 0;
    require_dev();
    function extractScheme(url) {
      var parsedUrl;
      try {
        parsedUrl = new URL(url);
      } catch (e6) {
        return "https:";
      }
      return parsedUrl.protocol;
    }
    exports.extractScheme = extractScheme;
    var ALLOWED_SCHEMES = ["data:", "http:", "https:", "mailto:", "ftp:"];
    function sanitizeJavascriptUrl(url) {
      var parsedScheme = extractScheme(url);
      if (parsedScheme === "javascript:") {
        if (false) {
          console.error("A URL with content '".concat(url, "' was sanitized away."));
        }
        return void 0;
      }
      return url;
    }
    exports.sanitizeJavascriptUrl = sanitizeJavascriptUrl;
    function unwrapUrlOrSanitize(url) {
      return sanitizeJavascriptUrl(url);
    }
    exports.unwrapUrlOrSanitize = unwrapUrlOrSanitize;
    function restrictivelySanitizeUrl(url) {
      var parsedScheme = extractScheme(url);
      if (parsedScheme !== void 0 && ALLOWED_SCHEMES.indexOf(parsedScheme.toLowerCase()) !== -1) {
        return url;
      }
      return "about:invalid#zClosurez";
    }
    exports.restrictivelySanitizeUrl = restrictivelySanitizeUrl;
  }
});

// node_modules/safevalues/dom/elements/anchor.js
var require_anchor = __commonJS({
  "node_modules/safevalues/dom/elements/anchor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setHref = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setHref(anchor, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        anchor.href = sanitizedUrl;
      }
    }
    exports.setHref = setHref;
  }
});

// node_modules/safevalues/dom/elements/area.js
var require_area = __commonJS({
  "node_modules/safevalues/dom/elements/area.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setHref = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setHref(area, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        area.href = sanitizedUrl;
      }
    }
    exports.setHref = setHref;
  }
});

// node_modules/safevalues/dom/elements/base.js
var require_base = __commonJS({
  "node_modules/safevalues/dom/elements/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setHref = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    function setHref(baseEl, url) {
      baseEl.href = (0, resource_url_impl_1.unwrapResourceUrl)(url);
    }
    exports.setHref = setHref;
  }
});

// node_modules/safevalues/dom/elements/button.js
var require_button = __commonJS({
  "node_modules/safevalues/dom/elements/button.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setFormaction = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setFormaction(button, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        button.formAction = sanitizedUrl;
      }
    }
    exports.setFormaction = setFormaction;
  }
});

// node_modules/safevalues/dom/elements/element.js
var require_element = __commonJS({
  "node_modules/safevalues/dom/elements/element.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o6, n7) {
      var m2 = typeof Symbol === "function" && o6[Symbol.iterator];
      if (!m2)
        return o6;
      var i4 = m2.call(o6), r4, ar = [], e6;
      try {
        while ((n7 === void 0 || n7-- > 0) && !(r4 = i4.next()).done)
          ar.push(r4.value);
      } catch (error) {
        e6 = { error };
      } finally {
        try {
          if (r4 && !r4.done && (m2 = i4["return"]))
            m2.call(i4);
        } finally {
          if (e6)
            throw e6.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i4 = 0, l5 = from.length, ar; i4 < l5; i4++) {
          if (ar || !(i4 in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i4);
            ar[i4] = from[i4];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setPrefixedAttribute = exports.buildPrefixedAttributeSetter = exports.insertAdjacentHtml = exports.setCssText = exports.setOuterHtml = exports.setInnerHtml = void 0;
    require_dev();
    var attribute_impl_1 = require_attribute_impl();
    var html_impl_1 = require_html_impl();
    var style_impl_1 = require_style_impl();
    function setInnerHtml(elOrRoot, v2) {
      if (isElement(elOrRoot)) {
        throwIfScriptOrStyle(elOrRoot);
      }
      elOrRoot.innerHTML = (0, html_impl_1.unwrapHtml)(v2);
    }
    exports.setInnerHtml = setInnerHtml;
    function setOuterHtml(e6, v2) {
      var parent = e6.parentElement;
      if (parent !== null) {
        throwIfScriptOrStyle(parent);
      }
      e6.outerHTML = (0, html_impl_1.unwrapHtml)(v2);
    }
    exports.setOuterHtml = setOuterHtml;
    function setCssText(e6, v2) {
      e6.style.cssText = (0, style_impl_1.unwrapStyle)(v2);
    }
    exports.setCssText = setCssText;
    function insertAdjacentHtml(element, position, v2) {
      var tagContext = position === "beforebegin" || position === "afterend" ? element.parentElement : element;
      if (tagContext !== null) {
        throwIfScriptOrStyle(tagContext);
      }
      element.insertAdjacentHTML(position, (0, html_impl_1.unwrapHtml)(v2));
    }
    exports.insertAdjacentHtml = insertAdjacentHtml;
    function buildPrefixedAttributeSetter(prefix) {
      var otherPrefixes = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherPrefixes[_i - 1] = arguments[_i];
      }
      var prefixes = __spreadArray([prefix], __read(otherPrefixes), false);
      return function(e6, attr, value) {
        setPrefixedAttribute(prefixes, e6, attr, value);
      };
    }
    exports.buildPrefixedAttributeSetter = buildPrefixedAttributeSetter;
    function setPrefixedAttribute(attrPrefixes, e6, attr, value) {
      if (attrPrefixes.length === 0) {
        var message = "";
        if (false) {
          message = "No prefixes are provided";
        }
        throw new Error(message);
      }
      var prefixes = attrPrefixes.map(function(s5) {
        return (0, attribute_impl_1.unwrapAttributePrefix)(s5);
      });
      var attrLower = attr.toLowerCase();
      if (prefixes.every(function(p2) {
        return attrLower.indexOf(p2) !== 0;
      })) {
        throw new Error('Attribute "'.concat(attr, '" does not match any of the allowed prefixes.'));
      }
      e6.setAttribute(attr, value);
    }
    exports.setPrefixedAttribute = setPrefixedAttribute;
    function throwIfScriptOrStyle(element) {
      var message = "";
      if (element.tagName.toLowerCase() === "script") {
        if (false) {
          message = "Use safeScriptEl.setTextContent with a SafeScript.";
        }
        throw new Error(message);
      } else if (element.tagName.toLowerCase() === "style") {
        if (false) {
          message = "Use safeStyleEl.setTextContent with a SafeStyleSheet.";
        }
        throw new Error(message);
      }
    }
    function isElement(elOrRoot) {
      return elOrRoot.tagName !== void 0;
    }
  }
});

// node_modules/safevalues/dom/elements/embed.js
var require_embed = __commonJS({
  "node_modules/safevalues/dom/elements/embed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSrc = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    function setSrc(embedEl, url) {
      embedEl.src = (0, resource_url_impl_1.unwrapResourceUrl)(url);
    }
    exports.setSrc = setSrc;
  }
});

// node_modules/safevalues/dom/elements/form.js
var require_form = __commonJS({
  "node_modules/safevalues/dom/elements/form.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setAction = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setAction(form, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        form.action = sanitizedUrl;
      }
    }
    exports.setAction = setAction;
  }
});

// node_modules/safevalues/dom/elements/iframe.js
var require_iframe = __commonJS({
  "node_modules/safevalues/dom/elements/iframe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSrcdoc = exports.setSrc = void 0;
    var html_impl_1 = require_html_impl();
    var resource_url_impl_1 = require_resource_url_impl();
    function setSrc(iframe, v2) {
      iframe.src = (0, resource_url_impl_1.unwrapResourceUrl)(v2).toString();
    }
    exports.setSrc = setSrc;
    function setSrcdoc(iframe, v2) {
      iframe.srcdoc = (0, html_impl_1.unwrapHtml)(v2);
    }
    exports.setSrcdoc = setSrcdoc;
  }
});

// node_modules/safevalues/dom/elements/input.js
var require_input = __commonJS({
  "node_modules/safevalues/dom/elements/input.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setFormaction = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setFormaction(input, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        input.formAction = sanitizedUrl;
      }
    }
    exports.setFormaction = setFormaction;
  }
});

// node_modules/safevalues/dom/elements/link.js
var require_link = __commonJS({
  "node_modules/safevalues/dom/elements/link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setHrefAndRel = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    var resource_url_impl_1 = require_resource_url_impl();
    var SAFE_URL_REL_VALUES = [
      "alternate",
      "author",
      "bookmark",
      "canonical",
      "cite",
      "help",
      "icon",
      "license",
      "next",
      "prefetch",
      "dns-prefetch",
      "prerender",
      "preconnect",
      "preload",
      "prev",
      "search",
      "subresource"
    ];
    function setHrefAndRel(link, url, rel) {
      if ((0, resource_url_impl_1.isResourceUrl)(url)) {
        link.href = (0, resource_url_impl_1.unwrapResourceUrl)(url).toString();
      } else {
        if (SAFE_URL_REL_VALUES.indexOf(rel) === -1) {
          throw new Error('TrustedResourceUrl href attribute required with rel="'.concat(rel, '"'));
        }
        var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
        if (sanitizedUrl === void 0) {
          return;
        }
        link.href = sanitizedUrl;
      }
      link.rel = rel;
    }
    exports.setHrefAndRel = setHrefAndRel;
  }
});

// node_modules/safevalues/dom/elements/object.js
var require_object = __commonJS({
  "node_modules/safevalues/dom/elements/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setData = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    function setData(obj, v2) {
      obj.data = (0, resource_url_impl_1.unwrapResourceUrl)(v2);
    }
    exports.setData = setData;
  }
});

// node_modules/safevalues/dom/elements/script.js
var require_script = __commonJS({
  "node_modules/safevalues/dom/elements/script.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setSrc = exports.setTextContent = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    var script_impl_1 = require_script_impl();
    function getScriptNonceFromWindow(win) {
      var _a;
      var doc = win.document;
      var script = (_a = doc.querySelector) === null || _a === void 0 ? void 0 : _a.call(doc, "script[nonce]");
      if (script) {
        return script["nonce"] || script.getAttribute("nonce") || "";
      }
      return "";
    }
    function setNonceForScriptElement(script) {
      var win = script.ownerDocument && script.ownerDocument.defaultView;
      var nonce = getScriptNonceFromWindow(win || window);
      if (nonce) {
        script.setAttribute("nonce", nonce);
      }
    }
    function setTextContent(script, v2) {
      script.textContent = (0, script_impl_1.unwrapScript)(v2);
      setNonceForScriptElement(script);
    }
    exports.setTextContent = setTextContent;
    function setSrc(script, v2) {
      script.src = (0, resource_url_impl_1.unwrapResourceUrl)(v2);
      setNonceForScriptElement(script);
    }
    exports.setSrc = setSrc;
  }
});

// node_modules/safevalues/dom/elements/style.js
var require_style = __commonJS({
  "node_modules/safevalues/dom/elements/style.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setTextContent = void 0;
    var style_sheet_impl_1 = require_style_sheet_impl();
    function setTextContent(elem, safeStyleSheet) {
      elem.textContent = (0, style_sheet_impl_1.unwrapStyleSheet)(safeStyleSheet);
    }
    exports.setTextContent = setTextContent;
  }
});

// node_modules/safevalues/dom/elements/svg_use.js
var require_svg_use = __commonJS({
  "node_modules/safevalues/dom/elements/svg_use.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setHref = void 0;
    require_dev();
    var url_sanitizer_1 = require_url_sanitizer();
    function setHref(useEl, url) {
      var scheme = (0, url_sanitizer_1.extractScheme)(url);
      if (scheme === "javascript:" || scheme === "data:") {
        if (false) {
          var msg = "A URL with content '".concat(url, "' was sanitized away.");
          console.error(msg);
        }
        return;
      }
      useEl.setAttribute("href", url);
    }
    exports.setHref = setHref;
  }
});

// node_modules/safevalues/dom/globals/document.js
var require_document = __commonJS({
  "node_modules/safevalues/dom/globals/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.execCommandInsertHtml = exports.execCommand = exports.write = void 0;
    var html_impl_1 = require_html_impl();
    function write(doc, text) {
      doc.write((0, html_impl_1.unwrapHtml)(text));
    }
    exports.write = write;
    function execCommand(doc, command, value) {
      var commandString = String(command);
      var valueArgument = value;
      if (commandString.toLowerCase() === "inserthtml") {
        valueArgument = (0, html_impl_1.unwrapHtml)(value);
      }
      return doc.execCommand(commandString, false, valueArgument);
    }
    exports.execCommand = execCommand;
    function execCommandInsertHtml(doc, html) {
      return doc.execCommand("insertHTML", false, (0, html_impl_1.unwrapHtml)(html));
    }
    exports.execCommandInsertHtml = execCommandInsertHtml;
  }
});

// node_modules/safevalues/dom/globals/dom_parser.js
var require_dom_parser = __commonJS({
  "node_modules/safevalues/dom/globals/dom_parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFromString = exports.parseXml = exports.parseHtml = void 0;
    require_dev();
    var html_impl_1 = require_html_impl();
    function parseHtml(parser, html) {
      return parseFromString(parser, html, "text/html");
    }
    exports.parseHtml = parseHtml;
    function parseXml(parser, xml) {
      var doc = parseFromString(parser, (0, html_impl_1.createHtml)(xml), "text/xml");
      var iterator = document.createNodeIterator(
        doc,
        NodeFilter.SHOW_ALL,
        null,
        false
      );
      var currentNode;
      while (currentNode = iterator.nextNode()) {
        if (currentNode instanceof HTMLElement || currentNode instanceof SVGElement) {
          var message = "unsafe XML";
          if (false) {
            message = "attempted to parse an XML document that embeds HTML or SVG content";
          }
          throw new Error(message);
        }
      }
      return doc;
    }
    exports.parseXml = parseXml;
    function parseFromString(parser, content, contentType) {
      return parser.parseFromString((0, html_impl_1.unwrapHtml)(content), contentType);
    }
    exports.parseFromString = parseFromString;
  }
});

// node_modules/safevalues/dom/globals/global.js
var require_global = __commonJS({
  "node_modules/safevalues/dom/globals/global.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalEval = void 0;
    var script_impl_1 = require_script_impl();
    function globalEval(win, script) {
      var trustedScript = (0, script_impl_1.unwrapScript)(script);
      var result = win.eval(trustedScript);
      if (result === trustedScript) {
        result = win.eval(trustedScript.toString());
      }
      return result;
    }
    exports.globalEval = globalEval;
  }
});

// node_modules/safevalues/dom/globals/location.js
var require_location = __commonJS({
  "node_modules/safevalues/dom/globals/location.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assign = exports.replace = exports.setHref = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function setHref(loc, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        loc.href = sanitizedUrl;
      }
    }
    exports.setHref = setHref;
    function replace(loc, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        loc.replace(sanitizedUrl);
      }
    }
    exports.replace = replace;
    function assign(loc, url) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        loc.assign(sanitizedUrl);
      }
    }
    exports.assign = assign;
  }
});

// node_modules/safevalues/dom/globals/range.js
var require_range = __commonJS({
  "node_modules/safevalues/dom/globals/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createContextualFragment = void 0;
    var html_impl_1 = require_html_impl();
    function createContextualFragment(range, html) {
      return range.createContextualFragment((0, html_impl_1.unwrapHtml)(html));
    }
    exports.createContextualFragment = createContextualFragment;
  }
});

// node_modules/safevalues/dom/globals/service_worker_container.js
var require_service_worker_container = __commonJS({
  "node_modules/safevalues/dom/globals/service_worker_container.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.register = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    function register(container, scriptURL, options) {
      return container.register((0, resource_url_impl_1.unwrapResourceUrl)(scriptURL), options);
    }
    exports.register = register;
  }
});

// node_modules/safevalues/dom/globals/url.js
var require_url = __commonJS({
  "node_modules/safevalues/dom/globals/url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectUrlFromSafeSource = void 0;
    function isSafeMimeType(mimeType) {
      var match = mimeType.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
      return (match === null || match === void 0 ? void 0 : match.length) === 2 && (isSafeImageMimeType(match[1]) || isSafeVideoMimeType(match[1]) || isSafeAudioMimeType(match[1]));
    }
    function isSafeImageMimeType(mimeType) {
      return /^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)$/i.test(mimeType);
    }
    function isSafeVideoMimeType(mimeType) {
      return /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(mimeType);
    }
    function isSafeAudioMimeType(mimeType) {
      return /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(mimeType);
    }
    function objectUrlFromSafeSource(source) {
      if (typeof MediaSource !== "undefined" && source instanceof MediaSource) {
        return URL.createObjectURL(source);
      }
      var blob = source;
      if (!isSafeMimeType(blob.type)) {
        var message = "";
        if (false) {
          message = "unsafe blob MIME type: ".concat(blob.type);
        }
        throw new Error(message);
      }
      return URL.createObjectURL(blob);
    }
    exports.objectUrlFromSafeSource = objectUrlFromSafeSource;
  }
});

// node_modules/safevalues/dom/globals/window.js
var require_window = __commonJS({
  "node_modules/safevalues/dom/globals/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = void 0;
    var url_sanitizer_1 = require_url_sanitizer();
    function open(win, url, target, features) {
      var sanitizedUrl = (0, url_sanitizer_1.unwrapUrlOrSanitize)(url);
      if (sanitizedUrl !== void 0) {
        return win.open(sanitizedUrl, target, features);
      }
      return null;
    }
    exports.open = open;
  }
});

// node_modules/safevalues/dom/globals/worker.js
var require_worker = __commonJS({
  "node_modules/safevalues/dom/globals/worker.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o6, n7) {
      var m2 = typeof Symbol === "function" && o6[Symbol.iterator];
      if (!m2)
        return o6;
      var i4 = m2.call(o6), r4, ar = [], e6;
      try {
        while ((n7 === void 0 || n7-- > 0) && !(r4 = i4.next()).done)
          ar.push(r4.value);
      } catch (error) {
        e6 = { error };
      } finally {
        try {
          if (r4 && !r4.done && (m2 = i4["return"]))
            m2.call(i4);
        } finally {
          if (e6)
            throw e6.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i4 = 0, l5 = from.length, ar; i4 < l5; i4++) {
          if (ar || !(i4 in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i4);
            ar[i4] = from[i4];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.importScripts = exports.createShared = exports.create = void 0;
    var resource_url_impl_1 = require_resource_url_impl();
    function create(url, options) {
      return new Worker((0, resource_url_impl_1.unwrapResourceUrl)(url), options);
    }
    exports.create = create;
    function createShared(url, options) {
      return new SharedWorker((0, resource_url_impl_1.unwrapResourceUrl)(url), options);
    }
    exports.createShared = createShared;
    function importScripts(scope) {
      var urls = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        urls[_i - 1] = arguments[_i];
      }
      scope.importScripts.apply(scope, __spreadArray([], __read(urls.map(function(url) {
        return (0, resource_url_impl_1.unwrapResourceUrl)(url);
      })), false));
    }
    exports.importScripts = importScripts;
  }
});

// node_modules/@lit/reactive-element/css-tag.js
var t = window;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t3, e6, n7) {
    if (this._$cssResult$ = true, n7 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e6;
  }
  get styleSheet() {
    let t3 = this.o;
    const s5 = this.t;
    if (e && void 0 === t3) {
      const e6 = void 0 !== s5 && 1 === s5.length;
      e6 && (t3 = n.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && n.set(s5, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e6) => {
  const n7 = 1 === t3.length ? t3[0] : e6.reduce((e7, s5, n8) => e7 + ((t4) => {
    if (true === t4._$cssResult$)
      return t4.cssText;
    if ("number" == typeof t4)
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t3[n8 + 1], t3[0]);
  return new o(n7, t3, s);
};
var S = (s5, n7) => {
  e ? s5.adoptedStyleSheets = n7.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n7.forEach((e6) => {
    const n8 = document.createElement("style"), o6 = t.litNonce;
    void 0 !== o6 && n8.setAttribute("nonce", o6), n8.textContent = e6.cssText, s5.appendChild(n8);
  });
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e6 = "";
  for (const s5 of t4.cssRules)
    e6 += s5.cssText;
  return r(e6);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window;
var r2 = e2.trustedTypes;
var h = r2 ? r2.emptyScript : "";
var o2 = e2.reactiveElementPolyfillSupport;
var n2 = { toAttribute(t3, i4) {
  switch (i4) {
    case Boolean:
      t3 = t3 ? h : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i4) {
  let s5 = t3;
  switch (i4) {
    case Boolean:
      s5 = null !== t3;
      break;
    case Number:
      s5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t3);
      } catch (t4) {
        s5 = null;
      }
  }
  return s5;
} };
var a = (t3, i4) => i4 !== t3 && (i4 == i4 || t3 == t3);
var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
var d = "finalized";
var u = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t3) {
    var i4;
    this.finalize(), (null !== (i4 = this.h) && void 0 !== i4 ? i4 : this.h = []).push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i4, s5) => {
      const e6 = this._$Ep(s5, i4);
      void 0 !== e6 && (this._$Ev.set(e6, s5), t3.push(e6));
    }), t3;
  }
  static createProperty(t3, i4 = l) {
    if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t3, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e6 = this.getPropertyDescriptor(t3, s5, i4);
      void 0 !== e6 && Object.defineProperty(this.prototype, t3, e6);
    }
  }
  static getPropertyDescriptor(t3, i4, s5) {
    return { get() {
      return this[i4];
    }, set(e6) {
      const r4 = this[t3];
      this[i4] = e6, this.requestUpdate(t3, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || l;
  }
  static finalize() {
    if (this.hasOwnProperty(d))
      return false;
    this[d] = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i4 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s5 of i4)
        this.createProperty(s5, t4[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i4) {
    const s5 = [];
    if (Array.isArray(i4)) {
      const e6 = new Set(i4.flat(1 / 0).reverse());
      for (const i5 of e6)
        s5.unshift(c(i5));
    } else
      void 0 !== i4 && s5.push(c(i4));
    return s5;
  }
  static _$Ep(t3, i4) {
    const s5 = i4.attribute;
    return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  _$Eu() {
    var t3;
    this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i4, s5;
    (null !== (i4 = this._$ES) && void 0 !== i4 ? i4 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
  }
  removeController(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.splice(this._$ES.indexOf(t3) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t3, i4) => {
      this.hasOwnProperty(i4) && (this._$Ei.set(i4, this[i4]), delete this[i4]);
    });
  }
  createRenderRoot() {
    var t3;
    const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t3;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostConnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostDisconnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  attributeChangedCallback(t3, i4, s5) {
    this._$AK(t3, s5);
  }
  _$EO(t3, i4, s5 = l) {
    var e6;
    const r4 = this.constructor._$Ep(t3, s5);
    if (void 0 !== r4 && true === s5.reflect) {
      const h3 = (void 0 !== (null === (e6 = s5.converter) || void 0 === e6 ? void 0 : e6.toAttribute) ? s5.converter : n2).toAttribute(i4, s5.type);
      this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
    }
  }
  _$AK(t3, i4) {
    var s5;
    const e6 = this.constructor, r4 = e6._$Ev.get(t3);
    if (void 0 !== r4 && this._$El !== r4) {
      const t4 = e6.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n2;
      this._$El = r4, this[r4] = h3.fromAttribute(i4, t4.type), this._$El = null;
    }
  }
  requestUpdate(t3, i4, s5) {
    let e6 = true;
    void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i4) ? (this._$AL.has(t3) || this._$AL.set(t3, i4), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e6 = false), !this.isUpdatePending && e6 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i5) => this[i5] = t4), this._$Ei = void 0);
    let i4 = false;
    const s5 = this._$AL;
    try {
      i4 = this.shouldUpdate(s5), i4 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i5;
        return null === (i5 = t4.hostUpdate) || void 0 === i5 ? void 0 : i5.call(t4);
      }), this.update(s5)) : this._$Ek();
    } catch (t4) {
      throw i4 = false, this._$Ek(), t4;
    }
    i4 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.forEach((t4) => {
      var i5;
      return null === (i5 = t4.hostUpdated) || void 0 === i5 ? void 0 : i5.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    void 0 !== this._$EC && (this._$EC.forEach((t4, i4) => this._$EO(i4, this[i4], t4)), this._$EC = void 0), this._$Ek();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = window;
var s3 = i2.trustedTypes;
var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = document;
var u2 = () => r3.createComment("");
var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var c2 = Array.isArray;
var v = (t3) => c2(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t3) => (i4, ...s5) => ({ _$litType$: t3, strings: i4, values: s5 });
var x = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t3, i4) {
  if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i4) : i4;
}
var V = (t3, i4) => {
  const s5 = t3.length - 1, e6 = [];
  let l5, r4 = 2 === i4 ? "<svg>" : "", u3 = f;
  for (let i5 = 0; i5 < s5; i5++) {
    const s6 = t3[i5];
    let d3, c3, v2 = -1, a3 = 0;
    for (; a3 < s6.length && (u3.lastIndex = a3, c3 = u3.exec(s6), null !== c3); )
      a3 = u3.lastIndex, u3 === f ? "!--" === c3[1] ? u3 = _ : void 0 !== c3[1] ? u3 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l5 = RegExp("</" + c3[2], "g")), u3 = p) : void 0 !== c3[3] && (u3 = p) : u3 === p ? ">" === c3[0] ? (u3 = null != l5 ? l5 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u3.lastIndex - c3[2].length, d3 = c3[1], u3 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l5 = void 0);
    const w2 = u3 === p && t3[i5 + 1].startsWith("/>") ? " " : "";
    r4 += u3 === f ? s6 + h2 : v2 >= 0 ? (e6.push(d3), s6.slice(0, v2) + o3 + s6.slice(v2) + n3 + w2) : s6 + n3 + (-2 === v2 ? (e6.push(void 0), i5) : w2);
  }
  return [P(t3, r4 + (t3[s5] || "<?>") + (2 === i4 ? "</svg>" : "")), e6];
};
var N = class {
  constructor({ strings: t3, _$litType$: i4 }, e6) {
    let h3;
    this.parts = [];
    let r4 = 0, d3 = 0;
    const c3 = t3.length - 1, v2 = this.parts, [a3, f2] = V(t3, i4);
    if (this.el = N.createElement(a3, e6), C.currentNode = this.el.content, 2 === i4) {
      const t4 = this.el.content, i5 = t4.firstChild;
      i5.remove(), t4.append(...i5.childNodes);
    }
    for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
      if (1 === h3.nodeType) {
        if (h3.hasAttributes()) {
          const t4 = [];
          for (const i5 of h3.getAttributeNames())
            if (i5.endsWith(o3) || i5.startsWith(n3)) {
              const s5 = f2[d3++];
              if (t4.push(i5), void 0 !== s5) {
                const t5 = h3.getAttribute(s5.toLowerCase() + o3).split(n3), i6 = /([.?@])?(.*)/.exec(s5);
                v2.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: "." === i6[1] ? H : "?" === i6[1] ? L : "@" === i6[1] ? z : k });
              } else
                v2.push({ type: 6, index: r4 });
            }
          for (const i5 of t4)
            h3.removeAttribute(i5);
        }
        if (y.test(h3.tagName)) {
          const t4 = h3.textContent.split(n3), i5 = t4.length - 1;
          if (i5 > 0) {
            h3.textContent = s3 ? s3.emptyScript : "";
            for (let s5 = 0; s5 < i5; s5++)
              h3.append(t4[s5], u2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
            h3.append(t4[i5], u2());
          }
        }
      } else if (8 === h3.nodeType)
        if (h3.data === l2)
          v2.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = h3.data.indexOf(n3, t4 + 1)); )
            v2.push({ type: 7, index: r4 }), t4 += n3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i4) {
    const s5 = r3.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function S2(t3, i4, s5 = t3, e6) {
  var o6, n7, l5, h3;
  if (i4 === T)
    return i4;
  let r4 = void 0 !== e6 ? null === (o6 = s5._$Co) || void 0 === o6 ? void 0 : o6[e6] : s5._$Cl;
  const u3 = d2(i4) ? void 0 : i4._$litDirective$;
  return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n7 = null == r4 ? void 0 : r4._$AO) || void 0 === n7 || n7.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t3), r4._$AT(t3, s5, e6)), void 0 !== e6 ? (null !== (l5 = (h3 = s5)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e6] = r4 : s5._$Cl = r4), void 0 !== r4 && (i4 = S2(t3, r4._$AS(t3, i4.values), r4, e6)), i4;
}
var M = class {
  constructor(t3, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    var i4;
    const { el: { content: s5 }, parts: e6 } = this._$AD, o6 = (null !== (i4 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i4 ? i4 : r3).importNode(s5, true);
    C.currentNode = o6;
    let n7 = C.nextNode(), l5 = 0, h3 = 0, u3 = e6[0];
    for (; void 0 !== u3; ) {
      if (l5 === u3.index) {
        let i5;
        2 === u3.type ? i5 = new R(n7, n7.nextSibling, this, t3) : 1 === u3.type ? i5 = new u3.ctor(n7, u3.name, u3.strings, this, t3) : 6 === u3.type && (i5 = new Z(n7, this, t3)), this._$AV.push(i5), u3 = e6[++h3];
      }
      l5 !== (null == u3 ? void 0 : u3.index) && (n7 = C.nextNode(), l5++);
    }
    return C.currentNode = r3, o6;
  }
  v(t3) {
    let i4 = 0;
    for (const s5 of this._$AV)
      void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i4), i4 += s5.strings.length - 2) : s5._$AI(t3[i4])), i4++;
  }
};
var R = class {
  constructor(t3, i4, s5, e6) {
    var o6;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i4, this._$AM = s5, this.options = e6, this._$Cp = null === (o6 = null == e6 ? void 0 : e6.isConnected) || void 0 === o6 || o6;
  }
  get _$AU() {
    var t3, i4;
    return null !== (i4 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i4 ? i4 : this._$Cp;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === (null == t3 ? void 0 : t3.nodeType) && (t3 = i4.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i4 = this) {
    t3 = S2(this, t3, i4), d2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.g(t3) : void 0 !== t3.nodeType ? this.$(t3) : v(t3) ? this.T(t3) : this._(t3);
  }
  k(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  $(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
  }
  _(t3) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
  }
  g(t3) {
    var i4;
    const { values: s5, _$litType$: e6 } = t3, o6 = "number" == typeof e6 ? this._$AC(t3) : (void 0 === e6.el && (e6.el = N.createElement(P(e6.h, e6.h[0]), this.options)), e6);
    if ((null === (i4 = this._$AH) || void 0 === i4 ? void 0 : i4._$AD) === o6)
      this._$AH.v(s5);
    else {
      const t4 = new M(o6, this), i5 = t4.u(this.options);
      t4.v(s5), this.$(i5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i4 = E.get(t3.strings);
    return void 0 === i4 && E.set(t3.strings, i4 = new N(t3)), i4;
  }
  T(t3) {
    c2(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s5, e6 = 0;
    for (const o6 of t3)
      e6 === i4.length ? i4.push(s5 = new R(this.k(u2()), this.k(u2()), this, this.options)) : s5 = i4[e6], s5._$AI(o6), e6++;
    e6 < i4.length && (this._$AR(s5 && s5._$AB.nextSibling, e6), i4.length = e6);
  }
  _$AR(t3 = this._$AA.nextSibling, i4) {
    var s5;
    for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i4); t3 && t3 !== this._$AB; ) {
      const i5 = t3.nextSibling;
      t3.remove(), t3 = i5;
    }
  }
  setConnected(t3) {
    var i4;
    void 0 === this._$AM && (this._$Cp = t3, null === (i4 = this._$AP) || void 0 === i4 || i4.call(this, t3));
  }
};
var k = class {
  constructor(t3, i4, s5, e6, o6) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i4, this._$AM = e6, this.options = o6, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i4 = this, s5, e6) {
    const o6 = this.strings;
    let n7 = false;
    if (void 0 === o6)
      t3 = S2(this, t3, i4, 0), n7 = !d2(t3) || t3 !== this._$AH && t3 !== T, n7 && (this._$AH = t3);
    else {
      const e7 = t3;
      let l5, h3;
      for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
        h3 = S2(this, e7[s5 + l5], i4, l5), h3 === T && (h3 = this._$AH[l5]), n7 || (n7 = !d2(h3) || h3 !== this._$AH[l5]), h3 === A ? t3 = A : t3 !== A && (t3 += (null != h3 ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
    }
    n7 && !e6 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var I = s3 ? s3.emptyScript : "";
var L = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    t3 && t3 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends k {
  constructor(t3, i4, s5, e6, o6) {
    super(t3, i4, s5, e6, o6), this.type = 5;
  }
  _$AI(t3, i4 = this) {
    var s5;
    if ((t3 = null !== (s5 = S2(this, t3, i4, 0)) && void 0 !== s5 ? s5 : A) === T)
      return;
    const e6 = this._$AH, o6 = t3 === A && e6 !== A || t3.capture !== e6.capture || t3.once !== e6.once || t3.passive !== e6.passive, n7 = t3 !== A && (e6 === A || o6);
    o6 && this.element.removeEventListener(this.name, this, e6), n7 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i4, s5;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i4 = this.options) || void 0 === i4 ? void 0 : i4.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i4, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    S2(this, t3);
  }
};
var B = i2.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var D = (t3, i4, s5) => {
  var e6, o6;
  const n7 = null !== (e6 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e6 ? e6 : i4;
  let l5 = n7._$litPart$;
  if (void 0 === l5) {
    const t4 = null !== (o6 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o6 ? o6 : null;
    n7._$litPart$ = l5 = new R(i4.insertBefore(u2(), t4), t4, void 0, null != s5 ? s5 : {});
  }
  return l5._$AI(t3), l5;
};

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends u {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t3, e6;
    const i4 = super.createRenderRoot();
    return null !== (t3 = (e6 = this.renderOptions).renderBefore) && void 0 !== t3 || (e6.renderBefore = i4.firstChild), i4;
  }
  update(t3) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
  }
  render() {
    return T;
  }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({ LitElement: s4 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

// node_modules/@lit/reactive-element/decorators/property.js
var i3 = (i4, e6) => "method" === e6.kind && e6.descriptor && !("value" in e6.descriptor) ? { ...e6, finisher(n7) {
  n7.createProperty(e6.key, i4);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
  "function" == typeof e6.initializer && (this[e6.key] = e6.initializer.call(this));
}, finisher(n7) {
  n7.createProperty(e6.key, i4);
} };
var e4 = (i4, e6, n7) => {
  e6.constructor.createProperty(n7, i4);
};
function n5(n7) {
  return (t3, o6) => void 0 !== o6 ? e4(n7, t3, o6) : i3(n7, t3);
}

// node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n6;
var e5 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o6, n7) => o6.assignedElements(n7) : (o6, n7) => o6.assignedNodes(n7).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

// node_modules/safevalues/index.mjs
var import_resource_url_builders = __toESM(require_resource_url_builders(), 1);

// node_modules/safevalues/dom/index.mjs
var safeAnchorEl = __toESM(require_anchor(), 1);
var safeAreaEl = __toESM(require_area(), 1);
var safeBaseEl = __toESM(require_base(), 1);
var safeButtonEl = __toESM(require_button(), 1);
var safeElement = __toESM(require_element(), 1);
var safeEmbedEl = __toESM(require_embed(), 1);
var safeFormEl = __toESM(require_form(), 1);
var safeIframeEl = __toESM(require_iframe(), 1);
var safeInputEl = __toESM(require_input(), 1);
var safeLinkEl = __toESM(require_link(), 1);
var safeObjectEl = __toESM(require_object(), 1);
var safeScriptEl = __toESM(require_script(), 1);
var safeStyleEl = __toESM(require_style(), 1);
var safeSvgUseEl = __toESM(require_svg_use(), 1);
var safeDocument = __toESM(require_document(), 1);
var safeDomParser = __toESM(require_dom_parser(), 1);
var safeGlobal = __toESM(require_global(), 1);
var safeLocation = __toESM(require_location(), 1);
var safeRange = __toESM(require_range(), 1);
var safeServiceWorkerContainer = __toESM(require_service_worker_container(), 1);
var safeUrl = __toESM(require_url(), 1);
var safeWindow = __toESM(require_window(), 1);
var safeWorker = __toESM(require_worker(), 1);

// node_modules/@google-web-components/google-chart/loader.js
var loaderPromise = new Promise((resolve, reject) => {
  if (typeof google !== "undefined" && google.charts && typeof google.charts.load === "function") {
    resolve();
  } else {
    let loaderScript = document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');
    if (!loaderScript) {
      loaderScript = document.createElement("script");
      safeScriptEl.setSrc(loaderScript, import_resource_url_builders.trustedResourceUrl`https://www.gstatic.com/charts/loader.js`);
      document.head.appendChild(loaderScript);
    }
    loaderScript.addEventListener("load", resolve);
    loaderScript.addEventListener("error", reject);
  }
});
async function load(settings = {}) {
  await loaderPromise;
  const { version = "current", packages = ["corechart"], language = document.documentElement.lang || "en", mapsApiKey } = settings;
  return google.charts.load(version, {
    "packages": packages,
    "language": language,
    "mapsApiKey": mapsApiKey
  });
}
async function dataTable(data) {
  await load();
  if (data == null) {
    return new google.visualization.DataTable();
  } else if (data.getNumberOfRows) {
    return data;
  } else if (data.cols) {
    return new google.visualization.DataTable(data);
  } else if (data.length > 0) {
    return google.visualization.arrayToDataTable(data);
  } else if (data.length === 0) {
    throw new Error("Data was empty.");
  }
  throw new Error("Data format was not recognized.");
}
async function createChartWrapper(container) {
  await load();
  return new google.visualization.ChartWrapper({ "container": container });
}

// node_modules/@google-web-components/google-chart/google-chart.js
var __decorate = function(decorators, target, key, desc) {
  var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d3 = decorators[i4])
        r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
  return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var DEFAULT_EVENTS = ["ready", "select"];
var CHART_TYPES = {
  "area": "AreaChart",
  "bar": "BarChart",
  "md-bar": "google.charts.Bar",
  "bubble": "BubbleChart",
  "calendar": "Calendar",
  "candlestick": "CandlestickChart",
  "column": "ColumnChart",
  "combo": "ComboChart",
  "gantt": "Gantt",
  "gauge": "Gauge",
  "geo": "GeoChart",
  "histogram": "Histogram",
  "line": "LineChart",
  "md-line": "google.charts.Line",
  "org": "OrgChart",
  "pie": "PieChart",
  "sankey": "Sankey",
  "scatter": "ScatterChart",
  "md-scatter": "google.charts.Scatter",
  "stepped-area": "SteppedAreaChart",
  "table": "Table",
  "timeline": "Timeline",
  "treemap": "TreeMap",
  "wordtree": "WordTree"
};
var GoogleChart = class extends s4 {
  constructor() {
    super(...arguments);
    this.type = "column";
    this.events = [];
    this.options = void 0;
    this.cols = void 0;
    this.rows = void 0;
    this.data = void 0;
    this.view = void 0;
    this.selection = void 0;
    this.drawn = false;
    this._data = void 0;
    this.chartWrapper = null;
    this.redrawTimeoutId = void 0;
  }
  render() {
    return x`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `;
  }
  firstUpdated() {
    createChartWrapper(this.shadowRoot.getElementById("chartdiv")).then((chartWrapper) => {
      this.chartWrapper = chartWrapper;
      this.typeChanged();
      google.visualization.events.addListener(chartWrapper, "ready", () => {
        this.drawn = true;
        if (this.selection) {
          this.selectionChanged();
        }
      });
      google.visualization.events.addListener(chartWrapper, "select", () => {
        this.selection = chartWrapper.getChart().getSelection();
      });
      this.propagateEvents(DEFAULT_EVENTS, chartWrapper);
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("type"))
      this.typeChanged();
    if (changedProperties.has("rows") || changedProperties.has("cols")) {
      this.rowsOrColumnsChanged();
    }
    if (changedProperties.has("data"))
      this.dataChanged();
    if (changedProperties.has("view"))
      this.viewChanged();
    if (changedProperties.has("_data") || changedProperties.has("options"))
      this.redraw();
    if (changedProperties.has("selection"))
      this.selectionChanged();
  }
  typeChanged() {
    if (this.chartWrapper == null)
      return;
    this.chartWrapper.setChartType(CHART_TYPES[this.type] || this.type);
    const lastChart = this.chartWrapper.getChart();
    google.visualization.events.addOneTimeListener(this.chartWrapper, "ready", () => {
      const chart = this.chartWrapper.getChart();
      if (chart !== lastChart) {
        this.propagateEvents(this.events.filter((eventName) => !DEFAULT_EVENTS.includes(eventName)), chart);
      }
      const stylesDiv = this.shadowRoot.getElementById("styles");
      if (!stylesDiv.children.length) {
        this.localizeGlobalStylesheets(stylesDiv);
      }
    });
    this.redraw();
  }
  propagateEvents(events, eventTarget) {
    for (const eventName of events) {
      google.visualization.events.addListener(eventTarget, eventName, (event) => {
        this.dispatchEvent(new CustomEvent(`google-chart-${eventName}`, {
          bubbles: true,
          composed: true,
          detail: {
            chart: this.chartWrapper.getChart(),
            data: event
          }
        }));
      });
    }
  }
  selectionChanged() {
    if (this.chartWrapper == null)
      return;
    const chart = this.chartWrapper.getChart();
    if (chart == null)
      return;
    if (chart.setSelection) {
      if (this.type === "timeline") {
        const oldSelection = JSON.stringify(chart.getSelection());
        const newSelection = JSON.stringify(this.selection);
        if (newSelection === oldSelection)
          return;
      }
      chart.setSelection(this.selection);
    }
  }
  redraw() {
    if (this.chartWrapper == null || this._data == null)
      return;
    this.chartWrapper.setDataTable(this._data);
    this.chartWrapper.setOptions(this.options || {});
    this.drawn = false;
    if (this.redrawTimeoutId !== void 0)
      clearTimeout(this.redrawTimeoutId);
    this.redrawTimeoutId = window.setTimeout(() => {
      this.chartWrapper.draw();
    }, 5);
  }
  get imageURI() {
    if (this.chartWrapper == null)
      return null;
    const chart = this.chartWrapper.getChart();
    return chart && chart.getImageURI();
  }
  viewChanged() {
    if (!this.view)
      return;
    this._data = this.view;
  }
  async rowsOrColumnsChanged() {
    const { rows, cols } = this;
    if (!rows || !cols)
      return;
    try {
      const dt = await dataTable({ cols });
      dt.addRows(rows);
      this._data = dt;
    } catch (reason) {
      this.shadowRoot.getElementById("chartdiv").textContent = String(reason);
    }
  }
  dataChanged() {
    let data = this.data;
    let dataPromise;
    if (!data) {
      return;
    }
    let isString = false;
    try {
      data = JSON.parse(data);
    } catch (e6) {
      isString = typeof data === "string" || data instanceof String;
    }
    if (isString) {
      dataPromise = fetch(data).then((response) => response.json());
    } else {
      dataPromise = Promise.resolve(data);
    }
    dataPromise.then(dataTable).then((data2) => {
      this._data = data2;
    });
  }
  localizeGlobalStylesheets(stylesDiv) {
    const stylesheets = Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));
    for (const stylesheet of stylesheets) {
      const clonedStylesheet = document.createElement("link");
      clonedStylesheet.setAttribute("rel", "stylesheet");
      clonedStylesheet.setAttribute("type", "text/css");
      clonedStylesheet.setAttribute("href", stylesheet.getAttribute("href"));
      stylesDiv.appendChild(clonedStylesheet);
    }
  }
};
GoogleChart.styles = i`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `;
__decorate([
  n5({ type: String, reflect: true })
], GoogleChart.prototype, "type", void 0);
__decorate([
  n5({ type: Array })
], GoogleChart.prototype, "events", void 0);
__decorate([
  n5({ type: Object, hasChanged: () => true })
], GoogleChart.prototype, "options", void 0);
__decorate([
  n5({ type: Array })
], GoogleChart.prototype, "cols", void 0);
__decorate([
  n5({ type: Array })
], GoogleChart.prototype, "rows", void 0);
__decorate([
  n5({ type: String })
], GoogleChart.prototype, "data", void 0);
__decorate([
  n5({ type: Object })
], GoogleChart.prototype, "view", void 0);
__decorate([
  n5({ type: Array })
], GoogleChart.prototype, "selection", void 0);
__decorate([
  n5({ type: Object })
], GoogleChart.prototype, "_data", void 0);
customElements.define("google-chart", GoogleChart);

// resources/js/components/filament-google-charts-widgets.js
var filament_google_charts_widgets_default = (Alpine) => {
  Alpine.data("googleChart", ({ type, options, cachedData }) => ({
    chart: null,
    init: function() {
      let chart = this.initChart();
      this.$wire.on("updateChart", async ({ data }) => {
        chart.data = data;
      });
    },
    initChart: function(data = null) {
      this.chart = this.$refs.googleChart;
      this.chart.type = type;
      this.chart.options = options ?? {};
      dataTable(data ?? cachedData).then((dataTable2) => {
        this.chart.data = dataTable2;
      });
      return this.chart;
    }
  }));
};

// resources/js/index.js
document.addEventListener("alpine:init", () => {
  window.Alpine.plugin(filament_google_charts_widgets_default);
});
/**
 * @license
 * Copyright 2014-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
