import { Box, Container, MenuItem, MenuList } from "@mui/material";
import CardProduct from './../../../components/charts/Cards/productCard';

interface ListOfCategoriesProps {

}
export default function ListOfCategories(props : ListOfCategoriesProps){
    return(
        <Container
        sx={{
            padding: 'none'
        }}
        >
            <Box
            >
               Ultimos Pedidos
            </Box>

            <Box>
            <MenuList
            >
                <MenuItem 
                sx={{
                    justifyContent: 'center',
                    font: 'roboto',
                    backgroundColor: '#f0f0f0', // Cor de fundo
                    border: '1px solid #ccc',   // Borda
                    margin: '2px',              // Margem para espaçamento
                    borderRadius: '4px',        // Bordas arredondadas
                    '&:hover': {
                      backgroundColor: '#d0d0d0', // Cor de fundo ao passar o mouse
                    },
                }}
                >
                    Item 1
                </MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
            </MenuList>
            </Box>
        </Container>

    )
}