import {forwardRef} from "react";

type Props = React.SVGProps<SVGCircleElement> & {
  fatR?: string;
  fatRef?: React.Ref<SVGCircleElement>;
};

export default forwardRef<SVGCircleElement, Props>((props, ref) => {
  const {className, fatR, fatRef, ...attrs} = props;
  return (
    <>
      <circle ref={ref} className={className} {...attrs}/>
      <circle
        className={className ? className + " fat-fingers" : "fat-fingers"}
        ref={fatRef}
        {...attrs}
        r={fatR ?? attrs.r}/>
    </>
  );
});
