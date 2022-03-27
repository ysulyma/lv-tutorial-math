import {usePlayer, Utils} from "liqvid";
import RangeTouch from "rangetouch";
import {forwardRef, useCallback, useEffect, useMemo, useRef} from "react";

const {onClick} = Utils.mobile;
const {combineRefs} = Utils.react;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  value: string;
}

const NON_TEXT_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];

export default forwardRef<HTMLInputElement, Props>((props, ref) => {
  const player = usePlayer();
  const innerRef = useRef<HTMLInputElement>();
  const combinedRef = combineRefs(ref, innerRef);

  /* general shenanigans */
  const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      innerRef.current.blur();
    }
    props.onKeyPress?.(e);
  }, []);

  /* mobile shenanigans */
  const focus = useMemo(
    () => onClick<HTMLInputElement>((e) => {
      if (!NON_TEXT_TYPES.includes(props.type)) {
        e.currentTarget.focus();
      }
    }), []);

  useEffect(() => {
    if (props.type === "range")
      new RangeTouch(innerRef.current);
  }, []);

  return (
    <input
      {...props}
      {...{onKeyPress}}
      {...focus}
      ref={combinedRef}
      value={props.value}
    />
  );
});
