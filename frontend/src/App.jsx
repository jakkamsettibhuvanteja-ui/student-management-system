
import { useEffect, useState } from "react";
import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "./services/studentService";

import "./App.css";

function App() {
    const initialForm = {
        rollNo: "",
        name: "",
        branch: "",
        year: "",
        marks: "",
        email: ""
    };

    const [students, setStudents] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch students when the page loads
    const fetchStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Add or update a student
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const studentData = {
                ...form,
                year: Number(form.year),
                marks: Number(form.marks)
            };

            if (editingId) {
                await updateStudent(editingId, studentData);
                setMessage("Student updated successfully!");
            } else {
                await addStudent(studentData);
                setMessage("Student added successfully!");
            }

            setForm(initialForm);
            setEditingId(null);
            await fetchStudents();

        } catch (error) {
            setMessage(error.message);
        }
    };

    // Load student details into the form
    const handleEdit = (student) => {
        setForm({
            rollNo: student.rollNo,
            name: student.name,
            branch: student.branch,
            year: student.year,
            marks: student.marks,
            email: student.email
        });

        setEditingId(student._id);
        setMessage("");
    };

    // Delete a student
    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmed) return;

        try {
            await deleteStudent(id);
            setMessage("Student deleted successfully!");
            await fetchStudents();
        } catch (error) {
            setMessage(error.message);
        }
    };

    // Cancel editing
    const handleCancel = () => {
        setForm(initialForm);
        setEditingId(null);
        setMessage("");
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Student Management System</h1>
                <p>Manage student records efficiently</p>
            </header>

            <main className="container">
                <section className="form-section">
                    <h2>
                        {editingId ? "Update Student" : "Add New Student"}
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="rollNo"
                            placeholder="Roll Number"
                            value={form.rollNo}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="name"
                            placeholder="Student Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="branch"
                            placeholder="Branch"
                            value={form.branch}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="year"
                            type="number"
                            placeholder="Year"
                            min="1"
                            value={form.year}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="marks"
                            type="number"
                            placeholder="Marks"
                            min="0"
                            max="100"
                            value={form.marks}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            {editingId ? "Update Student" : "Add Student"}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}
                    </form>

                    {message && <p className="message">{message}</p>}
                </section>

                <section className="table-section">
                    <h2>Student Records</h2>

                    {loading ? (
                        <p>Loading students...</p>
                    ) : students.length === 0 ? (
                        <p>No student records found. Add your first student!</p>
                    ) : (
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Roll No</th>
                                        <th>Name</th>
                                        <th>Branch</th>
                                        <th>Year</th>
                                        <th>Marks</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student._id}>
                                            <td>{student.rollNo}</td>
                                            <td>{student.name}</td>
                                            <td>{student.branch}</td>
                                            <td>{student.year}</td>
                                            <td>{student.marks}</td>
                                            <td>{student.email}</td>
                                            <td>
                                                <button
                                                    className="edit-btn"
                                                    onClick={() => handleEdit(student)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(student._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
