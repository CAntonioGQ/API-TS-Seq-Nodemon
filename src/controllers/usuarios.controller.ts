import { Request, Response } from 'express';
import Usuario from '../models/usuario';


//GET All Users / Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    
    const usuarios = await Usuario.findAll()
    
    res.json({ usuarios });
};

//GET Users by Primary Key (ID) / GET Usuario por ID
export const getUsuario = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id )
    
    if ( usuario ) {
    
        res.json({ usuario })
        
    } else {
        res.status(404).json({
            msg: 'Usuario no Encontrado, favor de colocar un ID correcto'
        })
    }
};

// POST New User + Validation same nombreCliente  
export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        // Verify if exists a user with the same nombreCliente / Verificar si existe un usuario con el mismo nombreCliente
        const existeNombreCliente = await Usuario.findOne({
            where: {
                nombreCliente: body.nombreCliente
            }
        });

        // If exists a user with the same nombreCliente, return a error / Si ya existe un usuario con el mismo nombreCliente, retornar un mensaje de error
        if (existeNombreCliente) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el mismo nombre: ' + body.nombreCliente
            });
        }

        // Create new User / Crear un nuevo usuario
        const usuario = await Usuario.create(body);

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se pudo crear un nuevo usuario'
        });
    }
};


export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        // Verify if exists a user with the same nombreCliente / Verificar si existe un usuario con el mismo nombreCliente
        const usuario = await Usuario.findByPk( id )
        if( !usuario ){
            return res.status(404).json({
                msg: 'No existe un usuario con el ID: ' + id
            })
        }

        await usuario.update( body )

        res.json( usuario )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se pudo editar un nuevo usuario'
        });
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    // Verify if exists a user with the same nombreCliente / Verificar si existe un usuario con el mismo nombreCliente
    const usuario = await Usuario.findByPk( id )
    if( !usuario ){
        return res.status(404).json({
            msg: 'No existe un usuario con el ID: ' + id
        })
    }

    await usuario.update({ estado: false })

    res.json(usuario);
};
