import { Box, Button, Grow, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useSnackBar from "../../hooks/useSnackbar";
import Order from "../../types/Components/orders";


interface ModalOrdersProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    apiURL: string;
    idTable: number | undefined;
    table_number: string;
}
export default function ModalOrders({open, setOpen, apiURL, idTable, table_number} : ModalOrdersProps){
    const [loading, setLoading] = useState<boolean>(false)
    const [order, setOrders] = useState<Order[]>([])
    const handleClose = () => setOpen(false);
    const alert = useSnackBar()

    const requestOrders = useCallback(async () => {
        const urlRequest = apiURL + '/orders/get-orders'
        console.log(idTable)
        if (idTable) {
            await axios.get(urlRequest, {
                params: {
                    id_table: idTable
                }
            })
                .then(response => {
                    alert("Ordens carregadas com sucesso!")
                    setOrders(response.data)
                })
                .catch(_err => {
                    alert('Erro no carregamentos dos atestados!', {type: 'error'})
                })
                .finally(() => setLoading(false))
        }else{
            alert("ID indefinido", {type: "error"})
        }
        
    }, [idTable])

    useEffect(() => {
        requestOrders()
    }, [idTable])

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-record-medical"
            aria-describedby="Pop up de registro de prontuário"
            closeAfterTransition
        >
            <Grow in={open} timeout={500}>
            <Box 
                sx={{
                    position: 'absolute',
                    top: '20vh',
                    left: '18vw',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '50vw', sm: '70vw', md: '60vw' },
                    bgcolor: 'rgb(118,164,201)',
                    border: '2px solid rgb(118,164,201)',
                    boxShadow: 24,
                    p: 4,
                }}
                >
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2"
                        sx={{
                            gridColumn: 'span 2',
                            alignSelf: 'center'
                        }}
                        >
                            Ordens da Mesa {table_number}
                        </Typography>

                        
                    </Box>

                </Box>
            </Grow>
            
        </Modal>
        </div>
    );
}