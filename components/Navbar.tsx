import Head from "next/head";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "red",
          boxShadow: 1,
          borderRadius: 2,

          maxWidth: 1348,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 8 }}
        >
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "red",
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
              bgcolor: "yellow",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>3</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "orange",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>4</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "red",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>5</h1>
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
            <h1>6</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "yellow",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>7</h1>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              bgcolor: "orange",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <h1>8</h1>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
