/* FIZ PELO TYPESCRIPT PLAYGROUND */

class EmailSender {
    sendEmail(contact: string, message: string): void {
        if (this.validateContact(contact)) {
            console.log(`Enviando email para ${contact}: ${message}`);
        } else {
            console.log("Contato inválido. Não foi possível enviar o email.");
        }
    }

    private validateContact(contact: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(contact);
    }
}

const emailSender = new EmailSender();
emailSender.sendEmail("teste@email.com", "Mensagem de teste");
emailSender.sendEmail("emailinvalido", "Mensagem de erro");

class ContactValidator {
    validate(contact: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(contact);
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(contact: string, message: string): void {
        if (this.contactValidator.validate(contact)) {
            console.log(`Enviando email para ${contact}: ${message}`);
        } else {
            console.log("Contato inválido. Não foi possível enviar o email.");
        }
    }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

emailSender.sendEmail("teste@email.com", "Mensagem de teste");
emailSender.sendEmail("emailinvalido", "Mensagem de erro");

