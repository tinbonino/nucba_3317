import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function EjemploMaterial() {

    const arrayDePrueba= [
        {   
            titulo:"Titulo 1",
            descripcion:"Decripcion 1"

        },
        {   
            titulo:"Titulo 2",
            descripcion:"Decripcion 2"

        },
        {   
            titulo:"Titulo 3",
            descripcion:"Decripcion 3"

        }
    ]
  return (
    <div>
        {
            arrayDePrueba.map((objeto)=>{
            return  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>{objeto.titulo}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {objeto.descripcion}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        })
    }
    </div>
  )
}

export default EjemploMaterial