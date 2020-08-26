import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>        
      </>
  );
}

export default App;
