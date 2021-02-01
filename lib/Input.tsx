import * as React from "react";
import {useCallback, useMemo, useRef, useState} from "react";

import {Player, Utils, usePlayer} from "ractive-player";
const {onClick} = Utils.mobile;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  value: string;
}

export default React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
  const player = usePlayer();
  const [value, setValue] = useState(props.value);
  const innerRef = useRef<HTMLInputElement>();
  const combinedRef = useCombinedRefs(ref, innerRef);

  const onBlur = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    player.resumeKeyCapture();
    props.onChange(e);
  }, []);
  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);
  const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      innerRef.current.blur();
    }
  }, []);

  /* I have no idea why this is necessary... */
  const focus = useMemo(
    () => onClick((e: React.SyntheticEvent<HTMLInputElement>) => {
      if (e.nativeEvent instanceof MouseEvent) {
        Player.preventCanvasClick(e.nativeEvent);
      }
      player.suspendKeyCapture();
      e.currentTarget.focus();
    }), []);

  return (
    <input
      key={props.value}
      {...props}
      {...{onBlur, onChange, onKeyPress}}
      {...focus}
      ref={combinedRef}
      value={value}
    />
  );
});

function useCombinedRefs<T>(...refs: React.Ref<T>[]) {
  const targetRef = useRef();

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T>).current = targetRef.current;
      }
    })
  }, [refs]);

  return targetRef;
}
