import { useEffect, useState } from "react"
import Table from "../../types/Components/tables"
import Card from "../../components/charts/Cards"
import Page from "../../layouts/Page"
import { Box, Button, Typography } from "@mui/material"
import useAppContext from "../../hooks/useAppContext"
import axios from "axios"
import useSnackBar from "../../hooks/useSnackbar"
import ModalOrders from "../../components/Modal/ModalOrders"

interface PropsHandleClickTable {
    idTable: number;
    tableNumber: string;
}

export default function PageTables(){
    const [loading, setLoading] = useState<boolean>(true)
    const [tables, setTables] = useState<Table[]>([])
    const [openOrders, setOpenOrders] = useState<boolean>(false)
    const [idTable, setIdTable] = useState<number>()
    const [tableNumber, setTableNumber] = useState<string>("")
    const alert = useSnackBar()

    const {apiURL} = useAppContext()

    // handles
    async function RequestTables() {
        const urlRequest = apiURL + '/tables'
        await axios.get(urlRequest)
            .then(response => {
                alert("Requisição realizada com sucesso!")
                setTables(response.data)
            })
            .catch(_err => {
                alert('Erro no carregamentos dos atestados!', {type: 'error'})
            })
            .finally(() => setLoading(false))
    }
    

    useEffect(() => {
        RequestTables()
    }, [])


    const handleClickTable = ({idTable, tableNumber}: PropsHandleClickTable ) => {
        setIdTable(idTable)
        setTableNumber(tableNumber)
        setOpenOrders(true)
    }
    

    return(
        <Page
        sx={{
            paddingTop: '2rem',
            justifyContent: 'flex-start',
            gap: '1rem'
        }}
        >
            <ModalOrders 
            open={openOrders}
            setOpen={setOpenOrders}
            apiURL={apiURL}
            idTable={idTable}
            table_number={tableNumber}
            />

            <Typography
            variant='h3'
            >
                Mesas
            </Typography>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.8rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap', // Permite quebrar linha automaticamente
                width: '100%', // Garante que o container respeite a largura da tela
                maxWidth: '100%', // Evita ultrapassar a largura da tela
                overflow: 'hidden', // Opcional, para evitar overflow
            }}
            >
                {tables.map(table => (
                    <Button
                    onClick={() => handleClickTable({
                        idTable: table.id_table,
                        tableNumber: table.table_number
                    })}
                    >
                        <Card 
                            title={String(table.location)}
                            number={table.table_number}
                            loading={loading}
                            isOccupied={table.IsOccupied}
                        />
                    </Button>
                    
                ))}
            </Box>

            
        </Page>
            
    )
}