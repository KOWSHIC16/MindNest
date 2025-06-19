import express from 'express';
import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createAt: -1 });              //newest first                            // Simulate fetching notes from a database
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export async function getNoteById(req, res) {
    try {
        const getNote = await Note.findById(req.params.id);                                 // Simulate fetching notes from a database
        if (!getNote) return res.status(404).json({ message: 'Note not found' });
        res.status(200).json(getNote);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export async function createNote(req, res) {
    try {
        const { title, content } = req.body;                                            // Assuming req.body contains the note data
        const note = new Note({ title, content });                                      // Assuming req.body contains the note data
        const saveNote = await note.save();                                           // Simulate saving the note to a database
        res.status(201).json(saveNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;                                                        // Assuming req.body contains the updated note data
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true, });               // Simulate updating the note in a database
        if (!updatedNote) return res.status(404).json({ message: 'Note not found' });

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export async function deleteNote(req, res) {
    try {
        const { title, content } = req.body;                                                    // Assuming req.body contains the note data
        const deletedNote = await Note.findByIdAndDelete(req.params.id);                    // Simulate deleting the note from a database
        if (!deletedNote) return res.status(404).json({ message: 'Note not found' });
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
