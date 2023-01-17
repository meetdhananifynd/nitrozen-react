import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var o =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.nitrozen-dialog-backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: var(--ZIndex3, 999);\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog {\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  background: #ffffff;\n  border: 0.1rem solid var(--SecondaryDisabledColor, #e0e0e0);\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2.5rem;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header,\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer {\n  display: flex;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header {\n  padding: 1rem 2.4rem;\n  line-height: 2.4rem;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n  justify-content: space-between;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header .nitrozen-inline-svg {\n  width: 1.4rem;\n  height: 1.4rem;\n  cursor: pointer;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer {\n  margin: 2.4rem 0 0;\n  justify-content: flex-end;\n  width: 100%;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-negative-button {\n  color: #fa3f4d;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin {\n  width: 100%;\n  margin: 1rem;\n  max-width: 60%;\n  margin-bottom: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin:first-child {\n  margin-left: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin:last-child {\n  margin-right: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body {\n  position: relative;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  text-align: center;\n  color: var(--TypographySecondaryColor, #666666);\n  word-break: break-word;\n  /* scrollbar */\n  /* Track */\n  /* Handle */\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar {\n  width: 0.5rem;\n  background-color: #ffffff;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.4);\n  background-color: #ffffff;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar-thumb {\n  border-radius: 0.25rem;\n  background-color: #6b6b6b;\n}\n@media screen and (max-width: 768px) {\n  .nitrozen-dialog-backdrop .nitrozen-dialog-body {\n    width: 70vw;\n  }\n}\n\n.nitrozen-dialog-fade-enter,\n.nitrozen-dialog-fade-leave-active {\n  opacity: 0;\n}\n\n.nitrozen-dialog-fade-enter-active,\n.nitrozen-dialog-fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n\n.nitrozen-dialog-icon {\n  height: 5rem;\n  width: 5rem;\n}\n\n.nitrozen-dialog-footer-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}';
n(o);
export { o as default };
//# sourceMappingURL=Dialog.scss.js.map
