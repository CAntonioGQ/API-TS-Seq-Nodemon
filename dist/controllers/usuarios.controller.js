"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id: id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body: body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body: body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id: id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map