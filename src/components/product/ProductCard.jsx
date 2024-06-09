import React from "react"
import {styled} from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {useProducts} from "../context/ProductContextProvider"

const ExpandMore = styled((props) => {
  const {expand, ...other} = props
  return <IconButton {...other} />
})(({theme, expand}) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function ProductCard({elem}) {
  const [expanded, setExpanded] = React.useState(false)
  const {deleteProduct} = useProducts()
  const navigate = useNavigate()

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{maxWidth: 345, margin: "15px"}}>
      <CardHeader title={elem.title} subheader={elem.genere} />

      <CardMedia
        component="img"
        height="104"
        width="128"
        image={elem.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {elem.tema}
        </Typography>
        <Typography>{elem.age}+</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/details/${elem.id}`)}
        >
          Смотреть
        </Button>
        <Button
          sx={{marginLeft: "10px"}}
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => navigate(`/edit/${elem.id}`)}
        >
          Изменить
        </Button>
        <Button
          sx={{marginLeft: "10px"}}
          variant="contained"
          size="small"
          color="error"
          onClick={() => deleteProduct(elem.id)}
        >
          Удалить
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
