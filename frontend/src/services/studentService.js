
const API_URL = "http://localhost:5000/api/students";

// Get all students
export const getStudents = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch students");
    return response.json();
};

// Add a student
export const addStudent = async (student) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return response.json();
};

// Update a student
export const updateStudent = async (id, student) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return response.json();
};

// Delete a student
export const deleteStudent = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return response.json();
};
