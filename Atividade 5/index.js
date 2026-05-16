const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const feedbacks = [];

app.get("/", (req, res) => {
    res.send(`
        <h1>Enviar Feedback</h1>

        <form action="/feedbacks/enviar" method="POST">

            <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
            />

            <br><br>

            <textarea
                name="comentario"
                placeholder="Digite seu feedback"
                required
            ></textarea>

            <br><br>

            <button type="submit">
                Enviar
            </button>

        </form>

        <br>

        <a href="/feedbacks/lista">
            Ver feedbacks
        </a>
    `);
});

app.post("/feedbacks/enviar", (req, res) => {

    const { nome, comentario } = req.body;

    feedbacks.push({
        nome,
        comentario
    });

    res.redirect("/feedbacks/lista");
});

app.get("/feedbacks/lista", (req, res) => {

    let lista = "";

    feedbacks.forEach((feedback, index) => {

        lista += `
            <li>

                <strong>${feedback.nome}</strong>
                <br>

                ${feedback.comentario}

                <br><br>

                <form
                    action="/feedbacks/remover"
                    method="POST"
                >

                    <input
                        type="hidden"
                        name="index"
                        value="${index}"
                    />

                    <button type="submit">
                        Remover
                    </button>

                </form>

            </li>

            <br>
        `;
    });

    res.send(`
        <h1>Lista de Feedbacks</h1>

        <ul>
            ${lista}
        </ul>

        <a href="/">
            Voltar
        </a>
    `);
});

app.post("/feedbacks/remover", (req, res) => {

    const index = req.body.index;

    feedbacks.splice(index, 1);

    res.redirect("/feedbacks/lista");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});