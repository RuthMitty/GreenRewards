import cigarro from "../../assets/images/cigarro.jpg";
import basura from "../../assets/images/basura.jpg";
import botella from "../../assets/images/botella.jpg";
import tupper from "../../assets/images/tupper.png";
import bus from "../../assets/images/bus.jpg";

const Tareas = [
    {
        id: '1',
        titulo: 'Recoger colillas de cigarro',
        descripcion: 'Recoger colillas de cigarro y colocarlas en los lugares asignados para desecharlas',
        recompensa: 10,
        img: cigarro
    },
    {
        id: '2',
        titulo: 'Recolectar basura',
        descripcion: 'Recolecta 3 items de basura en tu escuela',
        recompensa: 3,
        img: basura
    },
    {
        id: '3',
        titulo: 'Rellenar botella de agua en el filtro',
        descripcion: 'Reusar una botella para tomar agua, rellenarla en el filtro del edificio de salones A',
        recompensa: 5,
        img: botella
    },
    {
        id: '4',
        titulo: 'Recoger colillas de cigarro',
        descripcion: 'Recoger colillas de cigarro y colocarlas en los lugares asignados para desecharlas',
        recompensa: 10,
        img: cigarro
    },
    {
        id: '5',
        titulo: 'Usar contenedor en el Comal++',
        descripcion: 'Llevar tu propio tupper al comal al pedir comida para llevar',
        recompensa: 5,
        img: tupper
    },
    {
        id: '6',
        titulo: 'Usar contenedor en el Comal++',
        descripcion: 'Llevar tu propio tupper al comal al pedir comida para llevar',
        recompensa: 5,
        img: tupper
    },
    {
        id: '7',
        titulo: 'Usar transporte público',
        descripcion: 'Usar transporte publico para llegar a la facultad',
        recompensa: 0.5,
        img: bus
    }

];

export default Tareas;

export const TareasUsuario = [
    {
        id: 1,
        imagenes: '',
        comentario: 'Había un par de colillas en el coliseo y las puse en el bote de basura'
    },
    {
        id: 6,
        imagenes: '',
        comentario: 'Había un par de colillas en el coliseo y las puse en el bote de basura'
    }

]
