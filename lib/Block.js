var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const block = (className) => function (props) {
    const { blockTitle, children } = props, attrs = __rest(props, ["blockTitle", "children"]);
    return (_jsxs("aside", Object.assign({ className: `block ${className}` }, attrs, { children: [_jsxs("header", { children: [blockTitle && (className === "block" ? "" : "("), blockTitle, blockTitle && (className === "block" ? "" : ")")] }), _jsx("div", Object.assign({ className: "content" }, { children: children }))] })));
};
export const Block = block("");
export const Corollary = block("corollary");
export const Definition = block("definition");
export const Example = block("example");
export const Exercise = block("exercise");
export const Lemma = block("lemma");
export const Remark = block("remark");
export const Proof = block("proof");
export const Proposition = block("proposition");
export const Theorem = block("theorem");
