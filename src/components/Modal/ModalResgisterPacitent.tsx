import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grow } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormsResgisterPacient from '../Forms/FormsRegisterPacient';


type PropsModal = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalRegistePacient({open, setOpen}: PropsModal) {
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-record-medical"
            aria-describedby="Pop up de registro de prontuário"
        >
            <Grow in={open} timeout={500}>
                <Box 
                sx={{
                    position: 'absolute',
                    top: window.innerWidth <= 700 ? '.5vh' : '20vh',
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
                            Cadastro de Paciente
                        </Typography>

                        <Button onClick={() => setOpen(false)}
                        sx={{
                            gridColumn: 'span 1',
                            justifySelf: 'end',
                        }}
                        >
                            <HighlightOffIcon/>
                        </Button>
                    </Box>

                    <Box>
                        <FormsResgisterPacient handleClose={handleClose}/>
                    </Box>
                
                </Box>
            </Grow>
            
        </Modal>
        </div>
    );
}