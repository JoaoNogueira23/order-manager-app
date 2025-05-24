import { Box, Typography } from "@mui/material";

interface CardProductProps {

}
export default function CardProduct(props : CardProductProps){
    return(
        <Box
        sx={{
            bgcolor:  '#ffffff',
            boxShadow: 'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px',
            borderRadius: '5px',
            py: '1rem',
            px: '1rem',
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            gap: '1rem',
            color: 'black',
            textAlign: 'center',
            width: '10rem',
            height: '10rem',
            transition: '0.3s ease-in-out all',
            ':hover':{
                transform: 'translateY(-5px)',
            }
        }}
        >
            <img src="../../../assets/react.svg" alt="Product Image" />

            <Box>
                <Typography>
                    Product Title
                </Typography>

                <Box>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy    
                </Box>

                <div>
                    R$:5,99
                </div>

            </Box>

        </Box>
    )
}