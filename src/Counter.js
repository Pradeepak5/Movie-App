import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter({like}) {
  return (
    <div>
      <IconButton>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
    </div>
  );
}

