import { Request, Response } from 'express'
import { CategoryRepository } from './category.repository'

export class CategoryController {
    private repository;

    constructor() {
        this.repository = new CategoryRepository
    }

    public getAllCategory = async (req: Request, res: Response) => {
        try {
            const category = await this.repository.find(5, 4)
            return res.status(200).json(category)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    public getCategoryById = async (req: Request, res: Response) => {
        const id: String = req.params.id
        try {
            const category = await this.repository.findById(id)
            if (category) {
                return res.status(200).json(category)
            }
            return res.status(404).json({ msg: 'Category Not Found' })
        } catch (error) {
            return res.status(400).json({ msg: error })
        }
    }

    public createCategory = async (req: Request, res: Response) => {
        try {
            const category = await this.repository.save(req.body);
            return res.status(201).json(category);
        } catch (error) {
            return res.status(400).json({ msg: error })
        }
    }

    public updateCategory = async (req: Request, res: Response) => {
        try {
            const id: String = req.params.id
            const category = await this.repository.update(id, req.body)
            return res.status(200).json(category)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    public deleteCategory = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const isExist = await this.repository.findById(id);

            if (isExist) {
                const category = await this.repository.delete(id)
                return res.status(204).json({msg:'Category has been deleted'});
            }
            return res.status(404).json({errors: {msg:"Category Not Found"}})

        } catch (error) {
            return res.status(400).json(error)
        }
    }
}