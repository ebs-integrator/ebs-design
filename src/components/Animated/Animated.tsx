import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';

export interface AnimatedProps
  extends Omit<Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'aria-hidden'>, 'onAnimationStart'>, 'onAnimationEnd'> {
  startFrom?: string | number;
  debounce?: number;
  duration?: number;
  loading?: boolean;
  disabled?: boolean;

  // lots of conflicts from Animated's types
  children: any;
}

export const Animated = ({ startFrom = '0%', debounce = 1, duration = 500, className, ...props }: AnimatedProps) => {
  const [loading, setLoading] = React.useState(true);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!props.loading) {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => setLoading(false), debounce);
    }
  }, [props.loading, debounce]);

  if (props.disabled) {
    return props.children;
  }

  return (
    <AnimateHeight {...props} duration={duration} height={loading ? startFrom : 'auto'} className={cn(className)}>
      {props.children}
    </AnimateHeight>
  );
};
