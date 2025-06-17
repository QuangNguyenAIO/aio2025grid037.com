import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          We are aliased as <b className="font-medium">GRID037</b> at work.
        </li>
        <li>
          We live in <b className="font-medium">Ha Noi, Viet Nam</b>.
        </li>
        <li>
          We believe that we can do anything <b className="font-medium">together</b> city.
        </li>
        <li>
          We care and share our knowledge about AI with <b className="font-medium">everyone.</b>.
        </li>
        <li>
          We want to focus on the field of <b className="font-medium">Computer Vision.</b>.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
