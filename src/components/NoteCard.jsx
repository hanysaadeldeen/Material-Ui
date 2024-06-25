import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "female") {
        return "1px solid red"
      }
    }
  }
})
const NoteCard = ({ info, DeleteNote }) => {
  const classes = useStyles(info)

  return <Card
    className={classes.test}
  >
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
