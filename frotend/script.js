document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const student = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        curso: document.getElementById('curso').value,
        periodo: document.getElementById('periodo').value,
        turma: document.getElementById('turma').value,
        turno: document.getElementById('turno').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value
    };

    await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
    loadStudents();
});

async function loadStudents() {
    const res = await fetch('http://localhost:5000/students');
    const students = await res.json();
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.nome} - ${student.email}`;
        studentList.appendChild(li);
    });
}

loadStudents();
