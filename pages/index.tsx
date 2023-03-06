import { Grid, ImageListItem } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import style from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box sx={{ maxWidth: 1348, margin: "auto", bgcolor: "teal" }}>
      <Box
        sx={{
          height: 550,
          maxWidth: 1349,
          m: "-2 0 -2 0",
          bgcolor: "red",
        }}
      >
        1
      </Box>
      <Box
        sx={{
          height: 300,
          maxWidth: 1349,
          margin: "auto",
          marginTop: "15px",
          bgcolor: "yellow",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            height: 300,
            maxWidth: 1349,
            margin: "auto",
            marginTop: "15px",
            bgcolor: "yellow",
          }}
        >
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "orange",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>1</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "teal",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>2</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "blue",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>3</h1>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 300,
          maxWidth: 1349,
          margin: "auto",
          marginTop: "15px",
          bgcolor: "yellow",
        }}
      >
        <Grid
          container
          rowSpacing={"15px"}
          columns={{ xs: 1, sm: 2, md: 2 }}
          sx={{
            height: 310,
            maxWidth: 1349,
            margin: "auto",
            marginTop: "15px",
            bgcolor: "yellow",
          }}
        >
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "orange",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>1</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "teal",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>2</h1>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: 1348,
          height: 271,
          margin: "auto",
          marginTop: "15px",
          bgcolor: "blue",
        }}
      >
        4
      </Box>
      <Box
        sx={{
          maxWidth: 1348,
          height: 600,
          margin: "auto",
          marginTop: "15px",
          bgcolor: "green",
        }}
      >
        5
      </Box>
      <Navbar />
    </Box>
  );
}
