import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function KeyButtons() {
  const [formats, setFormats] = React.useState(() => ['primary', 'foreign']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="primary" aria-label="primary" color = "primary">
            <span title = "Primary Key" className = 'key'>PK</span>
      </ToggleButton>
      <ToggleButton value="foreign" aria-label="foreign" color = "error">
            <span title = "Foreign Key" className = 'key'>FK</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
