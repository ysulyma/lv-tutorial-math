import * as React from "react";

type Props = React.SVGProps<SVGCircleElement> & {
  fatR?: number;
  fatRef?: React.Ref<SVGCircleElement>;
};

export default React.forwardRef((props: Props, ref: React.Ref<SVGCircleElement>) => {
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
