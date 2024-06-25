import { DeleteOutlined } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "female") {
        return "1px solid red"
      }
    }
  },
  avatarr: {
    backgroundColor: (note) => {
      if (note.category === "female") {
        return yellow[700]
      }
      if (note.category === "Male") {
        return green[700]
      }
      if (note.category === "test") {
        return red[700]
      }
      return blur[500]
    }
  }
})
const NoteCard = ({ info, DeleteNote }) => {
  const classes = useStyles(info)

  return <Card
    className={classes.test}
  >
    <CardHeader
      avatar={
        <Avatar
          className={classes.avatarr}>
          {info.category[0].toUpperCase()}
        </Avatar>
      }
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
