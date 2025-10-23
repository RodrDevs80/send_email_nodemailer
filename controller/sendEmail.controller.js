import sendEmail from "../service/nodemailer.service.js";

const enviarEmailController = async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        const result = await sendEmail(to, subject, text);
        if (result === "error") {
            return res.status(400).json({
                status: 400,
                error: `Error al enviar el email al correo: ${to}`
            })
        }

        res.status(200).json({
            status: 200,
            message: `Se envió de manera exitosa un email al correo: ${to}`
        })

    } catch (err) {
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
}

export default enviarEmailController;