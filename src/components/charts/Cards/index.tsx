import { Box, CircularProgress, Typography } from "@mui/material"
import useAppContext from "../../../hooks/useAppContext"

type PropsCard ={
    title: string
    number: string
    loading: boolean,
    isOccupied: boolean
}


export default function Card({title, number, loading, isOccupied}: PropsCard) {
    const {darkMode} = useAppContext()

    return(
        <Box
        sx={{
            bgcolor: isOccupied ?  '#F4B8B8' : '#A8D5BA',
            boxShadow: 'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px',
            borderRadius: '5px',
            py: '1rem',
            px: '1rem',
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            gap: '1rem',
            color: 'black',
            textAlign: 'center',
            width: '10rem',
            height: '4rem',
            transition: '0.3s ease-in-out all',
            ':hover':{
                transform: 'translateY(-5px)',
            }
        }}
        >
            {loading ? (
                <CircularProgress sx={{
                    alignSelf: 'center',
                    justifySelf: 'center'
                }}/>
            ) : (
                <Box key={`item-${Math.random()}`}>
                    <Typography 
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600
                    }}
                    >
                        {title} - {isOccupied ? 'Ocupada' : 'Livre'}
                    </Typography>
                    <Typography 
                    variant="h6" 
                    >
                        {number}
                    </Typography>
                </Box>
            )
            }
            
        </Box>
    )
}