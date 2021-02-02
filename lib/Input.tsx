import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {Player, Utils, usePlayer} from "ractive-player";
const {onClick} = Utils.mobile;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  value: string;
}

import RangeTouch from "rangetouch";

const NON_TEXT_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];

export default React.forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
  const player = usePlayer();
  const innerRef = useRef<HTMLInputElement>();
  const combinedRef = useCombinedRefs(ref, innerRef);

  /* general shenanigans */
  const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (!NON_TEXT_TYPES.includes(props.type)) {
      player.resumeKeyCapture();
    }
    props.onBlur?.(e);
  }, []);
  const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      innerRef.current.blur();
    }
    props.onKeyPress?.(e);
  }, []);
  const onFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (!NON_TEXT_TYPES.includes(props.type)) {
      player.suspendKeyCapture();
    }
    props.onFocus?.(e);
  }, []);

  /* mobile shenanigans */
  const focus = useMemo(
    () => onClick((e: React.SyntheticEvent<HTMLInputElement>) => {
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
      {...{onBlur, onFocus, onKeyPress}}
      onMouseUp={Player.preventCanvasClick}
      {...focus}
      ref={combinedRef}
      value={props.value}
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
