import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var r =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-weight: 100 1000;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.n-button {\n  height: 4rem;\n  cursor: pointer;\n  box-shadow: none;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.8rem;\n  text-align: center;\n  outline: none;\n  border: 0;\n  letter-spacing: 0rem;\n  background: none;\n  text-decoration: none;\n  box-sizing: border-box;\n  letter-spacing: 0.05rem;\n  padding: 0rem 3rem;\n  border-radius: 0.3rem;\n  color: #ffffff;\n}\n.n-button:disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.n-button:focus {\n  text-decoration: none;\n  text-underline-position: under;\n}\n.n-button:active {\n  background-color: var(--ColorPrimary20, #e8e8fc);\n}\n.n-button:after {\n  transition: none !important;\n}\n.n-button-primary:disabled {\n  background-color: var(--ColorFeedbackError20, #fee6ea);\n  color: var(--ColorFeedbackError80, #660014);\n}\n.n-button-secondary:disabled {\n  border-color: var(--ColorSecondaryGrey80, rgba(0, 0, 0, 0.65));\n  color: var(--ColorFeedbackError80, #660014);\n}\n.n-button-tertiary:disabled {\n  color: var(--ColorFeedbackError80, #660014);\n}\n\n.n-button-primary {\n  background-color: var(--ColorPrimary50, #3535f3);\n}\n.n-button-primary:hover:not([disabled]) {\n  background-color: var(--ColorPrimary60, #000093);\n}\n.n-button-primary:active:not([disabled]) {\n  color: var(--ColorPrimary30, #9999ff);\n}\n.n-button-primary-positive {\n  background-color: var(--ColorFeedbackSuccess20, #e9f7e9);\n  color: var(--ColorFeedbackSuccess80, #135610);\n}\n.n-button-primary-positive:hover:not([disabled]) {\n  background-color: var(--ColorFeedbackSuccess50, #25ab21);\n  color: var(--ColorWhite, #ffffff);\n}\n.n-button-primary-positive:active:not([disabled]) {\n  background-color: var(--ColorFeedbackSuccess80, #135610);\n  color: var(--ColorFeedbackSuccess20, #e9f7e9);\n}\n.n-button-primary-destructive {\n  background-color: var(--ColorFeedbackError20, #fee6ea);\n  color: var(--ColorFeedbackError80, #660014);\n}\n.n-button-primary-destructive:hover:not([disabled]) {\n  background-color: var(--ColorFeedbackError50, #f50031);\n  color: var(--ColorWhite, #ffffff);\n}\n.n-button-primary-destructive:active:not([disabled]) {\n  background-color: var(--ColorFeedbackError80, #660014);\n  color: var(--ColorFeedbackError20, #fee6ea);\n}\n\n.n-button-secondary {\n  color: var(--ColorPrimary60, #000093);\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid var(--ColorSecondaryGrey40, #e0e0e0);\n}\n.n-button-secondary:hover:not([disabled]) {\n  border-color: var(--ColorPrimary60, #000093);\n}\n.n-button-secondary:active:not([disabled]) {\n  border-color: var(--ColorPrimary60, #000093);\n  background-color: var(--ColorPrimary20, #e8e8fc);\n}\n.n-button-secondary-positive {\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--ColorFeedbackSuccess80, #135610);\n  border: 1px solid var(--ColorSecondaryGrey40, #e0e0e0);\n}\n.n-button-secondary-positive:hover:not([disabled]) {\n  background-color: rgba(0, 0, 0, 0);\n  border-color: var(--ColorFeedbackSuccess50, #25ab21);\n}\n.n-button-secondary-positive:active:not([disabled]) {\n  color: var(--ColorFeedbackSuccess80, #135610);\n  background-color: var(--ColorFeedbackSuccess20, #e9f7e9);\n}\n.n-button-secondary-destructive {\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid var(--ColorFeedbackError20, #fee6ea);\n  color: var(--ColorFeedbackError80, #660014);\n}\n.n-button-secondary-destructive:hover:not([disabled]) {\n  background-color: var(--ColorWhite, #ffffff);\n  border-color: var(--ColorFeedbackError50, #f50031);\n}\n.n-button-secondary-destructive:active:not([disabled]) {\n  background-color: var(--ColorFeedbackError20, #fee6ea);\n  color: var(--ColorFeedbackError80, #660014);\n}\n\n.n-button-tertiary {\n  background: transparent;\n  border: none;\n  color: var(--ColorPrimary60, #000093);\n}\n.n-button-tertiary:hover:not([disabled]) {\n  background-color: var(--ColorPrimary20, #e8e8fc);\n}\n.n-button-tertiary:active:not([disabled]) {\n  background-color: var(--ColorPrimary30, #9999ff);\n}\n.n-button-tertiary-positive {\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--ColorFeedbackSuccess80, #135610);\n}\n.n-button-tertiary-positive:hover:not([disabled]) {\n  background-color: var(--ColorFeedbackSuccess20, #e9f7e9);\n}\n.n-button-tertiary-positive:active:not([disabled]) {\n  background-color: var(--ColorFeedbackSuccess80, #135610);\n  color: var(--ColorFeedbackSuccess20, #e9f7e9);\n}\n.n-button-tertiary-destructive {\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--ColorFeedbackError80, #660014);\n}\n.n-button-tertiary-destructive:hover:not([disabled]) {\n  background-color: var(--ColorFeedbackError20, #fee6ea);\n}\n.n-button-tertiary-destructive:active:not([disabled]) {\n  background-color: var(--ColorFeedbackError80, #660014);\n  color: var(--ColorFeedbackError20, #fee6ea);\n}\n\n.hover-state {\n  pointer-events: none;\n}\n\n.btn-notprogress {\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.n-button-rounded:disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.3;\n}\n\n.n-button-rounded {\n  border-radius: 3.4rem;\n  padding: 0rem 3.2rem;\n}\n\n.n-button-large {\n  padding: 1.6rem 2.4rem;\n  height: 5.4rem;\n  font-size: 18px;\n  line-height: 2.5rem;\n  min-width: 5.4rem;\n}\n.n-button-large_only_icon {\n  padding: 1.6rem 0.6rem !important;\n}\n\n.n-button-mid {\n  padding: 1.2rem 1.6rem;\n  height: 4.8rem;\n  font-size: 15px;\n  line-height: 2.5rem;\n  min-width: 4.8rem;\n}\n.n-button-mid_only_icon {\n  padding: 1.2rem 1.2rem !important;\n}\n\n.n-button-small {\n  padding: 0.4rem 1.6rem;\n  height: 3rem;\n  font-size: 12px;\n  line-height: 1.9rem;\n  min-width: 3rem;\n}\n.n-button-small_only_icon {\n  padding: 0.4rem 0.4rem !important;\n}\n\n.n-button-focused {\n  text-decoration: underline !important;\n  text-underline-position: under !important;\n}\n\n.n-button-content {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n}\n\n.n-btn-spinner {\n  text-align: center;\n}\n\n.n-btn-spin {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon,\n.social-icon-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social-icon-right {\n  margin-left: auto;\n}\n\n.icon-padding-left {\n  padding-left: var(--SpacingBase, 1rem);\n}\n\n.icon-padding-right {\n  padding-right: var(--SpacingBase, 1rem);\n}\n\n.n-icon-small {\n  height: 2rem;\n  font-size: 2rem;\n}\n\n.n-icon {\n  height: 2.4rem;\n  font-size: 2.4rem;\n}\n\n.n-icon-large {\n  height: 3rem;\n  font-size: 3rem;\n}\n\n.disable-click {\n  pointer-events: none;\n}\n\n.ripple-anchor {\n  display: inline-block;\n}\n\n.sb-display-grid {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  grid-gap: 1.6rem;\n  padding: 1.6rem;\n}\n\n.n-button-full-width {\n  width: 100%;\n}';
n(r);
export { r as default };
//# sourceMappingURL=Button.scss.js.map
