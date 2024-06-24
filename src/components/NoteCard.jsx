import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

const NoteCard = ({ info, DeleteNote }) => {

  return <Card>
    <CardHeader
      action={
        <IconButton
          onClick={() => DeleteNote(info.id)}
          aria-label="settings">
          <DeleteOutlined />
        </IconButton>
      }
      title={info.title}
      subheader={info.category}
    />
    <p></p>
    <CardContent>
      <Typography variant="body2" color="text.secondary">{info.details}
      </Typography>
    </CardContent>
  </Card>;
};

export default NoteCard;
