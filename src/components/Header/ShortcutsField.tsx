import { Box, IconButton, Tooltip } from "@mui/material"
import useAppContext from "../../hooks/useAppContext"
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"


const ShortcutsField = () => {
    const {darkMode, handleDarkMode} = useAppContext()

    return(
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '2rem',
            transition: '.5s ease-in-out'
        }}
        >
            <Tooltip 
            title={darkMode ? "Light Mode" : "Dark Mode"}
            >
                <IconButton onClick={handleDarkMode}>
                    {darkMode ? <LightModeOutlined/> : <DarkModeOutlined />}
                </IconButton>
            </Tooltip>
        </Box>
    )

}

export default ShortcutsField;