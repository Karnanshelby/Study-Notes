import Note from "../models/note.model.js";
import { errorHandler } from "../utils/error.js"

export const addNote = async(req,res,next) => {
    const {title, content, tags} = req.body

    const {id} = req.user

    if(!title){
        return next(errorHandler(400, "Title is required"));
    }

    if(!content){
        return next(errorHandler(400, "content is required"));
    }

    try {
        const note = new Note({
            title,
            content,
            tags: tags || [],
            userId: id
        })

        await note.save()

        res.status(201).json({
            success: true,
            message: "Note added successfully",
            note,
        })
    } catch (error) {
        next(error)
    }
}

export const editNote = async(req,res,next) => {
    const note = await Note.findById(req.params.noteId)

    if(!note){
        return next(errorHandler(404, "Note not Found"))
    }

    if(req.user.id !== note.userId){
        return next(errorHandler(401, "You can only update your own note"));
    }

    const {title, content, tags, isPinned} = req.body

    if(!title && !content && !tags){
        return next(errorHandler(404, "No changes Provided"))
    }

    try {
        if(title){
            note.title = title
        }

        if(content){
            note.content = content
        }

        if(tags){
            note.tags = tags
        }

        if(isPinned){
            note.isPinned = isPinned
        }

        await note.save()

        res.status(200).json({
            sucess: true,
            message: "Note Updated Successfully",
            note
        })
    } catch (error) {
        next(error)
    }
}

export const getAllNotes = async(req,res,next) => {

    const userId = req.user.id

    try {
        const notes = await Note.find({userId: userId}).sort({isPinned: -1})

        res.status(200).json({
            sucess:true,
            message: "All notes retrieved sucessfully",
            notes,
        })
    } catch (error) {
        next(error)
    }

}

export const deleteNote = async(req, res, next) => {
    const noteId = req.params.noteId

    const note = await Note.findOne({_id: noteId, userId: req.user.id})

    if(!note){
        return next(errorHandler(404, "Note not Found"))
    }

    try {
        await Note.deleteOne({_id: noteId, userId: req.user.id})

        res.status(200).json({
            sucess: true,
            message: "Note deleted Successfully"
        })
    } catch (error) {
        next(error)       
    }
}

export const updateNotePinned = async(req,res,next) => {
    try {
        const note = await Note.findById(req.params.noteId)

        if(!note){
            return next(errorHandler(404, "Note not found"))
        }

        if(req.user.id !== note.userId){
            return next(errorHandler(401, "You can only update your own note"));
        }

        const {isPinned} = req.body

        note.isPinned = isPinned

        await note.save()

        res.status(200).json({
            sucess:true,
            message:"Note updated successfully",
            note
        })
    } catch (error) {
        next(error)        
    }
}