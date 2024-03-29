import React from 'react';
import Button from 'components/button';
import { useActions } from 'hooks/use-actions';
import type { Languages } from 'state/types';
import styles from './styles/add-cell.module.sass';

const AddCell = () => {
  const { insertCell } = useActions();

  const handleClick = (language: Languages) => {
    insertCell(language, '');
  };

  return (
    <div className={styles.buttons}>
      <Button
        icon
        style={{ backgroundColor: 'purple' }}
        onClick={() => handleClick('javascript')}
      >
        Javascript
      </Button>
      <Button
        icon
        style={{ backgroundColor: 'rebeccapurple' }}
        onClick={() => handleClick('typescript')}
      >
        Typescript
      </Button>
      <Button
        icon
        style={{ backgroundColor: 'indigo' }}
        onClick={() => handleClick('markdown')}
      >
        Markdown
      </Button>
    </div>
  );
};

export default AddCell;
