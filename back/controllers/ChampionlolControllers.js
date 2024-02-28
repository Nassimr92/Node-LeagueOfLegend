import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const handleSuccess = (res, data) => res.json(data);
const handleError = (res, error) => res.json({ error: error.message });
const createChampionlol = async (req, res) => {
    try {
        const championlol = await prisma.champion.create({
            data: {
                name: req.body.name,
                type: req.body.type,
            },
        });
        handleSuccess(res, championlol);
    } catch (error) {
        handleError(res, error);
    }
};
const getChampionslol = async (req, res) => {
    try {
        const championslol = await prisma.champion.findMany();
        handleSuccess(res, championslol);
    } catch (error) {
        handleError(res, error);
    }
};
const getChampionlol = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const championlol = await prisma.champion.findUnique({
            where: {
                id: id,
            },
        });
        handleSuccess(res, championlol);
    } catch (error) {
        handleError(res, error);
    }
};

const updateChampionlol = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const championlol = await prisma.champion.update({
            where: {
                id: id,
            },
            data: {
                name: req.body.name,
                type: req.body.type,
            },
        });
        handleSuccess(res, championlol);
    } catch (error) {
        handleError(res, error);
    }
};

const deleteChampionlol = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const championlol = await prisma.champion.delete({
            where: {
                id: id,
            },
        });
        handleSuccess(res, championlol);
    } catch (error) {
        handleError(res, error);
    }
};

export {getChampionslol, getChampionlol, createChampionlol,  updateChampionlol, deleteChampionlol };
