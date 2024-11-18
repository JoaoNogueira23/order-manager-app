import { Paper, PaperProps } from "@mui/material";
import { PropsWithChildren } from "react";



export default function Page({children, sx, ...rest}: PropsWithChildren & PaperProps) {
    return(
        <Paper
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'background.default',
            overflowY: 'auto',
            border: 'none',
            width: '100vw',
            height: 'calc(100vh - 7.2rem)',
            ...sx
        }}
        {...rest}
        >
            {children}
        </Paper>
    )
}