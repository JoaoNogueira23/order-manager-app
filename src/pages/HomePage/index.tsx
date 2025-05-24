import { Box, Typography } from "@mui/material";
import Page from "../../layouts/Page";
import ListOfCategories from "./ProductsList";


export default function HomePage() {
    return(
        <Page
        sx={{
            justifyContent: 'start',
            paddingTop: '2rem'
        }}
        >
            <ListOfCategories />
        </Page> 
    )
}