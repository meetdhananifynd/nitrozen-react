import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var t =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.toast-container-main {\n  position: fixed;\n  z-index: var(--ZIndex3, 999);\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n}\n.toast-container-main .toast-wrapper {\n  background-color: #000000;\n  border-radius: 0.4rem;\n  color: #ffffff;\n  width: 25rem;\n  margin-bottom: 1rem;\n  min-height: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.2rem;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n}\n.toast-container-main .toast-wrapper .toast-header {\n  display: flex;\n  flex-direction: row;\n}\n.toast-container-main .toast-wrapper .toast-body {\n  font-size: 1.4rem;\n}\n.toast-container-main .toast-wrapper .center {\n  justify-content: center;\n  align-items: center;\n}\n.toast-container-main .toast-wrapper .left {\n  justify-content: flex-start;\n  align-items: center;\n}\n.toast-container-main .toast-wrapper .right {\n  justify-content: flex-end;\n  align-items: center;\n}\n.toast-container-main .toast-wrapper .space-between {\n  justify-content: space-between;\n  align-items: center;\n}\n.toast-container-main .vertical-line {\n  height: 1.2rem;\n  width: 0.1rem;\n  background-color: #f8f8f8;\n}\n.toast-container-main .cross-btn {\n  border: none;\n  border-top-left-radius: 0rem;\n  border-bottom-left-radius: 0rem;\n  background: none;\n  color: #ffffff;\n  font-weight: 700;\n  outline: none;\n  cursor: pointer;\n  padding-left: 1.6rem;\n  display: flex;\n  align-items: center;\n}\n.toast-container-main .success {\n  background-color: #219653;\n}\n.toast-container-main .danger {\n  background-color: #eb5757;\n}\n.toast-container-main .info {\n  background-color: #605ae0;\n}\n.toast-container-main .warning {\n  background-color: #f5a300;\n}\n\n.top-right {\n  top: 5rem;\n  right: 5rem;\n  transition: transform 0.6s ease-in-out;\n  animation: toast-in-right 0.7s;\n}\n\n.bottom-right {\n  bottom: 5rem;\n  right: 5rem;\n  transition: transform 0.6s ease-in-out;\n  animation: toast-in-right 0.7s;\n}\n\n.top-center {\n  top: 10%;\n  left: 35%;\n  transition: transform 0.6s ease-in-out;\n  animation: toast-in-center 0.7s;\n}\n\n.top-left {\n  top: 5rem;\n  left: 5rem;\n  transition: transform 0.6s ease-in;\n  animation: toast-in-left 0.7s;\n}\n\n.bottom-left {\n  bottom: 5rem;\n  left: 5rem;\n  transition: transform 0.6s ease-in;\n  animation: toast-in-left 0.7s;\n}\n\n@keyframes toast-in-right {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes toast-in-left {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes toast-in-center {\n  from {\n    transform: translateY(50%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.undo-container {\n  display: flex;\n  align-items: center;\n}';
n(t);
export { t as default };
//# sourceMappingURL=Toast.scss.js.map
