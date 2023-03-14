import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Collection() {
    const router = useRouter();
    const { keyword, category, price, page } = router.query;
    const [store, setStore] = useState(keyword);
    // console.log("price from query:", price);
    // console.log("category from query:", category);
    // console.log("keyword:", keyword);
    const [pageValue, setPageValue] = useState(0);
    console.log("pageValue Origin:", pageValue);

    useEffect(() => {
        // router.push({
        //     pathname: `/collection`,
        //     query: { keyword: store },
        // });
    }, [pageValue]);

    const [filters, setFilters] = useState({
        keyword: `${keyword}`,
        category: "",
        price: "",
        page: `${pageValue}`,
    });
    // console.log('filters:', filters)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilters({ ...filters, page: pageValue });
        router.push({
            pathname: `/collection`,
            query: filters,
        });
    };

    const handlePagination = (val) => {
        console.log("pageValue Before:", pageValue);
        setPageValue(pageValue + val);
        setFilters({ ...filters, page: pageValue });
        if (filters.category === "") {
            console.log("without category");
            router.push({
                pathname: `/collection`,
                query: { keyword: `${keyword}`, page: pageValue },
            });
        } else {
            console.log("with category");
            router.push({
                pathname: `/collection`,
                query: filters,
            });
        }
        console.log("pageValue After _________________:", pageValue);
    };
    console.log("Outside Block Scope:", pageValue);

    // function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="red" href="/">
            <h1 style={{ color: "red" }}>Home</h1>
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/">
            <h1 style={{ color: "blue" }}>Buy</h1>
        </Link>,
        <Box key="3" color="text.primary">
            <h1 style={{ color: "red" }}>{keyword}</h1>
        </Box>,
    ];

    return (
        <Box>

            {/* <Box> */}
            {/* BreadScrum */}
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            {/* BreadScrum */}
            {/* </Box> */}


            <h1>Hello Collection</h1>
            <h1>Path:- {keyword}</h1>
            <h1>category:- {category}</h1>
            <h1>price:- {price}</h1>
            <h1>page:- {pageValue}</h1>
            <button type="button" onClick={() => router.push("/post/abc")}>
                Click me
            </button>

            {/* filters */}
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <select
                        value={filters.category}
                        onChange={(e) =>
                            setFilters({ ...filters, category: e.target.value })
                        }
                    >
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                    </select>
                </label>
                <label>
                    Price:
                    <select
                        value={filters.price}
                        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                    >
                        <option value="">All</option>
                        <option value="50">Less than $50</option>
                        <option value="100">Less than $100</option>
                        <option value="200">Less than $200</option>
                    </select>
                </label>
                <button type="submit">Apply Filters</button>
            </form>
            {/* filters */}


            <Grid
                container
                margin={"auto"}
                width="1130px"
                // spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 1, sm: 2, md: 3 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={1} key={index}
                        width="366px"
                        height="393px"
                        bgcolor={"red"}
                        ml="10px"
                        mt="10px"

                        // spacing="10px"

                        // m="auto"
                        // mt="10px"
                        display={"flex"}
                        justifyContent="center"
                        alignContent="center"
                    >
                        <h1>xs={index + 1}</h1>
                    </Grid>
                ))}
            </Grid>

            <Button
                onClick={() => {
                    handlePagination(-1);
                }}
            >
                Prev
            </Button>
            <Button>{pageValue}</Button>
            <Button onClick={() => handlePagination(1)}>Next</Button>
        </Box >
    );
}
