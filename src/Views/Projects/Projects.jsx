import style from "./Projects.module.css";
import compuShopImg from "../../assets/projects_assets/compushop.png"
import ez_cook from "../../assets/projects_assets/ez_cook.png"
import CardProjects from "./componets/cardsProjects/CardProjects";
import { useEffect } from "react";



const Projects = ({currentView})=>{




    return(
        <div id={style.Projects}>
            <div id={style.CardsProjectContainer}>
                <label>
                    <CardProjects currentView={currentView} contador={1} link={"https://www.texstore.pe/"} img={"https://res.cloudinary.com/dmv0gnlcu/image/upload/v1682541474/Tex_logos/TEXstore_vqkrlp.png"} name={"Tienda de computación"} details={"Con la experiencia que gané desarollando un e-commerce con un grupo de desarrolladores. Programé yo solo esta aplicación web de alta calidad desde cero, que utiliza tecnologías modernas tanto en el front-end como en el back-end. En el front-end, se utilizó React junto con Redux para gestionar el estado de la aplicación, CSS puro y Material-UI para el diseño y estilo de la interfaz de usuario, Auth0 para implementar la autenticación de Google, y dar seguridad de los usuarios. En cuanto al back-end, se usó Node.js con Express para construir el servidor web, Mongoose para conectar con una base de datos en MongoDB, y Cloudinary para almacenar y gestionar archivos multimedia. El resultado es una aplicación web innovadora y confiable que cumple con los más altos estándares de calidad."}/>
                </label>
                <label>
                    <CardProjects currentView={currentView} contador={2} link={"https://easy-cook.vercel.app/"} img={ez_cook} name={"Una aplicación web para compartir recetas de comida"} details={"Esta es una aplicación web que permite a los usuarios compartir y descubrir recetas de comida. En el front-end, se utilizó React junto con Redux para gestionar el estado de la aplicación, y se implementó un diseño atractivo y fácil de usar con CSS puro y Material-UI. En cuanto al back-end, se utilizó Node.js con Express como servidor web, y Sequelize como ORM para conectarse a una base de datos relacional Postgres y gestionar las operaciones CRUD de manera eficiente y segura."}/>
                </label>
                <label>
                    <CardProjects currentView={currentView} contador={3} link={"https://compu-shop-git-master-ctroubles.vercel.app/"} img={compuShopImg} name={"E-commerce de componentes de PC"} details={"Este proyecto fue desarrollado por mí y un equipo de 7  programadores. Para el front-end, empleamos React y Redux para administrar el estado de la aplicación, modules CSS para el diseño y estilo de la interfaz de usuario, Auth0 para la autenticación y seguridad de los usuarios. Por otro lado, utilizamos Node.js con Express para construir el servidor web, Mongoose para conectarnos con una base de datos en MongoDB y Cloudinary para almacenar y gestionar archivos multimedia en el back-end."}/>
                </label>
            </div>
        </div>
    )
};

export default Projects;