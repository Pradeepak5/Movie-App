import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function CounterDislike({ dislike }) {
  return (
    <div>
      <IconButton>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
